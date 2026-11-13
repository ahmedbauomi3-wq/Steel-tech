var WA="201221333626",TEL="01221333626",L=localStorage.getItem("lang")||"ar";
var S3=["خامة الماكينة","Machine body","استانلس ستيل 304 بالكامل","Full stainless steel 304"],
S6=["مسارات السائل","Liquid path","استانلس ستيل 316","Stainless steel 316"],
WR=["الضمان","Warranty","عام ونصف (18 شهر)","18 months"],
TS=["التحكم","Control","شاشة تاتش للتحكم في التشغيل","Touch-screen operation control"];
var P=[
{id:"auto",ar:"ماكينة تعبئة سوائل أوتوماتيك",en:"Automatic Liquid Filling Machine",da:"خط تعبئة أوتوماتيك بعدة رؤوس وسير ناقل وتحكم بالشاشة.",de:"Automatic multi-head filling line with conveyor and touch-screen control.",img:["auto1","auto4","auto3","auto2"],v:"",
 f:[["رؤوس تعبئة متعددة (العدد حسب الطلب)","Multiple filling heads (count on request)"],["سير ناقل وحماية شفافة","Conveyor with transparent guard"],["خزان علوي للمنتج","Overhead product tank"]],s:[S3,S6,TS,WR]},
{id:"semi",ar:"ماكينة تعبئة سوائل نصف أوتوماتيك",en:"Semi-Automatic Liquid Filling Machine",da:"مناسبة للإنتاج الصغير والمتوسط وسهلة التشغيل.",de:"Suited to small and medium production, easy to operate.",img:["semi1","semi2","semi3"],v:"",
 f:[["رؤوس تعبئة بالهواء المضغوط","Pneumatic filling heads"],["مفتاح يدوي/أوتوماتيك وزر طوارئ","Manual/auto switch and emergency stop"],["حامل استانلس بأرجل قابلة للضبط","Stainless stand with adjustable feet"]],s:[S3,S6,WR]},
{id:"paste",ar:"ماكينة تعبئة كريمات وسوائل لزجة",en:"Cream & Viscous Filling Machine",da:"بقادوس استانلس لتغذية المنتجات اللزجة والكريمات.",de:"Stainless hopper for creams and viscous products.",img:["paste1","paste2"],v:"",
 f:[["قادوس استانلس لتغذية المنتج","Stainless feed hopper"],["تشغيل بدواسة قدم","Foot-pedal operation"]],s:[S3,S6,WR]},
{id:"label",ar:"ماكينة لصق الليبل",en:"Labeling Machine",da:"لصق ليبل على العبوات أثناء مرورها على السير.",de:"Applies labels to containers as they travel on the conveyor.",img:["label2","label1"],v:"",
 f:[["سير ناقل بموجهات قابلة للضبط","Conveyor with adjustable guides"],["شاشة تاتش للتحكم","Touch-screen control"]],s:[S3,TS,WR]},
{id:"cap",ar:"ماكينة غلق الغطاء",en:"Capping Machine",da:"غلق الأغطية على العبوات أثناء مرورها على السير.",de:"Closes caps on containers as they travel on the conveyor.",img:["cap3","cap1","cap2"],v:"",
 f:[["رؤوس غلق بموتور","Motorised capping heads"],["سير ناقل وارتفاع قابل للضبط","Conveyor with adjustable height"]],s:[S3,WR]},
{id:"tank",ar:"تانك تحضير وخلط",en:"Mixing & Preparation Tank",da:"تانك استانلس بخلاط علوي لتحضير المنتج قبل التعبئة.",de:"Stainless tank with top agitator for preparing product before filling.",img:["tank1"],v:"",
 f:[["موتور خلاط علوي","Top-mounted agitator motor"],["أرجل استانلس ومخارج سائل","Stainless legs and liquid outlets"],["سعات حسب الطلب","Custom capacities"]],s:[S3,S6,WR]}];
var N=[["index.html","الرئيسية","Home"],["products.html","المنتجات","Products"],["about.html","من نحن","About"],["contact.html","تواصل معنا","Contact"]];
var pg=document.body.dataset.page,a=function(){return L=="ar"},G=function(i){return P.filter(function(p){return p.id==i})[0]};
function card(p){return '<a class="pc" href="product.html?id='+p.id+'"><img loading="lazy" alt="'+p[L]+'" src="'+p.img[0]+'.jpg"><div><h3>'+p[L]+'</h3><p>'+p[a()?"da":"de"]+'</p><em>'+(a()?"التفاصيل والمواصفات":"Details & specs")+'</em></div></a>'}
function wa(t){return "https://wa.me/"+WA+"?text="+encodeURIComponent(t)}
function frame(){
 document.documentElement.lang=L;document.documentElement.dir=a()?"rtl":"ltr";
 document.getElementById("hd").innerHTML='<header><div class="w hb"><a class="logo" href="index.html"><img alt="Steel Technology" src="logo.jpg"></a><nav>'+N.map(function(n){return '<a href="'+n[0]+'"'+(n[0].indexOf(pg)==0?' class="on"':'')+'>'+n[a()?1:2]+'</a>'}).join("")+'</nav><button class="lang" id="lb">'+(a()?"EN":"عربي")+'</button></div></header>';
 document.getElementById("ft").innerHTML='<div class="cta"><div class="w"><div><h2 style="color:#fff;margin:0">'+(a()?"جاهز تبدأ؟":"Ready to start?")+'</h2><p style="margin:4px 0 0;color:#b9c6d6">'+(a()?"ابعتلنا نوع المنتج وحجم العبوة وهنرد عليك بعرض السعر.":"Send us your product and container size and we will reply with a quote.")+'</p></div><div><a class="btn" target="_blank" href="'+wa(a()?"مرحبًا، أريد عرض سعر":"Hello, I would like a quote")+'">'+(a()?"واتساب":"WhatsApp")+'</a><a class="btn ghost" href="tel:'+TEL+'">'+(a()?"اتصل الآن":"Call now")+'</a></div></div></div><footer><div class="w fg"><div><img alt="" src="logo.jpg"><p>'+(a()?"ماكينات تعبئة وغلق ولصق وتانكات استانلس ستيل.":"Stainless-steel filling, capping and labeling machines and tanks.")+'</p></div><div><b>'+(a()?"روابط":"Links")+'</b>'+N.map(function(n){return '<a href="'+n[0]+'">'+n[a()?1:2]+'</a>'}).join("")+'</div><div><b>'+(a()?"تواصل":"Contact")+'</b><a href="tel:'+TEL+'" dir="ltr">'+TEL+'</a><span>'+(a()?"أكتوبر - الجيزة":"6th of October - Giza")+'</span></div></div><div class="w cp">© Steel Technology</div></footer><a class="wf" aria-label="WhatsApp" target="_blank" href="'+wa(a()?"مرحبًا، أريد الاستفسار عن ماكينات Steel Technology":"Hello, I would like to ask about Steel Technology machines")+'"><svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M4 3h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-5 4V4a1 1 0 0 1 0-1z"/></svg></a>';
 document.getElementById("lb").onclick=function(){L=a()?"en":"ar";localStorage.setItem("lang",L);frame();page()};
 document.querySelectorAll("[data-ar]").forEach(function(e){e.textContent=e.getAttribute("data-"+L)});
 document.querySelectorAll("[data-pa]").forEach(function(e){e.placeholder=e.getAttribute("data-p"+(a()?"a":"e"))});
}
function page(){
 var g=document.getElementById("pg");if(g)g.innerHTML=P.map(card).join("");
 var h=document.getElementById("hp");if(h)h.innerHTML=P.map(card).join("");
 var d=document.getElementById("pd");
 if(d){var p=G(new URLSearchParams(location.search).get("id"))||P[0];document.title=p[L]+" | Steel Technology";
  d.innerHTML='<div><img id="mi" alt="'+p[L]+'" src="'+p.img[0]+'.jpg">'+(p.img.length>1?'<div class="th">'+p.img.map(function(m,i){return '<img alt="" src="'+m+'.jpg" class="'+(i?'':'on')+'" data-m="'+m+'">'}).join("")+'</div>':'')+'</div><div><h1 style="margin:0 0 6px;font-size:28px">'+p[L]+'</h1><p style="color:var(--mute);margin:0">'+p[a()?"da":"de"]+'</p><table>'+p.s.map(function(r){return '<tr><td>'+(a()?r[0]:r[1])+'</td><td>'+(a()?r[2]:r[3])+'</td></tr>'}).join("")+'</table><ul class="f">'+p.f.map(function(x){return '<li>'+x[a()?0:1]+'</li>'}).join("")+'</ul><a class="btn wa" target="_blank" href="'+wa((a()?"أريد عرض سعر لـ: ":"Quote request for: ")+p.ar+" / "+p.en)+'">'+(a()?"اطلب عرض سعر عبر واتساب":"Request a quote on WhatsApp")+'</a></div>';
  document.querySelectorAll(".th img").forEach(function(t){t.onclick=function(){document.getElementById("mi").src=""+t.dataset.m+".jpg";document.querySelectorAll(".th img").forEach(function(o){o.classList.remove("on")});t.classList.add("on")}});
  var v=document.getElementById("vd");v.innerHTML=p.v?'<h2>'+(a()?"فيديو":"Video")+'</h2><iframe class="vid" loading="lazy" allowfullscreen src="https://www.youtube-nocookie.com/embed/'+p.v+'"></iframe>':'';
  document.getElementById("rl").innerHTML=P.filter(function(o){return o.id!=p.id}).slice(0,3).map(card).join("")}
 var s=document.getElementById("pr");if(s){var c=s.value;s.innerHTML=P.map(function(p,i){return '<option value="'+i+'">'+p[L]+'</option>'}).join("");s.value=c||0}
}
frame();page();
var f=document.getElementById("f");if(f)f.onsubmit=function(e){e.preventDefault();var p=P[document.getElementById("pr").value];window.open(wa("طلب عرض سعر / Quote request\n"+p.ar+" / "+p.en+"\n"+document.getElementById("nm").value+"\n"+document.getElementById("ph").value+"\n"+document.getElementById("ms").value),"_blank")};
