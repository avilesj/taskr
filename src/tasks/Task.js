import React, {Component} from 'react';

class Task extends Component{

    constructor(props){
        super(props);
        this.state = {
            hasContent: true,
            content: "First task!"
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.hasContent ?

                    <p>{this.state.content}</p>
                    :
                    <p>Empty task!</p>
                }
            </div>
        )
    }
}

export default Task;