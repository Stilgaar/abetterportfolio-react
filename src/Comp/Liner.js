import { pics } from '../JSON/Array'

function Liner({ i, main, notmain, index }) {

    return (
        <div className={index === 0 ? main : notmain}>
            <div className="card p-2">
                <div className="display-f justify-center">

                    {index === 0 && main ?
                        <img className="img" src={i.pic} alt={`${i.title} - ${i.date}`} />
                        :
                        <div>
                            {i.stack === "React Native" ?
                                <img className="img-react" src={i.pic} alt={`${i.title} - ${i.date}`} />
                                :
                                <img className="img-thumb" src={i.pic} alt={`${i.title} - ${i.date}`} />}
                        </div>}
                </div>

                <h3 className="pl-1 pt-1">{i.title}</h3>

                <div className="pl-1 pt-1 row display-f justify-space-between">
                    <p>{i.stack}</p>
                    <p>{i.date}</p>
                </div>

                <p className="container-lg mt-2 mb-2 font-md">{i.explain}</p>

                <div >
                    {i.front !== "" && <a
                        className="text-hover-primary fw-b"
                        href={i.front}> <img
                            className="img-micro"
                            src={pics.git}
                            alt={i.front} /> Front
                    </a>}
                    {i.back !== "" && <a
                        className="text-hover-primary fw-b"
                        href={i.back}> <img
                            className="img-micro "
                            src={pics.git}
                            alt={i.back} /> Back
                    </a>}

                </div>
            </div>
        </div >
    )
}

export default Liner; 