import axios from 'axios';

const getRandomFossil = () => {
    axios.get('/random-fossil.json').then(res => {
        console.log(res.data.img)
        console.log(res.data.name)
        const imgUrl = res.data.img

        document.querySelector('#random-fossil-image').innerHTML = `<img src=${imgUrl}>`
        document.querySelector('#random-fossil-name').innerText = res.data.name
    })
}

document.querySelector('#get-random-fossil').addEventListener('click', getRandomFossil)
