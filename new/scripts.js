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
