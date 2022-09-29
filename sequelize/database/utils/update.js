
const parseparameters = async (data) => {
let newobj = {}

    for(let key in data){
      if(data[key]) newobj[key] = data[key]
      else console.log("No existe")
    }
return newobj
}



module.exports = {
    parseparameters
}