const observer = new IntersectionObserver((entries, setScrollAmount) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})

export default observer;

