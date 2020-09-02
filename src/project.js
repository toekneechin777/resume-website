import React from "react";
import "./project.css";
import ReactMarkdown from "react-markdown";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: this.props.image,
                  info: this.props.info};
  }

  componentDidMount() {
    fetch(this.state.info).then((response) => response.text().then((text) => {
      this.setState({ info: text});
    }))
  }

  render() {
    return(
      <div className="project">
        <div className="project_desc">
          <img src={this.state.image} alt=''/>
          <div className="project_info">
            <ReactMarkdown source={this.state.info}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
