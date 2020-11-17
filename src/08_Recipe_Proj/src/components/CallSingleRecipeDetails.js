import React, { useState } from 'react';
import data from './08_Receipt_Proj/src/data/data';

function CallSingleReceiptDetails() {
  const [cardsInfo, setCardsInfo] = useState(data);

  const changeView = (cardId) => {
    setCardsInfo(
      cardsInfo.map(card => {
        if (card.id === cardId) {
          return { ...card }
        }
        return card;
      })
    );
  }

  return (
    <>
      <div className="container">
        <div className='row' dir="rtl">
          {
            cardsInfo.filter(card => <ReceiptDetailsTemplate key={card.id} card={card} onChangeView={changeView} />)
          }
        </div>
      </div>
    </>
  );
}

export default CallSingleReceiptDetails;