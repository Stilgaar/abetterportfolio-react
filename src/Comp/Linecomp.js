import useSubmit from "../Hooks/useSubmit";

function Linecomp({ e, display }) {


    const [, handleChange, handleSubmit, ,] = useSubmit(`https://jeffvanstraelenback.osc-fr1.scalingo.io/message`)


    return (
        <>
            {display ?
                <>
                    {e.map(((i, index) => (
                        <div key={index}>
                            {i.href ? <a href={i.href} target="_blank" rel="noreferrer" > <p> <img
                                className="img-micro mt-1"
                                src={i.src}
                                alt={i.name} /> {i?.name}
                            </p></a>

                                : <p> <img
                                    className="img-micro mt-1"
                                    src={i.src}
                                    alt={i.name} /> {i?.name}
                                </p>}
                        </div>
                    )))
                    }
                </>
                :
                <>
                    {e.map(((i, index) => (

                        <div key={index}>
                            {i.input ?

                                <form onSubmit={handleSubmit} className="display-f fd-c">
                                    <label>{i.label}</label>
                                    {i.name === "message" ?
                                        <textarea
                                            name={i.name}
                                            onChange={handleChange}
                                            className="textaera"
                                            placeholder={i?.placeholder}>
                                        </textarea>
                                        :
                                        <input name={i.name}
                                            onChange={handleChange}
                                            className="input"
                                            type={i.type}
                                            placeholder={i?.placeholder} />
                                    }
                                </form>
                                :
                                <div className="t-center mt-1"> {i.name}
                                    {i.cv && <button className="font-lg btn-primary"><a href={i.link} download>{i.cvdl}</a></button>}
                                </div>
                            }</div>
                    )))
                    }
                </>
            }
        </>
    )
}

export default Linecomp;