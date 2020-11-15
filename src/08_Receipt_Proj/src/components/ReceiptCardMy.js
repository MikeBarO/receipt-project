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

const ReceiptCardMy = (props) => {
  return (
    <>
      {/* <div className="card border border-dark rounded-lg ml-5 mb-5" style={{ color: 'black', width: "14rem", boxshadow: "4px 4px 25px" }}> */}
      <div className="card border border-dark rounded-lg ml-5 mb-5" style={{ color: 'black', width: "14rem", boxshadow: "4px 4px 25px" }}>
        <img src={props.card.pic} className="card-img-top" style={{ width: "14rem", height: "11rem" }} alt={props.name} />
        <div className="card-body text-right">
          <h5 className="card-title" href="#"><strong>{props.card.name}</strong>
            {/* <p className="card-text">{props.user.description}</p> */}
            <p className="ng-binding text-muted">{props.card.date}</p>
            <p className="card-text" onClick={() => props.onChangeView(props.card.id)}> {props.card.views} <strong>: צפיות </strong> </p>
          </h5>
          {/* <button onClick={() => props.onChangeView(props.card.id)} type="button" className="btn btn-outline-primary right" >
                    {props.card.views}
                  </button> */}
        </div>
        <div class="card-footer text-center" ng-show="true">
          <a href="#!/edit-recipe/EvI6DWqa0e" class="btn btn-primary">עריכה</a>
        </div>
      </div>
    </>
  );
};

export default ReceiptCardMy;