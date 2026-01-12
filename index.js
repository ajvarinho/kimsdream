const passportWrap = document.querySelector('.passport-wrap');

document.addEventListener('scroll', ()=>{
    const height = Math.floor(document.documentElement.scrollTop) / 10;
    passportWrap.style.minHeight = `${height}em`;
})