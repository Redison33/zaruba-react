import './ServicesCard.scss';
function ServicesCard(props) {
    return (
        <article className="services__card">
            <h3>{props.name}</h3>
            <ul>
                {props.possibilities.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <div className="card__wrap">
                <p>{props.price}</p>
                <button>Купить</button>
            </div>
        </article>
    );
}

export default ServicesCard;
