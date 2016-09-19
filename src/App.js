import React from 'react';
import LocalStorageMixin from 'react-localstorage';
import reactMixin from 'react-mixin';
import MyForm from './components/Form';
import JsonSheet from './components/JsonSheet';
import Select from 'react-select';

//statefull container
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            templates: [
                {
                    name: "Login", options: [
                    {foo: "bar", reason: "123"},
                    {foo: "foobar", reason: "456"},
                ]
                },
                {
                    name: "Register", options: [
                    {foo: "bar", reason: "123432"},
                    {foo: "foobar", reason: "456423"},
                ]
                }
            ],
            selectedTemplate: "Login"
        }
    }

    render() {
        var onTextChange = e => {
            this.setState({
                jsonText: e.target.value,
                isJsonValid: e.target.value.length % 2 == 0
            });
        };
        var setTemplate = event => this.setState({selectedTemplate: event.target.value});

        var mapOption = o => <option key={o.name} value={o.name}>{o.name}</option>;

        var validLabel = this.state.isJsonValid ? <p className="valid">Valid</p> : <p className="invalid">Invalid</p>;

        var template = this.state.templates.filter(t => t.name == this.state.selectedTemplate)[0];
        var templateText = JSON.stringify(template.options, null, '  ');

        return (
            <section className="container">
                <div className="left-half">
                    <article>
                        <h1>Options</h1>
                        {validLabel}
                        <select name="" value={this.state.selectedTemplate} onChange={setTemplate}>
                            {this.state.templates.map(mapOption)}
                        </select>
                        <JsonSheet text={templateText}
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

// reactMixin(App.prototype, LocalStorageMixin);

export default App;

