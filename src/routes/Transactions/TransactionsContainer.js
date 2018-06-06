import React from "react";
import PropTypes from "prop-types";
import TransactionsPresenter from "./TransactionsPresenter";

class TransactionsContainer extends React.Component {

    render() {
        return <TransactionsPresenter />;
    }
}

TransactionsContainer.propTypes = {
    transactions: PropTypes.array.isRequired
};

export default TransactionsContainer;