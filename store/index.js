

export const state = () => ({
    toggleSidebar: false
})

// mutations

export const mutations = {
    TOGGLE_SIDEBAR(state) {
        state.toggleSidebar = !toggleSidebar
    }
}

export const actions = {
    toggleSideBar({commt}){
        commit("TOGGLE_SIDEBAR")
    }
}

export const getters ={
    toggleSidebar: state => state.toggleSideBar
}