import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from "enzyme";
import renderer from "react-test-renderer";
import {configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-18';
import Todo from './Todo';

describe(Todo, () => {
    const description = "New Todo";
    const mockRemoveTodo = jest.fn();
    const component = shallow(
        <Todo description={description} removeTodo={mockRemoveTodo} />
    );

    it ("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Todo />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders and matches our snapshot", () => {
        const component = renderer.create(<Todo description="Yo" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders a Todo component", () => {
        expect(component.contains(<div className="Todo" />));
    });

    it("contains the description", () => {
        expect(component.text()).toContain(description);
    });

    it("marks the Todo as done", () => {
        component.find("button.MarkDone").simulate("click");
        expect(component.state("done")).toEqual(true);
    });

    it("calls the mock remove function", () => {
        component.find("button.RemoveTodo").simulate("click");
        expect(mockRemoveTodo).toHaveBeenCalled();
    });
});