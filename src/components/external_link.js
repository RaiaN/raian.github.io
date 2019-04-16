import React from "react"

export default props => 
(
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <a href={props.url}>{props.url_name}</a>
    </li>
)