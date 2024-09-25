const inittalState = {
    isLoggedIn: false,
    sortBy: 0
}

const reducer = (state = inittalState, action) => {
    switch (action.type) {
        case "USER_LOGOUT":
            console.log("User Logged out")
            return {
                ...state,
                isLoggedIn: false
            }

        case "USER_LOGIN":
            console.log("The User logged in")
            return {
                ...state,
                isLoggedIn: true
            }

        case "DEFAULT_SORT":
            console.log("Sort by id")
            return {
                ...state,
                sortBy: 0
            }

        case "NAME_SORT":
            console.log("Sort by name")
            return {
                ...state,
                sortBy: 1
            }

        case "TYPE_SORT":
            console.log("Sort by card Type")
            return {
                ...state,
                sortBy: 2
            }

        default:
            console.log("Default")
            return state
    }
}

export default reducer