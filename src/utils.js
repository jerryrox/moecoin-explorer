export const formatDate = (seconds) => {
    const date = new Date(null);
    date.setSeconds(seconds);
    return date.toUTCString();
};

export const parseJson = (string) => {
    try {
        return JSON.parse(string);
    }
    catch(e) {
        console.log("parseJson - " + JSON.stringify(e));
        return null;
    }
};

export const parseMessage = (message) => {
    if(typeof message.data === "string") {
        const {data} = message;
        const parsedMessage = parseJson(data);

        if(parsedMessage !== null) {
            const {type} = parsedMessage;
            if(type === "BLOCKCHAIN_RESPONSE")
                return parsedMessage.data;
            return null;
        }
    }
};