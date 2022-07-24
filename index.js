/**
"nav" uses position: sticky. If a browser (Edge 15, IE 11) doesn't support position: sticky, then we'll use position: fixed (class .is-fixed), depending on the pageYOffset property.
Note: IE11 uses pageYOffset, which is the same as scrollY (CSSOM View Module) in modern browsers. See also <http://caniuse.com/#feat=css-sticky> for browser support.
*/

function init() {
    const nav = document.querySelector('nav');
    const isSticky = window.getComputedStyle(nav).position == 'sticky';
    const headerHeight = document.querySelector('header').offsetHeight;
    let latestKnownScrollY = 0, ticking = false, isDone = false;
  
    let update = function () {
      const cls = nav.classList;    
      if (latestKnownScrollY >= headerHeight && !isDone) {
        if (!isSticky) cls.add("is-fixed"); // IE11 and Edge 15
        cls.add("is-scrolled");
        isDone = true;
      } else if (latestKnownScrollY < headerHeight && isDone) {
        if (!isSticky) cls.remove("is-fixed");
        cls.remove("is-scrolled");
        isDone = false;
      }
      // allow further rAFs to be called
      ticking = false;
    };
  
    let onScroll = function () {
      latestKnownScrollY = window.pageYOffset;
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
  
    window.addEventListener('scroll', onScroll, false);
  }
  
  document.addEventListener('DOMContentLoaded', init, false);
  

  
  if ('IntersectionObserver' in window) {
    const options = {
      root: null,
      rootMargin: "-50px 0px -400px",
      threshold: 1
    };
  
    const links = document.querySelectorAll('nav a');
  
    let intersectHandler = function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (a) {
            if (a.textContent == entry.target.textContent) {
              a.classList.add('is-selected');
            } else {
              a.classList.remove('is-selected');
            }
          });
        }
      });
    };
  
    const observer = new IntersectionObserver(intersectHandler, options);
  
    const targets = document.querySelectorAll('main h3');
    
    targets.forEach(function (target) {
      observer.observe(target);
    });
  }






  