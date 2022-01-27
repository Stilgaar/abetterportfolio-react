import { pics } from '../JSON/Array'

function Liner({ i, main, notmain, index }) {

    return (
        <div className={index === 0 ? main : notmain}>
            <div className="card-port p-2">
                <div className="display-f justify-center">

                    {index === 0 && main ?
                        <img src={i.pic} alt={`${i.title} - ${i.date}`} />
                        :
                        <div>
                            {i.stack === "React Native" ?
                                <img className="img-react" src={i.pic} alt={`${i.title} - ${i.date}`} />
                                :
                                <img className="p-1 m-a img-thumb" src={i.pic} alt={`${i.title} - ${i.date}`} />
                            }
                        </div>
                    }
                </div>

                <h3 className="pl-1 pt-1">{i.title}</h3>

                <div className="pl-1 pt-1 row display-f justify-space-between">
                    <p>{i.stack}</p>
                    <p>{i.date}</p>
                </div>

                <p className="container-lg mt-2 mb-2 font-md pre">{i.explain}</p>

                <div className="mt-3" >
                    {i.front !== "" &&
                        <a
                            className="text-hover-primary fw-b"
                            href={i.front}>
                            <img
                                className="img-micro ml-1"
                                src={pics[0].pic}
                                alt={i.front} /> Front
                        </a>
                    }
                    {i.back !== "" &&
                        <a
                            className="text-hover-primary fw-b"
                            href={i.back}>
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