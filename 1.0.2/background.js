chrome.contextMenus.create({id:"context-menu-1",title:"to QRCode",contexts:["page","frame","selection","link","image","video","audio"]}),chrome.contextMenus.onClicked.addListener(function(a,b){if("context-menu-1"===a.menuItemId){var c=!0;a.linkUrl&&(c=!1,chrome.tabs.sendMessage(b.id,{theTextToQRCode:a.linkUrl,type:"link"})),a.selectionText&&""!=a.selectionText.trim()&&(c=!1,chrome.tabs.sendMessage(b.id,{theTextToQRCode:a.selectionText,type:"text"})),a.srcUrl&&(c=!1,chrome.tabs.sendMessage(b.id,{theTextToQRCode:a.srcUrl,type:"media"})),c&&a.pageUrl&&chrome.tabs.sendMessage(b.id,{theTextToQRCode:a.pageUrl,type:"page"})}}),chrome.tabs.onUpdated.addListener(function(a,b,c){chrome.pageAction.setTitle({tabId:a,title:'click to show the QRcode of "'+c.url+'"'}),chrome.pageAction.setPopup({tabId:a,popup:"pageaction.html?text="+encodeURIComponent(c.url)}),chrome.pageAction.show(a)}),chrome.pageAction.onClicked.addListener(function(a){chrome.runtime.sendMessage({theTextToQRCode:a.url,type:"location"})});