// Copyright 2006-2021 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
ClickTaleGlobal.scripts.versions = {"wr": "latest-WR110.js", "pcc": "3d60bbfe-3fa3-45c4-9332-cc1534d3e4bd.js?DeploymentConfigName=Release_20210329&Version=3"};
(function (d) {
	var dom="h",
		spe=[92,94,36,46,124,63,42,43,40,41,91,123],
		rep=[98,100,102,104,106,108,110,112,114,116,118,119];
	for(var v,c,i=0,len=d.length;i<len,c=d.charCodeAt(i);i++){		
		if(c>=97&c<=122){v=c+7;v=v>122?v-26:v;v=v%2==0?v-32:v;}
		else if(c>=48&c<=57){v=69+(c-48)*2}
		else if(c==45){v=65}
		else if(spe.indexOf(c)>=0){v=rep[spe.indexOf(c)]}
		else{v=c}
		dom+=String.fromCharCode(v);
	}

	ClickTaleGlobal.init.isAllowed = (function() {
						var doms = ["kPNPRLFhJH","kPNPRLFhJu","kPNPRLFhJVhBR","kPNPRLFhJVT","kPNPRLFhkL","kPNPRLFhPu","kPNPRLFhqw","kPNPRLFhRy","XBHsayPJZhJVT"];
			if(location.protocol == "file:") return false;
			for(var i=0, curr; i < doms.length, curr = doms[i]; i++) {
								if(new RegExp("h" + curr + "$", "i").test(dom))
									return true;
			}
			return false;
					})()
})(window.location.host.toLowerCase().replace(/^((www)?\.)/i, ""));

ClickTaleSettings.Proxy = {
	WR: "ing-district.clicktale.net/ctn_v2/",
	ImageFlag: "ing-district.clicktale.net/ctn_v2/"
}
ClickTaleSettings.Protocol = {
	Method: "ImpactRecorder"
}
ClickTaleGlobal.diagnostics=function(){function n(n,t,o){if(n&&t)for(var r in T){var e=T[r];e.collect(t)&&e.errors.push({message:n,url:t,lineno:o})}return!!S&&S(n,t,o)}function t(n){return"function"==typeof n}function o(){return performance?performance.now():Date.now()}function r(n){++n.sampled>n.repeats?g(n.name):e(n)}function e(n){var t=n.reporter()||{},o=n.errors.splice(0),r=n.level,e=n.url,l={loaded:n.loaded,ready:n.ready,started:n.started,level:o.length?"error":r,errors:encodeURIComponent(JSON.stringify(o))};e&&r!==k&&(n.timeToLoad>0&&(l.timeToLoad=n.timeToLoad),a(n,i(i(e+"?t=log&p="+n.pid,l),t),o))}function i(n,t){for(var o in t)n+="&"+I[o]+"="+t[o];return n}function a(n,o,r){var e=L.sendBeacon,i=function(n){n.errors=r.concat(n.errors)};if(t(e))e.call(L,o)||i(n);else{var a=new Image;a.onerror=a.ontimeout=function(){i(n)},a.timeout=3e4,a.src=o}}function l(n){T[n]&&(T[n].ready=!0)}function c(n){var t=T[n];t&&(t.loaded=!0,t.timeToLoad=t.loadStart?o()-t.loadStart:0),T[n]=t}function d(n){T[n]&&(T[n].loading=!0,T[n].loadStart=o())}function u(n){T[n]&&(T[n].started=!0)}function f(n){T[n]&&(T[n].starting=!0)}function s(n,o,r){var e=window.ClickTaleMonitor;e&&(I.monitorState=40,I.isMonitoring=42,t(e.getPid)&&v(M,e.getPid(),n||"https://conductor.clicktale.net/monitor",/\/monitor-(latest|[\d\.]+).*\.js$/i,function(){var n=t(e.getState)&&e.getState();return!this.errors.length&&n.match(/^(chunk|end)$/i)&&(this.level=k),{monitorState:n,isMonitoring:t(e.isMonitoring)&&e.isMonitoring()}},o||5e3,r||1))}function m(){g(M)}function v(t,o,r,e,i,a,l){T[t]=T[t]||new p(t,o,r,e,i,a,l),y||(S=window.onerror,window.onerror=n,y=!0)}function g(n){var t=T[n];t&&(clearInterval(t.sampler),delete T[n]);for(var o in T)return;y=!1}function p(n,t,o,e,i,a,l){var c=this;c.url=o,c.pid=t,c.errors=[],c.name=n,c.level="alert",c.repeats=l,c.loadStart=c.sampled=c.timeToLoad=0,c.loading=c.loaded=c.starting=c.started=c.ready=!1,c.reporter=function(){return i.call(c)},c.collect=function(n){return!!n.match(e)},c.sampler=setInterval(function(){r(c)},a)}function h(n,t,o){var r=n&&n.name,e=T[r];if(e){var i=e[t];"function"==typeof i&&i.apply(this,o)}}function w(n,t,o){return{on:t,off:o,onready:function(){l(n)},onloaded:function(){c(n)},onloading:function(){d(n)},onstarted:function(){u(n)},onstarting:function(){f(n)}}}var y,S,T={},L=navigator,k="info",M="monitor",I={level:0,loaded:2,ready:4,started:6,errors:8,timeToLoad:12};return{monitor:w(M,s,m),invoke:h}}();

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
	var recordingThreshold = Math.random() * 100;

	return {
		isRecordingApproved: function(percentage) {
			return recordingThreshold <= percentage;
		}
	}
})();
	
		
// Copyright 2006-2021 ClickTale Ltd., US Patent Pending
// PID: 53368
// WR destination: www
// WR version: 17.0
// Recording ratio: 0.22

(function (){
	var dependencyCallback;
        var scriptSyncTokens = ["wr"];
        var ct2Callback, isRecorderReady;
    var dependencies = scriptSyncTokens.slice(0);
    var clickTaleOnReadyList = window.ClickTaleOnReadyList || (window.ClickTaleOnReadyList = []);
    var indexOf = (function(){if(Array.prototype.indexOf){return function(array,value){return array.indexOf(value)}}return function(array,value){var length=array.length;for(var i=0;i<length;i++){if(array[i]===value){return i}}return -1}})();
    function isValidToken(token) {
        if (indexOf(scriptSyncTokens, token) > -1) {
            var index = indexOf(dependencies, token);

            if (index > -1) {
                dependencies.splice(index, 1);
                return true;
            }
        }

        return false;
    }

    clickTaleOnReadyList.push(function () {
        if (ct2Callback) {
            ct2Callback();
        }

        isRecorderReady = true;
    });

    ClickTaleGlobal.scripts.dependencies = {
        setDependencies: function (deps) {
            scriptSyncTokens = deps;
        },
        onDependencyResolved: function (callback) {
            dependencyCallback = callback;
        },
        notifyScriptLoaded: function (token) {
            if (isValidToken(token)) {
                if (dependencies.length === 0 && typeof dependencyCallback === "function") {
                    dependencyCallback();
                }
            }
        }
    };

    ClickTaleGlobal.scripts.integration = {
        onReady: function (callback) {
            if (isRecorderReady) {
                callback();
            }
            else {
                ct2Callback = callback;
            }
        }
    };
})();



	ClickTaleSettings.Integration = ClickTaleSettings.Integration || {};
	ClickTaleSettings.Integration.ProjectType = 3;

window.ClickTaleIsXHTMLCompliant = true;
if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = function(element)
	{
		var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
		parent.appendChild(element);
	}
}

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = function(code)
	{
		var script = ClickTaleCreateDOMElement('script');
		script.setAttribute("type", "text/javascript");
		script.text = code;
		return script;
	}
}	



// Start of user-defined pre WR code (PreLoad)
//PTC Code Version 10.1

window.ClickTaleSettings = window.ClickTaleSettings || {};
ClickTaleSettings.PTC = ClickTaleSettings.PTC || {};
ClickTaleSettings.Compression = ClickTaleSettings.Compression || {};
ClickTaleSettings.Compression.Method = function () {
    return "deflate";
};
ClickTaleSettings.Transport = ClickTaleSettings.Transport || {};
(function () {
    var Tr = ClickTaleSettings.Transport;
    Tr.Legacy = false;
    Tr.MaxConcurrentRequests = 1;
    Tr.BigBuffer = 120000;
})();
ClickTaleSettings.Protocol = ClickTaleSettings.Protocol || {};
ClickTaleSettings.Protocol.Method = "ImpactRecorder";
if (window.Zone && typeof Zone["__symbol__"] === "function") {
    ClickTaleSettings.PTC.restoreZonedXHR = function (xhr) {
        if (xhr) {
            var prot = Object.getPrototypeOf(xhr);
            while (prot) {
                for (var propName in prot) {
                    var replacement;
                    if ((replacement = prot[Zone["__symbol__"](propName)])) {
                        xhr[propName] = replacement;
                    }
                }
                prot = Object.getPrototypeOf(prot);
            }
        }
    };

    window.CEC = window.CEC || {};
    CEC.onInit = function () {
        CEC.onXhrCreated = function (xhr) {
            ClickTaleSettings.PTC.restoreZonedXHR(xhr);
        };
    };
    window.ClickTaleOnXHRCreated = function (xhr) {
        ClickTaleSettings.PTC.restoreZonedXHR(xhr);
    };
}
if (document.readyState === "complete") {
    window.ClickTaleIncludedOnWindowLoad = true;
}
window.ClickTaleIncludedOnDOMReady = true;

window.ClickTaleSettings.PTC.EnableChangeMonitor = false;
window.ClickTaleSettings.PTC.UploadPageHappened = false;
window.ClickTaleSettings.PTC.IsMobile = false;
window.ClickTaleSettings.PTC.textRegex = /\w|[^\x00-\x7F]/g;
window.ClickTaleUIDCookieName = "WRUIDCD28072020";

ClickTaleSettings.CheckAgentSupport = function (f, v) {
    if (v.t == v.ED) {
        ClickTaleSettings.Compression.Async = false;
    }
    if (v.m) {
        ClickTaleSettings.PTC.IsMobile = true;
    }
    if (!(v.t == v.IE && v.v == 10)) {
        ClickTaleSettings.PTC.EnableChangeMonitor = true;
        ClickTaleSettings.PTC.ConfigChangeMonitor();
    }
    var fv = f(v);
    ClickTaleSettings.PTC.okToRunPCC = fv;
    return fv;
};

ClickTaleSettings.PTC.startsWith = function (strToTest, str) {
    return strToTest.lastIndexOf(str, 0) === 0;
};

ClickTaleSettings.DOM = ClickTaleSettings.DOM || {};

(function () {
    var selectorForBoth =
        ".ctHidden,#my_digikey_logged_in>span.line-one,.header-hello,#lblDisplayName,#lblEmail,.shipping-address span,.billing-address span, \
    #user-info-phone,#user-info-altphone,#welcome_name,.user-login span:not([class='update-edit-btn']), \
    #ctl00_ctl00_mainContentPlaceHolder_mainContentPlaceHolder_cwcOrderInfoDisplay__lblShippingAddress, \
    #ctl00_ctl00_mainContentPlaceHolder_mainContentPlaceHolder_cwcOrderInfoDisplay_lblBillingAddress, \
    #ctl00_ctl00_mainContentPlaceHolder_mainContentPlaceHolder_cwcOrderInfoDisplay_cellNameOnCardValue, \
    #divBillAddress div>span,.submit-address div>span,#shippingAddressDisplay span,.submit-payment>.table-cell>div, \
    .right-column__shipping-address,.submit-address span,.customer-select td,#orderInfo tr td table tr td, \
    #shipAddress tr td, #billAddress  tr td, #tblOrderHeaderInfo td, #shipmentInfo a, #invoices-bundle span, \
    #tblShippingAddresses td, #order_details span, #tblShippingAddresses td, #order_details span, \
    .ui.vertical.segment .unstackable p,#contactInfoContainer .item,#frm_payment_method .grouped>.field>.checkbox>label, \
    #shipping_container>section>p, label[for = 'ExistingAddress'], #summaryBoxCartName, \
    section#shipping_address_container div.item, .header__resource-text>span,span.payPalEmail, \
    div.banner-welcome-name>span,div.banner-info p,div#divSavedMethods>div>span:not(.remove-card-btn), #orderInfo tr td, #addressInfo tr td, span.mydk-nav__email-address, span.mydk-nav__username, span#customer_number, span[class*='email-address'], span[class*='username'], div#AddressValidationPopup p";
    var selectorForText = '.mydk-nav__customer-info span, .dk-card table>tbody>tr>td';

    // /**
    //  *
    //  * @param {!string} value - attribute value || textContent
    //  * @param {!Node} node
    //  * @param {!string} rule - css selector
    //  * @param {!number} type - 0 - text, 1 - attribute
    //  * @returns {!string}
    //  */
    // function transform(value, node, rule, type) {
    //     var reg = /\w|[^\x00-\x7F]/g;
    //     return value.replace(reg, "-");
    // }

    ClickTaleSettings.DOM.PII = {
        Text: [selectorForBoth, selectorForText],
        Attributes: [
            {
                rule: selectorForBoth,
                attr: "value",
            },
        ], //,
        //Transform: transform
    };

    /**
     *
     * @param {!CSSStyleSheet} adoptedStyleSheets
     */
    function getSerializedNode(adoptedStyleSheets) {
        var textArray = [];
        adoptedStyleSheets.forEach(function (sheet) {
            var rules = /** @type{!CSSRuleList} */ (sheet.cssRules);
            for (let i = 0; i < rules.length; i++) {
                var rule = rules[i];
                if (rule && rule.cssText) {
                    textArray.push(rule.cssText);
                }
            }
        });
        if (textArray.length) {
            return {
                nodeType: 1,
                tagName: "style",
                attributes: {
                    "data-addoptedCSS": "true",
                },
                childNodes: [
                    {
                        nodeType: 3,
                        textContent: textArray.join("\r\n"),
                    },
                ],
            };
        }
        return null;
    }

    /**
     *
     * @param {!(DocumentOrShadowRoot|Element)} root
     */
    function addSerializedNode(root, serializeAPI) {
        var serializeNode,
            parentNode = root,
            adoptedStyleSheets;
        switch (root.nodeType) {
            case 11:
                if ((adoptedStyleSheets = /** @type{!CSSStyleSheet} */ (root.adoptedStyleSheets)) && adoptedStyleSheets.length) {
                    serializeNode = getSerializedNode(adoptedStyleSheets);
                }
                break;
            case 1:
                if (typeof root.getRootNode === "function") {
                    root = root.getRootNode();
                    addSerializedNode(root, serializeAPI);
                }
                break;
            case 9:
                if ((adoptedStyleSheets = /** @type{!CSSStyleSheet} */ (root.adoptedStyleSheets)) && adoptedStyleSheets.length) {
                    serializeNode = getSerializedNode(adoptedStyleSheets);
                    parentNode = document.head || document.documentElement;
                }
                break;
        }
        if (serializeNode && parentNode) {
            serializeAPI.addChild(parentNode, null, serializeNode);
        }
    }

    ClickTaleSettings.DOM.Serializer = ClickTaleSettings.DOM.Serializer || {};

    ClickTaleSettings.DOM.Serializer.OnAfterSerialize = function (serializeAPI) {
        var allObservableRoots;
        if ("adoptedStyleSheets" in Document.prototype && window.ClickTaleGlobal && ClickTaleGlobal.symbols && ClickTaleGlobal.symbols.rootsManager && typeof ClickTaleGlobal.symbols.rootsManager.getAllObservableRoots === "function" && Array.isArray((allObservableRoots = /** @type{!Array.<DocumentOrShadowRoot|Element>} */ (ClickTaleGlobal.symbols.rootsManager.getAllObservableRoots())))) {
            allObservableRoots.forEach(function (root) {
                addSerializedNode(root, serializeAPI);
            });
        }
    };

    var locationRules = [
        {
            selector: '.card-name-number,.card-experation-date,#managePaymentOptions .paypal-account p:nth-child(2)',
            Attributes: [],
            Text: true,
            location: {
                prop: 'pathname',
                search: /mydigikey\/billing\/managepaymentoptions/i
            }
        },
        {
            selector: '.profile-info span:not([class])',
            Attributes: [],
            Text: true,
            location: {
                prop: 'pathname',
                search: /mydigikey\/users\/edit/i
            }
        },
        {
            selector: '#ccDeclined .input-group:nth-child(4) .input:nth-child(3),#ccDeclined .input-group:nth-child(5) .input:nth-child(3)',
            Attributes: [],
            Text: true,
            location: {
                prop: 'pathname',
                search: /creditcarddeclined\/index/i
            }
        },
        {
            selector: '#AddressValidationPopup > table  p, #AddressValidationPopup > table  p span',
            Attributes: [],
            Text: true,
            location: {
                prop: 'pathname',
                search: /ordering\/guest\/Address/i
            }
        },
        {
            selector: '.order__payment-card-numbers span',
            Attributes: [],
            Text: true,
            location: {
                prop: 'pathname',
                search: /ordering\/guest\/payment/i
            }
        },
        {
            selector: '.submit-payment.table .headline-border+div',
            Attributes: [],
            Text: true,
            location: {
                prop: 'pathname',
                search: /ordering\/submit/i
            }
        }
    ];

    locationRules.forEach(function (rule) {
        if (rule.location) {
            var prop = rule.location.prop;
            var search = rule.location.search;
            if (search.test(location[prop])) {
                var Attributes = rule.Attributes;
                var selector = rule.selector;
                var Text = rule.Text;
                var PII = ClickTaleSettings.DOM.PII;
                if (Text) {
                    PII.Text.push(selector);
                }
                if (Array.isArray(Attributes)) {
                    Attributes.forEach(function (attr) {
                        PII.Attributes.push({
                            rule: selector,
                            attr: attr,
                        });
                    });
                }
            }
        }
    });
})();

window.ClickTaleSettings.PTC.RulesObjRemoveEls = [
    {
        changeMon: "span.timetoship-title,span.timetoship-timer",
        changeMonLive: "span.timetoship-title,span.timetoship-timer",
    },
];
(function () {
    if (typeof window.ClickTalePIISelector === "string" && ClickTalePIISelector != "") {
        try {
            var domNodes = document.querySelector(ClickTalePIISelector);
            var PII = ClickTaleSettings.DOM.PII;
            PII.Text.push(ClickTalePIISelector);
            PII.Attributes.push({
                rule: ClickTalePIISelector,
                attr: "value",
            });
        } catch (err) {
            if (typeof ClickTaleNote === "function") {
                ClickTaleNote("Bad PII selector: " + encodeURIComponent(ClickTalePIISelector));
            }
        }
    }
})();

ClickTaleSettings.PTC.AssetManager = {
    isActive: true,
    isNeedForImg: false,
    subscriberId: "233037",
    pid: "53368",
    storageUrl: "https://s3.amazonaws.com/nv-p1-s3-assets-01/",
    prefixSpecialCharacters: false,
    getPrefixUrl: function () {
        return this.storageUrl + this.subscriberId + "/" + this.pid;
    },
    getFullURL: function (type, url) {
        var AMUrl = "";
        if (url) {
            switch (type) {
                case "css":
                    AMUrl = this.getPrefixUrl() + "/CSS/" + url.replace(/:\/\//g, "/").replace(/%20/g, "");
                    if (this.prefixSpecialCharacters && this.prefixSpecialCharacters.test(AMUrl)) {
                        AMUrl = AMUrl.replace(/\?/g, "%253F").replace(/\&/g, "%26").replace(/\=/g, "%3D");
                    } else {
                        AMUrl = AMUrl.replace(/\?.*/g, "");
                    }
                    break;
                case "image":
                    AMUrl = this.getPrefixUrl() + "/IMAGE/" + url.replace(/:\/\//g, "/").replace(/%20/g, "");
                    break;
            }
        }
        return !!AMUrl ? AMUrl : false;
    },
    init: function () {
        if (this.isActive && this.pid && this.subscriberId) {
            var transform = (ClickTaleSettings.DOM.Transform = ClickTaleSettings.DOM.Transform || []);
            transform.push({
                rule: 'link[href][rel*="stylesheet"]',
                attr: "href",
                transform: function (value, node) {
                    if (value.indexOf("fonts.googleapis.com") == -1) {
                        return ClickTaleSettings.PTC.AssetManager.getFullURL("css", node.href);
                    }
                    return value;
                },
            });
            if (this.isNeedForImg) {
                transform.push({
                    rule: "img[src]",
                    attr: "src",
                    transform: function (value, node) {
                        return ClickTaleSettings.PTC.AssetManager.getFullURL("img", node.src);
                    },
                });
            }
        }
    },
};
ClickTaleSettings.PTC.AssetManager.init();

ClickTaleSettings.PTC.ConfigChangeMonitor = function () {
    var excludeBothArray = ["span.timetoship-title,span.timetoship-timer"];

    ClickTaleSettings.ChangeMonitor = {
        Enable: ClickTaleSettings.PTC.EnableChangeMonitor,
        // Roots: [document.body],
        Exclude: {
            ChildNodes: [],
            Attributes: [],
        },
    };

    var exclude = ClickTaleSettings.ChangeMonitor.Exclude;
    if (excludeBothArray.length > 0) {
        Array.prototype.push.apply(exclude.ChildNodes, excludeBothArray);
        Array.prototype.push.apply(exclude.Attributes, excludeBothArray);
    }

    function insertIntoBoth(selector) {
        exclude.ChildNodes.push(selector);
        exclude.Attributes.push(selector);
    }

    // if (document.location.pathname === '/') {
    //     insertIntoBoth("selector");
    // }

    if (typeof window.ClickTaleCMSelector === "string" && window.ClickTaleCMSelector != "") {
        try {
            var domNodes = document.querySelector(ClickTaleCMSelector);
            insertIntoBoth(ClickTaleCMSelector);
        } catch (err) {
            if (typeof ClickTaleNote === "function") {
                ClickTaleNote("Bad CM selector: " + encodeURIComponent(ClickTalePIISelector));
            }
        }
    }
};

ClickTaleSettings.PTC.doOnlyWhen = function (toDoHandler, toCheckHandler, interval, times, failHandler) {
    if (!toDoHandler || !toCheckHandler) return;
    if (typeof interval == "undefined") interval = 100;
    if (typeof times == "undefined") times = 10;
    if (--times < 0) {
        if (typeof failHandler === "function") {
            failHandler();
        }
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }
    setTimeout(function () {
        ClickTaleSettings.PTC.doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler);
    }, interval);
};

window.ClickTaleSettings.RewriteRules = {
    OnBeforeRewrite: function (rewriteApi) {
        if (window.ClickTaleSettings.PTC.RulesObj) {
            rewriteApi.add(function (buffer) {
                var bodyClone = ClickTaleSettings.PTC.cloneNodeIE9(buffer);

                if (window.ClickTaleSettings.PTC.AssetManager && window.ClickTaleSettings.PTC.AssetManager.isActive && typeof window.ClickTaleSettings.PTC.AssetManager.makeChanges == "function") {
                    window.ClickTaleSettings.PTC.AssetManager.makeChanges(bodyClone);
                }

                var selectorReg = /((?:^|,|\s|>|\+|\~)+)([A-Za-z])/g;

                var RulesObj = window.ClickTaleSettings.PTC.RulesObj;
                for (var i = 0; i < RulesObj.length; i++) {
                    var rewriteApirule = RulesObj[i]["rewriteApi"];
                    var rewriteApilocation = RulesObj[i]["location"];
                    if (!rewriteApirule || (rewriteApilocation && document.location[rewriteApilocation["prop"]].toLowerCase().search(rewriteApilocation.search) === -1)) {
                        continue;
                    }
                    var selector = RulesObj[i]["selector"].replace(selectorReg, "$1ctdep-$2");
                    var elements = bodyClone.querySelectorAll(selector);

                    Array.prototype.forEach.call(elements, function (el, ind) {
                        var attributesArr = rewriteApirule.Attributes;
                        if (attributesArr instanceof Array) {
                            for (var u = 0; u < attributesArr.length; u++) {
                                var attr = attributesArr[u];
                                var attrib = el.getAttribute(attr);
                                if (typeof attrib === "string") {
                                    el.setAttribute(attr, attrib.replace(window.ClickTaleSettings.PTC.textRegex, "-"));
                                }
                            }
                        }
                        if (rewriteApirule.Text) {
                            var children = el.childNodes;
                            Array.prototype.forEach.call(children, function (child) {
                                if (child && child.nodeType === 3) {
                                    child.textContent = child.textContent.replace(window.ClickTaleSettings.PTC.textRegex, "-");
                                }
                            });
                        }
                    });
                }

                var RulesObjRemoveEls = window.ClickTaleSettings.PTC.RulesObjRemoveEls;
                if (RulesObjRemoveEls) {
                    for (var i = 0; i < RulesObjRemoveEls.length; i++) {
                        if (RulesObjRemoveEls[i].rewriteApi) {
                            var elementsToRemove = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApi.replace(selectorReg, "$1ctdep-$2"));
                            Array.prototype.forEach.call(elementsToRemove, function (el, ind) {
                                if (el.parentNode) {
                                    el.parentNode.removeChild(el);
                                }
                            });
                        }
                        if (RulesObjRemoveEls[i].rewriteApiReplace) {
                            var elementsToReplace = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApiReplace.replace(selectorReg, "$1ctdep-$2"));
                            Array.prototype.forEach.call(elementsToReplace, function (el, ind) {
                                if (el.parentNode) {
                                    var comment = document.createComment(el.outerHTML);
                                    el.parentNode.replaceChild(comment, el);
                                }
                            });
                        }
                    }
                }

                var reg = /><\/(?:area|base|br|col|command|embed|hr|input|keygen|link|menuitem|meta|param|source|track|wbr|img)>/gi;
                var clone = bodyClone.innerHTML
                    .replace(/ctdep-/gi, "")
                    .replace(reg, " />")
                    .replace(/<!--clicktalesvgreplace ([\s\S]+?)-->/g, "$1");
                return clone;
            });
        }
        rewriteApi.add({
            pattern: /(<head[^>]*>)/i,
            replace: '$1<script type="text/javascript" class="cm-ignore" src="https://cdnssl.clicktale.net/www/tc/jquery.min.js"></script>',
        });
    },
};

//Start CAP Integrations
(function () {
    function init(context) {
        
        function sendToCS(csTypeVendorPrefix, csKey, csValue, csEventType, csPV) {
    var sendArtificialPageviews = true;
    var M2P = true;

    if (CS_CONF.tagDeploymentMode === "LOAD_CLICKTALE_PTC") {
        M2P = false;
    }

    csKey = csTypeVendorPrefix + csKey;

    window._uxa = window._uxa || [];
    _uxa.push([
        "trackDynamicVariable",
        {
            key: csKey,
            value: csValue,
        },
    ]);

    if (csEventType === "etr") {
    if (M2P) {
        if (window.ClickTaleEventTrigger) {
            ClickTaleEventTrigger("@ET@ " + csKey);
        }
    } else {
        _uxa.push(["trackEventTriggerRecording", csKey]);
    }
}
if (csPV && sendArtificialPageviews) {
    _uxa.push(["setQuery", csPV]);
    if (M2P) {
        if (window.ClickTaleLogicalWithUploadPage) {
            ClickTaleLogicalWithUploadPage(window.location.href);
        }
    } else {
        _uxa.push(["trackPageview", window.location.pathname]);
    }
}

}



        /*
         *Name: Optimizely CAP Integration
         *Version: 1.13
         *Required Shared Components: Self Invoking function, _uxa afterPageView callback, sendToCS
         */
        function startOPIntegration() {
            integrationOPstarted = true;

            var tvp = "AB_OP_";
            var state = window.optimizely.get && window.optimizely.get("state");

            if (state) {
                if (state && state.getCampaignStates && typeof state.getCampaignStates === "function" && typeof state.getCampaignStates() === "object") {
                    var getActiveCampaigns = state.getCampaignStates({
                        isActive: true,
                    });

                    var getTestKeys = Object.keys(getActiveCampaigns);

                    for (var i = 0; i < getTestKeys.length; i++) {
                        var prefix = getActiveCampaigns[getTestKeys[i]];

                        var campaignName = "";
                        var variationName = "";

                        if (prefix.experiment) {
                            if (prefix.experiment.name) {
                                campaignName = prefix.campaignName;
                            }
                            //Tests with no names
                            else {
                                campaignName = prefix.experiment.id;
                            }

                            //Personalization tests
                            if (prefix.experiment.campaignName && prefix.experiment.name) {
                                variationName = prefix.experiment.name + " - " + prefix.variation.name;
                            }
                            //AB tests
                            else if (prefix.variation.name) {
                                variationName = prefix.variation.name;
                            } else {
                                variationName = prefix.variation.id;
                            }

                            if (prefix.isInCampaignHoldback) {
                                variationName = variationName + " [Holdback]";
                            }

                            if (campaignName && variationName) {
                                sendToCS(tvp, campaignName, variationName);
                            }
                        }
                    }
                }
            }
        }

        var integrationOPstarted = false;

        var optimizely = window.optimizely;
        if (optimizely) {
            startOPIntegration();
        } else {
            Object.defineProperty(window, "optimizely", {
                configurable: true,
                get: function () {
                    return optimizely;
                },
                set: function (n) {
                    optimizely = n;
                    if (!integrationOPstarted) {
                        startOPIntegration();
                    }
                },
            });
        }
        //Optimizely CAP Integration End
    }

    function callback(context) {
        if (!disableCallback) {
            disableCallback = true;
            init(context);

            if (window.CS_CONF) {
                CS_CONF.integrations = CS_CONF.integrations || [];
                CS_CONF.integrations.push("Optimizely");
            }
        }
    }

    var disableCallback = false;

    window._uxa = window._uxa || [];
    _uxa.push(["afterPageView", callback]);
})();
//End CAP Integrations

function ClickTaleOnRecording() {
    (function () {
        function init() {
            var uxaGet = _uxa.push(["getSessionData"]);
            if (uxaGet && uxaGet.projectId) {
                var pid = uxaGet.projectId;
                var uu = uxaGet.userId;
                var sn = uxaGet.sessionNumber;
                var pvid = uxaGet.pageNumber;
                if (pid && uu && sn && pvid) {
                    var intLink = "https://app.contentsquare.com/quick-playback/index.html?pid=" + pid + "&uu=" + uu + "&sn=" + sn + "&pvid=" + pvid + "&vd=csrl";
                    window.ClicktaleReplayLink = function () {
                        return intLink;
                    };
                    if (window.CS_CONF) {
                        CS_CONF.replaylink = intLink;
                    }
                }
            }
        }

        function callback(context) {
            if (!disableCallback) {
                disableCallback = true;
                init(context);
            }
        }
        var disableCallback = false;
        window._uxa = window._uxa || [];
        _uxa.push(["afterPageView", callback]);
    })();

    //Start CAP Integrations
    if (!window.ClickTaleSettings.PTC.IntegrationsReady) {
        window.ClickTaleSettings.PTC.IntegrationsReady = true;

        (function () {
            function init(context) {
                
                function sendToCS(csTypeVendorPrefix, csKey, csValue, csEventType, csPV) {
    var sendArtificialPageviews = true;
    var M2P = true;

    if (CS_CONF.tagDeploymentMode === "LOAD_CLICKTALE_PTC") {
        M2P = false;
    }

    csKey = csTypeVendorPrefix + csKey;

    window._uxa = window._uxa || [];
    _uxa.push([
        "trackDynamicVariable",
        {
            key: csKey,
            value: csValue,
        },
    ]);

    if (csEventType === "etr") {
    if (M2P) {
        if (window.ClickTaleEventTrigger) {
            ClickTaleEventTrigger("@ET@ " + csKey);
        }
    } else {
        _uxa.push(["trackEventTriggerRecording", csKey]);
    }
}
if (csPV && sendArtificialPageviews) {
    _uxa.push(["setQuery", csPV]);
    if (M2P) {
        if (window.ClickTaleLogicalWithUploadPage) {
            ClickTaleLogicalWithUploadPage(window.location.href);
        }
    } else {
        _uxa.push(["trackPageview", window.location.pathname]);
    }
}

}


                function generateReplayLink(pvNum, vendor) {
                    var vd = vendor;
                    var pv = 0;
                    var goToFirst = false;
                    if (pvNum === 0) {
                        goToFirst = true;
                    }
                    if (isNaN(pvNum)) {
                        vd = pvNum;
                        if (!pvNum) {
                            vd = "";
                        }
                    } else {
                        pv = pvNum;
                        if (!vd) {
                            vd = "";
                        }
                    }

                    var uxaGet = _uxa.push(["getSessionData"]);
                    if (uxaGet && uxaGet.projectId) {
                        var pid = uxaGet.projectId;
                        var uu = uxaGet.userId;
                        var sn = uxaGet.sessionNumber;
                        var pvid = uxaGet.pageNumber - pv;
                        if (goToFirst) {
                            pvid = 1;
                        }

                        if (pid && uu && sn && pvid) {
                            var intLink = "https://app.contentsquare.com/quick-playback/index.html?pid=" + pid + "&uu=" + uu + "&sn=" + sn + "&pvid=" + pvid + "&vd=" + vd;
                            return intLink;
                        }
                    }
                }

                /*
                 *Name: Qualtrics CAP Integration
                 *Version: 1.20.2 (custom domain & custom changes for Digikey only)
                 *Required Shared Components: ClickTaleOnRecording, Self Invoking function, _uxa afterPageView callback, sendToCS, generateReplayLink
                 */

                var dls = document.location.search;

                if (document.location.host.indexOf("feedback.digikey.com") > -1 && dls.toLowerCase().indexOf("domain=") > -1) {
                    var tvp = "FB_QT_";

                    if (window.Page && Page.getSessionId && Page.runtime && Page.runtime.ED && Page.runtime.ED.SurveyID) {
                        var surveyID = Page.runtime.ED.SurveyID;
                        var responseID = Page.getSessionId().replace("FS_", "R_");

                        sendToCS(tvp, "Feedback Displayed", "Survey ID : " + surveyID);

                        var submitSent = false;
                        var sentQuestionIDs = [];

                        function afterSubmit() {
                            if (!submitSent) {
                                submitSent = true;

                                sendToCS(tvp, "Feedback Submitted", "Survey ID : " + surveyID, "etr", "cs_qualtrics=feedback_submitted_" + surveyID);
                                sendToCS(tvp, "Feedback Response ID", responseID);
                            }

                            if (Page._questionRenderers) {
                                var pqr = Page._questionRenderers;
                                var keys = Object.keys(pqr);

                                for (var i = 0; i < keys.length; i++) {
                                    var prefix = pqr[keys[i]].runtime;
                                    if (prefix) {
                                        if (prefix.Selector && prefix.QuestionText && prefix.Displayed) {
                                            var question = prefix.QuestionText;
                                            if (prefix.Selector === "NPS") {
                                                if (sentQuestionIDs.indexOf(keys[i]) === -1) {
                                                    sentQuestionIDs.push(keys[i]);
                                                    if (prefix.Selected) {
                                                        var rating = parseInt(prefix.Selected);
                                                        sendToCS(tvp, "NPS Rating - " + keys[i] + " - " + surveyID + " - " + question, rating);
                                                    }
                                                }
                                            }
                                            if (prefix.Selector === "STAR") {
                                                if (sentQuestionIDs.indexOf(keys[i]) === -1) {
                                                    sentQuestionIDs.push(keys[i]);

                                                    var starObj = prefix.Choices;
                                                    var starKeys = Object.keys(starObj);

                                                    for (var j = 0; j < starKeys.length; j++) {
                                                        var starSubQuestion = starObj[starKeys[j]].Display;
                                                        if (starObj[starKeys[j]].Value) {
                                                            var starRating = parseInt(starObj[starKeys[j]].Value);
                                                            sendToCS(tvp, "Star Rating - " + keys[i] + " (" + (j + 1) + ") - " + surveyID + " - " + starSubQuestion, starRating);
                                                        }
                                                    }
                                                }
                                            }
                                            if (prefix.Selector === "SAVR" || prefix.Selector === "SAHR") {
                                                if (sentQuestionIDs.indexOf(keys[i]) === -1) {
                                                    sentQuestionIDs.push(keys[i]);

                                                    var selected = prefix.Selected;

                                                    if (selected && prefix.Choices) {
                                                        var id = prefix.Choices[selected].ID;
                                                        if (id) {
                                                            sendToCS(tvp, keys[i] + " - " + surveyID, "AID" + id);
                                                        }
                                                    }
                                                }
                                            }
                                            if (prefix.Selector === "MAVR") {
                                                if (sentQuestionIDs.indexOf(keys[i]) === -1) {
                                                    sentQuestionIDs.push(keys[i]);

                                                    if (prefix.Choices) {
                                                        var mavrObj = prefix.Choices;
                                                        var mavrKeys = Object.keys(mavrObj);

                                                        for (var j = 0; j < mavrKeys.length; j++) {
                                                            if (mavrObj[mavrKeys[j]].Selected) {
                                                                var id = mavrObj[mavrKeys[j]].ID;
                                                                if (id) {
                                                                    sendToCS(tvp, keys[i] + " - " + surveyID, "AID" + id);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            if (prefix.Selector === "Likert") {
                                                if (sentQuestionIDs.indexOf(keys[i]) === -1) {
                                                    sentQuestionIDs.push(keys[i]);

                                                    if (prefix.Choices) {
                                                        var likertObj = prefix.Choices;
                                                        var likertKeys = Object.keys(likertObj);

                                                        for (var j = 0; j < likertKeys.length; j++) {
                                                            var selected = likertObj[likertKeys[j]].Selected;

                                                            if (selected) {
                                                                var id = likertObj[likertKeys[j]].ID;
                                                                if (id) {
                                                                    sendToCS(tvp, keys[i] + " - " + surveyID + " - AID" + id, selected);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            Qualtrics.SurveyEngine.addOnPageSubmit(afterSubmit);
                        }

                        if (window.Qualtrics && Qualtrics.SurveyEngine && Qualtrics.SurveyEngine.addOnPageSubmit) {
                            Qualtrics.SurveyEngine.addOnPageSubmit(afterSubmit);
                        }
                    }

                    var intLink = generateReplayLink(1, "qt");
                    if (intLink) {
                        if (Qualtrics.SurveyEngine && Qualtrics.SurveyEngine.setEmbeddedData) {
                            Qualtrics.SurveyEngine.setEmbeddedData("ClicktaleSpecificRecording", intLink);
                            Qualtrics.SurveyEngine.setEmbeddedData("ContentsquareReplayLink", intLink);
                        }
                    }
                }
                //Qualtrics CAP Integration End
            }

            function callback(context) {
                if (!disableCallback) {
                    disableCallback = true;
                    init(context);

                    if (window.CS_CONF) {
                        CS_CONF.integrations = CS_CONF.integrations || [];
                        CS_CONF.integrations.push("Qualtrics");
                    }
                }
            }

            var disableCallback = false;

            window._uxa = window._uxa || [];
            _uxa.push(["afterPageView", callback]);
        })();
    }
    //End CAP Integrations
}

// End of user-defined pre WR code


var isHttps = document.location.protocol == 'https:',
	scriptSource = window.ClickTaleScriptSource,
	pccSource = scriptSource;

if (!scriptSource) {
	window.ClickTaleScriptSource = isHttps ? 'https://cdnssl.clicktale.net/www/' : 'http://cdn.clicktale.net/www/';
}


if(!ClickTaleGlobal.init.pccRequested) {
		var pccSrc = pccSource ? pccSource : (isHttps ? 'https://cdnssl.clicktale.net/pcc/' : 'http://cdn.clicktale.net/pcc/');
	    pccSrc += '3d60bbfe-3fa3-45c4-9332-cc1534d3e4bd.js?DeploymentConfigName=Release_20210329&Version=3';
			var pccScriptElement = ClickTaleCreateDOMElement('script');
	pccScriptElement.type = "text/javascript";
	pccScriptElement.crossOrigin = "anonymous";
		pccScriptElement.async = true;
		if(ClickTaleGlobal.scripts.sri && ClickTaleGlobal.scripts.sri.hashes){
        pccScriptElement.integrity = ClickTaleGlobal.scripts.sri.hashes.pcc;
        pccScriptElement.src = ClickTaleGlobal.scripts.sri.path + "pcc.js";
	}else {
       pccScriptElement.src = pccSrc;
    }
	
	ClickTaleGlobal.init.isAllowed && document.body.appendChild(pccScriptElement);
		ClickTaleGlobal.init.pccRequested = true;
}
	
window.ClickTalePrevOnReady = typeof window.ClickTaleOnReady == 'function' ? window.ClickTaleOnReady : void 0;

window.ClickTaleOnReady = function() {
	var PID=53368, 
		Ratio=0.22, 
		PartitionPrefix="www",
		SubsId=233037;
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return;
	};
		
	
	// Start of user-defined header code (PreInitialize)
	if (typeof ClickTaleSetAllSensitive === "function") {
    ClickTaleSetAllSensitive();
}

window._uxa = window._uxa || [];
window.ClickTaleSettings = window.ClickTaleSettings || {};
window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
window.ClickTaleSettings.PTC.CustomVariables = window.ClickTaleSettings.PTC.CustomVariables || [];
window.ClickTaleSettings.PTC.Ecommerce = window.ClickTaleSettings.PTC.Ecommerce || [];

window.ClickTaleSettings.PTC.CustomVariables = [
    { displayName: "Page Title", key: "page_title", slot: 1 },
    { displayName: "Page Site", key: "page_site", slot: 2 },
    { displayName: "Page Type", key: "page_type", slot: 3 },
    { displayName: "Page Sub Type", key: "page_sub_type", slot: 4 },
    { displayName: "Page Content Group", key: "page_content_group", slot: 5 },
    { displayName: "PageContentSubGroup", key: "page_content_sub_group", slot: 6 },
    { displayName: "Page ID", key: "page_id", slot: 7 },
    { displayName: "Page Language", key: "page_language", slot: 8 },
    { displayName: "Search No Results", selector: '[data-testid*="search-results-component"]', scndSelector: '[data-testid="zero-results"]', slot: 9 },
    { displayName: "User ID", key: "user_id", slot: 10 },
    { displayName: "Customer ID", key: "customer_id", slot: 11 },

    { displayName: "MARKETPLACE PRODUCT", key: "#quantityAvailable .marketplace-msg", slot: 14 },
    { displayName: "In Stock", key1: "#pdp_content #quantityAvailable #dkQty", key2: "#pdp_content .product-details-procurement .product-details-headline", slot: 15 },
    { displayName: "L1 cat", selector: '[class*="Breadcrumbs-ol"] :nth-child(3)', slot: 16 },
    { displayName: "Search", key: "part_search_term", slot: 18 }, // same slot for all PIDs
    { displayName: "Exact Match", key: "exact_match_result", slot: 19 }, // same slot for all PIDs
    { displayName: "Product detail type", key: "product_detail_type", slot: 20 }, // same slot for all PIDs
];

function sendDataLayerVar() {
    var data = !!window["utag"] && !!window["utag"]["data"] && Object.assign({}, window["utag"]["data"]);
    if (data || !!document.querySelector(".MuiTabs-root") || !!document.querySelector('[data-testid="result-exact-match"]')) {
        if ((document.location.href.indexOf("/result") > -1 || document.location.href.indexOf("/products/category/") > -1) && !!document.querySelector('[data-testid="category-exact-match"],[data-testid="result-exact-match"]')) {
            data["exact_match_result"] = "True";
        }
        if (!!document.querySelector(".MuiTabs-root")) {
            data["product_detail_type"] = "Table";
        }
        for (var i = 0; i < window.ClickTaleSettings.PTC.CustomVariables.length; i++) {
            var cv = window.ClickTaleSettings.PTC.CustomVariables[i];
            data && !!cv.key && data[cv.key] && window._uxa.push(["setCustomVariable", cv.slot, cv.displayName, data[cv.key]]);
        }
    }

    //custom code for cvar 14+15
    var cv14 = window.ClickTaleSettings.PTC.CustomVariables[11];
    if (document.querySelector(cv14.key) && document.location.pathname.toLowerCase().indexOf("/product-detail/") > -1) {
        window._uxa.push(["setCustomVariable", cv14.slot, cv14.displayName, "PDP_TYPE"]);
    }
    //Start: IMP-985
    if (document.location.href.indexOf("/product-detail/") > -1) {
        var cv15 = window.ClickTaleSettings.PTC.CustomVariables[12];
        var stock = document.querySelector(cv15.key1) || document.querySelector(cv15.key2);
        stock = !!stock && stock.textContent;
        if (!!stock) {
            var value = Number(stock.trim().replace(/[,:A-Za-z\s]/g, ""));
            if (!isNaN(value)) {
                if (value === 0) {
                    //cVar: False
                    window._uxa.push(["setCustomVariable", cv15.slot, cv15.displayName, "False"]);
                } else {
                    //cVar: True
                    window._uxa.push(["setCustomVariable", cv15.slot, cv15.displayName, "True"]);
                }
            }
        }
    }

    //End: IMP-985
    if (window.location.href.indexOf('result') > -1) {
        var noSearchResult = false;
        var cv = window.ClickTaleSettings.PTC.CustomVariables[8],
            element = !!cv.selector && !!document.querySelector(cv.selector) && document.querySelector(cv.selector).innerText;

            noSearchResult = (!!element && !!element.match(/\d/).length && (element.match(/\d/)[0].indexOf('0') > -1)) ? 'True' : false;

        if (!noSearchResult) {
            noSearchResult = (!!cv.scndSelector && !!document.querySelector(cv.scndSelector)) ? 'True' : false;
        }
        !!noSearchResult && window._uxa.push(["setCustomVariable", cv.slot, cv.displayName, noSearchResult]);

    }

    //to send cvar from dom element  16+17
    data = '';
    for (var i = 13; i < 15; i++) {
        var cv = window.ClickTaleSettings.PTC.CustomVariables[i];
        if (!!cv.selector && !!document.querySelector(cv.selector) && !!document.querySelector(cv.selector).innerText) {
            data = document.querySelector(cv.selector).innerText;
            window._uxa.push(["setCustomVariable", cv.slot, cv.displayName, data]);
        }
    }
}

window.ClickTaleOnStop = window.ClickTaleOnStop || [];
ClickTaleOnStop.push(sendDataLayerVar);
sendDataLayerVar();

window.ClickTaleSettings.PTC.InitFuncs = window.ClickTaleSettings.PTC.InitFuncs || [];
window.ClickTaleSettings.PTC.InitFuncs.push(function () {
    var pcc = document.querySelector('script[src*="clicktale"][src*="pcc"]');
    if (pcc) {
        var versionmatch = pcc.src.match(/DeploymentConfigName=(.+)/i);
        if (versionmatch && typeof ClickTaleExec === "function") {
            ClickTaleExec("console.info('" + versionmatch[0] + "');");
            ClickTaleEvent("Config: " + versionmatch[1].replace(/\&.+/, ""));
        }
    }
});

function doUpload() {
    if (typeof ClickTaleUploadPageNow === "function" && ClickTaleIsRecording()) {
        ClickTaleUploadPageNow();
        window.ClickTaleSettings.PTC.UploadPageHappened = true;
    }
}

function isReadyToRecord() {
    if (typeof ClickTaleUploadPageNow === "function" && ClickTaleIsRecording()) {
        if (document.body.childNodes.length < 3) {
            return false;
        }
        if (document.location.href.toLowerCase().indexOf("revieworder") > -1) {
            return document.querySelectorAll("#reviewOrderContent .spinner").length == 0;
        }
        if (document.location.pathname == "/") {
            if (document.getElementById("main-layout-content")) {
                return true;
            }
            return false;
        }
        return !!document.querySelector("#header-cart");
    }
    return false;
}

ClickTaleDelayUploadPage();

//AB Test Integration Timeout
setTimeout(function () {
    window.ClickTaleSettings.PTC.doOnlyWhen(doUpload, isReadyToRecord, 100, 10, doUpload);
}, 1000);

var initFuncs = window.ClickTaleSettings.PTC.InitFuncs;
for (var i = 0, initLen = initFuncs.length; i < initLen; i++) {
    if (typeof initFuncs[i] === "function") {
        initFuncs[i]();
    }
}

//VOC Integration Start
if (ClickTaleSettings.PTC.RecordSurvey === false) {
    return;
}
//VOC Integration End

	// End of user-defined header code (PreInitialize)
    
	
	window.ClickTaleIncludedOnDOMReady=true;
	
	ClickTaleGlobal.init.isAllowed && ClickTale(PID, Ratio, PartitionPrefix, SubsId);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	
	// Start of user-defined footer code
	
	// End of user-defined footer code
	
}; 
(function() {
	var div = ClickTaleCreateDOMElement("div");
	div.id = "ClickTaleDiv";
	div.style.display = "none";
	document.body.appendChild(div);

	
		var wrScript = ClickTaleCreateDOMElement("script");
	wrScript.crossOrigin = "anonymous";
	wrScript.type = 'text/javascript';
		wrScript.async = true;
		if(ClickTaleGlobal.scripts.sri && ClickTaleGlobal.scripts.sri.hashes){
        wrScript.integrity = ClickTaleGlobal.scripts.sri.hashes.wr;
        wrScript.src = ClickTaleGlobal.scripts.sri.path + "wr.js";
	}else {
        wrScript.src = window.ClickTaleScriptSource + 'latest-WR110.js';
    }

	ClickTaleGlobal.init.isAllowed && document.body.appendChild(wrScript);
})();







var ctVEconfig={VE_BASE_URL:"https://ve-cec-na1.app.clicktale.com/",VE_PROXY_BASE_URL:"https://vep-cec-na1.app.clicktale.com/"};!function(){try{var e=window.chrome,t=window.navigator&&window.navigator.vendor;null!=e&&"Google Inc."===t&&window.addEventListener&&addEventListener("message",o,!1);var n=window.location.search.substring(window.location.search.indexOf("ctAdvancedSearch=")).split("&")[0].split("=");"ctAdvancedSearch"==n[0]&&"true"==n[1]&&c("ctAdvancedSearchModule",ctVEconfig.VE_BASE_URL+"client/dist/advancedSearchModule.js")}catch(e){}function o(e){var t;try{t=JSON.parse(e.data)}catch(e){return}!1!==new RegExp("(app[.]clicktale[.]com)($|:)").test(e.origin)&&(window.ct_ve_parent_window=e.source,"CT_testRules"==t.name&&(sessionStorage.setItem("CT_testRules",!0),console.log((new Date).toJSON(),"PostPTC: testRules ",sessionStorage.getItem("CT_testRules")),window.ct_ve_parent_window.postMessage({name:"testRulesRecieved",params:{}},"*")),"CTload_ve"===t.function&&"function"==typeof ClickTaleGetPID&&null!==ClickTaleGetPID()&&(function(){console.log((new Date).toJSON(),"PostPTC: start loading test rules");var e=ClickTaleGetPID();c("ctTestRulesModule",ctVEconfig.VE_BASE_URL+"rulesEngineContent/TestPCC/"+e,function(){sessionStorage.setItem("CT_testRules_Loaded",!0),console.log((new Date).toJSON(),"PostPTC: test rules loaded")})}(),c("ctVisualEditorClientModule",ctVEconfig.VE_BASE_URL+"client/dist/veClientModule.js")))}function c(e,t,n){var o,c=(o="script",document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml",o):document.createElement(o));c.setAttribute("type","text/javascript"),c.setAttribute("id",e),c.src=t,void 0!==n&&(c.onload=n),document.getElementById(e)||document.body.appendChild(c)}}();

//Signature:D5Ly2L0G1ek1FixPueB+JpirWS1I8xWELL/A6R/+BRqynrnTdAj5mgYvrlIGEW0Fss7j/wMGGLqXI6SZM2WgSWxpJ2W9gcXKh9k0KjUeojf4KuPLlgXTDUKXuZ2ogocE1vrVFCNOal7uReGhcuByM/E4P0+boug3FIgOsdi+mTU=