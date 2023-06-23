import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinkIcon from '@mui/icons-material/Link';
import {useEffect, useState} from "react";
import {Slide} from "@mui/material";
import {useParams} from "react-router";
import {useSelector} from "react-redux";


export const SectionPagesDetails = ({title, icon}) => {
    const [open, setOpen] = useState(false);
    const blogsList = useSelector(store => store.sectionPagesReducer.blogsData)
    const eventsList = useSelector(store => store.sectionPagesReducer.eventsData)
    const list = [...blogsList, ...eventsList]
    const [content, setContent] = useState();
    const params = useParams()

    useEffect(() => {
        setContent(
            list.find(el => el.title === params.name)
        )
        // console.log(list)
    }, [])


    const copy = () => {
        setOpen(!open)
        setTimeout(() => {
            setOpen(false)
        }, 2000)
        return navigator.clipboard.writeText(window.location.href)
    }

    return(
        <div className={"sectionPagesDetails container"}>
            <h2>{icon} {title} <KeyboardArrowRightIcon/> Basrrs dfs
                <LinkIcon
                    className={"copy"}
                    onClick={copy}
                />
            </h2>
            <section className="sectionPagesDetails__content">
                <img src="https://scientechh.github.io/media-base/php-vs-java.png" alt="php-vs-java" />

                    <h1>PHP Թ՞Ե java</h1>

                    <p>Ավելի լավ ծրագրավորման լեզվի մասին վեճերը, կարծես, երբեք չեն ավարտվի: Յուրաքանչյուր ծրագրավորող
                        ունի իր սեփական տեսակետն ու փաստարկները. Թեև ոմանք կատաղի պաշտպանում են մեկ լեզու, մյուսները
                        միայն թերություններ են գտնում:</p>

                    <p>Հետևաբար, մենք չենք պատրաստվում որոշակի պատասխան տալ այն մասին, թե ծրագրավորման լեզուն լավագույնն
                        է սովորել եւ օգտագործել վեբ ծրագրավորման համար: Բայց մենք կտրամադրենք բոլոր հնարավոր ռեսուրսները
                        եւ տեղեկությունները, որպեսզի կարողանաք որոշել, թե ինչն է լավագույնը ձեզ եւ ձեր նախագծին:
                    </p>

                    <p>
                        PHP-ն օգտագործվում է Facebook-ում, Slack-ում, Wikipedia-ում, Tumblr-ում, Etsy-ում եւ այլն:
                    </p>

                    <h2>Ինչու Պետք Է Համեմատենք Դրանք։
                    </h2>

                    <p>Վեբ ծրագրավորումը այսօր ծաղկում. Ամեն օր ստեղծվում է ավելի ու ավելի շատ կայքեր եւ վեբ-ծրագրեր.
                        Միայն 5 տարվա ընթացքում վեբ-կայքերի քանակը 2014 թվականին 968,9 մլն-ից աճել է մինչեւ 1,72 մլրդ
                        2019 թվականին: Այդ ժամանակից ի վեր, որ համաճարակի սկսվեց, շատ բիզնեսը նույնպես անցել է առցանց.
                        Ավելի ու ավելի շատ վեբ ծրագրեր են ստեղծվում պարտականությունների կատարման համար, որոնք մարդիկ
                        ստիպված էին ձեռքով կատարել գրասենյակում, բայց հիմա նրանք չեն կարող:
                    </p>


                    <p>Java եւ PHP ունեն նաեւ որոշակի նմանություն. Օրինակ, Նրանք երկուսն էլ ունեն բաց կոդով, այնպես որ,
                        մատչելի է հանրությանը. Այս լեզուներն են Object-Oriented եւ ունեն նման շարահյուսություն.
                        Միեւնույն ժամանակ, նրանք տարբեր են եւ նախատեսված են տարբեր նպատակների համար:
                    </p>

                    <h2>PHP-ի եւ Java-ի համեմատությունը
                    </h2>

                    <p>Սա այն մասն է, երբ մենք վերջապես հայտնաբերում ենք PHP-ի եւ Java-ի միջեւ տարբերությունները, որոնք
                        ստիպում են ծրագրավորողներին ամբողջ աշխարհում վիճել:
                    </p>

                    <h2>PHP Vs Java: կոդավորման արագություն
                    </h2>

                    <p>Java ունի տարբեր հոսքեր, որոնք օգնում են արագ եւ արդյունավետ կառավարել հրահանգների
                        հաջորդականությունը եւ կարգավորել դրանք: Այնուամենայնիվ, PHP-ն դեռեւս հաղթող է PHP-ի եւ Java-ի
                        կոդավորման արագության Համեմատության համար, քանի որ նրա վերջին տարբերակները զգալիորեն արագացրել
                        են կոդավորման գործընթացը, միաժամանակ նվազեցնելով հիշողության սպառումը: Այսպիսով, PHP-ում նույն
                        ծրագրային կոդավորումը ավելի քիչ ժամանակ կպահանջի, քան Java-ում:
                    </p>

                    <b>Դատավճիռ: PHP
                    </b>

                    <ul>
                        <li>կայքեր (Yahoo, Flickr, MailChimp)</li>
                        <li>էլեկտրոնային առեւտրի ծրագրեր (OpenCart, ZenCart, UberCart)</li>
                        <li>Scripting (DevOps գործիքներ, ավտոմատացում)</li>
                    </ul>
            </section>
            <Slide direction="up" in={open} >
                <p className={"alertCopy"}>Պատճենված է</p>
            </Slide>
        </div>
    )
}