import { pics } from '../JSON/Array'

function Liner({ i, main, notmain, index }) {

    return (
        <div className={index === 0 ? main : notmain}>
            <div className="card-port p-2 ml-2 mr-2">
                <div className="display-f justify-center">

                    {index === 0 && main ?
                        <img className="img-full card" src={i.pic} alt={`${i.title} - ${i.date}`} />
                        :
                        <div>
                            <img className={i.stack === "React Native" ? "img-react" : "p-1 m-a img-thumb"}
                                src={i.pic} alt={`${i.title} - ${i.date}`} />
                        </div>
                    }
                </div>

                <h3 className="pl-1 pt-1">{i.title}</h3>

                <div className="pl-1 pt-1 row display-f justify-space-between">
                    <p>{i.stack}</p>
                    <p>{i.date}</p>
                </div>

                <p className="container-lg mt-2 mb-2 font-sm pre">{i.explain}</p>

                <div className="mt-3" >
                    {i.front !== "" &&
                        <a
                            className="text-hover-primary fw-b"
                            href={i.front}
                            target="_blank" rel="noreferrer nofollow" >
                            <img
                                className="img-micro ml-1"
                                src={pics[0].pic}
                                alt={i.front} /> Front
                        </a>
                    }
                    {i.back !== "" &&
                        <a
                            className="text-hover-primary fw-b"
                            href={i.back}
                            target="_blank" rel="noreferrer nofollow" >
                            <img
                                className="img-micro ml-1"
                                src={pics[0].pic}
                                alt={i.back} /> Back
                        </a>
                    }
                </div>
            </div>
        </div >
    )
}

export { Liner as default } 