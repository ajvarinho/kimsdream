const passportWrap = document.querySelector('.passport-wrap');

document.addEventListener('scroll', ()=>{
    const height = Math.floor(document.documentElement.scrollTop) / 10;
    passportWrap.style.minHeight = `${height}em`;
    //console.log(height)
    if(height > 250) {

    }
})


const scrollWrap = document.querySelector('.horizontal-scroll-wrap');
const distance = Math.round(scrollWrap.getBoundingClientRect().top);
console.log(distance, 'distance')
const scrollEl = document.querySelector('.scroll-container');
let isHorizontalScrolling = false;
let scrollProgress = 0;

const observer = new IntersectionObserver(
    (entries) => {
  
      const entry = entries[0];

      if (entry.isIntersecting) {
        console.log('jes')
        alert('in view')
              isHorizontalScrolling = true;
      document.body.style.overflow = 'hidden';

      } else {
        console.log('no')
              isHorizontalScrolling = false;
      document.body.style.overflow = '';
      scrollProgress = 0;
      };

    },
    {
      root: null, 
      rootMargin: '100px 0px 100px 0px',
      threshold: 1
    }
  );

  observer.observe(scrollWrap);

      let check = scrollEl.getBoundingClientRect().top;

      // page height - get bounding right

      let checkDistance = scrollEl.getBoundingClientRect().right;

      
  document.addEventListener('scroll', (e) => {

      console.log('scrollin', e.target)
        
        //if (!isHorizontalScrolling) return;
        console.log('scroll', window.scrollY)

    console.log(e.target)

    let scrollDistance = scrollEl.scrollTop;

    console.log('width', scrollEl.scrollWidth, 'height', scrollEl.scrollHeight, 'scroll top', scrollDistance)
  
    e.preventDefault();

    if(isHorizontalScrolling){
      //body overflow hidden
      //event listener za scrollEl
      //upravljati logikom za crollEl
    }
  
    // // Check if horizontal scroll is complete
    // if (scrollProgress >= maxScroll && e.deltaY > 0) {
    //     // Finished scrolling right, release control
    //     console.log('cscrolled right')
    //     isHorizontalScrolling = false;
    //     //document.body.style.overflow = '';
    // } else if (scrollProgress <= 0 && e.deltaY < 0) {
    //     // Scrolled back to start, release control
    //     console.log('cscrolled back')
    //     isHorizontalScrolling = false;
    //     //document.body.style.overflow = '';
    // }
});