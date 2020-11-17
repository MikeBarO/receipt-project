import React, { useState } from 'react';
import Errors from './Errors';
import validateFields from '../utils/validateFields';
import NavbarExternal from '../components/NavbarExternal';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useParams, useHistory } from "react-router-dom";

// const [customer, setCustomer] = useState({
//     username: { value: '', required: true, minLength: 2, errors: [] },
//     email: { value: '', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errors: [] },
//     // address: { value: '', required: true, minLength: 10, errors: [] },
//     // course: { value: '', required: true, errors: [] },
//     // gender: { value: '', required: true, errors: [] }
// });

// const onInputChange = (e) => {
//     console.log(e.target.name, e.target.value);
//     // debugger;
//     // validateFields(e);
//     const newErrors = validateFields(
//         e.target.name,
//         e.target.value,
//         customer[e.target.name].required,
//         customer[e.target.name].minLength,
//         customer[e.target.name].pattern
//     );

//     setCustomer({
//         ...customer,
//         [e.target.name]: {
//             ...customer[e.target.name],
//             value: e.target.value,
//             errors: newErrors
//         }
//     });
// }

// const onSubmit = e => {
//     e.preventDefault();

//     for (const field in customer) {
//         const newErrors = validateFields(
//             field,
//             customer[field].value,
//             customer[field].required,
//             customer[field].minLength,
//             customer[field].pattern
//         );

//         customer[field] = {
//             ...customer[field],
//             errors: newErrors
//         };
//     }

//     setCustomer({ ...customer });
// }

const LogInForm = () => {

    const history = useHistory();

    const goToAllRecipesMy = () => {
        history.push("/mainLogedIn");
    };
    
    const goToAllRecipes = () => {
        history.push("/mainNotLogedIn");
    };

    return (
        // <BrowserRouter>
            <div className="container-fluid">
                <NavbarExternal />
                {/* <form id="loginForm" className="ng-pristine ng-valid ng-valid-email" style={{backgroundImage: `url(${require("../images/back_RecipeList1.jpg")})`,}}> */}
                <form id="loginForm" className="ng-pristine ng-valid ng-valid-email">
                    <div className="row"><p style={{ height: "200px" }}></p></div>
                    <div className="form-group text-right">
                        <label htmlFor="exampleInputEmail1">אי-מייל</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" id="email" dir="rtl" />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group text-right">
                        <label htmlFor="exampleInputPassword1">סיסמה:</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" id="pwd" dir="rtl" />
                    </div>
                    <div className="btn-toolbar" dir="rtl">
                        <button type="button" id="btnClose" className="btn btn-primary" onClick={goToAllRecipes}>סגור</button>
                        <button type="button" id="btnEnter" className="btn btn-primary" onClick={goToAllRecipesMy}>כניסה</button>
                    </div>
                    <div className="row"><p style={{ height: "330px" }}></p></div>
                </form>
            </div>
    );
}

export default LogInForm;