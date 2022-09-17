export const getData = ()=>{
    fetch("https://pastebin.com/raw/hbAZZiJx",{
        method : "GET"
    })
    .then((res) =>{
        return res.json()
    })
    .catch((err)=>{
        console.log(err)
    })
}
