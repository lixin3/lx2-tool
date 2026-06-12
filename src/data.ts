const getDataType=(data:any)=>{
    return Object.prototype.toString.call(data)
}
module.exports = { getDataType }