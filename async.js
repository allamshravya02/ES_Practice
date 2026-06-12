function fetchUserName(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const name="cvr123";
        resolve(name)},10);
    });
}
console.log("Aync await function");
function fetchUserDetails(userName){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user={
                Name:"Arya",Branch:"CSE",Section:"E"
            };
        resolve(user)},100);
    });
}
async function readData(){
const uname=await fetchUserName();
const udetails=await fetchUserDetails(uname);
console.log(udetails);
}
readData()
console.log("Finished before wait");
