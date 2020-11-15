import React from 'react';
import NavbarExternal from './NavbarExternal';

const ReceiptSearch = () => {
    return (
        <>
            <div className="container-fluid">
                {/* <NavbarExternal /> */}
            </div>
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
                                    <input type="radio"/>
                                    הכי פופולאריים
                                </label>
                            </div>
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input type="radio"/>
                                    הכי חדשים
                                </label>
                            </div>
                        </div>
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
                                <input type="radio" className="form-check-input ng-pristine ng-untouched ng-valid ng-not-empty" name="multipleIng" ng-model="isAll" ng-value="false" value="false" />לפחות אחד
                            </label>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <ul className="list-inline"></ul>
                </div>

            </div>
        </>
    );
};

export default ReceiptSearch;