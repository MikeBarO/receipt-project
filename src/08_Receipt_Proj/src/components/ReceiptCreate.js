import React from 'react';

const ReceiptCreate = () => {
    return (
        <>
<form name="recipeForm" id="recipeForm" className="ng-pristine ng-scope ng-invalid ng-invalid-required ng-valid-image ng-valid-parsing ng-valid-dimensions ng-valid-size">
    <div className="form-row">
        <div className="form-group col-md-6">
            {/* <!-- 1 --> */}
            <label htmlFor="recipeName">שם המתכון</label>
            <input type="input" className="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched" name="recipeName" id="recipeName" placeholder="שם המתכון" ng-model="recipe.recipeName" required=""/>
            <div ng-show="recipeForm.recipeName.$touched &amp;&amp; recipeForm.recipeName.$invalid" className="mt-2 form-control alert alert-danger" role="alert">
                "שם המתכון" הוא שדה חובה
            </div>
        </div>
        <div className="form-group col-md-3">
            <label>מי יוכל לצפות במתכון</label>
            <div className="form-group">
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" name="isPublic" className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" ng-value="true" ng-model="recipe.isPublic" ng-checked="recipe.isPublic" value="true"/>כולם
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" name="isPublic" className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" ng-value="false" ng-model="recipe.isPublic" ng-checked="!recipe.isPublic" defaultChecked="checked" value="false"/>רק אני
                    </label>
                </div>
            </div>
        </div>
        <div className="form-group col-md-3">
            <div className="form-group">
                <label htmlFor="recipeImgUpload">תמונה ראשית</label>
                {/* <!-- <input type="file" className="form-control-file" id="recipeImgUpload" ng-model="recipeImg" accept="image/*">       --> */}
                <input type="file" image-with-preview="" className="form-control-file ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-image ng-valid-parsing ng-valid-dimensions ng-valid-size" id="recipeImgUpload" ng-model="recipe.recipeImg" accept="image/*"/>
            </div>
        </div>
    </div>
    <div className="form-row">
        <div className="form-group col-md-9">
            {/* <!-- 2 --> */}
            <label htmlFor="sourceName">מקור</label>
            <input type="input" className="form-control ng-pristine ng-valid ng-empty ng-touched" id="sourceName" ng-model="recipe.source" placeholder="מקור המתכון"/>

            <label htmlFor="sourceLink">קישור למקור</label>
            <input type="input" className="form-control ng-pristine ng-valid ng-empty ng-touched" id="sourceLink" ng-model="recipe.sourceUrl" placeholder="קישור למתכון אם קיים"/>
        </div>

        <div className="form-group col-md-3">
            <img className="img-fluid" alt="" srcset=""/>
        </div>

    </div>
    {/* <!-- Accordion --> */}
    <div className="form-row">
        <div id="accordion" className="col-12 mt-2">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            תיאור כללי
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        <label htmlFor="desc">תיאור רקע של המתכון. יוצג מתחת לכותרת</label>
                        <textarea className="form-control ng-pristine ng-valid ng-empty ng-touched" id="desc" rows="3" ng-model="recipe.description">

                        </textarea>

                        <div className="form-row">
                            <div className="col-md-6">
                                <label>מתאים לתזונה מסוג:</label>
                                <checkbox-list>
                                
<div className="form-check">
    <div className="form-row container">
        
        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet0" ng-model="dietTypes[idx]"/>
            <label className="form-check-label ng-binding" htmlFor="diet0">טבעוני
            </label>
        </div>
        
        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet1" ng-model="dietTypes[idx]"/>
            <label className="form-check-label ng-binding" htmlFor="diet1">ללא גלוטן
            </label>
        </div>
        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet2" ng-model="dietTypes[idx]"/>
            <label className="form-check-label ng-binding" htmlFor="diet2">כשר
            </label>
        </div>
        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet3" ng-model="dietTypes[idx]"/>
            <label className="form-check-label ng-binding" htmlFor="diet3">ללא לקטוז
            </label>
        </div>
        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet4" ng-model="dietTypes[idx]"/>
            <label className="form-check-label ng-binding" htmlFor="diet4">פרווה
            </label>
        </div>
        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet5" ng-model="dietTypes[idx]"/>
            <label className="form-check-label ng-binding" htmlFor="diet5">פליאו
            </label>
        </div>
        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet6" ng-model="dietTypes[idx]"/>
            <label className="form-check-label ng-binding" htmlFor="diet6">קטגוני
            </label>
        </div>
        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet7" ng-model="dietTypes[idx]"/>
            <label className="form-check-label ng-binding" htmlFor="diet7">צמחוני
            </label>
        </div>
        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(idx, diet) in dietTypeList" ng-show="isShowDiet(dietTypes[idx])">
            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="diet8" ng-model="dietTypes[idx]"/>
            <label className="form-check-label ng-binding" htmlFor="diet8">רואו
            </label>
        </div>
        
    </div>
</div>
</checkbox-list>
                            </div>
                            <div className="form-group col-md-6">
                                    <label>סוג מנה:</label>
                                <div className="form-check">
                                    <div className="form-row container">
                                        
                                        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(key, dishType) in dishTypeList">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="dish0" ng-model="dishTypes[key]"/>
                                            <label className="form-check-label ng-binding" htmlFor="dish0">מאפים מתוקים
                                            </label>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(key, dishType) in dishTypeList">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="dish1" ng-model="dishTypes[key]"/>
                                            <label className="form-check-label ng-binding" htmlFor="dish1">פשטידות
                                            </label>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(key, dishType) in dishTypeList">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="dish2" ng-model="dishTypes[key]"/>
                                            <label className="form-check-label ng-binding" htmlFor="dish2">מנות עיקריות
                                            </label>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(key, dishType) in dishTypeList">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="dish3" ng-model="dishTypes[key]"/>
                                            <label className="form-check-label ng-binding" htmlFor="dish3">קינוחים
                                            </label>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(key, dishType) in dishTypeList">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="dish4" ng-model="dishTypes[key]"/>
                                            <label className="form-check-label ng-binding" htmlFor="dish4">פנקייקים
                                            </label>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(key, dishType) in dishTypeList">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="dish5" ng-model="dishTypes[key]"/>
                                            <label className="form-check-label ng-binding" htmlFor="dish5">קציצות ולביבות
                                            </label>
                                        </div>
                                        
                                        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(key, dishType) in dishTypeList">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="dish6" ng-model="dishTypes[key]"/>
                                            <label className="form-check-label ng-binding" htmlFor="dish6">מרקים
                                            </label>
                                        </div>
                                        
                                        <div className="col-lg-3 col-md-4 col-6 ng-scope" ng-repeat="(key, dishType) in dishTypeList">
                                            <input className="form-check-input ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" value="" id="dish7" ng-model="dishTypes[key]"/>
                                            <label className="form-check-label ng-binding" htmlFor="dish7">עוגות ועוגיות
                                            </label>
                                        </div>
                                        {/* <!-- end ngRepeat: (key, dishType) in dishTypeList --> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            פירוט הרכיבים
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">                 
                        {/* <!-- ngRepeat: an_ingredient in recipe.ingredients --> */}
                        <div className="form-row"><hr/></div>
                        <div className="form-row">
                            <div className="form-group-mb-0 col-md-1 col-6">
                                <label htmlFor="quantity">כמות</label>
                                <input type="input" className="form-control ng-pristine ng-untouched ng-valid ng-empty" id="quantity" ng-model="quantity"/>
                            </div>
                            <div className="form-group-mb-0 col-md-2 col-6">
                                <label htmlFor="unit">יח' מידה</label>
                                {/* <!-- <input type="input" className="form-control" id="unit" placeholder=""> --> */}
                                <select className="form-control ng-pristine ng-untouched ng-valid ng-empty" id="units" ng-model="unit" ng-options="option.id as option.name for option in units"><option value="" className="" selected="selected">-- בחר אחד --</option><option label="גרם" value="string:0">גרם</option><option label="מיליליטר" value="string:1">מיליליטר</option><option label="כפית" value="string:2">כפית</option><option label="כפיות" value="string:3">כפיות</option><option label="כף" value="string:4">כף</option><option label="כפות" value="string:5">כפות</option><option label="כוס" value="string:6">כוס</option><option label="כוסות" value="string:7">כוסות</option><option label="יחידה" value="string:8">יחידה</option><option label="יחידות" value="string:9">יחידות</option><option label="קורט" value="string:10">קורט</option><option label="אריזה" value="string:11">אריזה</option><option label="אריזות" value="string:12">אריזות</option><option label="גביע" value="string:13">גביע</option><option label="גביעים" value="string:14">גביעים</option><option label="קילו" value="string:15">קילו</option></select>
                            </div>
                            <div className="form-group-mb-0 col-md-4 col-sm-4">
                                <label htmlFor="ingredient">רכיב</label>
                                {/* <!-- <input type="input" className="form-control" id="ingredient" ng-model="ingredient" placeholder="מרשימה סגורה"> --> */}
                                <select className="form-control ng-pristine ng-untouched ng-valid ng-empty" name="repeatSelect" ng-show="ingredientExists" ng-model="ingredientOpt" ng-change="addMissingIngredient()" ng-options="option.id as option.name group by option.type for option in ingredientsList"><option value="" className="" selected="selected">-- בחר אחד --</option><optgroup label="רשימה:"><option label="אבקת אפייה" value="string:7AJHZb9CZM-5">אבקת אפייה</option><option label="אשל" value="string:IsO6poRJQN-12">אשל</option><option label="ביצים" value="string:IsO6poRJQN-10">ביצים</option><option label="בצל" value="string:j5p3SpbSAJ-22">בצל</option><option label="בצל סגול" value="string:7AJHZb9CZM-8">בצל סגול</option><option label="גבינת &quot;טוב טעם&quot;" value="string:uXhSl9982U-13">גבינת "טוב טעם"</option><option label="גרגירי חומוס" value="string:j5p3SpbSAJ-21">גרגירי חומוס</option><option label="חלב סויה" value="string:7AJHZb9CZM-7">חלב סויה</option><option label="כמון" value="string:7AJHZb9CZM-4">כמון</option><option label="מים" value="string:7AJHZb9CZM-6">מים</option><option label="מלח" value="string:NLnUhQT6aE-22">מלח</option><option label="מלח הימאליה אפור ורוד" value="string:7AJHZb9CZM-2">מלח הימאליה אפור ורוד</option><option label="סוכר" value="string:uXhSl9982U-15">סוכר</option><option label="סולת" value="string:uXhSl9982U-17">סולת</option><option label="סלק" value="string:LiHu5RdHPW-25">סלק</option><option label="פלפל" value="string:7AJHZb9CZM-3">פלפל</option><option label="קינמון" value="string:h2zDcBjDbT-21">קינמון</option><option label="קמח" value="string:uXhSl9982U-16">קמח</option><option label="קמח עדשים" value="string:7AJHZb9CZM-1">קמח עדשים</option><option label="שזיפים" value="string:h2zDcBjDbT-19">שזיפים</option><option label="שיני שום" value="string:j5p3SpbSAJ-23">שיני שום</option><option label="שמן" value="string:NLnUhQT6aE-19">שמן</option><option label="שמנת חמוצה" value="string:IsO6poRJQN-11">שמנת חמוצה</option><option label="תפודים" value="string:IsO6poRJQN-9">תפודים</option></optgroup><optgroup label="רכיב לא נמצא"><option label="הוסף" value="number:-1">הוסף</option></optgroup></select>
                                <input type="input" className="form-control ng-pristine ng-untouched ng-valid ng-empty ng-hide" id="ingredient" ng-model="ingredient" ng-show="!ingredientExists" placeholder="שם הרכיב"/>  
                              </div>
                            <div className="form-group-mb-0 col-md-3 col-sm-4">
                                <label htmlFor="ingredientComm">הערה</label>
                                <input type="input" className="form-control ng-pristine ng-untouched ng-valid ng-empty" id="ingredientComm" ng-model="ingredientComm" placeholder="למשל: קצוץ, שהושרה 12 שעות וכד'"/>
                            </div>
                            <div className="form-group-mb-0 col-md-2 col-sm-4">
                                <label>&nbsp;</label>
                                <br/>
                                <input className="btn btn-primary mx-1" type="button" value="שמור" ng-click="saveIngredientLocally()"/>
                                <input className="btn btn-primary" type="reset" ng-click="ingredientExists=true" value="נקה"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-1">&nbsp;
                            </div>
                            <div className="form-group col-md-9">
                                <small className="form-text text-muted">למשל: כוס, גרם וכו' (לבחור מרשימה סגורה כדי שאפשר יהיה לעשות המרות)</small>
                            </div>
                            <div className="form-group col-md-2">&nbsp;
                            </div>
                        </div>                               
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            פירוט שלבי ההכנה
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                            {/* <!-- ngRepeat: instruction in recipe.instructions -->                         */}
                        <div className="form-row"><hr/></div>
                        <div className="form-row" id="instructionForm">
                            <div className="form-group-mb-0 col-lg-2 col-md-1 col-sm-1">
                                <label htmlFor="seq">#</label>
                                <input type="input" className="form-control ng-pristine ng-untouched ng-valid ng-not-empty" id="seq" ng-model="seq" placeholder=""/>
                            </div>
                            <div className="form-group-mb-0 col-lg-8 col-md-9 col-sm-11">
                                <label htmlFor="instruction">הוראה</label>
                                <input type="input" className="form-control ng-pristine ng-untouched ng-valid ng-empty" id="instruction" ng-model="instruction" placeholder="מה יבוצע בשלב זה"/>
                            </div>
                            <div className="form-group-mb-0 col-lg-2 col-md-2">
                                <label>&nbsp;</label>
                                <br/>
                                <input className="btn btn-primary" type="button" value="שמור שלב" ng-click="saveStepLocally()"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-lg-9">
                                <small className="form-text text-muted">טיפ: אין צורך לשמור על רציפות מספור. לדוגמא: הוראות 0,6,9 יוצגו כ-1,2,3</small>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>            
        </div>
    </div>

    {/* <!-- Accordion --> */}
    <div className="form-row m-2 ng-hide" ng-show="false">
        <div className="col-md-1 col-6">
            {/* <!-- Show only on edit page --> */}
            <input className="btn btn-danger align-right" type="button" value="מחק מתכון" data-toggle="modal" data-target="#modalPopup" ng-click="deleteRecipe()"/>

        </div>
        <div className="col-md-11 col-6 align-left">
            <input className="btn btn-primary" type="button" value="שמור מתכון" ng-click="editRecipe()" ng-disabled="recipeForm.$invalid" disabled="disabled"/>
        </div>
    </div>
    <div className="form-row m-2" ng-show="true">
        <div className="col align-left">
                <div ng-show="!recipeForm.$pristine &amp;&amp; recipeForm.$invalid" className="ml-2 form-control alert alert-danger ng-hide" role="alert">
                "שם המתכון" הוא שדה חובה
            </div>
        </div>
        <div className="col align-left">
            <input className="btn btn-primary" type="button" value="שמור מתכון" ng-click="addRecipe()" ng-disabled="recipeForm.$invalid" disabled="disabled"/>
        </div>
    </div>
</form>
        </>
    );
};

export default ReceiptCreate;