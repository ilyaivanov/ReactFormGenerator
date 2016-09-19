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
            templates: [
                {
                    name: "Login",
                    options: [
                        {name: "Username", type: "text"},
                        {name: "Password", type: "password"},
                    ]
                },
                {
                    name: "Register",
                    options: [
                        {name: "Username", type: "text"},
                        {name: "Email", type: "email"},
                        {name: "Password", type: "password"},
                        {name: "Repeat Password", type: "password"}
                    ]
                }
            ],
            isJsonValid: true,
            workingTextArea: "",
            selectedTemplate: "Login"
        }
    }

    render() {
        var setTemplate = event => this.setState({selectedTemplate: event.target.value});

        var mapOption = o => <option key={o.name} value={o.name}>{o.name}</option>;

        var validLabel = this.state.isJsonValid ? <p className="valid">Valid</p> : <p className="invalid">Invalid</p>;
        var templateText;
        var template = this.state.templates.filter(t => t.name == this.state.selectedTemplate)[0];

        if (this.state.isJsonValid) {
            templateText = JSON.stringify(template.options, null, '  ');
        } else {
            templateText = this.state.workingTextArea;
        }

        var onTextChange = event => {
            try {
                template.options = JSON.parse(event.target.value);
                this.setState({isJsonValid: true});
            } catch (ignored) {
                this.setState({isJsonValid: false, workingTextArea: event.target.value});
            }
        };

        return (
            <section className="container">
                <div className="left-half">
                    <article>
                        <h1>Options</h1>
                        <h3>{validLabel}</h3>
                        <div>
                            <small className="center">each option should contain <b>name</b> and <b>type</b></small>
                        </div>
                        <br/>
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
                        <h1>Form Results</h1>
                        <MyForm options={template.options}/>
                    </article>
                </div>
            </section>);
    }
}

// reactMixin(App.prototype, LocalStorageMixin);

export default App;

