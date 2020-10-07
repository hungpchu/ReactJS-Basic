import React from "react";
import renderer from "react-test-renderer";
import Search from "./../js/Search.js";
import Form from "./../js/Form.js";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

configure({ adapter: new Adapter() });
describe("<Search />", () => {
  let mockSearch, mockForm;
  beforeEach(() => {
    mockSearch = mount(<Search />);
    mockForm = mount(<Form />);
  });
  describe("(snapshot)", () => {
    test("renders correctly", () => {
      const searchSnapShot = renderer.create(<Search />).toJSON();
      expect(searchSnapShot).toMatchSnapshot();
    });
  });
  describe("the visibility of the Form", () => {
    test("should not render Form if visible is false", () => {
      mockSearch.setState({
        visible: false,
      });
      expect(mockSearch.find(".update-form-body").exists()).toEqual(false);
    });

    test("should render Form if visible is true", () => {
      mockSearch.setState({
        visible: true,
      });
      expect(mockSearch.find(".update-form-body").exists()).toEqual(true);
    });

    test("should render Form if click the update data button", () => {
      mockSearch.find("#update-data-button").simulate("click");
      expect(mockSearch.find(".update-form-body").exists()).toEqual(true);
    });
  });

  describe("the visibility of the Result list", () => {
    test("should render result list with one search key matches", () => {
      mockSearch.setState({
        searchKey: "other",
      });
      mockSearch.find(".search-button").simulate("click");
      expect(mockSearch.find(".result-list").exists()).toEqual(true);
    });

    test("should render result list with multiple search key matches", () => {
      mockSearch.setState({
        searchKey: "other,alice,acme",
      });
      mockSearch.find(".search-button").simulate("click");
      expect(mockSearch.find(".result-list").exists()).toEqual(true);
    });

    test("should render result-list with one key matches and other not", () => {
      mockSearch.setState({
        searchKey: "other,hungchu",
      });
      mockSearch.find(".search-button").simulate("click");
      expect(mockSearch.find(".result-list").exists()).toEqual(true);
    });

    test("should not render result-list if search key not match", () => {
      mockSearch.setState({
        searchKey: "hungchu",
      });
      mockSearch.find(".search-button").simulate("click");
      expect(mockSearch.find(".result-list").exists()).toEqual(false);
    });
  });
});
