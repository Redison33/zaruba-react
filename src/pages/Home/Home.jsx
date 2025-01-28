// import { useState } from 'react';
import './Home.scss';
import StatsCard from '@/components/StatsCard/StatsCard.jsx';
import PlusesCard from '@/components/PlusesCard/PlusesCard.jsx';
import ServicesCard from '@/components/ServicesCard/ServicesCard.jsx';
import RulesCard from '@/components/RulesCard/RulesCard';
import ListTab from '@/components/ListTab/ListTab.jsx';
function App() {
    // const [count, setCount] = useState(0);
    const statsCardData = [
        {
            name: 'Статистика №1',
            count: '9 999 999 999',
            img: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="vuesax/bold/radar"><g id="radar"><path id="Vector" d="M21.0009 25.165C23.3012 25.165 25.1659 23.3003 25.1659 21C25.1659 18.6998 23.3012 16.835 21.0009 16.835C18.7007 16.835 16.8359 18.6998 16.8359 21C16.8359 23.3003 18.7007 25.165 21.0009 25.165Z" fill="white"/><path id="Vector_2" d="M35.0005 32.8125C34.7205 32.8125 34.458 32.725 34.213 32.55C33.6355 32.1125 33.513 31.29 33.9505 30.7125C36.068 27.895 37.188 24.535 37.188 21C37.188 17.465 36.068 14.105 33.9505 11.2875C33.513 10.71 33.6355 9.88749 34.213 9.44999C34.7905 9.01249 35.613 9.13499 36.0505 9.71249C38.518 12.985 39.813 16.8875 39.813 21C39.813 25.1125 38.518 29.015 36.0505 32.2875C35.788 32.6375 35.403 32.8125 35.0005 32.8125Z" fill="white"/><path id="Vector_3" d="M7 32.8125C6.5975 32.8125 6.2125 32.6375 5.95 32.2875C3.4825 29.015 2.1875 25.1125 2.1875 21C2.1875 16.8875 3.4825 12.985 5.95 9.71249C6.3875 9.13499 7.21 9.01249 7.7875 9.44999C8.365 9.88749 8.4875 10.71 8.05 11.2875C5.9325 14.105 4.8125 17.465 4.8125 21C4.8125 24.535 5.9325 27.895 8.05 30.7125C8.4875 31.29 8.365 32.1125 7.7875 32.55C7.56 32.725 7.28 32.8125 7 32.8125Z" fill="white"/><path id="Vector_4" d="M29.4009 28.6125C29.1209 28.6125 28.8584 28.525 28.6134 28.35C28.0359 27.9125 27.9134 27.09 28.3509 26.5125C29.5584 24.92 30.1884 23.0125 30.1884 21C30.1884 18.9875 29.5584 17.08 28.3509 15.4875C27.9134 14.91 28.0359 14.0875 28.6134 13.65C29.1909 13.2125 30.0134 13.335 30.4509 13.9125C31.9909 15.9775 32.8134 18.4275 32.8134 21C32.8134 23.5725 31.9909 26.04 30.4509 28.0875C30.1884 28.4375 29.8034 28.6125 29.4009 28.6125Z" fill="white"/><path id="Vector_5" d="M12.6 28.6125C12.1975 28.6125 11.8125 28.4375 11.55 28.0875C10.01 26.04 9.1875 23.5725 9.1875 21C9.1875 18.4275 10.01 15.96 11.55 13.9125C11.9875 13.335 12.81 13.2125 13.3875 13.65C13.965 14.0875 14.0875 14.91 13.65 15.4875C12.4425 17.08 11.8125 18.9875 11.8125 21C11.8125 23.0125 12.4425 24.92 13.65 26.5125C14.0875 27.09 13.965 27.9125 13.3875 28.35C13.16 28.525 12.88 28.6125 12.6 28.6125Z" fill="white"/></g></g></svg>',
        },
        {
            name: 'Статистика №2',
            count: '9 999 999 999',
            img: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="vuesax/bold/lamp-charge"><g id="lamp-charge"><path id="Vector" d="M26.7045 38.5C26.5995 38.5 26.477 38.4825 26.372 38.4475C22.8545 37.45 19.162 37.45 15.6445 38.4475C14.997 38.6225 14.3145 38.255 14.1395 37.6075C13.947 36.96 14.332 36.2775 14.9795 36.1025C18.9345 34.9825 23.0995 34.9825 27.0545 36.1025C27.702 36.295 28.087 36.96 27.8945 37.6075C27.7195 38.15 27.2295 38.5 26.7045 38.5Z" fill="white"/><path id="Vector_2" d="M33.6173 11.13C31.7973 7.45502 28.2798 4.74252 24.2023 3.85002C19.9323 2.90502 15.5573 3.92002 12.2148 6.61502C8.85477 9.29252 6.94727 13.3 6.94727 17.5875C6.94727 22.12 9.65977 26.8625 13.7548 29.61V31.0625C13.7373 31.5525 13.7198 32.305 14.3148 32.9175C14.9273 33.5475 15.8373 33.6175 16.5548 33.6175H25.5323C26.4773 33.6175 27.1948 33.355 27.6848 32.865C28.3498 32.1825 28.3323 31.3075 28.3148 30.835V29.61C33.7398 25.9525 37.1523 18.235 33.6173 11.13ZM24.0098 20.335L22.1373 23.59C21.8923 24.01 21.4548 24.255 20.9998 24.255C20.7723 24.255 20.5448 24.2025 20.3523 24.08C19.7223 23.7125 19.5123 22.9075 19.8623 22.295L21.3498 19.705H19.8798C19.0048 19.705 18.2873 19.32 17.9023 18.6725C17.5173 18.0075 17.5523 17.2025 17.9898 16.4325L19.8623 13.1775C20.2298 12.5475 21.0348 12.3375 21.6473 12.6875C22.2773 13.055 22.4873 13.86 22.1373 14.4725L20.6498 17.0625H22.1198C22.9948 17.0625 23.7123 17.4475 24.0973 18.095C24.4823 18.76 24.4473 19.5825 24.0098 20.335Z" fill="white"/></g></g></svg>',
        },
        {
            name: 'Статистика №3',
            count: '9 999 999 999',
            img: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="vuesax/bold/lamp-charge"><g id="lamp-charge"><path id="Vector" d="M26.7045 38.5C26.5995 38.5 26.477 38.4825 26.372 38.4475C22.8545 37.45 19.162 37.45 15.6445 38.4475C14.997 38.6225 14.3145 38.255 14.1395 37.6075C13.947 36.96 14.332 36.2775 14.9795 36.1025C18.9345 34.9825 23.0995 34.9825 27.0545 36.1025C27.702 36.295 28.087 36.96 27.8945 37.6075C27.7195 38.15 27.2295 38.5 26.7045 38.5Z" fill="white"/><path id="Vector_2" d="M33.6173 11.13C31.7973 7.45502 28.2798 4.74252 24.2023 3.85002C19.9323 2.90502 15.5573 3.92002 12.2148 6.61502C8.85477 9.29252 6.94727 13.3 6.94727 17.5875C6.94727 22.12 9.65977 26.8625 13.7548 29.61V31.0625C13.7373 31.5525 13.7198 32.305 14.3148 32.9175C14.9273 33.5475 15.8373 33.6175 16.5548 33.6175H25.5323C26.4773 33.6175 27.1948 33.355 27.6848 32.865C28.3498 32.1825 28.3323 31.3075 28.3148 30.835V29.61C33.7398 25.9525 37.1523 18.235 33.6173 11.13ZM24.0098 20.335L22.1373 23.59C21.8923 24.01 21.4548 24.255 20.9998 24.255C20.7723 24.255 20.5448 24.2025 20.3523 24.08C19.7223 23.7125 19.5123 22.9075 19.8623 22.295L21.3498 19.705H19.8798C19.0048 19.705 18.2873 19.32 17.9023 18.6725C17.5173 18.0075 17.5523 17.2025 17.9898 16.4325L19.8623 13.1775C20.2298 12.5475 21.0348 12.3375 21.6473 12.6875C22.2773 13.055 22.4873 13.86 22.1373 14.4725L20.6498 17.0625H22.1198C22.9948 17.0625 23.7123 17.4475 24.0973 18.095C24.4823 18.76 24.4473 19.5825 24.0098 20.335Z" fill="white"/></g></g></svg>',
        },
        {
            name: 'Статистика №4',
            count: '9 999 999 999',
            img: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="vuesax/bold/profile-2user"><g id="profile-2user"><path id="Vector" d="M15.75 3.5C11.165 3.5 7.4375 7.2275 7.4375 11.8125C7.4375 16.31 10.955 19.95 15.54 20.1075C15.68 20.09 15.82 20.09 15.925 20.1075C15.96 20.1075 15.9775 20.1075 16.0125 20.1075C16.03 20.1075 16.03 20.1075 16.0475 20.1075C20.5275 19.95 24.045 16.31 24.0625 11.8125C24.0625 7.2275 20.335 3.5 15.75 3.5Z" fill="white"/><path id="Vector_2" d="M24.6397 24.7625C19.7572 21.5075 11.7947 21.5075 6.87719 24.7625C4.65469 26.25 3.42969 28.2625 3.42969 30.415C3.42969 32.5675 4.65469 34.5625 6.85969 36.0325C9.30969 37.6775 12.5297 38.5 15.7497 38.5C18.9697 38.5 22.1897 37.6775 24.6397 36.0325C26.8447 34.545 28.0697 32.55 28.0697 30.38C28.0522 28.2275 26.8447 26.2325 24.6397 24.7625Z" fill="white"/><path id="Vector_3" d="M34.9834 12.845C35.2634 16.24 32.8484 19.215 29.5059 19.6175C29.4884 19.6175 29.4884 19.6175 29.4709 19.6175H29.4184C29.3134 19.6175 29.2084 19.6175 29.1209 19.6525C27.4234 19.74 25.8659 19.1975 24.6934 18.2C26.4959 16.59 27.5284 14.175 27.3184 11.55C27.1959 10.1325 26.7059 8.83749 25.9709 7.73499C26.6359 7.40249 27.4059 7.19249 28.1934 7.12249C31.6234 6.82499 34.6859 9.37999 34.9834 12.845Z" fill="white"/><path id="Vector_4" d="M38.4824 29.0325C38.3424 30.73 37.2574 32.2 35.4374 33.1975C33.6874 34.16 31.4824 34.615 29.2949 34.5625C30.5549 33.425 31.2899 32.0075 31.4299 30.5025C31.6049 28.3325 30.5724 26.25 28.5074 24.5875C27.3349 23.66 25.9699 22.925 24.4824 22.3825C28.3499 21.2625 33.2149 22.015 36.2074 24.43C37.8174 25.725 38.6399 27.3525 38.4824 29.0325Z" fill="white"/></g></g></svg>',
        },
    ];
    const plusesCardData = [
        {
            name: 'Стабильная работа серверов',
            text: 'Никаких лагов или разрывов соединения. Только плавный игровой процесс.',
            img: '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"><path opacity="0.4" d="M15.75 3.5C11.165 3.5 7.4375 7.2275 7.4375 11.8125C7.4375 16.31 10.955 19.95 15.54 20.1075C15.68 20.09 15.82 20.09 15.925 20.1075C15.96 20.1075 15.9775 20.1075 16.0125 20.1075C16.03 20.1075 16.03 20.1075 16.0475 20.1075C20.5275 19.95 24.045 16.31 24.0625 11.8125C24.0625 7.2275 20.335 3.5 15.75 3.5Z" fill="#FF7D00"/><path d="M24.6397 24.7625C19.7572 21.5075 11.7947 21.5075 6.87719 24.7625C4.65469 26.25 3.42969 28.2625 3.42969 30.415C3.42969 32.5675 4.65469 34.5625 6.85969 36.0325C9.30969 37.6775 12.5297 38.5 15.7497 38.5C18.9697 38.5 22.1897 37.6775 24.6397 36.0325C26.8447 34.545 28.0697 32.55 28.0697 30.38C28.0522 28.2275 26.8447 26.2325 24.6397 24.7625Z" fill="#FF7D00"/><path opacity="0.4" d="M34.9834 12.8449C35.2634 16.2399 32.8484 19.2149 29.5059 19.6174C29.4884 19.6174 29.4884 19.6174 29.4709 19.6174H29.4184C29.3134 19.6174 29.2084 19.6174 29.1209 19.6524C27.4234 19.7399 25.8659 19.1974 24.6934 18.1999C26.4959 16.5899 27.5284 14.1749 27.3184 11.5499C27.1959 10.1324 26.7059 8.83743 25.9709 7.73493C26.6359 7.40243 27.4059 7.19243 28.1934 7.12243C31.6234 6.82493 34.6859 9.37993 34.9834 12.8449Z" fill="#FF7D00"/><path d="M38.4824 29.0325C38.3424 30.73 37.2574 32.2 35.4374 33.1975C33.6874 34.16 31.4824 34.615 29.2949 34.5625C30.5549 33.425 31.2899 32.0075 31.4299 30.5025C31.6049 28.3325 30.5724 26.25 28.5074 24.5875C27.3349 23.66 25.9699 22.925 24.4824 22.3825C28.3499 21.2625 33.2149 22.015 36.2074 24.43C37.8174 25.725 38.6399 27.3525 38.4824 29.0325Z" fill="#FF7D00"/></svg>',
        },
        {
            name: 'Сильное сообщество',
            text: 'Мы объединяем игроков, которые ценят уважение и командную игру.',
            img: '<svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none"><path d="M16.416 3.5C11.831 3.5 8.10352 7.2275 8.10352 11.8125C8.10352 16.31 11.621 19.95 16.206 20.1075C16.346 20.09 16.486 20.09 16.591 20.1075C16.626 20.1075 16.6435 20.1075 16.6785 20.1075C16.696 20.1075 16.696 20.1075 16.7135 20.1075C21.1935 19.95 24.711 16.31 24.7285 11.8125C24.7285 7.2275 21.001 3.5 16.416 3.5Z" fill="#191919"/><path d="M25.3057 24.7625C20.4232 21.5075 12.4607 21.5075 7.5432 24.7625C5.3207 26.25 4.0957 28.2625 4.0957 30.415C4.0957 32.5675 5.3207 34.5625 7.5257 36.0325C9.9757 37.6775 13.1957 38.5 16.4157 38.5C19.6357 38.5 22.8557 37.6775 25.3057 36.0325C27.5107 34.545 28.7357 32.55 28.7357 30.38C28.7182 28.2275 27.5107 26.2325 25.3057 24.7625Z" fill="#191919"/><path d="M35.6494 12.8449C35.9294 16.2399 33.5144 19.2149 30.1719 19.6174C30.1544 19.6174 30.1544 19.6174 30.1369 19.6174H30.0844C29.9794 19.6174 29.8744 19.6174 29.7869 19.6524C28.0894 19.7399 26.5319 19.1974 25.3594 18.1999C27.1619 16.5899 28.1944 14.1749 27.9844 11.5499C27.8619 10.1324 27.3719 8.83743 26.6369 7.73493C27.3019 7.40243 28.0719 7.19243 28.8594 7.12243C32.2894 6.82493 35.3519 9.37993 35.6494 12.8449Z" fill="#191919"/><path d="M39.1484 29.0325C39.0084 30.73 37.9234 32.2 36.1034 33.1975C34.3534 34.16 32.1484 34.615 29.9609 34.5625C31.2209 33.425 31.9559 32.0075 32.0959 30.5025C32.2709 28.3325 31.2384 26.25 29.1734 24.5875C28.0009 23.66 26.6359 22.925 25.1484 22.3825C29.0159 21.2625 33.8809 22.015 36.8734 24.43C38.4834 25.725 39.3059 27.3525 39.1484 29.0325Z" fill="#191919"/></svg>',
        },
        {
            name: 'Круглосуточная поддержка',
            text: 'Наша команда всегда готова помочь с любыми вопросами или проблемами.',
            img: '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"><path opacity="0.4" d="M15.75 3.5C11.165 3.5 7.4375 7.2275 7.4375 11.8125C7.4375 16.31 10.955 19.95 15.54 20.1075C15.68 20.09 15.82 20.09 15.925 20.1075C15.96 20.1075 15.9775 20.1075 16.0125 20.1075C16.03 20.1075 16.03 20.1075 16.0475 20.1075C20.5275 19.95 24.045 16.31 24.0625 11.8125C24.0625 7.2275 20.335 3.5 15.75 3.5Z" fill="#FF7D00"/><path d="M24.6397 24.7625C19.7572 21.5075 11.7947 21.5075 6.87719 24.7625C4.65469 26.25 3.42969 28.2625 3.42969 30.415C3.42969 32.5675 4.65469 34.5625 6.85969 36.0325C9.30969 37.6775 12.5297 38.5 15.7497 38.5C18.9697 38.5 22.1897 37.6775 24.6397 36.0325C26.8447 34.545 28.0697 32.55 28.0697 30.38C28.0522 28.2275 26.8447 26.2325 24.6397 24.7625Z" fill="#FF7D00"/><path opacity="0.4" d="M34.9834 12.8449C35.2634 16.2399 32.8484 19.2149 29.5059 19.6174C29.4884 19.6174 29.4884 19.6174 29.4709 19.6174H29.4184C29.3134 19.6174 29.2084 19.6174 29.1209 19.6524C27.4234 19.7399 25.8659 19.1974 24.6934 18.1999C26.4959 16.5899 27.5284 14.1749 27.3184 11.5499C27.1959 10.1324 26.7059 8.83743 25.9709 7.73493C26.6359 7.40243 27.4059 7.19243 28.1934 7.12243C31.6234 6.82493 34.6859 9.37993 34.9834 12.8449Z" fill="#FF7D00"/><path d="M38.4824 29.0325C38.3424 30.73 37.2574 32.2 35.4374 33.1975C33.6874 34.16 31.4824 34.615 29.2949 34.5625C30.5549 33.425 31.2899 32.0075 31.4299 30.5025C31.6049 28.3325 30.5724 26.25 28.5074 24.5875C27.3349 23.66 25.9699 22.925 24.4824 22.3825C28.3499 21.2625 33.2149 22.015 36.2074 24.43C37.8174 25.725 38.6399 27.3525 38.4824 29.0325Z" fill="#FF7D00"/></svg>',
        },
    ];
    const servicesCardData = [
        {
            name: 'VIP (персональный)',
            price: '200 ₽',
            possibilities: ['Вход на сервера без очереди', 'Смена сторон', 'Роль VIP в дискорде “ZARUBA'],
        },
        {
            name: 'Клан VIP (начальный)',
            price: '600 ₽',
            possibilities: [
                'до 15 человек',
                'Вход на сервера без очереди',
                'Смена сторон',
                'Роль VIP в дискорде “ZARUBA',
                'Управление кланом через Discord',
            ],
        },
        {
            name: 'Клан VIP (расширенный)',
            price: '1200 ₽',
            possibilities: [
                'до 30 человек',
                'Вход на сервера без очереди',
                'Смена сторон',
                'Кастомный префикс на сервере',
                'Роль VIP в дискорде “ZARUBA',
                'Управление кланом через Discord',
            ],
        },
    ];
    const rulesCardData = [
        {
            name: 'Правило 1',
            text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
        },
        {
            name: 'Правило 2',
            text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
        },
        {
            name: 'Правило 3',
            text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
        },
        {
            name: 'Правило 4',
            text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
        },
        {
            name: 'Правило 5',
            text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
        },
        {
            name: 'Правило 6',
            text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
        },
    ];
    const listTabData = [
        {
            name: 'Заголовок 1',
            text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
            img: 'src/assets/img/moments1.jpg',
        },
        {
            name: 'Заголовок 2',
            text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
            img: 'src/assets/img/moments1.jpg',
        },
        {
            name: 'Заголовок 3',
            text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
            img: 'src/assets/img/moments1.jpg',
        },
        {
            name: 'Заголовок 4',
            text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
            img: 'src/assets/img/moments1.jpg',
        },
        {
            name: 'Заголовок 5',
            text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
            img: 'src/assets/img/moments1.jpg',
        },
        {
            name: 'Заголовок 6',
            text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
            img: 'src/assets/img/moments1.jpg',
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
                        <StatsCard name={item.name} count={item.count} img={item.img} key={index} />
                    ))}
                </div>
            </section>
            <section className="about">
                <div className="about__container container">
                    <h2 className="about__title">О Нас</h2>
                    <p className="about__text">
                        Мы создали ZARUBA для тех, кто ценит настоящую командную игру. Наши серверы работают 24/7. Мы активно развиваем проект,
                        разрабатываем и добавляем новые плагины, а также поддерживаем вас в каждом бою!
                    </p>
                </div>
                <div className="about__circle"></div>
            </section>
            <section className="pluses">
                <div className="pluses__container container">
                    {plusesCardData.map((item, index) => (
                        <PlusesCard name={item.name} text={item.text} img={item.img} key={index} />
                    ))}
                </div>
            </section>
            <section className="play" id="play">
                <div className="play__container container">
                    <h2 className="play__title">Как играть?</h2>
                    <p className="play__text">
                        Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                        текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                    </p>
                    <ListTab data={listTabData} />
                </div>
            </section>
            <section className="services">
                <div className="services__container container">
                    <h2 className="services__title">Покупка VIP</h2>
                    <p className="services__text">
                        "Стань VIP и забудь про ожидание! VIP статус позволяет заходить на игровые серверы без очереди. Наслаждайся комфортом и
                        игровым процессом без лишних задержек!"
                    </p>
                    <div className="services__cards">
                        {servicesCardData.map((item, index) => (
                            <ServicesCard name={item.name} price={item.price} possibilities={item.possibilities} key={index} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="rules" id="rules">
                <div className="rules__container container">
                    <span className="rules__tag">Выжить любой ценой!</span>
                    <h2 className="rules__title">Правила игры</h2>
                    <p className="rules__text">Не знание правил не освобождает от ответственности!</p>
                    <button className="rules__button">К правилам</button>
                    <div className="rules__cards">
                        {rulesCardData.map((item, index) => (
                            <RulesCard name={item.name} text={item.text} key={index} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="online">
                <div className="online__container container">
                    <h2 className="online__title">Более 110 тысяч игровых серверов</h2>
                    <p className="online__text">
                        Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                        текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                    </p>
                    <button className="online__button">Начать играть</button>
                    <img src="/src/assets/img/online.svg" alt="" />
                </div>
            </section>
            <section className="moments">
                <div className="moments__container container">
                    <div className="moments__imgs">
                        <div className="moments__imgs-left">
                            <img src="src/assets/img/moments1.jpg" alt="" />
                            <img src="src/assets/img/moments2.jpg" alt="" />
                            <img src="src/assets/img/moments1.jpg" alt="" />
                            <img src="src/assets/img/moments2.jpg" alt="" />
                            <img src="src/assets/img/moments1.jpg" alt="" />
                            <img src="src/assets/img/moments2.jpg" alt="" />
                            <img src="src/assets/img/moments1.jpg" alt="" />
                        </div>
                        <div className="moments__imgs-right">
                            <img src="src/assets/img/moments2.jpg" alt="" />
                            <img src="src/assets/img/moments1.jpg" alt="" />
                            <img src="src/assets/img/moments2.jpg" alt="" />
                            <img src="src/assets/img/moments1.jpg" alt="" />
                            <img src="src/assets/img/moments2.jpg" alt="" />
                            <img src="src/assets/img/moments1.jpg" alt="" />
                            <img src="src/assets/img/moments2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="moments__content">
                        <h2 className="moments__title">Лучшие моменты сервера</h2>
                        <p className="moments__text">
                            Стань частью истории игры! Присылай свои лучшие скриншоты, и каждый месяц мы будем выбирать самые крутые кадры для
                            размещения на сайте. Покажи всем свои игровые моменты и вдохновляй других!
                        </p>
                        <p className="moments__quest">Как прислать свой стриншот?</p>
                        <p className="moments__info">
                            Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                        </p>
                        <button className="moments__button">Прислать скриншот</button>
                    </div>
                </div>
            </section>
            <section className="start">
                <div className="start__container container">
                    <img src="src/assets/img/moments1.jpg" alt="" />
                    <div className="start__content">
                        <h2 className="start__title">Играть вместе веселее!</h2>
                        <p className="start__text">
                            В любой компании «Убежище» превращается в уникальный социальный эксперимент. Проверь, кто из ваших друзей настоящий
                            стратег!
                        </p>
                        <button className="start__button">Начать играть</button>
                    </div>
                </div>
            </section>
            <section className="faq">
                <div className="faq__container container">
                    <h2 className="faq__title">Часто задаваемые вопросы</h2>
                    <div className="faq__cards">
                        <article className="faq__card">
                            <h3>Что нужно для игры?</h3>
                            <p>
                                Для игры вам потребуется компьютер или ноутбук с доступом в интернет. Также важно собрать команду из 4–16 человек.
                                Если друзей онлайн нет, можно найти соперников через игру.
                            </p>
                        </article>
                        <article className="faq__card">
                            <h3>Можно ли играть бесплатно?</h3>
                            <p>Да, игра абсолютно бесплатна! Вам доступны все основные механики и карты.</p>
                        </article>
                        <article className="faq__card">
                            <h3>Сколько времени занимает одна партия?</h3>
                            <p>
                                В среднем одна игра длится от 30 до 60 минут. Это зависит от количества игроков, сложности катастрофы и скорости
                                обсуждений. Чем больше участников, тем более захватывающей и динамичной становится игра!
                            </p>
                        </article>
                        <article className="faq__card">
                            <h3>Можно ли играть на мобильном устройстве?</h3>
                            <p>
                                Пока что игра доступна только на компьютерах и ноутбуках. Однако мы активно работаем над созданием мобильной версии,
                                чтобы вы могли наслаждаться игрой где угодно.
                            </p>
                        </article>
                        <article className="faq__card">
                            <h3>Как работает голосование?</h3>
                            <p>
                                В конце каждого раунда игроки голосуют, чтобы исключить одного участника из убежища. Голосование проходит анонимно,
                                чтобы сохранить интригу. Решения принимаются на основе обсуждений, открытых карт и личных стратегий каждого игрока.
                            </p>
                        </article>
                        <article className="faq__card">
                            <h3>Можно ли играть бесплатно?</h3>
                            <p>
                                Да, базовая версия игры абсолютно бесплатна! В неё входят все основные механики и карты. Для желающих доступны
                                дополнительные платные наборы карт и функции для разнообразия игрового процесса.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
            <section className="boosty" id="boosty">
                <div className="boosty__container container">
                    <div className="boosty__content">
                        <h2 className="boosty__title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" fill="none">
                                <path
                                    d="M108.56 102.162C108.56 116.713 95.7733 128.509 80 128.509C64.2268 128.509 51.44 116.713 51.44 102.162C51.44 92.3714 56.4883 82.5807 60.5817 76.2513C62.6644 73.0307 63.7058 71.4205 65.6812 71.2682C67.6566 71.1159 68.9894 72.6113 71.6551 75.6022C76.8002 81.3752 80.7233 86.4521 83.3334 90.0427C85.1869 92.5926 86.1137 93.8675 87.2952 93.8994C88.4766 93.9314 89.4429 92.7429 91.3754 90.3659L95.1929 85.6704C96.4612 84.1104 97.0953 83.3304 98.1498 83.2682C99.2043 83.206 99.8382 83.8211 101.106 85.0514C104.257 88.1087 108.56 93.8123 108.56 102.162Z"
                                    fill="#FF7D00"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M61.1306 0.00338213C57.5766 -0.0810878 54.8438 1.42594 52.5858 3.48656C50.6653 5.23921 48.7472 7.72298 46.7527 10.3057L46.5071 10.6237C34.2772 26.4529 16 56.2267 16 93.2449C16 130.113 44.6538 160 80 160C115.346 160 144 130.113 144 93.2449C144 68.8051 133.194 46.9156 124.923 34.3707L124.779 34.1534C124.108 33.1332 123.274 31.8653 122.403 30.9155C121.318 29.7332 119.387 28.1605 116.546 28.284C113.649 28.4099 111.842 30.2227 110.884 31.4708C110.09 32.5054 109.347 33.8626 108.735 34.9821L102.768 45.8745C102.224 46.8677 101.773 47.6901 101.369 48.3962C100.892 47.7424 100.354 46.9786 99.7059 46.0561L75.5186 11.6535C73.4793 8.7518 71.5701 6.03534 69.6743 4.0992C67.5045 1.88312 64.7906 0.0903697 61.1306 0.00338213ZM55.0498 17.8045C57.3841 14.7831 58.7004 13.1119 59.8102 12.0992C60.5891 11.3883 60.7993 11.4291 60.8657 11.4419L60.8807 11.4442C60.9652 11.4462 60.9858 11.4526 61.054 11.4881C61.1738 11.5506 61.4733 11.7396 61.9986 12.276C63.1713 13.4737 64.549 15.4026 66.9016 18.7488L91.0532 53.1007C92.383 54.9932 93.7187 56.8942 95.0081 58.254C96.4304 59.7541 98.7565 61.6392 102.081 61.442C105.405 61.2449 107.511 59.0969 108.761 57.4383C109.894 55.9349 111.015 53.8883 112.13 51.8508L117.11 42.7618C124.516 54.5457 133.029 73.1943 133.029 93.2449C133.029 123.793 109.287 148.556 80 148.556C50.7131 148.556 26.9714 123.793 26.9714 93.2449C26.9714 60.0587 43.4545 32.8124 55.0498 17.8045Z"
                                    fill="#FF7D00"
                                />
                            </svg>
                            Добровольные пожертвования
                        </h2>
                        <p className="boosty__text">
                            Если вам понравилась наша игра и вы хотите поддержать её развитие, мы будем благодарны за любую помощь! Ваши пожертвования
                            помогут нам добавлять новые карты, улучшать интерфейс и создавать ещё больше увлекательных возможностей для игры.
                        </p>
                        <div className="boosty__buttons">
                            <div className="">
                                <button className="boosty__button">Поддержать на Boosty</button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                                    <path
                                        d="M25 1.5L1 25.5M1 1.5L25 25.5"
                                        stroke="url(#paint0_radial_231_4132)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <defs>
                                        <radialGradient
                                            id="paint0_radial_231_4132"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(13 13.5) rotate(90) scale(12)">
                                            <stop stopColor="white" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="125" height="41" viewBox="0 0 125 41" fill="none">
                                    <g clipPath="url(#clip0_231_4133)">
                                        <path
                                            d="M119.494 18.9995L114.484 26.7912L113.988 18.9995H106.769C107.432 16.7139 107.965 14.8745 107.965 14.8745L108.248 13.9578H102.722L102.46 14.8745L101.265 18.9995H95.3766C90.5388 18.9995 87.8161 20.3791 86.688 22.9903C86.0346 20.6113 83.8811 18.9995 80.5718 18.9995C77.7 18.9995 75.1691 20.0708 73.2691 21.7548C72.2934 20.0708 70.3646 18.9995 67.6673 18.9995C64.5913 18.9995 61.9051 20.2274 59.9679 22.1221C59.0694 20.2274 57.06 18.9995 54.171 18.9995C53.1829 18.9995 52.2354 19.1269 51.3397 19.3617L51.772 17.8608C51.7789 17.8363 51.7883 17.8132 51.7999 17.7918L52.9138 13.9473H47.4085L43.9003 26.0556C43.8098 26.2979 43.7274 26.543 43.6555 26.7912C43.4944 27.3475 43.3907 27.8899 43.3413 28.4134C42.8848 31.7908 44.3658 34.3312 48.4698 34.5132C48.8459 34.5577 49.24 34.5829 49.656 34.5829C52.5649 34.5829 55.285 33.3528 57.2766 31.455C58.1254 33.3528 60.1074 34.5829 63.1523 34.5829C65.8684 34.5829 68.4189 33.5094 70.3665 31.8223C71.299 33.5094 73.2137 34.5829 76.0568 34.5829H89.858C94.134 34.5829 96.5512 33.7394 97.8092 31.9063C97.8137 33.653 98.8079 34.5829 101.337 34.5829C103.381 34.5829 106.109 34.1326 109.872 33.2079L104.403 40.9996H109.908L124.999 18.9995H119.494ZM54.6661 26.7912C54.1516 28.5673 52.5036 29.9996 50.9839 29.9996C49.4642 29.9996 48.6463 28.5673 49.1608 26.7912C49.6754 25.0152 51.3233 23.5829 52.843 23.5829C54.3627 23.5829 55.1807 25.0152 54.6661 26.7912ZM68.1625 26.7912C67.6479 28.5673 65.9999 29.9996 64.4803 29.9996C62.9606 29.9996 62.1426 28.5673 62.6571 26.7912C63.1717 25.0152 64.8197 23.5829 66.3394 23.5829C67.859 23.5829 68.677 25.0152 68.1625 26.7912ZM75.5616 26.7912C76.0762 25.0152 77.7242 23.5829 79.2439 23.5829C80.7635 23.5829 81.5815 25.0152 81.067 26.7912C80.5594 28.5432 78.9491 29.9579 77.4468 29.996C77.4054 29.996 77.3657 29.996 77.324 29.9959C75.8443 29.9574 75.0541 28.5429 75.5616 26.7912ZM93.3026 29.4442C93.0247 30.0912 90.8514 29.9959 90.3074 30.0049C90.3074 30.0049 88.8731 30.0024 84.9617 29.9998C85.6866 29.0205 86.2409 27.9349 86.5723 26.7912C86.6059 26.675 86.6357 26.5596 86.6641 26.4446C87.241 27.2671 88.4616 28.0092 90.8349 28.4793C93.0877 28.9255 93.5002 28.7832 93.3026 29.4442ZM98.7466 27.6906C98.2784 25.8601 96.243 25.1413 93.3962 24.786C92.2048 24.6428 91.5332 24.5855 91.6826 24.0699C91.7988 23.6688 92.3965 23.5829 93.6795 23.5829H99.9367L98.7466 27.6906ZM104.247 27.7079C104.256 27.6714 104.784 25.846 105.44 23.5829H108.931L109.502 29.423C103.749 30.6448 103.608 30.322 104.247 27.7079Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M1.07679 24.4895L8.17209 0H19.0459L16.8459 7.59349C16.823 7.63587 16.8044 7.68142 16.7907 7.72976L11.0166 27.7786H16.4051C14.1521 33.3995 12.3907 37.806 11.1208 40.998C1.17843 40.8855 -1.60852 33.7676 0.830889 25.3479M11.1594 40.9984L24.2666 22.1386H18.7059L23.5426 10.0571C31.847 10.9289 35.7398 17.453 33.4524 25.3479C30.9934 33.835 21.0455 40.9993 11.361 40.9993C11.2935 40.9993 11.2263 40.999 11.1594 40.9984Z"
                                            fill="#FF7D00"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_231_4133">
                                            <rect width="125" height="41" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <button className="boosty__button">Список донатеров</button>
                        </div>
                    </div>
                    <div className="boosty__qr">
                        <img src="src/assets/img/boosty_qr.png" alt="" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
