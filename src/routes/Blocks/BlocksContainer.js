import React from "react";
import PropTypes from "prop-types";
import BlocksPresenter from "./BlocksPresenter";

class BlocksContainer extends React.Component {

    render() {
        return (
            <BlocksPresenter {...this.props} />
        );
    }
}

BlocksContainer.propTypes = {
    blocks: PropTypes.array.isRequired
};

export default BlocksContainer;