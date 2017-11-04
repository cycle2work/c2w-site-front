import {Icon} from "antd";
import {expect} from "chai";
import {shallow} from "enzyme";
import React from "react";

import DownloadLink from "../../../src/components/DownloadLink";
import {black} from "../../../src/commons/colors";

describe("DownloadLink", () => {

    it("renders one a element", () => {
        const element = shallow(<DownloadLink />);
        expect(element.find("a")).to.have.length(1);
    });

    it("renders one Icon component", () => {
        const element = shallow(<DownloadLink />);
        expect(element.find(Icon)).to.have.length(1);
    });

    it("provides filePath prop to href of a element", () => {
        const element = shallow(<DownloadLink filePath={"this is a file path"} />);
        expect(element.find("a").prop("href")).to.equal("this is a file path");
    });

    it("renders label prop", () => {
        const element = shallow(<DownloadLink label={"this is a label"} />);
        expect(element.contains("this is a label")).to.equal(true);
    });

    it("provides textColor prop to color of a element", () => {
        const element = shallow(<DownloadLink textColor={"this is a text color"} />);
        expect(element.find("a").prop("style").color).to.equal("this is a text color");
    });

    describe("for default props", () => {

        it("sets filePath to empty string", () => {
            const element = shallow(<DownloadLink />);
            expect(element.find("a").prop("href")).to.equal("");
        });

        it("sets textColor to black", () => {
            const element = shallow(<DownloadLink />);
            expect(element.find("a").prop("style").color).to.equal(black);
        });

    });

});