import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
import $ from "jquery";
window.jQuery = window.$ = $;


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

//ADD Jquery Modal
$("button").click(function () {
    $.get("#button", function () {
        alert("Jquery Modal");
    });
});
