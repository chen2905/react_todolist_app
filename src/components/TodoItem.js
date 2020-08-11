import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#428A2E',
            padding: '10px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render() {
        const {id,title}=this.props.todo
        const btnStyle ={
            background:'#ff0000',
            color:'#fff',
            border:'none',
            padding:'5px 9px',
            borderRadius:'50%',
            cursor:'pointer',
            float:'right'
        }
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type ="checkbox" onChange={this.props.markComplete.bind(this,id)} />
                    {title}
                    <button style={btnStyle}onClick ={this.props.deleteTodo.bind(this,id)}>x</button>
                </p>

            </div>
        )
    }
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem
