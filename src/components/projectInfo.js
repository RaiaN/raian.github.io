import React from "react"
import { Link } from "gatsby"

const ProjectInfo = props => {
    return (
        <React.Fragment>
            <div className="img-container">
                <Link to="/blog/">
                    <img src={props.item.s} alt="" title=""></img>
                </Link>
                <p>
                    Project name and description
                </p>
            </div>
            <style jsx>
            {`
                .img-container {
                    display: inline;
                    float: left;
                    width: 800px;
                    border-top: 2px dotted;
                    border-left: 2px dotted;
                    border-right: 2px dotted;
                    border-bottom: 2px dotted;
                    padding: 0px;
                    margin-top: 0px;
                    margin-bottom: 1px;
                }

                .img-container img {
                    width: 200px;
                    border-radius: 10px;
                    transition: 0.2s ease-in-out;
                    z-index: 2;
                    float: left;
                    margin-right: 10px;
                    margin-left: 4px;
                    margin-top: 4px;
                    margin-bottom: 4px;

                    :hover {
                        opacity: 0.95;
                        transform: scale(1.01);
                    }
                }

                .img-container p {
                    margin-right: 0px;
                    margin-left: 8px;
                    margin-top: 4px;
                    margin-bottom: 4px;
                }
            `}
            </style>
        </React.Fragment>
    )
}

export default ProjectInfo;