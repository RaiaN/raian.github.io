import React from "react"
import { Link } from "gatsby"

const ProjectInfo = props => {
    return (
        <React.Fragment>
            <Link to="/second" state={{img: props.item.l}} >
                <div className="img-container">
                    <img src={props.item.s} alt="" title="">
                    </img>
                </div>
            </Link>
            <style jsx>
            {`
                .img-container {
                    text-align: center;
                    display: block;
                }

                .img-container::before {
                    
                }

                .img-container img {
                    width: 50%;
                    height: auto;
                    margin: 0 !important;
                    border-radius: 10px;
                    border: 1px solid gray;
                    transition: 0.2s ease-in-out;
                    z-index: 2;

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