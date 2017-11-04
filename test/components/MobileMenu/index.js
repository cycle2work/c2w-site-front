import {expect} from "chai";
import {shallow} from "enzyme";
import React from "react";
import {slide as SlideMenu} from "react-burger-menu";

import MenuLink from "../../../src/components/MobileMenu/MenuLink";
import MobileMenu from "../../../src/components/MobileMenu";

describe("MobileMenu", () => {

    it("sets isOpen in state to false", () => {
        const element = shallow(<MobileMenu />);
        expect(element.state("isOpen")).to.equal(false);
    });

    it("renders one SlideMenu component", () => {
        const element = shallow(<MobileMenu />);
        expect(element.find(SlideMenu)).to.have.length(1);
    });

    it("does not render MenuLink links is not provided", () => {
        const element = shallow(<MobileMenu />);
        expect(element.find(MenuLink)).to.have.length(0);
    });

    it("renders one MenuLink providing one element in links prop", () => {
        const element = shallow(<MobileMenu links={[{label: "label", url: "url"}]} />);
        expect(element.find(MenuLink)).to.have.length(1);
    });

    it("renders two MenuLink providing two elements in links prop", () => {
        const element = shallow(
            <MobileMenu
                links={[
                    {label: "label1", url: "url1"},
                    {label: "label2", url: "url2"}
                ]}
            />
        );
        expect(element.find(MenuLink)).to.have.length(2);
    });

    it("provides to label prop of MenuLink the value of label attribute of links objects", () => {
        const element = shallow(
            <MobileMenu
                links={[
                    {label: "this is a label", url: "this is an url"}
                ]}
            />
        );
        expect(element.find(MenuLink).at(0).prop("label")).to.equal("this is a label");
    });

    it("provides to url prop of MenuLink the value of url attribute of links objects", () => {
        const element = shallow(
            <MobileMenu
                links={[
                    {label: "this is a label", url: "this is an url"}
                ]}
            />
        );
        expect(element.find(MenuLink).at(0).prop("url")).to.equal("this is an url");
    });

    describe("on click on MenuLink", () => {

        it("sets isOpen in state to false", () => {
            const element = shallow(
                <MobileMenu
                    links={[
                        {label: "this is a label", url: "this is an url"}
                    ]}
                />
            );
            element.setState({isOpen: true});
            element.find(MenuLink).at(0).simulate("click");
            expect(element.state("isOpen")).to.equal(false);
        });

    });

    it("provides isOpen (true) of state to isOpen prop of SlideMenu", () => {
        const element = shallow(<MobileMenu />);
        element.setState({isOpen: true});
        expect(element.find(SlideMenu).prop("isOpen")).to.equal(true);
    });

    it("provides isOpen (false) of state to isOpen prop of SlideMenu", () => {
        const element = shallow(<MobileMenu />);
        element.setState({isOpen: false});
        expect(element.find(SlideMenu).prop("isOpen")).to.equal(false);
    });

});