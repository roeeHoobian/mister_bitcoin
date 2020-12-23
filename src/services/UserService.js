import { utilService } from "./util-service"

export const UserService = {
    getUser,
    setUser,
    signup,
    addMove
}
var gUser={
        name: 'guest',
        coins: 100,
        moves:[]
}
function signup(name){
console.log(name);
gUser.name = name
utilService.storeToStorage('user',gUser)
}
function addMove(contact, amount){
const move = {
    to:contact._id,
    amount,
    at:new Date()
}
var user = JSON.parse(JSON.stringify(gUser))
user.moves.push(move)
user.coins -= amount
utilService.storeToStorage('user',user)

}

function setUser(name){
    gUser.name=name
}
function getUser(){
    const user = utilService.loadFromStorage('user')
    if(!user) return gUser
    else return user
}
