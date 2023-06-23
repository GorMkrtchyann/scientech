import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useForm} from "react-hook-form";

export const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <div className={"contact container"}>
            <h2><ConnectWithoutContactIcon/> Կապ մեզ հետ</h2>

            <div className={"flex"}>
                <div className={"contact__info"}>
                    <p>
                        <span><MailOutlineIcon/> Էլ․ Հասցե</span>
                        scientech.itcompany@gmail.com
                    </p>
                    <p>
                        <span><PhoneEnabledIcon/> Հեռ․</span>
                        +374 91 690212
                    </p>
                    <div>
                        <a href="https://www.facebook.com/sscientech/" target={"_blank"}><FacebookIcon/> Facebook</a>
                        <a href="https://www.instagram.com/sscientech/" target={"_blank"}><InstagramIcon/> Instagram</a>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder={"Անուն"} {...register("name", { required: true })} />
                    <input placeholder={"Էլ․ Հասցե"} {...register("email", { required: true })} />
                    <textarea placeholder={"Նամակ"} {...register("message", { required: true })}/>
                    <button>Ուղարկել <SendIcon/></button>
                </form>
            </div>
        </div>
    )
}