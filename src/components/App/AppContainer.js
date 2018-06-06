import React from 'react';
import {injectGlobal} from 'styled-components';
import AppPresenter from './AppPresenter';
import reset from 'styled-reset';
import typography from '../../typography';
import axios from 'axios';
import _ from 'lodash';
import {API_URL, WS_URL} from "../../constants";
import {parseMessage} from '../../utils';

const baseStyles = () => injectGlobal`
    ${reset};
    ${typography};
    a {
        text-decoration:none !important;
    }
`;

export default class App extends React.Component {

    state = {
        isLoading: true
    };

    componentDidMount = () => {
        this.getData();
        this.connectToWebSocket();
    };

    getData = async() => {
        const request = await axios.get(`${API_URL}/blocks`);
        const blocks = request.data;
        const reversedBlocks = blocks.reverse();
        const transactions = _(reversedBlocks.map(block => block.data)).flatten().value();

        this.setState({
            blocks: reversedBlocks,
            transactions,
            isLoading: false
        });
    };

    connectToWebSocket = () => {
        const ws = new WebSocket(WS_URL);
        ws.addEventListener("message", message => {
            const parsedMessage = parseMessage(message);
            if(parsedMessage !== null && parsedMessage !== undefined) {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        blocks: [...parsedMessage, ...prevState.blocks],
                        transactions: [...parsedMessage[0].data, ...prevState.transactions]
                    };
                });
            }
        });
    };

    render() {
        baseStyles();
        return(
            <AppPresenter {...this.state} />
        );
    }
}
