import React from 'react'
import Task from '../Task/Task'
import style from './TaskList.module.css'

class TaskList extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: new Map(
                Object.entries({
                    1: '1',
                    2: '2',
                    3: '3',
                    4: '4',
                    5: '5',
                    6: '6',
                    7: '7',
                    8: '8',
                    9: '9'
                })
            )}
        this.clickToRemoveTask = this.clickToRemoveTask.bind(this)
    }

    clickToRemoveTask(event) {
        let key = event.target.dataset.key
        this.setState((state) => {
            let curTasks = state.tasks
            curTasks.delete(key)
            return {
                tasks: curTasks,
            }
        })
    }

    clean() {
        this.setState((state) => {
            state.tasks.clear()
            return { tasks: state.tasks }
        })
    }

    // componentDidMount() {
    //     window.addEventListener('beforeunload', () => {
    //         localStorage.setItem(
    //             'taskList',
    //             JSON.stringify(Object.fromEntries(this.state.tasks))
    //         )
    //     })

    //     let tasks = JSON.parse(localStorage.getItem('taskList'))
    //     this.setState({ tasks: new Map(Object.entries(tasks)) })
    // }

    componentDidUpdate() {
        if (this.state.tasks.size === 0) {
            localStorage.clear()
            return
        }
        if (this.props.isClearAll) this.clean()
    }

    render() {
        return (
            <>
                <div className={style.tasks}>
                    {this.state.tasks.size ? (
                        Object.entries(
                            Object.fromEntries(this.state.tasks.entries())
                        ).map((item, index) => {
                            return (
                                <Task
                                    key={item.toString()}
                                    taskText={item[1]}
                                    keyOfStore={item[0]}
                                    callback={this.clickToRemoveTask}
                                    colorButton={index}
                                />
                            )
                        })
                    ) : (
                        <div className={style.startText}>
                            To start using the to-do list, add your first task.
                            To do this, click on the plus in the lower right
                            corner. In the window that opens, write a howl
                            problem and voila!
                        </div>
                    )}
                </div>
               
            </>
        )
    }
}

export default TaskList
