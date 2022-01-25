import useSubmit from "../Hooks/useSubmit";
import Lineform from "./LineForm";

function Linecomp({ e, display, indexform }) {

    const [, handleChange, handleSubmit, ,] = useSubmit(`https://jeffvanstraelenback.osc-fr1.scalingo.io/message`)

    return (
        <>
            {display === "comp" &&
                <>
                    {e.map(((i, index) => ( // lignes de compétences
                        <div key={index}>
                            {i.href ? <a href={i.href} target="_blank" rel="noreferrer" > <p>
                                <img
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
            }

            {display === "contact" &&
                <>
                    <form onSubmit={handleSubmit} className=" bg-white display-f fd-c">
                        {e.map(((i, index) => ( // coté formulaire contact
                            <div key={index}>
                                {i.input ?
                                    <>
                                        <label>{i.label}</label>
                                        {i.name === "message" ?
                                            <textarea
                                                name={i.name}
                                                onChange={handleChange}
                                                className="textaera"
                                                placeholder={i?.placeholder}>
                                            </textarea>
                                            :
                                            <>
                                                <div>
                                                    <input name={i.name}
                                                        onChange={handleChange}
                                                        className="input"
                                                        type={i.type}
                                                        placeholder={i?.placeholder
                                                        } />
                                                </div>
                                            </>

                                        }
                                    </>
                                    :
                                    <div className="t-center mt-1"> {i.name}
                                        {i.cv && <button className="font-lg btn-primary mt-1"><a href={i.link} download>{i.cvdl}</a></button>}
                                    </div>
                                }</div>
                        )))
                        }
                        {e.map((i, index) => (
                            <div key={index}>
                                {i.button && <button type="sumbit" className="font-lg btn-primary">Envoyer</button>}
                            </div>
                        ))}
                    </form>
                </>
            }
            <>
                {display === "form" &&
                    <>
                        {e.map((i, index) => (
                            <div key={index} className='card p-3'>
                                {indexform % 2 === 0 &&
                                    <div className="t-end">
                                        <Lineform i={i} />

                                    </div>}
                                {indexform % 2 === 1 &&
                                    <div className="t-start">
                                        <Lineform i={i} />
                                    </div>}
                            </div>
                        ))
                        }
                    </>}



            </>
        </>
    )
}

export { Linecomp as default }