import React from "react"

export default props => 
(
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <a href={props.url}><b>{props.url_name}</b></a>
    </li>
)