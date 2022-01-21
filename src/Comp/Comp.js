import Linecomp from "./Linecomp";

function Comp({ i, display, displaybis }) {

    return (
        <div className={display === "comp" ? "col-12-xs col-6-md col-5-lg col-3-xl col-2-bp" : "col-12-xs col-12-md col-8-lg col-6-xl col-6-bp"}>
            <div className={display === "comp" ? "container-card p-2" : "container card p-3"}>
                <h4 className={display === "comp" ? "mb-1" : "mb-3 t-center "}>{Object.keys(i)}</h4>
                {Object.values(i).map((e, index) => (
                    <div>
                        <Linecomp key={index} e={e} display={display} />
                        {displaybis === "contact" ? <button>Envoyer</button> : <></>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comp;