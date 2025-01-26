import { useState } from 'react';
import './Home.scss';
import StatsCard from '@/components/StatsCard/StatsCard.jsx';
function App() {
    const [count, setCount] = useState(0);
    const statsCardData = [
        {
            name: 'Статистика №1',
            count: '9 999 999 999',
        },
        {
            name: 'Статистика №2',
            count: '9 999 999 999',
        },
        {
            name: 'Статистика №3',
            count: '9 999 999 999',
        },
        {
            name: 'Статистика №4',
            count: '9 999 999 999',
        },
    ];
    return (
        <main>
            <section className="welcome">
                <div className="welcome__container container">
                    <h1 className="welcome__title">
                        Добро пожаловать <br /> на ZARUBA SQUAD
                    </h1>
                    <p className="welcome__text">
                        Присоединяйтесь к одному из самых увлекательных игровых сообществ! Серверы ZARUBA предоставляют уникальные возможности для
                        тактической командной игры. Погрузитесь в реалистичные сражения, улучшайте свои навыки и станьте частью нашего комьюнити
                    </p>
                    <div className="welcome__buttons">
                        <button className="welcome__button">Играть!</button>
                        <button className="welcome__button">Правила</button>
                    </div>
                </div>
            </section>
            <section className="stats">
                <div className="stats__container container">
                    {statsCardData.map((item, index) => (
                        <StatsCard props={item} key={index} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default App;
