import React from "react"

import GridItem from "./gridItem.js";

const Grid = ({ items }) => {
    return (
        <>
            <center>
                <div className="grid">
                    {items.map((item, index) => <GridItem item={item} key={index}/> )}
                </div>
            </center>
            <style jsx>
                {`
                    .grid {
                        display: grid;
                        grid-template-columns: repeat(2, 400px);
                        grid-gap: 4px;
                        justify-content: center;
                    }

                    @media (max-width: 800px) {
                        .grid {
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                    }

                    @media (max-width: 300px) {
                        .grid {
                          grid-template-columns: 1fr;
                        }
                    }
                `}
            </style>
        </>
    )
}





export default Grid;