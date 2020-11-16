import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import "./styles.css";
import "font-awesome/css/font-awesome.min.css";

import NavbarExternal from './08_Receipt_Proj/src/components/NavbarExternal';
import NavbarInternal from './08_Receipt_Proj/src/components/NavbarInternal';
import AllReceiptsPage from './08_Receipt_Proj/src/components/AllReceiptsPage';
import AllReceiptsMy from './08_Receipt_Proj/src/components/AllReceiptsMy';
import ReceiptFilter from './08_Receipt_Proj/src/components/ReceiptFilter';
import ReceiptCreate from './08_Receipt_Proj/src/components/ReceiptCreate';
import ReceiptDetails from './08_Receipt_Proj/src/components/ReceiptDetails';
import ReceiptDetailsMy from './08_Receipt_Proj/src/components/ReceiptDetailsMy';
import ReceiptDetailsDynamic from './08_Receipt_Proj/src/components/ReceiptDetailsDynamic';
import SignUp from './08_Receipt_Proj/src/components/SignUp';
import UpdateProfile from './08_Receipt_Proj/src/components/UpdateProfile';
import Footer from './08_Receipt_Proj/src/components/Footer';
import LogInForm from './08_Receipt_Proj/src/components/LogInForm';
// import CallSingleReceiptDetails from './08_Receipt_Proj/src/components/CallSingleReceiptDetails';
// import SearchReceipt from './08_Receipt_Proj/src/components/SearchReceipt';
// import ReceiptCard from './08_Receipt_Proj/src/components/ReceiptCard';
import data from './08_Receipt_Proj/src/data/data';

function App() {

    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Switch>
                    <Route path="/(mainLogedIn|receiptFilter|receiptCreate|receiptDetailsMy)/">
                        <NavbarInternal />
                    </Route>
                    <Route path="/(mainNotLogedIn|receiptDetails)/" exact={true}>
                        <NavbarExternal />
                    </Route>
                </Switch>
                <div style={{ height: '90px' }}></div>
                <div className="main">
                    <Switch>
                        <Route path="/logIn" exact={true}>
                            <LogInForm />
                        </Route>
                        <Route path="/signUp" exact={true}>
                            <SignUp />
                        </Route>
                        <Route path="/updProfile" exact={true}>
                            <UpdateProfile />
                        </Route>
                        <Route path="/receiptFilter" exact={true}>
                            <ReceiptFilter />
                        </Route>
                        <Route path="/receiptDynamic" exact={true}>
                            <ReceiptDetailsDynamic />
                        </Route>
                        <Route path="/receiptDetails" exact={true}>
                            <ReceiptDetails />
                        </Route>
                        <Route path="/receiptDetailsMy" exact={true}>
                            <ReceiptDetailsMy />
                        </Route>
                        <Route path="/receiptCreate" exact={true}>
                            <ReceiptCreate />
                        </Route>
                        <Route path="/mainLogedIn" exact={true}>
                            <AllReceiptsMy />
                        </Route>
                        <Route path="/(mainNotLogedIn)/" exact={true}>
                            <AllReceiptsPage />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
