import React, { useState } from 'react';
import Errors from './Errors';
import validateFields from '../utils/validateFields';

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
    return (
        <form id="loginForm" className="ng-pristine ng-valid ng-valid-email">
            <div className="form-group text-right">
                <label htmlFor="exampleInputEmail1">אי-מייל</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" id="email" dir="rtl" />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group text-right">
                <label htmlFor="exampleInputPassword1">סיסמא:</label>
                <input type="password" className="form-control" id="exampleInputPassword1" id="pwd" dir="rtl"/>
            </div>
            <div className="btn-toolbar" dir="rtl">
                <button type="button" id="btnClose" ng-click="closeWin()" className="btn btn-primary">סגור</button>
                <button type="button" id="btnEnter" className="btn btn-primary">כניסה</button>
            </div>
        </form>
        // <div className="container-fluid" >
        //     <div className="row">
        //         <div className="col-md-1"></div>
        //          <div className="col-md-10">
        //             <div className="alert alert-success text-center form-container" role="alert">
        //                 <h1 className="alert-heading">customer Details</h1>
        //                 <h4>Hello customer! Please fill in your details</h4>
        //                 <hr />
        //                 <form onSubmit={onSubmit}>
        //                     <div className="col-md-1"></div>
        //                     <div className="row">
        //                         <div className="col-md text-left">
        //                             <div className="form-group">
        //                                 <label htmlFor="email">Email</label>
        //                                 <div className="input-group-prepend">
        //                                     <span className="input-group-text" id="basic-addon1">
        //                                         <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        //                                             <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
        //                                         </svg>
        //                                     </span>
        //                                     <input type="text" id="email" className="form-control" placeholder="Email..."
        //                                         name="email"
        //                                         defaultValue={customer.email.value}
        //                                         onBlur={onInputChange} />
        //                                 </div>
        //                                 {<Errors errors={customer.email.errors} />}
        //                                 {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        //                                 {/* {!customer.email.value && <small id="emailHelp" className="form-text text-danger">Email is required! We'll never share your email with anyone else.</small>} */}
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col-md-1"></div>
        //                     <div className="row">
        //                         <div className="col-md-1"></div>
        //                         <div className="col-md">
        //                             <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%' }}>Submit</button>
        //                         </div>
        //                         <div className="col-md-1"></div>
        //                     </div>
        //                 </form>
        //             </div >
        //         </div>
        //         <div className="col-md-1"></div>
        //     </div>
        // </div>
    );
}

export default LogInForm;