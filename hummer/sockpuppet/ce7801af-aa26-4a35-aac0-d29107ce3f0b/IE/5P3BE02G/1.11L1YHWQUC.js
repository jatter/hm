KISSY.add("malldetail/other/shortcut",function(e,t,a,i){var n,o,r,l,c=e.UA||{},s=["ctrlKey","metaKey","altKey","shiftKey"],d=function(e){for(var t=0,a=[],i=0;i<4;i++)if(e[s[i]]&&(t++,a.push(s[i])),2===t)return a;return!1},u=function(){return i.get("tracknick")||i.get("lgc")||""},m=function(){return t.attr("#mq","value")||""},p=function(e){(window.goldlog_queue||(window.goldlog_queue=[])).push({"action":"goldlog.record","arguments":["/tongji","",e,"H51884970"]})};return{"init":function(){if(c.mobile)return!1;var t=e.one("body");t.on("keydown",function(t){var a="ctrlKey";"macintosh"===c.os&&(a="metaKey"),(l=d(t))&&(n=e.now(),o=0,r=0);var i="";if(t[a]&&(t.which==="V".charCodeAt(0)?i="ctrl-v":t.which==="F".charCodeAt(0)?i="ctrl-f":t.which==="C".charCodeAt(0)&&(i="ctrl-c"),i)){var s={"nick":u(),"q":m(),"time":e.now(),"isTmall":!0,"type":i},f=e.param(s);p&&p(f)}}),t.on("mouseleave",function(){l&&(o=e.now())}),t.on("mouseenter",function(){if(l){r=e.now();var t=e.param({"type":"shortcut","assistKeys":l,"nick":u(),"q":m(),"isTmall":!0,"keydown":n,"start":o,"end":r});p&&p(t),l=null,o=r=0}})}}},{"requires":["dom","event","cookie"]});