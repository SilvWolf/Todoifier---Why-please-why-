//React Imports
import React from 'react';
import ReactDOM from 'react-dom';

//Testing Imports
import {shallow} from "enzyme";
import renderer from "react-test-renderer";
import {configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-18';

//JS Imports
import TodoList from './TodoList';
import Todo from "../Todo";
import NewTodo from "../NewTodo"

describe(TodoList, () => {
    const component = shallow(<TodoList />);

    it ("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<TodoList />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders and matches out snapshot", () => {
        const component = renderer.create(<TodoList />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders a TodoList component", () => {
        expect(component.contains(<div className="TodoList" />));
    });

    it("includes a new Todo Component", () => {
        expect(component.find(NewTodo)).toHaveLength(1);
    });

    it("renders the correct number of Todo Components", () => {
        const todoCount = component.state("items").length;
        expect(component.find(Todo)).toHaveLength(todoCount);
    });

    it("adds another Todo when the addTodo function is called", () => {
        const before = component.find(Todo).length;
        component.instance().addTodo("A New Item");
        const after = component.find(Todo).length;
        expect(after).toBeGreaterThan(before);
    });

    it("removes a Todo when the removeTodo function is called", () => {
        const before = component.find(Todo).length;
        const removeMe = component.state("items")[0];
        component.instance().removeTodo(removeMe);
        const after = component.find(Todo).length;
        expect(after).toBeLessThan(before);
    });
});