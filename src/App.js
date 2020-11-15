import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import "./styles.css";
import NavbarExternal from './08_Receipt_Proj/src/components/NavbarExternal';
import NavbarInternal from './08_Receipt_Proj/src/components/NavbarInternal';
import ReceiptsList from './08_Receipt_Proj/src/components/ReceiptsList';
import ReceiptsListMy from './08_Receipt_Proj/src/components/ReceiptsListMy';
import ReceiptFilter from './08_Receipt_Proj/src/components/ReceiptFilter';
import ReceiptCreate from './08_Receipt_Proj/src/components/ReceiptCreate';
import ReceiptDetails from './08_Receipt_Proj/src/components/ReceiptDetails';
import SignUp from './08_Receipt_Proj/src/components/SignUp';
import UpdateProfile from './08_Receipt_Proj/src/components/UpdateProfile';
import Footer from './08_Receipt_Proj/src/components/Footer';
import LogInForm from './08_Receipt_Proj/src/components/LogInForm';
// import SearchReceipt from './08_Receipt_Proj/src/components/SearchReceipt';
// import ReceiptCard from './08_Receipt_Proj/src/components/ReceiptCard';
// import data from './08_Receipt_Proj/src/data/data';

function App() {

    // const [cardsInfo, setCardsInfo] = useState(data.sort((user1, user2) => user2.views - user1.views));

    // const changeView = (cardId) => {
    //     setCardsInfo(
    //         cardsInfo.map(card => {
    //             if (card.id === cardId) {
    //                 return {
    //                     ...card,
    //                     views: card.views + 1,
    //                     date: new Date().toLocaleString('he-IL')
    //                 }
    //             }
    //             return card;
    //         })
    //             .sort((card1, card2) => card2.views - card1.views)
    //     );
    // }

    return (
        <>
            <div className="container-fluid">
                {/* <NavbarExternal /> */}
                <NavbarInternal />
                <div style={{ height: '90px' }}></div>
                {/* <LogInForm /> */}
                {/* <SignUp /> */}
                {/* <ReceiptsList /> */}
                {/* <UpdateProfile /> */}
                {/* <ReceiptCreate /> */}
                {/* <ReceiptsListMy /> */}
                {/* <ReceiptFilter /> */}
                <ReceiptDetails />
                {/* <div className="main">
                    <div className="container-fluid">
                        <LogInForm />
                    </div>
                    <div className="container">
                        <div className='row'>
                            <SearchReceipt />
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
                </div> */}
                <Footer />
            </div>
        </>
    );
}

export default App;
