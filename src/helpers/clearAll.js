export const ClearAll = () =>{
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload()
}