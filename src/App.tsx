import { Navbar }  from '@/components/Navbar'
import { Cursor }  from '@/components/Cursor'

function App() {

  return (
    <>
      <Navbar />
      <Cursor />
      <main style={{ paddingTop: '120px', padding: '120px 60px' }}>
        {/* O conteúdo das próximas fases entrará aqui */}
        <h1>Conteúdo Inicial</h1>
      </main>
    </>
  )
}

export default App
