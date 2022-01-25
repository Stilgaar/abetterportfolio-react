import { useState } from "react"

function Footer() {

    const [modal, setModal] = useState(false)

    return (
        <div className="navbar bg-color">
            <div
                className="bg-color">
                &copy; Jeff van Straelen - 2022
            </div>

            <div>
                <div onClick={() => setModal(c => !c)}>RGPD</div>
            </div>

            {modal &&
                <div className="fw-b">
                    Ce site est réalisé uniquement dans le but de promouvoir mon C.V. <br />
                    Ce site ne receuille aucune donnée hormis celle que vous m'avez envoyé. <br />
                    Par simple demande par mail de votre part, je m'engage à supprimer vos coordonnées le plus rapidemende possible. <br />
                    Aucune de vos données ne seront revenues à une tierce personne. <br /><br />
                    Site réalisé avec React.js
                </div>
            }
        </div >
    )
}
export { Footer as default }