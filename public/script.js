// fetch the datetime from API endpoint on NodeJS and populate the content div
const getData = async () =>{
    console.log('Hello from script.js')
    const response = await fetch('/api/datetime')
    const data = await response.json()
    document.querySelector('#content').innerHTML = data.datetime
}

getData()
