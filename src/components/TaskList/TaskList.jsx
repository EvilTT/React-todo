import React from 'react'
import Task from '../Task/Task'
import style from './TaskList.module.css'

class TaskList extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: new Map(),
            refresh: false
        }
        this.clickToRemoveTask = this.clickToRemoveTask.bind(this)
    }

    clickToRemoveTask(event) {
        let key = event.target.dataset.key
        this.setState((state) => {
            let curTasks = state.tasks
            curTasks.delete(key)
            return {
                tasks: curTasks
            }
        })
    }

    clean() {
        this.setState((state) => {
            state.tasks.clear()
            return { tasks: state.tasks }
        })
    }

    static getDerivedStateFromProps(props) {
        return props.newTask ? { refresh: true } : { refresh: false }
    }

    componentDidMount() {
        window.addEventListener('beforeunload', () => {
            localStorage.setItem(
                'taskList',
                JSON.stringify(Object.fromEntries(this.state.tasks))
            )
        })

        let tasks = JSON.parse(localStorage.getItem('taskList'))
        if (!tasks) return
        this.setState({
            tasks: new Map(Object.entries(tasks)),
        })
        if (this.state.refresh) {
            this.setState((state) => {
                let newTask = this.props.newTask
                let newState = state.tasks.set(newTask.key, newTask.text)
                this.props.clearNewTask()
                return { tasks: newState }
            })
            return
        }
    }

    componentDidUpdate() {
        if (this.state.tasks.size === 0) {
            localStorage.clear()
            return
        }
        if (this.props.isClearAll) this.clean()
    }

    componentWillUnmount(){
        localStorage.setItem(
            'taskList',
            JSON.stringify(Object.fromEntries(this.state.tasks))
        )
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
                            <p>
                                To start using the to-do list, add your first
                                task. To do this, click on the plus in the lower
                                right corner. In the window that opens, write a
                                howl problem and voila!{' '}
                            </p>
                            <span className={style.develop}>
                                Made with <span className={style.love}>❤</span>{' '}
                                by{' '}
                                <a href='https://github.com/EvilTT?tab=repositories'>
                                    EvilTT
                                </a>
                            </span>
                        </div>
                    )}
                </div>
            </>
        )
    }
}

export default TaskList
