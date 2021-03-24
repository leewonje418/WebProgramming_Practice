import { Component } from "react";

class EventClass extends Component {
    state = {
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        })
    }
    
    render() {
        return (
            <div>
                <h1>이벤트 핸들링</h1>
                <input
                    type='text'
                    name='message'
                    placeholder='아무거나'
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventClass;