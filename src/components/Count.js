import React from "react";
import "../App.css";
import VoteButton from "./VoteButton";

class Count extends React.Component {
  state = { vote_counts: 0 };

  vote_callback = () => {
    if (this.state.vote_counts < 10)
      this.setState({ vote_counts: this.state.vote_counts + 1 });
    else alert("Cannot vote more");
  };

  unvote_callback = () => {
    if (this.state.vote_counts > 0)
      this.setState({ vote_counts: this.state.vote_counts - 1 });
    else alert("Cannot unvote ");
  };

  display_score = () => {
    if (this.state.vote_counts === 10) {
      return "MAX";
    }
    if (this.state.vote_counts === 0) {
      return "MIN";
    } else {
      return this.state.vote_counts;
    }
  };
  render() {
    return (
      <div className="display">
        <VoteButton
          button_name="Click to Vote"
          parentCallback={this.vote_callback}
        />
        <div className="result">{this.display_score()}</div>
        <VoteButton
          button_name="Click to Unvote"
          parentCallback={this.unvote_callback}
        />
      </div>
    );
  }
}
export default Count;
