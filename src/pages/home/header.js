import {Images} from "../../assets/images/images";


export const Header = () => {
    return(
        <div className={"header"}>
            <div className={"header__img"}>
                <img src={Images.blackLogo} alt="logo"/>
                <video src="https://scientechh.github.io/media-base/untitled-video-made-with-clipchamp-1_g5IheWRH.mp4"
                       autoPlay loop muted
                       typeof={"application/mp4"}
                />
            </div>
            <div className={"header__text"}>
                <h1>Լավագույն</h1>
                <h2>Ընտրությունը</h2>
                <span>Scientech</span>
            </div>
        </div>
    )
}