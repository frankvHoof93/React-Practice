import React, { Component } from 'react'

class UserInput extends Component {
    inputStyle = {
        border: '1px solid red',
        margin: 'auto',
        textAlign: 'center'
    }

    render() {
        return (
            <div>
                <input style={this.inputStyle} type="text" onChange={this.props.changeHandler} value={this.props.username}/>
            </div>
        )
    }
}

export default UserInput