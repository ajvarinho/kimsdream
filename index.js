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
        document.body.style.overflow = '';
      };

    },
    {
      root: null, 
      rootMargin: '-10px 0px 0px -10px',
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

function checkScrollToBottom(scrollWrap) {
  if (isScrolled(scrollWrap) || scrollWrap.scrollTop === 0) {
    document.body.style.overflow = '';
  } else {
    document.body.overflow = 'hidden';
  }
}
