const passportWrap = document.querySelector('.passport-wrap');

document.addEventListener('scroll', ()=>{
    const height = Math.floor(document.documentElement.scrollTop) / 10;
    passportWrap.style.minHeight = `${height}em`;
    //console.log(height)
    if(height > 250) {

    }
})


const scrollWrap = document.querySelector('.horizontal-scroll-wrap');
const scrollEl = document.querySelector('.scroll-container');
const scrollWidth = scrollEl.offsetWidth;
console.log(scrollWrap, scrollEl, scrollWidth)

let isLocked = false;

const observer = new IntersectionObserver(
    (entries) => {
  
      const entry = entries[0];

      console.log(entry, 'alo')

      if (entry.isIntersecting) {
        console.log('jes', scrollWrap)

      isLocked = true;
      document.body.style.overflow = 'hidden';
      

      } else {
      isLocked = false;
      document.body.style.overflow = '';
      };

    },
    {
      root: null, 
      //rootMargin: '-10px 0px 0px -10px',
      rootMargin: '-1px',   // shrinks all 4 sides by 1px
      threshold: 1
    }
  );

  observer.observe(scrollWrap);


// desktop
document.addEventListener('wheel', (e) => {
  if (!isLocked) return;

  console.log(e.deltaY)

  const atStart = scrollEl.scrollLeft <= 0;
  const atEnd = scrollEl.scrollLeft >= scrollEl.scrollWidth - scrollEl.clientWidth - 1;

  if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) {
    // release — let body scroll naturally
    document.body.style.overflow = '';
    isLocked = false;
    return;
  }

  e.preventDefault();
  scrollEl.scrollLeft += e.deltaY;
}, { passive: false });

// mobile
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
  if (!isLocked) return;
  const deltaY = touchStartY - e.touches[0].clientY;
  const atStart = scrollEl.scrollLeft <= 0;
  const atEnd = scrollEl.scrollLeft >= scrollEl.scrollWidth - scrollEl.clientWidth - 1;

  if ((deltaY < 0 && atStart) || (deltaY > 0 && atEnd)) {
    document.body.style.overflow = '';
    isLocked = false;
    return;
  }

  e.preventDefault();
  scrollEl.scrollLeft += deltaY;
  touchStartY = e.touches[0].clientY;
}, { passive: false });

  //fn scroll
  function scrollLeft(){
    scrollEl.scrollLeft += 100;
  }

// Check if user has scrolled the element to the bottom
function isScrolled(scrollWrap) {
  return (
    Math.abs(scrollWrap.scrollHeight - scrollWrap.clientHeight - scrollWrap.scrollTop) <= 1
  );
}

function checkScrollToBottom(scrollWrap) {
  if (isScrolled(scrollWrap) || scrollWrap.scrollTop === 0) {
    document.body.style.overflow = '';
  } else {
    document.body.overflow = 'hidden';
  }
}
