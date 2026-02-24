export interface SimpleButtonProps{
    label: string;
    outline?: boolean;
    onClick?: () => void;
    className?: string;
    disable?: boolean;
}