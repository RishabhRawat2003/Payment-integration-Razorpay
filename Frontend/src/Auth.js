const authentication = () => {
    const isUserLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"))
    if (isUserLoggedIn) {
        return true
    }else{
        return false
    }
}

export default authentication