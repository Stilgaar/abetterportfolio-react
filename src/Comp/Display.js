import { global } from "../JSON/Array";
import Liner from "./Liner";
import Comp from "./Comp";

function Display() {

    return (
        <div>
            {global.map((item, index) => (
                <div key={index} className="font-lg bg-white mb-7">
                    <h2 id={`${item.section}`} className="m-0 p-1 mt-1 mb-1 bg-color">{item.label}</h2>
                    {item?.section === "acceuil" &&
                        <div className="bg-white mt-5">
                            {item.list.map((i, index) => (

                                <div key={index} className="justify-center justify-space-evenly row m-3" >
                                    <div className="display-f m-3  justify-center">
                                        <img className='col-8-xl col-4-lg col-6-md col-6-sm card' src={i.pic} alt="profile pic" />
                                    </div>
                                    <div className="col-6-xl col-10-lg col-12-md col-12-sm">
                                        <div className="fw-br font-xl pb-1">{i.title}</div>
                                        <div>{i.age}</div>
                                        <div>{i.loc}</div>
                                        <div>{i.mail}</div>
                                        <div className="pt-2">{i.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                    {item?.section === "port" &&
                        <div className="bg-white row m-3 gap-2">
                            {item.list.map((i, index) => (
                                <Liner key={index} index={index} i={i}
                                    main={"col-12-xs col-12-md col-12-lg col-12-xl"}
                                    notmain={"col-12-xs col-12-md col-6-lg col-4-xl"} />
                            ))}
                        </div>
                    }
                    {item?.section === "comp" &&
                        <div className="bg-white row m-5 gap-2 justify-center">
                            {item.list.map((i, index) => (
                                <Comp key={index} i={i} display={"comp"} />
                            ))}

                        </div>}
                    {item?.section === "contact" &&
                        <div className="bg-white row m-5 justify-center gap-2">
                            {item.list.map((i, index) => (
                                <Comp key={index} i={i} displaybis={"contact"} />
                            ))}
                        </div>}
                </div>
            ))
            }
        </div >
    )
}

export default Display; 