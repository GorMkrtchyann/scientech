import {BLOGS_LIST_CONTROLLER, PORTFOLIO_LIST_CONTROLLER, PRODUCTS_LIST_CONTROLLER} from "./sectionsPages.types";

const initialStore = {
    eventsData: [],
    blogsData: [],
    products: [],
    portfolio: []
}

export const sectionPagesReducer = (store = initialStore, action) => {
    switch (action.type){
        case PORTFOLIO_LIST_CONTROLLER:
            return {
                portfolio: [...store.portfolio, action.payload]
            }

        case PRODUCTS_LIST_CONTROLLER:
            return {
                products: [...store.products, action.payload]
            }

        case BLOGS_LIST_CONTROLLER:
            return {
                blogsData: action.payload
            }

        default:
            return store
    }
}