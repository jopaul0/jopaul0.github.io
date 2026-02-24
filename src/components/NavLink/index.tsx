import type { NavLinkProps } from "./interface";
import styles from "./NavLink.module.scss";

export const NavLink = ({ children, className = "", href = "#", target = "" }: NavLinkProps) => {

    const linkClass = [
        styles.navLinks,
        className
    ].filter(Boolean).join(" ");
    return (
        <a className={linkClass} href={href} target={target}>{children}</a>
    );
}