var ROOTDM=[".eastday.com",".art238.com",".021east.com"],RECENDM=[],INCLUDESUBHOST=["www.eastday.com","www.art238.com"],SHOWERRHOST=1,_wdUID="1",_wecl="//tongji.eastday.com/1.gif";//eastday
var _webdigObj = {};
_webdigObj.pro = function() {
	if(_webdigObj.publishdate) {
		_webdigObj.publishdate = fmtpdate(_webdigObj.publishdate);
        }
		function fmtpdate(pdata) {
			var pdarray = pdata.split("-");
			if(pdarray && pdarray.length == 3) {
			    var year = fmtnumber(pdarray[0],4);
			    var month = fmtnumber(pdarray[1],2);
			    var day = fmtnumber(pdarray[2],2);
                            
                pdata = year + "-" + month + "-" + day;
			}

            function fmtnumber(number,size) {
                if(!number) {
			        return fmtzero(size);
                }
			    var part = fmtzero(size - number.length);
			    
                function fmtzero(num) {
			        var str = "";
                    for(var i=0;i<num;i++) {
				    	str += "0";
                    }
                    return str;
                }
                return part + number;
            }
			return pdata;
		}
};
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('A 1l(){}A 1H(){}A P(a){G a=Q 3A(a),O(a)}A 2r(a){N(D c,b="",d=7;d>=0;d--)c=15&a>>>4*d,b+=c.1J(16);G b}A 31(a){D b,c,d,e;K(!a||""==a)G 1;N(b=3E,c=3F,d=0;d<a.I;d++)e=2f(a.3w(d)),b=(b<<6|c>>>26)+(b<<16|c>>>16)-b,c=3t&e+(c<<6)-c+(c<<16);G 2r(3v&b)+2r(c)}A 2U(){G 31(C.11+C.14+C.2E+17.1y())}A 2m(a){D b=1a,c=C.14,d=c.F(a);G-1!=d&&(d+=a.I+1,a=c.F(";",d),-1==a&&(a=c.I),b=c.1D(d,a)),b}A 2F(){D c,d,a="",b=U;K(b.1v&&b.1v.I){N(c=0;c<b.1v.I;c++)K(-1!=b.1v[c].1F.F("32 33")){a=b.1v[c].3R.3U("32 33 ")[1];2u}}28 K(J.36)N(c=10;c>=2;c--)19{K(d=3X("Q 36(\'3j.3j."+c+"\');")){a=c+".0";2u}}1c(e){}G a}A 2N(a){a=2w+a,1U=Q 1B(1,1),1U.2c=a,1U.3i=1H,1O=Q 1B(1,1),a=a.1n("3e.3d.1C","3a.3b.1C").1n("z=1","z=38"),1O.2c=a,1O.3i=1H}A 3N(a){K(1G(),a&&""!=a){D b=L;0!=a.3L().F("2n")&&(a=1T+"//"+T+a),L=a,M=b}1K()}A 3H(a){1G(),a&&""!=a&&(L=1T+"//"+T+a),1K()}A 3k(a){D c,b=C.1u("1x");N(c 3f b)K(b[c].1F==a)G b[c].2y}A 3q(){19{D a=3k("1w");a&&""!=a&&(a=P(a),L+=-1==L.F("?")?"?":"&",L+="3D="+a)}1c(b){}}A 1z(a){1G(),3q(),a&&""!=a&&(L=-1==L.F("?")?L+"?"+a:L+"&"+a);D b=v.2H;b&&""!=b&&(L+=-1==L.F("?")?"?"+b:"&"+b),1K()}A 1G(){K("3y:"!=C.11.2P){K(C.3l?1S=P(C.3l):C.3o&&(1S=P(C.3o)),1k&&1a!=1k&&0!=1k.I){N(i=0;i<1k.I;i++)K(1k[i]&&T&&-1!=1k[i].F(T)){18="0";2u}}28 18="0";K("1"!=18||1a==3r||1==3r){K("1"==18&&1l(""),1m&&1a!=1m&&0!=1m.I&&T&&""!=T)N(i=0;i<1m.I;i++)-1!=T.F(1m[i])&&(1d=1m[i]);1l("M="+M),M&&""!=M?(r=M.F(C.2T),r>=0&&8>=r||0==M.F("[")&&M.3P("]")==M.I-1&&(M="")):M="",1l("M="+M),1l("V="+V),1l("1s="+1s),1g&&(1E=2f(V.3z(V.F("3s")+5))),1g&&1E>=5&&(C.12.2C("#2B#3B"),1V=C.12.3C,C.12.2C("#2B#3Y"),1Z=C.12.3G(11.1I)?"1":"0");19{1g&&(1q=C.3V)}1c(a){1q=0}1Y=2F(),24=(Q 3n).3K()/-3T,"2L"!=1i 13&&1a!=13&&(2A=13.2e,2V=13.3M,2s=13.3O,2I=2A+"x"+2V,23&&1r>=4&&(2s=13.3I)),(23&&1r>=4||1A)&&(1t=U.3J),1g&&1r>=4&&!1A&&(1t=U.3Q),22=1==U.3W()?"1":"0",U.2R&&(1j=1==U.2R?"1":"0"),1==1j&&2G()}}}A 2G(){D a=C.14,b=a.F("1X=");K(0>b){K(1o="0",1e=2U(),b="",1d&&""!=1d&&(b="2T="+1d+";"),C.14="1X="+O(1e)+";"+20+b+"2O=/;",C.14.F("1X=")<0)G 1j=0,3S 0}28 1o="1",1e=2m("1X");b=C.14.F("2p="),0>b?1f=0:(1f=2f(2m("2p")),17.1y()/2h-1f<2l&&(1p="0")),C.14="2p="+3u.3x(17.1y()/2h)+";"+20+"2O=/;"}A 1K(){"0"==1j?21=2x()+2v():(21=2x()+2M(),"1"==1p&&(21+=2v())),2N(21)}A 2x(){G"?z="+2Y+"&a="+17.1y().1J(16)+"&b="+P(2d)+"&B="+1S+"&c="+P(L)+"&d="+P(M)+"&e="+1Z+"&f="+1q+"&H="+P(T)+"&E="+18}A 2v(){G"&i="+P(1t)+"&j="+22+"&k="+2I+"&l="+2s+"&m="+1Y+"&n="+P(1V)+"&o="+24}A 2M(){G"&r="+1e+"&s="+1o+"&t="+1f+"&u="+1p}D 1U,1O,20,1j,22,1Z,1Y,24,1t,1V,1q,18,2d,1S,L,T,1d,M,V,1s,13,1r,23,2S,1g,1A,1E,1e,1o,1f,1p,17,2l,v=v||{};v.1x=C.1u("1x"),v.R=A(a){D c,b=v.1x;K(b)N(c=0;c<b.I;c++)K(b[c].1F==a)G b[c].2y;G""},v.2q=v.R("2q"),v.1b=v.R("1b"),v.1Q=v.R("1Q"),v.1W=v.R("1W"),v.1R=v.R("1R"),v.Z=v.R("Z"),v.1w=v.R("1w"),v.1L=v.R("1L"),v.1M=v.R("1M"),v.1P=v.R("1P"),v.1N=v.R("1N"),"1"!=v.Z||v.1b||(v.1b=A(){D e,a=11.1I,b="2n://.*/([0-9]{15}).*",c=Q 2K(b,"4w");G c.4y(a),e=2K.$1}()),v.2J=v.4v||A(){},v.2J(),v.2H=A(){D a="";G a="4A="+O(v.2q)+"&",v.1W&&(a+="4r="+O(v.1W)+"&"),a+="4t="+O(v.1Q?v.1Q:0)+O(v.1R?v.1R:0)+O(v.Z?v.Z:0)+"&",v.1w&&(a+="4E="+O(v.1w)+"&"),v.1b&&(a+="4B="+O(v.1b)+"&"),v.1P&&(a+="4C="+O(v.1P)+"&"),v.1L&&(a+="4u="+O(v.1L)+"&"),v.1M&&(a+="47="+O(v.1M)+"&"),v.1N&&(a+="4q="+O(v.1N)+"&"),a}(),1T=11.2P.F("2Q")>-1?"2Q:":"2n:",2w=1T+46,20="41=40, 1 42 43 2j:2j:2j 44;",1j="0",22="0",1Z="0",1Y=0,24=0,1t="",1V="",1q=0,18="1",2d=C.4n,L=J.11.1I,T=J.11.4o,1d="",M=C.2E,V=U.4k+" "+U.2W,1s=U.39,13=J.2b,1r=U.2W.1D(0,1),23=-1!=V.F("4e")?!0:!1,2S=-1!=V.F("4g")?!0:!1,1g=-1!=V.F("3s")?!0:!1,1A=-1!=1s.F("4h")?!0:!1,1E=0,1o="0",1f=0,1p="1",17=Q 3n,"2"==O(v.Z?v.Z:0)&&(n=L.F("?"))>0&&(L=L.1D(0,n)),"0"==O(v.Z?v.Z:0)&&(n=L.F("?"))>0&&(L=L.1D(0,n)),J.4c=1H,2l=45,J["1z"]=1z,A(){A a(a){4b(a[0]){4a"1z":1z(a[1])}}A h(){D b,a=C.1u("1x");N(b=0;b<a.I;b++)K("49"==a[b].1F&&0!=a[b].2X&&"4D"!=a[b].2X)G!0}A k(a){D d,b={z:2Y,a:17.1y().1J(16),c:P(J.11.1I),d:P(a),k:g,H:P(T),r:1e},c="";N(d 3f b)c+="&"+d+"="+b[d];d=2w.1n("1.3g","3.3g")+"?"+c.3p(1),3h=Q 1B(1,1),3h.2c=d,3c=Q 1B(1,1),d=d.1n("3e.3d.1C","3a.3b.1C").1n("z=1","z=38"),3c.2c=d}A l(a){D c,d,b=J.4x;"2a"!=1i b&&(b="2g"==C.2o?C.2k.37:C.12.37),c=J.4z,"2a"!=1i c&&(c="2g"==C.2o?C.2k.2Z:C.12.2Z),d=J.4p,"2a"!=1i d&&(d="2g"==C.2o?C.2k.35:C.12.35),1h.x=c+a.34,1h.y=d+a.3m,1h.w=b}A m(a,b){D c=Q l(a);b&&(c.x=a.34+b.x,c.y=a.3m+b.y),d.I>10?o():d.2t(c)}A n(a){D c,d,b="";N(c=0;c<a.I;c++)d=a[c],b+=d.x+"*"+d.y+"*"+d.w+",";G b.3p(0,b.I-1)}A o(){K(d.I>0){D a=n(d.4i(0,d.I));k(a)}}A p(){D c,a=q("4f"),b=A(a){G A(b){m(b,a)}};K(J.27)N(C.27("2z",A(a){m(a)},!0),J.27("4j",A(){o()},!0),c=0;c<a.I;c++)19{a[c].2i.C.27("2z",b(a[c].S),!0)}1c(d){}28 K(J.29)N(C.29("2D",A(a){m(a)}),J.29("4m",A(){o()}),c=0;c<a.I;c++)19{a[c].2i.C.29("2D",b(a[c].S))}1c(d){}4d(o,2h*f)}A q(a,b,c){D e,f,h,i,d=b;d||(d=[]),e=0;19{f=c?c.2i.C.1u(a):C.1u(a),e=f.I}1c(g){e=0}N(h=0;e>h;h++)i=r(f[h]),c&&c.S&&(i.x+=c.S.x,i.y+=c.S.y),f[h].S=i,d.2t(f[h]),q(a,d,f[h]);G d}A r(a){S=Q 48,S.x=0,S.y=0;N(D b=a;1a!=b&&b!=C.12;)S.x+=b.4F,S.y+=b.4G,b=b.3Z;G S}D b,c,d,f,g;K("2L"!=1i 25){N(J[25].q=J[25].q||[],b=J[25].q,c=0;c<b.I;c++)a(b[c]);b.2t=A(b){a(b)}}d=Q 4l,f=30,g=0,J.2b&&"2a"==1i J.2b.2e&&(g=J.2b.2e),J.39,l.4s.1J=A(){G"X: "+1h.x+", Y:"+1h.y+", W:"+1h.w},h()&&p()}();',62,291,'|||||||||||||||||||||||||||||||_webdigObj|||||function||document|var||indexOf|return||length|window|if|_wdSL|_wdRP|for|escape|fesc|new|getMeta|position|_wdHost|navigator|_wdUA||||pagetype||location|body|_wdWS|cookie|||curtime|_wdErr|try|null|contentid|catch|_wdRDM|_wdCID|_wdLS|_wdIE|this|typeof|_wdCK|INCLUDESUBHOST|println|ROOTDM|replace|_wdBCID|_wdTO|_wdFS|_wdBV|_wdRUA|_wdLG|getElementsByTagName|plugins|author|meta|getTime|wd_paramtracker|_wdOP|Image|com|substring|_wdIEV|name|setup_data|_wdEC|href|toString|write_ref|editor|reporter|source|Bimg|publishdate|filetype|publishedtype|_wdCS|_wdLP|Aimg|_wdCT|subject|wdcid|_wdFl|_wdHP|_wdED|_dgURL|_wdJE|_wdNN|_wdTZ|_wd_o||addEventListener|else|attachEvent|number|screen|src|_wdDT|width|parseInt|CSS1Compat|1e3|contentWindow|00|documentElement|_wdTimeOut|getCookie|http|compatMode|wdlast|catalogs|wdhex|_wdCD|push|break|getLocalInfo|_wdCA|getGeneralInfo|content|click|_wdSW|default|addBehavior|onclick|referrer|wdFlash|setup_cookie|url|_wdSR|sec|RegExp|undefined|getCookieInfo|send_ref|path|protocol|https|cookieEnabled|_wdMC|domain|wdGenCID|_wdSH|appVersion|value|_wdUID|scrollLeft||wdHash|Shockwave|Flash|clientX|scrollTop|ActiveXObject|clientWidth||userAgent|cl3|webterren|refImg2|eastday|tongji|in|gif|refImg|onload|ShockwaveFlash|getmetaContents|characterSet|clientY|Date|charset|slice|setup_metadata|SHOWERRHOST|MSIE|4294967295|Math|2147483647|charCodeAt|round|file|substr|String|clientCaps|connectionType|_wdmd|1732584193|4023233417|isHomePage|wd_reptracker|pixelDepth|language|getTimezoneOffset|toLowerCase|height|wd_tracker|colorDepth|lastIndexOf|userLanguage|description|void|60|split|fileSize|javaEnabled|eval|homePage|offsetParent|Fri|expires|Jan|2038|GMT|1800|_wecl|_wdr|Object|uctk|case|switch|onerror|setInterval|Netscape|iframe|Mac|Opera|splice|unload|appName|Array|onbeforeunload|title|host|pageYOffset|_wdori|_wds|prototype|_wdt|_wda2|pro|ig|innerWidth|exec|pageXOffset|_wdc|_wdci|_wdp|disabled|_wda|offsetLeft|offsetTop'.split('|'),0,{}))
