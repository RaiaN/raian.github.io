import React from "react"
import { Link } from "gatsby"

const ProjectInfo = props => {
    return (
        <React.Fragment>
            <div className="img-container" key={props.index}>
                <Link to="/second" state={{img: props.item.l}}>
                {}
                    <img
                        src={props.item.s}
                        alt=""
                        title=""
                    />
                </Link>
            </div>
            <style jsx>
                {`
                    .img-container {
                        position: relative;
                        width: 50%;
                        background: #EEE;
                        border-radius: 20px;
                        border: 1px solid ghostwhite;
                        overflow: hidden;
                        z-index: 1;
                    }

                    .img-container::before {
                        content: '';
                        display: block;
                        margin-top: 100%;
                        z-index: 1;
                    }

                    .img-container img {
                        top: 0;
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: auto;
                        margin: 0 !important;
                        border-radius: 5px;
                        border: 1px solid gray;
                        transition: 0.2s ease-in-out;
                        z-index: 2;

                        :hover {
                            opacity: 0.2;
                            transform: scale(1.1);
                            
                        }
                    }
                `}
            </style>
        </React.Fragment>
    )
}

export default ProjectInfo;