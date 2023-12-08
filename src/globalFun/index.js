import axios from '@/utils/request'
export function getUserRoleFun(userType){
    return new Promise(resolve=>{
        axios.get(`/server2/getRole?userType=${userType}`)
        .then(res=>{
            resolve(res)         
        }).catch(error=>{
            console.log(error,'error')
        })
    },reject=>{
        reject('error')
    }) 
}