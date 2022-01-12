export const ReadFile = (e,callback) =>{
    if (e.target.files && e.target.files[0]) {
        let reader = new FileReader();
        let url = "";
        reader.onload = (e) => {
            url = e.target.result;
            callback(url);
        };
        reader.readAsDataURL(e.target.files[0]);
    };
};