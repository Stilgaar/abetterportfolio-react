function Lineform({ i }) {

    return (
        <>
            <h5 className="fw-br pb-1 text-primary-dark-2">{i.year}</h5>

            <p className="fw-br pb-1">{i.explanation}</p>

            <p className="fw-b pb-1 font-sm"> <span className="text-primary-dark-2">
                Suport : </span> {i.support}
                <br />
                <span className="text-primary-dark-2">
                    Type : </span> {i.type}</p>

            <ul className="">

                {i.points.map((point, index) => (
                    <li className={point?.bold ? "font-sm fw-br" : "font-sm"}
                        key={index}> {point.point !== '' && !point?.bold && <> &#x02605; </>}
                        {point.point} {point.author &&
                            <span className="text-primary-dark-2">{`par ${point.author}`}</span>}
                    </li>
                ))}

            </ul>

            <p className="font-sm fw-b pt-1" >{i.done}</p>
        </>
    )
}

export default Lineform;