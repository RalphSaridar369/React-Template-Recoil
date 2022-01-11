const types = {
    pdf:'pdf',
    img:['png','jpg','jpeg']
};

export const validateDoc = (data,type) =>{
    let file = data.target.files[0].name;
    let ext = file.split('.');
    if(!types[type].includes(ext[ext.length-1]))
        return false
    return true
}