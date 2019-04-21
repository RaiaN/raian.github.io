import React from "react"
import { Link } from "gatsby"

const ProjectInfo = props => {
    return (
        <React.Fragment>
            <div className="img-container">
                <Link to={props.page}>
                    <img src={props.image} alt="" title=""></img>
                </Link>
                <p>
                    <b>{props.name}</b>
                    
                </p>
                <p>
                    {props.descr}
                </p>
            </div>
            <style jsx>
            {`
                .img-container {
                    display: inline;
                    float: left;
                    width: 100%;
                    height: auto;
                    border-top: 2px dotted;
                    border-left: 2px dotted;
                    border-right: 2px dotted;
                    border-bottom: 2px dotted;
                    border-radius: 6px;
                    padding: 0px;
                    margin-top: 0px;
                    margin-bottom: 1px;
                    margin-right: 1px;
                }

                .img-container img {
                    width: 40%;
                    height: auto;
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
                        transform: scale(1.03);
                    }
                }

                .img-container p {
                    margin-right: 1px;
                    margin-left: 8px;
                    margin-top: 4px;
                    margin-bottom: 4px;
                }

                @media (max-width: 600px)
                {
                    .img-container
                    {
                        margin-left: 0px;
                        padding: 5px;
                    }

                    .img-container img
                    {
                        margin-left: 0px;
                        width: 100%;
                        float: none;
                    }
                    .img-container p
                    {
                        margin-left: 0px;
                        width: 100%;
                    }
                }
            `}
            </style>
        </React.Fragment>
    )
}

export default ProjectInfo;