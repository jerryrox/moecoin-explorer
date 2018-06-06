import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from 'components/Header';
import Home from 'routes/Home';
import Blocks from 'routes/Blocks';
import Transactions from 'routes/Transactions';

const AppContainer = styled.div`
    background-color: $fafafa;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Main = styled.main`
    max-width: 1000px;
    width: 100%;

    @media screen and (max-width: 600px) {
        width: 95%;
    }
`;

const AppPresenter = ({isLoading, transactions, blocks}) => {
    return(
        <BrowserRouter>
            <AppContainer>
                <Header />
                {
                    !isLoading &&
                    <Main>
                        <Switch>
                            <Route exact path="/" render={() => <Home transactions={transactions.slice(0, 5)} blocks={blocks.slice(0, 5)} />} />
                            <Route path="/blocks" render={() => <Blocks />}/>
                            <Route path="/transactions" render={() => <Transactions />} />
                        </Switch>
                    </Main>
                }
            </AppContainer>
        </BrowserRouter>
    );
};

AppPresenter.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    transactions: PropTypes.array,
    blocks: PropTypes.array
};

export default AppPresenter;