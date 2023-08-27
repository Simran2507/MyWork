import React from "react";
import "./FirstPart.css";
import HeroImage from "../Assets/HeroImage.png";
import Star from "../Assets/Star 3.png";
import SmallStar from "../Assets/Star 4.png";
import ThinLine from "../Assets/Line 23.png";
import S1 from '../Assets/Star 1.png'
import Truck from "../Assets/Truck.png";
import FBIcon from "../Assets/fb.png";
import TWIcon from "../Assets/tw.png";
import IGIcon from "../Assets/ig.png";
import LDIcon from "../Assets/ld.png";
import OR from "../Assets/Line 11.png";
import Model from "../Assets/Model.png";

const FirstPart = () => {
  return (
    <div className="overlap">
      <div className="rectangle" />
      <img className="img" alt="Rectangle" src={HeroImage} />
      <div className="group">
        <div className="overlap-group">
          <div className="rectangle-2" />
          <img className="star" alt="Star" src={Star} />
          <img
            className="jessica-radanavong"
            alt="Jessica radanavong"
            src={Model}
          />
          <div className="rectangle-3" />
          <img className="star-2" alt="Star" src={SmallStar} />
          <p className="oregon-jacket">
            <span className="text-wrapper">Oregon jacket</span>
          </p>
          <p className="element">
            <span className="text-wrapper">$124</span>
          </p>
          <img className="line" alt="Line" src={ThinLine} />
        </div>
      </div>
      <p className="lorem-ipsum-dolor">
        <span className="span">Fresh</span>
      </p>
      <p className="span-wrapper">
        <span className="span">Look</span>
      </p>
      <p className="p">
        <span className="text-wrapper-2">2022</span>
      </p>
      <div className="rectangle-4" />
      <p className="HOME">
        <span className="text-wrapper-3">HOME</span>
      </p>
      <p className="ABOUT">
        <span className="text-wrapper-3">ABOUT</span>
      </p>
      <p className="CONTACT-US">
        <span className="text-wrapper-3">CONTACT US</span>
      </p>
      <p className="BAG">
        <span className="text-wrapper-4">BAG (0)</span>
      </p>
      <p className="WISHLIST">
        <span className="text-wrapper-4">WISHLIST (0)</span>
      </p>
      <p className="shop-kart">
        <span className="text-wrapper-5">ShopKart</span>
      </p>
      <p className="free-delivery">
        <span className="text-wrapper-6">Free Delivery</span>
      </p>
      <p className="return-policy">
        <span className="text-wrapper-6">Return Policy</span>
      </p>
      <p className="login">
        <span className="text-wrapper-7">Login</span>
      </p>
      <p className="follow-US">
        <span className="text-wrapper-7">Follow US</span>
      </p>
      <img className="layer" alt="Layer" src={Truck.png} />
      <div className="social-links">
        <img className="vector" alt="Vector" src={FBIcon} />
        <img className="vector-2" alt="Vector" src={LDIcon} />
        <img className="vector-3" alt="Vector" src={TWIcon} />
        <img className="group-2" alt="Group" src={IGIcon} />
      </div>
      <img className="line-2" alt="Line" src={OR} />
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <img
            className="line-3"
            alt="Line"
            src={ThinLine}
          />
          <img
            className="star-3"
            alt="Star"
            src={S1}
          />
        </div>
      </div>
      <div className="frame">
        <div className="frame-2">
          <div className="see-more-wrapper">
            <p className="see-more">
              <span className="text-wrapper-3">See more</span>
            </p>
          </div>
          </div>
      </div>
      <div className="dropdown">
        <div className="overlap-3">
          <p className="dopdown">
            <span className="text-wrapper-8">OUR PRODUCTS</span>
          </p>
        </div>
        <div className="overlap-4">
          <p className="PRODUCT">
            <span className="text-wrapper-9">PRODUCT 1</span>
          </p>
          <p className="PRODUCT-2">
            <span className="text-wrapper-9">PRODUCT 2</span>
          </p>
          <p className="PRODUCT-3">
            <span className="text-wrapper-9">PRODUCT 3</span>
          </p>
          <p className="PRODUCT-4">
            <span className="text-wrapper-9">PRODUCT 4</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
