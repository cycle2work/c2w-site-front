import "babel-polyfill";
import chai from "chai";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {jsdom} from "jsdom";
import sinonChai from "sinon-chai";

configure({adapter: new Adapter()});

// Setup chai
chai.use(sinonChai);

// Setup fake DOM
global.document = jsdom();
global.window = document.defaultView;
global.navigator = {
    userAgent: "node.js"
};

const noop = () => {};

// Prevent mocha test for breaking when import css file
require.extensions[".css"] = noop;
require.extensions[".png"] = noop;
require.extensions[".svg"] = noop;
