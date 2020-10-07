import React from "react";
import ".././styles/Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceValue: "select",
      dropdownValue: ["select", "contacts", "dropbox", "slack", "tweet"],
      contactForm: [
        "id",
        "name",
        "company",
        "emails",
        "phones",
        "matching_terms",
        "last_contact",
      ],
      slackForm: [
        "id",
        "channel",
        "alice",
        "message",
        "timestamp",
        "matching_terms",
      ],
      tweetForm: ["user", "message", "timestamp", "matching_terms"],
      dropboxForm: [
        "id",
        "path",
        "title",
        "shared_with",
        "matching_terms",
        "created",
      ],
      array: ["emails", "phones", "shared_with", "matching_terms"],
      newObject: {},
    };
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.updateNewObject = this.updateNewObject.bind(this);
    this.saveData = this.saveData.bind(this);
    this.displayDropDownValue = this.displayDropDownValue.bind(this);
  }

  handleSelectionChange(event) {
    this.setState({ dataSourceValue: event.target.value });
    this.setState({ newObject: {} });
  }

  updateNewObject(key, event) {
    const isArray = this.state.array.includes(key.element);
    const updatedNewObject = this.state.newObject;
    isArray
      ? (updatedNewObject[key.element] = event.target.value.split(","))
      : (updatedNewObject[key.element] = event.target.value);
    this.setState({ newObject: updatedNewObject });
  }

  displayForm() {
    if (this.state.dataSourceValue === "select") return null;
    const array =
      this.state.dataSourceValue === "contacts"
        ? this.state.contactForm
        : this.state.dataSourceValue === "dropbox"
        ? this.state.dropboxForm
        : this.state.dataSourceValue === "slack"
        ? this.state.slackForm
        : this.state.tweetForm;
    const field = array.map((element) => (
      <li key={JSON.stringify(element)} id={element + "-field-item"}>
        <label id={element + "-label"}>{element}</label>
        <input
          type="text"
          id={element + "-input"}
          placeholder={element}
          onChange={this.updateNewObject.bind(this, { element })}
        />
        {this.state.array.includes(element) && (
          <p className="instruction-message">
            *{element} is array. Please add ',' in between for multiple value
          </p>
        )}
      </li>
    ));
    return (
      <>
        <ul className="field-input-list">{field}</ul>
        <button id="save-data-button" onClick={this.saveData}>
          Save data
        </button>
      </>
    );
  }

  saveData() {
    this.props.saveUpdatedData(
      this.state.dataSourceValue,
      this.state.newObject
    );
    // set the newObject back to empty
    // for the new updated one later
    this.setState({ newObject: {} });
  }

  displayDropDownValue() {
    return this.state.dropdownValue.map((value) => (
      <option
        id={value + "-selection-value"}
        type="submit"
        key={value + "-selection-value"}
      >
        {value}
      </option>
    ));
  }

  render() {
    return (
      <div className="update-form-body">
        <label className="dropdown-label">
          Choose a datasource to save updated data:
        </label>
        <select
          className="dropdown-selection"
          onClick={this.handleSelectionChange}
        >
          {this.displayDropDownValue()}
        </select>
        {this.displayForm()}
      </div>
    );
  }
}

export default Form;
