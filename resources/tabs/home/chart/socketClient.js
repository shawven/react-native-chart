import {Alert} from 'react-native';
export default class socketClient {

    url = "ws://localhost:8888/websocket";

    client;

    connect() {
        this.client = new WebSocket("ws://127.0.0.1:8888/websocket?uid=" + Math.random());

        this.client .onopen = () => {
            // connection opened
            this.client.send("something"); // send a message
        };

        this.client .onmessage = e => {
            // a message was received
            Alert.alert(e.data);
        };

        this.client.onerror = e => {
            // an error occurred
            Alert.alert(e.message);
        };

        this.client.onclose = e => {
            // connection closed
            Alert.alert(e.code, e.reason);
        };
    }

    send(message) {
        this._checkSocketStatus();
        this.client.send(message);
    }

    _onopen () {
        // connection opened
        this.client.send("something"); // send a message
    }


    _onmessage (e) {
        // a message was received
        console.log("on message:", e.data);
    }

    _onerror (e) {
        // an error occurred
        console.log("on error:", e.message);

    }

    _onclose (e) {
        // connection closed
        console.log("on close:", e.code, e.reason);
    }

    _checkSocketStatus() {
        if (this.client.readyState !== WebSocket.OPEN) {
            throw new Error("socket connect failed")
        }
    }
};

