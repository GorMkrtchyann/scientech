import {Route, Routes} from "react-router";
import {Home} from "./pages/home/home";
import {Menu} from "./components/menu";
import {SectionsPages} from "./pages/sectionsPages/sectionsPages";
import {Footer} from "./components/footer";
import EventIcon from "@mui/icons-material/Event";
import {Card} from "./components/card";
import {useEffect, useState} from "react";
import FeedIcon from '@mui/icons-material/Feed';
import {SectionPagesDetails} from "./pages/sectionsPagesDetails/sectionPagesDetails";
import {Works} from "./pages/works/works";
import CopyrightIcon from '@mui/icons-material/Copyright';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import {Contact} from "./pages/contact/contact";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {
    blogsListController,
    portfolioListController,
    productsListController
} from "./store/sectionsPages/sectionsPages.action";


function App() {
    const dispatch = useDispatch()
    const productsList = useSelector(store => store.sectionPagesReducer.products)
    const portfolioList = useSelector(store => store.sectionPagesReducer.portfolio)

    useEffect(() => {
        axios.get("https://scientech-8af5f-default-rtdb.firebaseio.com/about.json"
        ).then(res => {
            res.data?.map(el => {
                if (el.type === "product") {
                    dispatch(productsListController(el))
                } else {
                    dispatch(portfolioListController(el))
                }
            })
        })
        axios.get("https://scientech-8af5f-default-rtdb.firebaseio.com/blogs.json"
        ).then(res => {
            dispatch(blogsListController([...res.data]))
        })
    }, [])

    let list = [
        <Card/>,
        <Card/>,
        <Card/>,
        <Card/>,
        <Card/>,
        <Card/>,
        <Card/>
    ]

  return (
      <>
          <Menu/>
          <Routes>
              <Route path={"/"} element={<Home/>} />
              <Route path={"/products"} element={<Works title={"Պրոդուկտներ"} icon={<CopyrightIcon/>} list={productsList}/>} />
              <Route path={"/portfolio"} element={<Works title={"Պորտֆոլիո"} icon={<HomeRepairServiceIcon/>} list={list}/>} />
              <Route path={"/events/:pages"} element={
                  <SectionsPages
                      title={"Իրադարձություններ"}
                      icon={<EventIcon className={"icon"}/>}
                      listName={"event"}
                  />
              } />

              <Route path={"/blogs/:pages"} element={
                  <SectionsPages
                      title={"Բլոգներ"}
                      icon={<FeedIcon className={"icon"}/>}
                      listName={"blog"}
                  />
              } />
              <Route path={"/blog/:name"} element={<SectionPagesDetails
                  title={"Բլոգներ"}
                  icon={<FeedIcon className={"icon"}/>}
              />} />
              <Route path={"/event/:name"} element={<SectionPagesDetails
                  title={"Իրադարձություններ"}
                  icon={<EventIcon className={"icon"}/>}
              />} />
              <Route path={"/contact"} element={<Contact/>} />
          </Routes>
          <Footer/>
      </>
  );
}

export default App;
