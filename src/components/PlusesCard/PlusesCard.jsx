import './PlusesCard.scss';
function PlusesCard(props) {
    return (
        <article className="pluses__card">
            <h3>{props.name}</h3>
            <p>{props.text}</p>
        </article>
    );
}

export default PlusesCard;
