import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from "enzyme";
import renderer from "react-test-renderer";
import {configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-18';
import NewTodo from './NewTodo';

configure({adapter: new Adapter()});

describe(newTodo, () => {
    const mockAddTodo = jest.fn();
    const component = shallow(<NewTodo addTodo={mockAddTodo} />);

    it ("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<NewTodo addTodo={mockAddTodo} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders and matches out snapshot", () => {
        const component = renderer.create(<NewTodo mockAddTodo={mockAddTodo} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders a NewTodo component", () => {
        expect(component.contains(<div className="NewTodo" />));
    });

    it("contains the form", () => {
        expect(component.find("input")).toHaveLength(1);
    });

    it("calls the passed in addTodo function when add button is clicked", () => {
        component.find("button").simulate("click");
        expect("mockAddTodo").toBeCalled();
    });

    it("updates the form when keys are pressed", () => {
        const updateKey = "New Todo";
        component.instance().handleUpdate({target: {value: updateKey}});
        expect(component.state("item")).toEqual(updateKey);
    });

    it("blanks out the Todo Name when the button is clicked", () => {
        const updateKey = "I should be empty";
        component.instance().handleUpdate({target: {value: updateKey}});
        expect(component.state("item")).toEqual(updateKey);

        component.find("button").simulate("click");
        expect(component.state("item")).toHaveLength(0);
    });
});