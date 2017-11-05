import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";

import Views from "../src/views";

describe("Root view", () => {

    it("renders", () => {
        const element = shallow(Views);
        expect(element).to.have.length(1);
    });

});
