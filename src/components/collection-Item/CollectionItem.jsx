import React from "react";
import "./CollectionItem.css";
import CustomButton from "../Custom-Button/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action-creator";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="col-md-3">
      <div className="collectionDiv">
        {console.log(imageUrl)}
        <div className="card">
          <img className="card-img-top" src={`${imageUrl}`} alt="product" />
          <div className="card-img-overlay"></div>
        </div>
        <div>
          <div className="foot">
            <span>{name}</span>
            <span className="price">${price}</span>
          </div>
        </div>
        <div className="customBtnDiv">
          <CustomButton onClick={() => addItem(item)} addToCartBtn>
            {" "}
            Add To Cart{" "}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
