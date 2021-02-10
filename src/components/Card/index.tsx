import React from 'react';

type CardProps = {
    content: string;
};

const Card = (props: CardProps): JSX.Element => <div className='card'>{props.content}</div>;

export default Card;
