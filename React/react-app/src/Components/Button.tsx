



interface Props {
    children: string;
    color?: 'secondary';
    onClick: () => void;
}



const Button = ({children, color = 'secondary', onClick}: Props) => {
    return (
    <div className={"btn btn-" + color} onClick={onClick}>{children}</div>
    )
};

export default Button;