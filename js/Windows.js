function openWin() {
        window.open("../src/reply.html", "myWindow", "toolbar=0, scrollbars=1, resizable=1, top=200, left=500, width=400, height=400, fullscreen=0, location=0, menubar=0,titlebar=0");
    }
	function post()
    {
        var r = confirm("Are you sure to post?");
        if (r == true) {
            succ();
        }
    }

    function quit() {
        var r = confirm("Are you sure to quit?");
        if (r == true) {
            window.location.replace('../src/article_reading.html');
        }
    }

    function succ() {
        window.location.replace('../src/deep_reading.html');
    }
    }