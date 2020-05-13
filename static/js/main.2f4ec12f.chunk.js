(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{25:function(e,t){e.exports={APIKey:"82a093b2"}},38:function(e,t,a){e.exports=a.p+"static/media/spinner.a21b6d48.gif"},41:function(e,t,a){e.exports=a(70)},46:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(46),a(5)),i=a(6),m=a(8),s=a(7),u=a(10),d=a(14),b=a(15);var p=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light bg-dark mb-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement(d.b,{className:"navbar-brand text-white text-lg brand-text",to:"/"},"MovieFinder.")),r.a.createElement("ul",{className:"navbar-nav ml-auto text-light d-inline-block"},r.a.createElement("li",{className:"nav-item d-inline-block mr-4"},r.a.createElement("i",{className:"fab fa-imdb fa-5x",id:"imdb-logo"})),r.a.createElement("li",{className:"nav-item d-inline-block mr-4"},r.a.createElement("i",{className:"fas fa-meh-blank fa-5x meh",id:"meh-logo"}))))))};var v=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"footer p-3 mt-4 text-center bg-dark text-light"},"developed by",r.a.createElement("span",{className:"text-warning font-weight-normal"}," Hakobjanov "),"2020. with ",r.a.createElement("i",{className:"fab fa-react"}),"React JS & Redux JS integrated with external movies data API ->",r.a.createElement("a",{href:"http://www.omdbapi.com/",target:"_blank",rel:"noopener noreferrer"},"OMDB"))))},h=a(24),E=a.n(h),f=a(25),g=function(){return{type:"LOADING"}},y=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){e.props.searchMovie(t.target.value)},e.onSubmit=function(t){t.preventDefault(),e.props.fetchMovies(e.props.text),e.props.setLoading()},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid mt-5 text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 mb-3"},r.a.createElement("i",{className:"fa fa-search"})," Search for a movie, TV-series, etc..."),r.a.createElement("form",{id:"searchForm",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",className:"form-control",name:"searchText",placeholder:"type a name here...",onChange:this.onChange}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-bg mt-3"},"Search"))))}}]),a}(n.Component),N=Object(u.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:"SEARCH_MOVIE",payload:e})}},fetchMovies:function(e){return function(t){E.a.get("http://www.omdbapi.com/?apikey=".concat(f.APIKey,"&s=").concat(e)).then((function(e){return t({type:"FETCH_MOVIEs",payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:g})(y),O=a(38),j=a.n(O);var w=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:j.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."}))},x=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement("div",{className:"col-md-3 mb-5"},r.a.createElement("div",{className:"card card-body bg-dark text-center h-100"},r.a.createElement("img",{className:"w-100 mb-2",src:e.Poster,alt:"Movie Cover"}),r.a.createElement("h5",{className:"text-light card-title"},e.Title," - ",e.Year),r.a.createElement(d.b,{className:"btn btn-primary",to:"/movie/"+e.imdbID},"Movie Details",r.a.createElement("i",{className:"fas fa-chevronn-right"}))))}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this.props.movies;return e="True"===t.Response?t.Search.map((function(e,t){return r.a.createElement(x,{key:t,movie:e})})):null,r.a.createElement("div",{className:"row"},e)}}]),a}(n.Component),M=Object(u.b)((function(e){return{movies:e.movies.movies}}))(k),I=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.loading;return r.a.createElement("div",{className:"container"},r.a.createElement(N,null),e?r.a.createElement(w,null):r.a.createElement(M,null))}}]),a}(n.Component),C=Object(u.b)((function(e){return{loading:e.movies.loading}}))(I),D=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.movie,n=r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 card card-body"},r.a.createElement("img",{src:a.Poster,className:"thumbnail",alt:"Movie Poster"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h2",{className:"col-md-4"}," ",a.Title),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Genre:")," ",a.Genre),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Released:")," ",a.Released),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Rated:")," ",a.Rated),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"IMDB rating:")," ",a.imdbRating),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Director:")," ",a.Director),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Writer:")," ",a.Writer),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Actors:")," ",a.Actors)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card card-body bg-dark my-5 text-light"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,"About"),a.Plot," ",r.a.createElement("hr",null),r.a.createElement("a",{href:"https://www.imdb.com/title/"+a.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"View on IMDB"),r.a.createElement(d.b,{to:"/",className:"btn btn-default text-light"},"Go Back to Search"))))),c=t?r.a.createElement(w,null):n;return r.a.createElement("div",null,c)}}]),a}(n.Component),S=Object(u.b)((function(e){return{loading:e.movies.loading,movie:e.movies.movie}}),{fetchMovie:function(e){return function(t){E.a.get("http://www.omdbapi.com/?apikey=".concat(f.APIKey,"&i=").concat(e)).then((function(e){return t({type:"FETCH_MOVIE",payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:g})(D),A=a(13),R=a(39),T=a(40),P=a(12),V={text:"",movies:[],loading:!1,movie:[]},_=Object(A.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIE":return Object(P.a)(Object(P.a)({},e),{},{text:t.payload,loading:!1});case"FETCH_MOVIEs":return Object(P.a)(Object(P.a)({},e),{},{movies:t.payload,loading:!1});case"FETCH_MOVIE":return Object(P.a)(Object(P.a)({},e),{},{movie:t.payload,loading:!1});case"LOADING":return Object(P.a)(Object(P.a)({},e),{},{loading:!0});default:return e}}}),H=[R.a],L=Object(A.createStore)(_,{},Object(T.composeWithDevTools)(A.applyMiddleware.apply(void 0,H))),B=(a(69),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{store:L},r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(b.a,{exact:!0,path:"/",component:C}),r.a.createElement(b.a,{exact:!0,path:"/movie/:id",component:S}),r.a.createElement(v,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.2f4ec12f.chunk.js.map