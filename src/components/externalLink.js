import React from "react"

const ExternalLink = ({url, url_name}) => {
    return (
        <React.Fragment>
            <li>
                <a href={url} target="_blank" rel="noopener noreferrer"><b>{url_name}</b></a>
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
}

export default ExternalLink;
