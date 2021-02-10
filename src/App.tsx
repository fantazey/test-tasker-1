import React from 'react';
import HelloWorld from 'components/HelloWorld';
import 'assets/flexbox.css';
import Desk from 'components/Desk';

class App extends React.Component {
    render(): React.ReactNode {
        const cards1: TCard[] = [
            { id: 1, text: 'card 1 text 1' },
            { id: 2, text: 'card 1 text 1' },
            { id: 3, text: 'card 1 text 3' }
        ];
        const cards2: TCard[] = [
            { id: 4, text: 'card 2 text 1' },
            { id: 5, text: 'card 2 text 2' },
            { id: 6, text: 'card 2 text 3' }
        ];
        return (
            <div className='content-wrapper flex-column'>
                <HelloWorld />
                <div className='desk-wrapper flex-row flex-justify-start'>
                    <Desk title='Доска 1' cards={cards1} />
                    <Desk title='Доска 2' cards={cards2} />
                </div>
            </div>
        );
    }
}

export default App;
