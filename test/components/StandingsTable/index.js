import {Table as AntdTable} from "antd";
import {expect} from "chai";
import {shallow} from "enzyme";
import React from "react";

import StandingsTable from "../../../src/components/StandingsTable";

describe("StandingsTable", () => {

    it("renders antd Table component", () => {
        const element = shallow(<StandingsTable />);
        expect((element).find(AntdTable)).to.have.length(1);
    });

    it("provides data prop to dataSource of antd Table component", () => {
        const element = shallow(<StandingsTable data={[{key: 1}, {key: 2}]} />);
        expect((element).find(AntdTable).prop("dataSource"))
            .to.deep.equal([{key: 1}, {key: 2}]);
    });

    describe("if data prop is not provided", () => {

        it("provides an empty array to dataSource of antd Table component", () => {
            const element = shallow(<StandingsTable />);
            expect((element).find(AntdTable).prop("dataSource")).to.deep.equal([]);
        });

    });

    it("provides title prop to title of antd Table component as a function", () => {
        const element = shallow(<StandingsTable title={"this is a title"} />);
        expect((element).find(AntdTable).prop("title")()).to.equal("this is a title");
    });

});