import React from "react"
import { Link } from "gatsby"

const ProjectInfo = props => {
    return (
        <React.Fragment>
            <div className="img-container">
                <img src={props.item.s} alt="" title=""></img>
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
                    border-top: 2px dashed;
                    border-left: 2px dashed;
                    border-right: 2px dashed;
                    padding: 1px;
                    border-size: 0.5px;
                    margin-bottom: -27px;
                    position: relative;
                    top: 5%;
                }

                .img-container img {
                    width: 200px;
                    border-radius: 10px;
                    transition: 0.2s ease-in-out;
                    z-index: 2;
                    float: left;
                    margin-right: 16px;

                    :hover {
                        opacity: 0.95;
                        transform: scale(1.01);
                    }
                }
            `}
            </style>
        </React.Fragment>
    )
}

export default ProjectInfo;