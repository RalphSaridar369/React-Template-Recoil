const types = {
    pdf:'pdf',
    img:['png','jpg','jpeg']
};

export const validateDoc = (data,type) =>{
    let file = data.target.files[0];
    let ext = file.name.split('.');
    if(file.size > 1024*1024){
        return false;
    }
    if(!types[type].includes(ext[ext.length-1]))
        return false;
    return true;
}