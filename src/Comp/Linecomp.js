import { useEffect } from "react";
import useSubmit from "../Hooks/useSubmit";
import Lineform from "./LineForm";
import env from "react-dotenv";


function Linecomp({ e, display, indexform }) {

    const [, handleChange, handleSubmit, resMsg, setResMsg] = useSubmit(env.URI)

    useEffect(() => {
        setTimeout(() => {
            setResMsg()
        }, 3000)
    }, [resMsg, setResMsg])

    return (
        <>
            {display === "comp" &&
                <>
                    {e.map(((i, index) => ( // lignes de compétences
                        <div className='mt-025' key={index}>

                            {i.href ?
                                <div>
                                    <a href={i.href} target="_blank" rel="noreferrer" >
                                        <img className="img-micro"
                                            src={i.src}
                                            alt={i.name} />
                                        <span className="font-sm"> {i?.name} </span>
                                    </a>
                                </div>
                                : <div className="display-f">
                                    <img className="img-micro mt-025 "
                                        src={i.src}
                                        alt={i.name} />
                                    <span className="mt-075 font-sm"> {i?.name} </span>
                                </div>
                            }
                        </div>
                    )))
                    }
                </>
            }

            {display === "contact" &&
                <>
                    <form onSubmit={handleSubmit} className="bg-white display-f fd-c">

                        {e.map(((i, index) => ( // coté formulaire contact

                            <div key={index}>

                                {i.input ?
                                    <>
                                        <label className="fw-br">{i.label}</label>

                                        {i.name === "message" ?

                                            <div className="mt-1 mb-1">
                                                <textarea
                                                    name={i.name}
                                                    onChange={handleChange}
                                                    className="textaera"
                                                    placeholder={i?.placeholder}>
                                                </textarea>
                                            </div>

                                            :

                                            <>
                                                <div className="mt-1 mb-1">
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
                                    <div className="t-center mt-1 fw-b"> {i.name}
                                        {i.cv &&
                                            <button className="btn-primary">
                                                <a href={i.link} download>{i.cvdl}
                                                </a>
                                            </button>}
                                    </div>
                                }</div>
                        )))
                        }
                        {e.map((i, index) => (
                            <div key={index}>
                                {i.button &&
                                    <>
                                        {resMsg === undefined && < button type="sumbit" className="btn-primary">
                                            Envoyer
                                        </button>}

                                        {resMsg && <div className="bt-primary t-center bg-color card p-1 m-1">{resMsg}</div>}
                                    </>}
                            </div>
                        ))}

                    </form>

                </>
            }
            <>
                {display === "form" &&

                    <>
                        {e.map((i, index) => (
                            <div key={index} className='card p-2'>

                                {indexform % 2 === 0 &&
                                    <div className="t-end">
                                        <Lineform i={i} />
                                    </div>
                                }
                                {indexform % 2 === 1 &&
                                    <div className="t-start">
                                        <Lineform i={i} />
                                    </div>
                                }
                            </div>
                        ))}
                    </>}



            </>
        </>
    )
}

export { Linecomp as default }