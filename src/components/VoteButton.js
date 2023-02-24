import React from "react";
import "../App.css";

class VoteButton extends React.Component {
  onTrigger = () => {
    this.props.parentCallback();
  };
  render() {
    return (
      <button className="vote_button" onClick={this.onTrigger}>
        {this.props.button_name}
      </button>
    );
  }
}
export default VoteButton;
