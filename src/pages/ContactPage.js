import React from 'react';
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom';
 
class ContactPage extends React.Component {
    state = {
        value: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: ""
        })
    }

    // handleChange =(e) => {
    //     this.setState({
    //         value: e.target.value
    //     });
    // }

    handleChange =(e) => {
    if (e.target.value.length > 0) {
            this.setState({
                value: e.target.value,
                isEmpty: false
            });
        } else {
            this.setState ({
            value: e.target.value,
            isEmpty: true,
            })

        }}

    render() {
    return (
        <div className="contact">
        <form onSubmit={this.handleSubmit}>
            <h3> Write to us!</h3>
            <textarea value={this.state.value}
            onChange={this.handleChange}
            placeholder="Write message..."> </textarea>
            <button className="btn btn-primary">Send</button>
            <h3> your form is send</h3>
        </form>
        <Prompt
            when={!this.state.value}
            message={"Empty form, please fill in"} />
        </div>
    );
}
}

export default ContactPage;
