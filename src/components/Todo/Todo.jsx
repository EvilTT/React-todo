import React from 'react'
import NewTask from '../CreateNewTast/NewTask'
import TaskList from '../TaskList/TaskList'
import style from './Todo.module.css'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clearAll: false,
            newTask : []
        }
    }

    clearAllClick = () => {
        this.setState({ clearAll: true })
    }

    componentDidUpdate() {
        if (this.state.clearAll) this.setState({ clearAll: false })
    }

    saveNewTask(task){
        this.setState({newTask: task})
    }

    render() {
        return (
            <div className={style.todo}>
                <div className={style.wrapper}>
                    <div>
                        <div className={style.title}>{this.props.visible ? "Todo's Tasks" : 'Create a new note'}</div>
                        {this.props.visible ? (
                            <TaskList isClearAll={this.state.clearAll} newTask={this.state.newTask}/>
                        ) : (
                            <NewTask visibleCallback = {this.props.visibleCallback}/>
                        )}
                    </div>
                    {this.props.visible ? <div 
                    className={style.clear}
                    onClick={this.clearAllClick}>
                        Clear all
                    </div> : ''}
                </div>
            </div>
        )
    }
}

export default Todo
