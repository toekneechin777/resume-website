import React from "react";
import "./experiencebox.css"
import InfoBox from "./InfoBox.js";


class ExperienceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: this.props.title,
                  image: this.props.image,
                  left_info: this.props.left_info,
                  right_info: this.props.right_info,
                  showInfo: false};
  }

  componentDidMount() {
    fetch(this.state.left_info).then((response) => response.text().then((text) => {
      this.setState({ left_info: text});
    }))
    fetch(this.state.right_info).then((response) => response.text().then((text) => {
      this.setState({ right_info: text});
    }))
  }

  displayInfo = () => {
    console.log("Hit");
    console.log(this.state.showInfo);
    if(this.state.showInfo) {
      this.setState({'showInfo': false});
    } else {
      this.setState({'showInfo': true});
    }
  }

  render() {
    return(
      <div>
        <div className="blue" onClick={this.displayInfo}>
          <p><b> {this.state.title} </b></p>
          <img className="drop-down-img" src={this.state.image} alt=''/>
        </div>
        {this.state.showInfo ? <InfoBox left_info={this.state.left_info} right_info={this.state.right_info}/> : null}
      </div>

    )
  }
}


export default ExperienceBox
