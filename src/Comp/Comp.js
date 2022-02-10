import Linecomp from "./Linecomp";

function Comp({ i, display, indexform }) {

    return (
        <div
            className={display === "comp" ? "col-6-xs col-4-md col-3-lg col-2-xl col-2-bp"
                : display === 'contact' ? "col-12-xs col-12-md col-8-lg col-6-xl col-6-bp"
                    : 'col-12-xs col-12-md col-8-lg col-6-xl col-6-bp'}>

            <div
                className={display === "comp" ? "container-comp mb-2"
                    : display === 'contact' ? "container card bg-white"
                        : display === 'form' && indexform % 2 === 0 ? "bg-white"
                            : "bg-white"}>

                <h3
                    className={display === "comp" ? "mb-1"
                        : display === 'contact' ? "mb-1 t-center " :
                            "t-center mb-1 p-1 bg-color br-xs"}>
                    {Object.keys(i)}

                </h3>

                {Object.values(i).map((e, index) => (
                    <Linecomp key={index} e={e} display={display} indexform={indexform} />
                ))}

            </div>
        </div>
    )
}

export { Comp as default }
