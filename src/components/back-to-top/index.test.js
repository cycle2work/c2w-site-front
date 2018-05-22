import { BackTop, Icon } from "antd";
import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";

import BackToTop from "../back-to-top";

describe("BackToTop", () => {
    it("renders one BackTop component", () => {
        const element = shallow(<BackToTop />);
        expect(element.find(BackTop)).to.have.length(1);
    });

    it("renders one Icon component", () => {
        const element = shallow(<BackToTop />);
        expect(element.find(Icon)).to.have.length(1);
    });

    it("sets type of Icon component to up-circle", () => {
        const element = shallow(<BackToTop />);
        expect(element.find(Icon).prop("type")).to.equal("up-circle");
    });
});
