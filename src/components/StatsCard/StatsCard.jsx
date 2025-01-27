import './StatsCard.scss';
function StatsCard(props) {
    return (
        <article className="stats__card">
            <h3>
                <span className="stats-card__icon" dangerouslySetInnerHTML={{ __html: props.img }} />
                {props.name}
            </h3>
            <p>{props.count}</p>
        </article>
    );
}

export default StatsCard;
