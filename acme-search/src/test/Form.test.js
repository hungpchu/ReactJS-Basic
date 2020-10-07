import React from "react";
import renderer from "react-test-renderer";
import Form from "./../js/Form.js";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

configure({ adapter: new Adapter() });
describe("<Form />", () => {
  let mockForm;
  beforeEach(() => {
    mockForm = mount(<Form />);
  });
  describe("(snapshot)", () => {
    it("renders correctly", () => {
      const mockSaveUpdatedData = jest.fn();
      const formSnapShot = renderer
        .create(<Form saveUpdatedData={mockSaveUpdatedData} />)
        .toJSON();
      expect(formSnapShot).toMatchSnapshot();
    });
  });

  describe("the visibility of the field-input-list", () => {
    test("should not render field-input-list if value of dataSourceValue is select", () => {
      mockForm.setState({
        dataSourceValue: "select",
      });
      expect(mockForm.find(".field-input-list").exists()).toEqual(false);
    });

    test("should render field-input-list if value of dataSourceValue is not select", () => {
      mockForm.setState({
        dataSourceValue: "contacts",
      });
      expect(mockForm.find(".field-input-list").exists()).toEqual(true);
    });
  });

  describe("the function saveUpdatedData from Search", () => {
    test("should be called if value of dataSourceValue is not select", () => {
      let mockSaveUpdatedData = jest.fn();
      mockForm.setProps({
        saveUpdatedData: mockSaveUpdatedData,
      });
      mockForm.setState({
        dataSourceValue: "contacts",
      });
      mockForm.find("#save-data-button").simulate("click");
      expect(mockSaveUpdatedData).toHaveBeenCalled();
    });
  });
});
