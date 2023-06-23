import {Header} from "./header";
import {Section} from "./sections";
import {Card} from "../../components/card";
import {Loader} from "../../components/loader";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {More} from "../../components/more";
import axios from "axios";
import {portfolioListController, productsListController} from "../../store/sectionsPages/sectionsPages.action";


export const Home = () => {
    const handleDragStart = (e) => e.preventDefault();
    const [loader, setLoader] = useState(false)
    const productsList = useSelector(store => store.sectionPagesReducer.products)
    const items = [];

    productsList?.map((el) => (
        items.push(<Card
            id={el.id}
            key={el.id}
            title={el.title}
            buttonFunc={true}
            poster={el.poster}
            about={el.about}
            onDragStart={handleDragStart} role="presentation"
        />)
    ))

    useEffect(() => {
        setLoader(true)
    }, [])


    return(
        loader ?
            <div>
                <div className={"container"}>
                    <Header/>
                    <Section
                        title={"Իրադարձություններ"}
                        cardItems={[...items.slice(0, (items.length / 2)).slice(0, 5),
                            (items.length / 2 > 5) && <More link={"/events/1"}/>]}
                    />
                    <Section title={"Բլոգ"} cardItems={items}/>
                </div>
            </div>
            :
        <Loader/>

    )
}