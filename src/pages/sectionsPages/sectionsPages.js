import {Header} from "./header";
import {PaginatedItems} from "./paginatedItem";
import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {blogsListController} from "../../store/sectionsPages/sectionsPages.action";


export const SectionsPages = ({title, icon, listName}) => {
    const dispatch = useDispatch()
    const blogsList = useSelector(store => store.sectionPagesReducer.blogsData)
    const eventsList = useSelector(store => store.sectionPagesReducer.eventsData)
    const list = listName === "blog" ? blogsList : eventsList

    console.log(list)

    return(
        <div className={"sectionPages"}>
            <div className="container">
                <Header title={title} icon={icon}/>
                <PaginatedItems itemsPerPage={8} items={list} listName={listName}/>
            </div>
        </div>
    )
}