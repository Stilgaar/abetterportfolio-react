import { global, pics } from "../JSON/Array";
import Liner from "./Liner";
import Comp from "./Comp";

function Display() {

    return (
        <div>
            {global.map((item, index) => (
                <div key={index} className={item.section === "acceuil" ? "" : "mb-7 bg-white"}>
                    <h2 id={`${item.section}`} className="m-0 p-1 mt-1 mb-1 bg-color">{item.label}</h2>
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
                                        <div className="pt-2">{i.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                    {item?.section === "port" &&
                        <div className="row m-3 gap-2">
                            {item.list.map((i, index) => (
                                <Liner key={index} index={index} i={i}
                                    main={"col-12-xs col-12-md col-12-lg col-12-xl"}
                                    notmain={"col-12-xs col-12-md col-6-lg col-4-xl"} />
                            ))}
                        </div>}
                    {item?.section === "comp" &&
                        <div className="row m-2 gap-1">
                            {item.list.map((i, index) => (
                                <Comp key={index} i={i} display={"comp"} />
                            ))}

                        </div>}
                    {item?.section === "form" &&
                        <div className="row m-1 gap-2">
                            {item.list.map((i, index) => (
                                <Comp key={index} i={i} display={"form"} indexform={index} />
                            ))}
                        </div>}
                    {item?.section === "contact" &&
                        <div className="row m-5 gap-2">
                            {item.list.map((i, index) => (
                                <Comp key={index} i={i} display={"contact"} />
                            ))}
                        </div>}
                </div>
            ))
            }
        </div >
    )
}

export { Display as default }; 