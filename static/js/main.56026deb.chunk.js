(this["webpackJsonpfind-inspiration"]=this["webpackJsonpfind-inspiration"]||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),o=(a(23),a(2)),s=a(14),i=a(15),u=a(17),m=a(16),d=a(3),g=a.n(d),h=(a(41),a(42),function(e){var t=e.gallery,a=e.loadMore,n=e.launchModal,r=e.selectedImage;return console.log("gallery = ",t),c.a.createElement("div",{className:"content"},c.a.createElement("section",{className:"grid"},t.map((function(e,t){return c.a.createElement("div",{key:e.id,className:"item item-".concat(Math.ceil(e.height/e.width))},c.a.createElement("img",{src:e.urls.small,alt:e.description,"data-toggle":"modal","data-target":"#selected-img-modal",onClick:function(){return n(t)}}))}))),c.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:a},"Load more..."),c.a.createElement("div",{className:"modal fade",id:"selected-img-modal",tabIndex:"-1",role:"dialog","aria-labelledby":"selected-img-modal-Label","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-body"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:r.src,alt:r.description,className:"mx-auto d-block img-fluid high-res-img"})),c.a.createElement("hr",null),c.a.createElement("p",null,r.description),c.a.createElement("p",null,"Photo by ",c.a.createElement("a",{href:r.page+"?utm_source=find-inspiration",target:"_blank",rel:"noopener noreferrer"},r.username)," on ",c.a.createElement("a",{href:"https://unsplash.com/?utm_source=find-inspiration`",target:"_blank",rel:"noopener noreferrer"},"Unsplash")))))))}),p=function(e){var t=e.fetchInitialImages,a=e.handleChange,n=e.handleSubmit;return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"navbar-brand",onClick:t,style:{cursor:"pointer"}},"Find Inspiration"),c.a.createElement("form",{className:"form-inline my-2 my-lg-0 ml-auto",onSubmit:n},c.a.createElement("input",{className:"form-control mr-sm-2",type:"search","aria-label":"Search",onChange:a}),c.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))},f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).ROOT="https://api.unsplash.com/",n.KEY="?client_id=Ec1n2AKEb00jiprb4C_6LFncc57yZHxst8TYXNPvp7s",n.PERPAGE="&per_page=30",n.fetchInitialImages=function(){n.setState({searchedQuery:"Curated Collection"}),g.a.get("".concat(n.ROOT,"photos").concat(n.KEY).concat(n.PERPAGE,"&page=1")).then((function(e){var t=e.data;console.log("results = ",t),n.setState((function(){return{gallery:Object(o.a)(t)}}))})).catch((function(e){return console.log(e)}))},n.launchModal=function(e){n.setState((function(t){return{selectedImage:{description:t.gallery[e].description,src:t.gallery[e].urls.regular,username:t.gallery[e].user.username,page:t.gallery[e].user.links.html}}}))},n.loadMore=function(){n.setState((function(e){return{page:e.page+1}}),(function(){"Curated Collection"===n.state.searchedQuery?g.a.get("".concat(n.ROOT,"photos").concat(n.KEY).concat(n.PERPAGE,"&page=").concat(n.state.page)).then((function(e){var t=e.data;console.log("results = ",t),n.setState((function(e){return{gallery:[].concat(Object(o.a)(e.gallery),Object(o.a)(t))}}))})).catch((function(e){return console.log(e)})):g.a.get("".concat(n.ROOT,"search/photos").concat(n.KEY,"&query=").concat(n.state.currentQuery).concat(n.PERPAGE,"&page=").concat(n.state.page)).then((function(e){var t=e.data.results;console.log("results = ",t),n.setState((function(e){return{gallery:[].concat(Object(o.a)(e.gallery),Object(o.a)(t))}}))})).catch((function(e){return console.log(e)}))}))},n.handleChange=function(e){n.setState({currentQuery:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.setState((function(e){return{searchedQuery:e.currentQuery}})),g.a.get("".concat(n.ROOT,"search/photos").concat(n.KEY,"&query=").concat(n.state.currentQuery).concat(n.PERPAGE)).then((function(e){var t=e.data.results;console.log("results = ",t),n.setState({gallery:Object(o.a)(t)})})).catch((function(e){return console.log(e)}))},n.state={gallery:[],currentQuery:"",searchedQuery:"",page:1,selectedImage:{description:"",src:"",username:"",page:""}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchInitialImages()}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,{fetchInitialImages:this.fetchInitialImages,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"text-center"},this.state.searchedQuery),c.a.createElement(h,{gallery:this.state.gallery,loadMore:this.loadMore,launchModal:this.launchModal,selectedImage:this.state.selectedImage})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.56026deb.chunk.js.map