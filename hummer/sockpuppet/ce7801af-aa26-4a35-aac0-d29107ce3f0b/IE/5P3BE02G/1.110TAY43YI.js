KISSY.add("malldetail/common/destroy",function(e,t,a){return{"init":function(a){var i=a.product;i.onLoad("fasePushConfig",function(a){if(a&&a.superDestory){var i=a.superDestory;if(e.isArray(i))for(var l=0;l<i.length;l++){var o=t.get(i[l]&&i[l].selector);try{t.remove(o)}catch(n){}}}}),i.onLoad(["itemDO"],function(e){t.append(t.create('<link href="https://detail.tmall.com/item.htm?id='+e.itemId+'" rel="canonical">'),document.head),t.append(t.create('<link rel="alternate" hreflang="zh-Hant" href="//taiwan.tmall.com/item/'+e.itemId+'.htm" />'),document.head)})}}},{"requires":["dom","io"]});