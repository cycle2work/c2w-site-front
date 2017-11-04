import {Icon} from "antd";
import {expect} from "chai";
import {shallow} from "enzyme";
import React from "react";
import sinon from "sinon";

import ScrollDown from "../../../src/components/scroll-down";

describe("ScrollDown", () => {

    it("renders one a element", () => {
        const element = shallow(<ScrollDown />);
        expect(element.find("a")).to.have.length(1);
    });

    it("renders one Icon component", () => {
        const element = shallow(<ScrollDown />);
        expect(element.find(Icon)).to.have.length(1);
    });

    it("sets type prop of Icon component to 'down-circle'", () => {
        const element = shallow(<ScrollDown />);
        expect(element.find(Icon).prop("type")).to.equal("down-circle");
    });

    describe("on click on a element", () => {

        it("calls animateScroll.scrollTo providing 1000", () => {
            const scrollTo = sinon.spy();
            ScrollDown.__Rewire__("animateScroll", {scrollTo});
            const element = shallow(<ScrollDown />);
            element.find("a").simulate("click");
            expect(scrollTo).to.have.been.calledWith(1000);
        });

    });

});
