import React from "react";
import "../App.css";
import Count from "./Count";

class Template extends React.Component {
  render() {
    return (
      <div className="template">
        <div className="box">
          <div className="context">
            <h2>{this.props.type}</h2>
            <h3>{this.props.name}</h3>
            <p>{this.props.text}</p>
          </div>
          <div className="picture">
            <img
              src={this.props.imglink}
              alt={this.props.imgname}
              className="img"
            />
          </div>
        </div>
        <Count />
      </div>
    );
  }
}

export default Template;
