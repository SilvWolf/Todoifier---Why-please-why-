import React, {Component} from 'react';
import styles from "./Todo.module.scss";

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.description,
            done:false,
            critical: false
        };

        this.markAsDone = this.markAsDone.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.markCritical = this.markCritical.bind(this);
    }

    markCritical(){
        this.setState({critical: true});
    }

    markAsDone() {
        this.setState({done: true});
    }

    removeTodo(){
        this.props.removeTodo(this.state.description);
    }

    cssClasses() {
        let classes = [];
        if(this.state.critical){
            classes = [styles.critical];
        }else{
            classes = [styles.todo]
        }
        if(this.state.done){
            classes = [...classes, 'done'];
        }
        return classes.join('');
    }

    render () {
        return(
            <div className={this.cssClasses}>
                {this.state.description}
                <br />
                <hr className={styles.redDivider} />
                <button className="MarkDone" onClick={this.markAsDone}>Mark as Done</button>
                <button className="MarkTodo" onClick={this.removeTodo}>Remove Me</button>
                <button className="MarkCritical" onClick={this.markCritical}>Mark as Critical</button>
            </div>
        );
    } 
}

export default Todo;