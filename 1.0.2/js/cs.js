function createCode(a){var b=document.getElementById("anything2qrcode");if(!b){b=document.createElement("div"),b.id="anything2qrcode",b.addEventListener("click",function(){b.style.display="none",[].slice.call(b.querySelectorAll(".anything-to-qrcode-item")).forEach(function(a){b.removeChild(a)})}),b.style.display="none",document.body.appendChild(b)}b.style.display="block";
var d=document.createElement("div");
d.className="anything-to-qrcode-item";
var e=document.createElement("div");
e.className="anything-to-qrcode-item-img",$(e).qrcode({width:300,height:300,text:utf16to8(a)}).attr("title",a);
d.appendChild(e),b.appendChild(d)}
chrome.runtime.onMessage.addListener(function(a){a.theTextToQRCode&&""!=a.theTextToQRCode.trim()&&createCode(a.theTextToQRCode)});