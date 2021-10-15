import React from 'react'
import style from './NewTask.module.css'

class NewTask extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
        }
    }

    onChangeHandker = (event) => {
        this.setState({ value: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.saveTask(this.state.value)
    }

    render() {
        return (
            <div className={style.newTaskCont}>
                <form className={style.form} onSubmit={this.submitHandler}>
                    <label className={style.taskText}>
                        <textarea
                            className={style.textarea}
                            value={this.state.value}
                            onChange={this.onChangeHandker}
                        ></textarea>
                    </label>
                    <input
                        type='submit'
                        value='Add task'
                        className={style.submit}
                    />
                </form>
            </div>
        )
    }
}

export default NewTask
