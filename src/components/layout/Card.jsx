import "./Card.css"
import react from 'react'

export default props => {

const cardStyle = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || "#F00",
}
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">Conteúdo</div>
            {props.children}
        </div>
    )
}