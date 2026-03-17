const passportWrap = document.querySelector('.passport-wrap');

document.addEventListener('scroll', ()=>{
    const height = Math.floor(document.documentElement.scrollTop) / 10;
    passportWrap.style.minHeight = `${height}em`;
    //console.log(height)
    if(height > 250) {

    }
})


const scrollWrap = document.querySelector('.horizontal-scroll-wrap');
// const distance = Math.round(scrollWrap.getBoundingClientRect().top);
// console.log(distance, 'distance')
const scrollEl = document.querySelector('.scroll-container');
let isHorizontalScrolling = false;
let scrollProgress = 0;

const observer = new IntersectionObserver(
    (entries) => {
  
      const entry = entries[0];

      if (entry.isIntersecting) {
        console.log('jes', scrollWrap.scrollHeight)
        document.body.style.overflow = 'hidden';
        
        scrollWrap.addEventListener("scroll", () => {
          checkScrollToBottom(scrollWrap);
        });

      } else {
        console.log('no')
        isHorizontalScrolling = false;
        document.body.style.overflow = '';
        scrollProgress = 0;
      };

    },
    {
      root: null, 
      rootMargin: '10px 0px 0px 0px',
      threshold: 1
    }
  );

  observer.observe(scrollWrap);

// Check if user has scrolled the element to the bottom
function isScrolled(scrollWrap) {
  return (
    Math.abs(scrollWrap.scrollHeight - scrollWrap.clientHeight - scrollWrap.scrollTop) <= 1
  );
}

// Check if user has scrolled the element back to top
function isScrolledBack(scrollWrap) {
  return (
    Math.abs(scrollWrap.scrollHeight - scrollWrap.clientHeight - scrollWrap.scrollTop) === 0
  );
}

function checkScrollToBottom(scrollWrap) {
  if (isScrolled(scrollWrap) || isScrolledBack(scrollWrap)) {
    document.body.style.overflow = '';
  } else {
    document.body.overflow = 'hidden';
  }
}

// scrollWrap.addEventListener("scroll", () => {
//   checkScrollToBottom(scrollWrap);
// });

