import React from "react";
import "./blogpost.css";
import ReactHtmlParser from "react-html-parser";
import {
  Link
} from "react-router-dom";


class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: this.props.md,
                  image: this.props.image,
                  id: this.props.id};
  }

  componentDidMount() {
    fetch(this.state.content).then((response) => response.text().then((text) => {
      let title = text.split('---')[0].substring(3);
      let desc = text.split('---')[2];
      this.setState({title: title, desc: desc});
    }))
  }

  render() {
    let route = "/blog/" + this.state.id;
    return(
      <div className="blogpost">
        <div className="blogpost_desc">
          <Link to={route}>
            <img src={this.state.image} alt=''/>
            <div className="blogpost_info">
              <h2>{ ReactHtmlParser (this.state.title)}</h2>
              <h4>{ ReactHtmlParser (this.state.desc)}</h4>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default BlogPost
