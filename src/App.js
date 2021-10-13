import React from 'react'
import style from './App.module.css'
import Todo from './components/Todo/Todo'
class App extends React.Component {
    constructor(){
      super()
      this.state = {
        newTaskVis: true
      }
    }

    newTask = () => this.setState((state) => {
      return { newTaskVis: !state.newTaskVis}
    })

    render() {
        return (
            <div className={style.todo_container}>
                <Todo visible = {this.state.newTaskVis} visibleCallback = {this.newTask}/>
                <div className={style.newTask} onClick={this.newTask}>
                    <span></span>
                </div>
            </div>
        )
    }
}

export default App
