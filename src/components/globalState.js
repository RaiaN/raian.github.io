import React from "react"

/*
 * The reason we use Global State instead of Component State is that
 * when the user clicks something on the main page and then clicks back,
 * we don't want to reset the user's scroll position. If we don't maintain
 * state, then we will "lose" some of the items when the user clicks
 * back and the state resets, which obviously resets scroll position as well.
 */
export const GlobalStateContext = React.createContext({
    items: null,
    isLoading: true,
    cursor: 0, /* Which page infinite scroll should fetch next. */
    updateState: () => {},
    hasMore: () => {},
    loadMore: () => {},
});

export class GlobalState extends React.Component {

    constructor(props) {
        super(props)

        console.log("*** Constructing Global State ***")

        this.loadMore = this.loadMore.bind(this)
        this.hasMore = this.hasMore.bind(this)
        this.updateState = this.updateState.bind(this)

        this.state = {
            items: null,
            isLoading: true,
            cursor: 0,
            updateState: this.updateState,
            hasMore: this.hasMore,
            loadMore: this.loadMore,
        }
    }

    componentDidUpdate() {
        console.log("Showing " + this.state.items.length + " images.")
    }

    updateState = (mergeableStateObject) => {
        this.setState(mergeableStateObject)
    }

    loadMore = () => {
        this.setState({ isLoading: true, error: undefined })
        console.log("Loading more...")
        fetch(`/paginationJson/index${this.state.cursor}.json`)
          .then(res => res.json())
          .then(
            res => {
              this.setState(state => ({
                items: [...state.items, ...res], // Add resulting post items to state.items
                cursor: state.cursor+1, // Update which page should be fetched next
                isLoading: false // Loading is complete so a new load can be triggered.
              }))
            },
            error => {
              this.setState({
                isLoading: false,
                error,
              })
            }
        )
    }

    hasMore = (pageContext) => {
        return (this.state.cursor <= pageContext.countPages && this.state.useInfiniteScroll)
    }
    render() {
        return (
            <GlobalStateContext.Provider value={this.state}>
                {this.props.children}
            </GlobalStateContext.Provider>
        )
    }

}