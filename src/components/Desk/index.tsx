import React from 'react';
import Card from 'components/Card';
import './index.css';

type DeskProps = {
    title: string;
    cards: TCard[];
};

class Desk extends React.Component<DeskProps> {
    render(): React.ReactNode {
        return (
            <div className='desk flex-column flex-align-stretch flex-justify-start'>
                <div className='desk__title'>{this.props.title}</div>
                <div className='desk__items'>
                    {this.props.cards.map((card) => (
                        <Card content={card.text} key={card.id} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Desk;
