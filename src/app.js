import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/app.scss';

import React from 'react';
import ReactDom from 'react-dom';


var App = React.createClass({
    render: function(){
        return(<div>hello world</div>)
    }
})

ReactDom.render(<App />, document.getElementById('app'));
