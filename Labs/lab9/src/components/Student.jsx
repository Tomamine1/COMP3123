/* 
Student will be defined as a class component 
*/

import { Component } from "react"

class Student extends Component {
    state = {
        result: "PASS"

    }

    // this will be the event handler callback function for the button
    toggleResult = () => {
        this.setState({
            result : this.state.result === "PASS" ? "FAIL": "PASS"
        })
    }

    render(){
        const { firstName, lastName } = this.props
        
        return (
            <aside clasName="class">
                <h3>
                    Student: {firstName} {lastName}
                </h3>

                <p>Result: {this.state.result}</p>
                <button OnClick={this.toggleResult}>Toggle result</button>

            </aside>
        )
    }
}

export default Student