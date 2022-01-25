function Lineform({ i }) {

    return (
        <>
            <h5 className="fw-br pb-1 text-primary">{i.year}</h5>
            <p className="fw-br pb-1">{i.explanation}</p>
            <p className="fw-b pb-1"> Suport : {i.support} <br /> Type : {i.type}</p>
            <ul className="ml-3 mr-3">
                {i.points.map((point, index) => (
                    <li key={index}>{point.point}</li>
                ))}
            </ul>
            <p className="font-md mt-2">{i.done}</p>
        </>
    )
}

export default Lineform;