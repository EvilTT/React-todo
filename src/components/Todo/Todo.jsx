import React from 'react'
import NewTask from '../CreateNewTast/NewTask'
import TaskList from '../TaskList/TaskList'
import style from './Todo.module.css'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clearAll: false,
            newTask: undefined,
        }
    }

    clearAllClick = () => {
        this.setState({ clearAll: true })
    }

    componentDidUpdate() {
        if (this.state.clearAll) this.setState({ clearAll: false })
    }

    saveNewTask = (taskText) => {
        let numberKey = (Math.random() * taskText.length).toFixed(7)
        this.setState({
            newTask: {
                key: numberKey.toString(),
                text: taskText,
            },
        })
        this.props.visibleCallback()
    }

    clearNewTast = () => this.setState({ newTask: undefined })

    render() {
        return (
            <div className={style.todo}>
                <div className={style.wrapper}>
                    <div>
                        <div className={style.title}>
                            {this.props.visible
                                ? "Todo's Tasks"
                                : 'Create a new note'}
                        </div>
                        {this.props.visible ? (
                            <TaskList
                                isClearAll={this.state.clearAll}
                                newTask={this.state.newTask}
                                clearNewTask={this.clearNewTast}
                            />
                        ) : (
                            <NewTask saveTask={this.saveNewTask} />
                        )}
                    </div>
                    {this.props.visible ? (
                        <div
                            className={style.clear}
                            onClick={this.clearAllClick}
                        >
                            Clear all
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        )
    }
}

export default Todo
