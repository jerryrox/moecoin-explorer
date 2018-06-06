import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";
import {formatDate} from '../../utils';
import {
    Card,
    BlocksHeader,
    BlocksRow,
    TxHeader,
    TxRow
} from "components/Shared";

const TableContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
`;

const HomePresenter = ({blocks, transactions}) => (
    <Fragment>
        <TableContainer>
            <h2>Latest Blocks</h2>
            <Card>
                <BlocksHeader />
                {
                    blocks.map((block, index) => (
                        <BlocksRow
                            index={block.index}
                            hash={block.hash}
                            timestamp={formatDate(block.timestamp)}
                            difficulty={block.difficulty}
                            key={index}
                        />
                    ))
                }
            </Card>
        </TableContainer>
        <TableContainer>
            <h2>Latest Transactions</h2>
            <Card>
                <TxHeader />
                {
                    transactions.map((transaction, index) => (
                        <TxRow
                            timestamp={formatDate(transaction.timestamp)}
                            id={transaction.id}
                            insOuts={`${transaction.inputs.length}/${transaction.outputs.length}`}
                            amount={_.sum(transaction.outputs.map(output => output.amount))}
                            key={index}
                        />
                    ))
                }
            </Card>
        </TableContainer>
    </Fragment>
);

HomePresenter.propTypes = {
    blocks: PropTypes.array.isRequired,
    transactions: PropTypes.array.isRequired
};

export default HomePresenter;