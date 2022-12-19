(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-022859dc"],{1494:function(t,e,s){
/*!
  * Bootstrap backdrop.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s("6a95"),s("aa53"),s("1243"))})(0,(function(t,e,s){"use strict";const i=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},a=i(t),n=i(s),o="backdrop",c="fade",l="show",r="mousedown.bs."+o,u={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},h={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class d extends n.default{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return u}static get DefaultType(){return h}static get NAME(){return o}show(t){if(!this._config.isVisible)return void e.execute(t);this._append();const s=this._getElement();this._config.isAnimated&&e.reflow(s),s.classList.add(l),this._emulateAnimation(()=>{e.execute(t)})}hide(t){this._config.isVisible?(this._getElement().classList.remove(l),this._emulateAnimation(()=>{this.dispose(),e.execute(t)})):e.execute(t)}dispose(){this._isAppended&&(a.default.off(this._element,r),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(c),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=e.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),a.default.on(t,r,()=>{e.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){e.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return d}))},1517:function(t,e,s){
/*!
  * Bootstrap offcanvas.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s("aa53"),s("ba05"),s("6a95"),s("302d"),s("848f"),s("1494"),s("5470"),s("0f28"))})(0,(function(t,e,s,i,a,n,o,c){"use strict";const l=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},r=l(e),u=l(s),h=l(i),d=l(a),f=l(n),b=l(o),m="offcanvas",g="bs.offcanvas",v="."+g,p=".data-api",_=`load${v}${p}`,O="Escape",j="show",y="showing",k="hiding",w="offcanvas-backdrop",x=".offcanvas.show",C="show"+v,A="shown"+v,E="hide"+v,I="hidePrevented"+v,N="hidden"+v,L="resize"+v,S=`click${v}${p}`,F="keydown.dismiss"+v,T='[data-bs-toggle="offcanvas"]',M={backdrop:!0,keyboard:!0,scroll:!1},z={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class D extends h.default{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return M}static get DefaultType(){return z}static get NAME(){return m}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=u.default.trigger(this._element,C,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new r.default).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(y);const s=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(j),this._element.classList.remove(y),u.default.trigger(this._element,A,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown)return;const t=u.default.trigger(this._element,E);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(k),this._backdrop.hide();const e=()=>{this._element.classList.remove(j,k),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new r.default).reset(),u.default.trigger(this._element,N)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{"static"!==this._config.backdrop?this.hide():u.default.trigger(this._element,I)},e=Boolean(this._config.backdrop);return new f.default({className:w,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new b.default({trapElement:this._element})}_addEventListeners(){u.default.on(this._element,F,t=>{t.key===O&&(this._config.keyboard?this.hide():u.default.trigger(this._element,I))})}static jQueryInterface(t){return this.each((function(){const e=D.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return u.default.on(document,S,T,(function(e){const s=t.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),t.isDisabled(this))return;u.default.one(s,N,()=>{t.isVisible(this)&&this.focus()});const i=d.default.findOne(x);i&&i!==s&&D.getInstance(i).hide();const a=D.getOrCreateInstance(s);a.toggle(this)})),u.default.on(window,_,()=>{for(const t of d.default.find(x))D.getOrCreateInstance(t).show()}),u.default.on(window,L,()=>{for(const t of d.default.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&D.getOrCreateInstance(t).hide()}),c.enableDismissTrigger(D),t.defineJQueryPlugin(D),D}))},"303f":function(t,e,s){"use strict";s("c821")},"3e2b":function(t,e,s){},"43f6":function(t,e,s){t.exports=s.p+"img/logo-bk.08039d6d.svg"},"459d":function(t,e,s){"use strict";var i=s("7a23");const a={style:{"z-index":"1500"}};function n(t,e,s,n,o,c){const l=Object(i["I"])("ToastContent");return Object(i["z"])(),Object(i["g"])("div",a,[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(o.messages,(t,e)=>(Object(i["z"])(),Object(i["e"])(l,{key:e,msg:t},null,8,["msg"]))),128))])}const o=t=>(Object(i["C"])("data-v-10f33fec"),t=t(),Object(i["A"])(),t),c={class:"toast toast-msg toast-container position-fixed p-3 top-5 end-0",style:{"z-index":"1500"},role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},l=o(()=>Object(i["h"])("button",{type:"button",class:"btn-close mb-0 ms-auto d-block","data-bs-dismiss":"toast","aria-label":"Close"},null,-1)),r={class:"d-flex flex-column justify-content-center"},u={class:"toast-header bg-transparent border-0 mx-auto"},h={class:"me-auto toast-header bg-transparent border-0 w-100"},d={key:0,class:"row text-muted mx-auto"};function f(t,e,s,a,n,o){return Object(i["z"])(),Object(i["g"])("div",c,[l,Object(i["h"])("div",r,[Object(i["h"])("div",u,[Object(i["h"])("i",{class:Object(i["s"])(["bi bi-check-circle-fill d-inline-block","text-"+s.msg.style])},null,2),Object(i["h"])("div",h,Object(i["L"])(s.msg.title),1)]),s.msg.content?(Object(i["z"])(),Object(i["g"])("div",d,Object(i["L"])(s.msg.content),1)):Object(i["f"])("",!0)])],512)}var b=s("6ea1"),m=s.n(b),g={name:"Toast",props:["msg"],mounted(){const t=this.$refs.toast,e=new m.a(t,{delay:2e3});e.show()}},v=(s("79e3"),s("6b0d")),p=s.n(v);const _=p()(g,[["render",f],["__scopeId","data-v-10f33fec"]]);var O=_,j={components:{ToastContent:O},data(){return{messages:[]}},methods:{toastShow(){setTimeout(()=>{this.messages.shift()},2e3)},clearToast(t){this.messages.splice(t,1)}},inject:["emitter"],mounted(){this.emitter.on("push-message",t=>{const{style:e="success",title:s,content:i}=t;this.messages.push({style:e,title:s,content:i})})}};s("bc42");const y=p()(j,[["render",n],["__scopeId","data-v-6717e58f"]]);e["a"]=y},"47d9":function(t,e,s){},5470:function(t,e,s){
/*!
  * Bootstrap focustrap.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s("6a95"),s("848f"),s("1243"))})(0,(function(t,e,s){"use strict";const i=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},a=i(t),n=i(e),o=i(s),c="focustrap",l="bs.focustrap",r="."+l,u="focusin"+r,h="keydown.tab"+r,d="Tab",f="forward",b="backward",m={autofocus:!0,trapElement:null},g={autofocus:"boolean",trapElement:"element"};class v extends o.default{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return m}static get DefaultType(){return g}static get NAME(){return c}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),a.default.off(document,r),a.default.on(document,u,t=>this._handleFocusin(t)),a.default.on(document,h,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,a.default.off(document,r))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const s=n.default.focusableChildren(e);0===s.length?e.focus():this._lastTabNavDirection===b?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===d&&(this._lastTabNavDirection=t.shiftKey?b:f)}}return v}))},"5c58":function(t,e,s){"use strict";s("3e2b")},"6ea1":function(t,e,s){
/*!
  * Bootstrap toast.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s("aa53"),s("6a95"),s("302d"),s("0f28"))})(0,(function(t,e,s,i){"use strict";const a=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},n=a(e),o=a(s),c="toast",l="bs.toast",r="."+l,u="mouseover"+r,h="mouseout"+r,d="focusin"+r,f="focusout"+r,b="hide"+r,m="hidden"+r,g="show"+r,v="shown"+r,p="fade",_="hide",O="show",j="showing",y={animation:"boolean",autohide:"boolean",delay:"number"},k={animation:!0,autohide:!0,delay:5e3};class w extends o.default{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return k}static get DefaultType(){return y}static get NAME(){return c}show(){const e=n.default.trigger(this._element,g);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(p);const s=()=>{this._element.classList.remove(j),n.default.trigger(this._element,v),this._maybeScheduleHide()};this._element.classList.remove(_),t.reflow(this._element),this._element.classList.add(O,j),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=n.default.trigger(this._element,b);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(_),this._element.classList.remove(j,O),n.default.trigger(this._element,m)};this._element.classList.add(j),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(O),super.dispose()}isShown(){return this._element.classList.contains(O)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){n.default.on(this._element,u,t=>this._onInteraction(t,!0)),n.default.on(this._element,h,t=>this._onInteraction(t,!1)),n.default.on(this._element,d,t=>this._onInteraction(t,!0)),n.default.on(this._element,f,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=w.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return i.enableDismissTrigger(w),t.defineJQueryPlugin(w),w}))},"72f2":function(t,e,s){},"79e3":function(t,e,s){"use strict";s("47d9")},"848f":function(t,e,s){
/*!
  * Bootstrap selector-engine.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s("aa53"))})(0,(function(t){"use strict";const e={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(t=>t.matches(e))},parents(t,e){const s=[];let i=t.parentNode.closest(e);while(i)s.push(i),i=i.parentNode.closest(e);return s},prev(t,e){let s=t.previousElementSibling;while(s){if(s.matches(e))return[s];s=s.previousElementSibling}return[]},next(t,e){let s=t.nextElementSibling;while(s){if(s.matches(e))return[s];s=s.nextElementSibling}return[]},focusableChildren(e){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>t+':not([tabindex^="-"])').join(",");return this.find(s,e).filter(e=>!t.isDisabled(e)&&t.isVisible(e))}};return e}))},"8b55":function(t,e,s){"use strict";s.r(e);var i=s("7a23");const a={class:"container-fluid px-0"};function n(t,e,s,n,o,c){const l=Object(i["I"])("NavbarFront"),r=Object(i["I"])("router-view"),u=Object(i["I"])("ToastMessages"),h=Object(i["I"])("FooterFront");return Object(i["z"])(),Object(i["g"])(i["a"],null,[Object(i["k"])(l),Object(i["h"])("div",a,[Object(i["k"])(r),Object(i["k"])(u)]),Object(i["k"])(h)],64)}var o=s("43f6"),c=s.n(o),l=s("b0b5"),r=s.n(l),u=s("be8e"),h=s.n(u);const d=t=>(Object(i["C"])("data-v-71b8d53e"),t=t(),Object(i["A"])(),t),f=d(()=>Object(i["h"])("div",{class:"coupon position-fixed w-100"},"輸入 CDR5542 可以享受優惠85折喔！！",-1)),b={class:"navbar navbar-expand-md navbar-bg py-0 mb-3 position-fixed w-100"},m={class:"container"},g=d(()=>Object(i["h"])("img",{src:c.a,alt:"logo",class:"logo"},null,-1)),v=d(()=>Object(i["h"])("span",{class:"navbar-toggler-icon"},null,-1)),p=[v],_={class:"navbar-nav mt-2"},O=Object(i["j"])("首頁"),j=Object(i["j"])("產品列表"),y=Object(i["j"])("品牌故事"),k={class:"navbar-nav ms-auto"},w={class:"cart-icon"},x=d(()=>Object(i["h"])("img",{src:r.a,alt:"收藏"},null,-1)),C={key:0,class:"tip02"},A={class:"cart-icon"},E=d(()=>Object(i["h"])("img",{src:h.a,alt:"購物車"},null,-1)),I={key:0,class:"tip01"};function N(t,e,s,a,n,o){const c=Object(i["I"])("router-link"),l=Object(i["I"])("CanvasModal");return Object(i["z"])(),Object(i["g"])(i["a"],null,[f,Object(i["h"])("nav",b,[Object(i["h"])("div",m,[Object(i["k"])(c,{to:"../../user/index",class:"mt-2",onClick:o.closeNav},{default:Object(i["U"])(()=>[g]),_:1},8,["onClick"]),Object(i["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=(...t)=>o.openNav&&o.openNav(...t))},p),Object(i["h"])("div",{class:Object(i["s"])(["navbar-collapse collapse",{show:n.toggleNav}]),id:"navbarNavAltMarkup"},[Object(i["h"])("div",_,[Object(i["k"])(c,{to:"../../user/index",class:"nav-link item","aria-current":"page",onClick:o.closeNav},{default:Object(i["U"])(()=>[O]),_:1},8,["onClick"]),Object(i["k"])(c,{to:"../../user/products",class:"nav-link item","aria-current":"page",onClick:o.closeNav},{default:Object(i["U"])(()=>[j]),_:1},8,["onClick"]),Object(i["k"])(c,{to:"../../user/articles",class:"nav-link item","aria-current":"page",onClick:o.closeNav},{default:Object(i["U"])(()=>[y]),_:1},8,["onClick"])]),Object(i["h"])("div",k,[Object(i["h"])("a",{href:"#",class:"nav-link position-relative","aria-current":"page",onClick:e[1]||(e[1]=Object(i["W"])((...t)=>o.openCanvas&&o.openCanvas(...t),["prevent"]))},[Object(i["h"])("div",w,[x,n.myFavorite?(Object(i["z"])(),Object(i["g"])("div",C,Object(i["L"])(n.myFavorite.length),1)):Object(i["f"])("",!0)])]),Object(i["k"])(c,{to:"../../user/cart",class:"nav-link","aria-current":"page",onClick:o.closeNav},{default:Object(i["U"])(()=>[Object(i["h"])("div",A,[E,n.shoppingCart?(Object(i["z"])(),Object(i["g"])("div",I,Object(i["L"])(n.shoppingCart),1)):Object(i["f"])("",!0)])]),_:1},8,["onClick"])])],2)])]),Object(i["k"])(l,{ref:"canvas"},null,512)],64)}const L={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasRight",ref:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},S=Object(i["h"])("div",{class:"offcanvas-header"},[Object(i["h"])("h5",{class:"offcanvas-title en-font mt-4",id:"offcanvasRightLabel"},"我的最愛收藏"),Object(i["h"])("button",{c:"",type:"button",class:"btn-close h2","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),F={key:0,class:"offcanvas-body"},T={class:"row"},M={class:"col-5 pe-0"},z={class:"col-5 px-0"},D={class:"list-title"},q={class:"col-2 px-0"},P=["onClick"],W=Object(i["h"])("i",{class:"bi bi-x-square h3"},null,-1),$=[W],J={key:1,class:"offcanvas-body"},U=Object(i["h"])("p",null,"目前還沒有收藏喔！",-1),R=[U];function V(t,e,s,a,n,o){return Object(i["z"])(),Object(i["g"])("div",L,[S,0!==n.favoriteList.length?(Object(i["z"])(),Object(i["g"])("div",F,[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(n.favoriteList,t=>(Object(i["z"])(),Object(i["g"])("div",{class:"card card-list mt-3",key:t.id},[Object(i["h"])("div",T,[Object(i["h"])("div",M,[Object(i["h"])("div",{class:"bg-cover",style:Object(i["t"])({backgroundImage:"url("+t.imageUrl+")",height:"80px"})},null,4)]),Object(i["h"])("div",z,[Object(i["h"])("p",D,Object(i["L"])(t.title),1)]),Object(i["h"])("div",q,[Object(i["h"])("span",{onClick:e=>o.removeItem(t),class:"ms-3"},$,8,P)])])]))),128))])):(Object(i["z"])(),Object(i["g"])("div",J,R))],512)}var K=s("1517"),Q=s.n(K);const B={getLikeItem(){return JSON.parse(localStorage.getItem("MyFavorite"))}};var H={inject:["emitter"],data(){return{bsOffcanvas:"",myFavorite:B.getLikeItem()||[],allProducts:[],filters:[],favoriteList:[]}},methods:{showCanvas(){this.bsOffcanvas.show(),this.favoriteList=JSON.parse(localStorage.getItem("MyFavorite"))},getFavorite(){this.favoriteList=JSON.parse(localStorage.getItem("MyFavorite"))},removeItem(t){this.myFavorite=B.getLikeItem()||[],this.favoriteList.forEach((e,s)=>{if(e.id===t.id){this.favoriteList.splice(s,1);const t=JSON.stringify(this.favoriteList);localStorage.setItem("MyFavorite",t),this.emitter.emit("favorite-qty",this.myFavorite),this.emitter.emit("remove-data",this.myFavorite),this.$swal({icon:"warning",title:"已從最愛中移除"}),this.getFavorite()}})}},mounted(){this.bsOffcanvas=new Q.a(this.$refs.offcanvasRight),this.getFavorite()}},G=(s("5c58"),s("6b0d")),Y=s.n(G);const X=Y()(H,[["render",V]]);var Z=X,tt={components:{CanvasModal:Z},data(){return{shoppingCart:"",toggleNav:!1,myFavorite:JSON.parse(localStorage.getItem("MyFavorite"))||[]}},inject:["emitter"],emits:["shopping-cart"],methods:{openCanvas(){const t=JSON.parse(localStorage.getItem("MyFavorite"))||[];this.$refs.canvas.showCanvas(t),window.innerWidth<992&&(this.toggleNav=!1)},getCart(){const t="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/cart";this.$http.get(t).then(t=>{this.cart=t.data.data,this.shoppingCart=this.cart.carts.length}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message})})},scroll(){window.addEventListener("scroll",(function(){const t=this.document.querySelector(".navbar"),e=this.scrollY;e>10?t.classList.add("navbar-bgscroll"):t.classList.remove("navbar-bgscroll")}))},openNav(){window.innerWidth<992&&(this.toggleNav=!this.toggleNav)},getFavorite(){this.myFavorite=JSON.parse(localStorage.getItem("MyFavorite"))||[]},closeNav(){window.innerWidth<992&&(this.toggleNav=!1)}},mounted(){this.getCart(),this.getFavorite(),this.scroll(),this.emitter.on("update-qty",()=>{this.getCart()}),this.emitter.on("favorite-qty",()=>{this.getFavorite()})},unmounted(){this.emitter.off("update-qty",()=>{this.getCart()}),this.emitter.off("favorite-qty",()=>{this.getFavorite()}),this.scroll()}};s("303f");const et=Y()(tt,[["render",N],["__scopeId","data-v-71b8d53e"]]);var st=et,it=s("9875"),at=s.n(it);const nt={class:"footer"},ot={class:"container"},ct={class:"row"},lt=Object(i["h"])("div",{class:"col-lg-4"},[Object(i["h"])("img",{src:at.a,alt:"logo",class:"logo img-fluid"})],-1),rt={class:"col-lg-8"},ut={class:"row contact"},ht=Object(i["h"])("div",{class:"col-lg-3 col-xl-3 offset-xl-2"},[Object(i["h"])("h4",{class:"en-font"},"聯絡我們"),Object(i["h"])("p",null,"電話：09123335789")],-1),dt={class:"col-lg-3 col-xl-2"},ft=Object(i["h"])("h4",{class:"en-font"},"品牌故事",-1),bt=Object(i["h"])("p",null,"-關於我們",-1),mt=Object(i["h"])("p",null,"-隱私權政策",-1),gt={class:"col-lg-3 col-xl-2"},vt=Object(i["h"])("h4",{class:"en-font"},"購物說明",-1),pt=Object(i["h"])("p",null,"-常見問題",-1),_t={class:"col-lg-3 col-xl-2"},Ot=Object(i["h"])("h4",{class:"en-font"},"後台系統",-1),jt=Object(i["h"])("p",null,"-後台系統登入",-1),yt=Object(i["h"])("div",{class:"copyright"},[Object(i["h"])("p",null,[Object(i["j"])("© Tracy 2022 All Rights Reserved."),Object(i["h"])("br"),Object(i["j"])(" 僅個人作品練習，無商業用途")])],-1);function kt(t,e){const s=Object(i["I"])("router-link");return Object(i["z"])(),Object(i["g"])(i["a"],null,[Object(i["h"])("div",nt,[Object(i["h"])("div",ot,[Object(i["h"])("div",ct,[lt,Object(i["h"])("div",rt,[Object(i["h"])("div",ut,[ht,Object(i["h"])("div",dt,[ft,Object(i["k"])(s,{to:"../../user/articles",class:"nav-link","aria-current":"page"},{default:Object(i["U"])(()=>[bt]),_:1}),Object(i["k"])(s,{to:"../../user/privacy",class:"nav-link","aria-current":"page"},{default:Object(i["U"])(()=>[mt]),_:1})]),Object(i["h"])("div",gt,[vt,Object(i["k"])(s,{to:"../../user/question",class:"nav-link","aria-current":"page"},{default:Object(i["U"])(()=>[pt]),_:1})]),Object(i["h"])("div",_t,[Ot,Object(i["k"])(s,{to:"../../login",class:"nav-link","aria-current":"page"},{default:Object(i["U"])(()=>[jt]),_:1})])])])])])]),yt],64)}s("b841");const wt={},xt=Y()(wt,[["render",kt]]);var Ct=xt,At=s("cfb9"),Et=s("459d"),It={components:{ToastMessages:Et["a"],NavbarFront:st,FooterFront:Ct},provide(){return{emitter:At["a"]}}};const Nt=Y()(It,[["render",n]]);e["default"]=Nt},9267:function(t,e,s){},9875:function(t,e,s){t.exports=s.p+"img/logo-gy.df6ed271.svg"},b0b5:function(t,e,s){t.exports=s.p+"img/love.2a9661ec.svg"},b841:function(t,e,s){"use strict";s("9267")},ba05:function(t,e,s){
/*!
  * Bootstrap scrollbar.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s("848f"),s("109e"),s("aa53"))})(0,(function(t,e,s){"use strict";const i=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},a=i(t),n=i(e),o=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",c=".sticky-top",l="padding-right",r="margin-right";class u{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,l,e=>e+t),this._setElementAttributes(o,l,e=>e+t),this._setElementAttributes(c,r,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,l),this._resetElementAttributes(o,l),this._resetElementAttributes(c,r)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,s){const i=this.getWidth(),a=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+i)return;this._saveInitialAttribute(t,e);const a=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,s(Number.parseFloat(a))+"px")};this._applyManipulationCallback(t,a)}_saveInitialAttribute(t,e){const s=t.style.getPropertyValue(e);s&&n.default.setDataAttribute(t,e,s)}_resetElementAttributes(t,e){const s=t=>{const s=n.default.getDataAttribute(t,e);null!==s?(n.default.removeDataAttribute(t,e),t.style.setProperty(e,s)):t.style.removeProperty(e)};this._applyManipulationCallback(t,s)}_applyManipulationCallback(t,e){if(s.isElement(t))e(t);else for(const s of a.default.find(t,this._element))e(s)}}return u}))},bc42:function(t,e,s){"use strict";s("72f2")},be8e:function(t,e,s){t.exports=s.p+"img/chart.a1d83a1d.svg"},c821:function(t,e,s){}}]);
//# sourceMappingURL=chunk-022859dc.eaaa9759.js.map