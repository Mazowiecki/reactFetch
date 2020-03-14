import React from 'react';

const Word = props => (
    <li>
        Słowo po angielsku: <b>{props.eng}</b>.
        Tłumaczenie: <b>{props.pl}</b>
    </li>
);

export default Word;
