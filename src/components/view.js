import React from "react"
import { InfiniteScroll } from "./infiniteScroll.tsx"
import { FaCog } from "react-icons/fa"
import theme from "../theme.yaml"
import Grid from "./grid.js"

/** View for "home" page with infinite scroll */
class View extends React.Component {

    constructor(props) {
        super(props)
        console.log("*** Constructing View ***")
        if (!props.globalState.items) {
            console.log("View is initializing items according to page " + props.pageContext.currentPage)
            props.globalState.updateState({
                items: props.pageContext.pageImages,
                cursor: props.pageContext.currentPage+1
            })
        }
    }

    componentDidMount() {
        this.props.globalState.updateState({
            isLoading: false
        })
    }

    render() {
        const g = this.props.globalState
        const pageContext = this.props.pageContext

        /*
         * currentlyVisibleItems typically come from global state.
         * In other cases we simply render the items of this page (corresponds to a path like "/", "/2", "/3",...)
         * The other cases are:
         * - If a user has JS disabled (we won't be able to manipulate global state).
         * - The very first render on initial pageload. 
         */
        const currentlyVisibleItems = g.items || pageContext.pageImages

        return(
            <>
                {/* Infinite Scroll */}
                <InfiniteScroll
                    throttle={150}
                    threshold={1800}
                    isLoading={g.isLoading}
                    hasMore={g.hasMore(pageContext)}
                    onLoadMore={g.loadMore}
                >

                    {/* Visible items given as a child element for inf. scroll). */}
                    <Grid items={currentlyVisibleItems} />
                    
                </InfiniteScroll>

                {/* Loading spinner. */}
                {g.isLoading && (
                    <div className="spinner">
                        <FaCog/>
                    </div>
                )}

                <style jsx>{`
                    @keyframes spinner {
                        to {transform: rotate(360deg);}
                    }
                    .spinner {
                        margin-top: 40px;
                        font-size: 60px;
                        text-align: center;
                        display: ${"none"};

                        :global(svg) {
                            fill: ${theme.color.brand.primaryLight};
                            animation: spinner 3s linear infinite;
                        }
                        
                    }
                    `}
                </style>

            </>


        )
    }
}

export default View