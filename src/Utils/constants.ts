
export let BASE_URL:string

if(location.hostname === "localhost"){
    BASE_URL="http://localhost:7777"
}
else {
    BASE_URL="https://code-crush-backend.onrender.com"
}