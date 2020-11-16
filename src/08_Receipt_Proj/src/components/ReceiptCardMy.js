// import React, { useState } from 'react';
import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
// import NavbarInternal from './NavbarInternal';

// class Ripple extends React.Component {
//   initializeState = () => {
//     return {
//       spanStyles: {},
//       count: 0
//     }
//   }
//   state = this.initializeState();
//   render() {
//     const { children = null, classes = "", onClickHandler = null } = this.props;
//     return (
//       <div className={classes} onClick={this.onClickHandler}>
//         {children}
//       </div>
//     );
//   }
// }

const ReceiptCardMy = (props) => {

  const history = useHistory();

  const goToAllReceiptsMy = () => {
    history.push("/receiptDetailsMy");
  };

  return (
    <>
      {/* <NavbarInternal /> */}
      {/* <div className="card border border-dark rounded-lg ml-5 mb-5" style={{ color: 'black', width: "14rem", boxshadow: "4px 4px 25px" }}> */}
      <div className="card border border-dark rounded-lg ml-5 mb-5 img-fluid z-depth-4 rounded" style={{ color: 'black', width: "14rem", boxshadow: "4px 4px 25px" }}>
        <img src={props.card.pic} className="card-img-top" style={{ width: "14rem", height: "11rem" }} alt={props.name} />
        <div className="card-body text-right">
          <h5 className="card-title">
            {/* <a className="card-title" onClick={goToReceipt}> */}
            <Link className="card-title" to="/receiptDetailsMy">
              {/* <Link className="btn btn-primary btn-block" to={`/receiptDetails/${props.receipt.id}`}><strong>{props.card.name}</strong></Link> */}
              <strong>{props.card.name}</strong>
              {/* </a> */}
            </Link>
            {/* <p className="card-text">{props.user.description}</p> */}
            <p className="ng-binding text-muted">{props.card.date}</p>
            <p className="card-text" onClick={() => props.onChangeView(props.card.id)}> {props.card.views} <strong>: צפיות </strong> </p>
          </h5>
          {/* <button onClick={() => props.onChangeView(props.card.id)} type="button" className="btn btn-outline-primary right" >
                    {props.card.views}
                  </button> */}
        </div>
        <div className="card-footer text-center" ng-show="true">
          <a href="#!/edit-recipe/EvI6DWqa0e" className="btn btn-primary" onClick={goToAllReceiptsMy}>עריכה</a>
        </div>
      </div>
    </>
  );
};

export default ReceiptCardMy;