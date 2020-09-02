import React from "react";
import "./experiencebox.css"
import ReactMarkdown from "react-markdown";


export default function InfoBox(props) {
  return(
    <div className="drop-info">
      <div className="drop-left">
        <ReactMarkdown source={props.left_info} />
      </div>
      <div className="drop-right">
        <ReactMarkdown source={props.right_info} />
      </div>
      <div style={{clear:'both'}}></div>
    </div>
  )
}
