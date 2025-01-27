import './RulesCard.scss';
function RulesCard(props) {
    return (
        <article className="rules__card">
            <div className="rules__circle"></div>
            <div className="card__content">
                <h3>{props.name}</h3>
                <p>{props.text}</p>
            </div>
        </article>
    );
}

export default RulesCard;
