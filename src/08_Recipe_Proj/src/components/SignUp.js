import React from 'react';
import '../../../App.css';
import NavbarExternal from '../components/NavbarExternal';
import { useParams, useHistory } from "react-router-dom";

const SignUp = () => {
    const history = useHistory();
    
    const goToAllRecipesMy = () => {
        history.push("/mainLogedIn");
    };

    return (
        <>
            <div className="container-fluid" dir="rtl">
            <NavbarExternal />
                <div className="row"><p style={{ height: "80px" }}></p></div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-7">
                        <h1 className="display-5 text-right">רישום למחברת המתכונים</h1>
                        <div className="form-group form-row text-right">
                            <label htmlFor="nickname" className="col-md-2">שם משתמש</label>
                            <input type="text" className="form-control col-md-4" placeholder="שם משתמש" aria-label="Recipient's username" aria-describedby="basic-addon2" required=""></input>
                        </div>
                        <div className="form-group form-row text-right">
                            <label htmlFor="email" className="col-md-2">אי-מייל</label>
                            <input type="text" className="form-control col-md-4" placeholder="כתובת מייל שנמצאת" aria-label="Recipient's email" aria-describedby="basic-addon2" required=""></input>
                        </div>
                        <div className="form-group form-row text-right ng-valid ng-valid-email" id="loginForm">
                            <label htmlFor="passwrd" className="col-md-2">סיסמה</label>
                            <input type="password" className="form-control col-md-4 ng-valid ng-valid-email" aria-label="Recipient's password" aria-describedby="basic-addon2" required="" id="exampleInputPassword1" id="pwd"/>
                            <small id="emailHelp" className="text-right">
                                <strong>
                                    דרישות מינימום לסיסמא תקינה: לפחות ספרה,
                                    אות קטנה ואות גדולה (באנגלית). ולא פחות מ-8 תווים
                                </strong>
                            </small>
                        </div>
                        <div className="form-group form-row text-right">
                            <label htmlFor="passwrd" className="col-md-2">אימות סיסמה</label>
                            <input type="text" className="form-control col-md-4" aria-label="Recipient's password" aria-describedby="basic-addon2" required=""></input>
                            <div className="col-md-10 text-right">
                                <small id="emailHelp" className="text-right">
                                    <strong>
                                        תוכן השדה יהיה זהה לתוכן שהוקלד עבור הסיסמה
                                </strong>
                                </small>
                            </div>
                        </div>
                        <div className="form-group form-row text-right">
                            <label htmlFor="receipts" className="col-md-2">המתכונים שאני רוצה לראות</label>
                            <checkbox-list>
                                <div className="form-check">
                                    <div className="form-row container">
                                        <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet0" ng-model="dietTypes[idx]" />
                                            <label className="form-check-label ng-binding" htmlFor="diet0">טבעוני </label>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet1" ng-model="dietTypes[idx]" />
                                            <label className="form-check-label ng-binding" htmlFor="diet1">ללא גלוטן </label>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet2" ng-model="dietTypes[idx]" />
                                            <label className="form-check-label ng-binding" htmlFor="diet2">כשר </label>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet3" ng-model="dietTypes[idx]" />
                                            <label className="form-check-label ng-binding" htmlFor="diet3">ללא לקטוז</label>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet4" ng-model="dietTypes[idx]" />
                                            <label className="form-check-label ng-binding" htmlFor="diet4">פרווה</label>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet5" ng-model="dietTypes[idx]" />
                                            <label className="form-check-label ng-binding" htmlFor="diet5">פליאו</label>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet6" ng-model="dietTypes[idx]" />
                                            <label className="form-check-label ng-binding" htmlFor="diet6">קטגוני</label>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet7" ng-model="dietTypes[idx]" />
                                            <label className="form-check-label ng-binding" htmlFor="diet7">צמחוני</label>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-6" ng-show="isShowDiet(dietTypes[idx])">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet8" ng-model="dietTypes[idx]" />
                                            <label className="form-check-label ng-binding" htmlFor="diet8">רואו</label>
                                        </div>
                                    </div>
                                </div>
                            </checkbox-list>
                        </div>
                        <div className="row text-right">
                            <div className="col-8">
                                <button type="button" className="btn btn-primary" style={{ padding: "10px 20px" }} onClick={goToAllRecipesMy}>רישום</button>
                                <a className="alert alert-info ng-binding" role="alert">
                                    לפני שליחת הטופס יש למלא בצורה תקינה את השדות
                                </a>
                            </div>
                        </div>
                        {/* <div class="form-group form-row">
                            <div class="float-left">
                                <button type="button" ng-click="addUser()" ng-hide="isEditProfile" ng-disabled="accountForm.$invalid" class="btn btn-primary" disabled="disabled">רישום</button>
                                <button type="button" ng-click="updateUser()" ng-show="isEditProfile" ng-disabled="accountForm.$invalid" class="btn btn-primary ng-hide" disabled="disabled">עדכן פרטים</button>
                            </div>
                            <div class="float-left mx-2" ng-show="accountForm.$invalid">
                                <div class="form-control alert alert-info ng-binding" role="alert">
                                    לפני שליחת הטופס יש למלא בצורה תקינה את השדות
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row"><p style={{ height: "135px" }}></p></div>
                {/* <div className="jumbotron container-fluid" style={{ backgroundcolor: "nocolor" }}></div> */}
                {/* <div className="jumbotron container-fluid"></div> */}
            </div>
        </>
    );
}

export default SignUp;