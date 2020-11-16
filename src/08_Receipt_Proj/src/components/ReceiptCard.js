// import React, { useState } from 'react';
import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
// import NavbarExternal from './NavbarExternal';

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

const ReceiptCard = (props) => {

  const history = useHistory();

  const goToReceipt = () => {
    history.push("/mainNotLogedIn");
  };

  return (
    <>
      {/* <NavbarExternal /> */}
      <div className="card border border-dark rounded-lg ml-5 mb-5 img-fluid z-depth-4 rounded" style={{ color: 'black', width: "14rem", boxshadow: "4px 4px 25px" }}>
        <img src={props.card.pic} className="card-img-top" style={{ width: "14rem", height: "11rem" }} alt={props.name} />
        {/* Arrow Button  */}
        {/* <a className="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3">
          <i className="fas fa-chevron-right pl-1"></i>
        </a> */}
        <div className="card-body text-right">
          <h5 className="card-title">
            {/* <a className="card-title" onClick={goToReceipt}> */}
            <Link className="card-title" to="/receiptDetails">
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
      </div>
    </>
  );
};

export default ReceiptCard;