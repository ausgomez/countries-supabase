(function(t){function e(e){for(var s,r,i=e[0],l=e[1],u=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],s=!0,i=1;i<o.length;i++){var l=o[i];0!==n[l]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var s={},n={app:0},a=[];function r(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=s,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(o,s,function(e){return t[e]}.bind(null,s));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Navbar"),o("div",{staticClass:"container mx-auto mt-4 shadow-md"},[o("div",{staticClass:"min-h-64 bg-gray-700 rounded text-white p-10"},[t.user?o("Countries"):o("Auth"),t._m(0)],1)])],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"text-center text-gray-500 text-md"},[t._v(" ©2020 Locations App made by "),o("a",{staticClass:"text-blue-300 underline",attrs:{href:"https://auscode.me"}},[t._v("Anstroy")]),t._v(". ")])}],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"w-full mx-auto max-w-xl"},[o("h1",{staticClass:"text-center text-3xl font-bold mb-3"},[t._v("Welcome, please Log In")]),t._v(" "+t._s(t.$store.getters.loggedIn)+" "+t._s(t.$store.getters.user)+" "),o("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[o("div",{staticClass:"mb-4"},[o("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"email"}},[t._v(" email ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"email",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("div",{staticClass:"mb-6"},[o("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password"}},[t._v(" Password ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password",type:"password",placeholder:"Your Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),o("div",{staticClass:"flex items-center justify-between"},[o("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.login}},[t._v(" Sign In ")]),o("a",{staticClass:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",attrs:{href:"#"}},[t._v(" Forgot Password? ")])])])])])},i=[],l={data:()=>({email:"aus.gomez95@gmail.com",password:"HDIUTuTMMxVUyGxlPlbo"}),methods:{async login(){try{await this.$store.dispatch("login",{email:this.email,password:this.password}).then(()=>{console.log("redirectfgsbgiaoubguidgh")})}catch(t){console.error(t),this.$toasted.show(t,{position:"top-center",duration:2e3,type:"error"})}}}},u=l,c=o("2877"),d=Object(c["a"])(u,r,i,!1,null,null,null),p=d.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.modalToggle?o("EditForm",{attrs:{country:t.currentCountry},on:{close:function(e){t.modalToggle=!1},submit:t.updateCountry}}):t._e(),o("div",{staticClass:"flex flex-wrap md:flex-row justify-between items-center mb-4"},[o("h1",{staticClass:"text-5xl font-bold"},[t._v("Countries")]),o("div",{staticClass:"flex justify-around items-center order-last md:order-none"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"bg-gray-600 rounded-full text-2xl p-1 shadow text-center h-10",attrs:{type:"text",placeholder:"Search for Country"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t.$store.getters.isAdmin?o("div",[t.editing?o("button",{staticClass:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",on:{click:function(e){t.editing=!1}}},[o("i",{staticClass:"bx bx-pencil"}),t._v(" Finish ")]):o("button",{staticClass:"bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded",on:{click:function(e){t.editing=!0}}},[o("i",{staticClass:"bx bx-pencil"}),t._v(" Edit ")])]):t._e()]),o("div",{staticClass:"flex flex-wrap md:flex-row"},[t.editing?o("div",{staticClass:"w-full md:w-1/3 pb-6 flex justify-center"},[o("div",{staticClass:"w-full md:mx-3 rounded overflow-hidden shadow-lg bg-gray-200"},[o("div",{staticClass:"px-6 py-4"},[o("div",{staticClass:"font-bold text-xl mb-2 text-black"},[o("div",{staticClass:"mb-2"},[o("h1",{staticClass:"text-center text-2xl"},[t._v("Add Country")]),o("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"name"}},[t._v(" Name ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newCountry.name,expression:"newCountry.name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"name",type:"text",placeholder:"Name"},domProps:{value:t.newCountry.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addCountry(e)},input:function(e){e.target.composing||t.$set(t.newCountry,"name",e.target.value)}}})]),o("div",{staticClass:"mb-2"},[o("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"short"}},[t._v(" Short ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newCountry.short,expression:"newCountry.short"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"short",type:"text",placeholder:"Short"},domProps:{value:t.newCountry.short},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addCountry(e)},input:function(e){e.target.composing||t.$set(t.newCountry,"short",e.target.value)}}})]),o("div",{staticClass:"mb-2"},[o("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"lang"}},[t._v(" Lang ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newCountry.lang,expression:"newCountry.lang"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"lang",type:"text",placeholder:"Lang"},domProps:{value:t.newCountry.lang},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addCountry(e)},input:function(e){e.target.composing||t.$set(t.newCountry,"lang",e.target.value)}}})])])]),o("div",{staticClass:"px-6 pt-4 pb-2"},[o("button",{class:(t.submitCheck?"bg-teal-600 hover:bg-teal-800":"bg-yellow-600 hover:bg-yellow-700 cursor-not-allowed")+" w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.addCountry}},[t._v(" Add Country ")])])])]):t._e(),t._l(t.filteredCountries,(function(e,s){return o("div",{key:s,staticClass:"w-full md:w-1/3 md:pr-3 lg:pr-0 pb-6 flex justify-center"},[o("div",{staticClass:"max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 relative"},[t.editing?o("button",{staticClass:"bg-red-500 w-sm absolute top-0 right-0 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:function(o){return t.removeCountry(e)}}},[o("i",{staticClass:"bx bxs-trash"})]):t._e(),o("img",{staticClass:"w-full",attrs:{src:e.photo,alt:e.name}}),o("div",{staticClass:"px-6 py-4"},[o("div",{staticClass:"font-bold text-xl mb-2 text-black"},[t._v(t._s(e.name)+" ("+t._s(e.short)+")")]),o("p",{staticClass:"text-gray-700 text-base"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis omnis sed! Molestiae ")])]),o("div",{staticClass:"px-6 pt-4 pb-2"},[o("span",{staticClass:"inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"},[o("span",[t._v("Language: ")]),o("span",[t._v(t._s(e.lang))])]),t.editing?o("p",{staticClass:"absolute bottom-0 right-0 text-gray-900 cursor-pointer p-3",on:{click:function(o){return t.clickEditCountry(e)}}},[o("span",{staticClass:"underline"},[t._v("Edit ")]),t._m(0,!0)]):t._e()])])])})),0===t.filteredCountries.length?o("div",{staticClass:"w-full bg-gray-800 flex-col h-64 flex items-center justify-center"},[o("div",{staticClass:"text-4xl "},[t._v(" No results found ")])]):t._e()],2),t.loading?o("div",{staticClass:"w-full bg-gray-800 flex-col h-64 flex items-center justify-center"},[t._m(1)]):t._e()],1)},h=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"text-xl"},[o("i",{staticClass:"bx bxs-pencil"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-5xl "},[o("i",{staticClass:"bx bx-radio-circle bx-burst bx-lg"}),o("i",{staticClass:"bx bx-radio-circle bx-burst bx-lg"}),o("i",{staticClass:"bx bx-radio-circle bx-burst bx-lg"}),o("i",{staticClass:"bx bx-radio-circle bx-burst bx-lg"})])}],g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center text-black font-bold"},[o("div",{staticClass:"modal-overlay absolute w-full h-full bg-black opacity-50 top-0 left-0 cursor-pointer",on:{click:function(e){return t.close()}}}),o("div",{staticClass:"absolute w-auto max-w-md rounded overflow-hidden shadow-lg bg-gray-200"},[o("a",{staticClass:"cursor-pointer text-2xl text-gray-600 ",on:{click:t.close}},[o("i",{staticClass:"bx bx-x-circle absolute right-0 top-0 mr-3 mt-2"})]),o("div",{staticClass:"px-6 py-4"},[o("div",{staticClass:"font-bold text-xl mb-2 text-black"},[o("div",{staticClass:"mb-2"},[o("h1",{staticClass:"text-center text-2xl"},[t._v("Modify "+t._s(t.country.name))]),o("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"name"}},[t._v(" Name ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.country.name,expression:"country.name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"name",type:"text",placeholder:"Name"},domProps:{value:t.country.name},on:{input:function(e){e.target.composing||t.$set(t.country,"name",e.target.value)}}})]),o("div",{staticClass:"mb-2"},[o("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"short"}},[t._v(" Short ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.country.short,expression:"country.short"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"short",type:"text",placeholder:"Short"},domProps:{value:t.country.short},on:{input:function(e){e.target.composing||t.$set(t.country,"short",e.target.value)}}})]),o("div",{staticClass:"mb-2"},[o("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"lang"}},[t._v(" Language ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.country.lang,expression:"country.lang"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"lang",type:"text",placeholder:"Language"},domProps:{value:t.country.lang},on:{input:function(e){e.target.composing||t.$set(t.country,"lang",e.target.value)}}})])])]),o("div",{staticClass:"px-6 pt-4 pb-2"},[o("button",{class:(t.submitCheck?"bg-teal-600 hover:bg-teal-800":"bg-yellow-600 hover:bg-yellow-700 cursor-not-allowed")+" w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.submit}},[t._v(" Add country ")])])])])},b=[],f={props:["country"],data:()=>({}),created(){console.log("EDITING",this.country)},methods:{close(){confirm("Unsaved changes will be lost")&&this.$emit("close")},submit(){this.submitCheck?this.$emit("submit",this.country):this.$toasted.show("Missing Information",{position:"top-center",duration:2e3,type:"error"})}},computed:{submitCheck(){return""!=this.country.name&&""!=this.country.short&&""!=this.country.lang}}},y=f,x=Object(c["a"])(y,g,b,!1,null,null,null),v=x.exports,w={components:{EditForm:v},data:()=>({countries:[],editing:!1,newCountry:{name:"",short:"",lang:""},modalToggle:!1,currentCountry:{},query:"",loading:!1}),computed:{submitCheck(){return""!=this.newCountry.name&&""!=this.newCountry.short&&""!=this.newCountry.lang},filteredCountries(){return console.log("query countries"),this.countries.filter(t=>t.name.toLowerCase().indexOf(this.query.toLowerCase())>-1)}},created(){this.fetchCountries()},methods:{async lookupCountries(){console.log(this.query)},clickEditCountry(t){this.currentCountry={...t},this.modalToggle=!0},async updateCountry(t){this.loading=!0,await this.$supabase.from("Countries").update([t]).eq("id",t.id).then(e=>{e=e.data[0];const o=this.countries.findIndex(t=>t.id===this.currentCountry.id);this.countries[o]=t,this.fetchCountries(),this.modalToggle=!1,this.currentCountry={},this.$toasted.show("Country Info updated!",{position:"top-center",duration:2e3,type:"default"})}).catch(t=>{console.error(t),this.$toasted.show("Something went wrong",{position:"top-center",duration:2e3,type:"error"})}),this.loading=!1},async fetchCountries(){this.loading=!0;let{data:t,error:e}=await this.$supabase.from("Countries").select("*");this.countries=t,console.log(this.countries),this.loading=!1},async addCountry(){this.submitCheck?await this.$supabase.from("Countries").insert([this.newCountry]).then(t=>{console.log("RESS",t),t=t.data[0],this.countries.unshift({name:t.name,short:t.short,lang:t.lang,photo:t.photo}),this.$toasted.show(`Country ${this.newCountry.name} added!`,{position:"top-center",duration:2e3,type:"success"}),this.newCountry={id:0,name:"",short:"",lang:""}}):this.$toasted.show("Missing Information",{position:"top-center",duration:2e3,type:"error"})},async removeCountry(t){confirm(`Are you sure to delete ${t.name}? 🙄`)&&await this.$supabase.from("Countries").delete().eq("id",t.id).then(e=>{console.log("RES",e),e=e.data[0],this.countries=this.countries.filter(e=>e.id!=t.id),this.$toasted.show(t.name+" removed...",{position:"top-center",duration:1e3,type:"info"})})}}},C=w,_=Object(c["a"])(C,m,h,!1,null,null,null),k=_.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"flex items-center justify-between flex-wrap bg-teal-600 p-6 rounded"},[t._m(0),o("div",{staticClass:"w-full block flex-grow lg:flex lg:items-center lg:w-auto"},[o("div",{staticClass:"text-md lg:flex-grow"}),o("div",[t.loggedIn?o("span",{staticClass:"mr-6 text-white font-bold"},[t._v("Welcome, "+t._s(t.user.email)+" "+t._s(t.user.administrador?"Admin":""))]):t._e(),t.loggedIn?o("button",{staticClass:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",on:{click:t.logout}},[t._v(" Logout ")]):o("a",{staticClass:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",attrs:{href:"/login"}},[t._v(" Login ")])])])])},E=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex items-center flex-shrink-0 text-white mr-6"},[o("span",{staticClass:"font-semibold text-xl tracking-tight"},[o("i",{staticClass:"bx bxs-map"}),t._v(" Locations App")])])}],O=o("2f62"),j=o("940b");const I="https://ddwuqjstrexeuntabrqk.supabase.co",S="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYwOTAyMzYyOCwiZXhwIjoxOTI0NTk5NjI4fQ.KtdE7mZxAgtDyFPek9yoA8hfHMRylXwTKX8OpajBZQg",P=Object(j["a"])(I,S);s["a"].use(O["a"]);var N=new O["a"].Store({state:{user:null},mutations:{SET_USER(t,e){t.user=e},REMOVE_USER(t){t.user=null}},actions:{async login(t,e){console.log("user to be ",e);try{console.log("creating session"),await P.auth.signIn({email:e.email,password:e.password}).then(async e=>{console.log("everything good with login",e),await t.dispatch("checkUser")}).catch(t=>console.error(t))}catch(o){throw console.error("ERROR!",o),o}},async logout(t){await P.auth.signOut(),t.commit("REMOVE_USER")},async checkUser(t){console.log("checking for user");try{const e=await P.auth.user();console.log(e),t.commit("SET_USER",e)}catch(e){if("Error: Unauthorized"==e)return;console.error(e)}}},getters:{user(t){return t.user},loggedIn(t){return!!t.user},token:t=>t.user.token,isAdmin:t=>!0},modules:{}}),T={computed:{loggedIn(){return N.getters.loggedIn},user(){return N.getters.user}},methods:{logout(){N.dispatch("logout"),this.$toasted.show("See you later",{position:"top-center",duration:1e3,type:"info"})}}},A=T,M=Object(c["a"])(A,$,E,!1,null,null,null),R=M.exports,L={components:{Navbar:R,Countries:k,Auth:p},computed:{user(){return this.$store.getters.user}},async mounted(){this.$store.dispatch("checkUser")}},q=L,U=Object(c["a"])(q,n,a,!1,null,null,null),J=U.exports,z=(o("def6"),o("a65d")),F=o.n(z);s["a"].use(F.a),s["a"].config.productionTip=!1,s["a"].prototype.$supabase=P,new s["a"]({store:N,render:function(t){return t(J)}}).$mount("#app")},def6:function(t,e,o){}});
//# sourceMappingURL=app.453fc538.js.map