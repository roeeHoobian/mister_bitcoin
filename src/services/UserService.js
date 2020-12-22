import { utilService } from "./util-service"

export const UserService = {
    getUser,
    setUser
}
var gUser={
    
        name: 'guest',
        coins: 100,
        moves:[]
    
}
function setUser(name){
    gUser.name=name
    
}
function getUser(){
    const user = utilService.loadFromStorage('user')
    if(!user) return gUser
    else return user
    
}