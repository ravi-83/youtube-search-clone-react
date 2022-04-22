import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  onInputChange(term) {
    this.setState({ term: term });
    this.props.onSearchTermChange(term);
    //console.log(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          type="text"
          onChange={(event) => this.onInputChange(event.target.value)}
          placeholder="Search for anything"
        />
      </div>
    );
  }
}

export default SearchBar;
