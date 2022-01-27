import { form } from '../JSON/Array'

// calcul un total d'entrées dans l'array formation

export const time = () => {
    let a = 0;
    let val = Object.values(form)
    for (let i = 0; i < Object.keys(form).length; i++) {
        a += Object.values(val[i])[0][0].total
    }

    let hours = (a / 60)
    let rhours = Math.floor(hours)
    let minutes = (hours - rhours) * 60
    let rminutes = Math.round(minutes)
    return `${rhours} heures et ${rminutes} minutes`
}