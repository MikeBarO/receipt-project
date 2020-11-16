import React from 'react';
// import NavbarInternal from './NavbarInternal';

const ReceiptFilter = () => {
    return (
        // <>
        <div className="container-fluid">
            {/* <NavbarInternal /> */}

            <div className="row"><p style={{ height: "100px" }}></p></div>
            <div dir="rtl" id="main" className="container mt-3">
                <ng-view className="container mt-3">
                    <div className="row ng-scope">
                        <h1 className="ng-binding ng-scope">מתכונים</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-6 text-right">
                            <h4>הצג לי את המתכונים</h4>
                        </div>
                        <div className="form-group">
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input type="radio" />
                                    הכי פופולאריים
                                </label>
                            </div>
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input type="radio" defaultChecked={true}/>
                                    הכי חדשים
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group form-row text-right">
                        <div className="col-lg-3 col-6">
                            <h5 htmlFor="receipts" className="col-md-9">המתכונים סוננו לפי הגדרות הפרופיל</h5>
                        </div>
                        <checkbox-list>
                            <div className="form-check">
                                <div className="form-row container">
                                    <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                        <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet0" ng-model="dietTypes[idx]"defaultChecked={true} />
                                        <label className="form-check-label ng-binding" htmlFor="diet0">טבעוני </label>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                        <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet1" ng-model="dietTypes[idx]" />
                                        <label className="form-check-label ng-binding" htmlFor="diet1">ללא גלוטן </label>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                        <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet2" ng-model="dietTypes[idx]"defaultChecked={true} />
                                        <label className="form-check-label ng-binding" htmlFor="diet2">כשר </label>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                        <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet3" ng-model="dietTypes[idx]" />
                                        <label className="form-check-label ng-binding" htmlFor="diet3">ללא לקטוז</label>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                        <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet4" ng-model="dietTypes[idx]"defaultChecked={true} />
                                        <label className="form-check-label ng-binding" htmlFor="diet4">פרווה</label>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                        <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet5" ng-model="dietTypes[idx]" defaultChecked={true} />
                                        <label className="form-check-label ng-binding" htmlFor="diet5">פליאו</label>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                        <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet6" ng-model="dietTypes[idx]"defaultChecked={true} />
                                        <label className="form-check-label ng-binding" htmlFor="diet6">קטגוני</label>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
                                        <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet7" ng-model="dietTypes[idx]" />
                                        <label className="form-check-label ng-binding" htmlFor="diet7">צמחוני</label>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6" ng-show="isShowDiet(dietTypes[idx])">
                                        <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet8" ng-model="dietTypes[idx]"/>
                                        <label className="form-check-label ng-binding" htmlFor="diet8">רואו</label>
                                    </div>
                                </div>
                            </div>
                        </checkbox-list>
                    </div>
                </ng-view>

                <div className="row ng-scope">
                    <div className="col-lg-6">
                        <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                            <input type="text" className="form-control ng-pristine ng-valid ng-empty ng-touched" placeholder="חיפוש מתכון" ng-model="searchText" aria-label="Search" ng-change="findRecipe()" />
                        </div>
                        <div className="search-results list-group">
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>

                {/* <div className="row mt-1 text-right">
                    <div className="col-md-6 ml-1">
                        <input className="form-control" type="text" placeholder="חיפוש מתכון" />
                    </div>
                </div> */}

                <div className="row ng-scope">
                    <div className="col-lg-6">
                        <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                            <input type="text" className="form-control ng-pristine ng-untouched ng-valid ng-empty" placeholder="חיפוש לפי רכיב" ng-model="searchIng" aria-label="Search" ng-change="findIngredients()" />
                        </div>
                        <div className="search-results list-group">
                        </div>
                    </div>

                    <div className="col-lg-6 text-right">
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input ng-pristine ng-untouched ng-valid ng-not-empty" name="multipleIng" ng-model="isAll" ng-value="true" value="true" />כולם
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input ng-pristine ng-untouched ng-valid ng-not-empty" name="multipleIng" ng-model="isAll" ng-value="false" value="false" defaultChecked={true}/>לפחות אחד
                            </label>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <ul className="list-inline"></ul>
                </div>

            </div>
            <div className="row"><p style={{ height: "290px" }}></p></div>
            {/* </> */}
        </div>
    );
};

export default ReceiptFilter;