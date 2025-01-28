import './PlusesCard.scss';
function PlusesCard(props) {
    return (
        <article className="pluses__card">
            <span className="stats-card__icon" dangerouslySetInnerHTML={{ __html: props.img }} />
            <h3>{props.name}</h3>
            <p>{props.text}</p>
        </article>
    );
}

export default PlusesCard;
