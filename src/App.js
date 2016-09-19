import React from 'react';
import LocalStorageMixin from 'react-localstorage';
import reactMixin from 'react-mixin';
import MyForm from './components/Form';
import JsonSheet from './components/JsonSheet';

//statefull container
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jsonText: "tyto"
        }
    }

    render() {
        var onTextChange = e => {
            this.setState({
                jsonText: e.target.value,
                isJsonValid: e.target.value.length % 2 == 0
            });
        };

        var validLabel = this.state.isJsonValid? <p className="valid">Valid</p> : <p className="invalid">Invalid</p>;

        return (
            <section className="container">
                <div className="left-half">
                    <article>
                        <h1>Options</h1>
                        {validLabel}
                        <select name="" id="">
                            <option value="">Login</option>
                            <option value="">Register</option>
                        </select>
                        <JsonSheet text={this.state.jsonText}
                                   onTextChange={onTextChange}
                                   isJsonValid={this.state.isJsonValid}/>
                    </article>
                </div>
                <div className="right-half">
                    <article>
                        <h1>Right Half</h1>
                        <MyForm options={this.state.options}/>
                    </article>
                </div>
            </section>);
    }
}

reactMixin(App.prototype, LocalStorageMixin);

export default App;
