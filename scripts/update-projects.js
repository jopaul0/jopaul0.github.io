import fs from 'fs';
import path from 'path';

const USERNAME = 'jopaul0';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; 

async function fetchPortfolioProjects() {
  try {
    console.log(`A procurar repositórios de ${USERNAME}...`);

    if (!GITHUB_TOKEN) {
      console.warn("Aviso: Para testar localmente, defina a variável GITHUB_TOKEN. O GraphQL exige autenticação.");
    }

    // Obter os repositórios fixados (Pinned) usando a API GraphQL
    let pinnedRepos = [];
    if (GITHUB_TOKEN) {
      const graphqlQuery = {
        query: `
          {
            user(login: "${USERNAME}") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    name
                  }
                }
              }
            }
          }
        `
      };

      const graphqlResponse = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(graphqlQuery)
      });

      if (graphqlResponse.ok) {
        const graphqlData = await graphqlResponse.json();
        pinnedRepos = graphqlData.data.user.pinnedItems.nodes.map(repo => repo.name);
        console.log(`Repositórios fixados encontrados: ${pinnedRepos.join(', ')}`);
      } else {
        console.error('Erro ao procurar repositórios fixados no GraphQL.');
      }
    }

    // Obter todos os repositórios públicos
    const response = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        ...(GITHUB_TOKEN && { 'Authorization': `token ${GITHUB_TOKEN}` })
      }
    });

    if (!response.ok) throw new Error(`Erro na API REST do GitHub: ${response.statusText}`);
    
    const repos = await response.json();
    
    // Filtra apenas os que têm a tag 'portfolio-project'
    const portfolioRepos = repos.filter(repo => repo.topics && repo.topics.includes('portfolio-project'));
    console.log(`🎯 Encontrados ${portfolioRepos.length} repositórios com a tag 'portfolio-project'.`);

    const projectsData = [];

    // Percorre cada repositório encontrado e descarrega o JSON
    for (const repo of portfolioRepos) {
      const branch = repo.default_branch;
      const jsonUrl = `https://raw.githubusercontent.com/${USERNAME}/${repo.name}/${branch}/docs/portfolio.json`;
      
      console.log(`A ler dados de: ${repo.name}`);
      
      const jsonResponse = await fetch(jsonUrl);
      if (jsonResponse.ok) {
        const projectData = await jsonResponse.json();
        // Adicionamos o nome do repositório temporariamente para ajudar na ordenação
        projectData._repoName = repo.name;
        projectsData.push(projectData);
      } else {
        console.warn(`portfolio.json não encontrado em ${repo.name} (branch: ${branch})`);
      }
    }

    // Lógica de Ordenação
    projectsData.sort((a, b) => {
      const indexA = pinnedRepos.indexOf(a._repoName);
      const indexB = pinnedRepos.indexOf(b._repoName);

      const isAPinned = indexA !== -1;
      const isBPinned = indexB !== -1;

      // Se ambos estão fixados, mantém a ordem em que aparecem no seu perfil do GitHub
      if (isAPinned && isBPinned) return indexA - indexB;
      // Se apenas o A é fixado, ele vai para cima
      if (isAPinned && !isBPinned) return -1;
      // Se apenas o B é fixado, ele vai para cima
      if (!isAPinned && isBPinned) return 1;
      
      // Se nenhum dos dois é fixado, ficam na ordem em que a API os devolveu (geralmente por atualização)
      return 0; 
    });

    // Limpar a propriedade temporária "_repoName" para manter o JSON final limpo
    projectsData.forEach(p => delete p._repoName);

    // Guardar o ficheiro final na pasta correta do seu projeto
    const outputPath = path.resolve(process.cwd(), 'src', 'data', 'projects.json');
    fs.writeFileSync(outputPath, JSON.stringify(projectsData, null, 2));
    
    console.log(`Sucesso! ${projectsData.length} projetos atualizados em src/data/projects.json`);

  } catch (error) {
    console.error('Erro ao atualizar projetos:', error);
    process.exit(1);
  }
}

fetchPortfolioProjects();