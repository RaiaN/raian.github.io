import React from "react"

export default props => 
(
    <React.Fragment>
        <li>
            <a href={props.url} target="_blank" rel="noopener noreferrer"><b>{props.url_name}</b></a>
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