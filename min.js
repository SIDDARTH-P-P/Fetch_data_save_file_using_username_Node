let send = (event)=>{
    event.preventDefault();
    let formdata = new FormData(event.target);
    let username = formdata.get("username");
    let password = formdata.get("password");
    let number = formdata.get("number");
    let email = formdata.get("email");
    fetch(`http://localhost:3000/recive-data?username=${username}&password=${password}&number=${number}&email=${email}`)
    .then(res => res.json())
    .then(data => console.log(data))
}