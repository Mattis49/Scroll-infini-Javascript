function loadContent(){
    let div = document.getElementsByClassName("container")[0];
    let divClone = div.cloneNode(true);
    let loading = document.getElementsByClassName("loading")[0];
    document.body.appendChild(divClone);
    document.body.insertBefore(divClone, loading);
}
window.addEventListener("scroll", () => {
    const {scrollHeight, clientHeight, scrollTop} = document.documentElement
    if(scrollTop + clientHeight >= scrollHeight - 1){
      loadContent()

    }
})
