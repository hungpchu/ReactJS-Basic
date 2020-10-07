import React from "react";
import calendarData from ".././data/calendar.json";
import contactData from ".././data/contacts.json";
import dropboxData from "../data/dropbox.json";
import slackData from "../data/slack.json";
import tweetData from "../data/tweet.json";
import Form from "./Form.js";
import ".././styles/Search.css";

/***
 * Search component:
 * 1. deal with input from user as searchKey and return result
 * 2. show updated data form when user clicks Update data
 */
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      visible: false,
      calendar: calendarData.calendar,
      contact: contactData.contacts,
      dropbox: dropboxData.dropbox,
      slack: slackData.slack,
      tweet: tweetData.tweet,
      resultList: [],
      timeArray: ["date", "last_contact", "created", "timestamp"],
    };

    this.setSearchKeyChange = this.setSearchKeyChange.bind(this);
    this.search = this.search.bind(this);
    this.visible = this.visible.bind(this);
    this.saveUpdatedData = this.saveUpdatedData.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  /***
   * function to format array for display
   */
  formatArray(array) {
    return array?.map((value, index, array) =>
      index !== array.length - 1 ? value + ", " : value
    );
  }

  /***
   * function to format time for display
   */
  formatTime(time) {
    time = time.split(" ")[0].split("-");
    return time[1] + "/" + time[2] + "/" + time[0];
  }

  /***
   * function to update the value of searchKey
   * when user type in the new search Key
   * */
  setSearchKeyChange(event) {
    this.setState({ searchKey: event.target.value });
  }

  /***
   * function to search while pressing key
   * without click search
   */
  onKeyPress(event) {
    var code = event.keyCode || event.which;
    // code = 13 is for Enter key
    if (code === 13) this.search();
  }

  /***
   * function to search the value of searchKey
   * in the dataSource
   */
  search() {
    // new updated result List
    let updatedResultList = [];
    updatedResultList = updatedResultList.concat(
      this.state.calendar.filter((element) =>
        element.matching_terms?.some((key) =>
          this.state.searchKey.includes(key)
        )
      )
    );
    updatedResultList = updatedResultList.concat(
      this.state.contact.filter((element) =>
        element.matching_terms?.some((key) =>
          this.state.searchKey.includes(key)
        )
      )
    );
    updatedResultList = updatedResultList.concat(
      this.state.dropbox.filter((element) =>
        element.matching_terms?.some((key) =>
          this.state.searchKey.includes(key)
        )
      )
    );
    updatedResultList = updatedResultList.concat(
      this.state.slack.filter((element) =>
        element.matching_terms?.some((key) =>
          this.state.searchKey.includes(key)
        )
      )
    );
    updatedResultList = updatedResultList.concat(
      this.state.tweet.filter((element) =>
        element.matching_terms?.some((key) =>
          this.state.searchKey.includes(key)
        )
      )
    );
    this.setState({ resultList: updatedResultList });
  }

  /***
   * function to update the visible of
   * updated data form
   */
  visible() {
    this.setState({ visible: !this.state.visible });
  }

  /***
   * function to pass on to child component
   * Form to save updated Data input by user
   */
  saveUpdatedData(key, newObj) {
    if (key === "select" || Object.keys(newObj).length === 0) return;
    let dataSource;
    if (key === "contacts") {
      dataSource = this.state.contact.concat(newObj);
      this.setState({ contact: dataSource });
    } else if (key === "dropbox") {
      dataSource = this.state.dropbox.concat(newObj);
      this.setState({ dropbox: dataSource });
    } else if (key === "slack") {
      dataSource = this.state.slack.concat(newObj);
      this.setState({ slack: dataSource });
    } else {
      dataSource = this.state.tweet.concat(newObj);
      this.setState({ tweet: dataSource });
    }
    // close the updated data form after done
    this.visible();
  }

  /***
   * function to map result in resultList to display
   * in the screen for the user
   */
  showResult() {
    if (this.state.resultList.length === 0) return null;
    const resultDisplay = this.state.resultList.map((data) => {
      return (
        <li key={JSON.stringify(data)}>
          {Object.keys(data).map((key) => (
            <p
              key={JSON.stringify(key) + JSON.stringify(data[key])}
              id={"value-of-" + key + "-key"}
            >
              {key}:{" "}
              {this.state.timeArray.includes(key)
                ? this.formatTime(data[key])
                : typeof data[key] === "string"
                ? data[key]
                : this.formatArray(data[key])}{" "}
            </p>
          ))}
        </li>
      );
    });
    return <ol className="result-list">{resultDisplay}</ol>;
  }

  render() {
    return (
      <div className="seach-body">
        <div className="seach-box">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={this.setSearchKeyChange}
            onKeyPress={this.onKeyPress}
          />
          <button className="search-button" onClick={this.search}>
            Search
          </button>
          <button id="update-data-button" onClick={this.visible}>
            Update Data
          </button>
        </div>
        {this.state.visible && <Form saveUpdatedData={this.saveUpdatedData} />}
        {this.state.searchKey.length > 0 && this.showResult()}
      </div>
    );
  }
}

export default Search;
