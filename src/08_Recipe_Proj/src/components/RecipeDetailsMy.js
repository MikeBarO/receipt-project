import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import NavbarExternal from './NavbarExternal';

const ReceiptDetailsMy = () => {

    const history = useHistory();

    const goToAllReceiptsMy = () => {
        history.push("/mainLogedIn");
    };

    return (
        <>
            <div dir="rtl" className="container text-right">
                {/* <NavbarExternal /> */}
                <h1 className="text-right">חביתה טבעונית מקמח עדשים</h1>
                <div className="row">
                    <div className="col-md-5">
                        <img className="card-img-top" ng-src="https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/85f9780c8cdd1788d6395c8e66a66e37_NaN.jpeg" alt="חביתה טבעונית מקמח עדשים" src="https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/85f9780c8cdd1788d6395c8e66a66e37_NaN.jpeg" />
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="font-weight-bold">מקור:&nbsp;</div>
                            <div >
                                <a target="_blank" className="ng-binding">עצמי</a>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="font-weight-bold">סוג המתכון:&nbsp;</div>
                            <div ng-repeat="dish in dishTypes" className="ng-binding ng-scope">
                                קציצות ולביבות,&nbsp;
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="font-weight-bold">רכיבים:&nbsp;</div>
                            <div ng-repeat="an_ingredient in recipe.ingredients" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">קמח עדשים</a>
                                <span ng-hide="$last">,&nbsp;</span>
                            </div>
                            <div ng-repeat="an_ingredient in recipe.ingredients" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">מלח הימאליה אפור ורוד</a>
                                <span ng-hide="$last">,&nbsp;</span>
                            </div>
                            <div ng-repeat="an_ingredient in recipe.ingredients" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">פלפל</a>
                                <span ng-hide="$last">,&nbsp;</span>
                            </div>
                            <div ng-repeat="an_ingredient in recipe.ingredients" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">כמון</a>
                                <span ng-hide="$last">,&nbsp;</span>
                            </div>
                            <div ng-repeat="an_ingredient in recipe.ingredients" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">אבקת אפייה</a>
                                <span ng-hide="$last">,&nbsp;</span>
                            </div>
                            <div ng-repeat="an_ingredient in recipe.ingredients" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">מים</a>
                                <span ng-hide="$last">,&nbsp;</span>
                            </div>
                            <div ng-repeat="an_ingredient in recipe.ingredients" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">חלב סויה</a>
                                <span ng-hide="$last">,&nbsp;</span>
                            </div>
                            <div ng-repeat="an_ingredient in recipe.ingredients" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">בצל סגול</a>
                                <span ng-hide="$last" className="ng-hide">,&nbsp;</span>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="font-weight-bold">מתאים ל:&nbsp;</div>
                            <div ng-repeat="diet in dietTypes" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">טבעוני</a>
                                <span ng-hide="$last">,&nbsp;</span>
                            </div>
                            <div ng-repeat="diet in dietTypes" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">ללא גלוטן</a>
                                <span ng-hide="$last">,&nbsp;</span>
                            </div>
                            <div ng-repeat="diet in dietTypes" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">כשר</a>
                                <span ng-hide="$last">,&nbsp;</span>
                            </div>
                            <div ng-repeat="diet in dietTypes" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">ללא לקטוז</a>
                                <span ng-hide="$last">,&nbsp;</span>
                            </div>
                            <div ng-repeat="diet in dietTypes" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">פרווה</a>
                                <span ng-hide="$last">,&nbsp;</span>
                            </div>
                            <div ng-repeat="diet in dietTypes" className="ng-scope">
                                <a href="#" target="_blank" className="ng-binding">צמחוני</a>
                                <span ng-hide="$last" className="ng-hide">,&nbsp;</span>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div ng-repeat="descLine in recipe.description.split('\n')" className="ng-binding ng-scope">
                                מבוסס על “חביתת” עדשים כתומות ובצל סגול, מהאתר "תיאבון בריא"
                            </div>
                            <div ng-repeat="descLine in recipe.description.split('\n')" className="ng-binding ng-scope">
                                גיוון: להחליף כף גדושה מכמות קמח העדשים בקמח אורז.
                            </div>
                        </div>

                    </div>
                </div>
                <h1 className="text-right">רכיבים</h1>
                <div dir="rtl" className="row">
                    <ul className="list-group list-group-flush w-100">
                        <li ng-repeat="an_ingredient in recipe.ingredients" ng-class-odd="'striped'" className="list-group-item list-group-item-secondary   ">
                            <div className="row">
                                <div className="col-sm-3 text-nowrap ng-binding">1/3&nbsp;כוס</div>
                                <div className="col-sm-9  ng-binding">קמח עדשים&nbsp;</div>
                            </div>
                        </li>
                        <li ng-repeat="an_ingredient in recipe.ingredients" ng-class-odd="'striped'" className="list-group-item ng-scope">
                            <div className="row">
                                <div className="col-sm-3 text-nowrap ng-binding">1/2&nbsp;כפית</div>
                                <div className="col-sm-9  ng-binding">מלח הימאליה אפור ורוד&nbsp;או לפי הטעם</div>
                            </div>
                        </li>
                        <li ng-repeat="an_ingredient in recipe.ingredients" ng-class-odd="'striped'" className="list-group-item list-group-item-secondary">
                            <div className="row">
                                <div className="col-sm-3 text-nowrap ng-binding">&nbsp;קורט</div>
                                <div className="col-sm-9  ng-binding">פלפל&nbsp;</div>
                            </div>
                        </li>
                        <li ng-repeat="an_ingredient in recipe.ingredients" ng-class-odd="'striped'" className="list-group-item ng-scope">
                            <div className="row">
                                <div className="col-sm-3 text-nowrap ng-binding">&nbsp;קורט</div>
                                <div className="col-sm-9  ng-binding">כמון&nbsp;(אופציונלי)</div>
                            </div>
                        </li>
                        <li ng-repeat="an_ingredient in recipe.ingredients" ng-class-odd="'striped'" className="list-group-item list-group-item-secondary">
                            <div className="row">
                                <div className="col-sm-3 text-nowrap ng-binding">1/2&nbsp;כפית</div>
                                <div className="col-sm-9  ng-binding">אבקת אפייה&nbsp;(אופציונלי)</div>
                            </div>
                        </li>
                        <li ng-repeat="an_ingredient in recipe.ingredients" ng-class-odd="'striped'" className="list-group-item ng-scope">
                            <div className="row">
                                <div className="col-sm-3 text-nowrap ng-binding">1/3&nbsp;כוס</div>
                                <div className="col-sm-9  ng-binding">מים&nbsp;</div>
                            </div>
                        </li>
                        <li ng-repeat="an_ingredient in recipe.ingredients" ng-class-odd="'striped'" className="list-group-item list-group-item-secondary">
                            <div className="row">
                                <div className="col-sm-3 text-nowrap ng-binding">1/3&nbsp;כוס</div>
                                <div className="col-sm-9  ng-binding">חלב סויה&nbsp;ללא סוכר</div>
                            </div>
                        </li>
                        <li ng-repeat="an_ingredient in recipe.ingredients" ng-class-odd="'striped'" className="list-group-item ng-scope">
                            <div className="row">
                                <div className="col-sm-3 text-nowrap ng-binding">1/4-1/2&nbsp;יחידה</div>
                                <div className="col-sm-9  ng-binding">בצל סגול&nbsp;בהתאם לגודל הבצל</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <h1 className="text-right">הוראות הכנה</h1>
                <div className="row">
                    <ul className="list-group list-group-flush  w-100">
                        <li ng-repeat="instruction in recipe.instructions" ng-class-odd="'striped'" className="list-group-item list-group-item-secondary">
                            <div className="row">
                                <div className="col-sm-1 ng-binding">1</div>
                                <div className="col-sm-11 ng-binding">בעזרת מטרף ידני, לערבב היטב את היבשים: קמח עדשים, מלח, פלפל (וכמון, אבקת אפייה וקמח אורז - אם בחרנו להוסיף אותם)</div>
                            </div>
                        </li>
                        <li ng-repeat="instruction in recipe.instructions" ng-class-odd="'striped'" className="list-group-item ng-scope">
                            <div className="row">
                                <div className="col-sm-1 ng-binding">2</div>
                                <div className="col-sm-11 ng-binding">להוסיף את החלב והמים ולטרוף לתערובת אחידה (בדרך כלל אני קודם מוסיפה את המים, בוחשת לקבלת משחה ללא גושים, ואז מוסיפה את החלב)</div>
                            </div>
                        </li>
                        <li ng-repeat="instruction in recipe.instructions" ng-class-odd="'striped'" className="list-group-item list-group-item-secondary">
                            <div className="row">
                                <div className="col-sm-1 ng-binding">3</div>
                                <div className="col-sm-11 ng-binding">להוסיף  הבצל.</div>
                            </div>
                        </li>
                        <li ng-repeat="instruction in recipe.instructions" ng-class-odd="'striped'" className="list-group-item ng-scope">
                            <div className="row">
                                <div className="col-sm-1 ng-binding">4</div>
                                <div className="col-sm-11 ng-binding">לחמם שמן במחבת נון סטיק, לצקת את הבלילה ולהטות את המחבת לפיזור אחיד. לאחר שהחביתה מפגינה סימני התייצבות להפוך ולטגן מהצד השני.</div>
                            </div>
                        </li>
                        <li ng-repeat="instruction in recipe.instructions" ng-class-odd="'striped'" className="list-group-item list-group-item-secondary">
                            <div className="row">
                                <div className="col-sm-1 ng-binding">5</div>
                                <div className="col-sm-11 ng-binding">לא לחסוך בשמן הטיגון: להבדיל מבחביתה מביצים, כאן אין שומן בכלל והחביתה עלולה להדבק אם לא יהיה במחבת מספיק שומן.</div>
                            </div>
                        </li>
                        <li ng-repeat="instruction in recipe.instructions" ng-class-odd="'striped'" className="list-group-item ng-scope">
                            <div className="row">
                                <div className="col-sm-1 ng-binding">6</div>
                                <div className="col-sm-11 ng-binding">להוציא ולאכול</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="row text-left float-left">
                    <button type="button" className="btn btn-primary" onClick={goToAllReceiptsMy}>בחזרה לרשימה</button>
                </div>
                <hr />
            </div>
            <div className="row"><p style={{ height: "40px" }}></p></div>
        </>
    );
}

export default ReceiptDetailsMy;