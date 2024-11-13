(function () {
    function startMod() {
        window.nlm014isDone = false;
        var wload = 0,
            wfirst = 1,
            wfirstp = 65,
            wsec = 1,
            wsecp = 85,
            recid = "#rec811306260",
            i = 1,
            gg = 0,
            pt = 0,
            wloadc = "preloadPercent014";
        function preloaderProcentsUpdate(proc) {
            document.querySelectorAll("." + wloadc + " .tn-atom").forEach(function (item) {
                item.innerHTML = proc + "%";
            });
        }
        function runProcent(one, two, time, func) {
            if (two <= one) {
                return;
            }
            var procents = one;
            var timer = setInterval(function () {
                1 == gg && clearInterval(timer);
                procents++;
                wload++;
                preloaderProcentsUpdate(procents);
                if (procents == two) {
                    clearInterval(timer);
                    func && func();
                }
            }, time * 10);
        }
        function myLoop3() {
            1 == gg &&
                setTimeout(function () {
                    (wload += 1) >= 100 && (wload = 100),
                        document.querySelectorAll("." + wloadc + " .tn-atom").forEach(function (item) {
                            item.innerHTML = wload + "%";
                        }),
                        wload < 100
                            ? myLoop3()
                            : (document.querySelectorAll("." + wloadc + " .tn-atom").forEach(function (item) {
                                  item.innerHTML = "100%";
                              }),
                              document.querySelectorAll(recid).forEach(function (item) {
                                  item.classList.replace("n-show", "n-hide");
                                  setTimeout(function () {
                                      item.style.display = "none";
                                  }, 500);
                              }),
                              window.dispatchEvent(new Event("resize")),
                               
                               document.querySelectorAll('.t-rec').forEach(trec => {
                                    trec.classList.add('visibled')
                                }),
                                var evt = document.createEvent('UIEvents'),
                                evt.initUIEvent('resize', true, false, window, 0),
                                window.dispatchEvent(evt),
                              setTimeout(function () {
                                  window.nlm014isDone = true;
                              }, 500));
                }, 8);
        }
        function myLoop2() {
            runProcent(wfirstp, wsecp, wsec);
        }
        function myLoop() {
            runProcent(0, wfirstp, wfirst, myLoop2);
        }
        function t_ready(e) {
            "loading" != document.readyState
                ? e()
                : document.addEventListener
                ? document.addEventListener("DOMContentLoaded", e)
                : document.attachEvent("onreadystatechange", function () {
                      "loading" != document.readyState && e();
                  });
        }
        t_ready(function () {
            setTimeout(function () {
                document.querySelectorAll(recid).forEach(function (item) {
                    item.classList.add("n-show");
                });
                document.querySelectorAll(".preloadPercent014").forEach(function (item) {
                    item.style.opacity = "1";
                });
                myLoop(),
                    document.querySelectorAll("." + wloadc + " .tn-atom").forEach(function (item) {
                        item.innerHTML = wload + "%";
                    }),
                    document.querySelectorAll(recid).forEach(function (item) {
                        item.display = "block";
                    }),
                    setTimeout(function () {
                        (gg = 1), myLoop3();
                    }, 1000);
            }, 100);
        });
    }
    if (0 == "0") {
        startMod();
    } else {
        if (!sessionStorage.getItem("key328077")) {
            sessionStorage.setItem("key328077", "key328077");
            startMod();
        } else {
            let intForZeroBlock = setInterval(() => {
                const zeroBlock = document.querySelector("#rec811306260");
                if (zeroBlock) {
                    clearInterval(intForZeroBlock);
                    console.log("zeroBlock", zeroBlock);
                    zeroBlock.remove();

                    document.querySelectorAll('.t-rec').forEach(trec => {
                        trec.classList.add('visibled')
                    });
                    var evt = document.createEvent('UIEvents');
                    evt.initUIEvent('resize', true, false, window, 0);
                    window.dispatchEvent(evt);
                    window.dispatchEvent(new Event('resize'));
                    
                }
            }, 1);
            setTimeout(() => {
                if (intForZeroBlock) {
                    clearInterval(intForZeroBlock);
                }
            }, 3000);
        }
    }
})();
