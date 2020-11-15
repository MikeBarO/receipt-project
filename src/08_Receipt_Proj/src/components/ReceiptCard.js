import React, { useState } from 'react';
// import NavbarExternal from './NavbarExternal';

class Ripple extends React.Component {
  initializeState = () => {
    return {
      spanStyles: {},
      count: 0
    }
  }
  state = this.initializeState();
  render() {
    const { children = null, classes = "", onClickHandler = null } = this.props;
    return (
      <div className={classes} onClick={this.onClickHandler}>
        {children}
      </div>
    );
  }
}

const ReceiptCard = (props) => {
  return (
    <>
      <div className="card border border-dark rounded-lg ml-5 mb-5" style={{ color: 'black', width: "14rem", boxshadow: "4px 4px 25px" }}>
        <img src={props.card.pic} className="card-img-top" style={{ width: "14rem", height: "11rem" }} alt={props.name} />
        {/* Button  */}
        <a className="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3">
          <i className="fas fa-chevron-right pl-1"></i>
        {/* <a href="#!" className="black-text d-flex justify-content-end"> */}
          {/* <h5>Read more <i className="fas fa-angle-double-right"></i></h5> */}
        </a>
        <div className="card-body text-right">
          <h5 className="card-title" href="https://hamuf.github.io/recipes-mockup/#!/view-recipe/uXhSl9982U">
            <strong>{props.card.name}</strong>
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