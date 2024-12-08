//React Import
import React, { Fragment, Component } from 'react';

//JS Imports
import Todo from "../Todo";
import NewTodo from '../NewTodo';
import Divider from '../Divider/Divider';

//CSS Imports
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: ['Item #1', 'Item #2', 'Item #3'] };
        const [item1, item2, ...rest] = [
            "Write some code",
            "Change the world",
            "Take a nap",
            "Eat a cookie"
        ];
        this.state = {
            items: [item1, item2, rest.join(" and ")]
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(item) {
        this.setState({ items: [...this.state.items, item] });
    }

    removeTodo(removeItem) {
        const filteredItems = this.state.items.filter(description => description !== removeItem);
        this.setState({ items: filteredItems });
    }

    renderItems() {
        return this.state.items.map((description, index) => (
            <Fragment key={"div-" + description}>
                <Todo 
                    key={description}
                    description={description} 
                    removeTodo={this.removeTodo}
                />
                <Divider key={"divide-" + description} />
            </Fragment>
        ));
    }

    render() {
        return (
            <div className="TodoList">
                <NewTodo addTodo={this.addTodo} />
                {this.renderItems()}
            </div>
        );
    }
}

export default TodoList;