import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example';
import LodashCom from './components/LodashCom';
import EchartsCom from './components/EchartsCom';

class APP extends React.PureComponent {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="app">
                <Example />
                <LodashCom />
                <EchartsCom />
            </div>
        );
    }
}

ReactDOM.render(<APP />, document.querySelector('#app'));