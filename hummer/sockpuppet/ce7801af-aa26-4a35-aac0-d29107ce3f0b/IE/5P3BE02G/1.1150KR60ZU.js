KISSY.add("malldetail/other/init",function(e,t,a,i,n){return{"init":function(o){function r(a){var i;e.use("overlay",function(e,n){if(!i){var o=t.get("#popupPanel");o||(o=t.create('<div id="popupPanel"></div>'),-1==e.version.indexOf("1.3")&&(t.addClass(o,"ks-dialog-focused"),t.addClass(o,"ks-overlay-focused"),o.innerHTML='<div class="ks-dialog-content"><div class="ks-dialog-header" style="display: none"></div><div class="ks-dialog-body"></div></div></div>')),document.body.appendChild(o),i=new n.Dialog({"srcNode":o,"closable":!1,"elStyle":{"display":"block","visibility":"hidden","position":"absolute","left":"-9999px","top":"-9999px"},"zIndex":1e8}),t.show(o)}a(i)})}codeTrack("mod.other.init","view.main.init");var l=window,c=l.g_config,s=o.product,d=o.config;e.use("malldetail/other/eventroute",function(e,t){t.init()}),e.use("malldetail/other/a11y",function(e,t){t.init()});var u=t.get(".crumbs-patch")||t.get(".hdNav")||t.get("#J_HeaderCrumb")||t.get(".J_MallCrumbs");if(u&&(codeTrack("mod.breadCrumb.init","mod.other.init"),s.onLoad(["breadCrumb"],function(n){if(!d.detail||!0!==d.detail.isShowEcityBasicSign){var o=n&&n.breadCrumb;if(o&&o.length)if(16384&c.bizTag){var r={"home":o[0],"isLessIE9":e.UA.ie&&e.UA.ie<9,"isHasMore":o.length>1},l=["{{#if isHasMore}}",'<ul class="crumb-list" data-spm="1130973577">','<li><a href="{{home[1]}}">{{home[0]}}</a></li>','<li class="last J_curYSType">','<a href="{{curYSType[1]}}" >{{curYSType[0]}}</a>','<i  class="tm-circle-wrap {{#if isLessIE9}}tm-ie-circle-wrap{{/if}}">','<i class="J_triIcon icon-triangle">',"</i></i></li>","</ul>",'<div class="more-ys-list J_moreYSType">',"{{#each moreTypes as val}}",'<a href="{{val[1]}}">{{val[0]}}</a>',"{{/each}}","</div>","{{#else}}",'<ul class="crumb-list">','<li class="last"><a href="{{home[1]}}">{{home[0]}}</a></li>',"</ul>","{{/if}}"];o.length>1&&(r.curYSType=o[1],r.moreTypes=o.slice(2));var s=i(l.join("")).render(r);if(t.html(u,s),o.length>1){var m=function(){t.show(".J_moreYSType"),t.addClass(".J_triIcon","up-triangle")},p=function(){t.hide(".J_moreYSType"),t.removeClass(".J_triIcon","up-triangle")},f=function(){var e=null;a.on(".J_curYSType, .J_moreYSType","mouseover",function(){clearTimeout(e),m()}),a.on(".J_curYSType","mouseout",function(){e=setTimeout(p,100)}),a.on(".J_moreYSType","mouseout",p)};f()}codeTrack("mod.breadCrumb.show.1","mod.breadCrumb.init")}else{for(var s=[],h="",v=0,g=o.length;v<g;v++)v==g-1&&(h=' class="last"'),2==o[v].length?s.push("<li"+h+'><a href="'+o[v][1]+'" target="_blank">'+o[v][0]+"</a></li>"):s.push("<li"+h+">"+o[v][0]+"</li>");s=s.join(""),"J_HeaderCrumb"==u.id&&(s='<ul data-spm="1000995">'+s+"</ul>"),t.append(t.create(s),u),codeTrack("mod.breadCrumb.show","mod.breadCrumb.init")}}})),16384&c.bizTag){var m="//q.i02.wimg.taobao.com/tfscom/T1V4cWFidXXXXXXXXX",p=new Image,f=function(){var e='<div class="tm-mxs-qrcode"><p class="tm-mxs-htitle">\u5173\u6ce8\u55b5\u9c9c\u751f\u5fae\u6dd8</p><div class="tm-mxs-hpic"><img width="140" src="'+m+'" /><p>\u626b\u4e00\u626b\uff0c\u624b\u673a\u901b\u8d77\u6765</p></div></div>',a=t.create(e);t.insertAfter(a,"#J_mxsAd")},h=function(){var i;a.on(e.get(".tm-mxs-htitle"),"mouseover",function(e){i&&clearTimeout(i),i=setTimeout(function(){t.show(".tm-mxs-hpic")},300)}),a.on(e.get(".tm-mxs-htitle"),"mouseout",function(e){i&&clearTimeout(i),i=setTimeout(function(){t.hide(".tm-mxs-hpic")},300)})};p.onload=p.onerror=function(){f(),h(),p=null},p.src=m}var v,g=d&&!1!==d.detail.showStandardGuide&&/standard=1/.test(location.search),b=!1;512&c.bizTag&&"1190"==c.pw&&(d.tag.isBrandSiteRightColumn?b=!0:t.addClass(document.body,"disBrandSiteRight"),v=t.create('<div id="J_similarShopbrandsite" class="tm-similarShop"></div>'),t.append(v,"#J_DetailMeta")),s.onLoad("deviceType",function(t){"pc"==t&&(b||g)&&e.use("malldetail/other/relate,malldetail/other/relate.css",function(e,t){t.init({"product":s,"type":b?"brandsite":"standard","parentEl":v})})}),s.onLoad(["config","bucketId","deviceType"],function(a,i,n){var r=t.get("#col-extra");r||(r=t.create('<div id="col-extra" class="col-extra tm-bd-side"></div>')),a.descAnchors&&a.descAnchors.length<3&&delete a.descAnchors,a.idsMod&&a.idsMod.length<3&&delete a.idsMod;var d="tmalltiyan"==TShop.getUrlParams("frm"),u=!d&&(a.descAnchors||a.idsMod||a.detail&&!0===a.detail.isShowEcityDesc||a.tag&&!0===a.tag.isShowMeiliXinde);s.onLoad(["model","deviceType"],function(i,n){var l=i.doubleEleven2014;l&&l.showRightRecommendedArea?(t.addClass("body","tm-dou11"),u=!1,"1190"!=c.pw||512&c.bizTag||(t.append(r,t.get(".grid-s5m0","#bd")),e.use("malldetail/recommend/tabRight,malldetail/recommend/tabRight.css",function(e,t){t.render({"parentEl":r,"config":o,"isDou11":!0})}))):512&c.bizTag?"990"!=c.pw&&t.append(r,"#bd"):((u||"1190"==c.pw)&&t.append(r,e.get(".grid-s5m0","#bd")),TShop.addLazyCallback("#bd",function(){u&&"pad"!=n&&e.use("malldetail/other/idsMod,malldetail/other/idsMod.css",function(e,t){t.init({"config":a,"parentEl":r})})}))});var m={"appId":16384&c.bizTag?"03055":null,"label":16384&c.bizTag?"\u55b5\u9c9c\u751f\u63a8\u8350":"\u770b\u4e86\u53c8\u770b","configType":512&c.bizTag?"brandSite":"def","showTitle":2048&l.g_config.bizTag||128&l.g_config.bizTag,"footer":16384&c.bizTag?'<a class="tm-moreRecomm ui-more-bg" href="//miao.tmall.com">\u66f4\u591a\u5546\u54c1<i class="ui-more-bg-arrow"></i></a>':""};if(!(512&c.bizTag&&"990"==c.pw||!b&&g)&&(8&c.bizTag||512&c.bizTag||16384&c.bizTag)&&!(128&c.bizTag)&&"pad"!=n&&!a.itemDO.isHotItem||(a.detail.showRightRecommend=!1),a.detail&&a.detail.site_en){var p=a.detail.site_en;m.currency=p,m.site=p}if(128&c.bizTag&&"pad"!==n&&(m.label="\u5927\u5bb6\u90fd\u5728\u4e70",a.detail.showRightRecommend=!0,a.detail.showDiscountRecommend?(7!=i&&(m.showBuyCart=!0),m.appId="03333",m.wfCode="96905",m.aldInterface="//ald.taobao.com/recommend.htm"):(m.appId=c.appId,m.aldInterface="//ald.taobao.com/recommend.htm")),!1!==a.detail.showRightRecommend){var f=t.create('<div id="ald-skuRight" class="ald-skuRight ald ald-03054" data-spm="1998025129"></div>');512&c.bizTag?t.append(f,r):t.append(f,"#J_DetailMeta"),e.use("malldetail/recommend/skuRight",function(e,t){t.init(e.merge({"el":f,"product":s},m))})}}),s.onLoad("detailPageTips",function(e){e&&1===e.minicartSurprise&&s.onLoad("minicart",function(e){e.init11&&e.init11()})});var y=t.get("#J_EmItemViews");y&&"auction"===window.g_config.pageType&&(codeTrack("mod.itemViews.init","mod.other.init"),s.onLoad("config",function(a){a.apiItemViews&&e.use("ajax",function(e,i){i.jsonp(a.apiItemViews,function(e){t.html(y,e["ICVT_7_"+window.g_config.itemId]),codeTrack("mod.itemViews.show","mod.itemViews.init")})})})),TShop.addDomainAgentCallback(function(t){var a=e.unparam(t.location.search.substring(1));if("heightReset"!=a.method)return!1;try{var i=document.getElementById(a.frameId),n=i.getElementsByTagName("iframe")[0];n.setAttribute("height",a.height||n.getAttribute("height")),n.setAttribute("width",a.width||n.getAttribute("width")),i.style.height=(a.height||n.getAttribute("height")).replace("px","")+"px",i.style.width=(a.width||n.getAttribute("width")).replace("px","")+"px",codeTrack("feature.dlgTrig.heightReset","mod.other.init")}catch(o){setTimeout(function(){throw o},0)}return!0}),TShop.addDomainAgentCallback(function(t){var a=e.unparam(t.location.search.substring(1));if("panelClose"!=a.method)return!1;try{var i=document.getElementById(a.panelId);if(!i)return;i.style.display="none",codeTrack("feature.dlgTrig.panelClose","mod.other.init")}catch(n){setTimeout(function(){throw n},0)}return!0}),o.dialogTrigger&&(codeTrack("feature.dialogTrigger.init","mod.other.init"),a.delegate(document,"click",".J_TDialogTrigger",function(i){i.preventDefault();var n=i.target;codeTrack("feature.dialogTrigger.click","feature.dialogTrigger.init"),r(function(i){function o(o){var r=o+(l?"&isTmall=1":"");i.show(),i.set("width",c),i.set("height",d);var s='<a class="close-btn" href="javascript:void(0)"style="position: absolute; top: 5px; right: 4px; outline: none;display: block; width: 15px; height: 15px; background: url(//assets.alicdn.com/app/tc/img/close_btn.png) no-repeat; text-decoration: none; text-indent: -99999px">X</a><iframe src="'+r+'" width="'+c+'" height="'+d+'" name="popupIframe" frameborder="0" scrolling="no"></iframe>';-1==e.version.indexOf("1.3")?i.set("bodyContent",s):t.html(i.get("srcNode"),s),i.center(),codeTrack("feature.dialogTrigger.actSuccess","feature.dialogTrigger.click"),a.on(t.get(".close-btn",i.get("el")),"click",function(){i.hide(),i.destroy()}),t.hasClass(n,"collection")&&"b"==window.g_config.type&&((new Image).src="//www.atpanel.com/jsclick?cache="+ +new Date+"&auc_detail=b_collect_item")}i.hide(),t.hasClass(n,"J_TDialogTrigger")||(n=t.parent(n,".J_TDialogTrigger"));var r=n.href,l=-1!==location.hostname.indexOf("tmall.com")||-1!==location.hostname.indexOf("tmall.net"),c=n.getAttribute("data-width"),d=n.getAttribute("data-height");r+=(-1===r.indexOf("?")?"?":"&")+"t="+e.now(),t.hasClass(n,"J_TokenSign")?s.onLoad("token",function(e){r+="&_tb_token_="+(e||""),o(r)}):o(r)})})),n.initHover()},"initFollow":function(){function i(){t.offset(r).top-t.scrollTop()>100||(a.remove(window,"scroll",i),e.use("malldetail/control/floatbar",function(e,i){var c=t.width(r);n.floatBar=n.floatBar||new i({"el":r,"cls":"hook-float","onChange":function(e){var a=e?c+l:"";t.css(r,{"width":a})}}),codeTrack("feature.shopInfoFloat.show","mod.other.init");var s;a.on(r,"mouseenter",function(){if(t.hasClass(r,"hook-float")&&!t.hasClass(o,"shop-intro-float")){var e=t.height(o);s?t.css(s,{"height":e}):(s=t.create("<div style='height:0;overflow:hidden;'></div>"),t.css(s,{"height":e}),t.insertAfter(s,o)),t.css(o,{"width":t.width(o)+l}),t.addClass(o,"shop-intro-float"),codeTrack("feature.shopInfoFloat.hover","feature.shopInfoFloat.show")}}),a.on(o,"mouseleave",function(){s&&t.hasClass(o,"shop-intro-float")&&(s.style.height=0,t.css(o,{"width":""}),t.removeClass(o,"shop-intro-float"))}),a.on(window,"scroll",function(){t.hasClass(o,"shop-intro-float")&&(t.removeClass(o,"shop-intro-float"),s.style.height=0)})}))}var n=this,o=t.get("#side-shop-info .shop-intro"),r=t.get(".hd",o);if(r){var l=11;6!==e.UA.ie&&(codeTrack("feature.shopInfoFloat.init","mod.other.init"),a.on(window,"scroll",i),i())}}}},{"requires":["dom","event","malldetail/common/template","malldetail/common/util","malldetail/other/eventroute"]});