import React from "react"
import { Link } from "gatsby"

export default props => 
(
    <React.Fragment>
        <li>
            <Link to={props.to}>{props.children}</Link> 
        </li>
        <style jsx>
        {`
            li {
                display: inline-block;
                margin-right: 0em;
                margin-left: 1em;
            }

            @media (max-width: 500px) 
            {
                li {
                    display: inline-block;
                    margin-right: 1em;
                    margin-left: 0em;
                }
            }
            
        `}
        </style>
    </React.Fragment>
)