import React, { useState } from 'react';
import LogInForm from './LogInForm';
import ReceiptSearch from './RecipeSearch';
import ReceiptCard from './RecipeCard';
import data from '../data/data';

const AllReceiptsPage = () => {
    const [cardsInfo, setCardsInfo] = useState(data.sort((user1, user2) => user2.views - user1.views));

    const changeView = (cardId) => {
        setCardsInfo(
            cardsInfo.map(card => {
                if (card.id === cardId) {
                    return {
                        ...card,
                        views: card.views + 1,
                        date: new Date().toLocaleString('he-IL')
                    }
                }
                return card;
            })
                .sort((card1, card2) => card2.views - card1.views)
        );
    }

    return (
        <>
            <div className="main">
                {/* <div className="container-fluid">
                    <LogInForm />
                </div> */}
                <div className="container">
                    <div className='row'>
                        <ReceiptSearch />
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className='row' dir="rtl">
                        {
                            cardsInfo.map(card => <ReceiptCard key={card.id} card={card} onChangeView={changeView} />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllReceiptsPage;