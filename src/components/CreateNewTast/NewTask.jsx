import React from "react";
import style from "./NewTask.module.css"

class NewTask extends React.Component{
    constructor(){
        super()
        this.state = {
            value: ''
        }
    }

    render(){
        return(
            <div className={style.newTaskCont}>
                
            </div>
        )
    }
}

export default NewTask