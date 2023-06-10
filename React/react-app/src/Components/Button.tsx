

interface Props {
    text: string;
}


function Button ({text}: Props) {
    return (
        <div className="btn btn-warning">{text}</div>
    )
}

export default Button;