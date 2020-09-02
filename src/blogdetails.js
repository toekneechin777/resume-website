import React from 'react';
import ReactMarkdown from 'react-markdown';
import "./blogdetails.css";

import bp1 from "./blogs/blogpost1.md";
import bp2 from "./blogs/blogpost2.md";

const posts = [bp1, bp2];

class BlogDetails extends React.Component {
  constructor(props) {
    super(props);
    const path = props.match.params.id;
    const id = parseInt(path.slice(path.length -1)) - 1;
    this.state = {path: path,
                  md: posts[id]};
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
