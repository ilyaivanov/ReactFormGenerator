import React from 'react';
import LocalStorageMixin from 'react-localstorage';
import reactMixin from 'react-mixin';
import MyForm from './components/Form';

//statefull container
class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello</h3>
                <MyForm/>
            </div>
        );
    }
}

reactMixin(App.prototype, LocalStorageMixin);

export default App;
