import React from 'react'
import style from './Task.module.css'

class Task extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            remove: false
        }
    }

    strikethroughTask = (event) => {
        let eventObj = event
        event.target.style.border = '2px solid #183588'
        event.target.className = event.target.className + " " + style.removeTaskIcon
        this.setState({remove: true})
        setTimeout(() => {
            this.props.callback(eventObj)
        }, 5000)
    }

    render() {
        return (
            <div className={style.task_container}>
                <div className={style.content}>
                    <div className={this.state.remove ? `${style.task} ${style.remove}` : style.task}>{this.props.taskText}</div>
                    <div
                        className={style.removeTask}
                        onClick ={this.strikethroughTask}
                        data-key={this.props.keyOfStore}
                        style={{border: `2px solid ${this.props.colorButton%2===0 ? "#D103FC" : "#1654B9" }`}}
                    ></div>
                </div>
            </div>
        )
    }
}

export default Task
