import React, { useState } from 'react';

// import logo from './logo.svg';
import './App.css';
import Navbar from './08_Recipe_Proj/src/components/Navbar';
import SearchRecipe from './08_Recipe_Proj/src/components/SearchRecipe';
import RecipeCard from './08_Recipe_Proj/src/components/RecipeCard';
import Footer from './08_Recipe_Proj/src/components/Footer';
// import AppRoot from './components/AppRoot';
// import React, { AppRoot } from 'react';
// import SignIn from './components/SignIn';
// import SignIn from './components/SignIn';
import data from './08_Recipe_Proj/src/data/data';

function App() {

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
            {/* <SignUp /> */}
            {/* <SignIn /> */}
            <div className="container">
                <Navbar />
            </div>
            <div style={{ height: '70px' }}></div>
            <div className="container">
                <div className='row'>
                    {/* <SnowFallEffect /> */}
                    <SearchRecipe />
                </div>
            </div>
            <div className="container">
                <div className='row'>
                    {
                        cardsInfo.map(card => <RecipeCard key={card.id} card={card} onChangeView={changeView} />)
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
