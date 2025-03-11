document.addEventListener('DOMContentLoaded', function() {
  if ('loading' in HTMLIFrameElement.prototype) {
    setTimeout(function () {
      const iframes = document.querySelectorAll('iframe[loading="lazy"]')

      iframes.forEach(iframe => {
        iframe.src = iframe.dataset.src
      })
    }, 700)
	}
	
  /* Header Sticky */
  let headerContainer = document.querySelector('#rec808658909 .t396__artboard')
  if (headerContainer) {
    let sticky = headerContainer.offsetTop + 40
    document.addEventListener('scroll', scrollMenu)
    function scrollMenu() {
      if (window.scrollY > sticky) {
        headerContainer.classList.add('sticky')
      } else {
        headerContainer.classList.remove('sticky')
      }
    }
  }
});
