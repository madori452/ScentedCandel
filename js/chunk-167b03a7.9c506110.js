(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-167b03a7"],{5727:function(t,e,c){"use strict";c.r(e);var s=c("7a23"),a=c("9d61"),l=c.n(a),o=c("b600"),i=c.n(o),n=c("fe29"),r=c.n(n);const d=Object(s["i"])('<div class="container-fluid d-flex align-items-center justify-content-center px-0"><h4 class="en-font-title en-font">CART</h4><img src="'+l.a+'" class="d-lg-block d-none w-100" alt="banner"><img src="'+i.a+'" class="d-md-block d-none d-lg-none w-100" alt="Carousel01"><img src="'+r.a+'" class="d-sm-block d-md-none w-100" alt="Carousel01"></div>',1),b={class:"container"},u={class:"row my-5"},h={class:"step-line mb-4"},m={class:"col-12 d-flex ps-0 justify-content-center align-items-center en-font mx-auto"},p={class:"circle circle01 col-3"},j=Object(s["h"])("p",{class:"step"},"確認訂單資訊",-1),O=Object(s["i"])('<li class="circle circle01 col-3 offset-1"><p class="num d-block mx-auto">2</p><p class="step">建立個人訂單</p></li><li class="circle circle01 col-3 offset-1"><p class="num d-block mx-auto">3</p><p class="step">付款完成</p></li>',2),f={key:0,class:"row mx-auto"},g={key:0,class:"col-lg-6 mx-auto text-center my-5 cart-none bg-white"},y={class:"go-shop mx-auto d-flex justify-content-center align-items-center flex-column"},x=Object(s["h"])("h5",{class:"text-primary en-font"},"目前還沒有商品！快去選購吧",-1),v=Object(s["h"])("button",{type:"button",class:"shop btn btn-primary py-2 px-5 text-white rounded-0"},"選擇商品",-1),k={key:1,class:"col-xl-5 cart-list-menu bg-white offset-xl-1"},C={class:"px-1"},w=Object(s["h"])("p",{class:"h5 en-font mt-5"},"購物清單",-1),L=Object(s["h"])("hr",null,null,-1),I={class:"table align-middle px-4"},_=Object(s["h"])("thead",null,[Object(s["h"])("tr",null,[Object(s["h"])("th",{class:"remove-item"}),Object(s["h"])("th",{class:"title-item"},"品名"),Object(s["h"])("th",{class:"qty-item"},"數量"),Object(s["h"])("th",{class:"price-item text-end"},"單價")])],-1),V={class:"px-0"},$=["disabled","onClick"],q=Object(s["h"])("i",{class:"bi bi-x"},null,-1),z=[q],U={class:"product_title"},S={key:0,class:"text-success"},N={class:"input-group input-group-sm"},E=["disabled","onClick"],M=["disabled"],F=["onClick"],J={class:"text-end"},P={key:0,class:"text-success"},A={class:"product_price"},G=Object(s["h"])("td",{colspan:"3",class:"text-end"},"總計",-1),R={class:"text-end price-total"},T={key:0},B=Object(s["h"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),D={class:"text-end text-success"},H={class:"row w-100 m-0 coupon-code"},K={class:"col-12 d-flex justify-content-end"},Q={key:2,class:"form-table-info col-xl-5 px-0"},W={class:"bg-white"},X={class:"row"},Y=Object(s["h"])("p",{class:"h5 en-font mt-5"},"訂購人資料",-1),Z=Object(s["h"])("hr",null,null,-1),tt={class:"mb-3 mt-3"},et=Object(s["h"])("label",{for:"email",class:"form-label"},"Email",-1),ct={class:"mb-3"},st=Object(s["h"])("label",{for:"name",class:"form-label"},"姓名",-1),at={class:"mb-3"},lt=Object(s["h"])("label",{for:"tel",class:"form-label"},"電話",-1),ot={class:"mb-3"},it=Object(s["h"])("label",{for:"address",class:"form-label"},"地址",-1),nt={class:"mb-3"},rt=Object(s["h"])("label",{for:"message",class:"form-label"},"留言",-1),dt=Object(s["h"])("div",{class:"text-end"},[Object(s["h"])("input",{type:"submit",class:"btn btn-primary w-100 mb-5 py-2 text-white rounded-0",value:"送出訂單"})],-1);function bt(t,e,c,a,l,o){const i=Object(s["I"])("CustomLoading"),n=Object(s["I"])("router-link"),r=Object(s["I"])("Field"),q=Object(s["I"])("ErrorMessage"),bt=Object(s["I"])("Form");return Object(s["z"])(),Object(s["g"])(s["a"],null,[Object(s["k"])(i,{active:l.isLoading},null,8,["active"]),d,Object(s["h"])("div",b,[Object(s["h"])("div",u,[Object(s["h"])("div",h,[Object(s["h"])("ul",m,[Object(s["h"])("li",p,[Object(s["h"])("p",{class:Object(s["s"])(["num d-block mx-auto",{primaryStep:!0}])},"1"),j]),O])]),l.cart.carts?(Object(s["z"])(),Object(s["g"])("div",f,[0===l.cart.carts.length?(Object(s["z"])(),Object(s["g"])("div",g,[Object(s["h"])("div",y,[x,Object(s["k"])(n,{to:"../user/products"},{default:Object(s["U"])(()=>[v]),_:1})])])):Object(s["f"])("",!0),l.cart.carts.length>=1?(Object(s["z"])(),Object(s["g"])("div",k,[Object(s["h"])("div",C,[w,L,Object(s["h"])("table",I,[_,Object(s["h"])("tbody",null,[l.cart.carts?(Object(s["z"])(!0),Object(s["g"])(s["a"],{key:0},Object(s["G"])(l.cart.carts,e=>(Object(s["z"])(),Object(s["g"])("tr",{key:e.id},[Object(s["h"])("td",V,[Object(s["h"])("button",{type:"button",class:"btn btn-outline-primary btn-sm btn-cancel",disabled:l.status.loadingItem===e.id,onClick:t=>o.removeCartItem(e.id)},z,8,$)]),Object(s["h"])("td",null,[Object(s["h"])("span",U,Object(s["L"])(e.product.title),1),e.coupon?(Object(s["z"])(),Object(s["g"])("div",S," 已套用優惠券 ")):Object(s["f"])("",!0)]),Object(s["h"])("td",null,[Object(s["h"])("div",N,[Object(s["h"])("button",{type:"button",disabled:1===e.qty,onClick:t=>o.reduceNum(e),class:"btn btn-primary btn-sm rounded-0"}," - ",8,E),Object(s["h"])("span",{disabled:e.id===l.status.loadingItem,class:"qty_input border border-2 text-center"},Object(s["L"])(e.qty),9,M),Object(s["h"])("button",{type:"button",onClick:t=>o.addNum(e),class:"btn btn-primary btn-sm rounded-0"}," + ",8,F)])]),Object(s["h"])("td",J,[l.cart.final_total!==l.cart.total?(Object(s["z"])(),Object(s["g"])("small",P,"折扣價：")):Object(s["f"])("",!0),Object(s["h"])("span",A,Object(s["L"])(t.$filters.currency(e.final_total)),1)])]))),128)):Object(s["f"])("",!0)]),Object(s["h"])("tfoot",null,[Object(s["h"])("tr",null,[G,Object(s["h"])("td",R,Object(s["L"])(t.$filters.currency(l.cart.total)),1)]),l.cart.final_total!==l.cart.total?(Object(s["z"])(),Object(s["g"])("tr",T,[B,Object(s["h"])("td",D,Object(s["L"])(t.$filters.currency(l.cart.final_total)),1)])):Object(s["f"])("",!0)])]),Object(s["h"])("div",H,[Object(s["h"])("div",K,[Object(s["V"])(Object(s["h"])("input",{type:"text",class:"form-control d-inline-block","onUpdate:modelValue":e[0]||(e[0]=t=>l.coupon_code=t),placeholder:"請輸入優惠碼"},null,512),[[s["P"],l.coupon_code]]),Object(s["h"])("button",{class:"btn btn-outline-primary coupon d-inline-block ms-2 col-4",type:"button",onClick:e[1]||(e[1]=(...t)=>o.addCouponCode&&o.addCouponCode(...t))}," 套用優惠碼 ")])])])])):Object(s["f"])("",!0),l.cart.carts.length>=1?(Object(s["z"])(),Object(s["g"])("div",Q,[Object(s["h"])("div",W,[Object(s["h"])("div",X,[Object(s["k"])(bt,{class:"col-md-12 d-flex justify-content-center flex-column form-order",onSubmit:o.createOrder},{default:Object(s["U"])(({errors:t})=>[Y,Z,Object(s["h"])("div",tt,[et,Object(s["k"])(r,{id:"email",name:"email",type:"email",class:Object(s["s"])(["form-control",{"is-invalid":t["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=t=>l.form.user.email=t)},null,8,["class","modelValue"]),Object(s["k"])(q,{name:"email",class:"invalid-feedback"})]),Object(s["h"])("div",ct,[st,Object(s["k"])(r,{id:"name",name:"姓名",type:"text",class:Object(s["s"])(["form-control",{"is-invalid":t["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=t=>l.form.user.name=t)},null,8,["class","modelValue"]),Object(s["k"])(q,{name:"姓名",class:"invalid-feedback"})]),Object(s["h"])("div",at,[lt,Object(s["k"])(r,{id:"tel",name:"電話",type:"tel",class:Object(s["s"])(["form-control",{"is-invalid":t["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:l.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=t=>l.form.user.tel=t)},null,8,["class","modelValue"]),Object(s["k"])(q,{name:"電話",class:"invalid-feedback"})]),Object(s["h"])("div",ot,[it,Object(s["k"])(r,{id:"address",name:"地址",type:"text",class:Object(s["s"])(["form-control",{"is-invalid":t["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=t=>l.form.user.address=t)},null,8,["class","modelValue"]),Object(s["k"])(q,{name:"地址",class:"invalid-feedback"})]),Object(s["h"])("div",nt,[rt,Object(s["V"])(Object(s["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"2","onUpdate:modelValue":e[6]||(e[6]=t=>l.form.message=t)},null,512),[[s["P"],l.form.message]])]),dt]),_:1},8,["onSubmit"])])])])):Object(s["f"])("",!0)])):Object(s["f"])("",!0)])])],64)}var ut={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},status:{loadingItem:""},isLoading:!1,cart:{},coupon_code:""}},inject:["emitter"],methods:{getCart(){const t="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/cart";this.isLoading=!0,this.$http.get(t).then(t=>{this.cart=t.data.data,this.isLoading=!1})},updateCart(t){const e="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/cart/"+t.id;this.isLoading=!0,this.status.loadingItem=t.id;const c={product_id:t.product_id,qty:t.qty};this.$http.put(e,{data:c}).then(t=>{this.isLoading=!1,this.getCart(),this.status.loadingItem=""}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message}),this.isLoading=!1})},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/coupon",e={code:this.coupon_code};this.$http.post(t,{data:e}).then(t=>{this.$httpMessageState(t,"加入優惠券"),this.getCart()}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message}),this.isLoading=!1})},removeCartItem(t){const e="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/cart/"+t;this.isLoading=!0,this.status.loadingItem=t,this.$http.delete(e).then(t=>{this.status.loadingItem="",this.emitter.emit("update-qty"),this.$httpMessageState(t,"刪除購物車品項"),this.getCart(),this.isLoading=!1}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message}),this.isLoading=!1})},createOrder(){const t="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/order",e=this.form;this.$http.post(t,{data:e}).then(t=>{this.orderId=t.data.orderId,this.$router.push({path:"/checkout/"+this.orderId})}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message}),this.isLoading=!1})},addNum(t){t.product_id===t.product.id&&(t.qty+=1,this.updateCart(t))},reduceNum(t){t.product_id===t.product.id&&(t.qty-=1,this.updateCart(t))}},created(){this.getCart()}},ht=(c("84cc"),c("6b0d")),mt=c.n(ht);const pt=mt()(ut,[["render",bt]]);e["default"]=pt},"7ebb":function(t,e,c){},"84cc":function(t,e,c){"use strict";c("7ebb")},"9d61":function(t,e,c){t.exports=c.p+"img/banner-cart.c4c133f7.png"},b600:function(t,e,c){t.exports=c.p+"img/cart-pd.f0a73fde.png"},fe29:function(t,e,c){t.exports=c.p+"img/cart-mb.ce69f0f6.png"}}]);
//# sourceMappingURL=chunk-167b03a7.9c506110.js.map