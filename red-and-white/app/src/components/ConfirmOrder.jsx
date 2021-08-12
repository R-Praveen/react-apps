import "../styles/ConfirmOrder.scss";
import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

import { CONSTANTS } from "../constants/constants";
import Button from "./Button";
import CartItemList from "./CartItemList";
import Features from "./Features";
import Header from "./Header";

/**
 * Displays the confirm order page along with selected Cart items.
 * @param {object} props
 */
const ConfirmOrder = ({ currentCartItems }) => {
  return (
    <div className="confirm-order">
      <Header />
      <div className="content-wrapper">
        <Card>
          <Card.Content>
            <Card.Header>Order Placed</Card.Header>
            <Card.Description>
              <p>Your order has been successfully placed.</p>
              <p>
                You can track your orders online through the Invoice Number.
                <br />
                Thank you for shopping with us.
              </p>
            </Card.Description>
            <CartItemList
              currentCartItems={currentCartItems}
              canUpdateCartItem={false}
            />
          </Card.Content>
        </Card>
        <div>
          <Features />
        </div>
        <div className="button-wrapper">
          <Link to={CONSTANTS.URL_PATHS.HOME}>
            <Button className="btn primary-btn">CONTINUE SHOPPING</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ConfirmOrder.propTypes = {
  currentCartItems: PropTypes.array.isRequired,
};

export default ConfirmOrder;
