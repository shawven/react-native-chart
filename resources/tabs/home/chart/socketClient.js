import {Alert} from 'react-native';

export default class socketClient {

    static url = "ws://10.0.0.20:8888/websocket";

    _onopen = (e) => {
        this.open(e);
    };

    _onmessage = (e) => {
        this.checkSocketStatus();
        this.read(e.data);
    };

    _onerror = (e) => {
        Alert.alert("on error:", e.message);
    };

    _onclose = (e) => {
        Alert.alert("on close:", e.code, e.reason);
    };

    connect() {
        this.client = new WebSocket(socketClient.url);

        this.client.onopen = this._onopen;

        this.client.onmessage = this._onmessage;

        this.client.onerror = this._onerror;

        this.client.onclose = this._onclose;
    }

    open(e) {
    }

    write(message) {
        this.checkSocketStatus();
        this.client.send(message);
    }

    read(message) {
    }

    checkSocketStatus() {
        if (this.client.readyState !== WebSocket.OPEN) {
            throw new Error("socket connect failed")
        }
    }
};

