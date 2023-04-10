import axios from "axios"

const stock = (id) => {
    return new Promise ((res, rej) => {
        setTimeout (()=>{
        res(axios("stock.json"))
        }, 3000)
    })
}

export default stock