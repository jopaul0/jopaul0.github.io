import styles from "./SimpleButton.module.scss";
import type { SimpleButtonProps } from "./interface";

export const SimpleButton = ({outline=false, label, onClick = () => {}, className = "", disable = false}:SimpleButtonProps) => {

    const buttonClass = [
        styles.buttonPrimary,
        outline ? styles.outline : "",
        className
    ].filter(Boolean).join(" ");


    return(
        <button onClick={onClick} className={buttonClass} disabled={disable}>
            {label}
        </button>
    );
}