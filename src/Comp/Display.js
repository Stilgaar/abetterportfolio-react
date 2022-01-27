import { global, pics } from "../JSON/Array";
import Liner from "./Liner";
import Comp from "./Comp";
import { useEffect, useState } from "react";
import { time } from '../Func/Time'

function Display() {

    const [but, setBut] = useState(false)

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 200) {
            setBut(true)
        } else {
            setBut(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div>
            {global.map((item, index) => (

                <div key={index} className={item.section === "acceuil" ? "" : "bg-white"}>

                    <h2 id={`${item.section}`} className="bg-color p-2">{item.label}</h2>

                    {item?.section === "acceuil" &&
                        <div className="mt-7 row">

                            {item.list.map((i, index) => (
                                <div key={index} className="row justify-space-evenly m-3" >
                                    <div className="mb-3 display-f fd-c">

                                        <div>
                                            <img className="img-sq card" src={i.pic} alt="profile pic" />
                                        </div>

                                        <div className=" display-f justify-center mt-1">
                                            {pics.map((i, index) => (
                                                <a key={index} href={i.link}><img className="img-mini bg-color p-1 br-xs m-1" src={i.pic} alt={i.name} /> </a>
                                            ))}
                                        </div>

                                    </div>

                                    <div className="bg-white p-2 col-6-bp col-4-xl col-12-lg col-12-md col-12-sm">
                                        <div className="fw-br pb-1">{i.title}</div>
                                        <div>{i.age}</div>
                                        <div>{i.loc}</div>
                                        <div><a href={`mailto:${i.mail}`}>{i.mail} </a></div>
                                        <div className="pt-2 pre">{i.text}</div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    }

                    {item?.section === "port" &&
                        <div className="row gap-1 mr-1 ml-1 mt-3 pb-3 bg-white">
                            {item.list.map((i, index) => (
                                <Liner key={index} index={index} i={i}
                                    main={"col-12-xs col-12-md col-12-lg col-12-xl"}
                                    notmain={"col-12-xs col-12-md col-6-lg col-4-xl"} />
                            ))}
                        </div>
                    }

                    {item?.section === "comp" &&
                        <div className="row gap-1 mr-1 ml-1 mt-3 pre">
                            {item.list.map((i, index) => (
                                <Comp key={index} i={i} display={"comp"} />
                            ))}

                        </div>
                    }

                    {item?.section === "form" &&
                        <div className="row gap-2 mr-1 ml-1 mt-3 pre">
                            {item.list.map((i, index) => (
                                <Comp key={index} i={i} display={"form"} indexform={index} />
                            ))}
                            <div className="m-a fw-b"><span className="text-primary">Soit une durée totale de formation de </span> {time()}</div>
                            {/*
                             je la remetterais probablement plus tard
                            <div className="m-a fw-b"><span className="text-primary">Ou </span> {parseInt(time()) - 350} heures depuis la fin de ma formation</div> */}

                        </div>
                    }

                    {item?.section === "contact" &&
                        <div className="row gap-2 mr-1 ml-1 pre">
                            {item.list.map((i, index) => (
                                <Comp key={index} i={i} display={"contact"} />
                            ))}
                        </div>
                    }
                </div>
            ))
            }

            {but &&
                <button className="btn-primary toTop o-80"><a href="#nav">Top</a></button>
            }

        </div >
    )
}

export { Display as default }; 