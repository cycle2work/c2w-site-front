import { Icon } from "antd";
import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";

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
});
