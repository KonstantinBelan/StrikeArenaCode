  document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            document.querySelectorAll('.t-rec').forEach(trec => {
                trec.classList.add('visibled')
            })
            var evt = document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
            window.dispatchEvent(new Event('resize'));
        }, 1000)
    });

    if (window.location.href.indexOf("country=") > -1) {
    } else {
        $.getJSON('https://ipinfo.io/json', function (response) {
            var ipcountry = response.country;
            if(ipcountry == 'BY') {
                window.location = "/?country=belarus";
            }
            if(ipcountry == 'KZ') {
                window.location = "/?country=kazahstan";
            }
            if(ipcountry == 'UZ') {
                window.location = "/?country=uzbekistan";
            }
        });  
    };
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
