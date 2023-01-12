function parseError(error){
if (error.name=='ValidationError'){
return Object.values(error.errors).map((e)=>e.message);

}else{
    return [error.message]
}
}

module.exports={parseError}