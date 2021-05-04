/**
 Copyright (c) 2011 eGain Communications Corporation. All rights reserved.
 */
(function(){
    try {
        eGain={};

        eGain.cobrowse={};
        eGain.cobrowse.adminWebContext = "admin";
        eGain.cobrowse.csWebContext = "cs";
        eGain.cobrowse.csUrl="";
        eGain.cobrowse.csServername = "";
        eGain.cobrowse.postMsgCountForIframeChk = "5";
        eGain.cobrowse.CobrowseIframeIds='|egcb_checksession|eGain_cobrowse_frame|eGain_allowcobrowse_frame|';
        eGain.cobrowse.locale = 'en_US';
        eGain.cobrowse.parentCobrowseStarted;
		eGain.cobrowse.requestCBStartedAttempsRemaining = 10;

        eGain.cobrowse.consoleLog = function(message) {
            if(console && console.log){
                console.log(message);
            }
        }

        eGain.cobrowse.startCobrowse = function (flag) {
            try{
                eGain.cobrowse.tagCobrowsableFrames();
                eGain.cobrowse.includeJS();
                setTimeout(function(){eGain.cobrowse.startCobrowse_(flag)},100);
            }catch(e){
                eGain.cobrowse.consoleLog("Failed to start Cobrowse Session");
            }
        }

        eGain.cobrowse.setLocale = function (locale){
            eGain.cobrowse.locale = locale;
        };

        eGain.cobrowse.startCobrowse_ = function (flag) {
            var sessionStarted = false;
            try{
                eGainCB.cobrowse.startCobrowse(flag);
                sessionStarted = true;
            }catch(e){
                //alert("Failed to start Cobrowse Session2");
            }
            if(!sessionStarted){
                setTimeout(function(){eGain.cobrowse.startCobrowse_(flag)}, 100 );
                return;
            }

        }

        eGain.cobrowse.getQueryParam = function(url,name,defaultVal){
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
            var results = regex.exec(url);
           return results === null ? defaultVal : decodeURIComponent(results[1].replace(/\+/g, " "));
        };

        eGain.cobrowse.includeJS = function() {
            var cbRevNumber = "170841" ;
            var fs = document.getElementsByTagName("frameset");
            if(fs && fs.length) {
                //alert("Cannot cobrowse this page");
            } else if(!document.getElementById("eGain_allowcobrowse_frame")) {
                var src = eGain.cobrowse.getAllowCobrowseUrl();
                if(src != ""){
                    var adminPath = src.substring(0,src.lastIndexOf("/")+1);
                    var errorStr = "about:neterror";
                    if (document.URL.slice(0, errorStr.length) == errorStr) {
                        var pageNotFoundUrl = adminPath.substring(0, src.lastIndexOf("admin/js")) + "page_not_found";
                        document.location.href = pageNotFoundUrl + "?url=" + window.location;
                    }
                    var cbMode = eGain.cobrowse.getQueryParam(src,'cbMode','b2c');
                    var locale = eGain.cobrowse.getQueryParam(src,'cbLocale',eGain.cobrowse.locale);

                    var f = document.createElement("iframe");
                    f.style.display = "none";
                    f.id =  f.name =  "eGain_allowcobrowse_frame";
                    var isIE10OrLess = navigator.appName.indexOf("Microsoft")>=0 && (!navigator.userAgent.match(/Trident.*rv[:]*11\./));
                    var explicitDomain = (window.location.hostname != document.domain);
                    if(isIE10OrLess && explicitDomain){
                        var u = 'javascript:(function(){document.open(); document.domain="' + document.domain + '";document.write(\''+eGain.cobrowse.getLoadCBScriptString(adminPath,cbRevNumber,cbMode,locale)+'\');document.close();})()';
                        f.src = u;
                    }
                    f.setAttribute("egcb_nopub", true);
                    var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
                    head.appendChild(f);
                    if(!(isIE10OrLess && explicitDomain)) {
                        var d = f.contentWindow.document;
                        d.open();
                        d.write(eGain.cobrowse.getLoadCBScriptString(adminPath,cbRevNumber,cbMode,locale));
                        d.close();
                    }
                    return f.contentWindow;
                }
            }
        };
        eGain.cobrowse.getLoadCBScriptString = function(adminPath,cbRevNumber,cbMode,locale){
            var fn = 'resetCounter(); function resetCounter(){ sessionStorage.setItem("loadcbattempt",0);} function incrementCounter(){var atmpt = sessionStorage.getItem("loadcbattempt"); if(!atmpt){ atmpt = 0; }; sessionStorage.setItem("loadcbattempt", ++atmpt)}; function isAttemptAvailable(){ var atmpt = sessionStorage.getItem("loadcbattempt"); if(!atmpt){ atmpt = 0; } return (atmpt < 10)}; function reloadCBScript() { if(isAttemptAvailable()){ setTimeout(loadcbStcript, 5000); incrementCounter(); }else{ if(console && console.log){console.log("Failed to load cobrowse scripts, please try again later");} } }; function loadcbStcript(){ var oldSc = document.getElementById("_egainallowcobrowse"); if (oldSc && oldSc.parentNode) { oldSc.parentNode.removeChild(oldSc); } var sc = document.createElement("script"); sc.setAttribute("name", "_egainallowcobrowse"); sc.setAttribute("id", "_egainallowcobrowse"); sc.setAttribute("src", "'+adminPath +'loadcbscripts.jsp?cbMode=' + cbMode +'&cbLocale='+ locale +'&cbRevNum=' + cbRevNumber+'"); sc.setAttribute("onerror", "reloadCBScript()"); document.getElementsByTagName("head")[0].appendChild(sc); };';
            return '<html><head><script>var cbAdminPath = "' + adminPath + '"; var cbRevNumber = "' + cbRevNumber + '";'+fn+' </script><script name="_egainallowcobrowse" onerror="reloadCBScript()" onload="resetCounter()" id="_egainallowcobrowse" src="' + adminPath + 'loadcbscripts.jsp?cbMode=' + cbMode +'&cbLocale='+ locale +'&cbRevNum=' + cbRevNumber + '"></script></head><body></body></html>'
        };

        eGain.cobrowse.getAdminPath = function(){
            var src = adminPath = "";
            src = eGain.cobrowse.getAllowCobrowseUrl();
            if(src != ""){
                var adminPath = src.substring(0,src.lastIndexOf("/")+1);
            }
            return adminPath;
        };
        eGain.cobrowse.getAllowCobrowseUrl = function (){
            var src = "";
            var addOn = document.getElementById("_egainallowcobrowse");
            if (addOn && addOn.src){
                src = addOn.src;
            }
            if(src == ""){
                var scripts = document.getElementsByTagName('SCRIPT');
                for(var i=0; i<scripts.length;i++) {
                    if(scripts[i].src.replace(/\\/,"/").indexOf("/allow_cobrowse.") != -1 ) {
                        src = scripts[i].src;
                    }
                }

            }
            if(eGain.cobrowse.CBHost && eGain.cobrowse.CBHost.length > 0){
                src = eGain.cobrowse.getModifiedSrc(src,eGain.cobrowse.CBHost);
            }
            return src;
        };
        eGain.cobrowse.getServerName = function(url) {
            var    a      = document.createElement('a');
            a.href = url;
            var port = a.port?":"+a.port:"";
            return a.protocol+'//'+a.hostname+port;
        }
        eGain.cobrowse.checkSessionState = function() {
            eGain.cobrowse.csUrl = eGain.cobrowse.getAdminPath().replace("/"+eGain.cobrowse.adminWebContext+"/","/"+eGain.cobrowse.csWebContext+"/");
            eGain.cobrowse.csServername = eGain.cobrowse.getServerName(eGain.cobrowse.csUrl);
            eGain.cobrowse.resetResourceLoadingAttempts();
            eGain.cobrowse.loadCheckSessionFrame();
            var readyStateCheckInterval = setInterval(function() {
                if (document.readyState === "complete") {
                    if (!!eGain.cobrowse.checkSessionLoaded || !eGain.cobrowse.isAttemptAvailable()) {
                        clearInterval(readyStateCheckInterval);
                        if(!eGain.cobrowse.isAttemptAvailable()){
                            eGain.cobrowse.consoleLog("Failed to load cobrowse scripts, please try again later");
                        }
                        return;
                    }
                    if (!document.body) {
                        // log error; could not proceed with Cobrowse, document.body is required
                        return;
                    }
                    eGain.cobrowse.incrementResourceLoadingAttempts();
                    eGain.cobrowse.loadCheckSessionFrame();
                }
			}, 5000);
        };

        eGain.cobrowse.resetResourceLoadingAttempts = function(){
            sessionStorage.setItem("loadcbattempt",0);
        };
        eGain.cobrowse.incrementResourceLoadingAttempts = function(){
            var atmpt = sessionStorage.getItem("loadcbattempt");
            atmpt = !atmpt? 0: atmpt;
            sessionStorage.setItem("loadcbattempt",++atmpt);
        };
        eGain.cobrowse.isAttemptAvailable = function(){
            var atmpt = sessionStorage.getItem("loadcbattempt");
            atmpt = !atmpt? 0: atmpt;
            return (atmpt < 10);
        };


        eGain.cobrowse.loadCheckSessionFrame= function(){

            if (document.readyState === "complete" && (window == top || eGain.cobrowse.parentCobrowseStarted)) {
                if (eGain.cobrowse.csUrl) {
                    var sc = document.getElementById("egcb_checksession");
                    if (sc && sc.parentNode) {
                        sc.parentNode.removeChild(sc);
                    }
                    var ifrm = document.createElement("IFRAME");
                    ifrm.setAttribute("src", eGain.cobrowse.csUrl + "../checkSession.html?wsname=" + window.location.protocol + "//" + window.location.host);
                    ifrm.setAttribute("id", "egcb_checksession");
                    ifrm.setAttribute("egcb_nopub", true);
                    ifrm.style.display = 'none';

                    if (navigator.userAgent.indexOf("MSIE") > -1 && !window.opera) { //IE
                        ifrm.onreadystatechange = function () {
                            ifrm = document.getElementById("egcb_checksession");
                            if (ifrm && (ifrm.readyState == "loaded" || ifrm.readyState == "complete")) {
                                ifrm.onreadystatechange = null;
                                window.setTimeout(function () {
                                    ifrm = document.getElementById("egcb_checksession");
                                    var cWindow = ifrm ? ifrm.contentWindow : null ;
                                    if(cWindow)
                                        cWindow.postMessage('getSessionState', eGain.cobrowse.csServername);
                                }, 5000);
                            }
                        };
                    }
                    else { //Others
                        ifrm.onload = function () {
                            ifrm.contentWindow.postMessage('getSessionState', eGain.cobrowse.csServername);
                        };
                    }

                    var isIE = window.attachEvent != null;
                    if (isIE) {
                        window.attachEvent("onmessage", eGain.cobrowse.onSessionStateCheckCallback);
                    } else {
                        window.addEventListener("message", eGain.cobrowse.onSessionStateCheckCallback, false);
                    }
                    document.body.appendChild(ifrm);
                }
            } else if (document.readyState != "complete") {
                setTimeout(eGain.cobrowse.loadCheckSessionFrame,100);
            }
        };

        /**
         * This method will be called on reload of iframe from cobrowsable pages.
         */
        eGain.cobrowse.requestParentCobrowseStarted = function() {
			if (document.readyState === "complete" && !eGain.cobrowse.parentCobrowseStarted && eGain.cobrowse.requestCBStartedAttempsRemaining > 0) {
				eGain.cobrowse.requestCBStartedAttempsRemaining--;
				window.parent.postMessage("requestParentCobrowseStarted", "*") ;
				setTimeout(eGain.cobrowse.requestParentCobrowseStarted,1000);
			} else if (document.readyState != "complete") {
				setTimeout(eGain.cobrowse.requestParentCobrowseStarted,1000);
			}
		};

		if (window != top) {
			// Inside iframes, check for parent cobrowse session
			eGain.cobrowse.requestParentCobrowseStarted();
		}

        eGain.cobrowse.onSessionStateCheckCallback = function(e){
            if(e.data.split){
	            var dataArr = e.data.split("$egcb$");
	            if(dataArr.length >= 3 && eGain.cobrowse.csUrl && eGain.cobrowse.csUrl.indexOf(e.origin)==0 ){
                    eGain.cobrowse.checkSessionLoaded = true;
                    if(dataArr[3] != 'en_US' && dataArr[3] != eGain.cobrowse.locale){
                          eGain.cobrowse.setLocale(dataArr[3]);
                    }
                    if(dataArr.length >= 4 && dataArr[3] == "cbAutostart"){
	                    sessionStorage.setItem('cbAutostart',true);
	                }
	                if(dataArr[2]){
	                    sessionStorage.setItem('egActId',dataArr[2]);
	                }
	                if(dataArr[1]){
	                    sessionStorage.setItem('cbAutoSessionId',dataArr[1]);
	                    eGain.cobrowse.startCobrowse();
	                }
	                else if(dataArr[0] == "true"){
	                    //TODO: change call to eGain.cobrowse.startCobrowse();
	                    eGain.cobrowse.tagCobrowsableFrames();
	                    eGain.cobrowse.includeJS();
	                }
	            }
	        }
        };

        eGain.cobrowse.isTrustedSource = function(source) {
            if (window.parent == source) {
                // for message - "cobrowsableFrame$cb_split${frame_url}", "parentCobrowseStarted"
                return true;
            }
            for(var i=0;i<window.frames.length;i++) {
                if (window.frames[i] == source) {
                    // for message - "requestParentCobrowseStarted", "eg_cbFrameResponse: cobrowsableFrame$cb_split${frame_url}" 
                    return true;
                }
            }
            for(var i=0;i<window.parent.frames.length;i++) {
                if (window.parent.frames[i] == source) {
                    // for message - "parentCobrowseEnded", "parentCobrowseStarted"
                    return true;
                }
            }
            return false;
        };

        eGain.cobrowse.receiveMsg = function(e) {
            if(eGain.cobrowse.isTrustedSource(e.source)) {
                if (e.data.indexOf && e.data.indexOf("cobrowsableFrame") == 0) {
                    var response = "eg_cbFrameResponse: " + e.data;
                    e.source.postMessage(response, e.origin);
                } else if (e.data.indexOf && e.data.indexOf("eg_cbFrameResponse:") == 0) {
                    // detect the iframe, for which response received, and tag it as cobrowsableFrame
                    var iframeSrc = e.data.split('$cb_split$')[1];
                    var framesets = document.getElementsByTagName('iframe');
    
                    for (var i1 = 0; i1 < framesets.length; i1++) {
                        var frameElement = framesets [i1];
                        if (frameElement.src == iframeSrc) {
                            frameElement.setAttribute("eg_cobrowsableFrame", "true");
                            eGain.cobrowse.checkAndSendModifiedFrameSrc(frameElement);
                        }
                    }
                }else if (e.data.indexOf && e.data.indexOf("IntMsgForCobrowse:") >= 0){
                    var data = e.data.split(":IntMsgForCobrowse:");
                    if(data.length != 2){
                        eGain.cobrowse.consoleLog("data received is not in correct format "+ e.data);
                        return;
                    }
                    var content = data[1].split("$egint$");
                    var counterData;
                    var counter = ((counterData = data[0].split(":")).length == 2)?counterData[1]:-1;
                    for(var i=0; i < content.length;i=i+2){
                        eGain.cobrowse.consoleLog("persisting localStorage: "+ content[i] + "-"+ content[i+1]);
                        sessionStorage.setItem(content[i],content[i+1]);
                        if(content[i] == 'cbAutoSessionId' && !(window.eGainCB && window.eGainCB.isCobrowseStarted_)){
                            eGain.cobrowse.startCobrowse();
                        }
                        if(content[i] == 'endCbSession' && (window.eGainCB && window.eGainCB.isCobrowseStarted_)){
                            eGainCB.validateAndTerminateCobrowse(content[i+1]);
                        }
                    }
                    e.source.postMessage("ResponseFromCBWindow:"+counter, e.origin);
                } else if (window != top && e.data && e.data == "parentCobrowseStarted" ) {
                    if ( !eGain.cobrowse.parentCobrowseStarted ) {
                        eGain.cobrowse.parentCobrowseStarted = true;
                        eGain.cobrowse.loadCheckSessionFrame();
                    }
                } else if (window != top && e.data && e.data == "parentCobrowseEnded") {
                    eGain.cobrowse.parentCobrowseStarted = false;
                } else if(e.data && e.data == "requestParentCobrowseStarted") {
                    if( window.eGainCB && window.eGainCB.isCobrowseStarted_ ) {
                        try {
                            e.source.postMessage("parentCobrowseStarted", "*");
                        }
                        catch(e){
                            
                        }
                    }
                }
            } else {
                eGain.cobrowse.consoleLog("Permission Denied to access cobrowse");
            }
        }
        eGain.cobrowse.tagCobrowsableFrames = function(){

            var framesets =document.getElementsByTagName('iframe');
            var nonCobrowsableFrameExists = false;
            for (var i1 = 0; i1 < framesets.length; i1++) {
                var frameElement = framesets [i1];
                var frameSrc = frameElement.src;
                if(frameElement.getAttribute("eg_cobrowsableFrame") == "true" || eGain.cobrowse.CobrowseIframeIds.indexOf('|'+frameElement.id+'|') >= 0 || frameElement.getAttribute("egcbFrameCheckAttempt") == eGain.cobrowse.postMsgCountForIframeChk){
                    continue;
                }
                nonCobrowsableFrameExists = true;

                var urlArray = frameSrc.split('/');
                if (urlArray[0].indexOf('http') < 0)
                    urlArray = document.location.href.split('/');
                var count = frameElement.getAttribute("egcbFrameCheckAttempt");
                if(!count){
                    count = 0;
                }
                var domain = (urlArray[0] + '//' + urlArray[2]);
                eGain.cobrowse.consoleLog("postMessage: "+ frameSrc + " count: "+ count);
                frameElement.contentWindow.postMessage('cobrowsableFrame$cb_split$'+frameSrc, domain);
                frameElement.setAttribute("egcbFrameCheckAttempt",(++count));
            }
            if(nonCobrowsableFrameExists){
                eGain.cobrowse.markCobrowsableFrames();
            }

        };
        eGain.cobrowse.markCobrowsableFrames = function(){
            setTimeout(eGain.cobrowse.tagCobrowsableFrames,1000);
        };
        eGain.cobrowse.checkAndSendModifiedFrameSrc = function (node){
            var winId = node.getAttribute("egcb_wnd_id");
            if(winId && window.eGainCB && window.eGainCB.isCobrowseStarted_){
                var egid=node.getAttribute("egid");
                eGainCB.util.sendModifiedSrcForFrame(egid,winId,null);
            }
        };
        eGain.cobrowse.getModifiedSrc = function(src,domain){
            var origDomain = "";
            if (src.indexOf("://") > -1) {
                origDomain = src.split('/')[2];
            }
            else {
                origDomain = src.split('/')[0];
            }
            return src.replace(origDomain,domain);

        };
        eGain.cobrowse.getCBHostName = function () {
            var head = document.getElementsByTagName('head').item(0);
            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('id', 'cb_host_discovery');
            script.setAttribute('onerror', 'eGain.cobrowse.reloadCBHost(true)');
            script.setAttribute('onload', 'eGain.cobrowse.reloadCBHost(false)');
            script.setAttribute('src', eGain.cobrowse.getAdminPath()+'../getCBHostName.jsp');
            head.appendChild(script);
        };

        eGain.cobrowse.reloadCBHost = function(failure){
            if(!failure){
                eGain.cobrowse.resetResourceLoadingAttempts();
            }else if(eGain.cobrowse.isAttemptAvailable()){
                setTimeout(eGain.cobrowse.getCBHostName, 5000);
                eGain.cobrowse.incrementResourceLoadingAttempts();
            }else{
                eGain.cobrowse.consoleLog("Failed to load cobrowse scripts, please try again later");
            }
        };

        eGain.cobrowse.addMessageListener = function(){
            var isIE = window.attachEvent != null;
            if (isIE) {
                window.attachEvent("onmessage", eGain.cobrowse.receiveMsg);
            } else {
                window.addEventListener("message", eGain.cobrowse.receiveMsg, false);
            }
        };
        eGain.cobrowse.onCBHostResponse = function(cbHost){
            if(cbHost == undefined || cbHost == null || cbHost == 'null' || cbHost.length == 0){
                var url = eGain.cobrowse.getAllowCobrowseUrl();
                if (url.indexOf("://") > -1) {
                    eGain.cobrowse.CBHost = url.split('/')[2];
                }
                else {
                    eGain.cobrowse.CBHost = url.split('/')[0];
                }
            }
            else{
				eGain.cobrowse.CBHost = cbHost;
			}
            sessionStorage.setItem("cbHost",eGain.cobrowse.CBHost);
            eGain.cobrowse.checkSessionState();
            eGain.cobrowse.addMessageListener();
        };
        try{
	        //cleanup session storage at start
	        sessionStorage.removeItem('cbAutoSessionId');
			sessionStorage.removeItem('egActId');
			sessionStorage.removeItem('cbAutostart');
		}
		catch(e){
			eGain.cobrowse.consoleLog("Cobrowse: Failed to access sessionStorage");
			return;
		}

        /* This function is used to block execution of allow_cobrowse js on agent side */
		eGain.cobrowse.isAdvisorDesktop = function() {
            try{
                return !!sessionStorage.getItem("session-sessionToken");
            }
            catch(e){
                eGain.cobrowse.consoleLog("Cobrowse: Failed to access sessionStorage");
                return false;
            }
		};

        if((window.egChatFrameIdentifier && window.egChatFrameIdentifier > 0) || eGain.cobrowse.isAdvisorDesktop()){
			return;
		}
        if(sessionStorage.getItem("cbHost") != null && sessionStorage.getItem("cbHost").length > 0){
            eGain.cobrowse.CBHost = sessionStorage.getItem("cbHost");
            eGain.cobrowse.checkSessionState();
            eGain.cobrowse.addMessageListener();
        }else{
            eGain.cobrowse.resetResourceLoadingAttempts();
            eGain.cobrowse.getCBHostName();
        }
    } catch(e) {
        if(console && console.log){
            console.log("Failed to start Cobrowse");
        }

    }
})();