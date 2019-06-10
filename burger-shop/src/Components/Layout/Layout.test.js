import { configure, shallow } from "enzyme";
//NOTE connect enzyme with react
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Layout from './Layout';
import Toolbar from '../../Nav/Toolbar/Toolbar';
//create a new adapter
configure({ adapter: new Adapter() });
describe("<Toolbar />", () => {
  it("should render one <Toolbar /> item if not authenticated", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find(Toolbar)).toHaveLength(1);
  });
});
