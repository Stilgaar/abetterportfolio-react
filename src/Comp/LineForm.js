function Lineform({ i }) {

    return (
        <>
            <h5 className="fw-br pb-1 text-primary">{i.year}</h5>

            <p className="fw-br pb-1">{i.explanation}</p>
            <p className="fw-b pb-1 font-sm"> <span className="text-primary">Suport : </span> {i.support}, <span className="text-primary">Type : </span> {i.type}</p>

            <ul className="">

                {i.points.map((point, index) => (
                    <li className="font-sm" key={index}>{point.point !== '' && <>-</>} {point.point}</li>
                ))}

            </ul>
            <p className="mt-1 font-sm text-primary fw-b">Durée de la formation : {i.duration}</p>
            <p className="font-sm fw-b" >{i.done}</p>
        </>
    )
}

export default Lineform;