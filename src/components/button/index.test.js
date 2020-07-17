import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";
import { spy } from "sinon";

import Button from "../../../src/components/button";
import { primaryColor, white } from "../../../src/commons/colors";

describe("Button", () => {
    it("renders one div element", () => {
        const element = shallow(<Button onClick={spy()} />);
        expect(element.find("div")).to.have.length(1);
    });

    it("provides backgroundColor prop to style of div element", () => {
        const element = shallow(<Button backgroundColor={"color red"} onClick={spy()} />);
        expect(element.find("div").prop("style").background).to.equal("color red");
    });

    it("renders label prop inside of div element", () => {
        const element = shallow(<Button label={"this is a label"} onClick={spy()} />);
        expect(element.find("div").text()).to.equal("this is a label");
    });

    it("calls onClick prop triggering onClick of div element", () => {
        const onClick = spy();
        const element = shallow(<Button onClick={onClick} />);
        element.find("div").simulate("click");
        expect(onClick).to.have.been.calledOnce();
    });

    it("provides textColor prop to style of div element", () => {
        const element = shallow(<Button textColor={"color green"} onClick={spy()} />);
        expect(element.find("div").prop("style").color).to.equal("color green");
    });

    describe("for default props", () => {
        it("sets backgroundColor to primaryColor", () => {
            const element = shallow(<Button onClick={spy()} />);
            expect(element.find("div").prop("style").background).to.equal(primaryColor);
        });

        it("sets label to empty string", () => {
            const element = shallow(<Button onClick={spy()} />);
            expect(element.find("div").text()).to.equal("");
        });

        it("sets textColor to white", () => {
            const element = shallow(<Button onClick={spy()} />);
            expect(element.find("div").prop("style").color).to.equal(white);
        });
    });
});
