import React from 'react';
import ReactMarkdown from 'react-markdown';
import "./blogdetails.css";

class BlogDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {md: this.props.md};
  }

  componentDidMount() {
    fetch(this.state.md).then((response) => response.text().then((text) => {
      this.setState({ details: text});
    }))
  }

  render() {
    return(
      <div className="blogdetails">
        <ReactMarkdown source={this.state.details}/>
      </div>
    )
  }
}

export default BlogDetails;
