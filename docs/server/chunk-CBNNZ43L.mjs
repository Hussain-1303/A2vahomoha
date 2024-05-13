import './polyfills.server.mjs';
import{C as S,G as _,H as I,K as D,L as T,M as v,a as p,b as y,c as f,d as u,e as m,f as C,g as c,h as o,i as r,j as l,k as s,l as h,m as w,n as d,o as b,v as P,x as O,y as g,z as R}from"./chunk-ISYYRGEH.mjs";var x=(()=>{let e=class e{constructor(){this.MovieDetailsList=[{id:0,Name:"The Shawshank Redemption",Genre:"Drama",Year:"1994",photo:"../assets/images/TSR.jpeg",Rating:4.9,Review:"This timeless story of hope, friendship, and redemption in a maximum-security prison is a compelling testament to the human spirit."},{id:1,Name:"The Godfather",Genre:"Crime, Drama",Year:"1972",photo:"../assets/images/Godfather.jpeg",Rating:4.8,Review:"Chronicles the Corleone family under patriarch Vito Corleone, focusing on the transformation of Michael Corleone from reluctant outsider to ruthless mafia boss."},{id:2,Name:"Schindler List",Genre:"Biography, Drama, History",Year:"1993",photo:"../assets/images/SList.jpeg",Rating:4.9,Review:"Steven Spielberg masterpiece about Oskar Schindler, who saved over a thousand Polish Jews during the Holocaust."},{id:3,Name:"The Dark Knight",Genre:"Action, Crime, Drama",Year:"2008",photo:"../assets/images/TDK.jpeg",Rating:4.8,Review:"In the second installment of Christopher Nolan Batman trilogy, Batman must accept one of the greatest psychological and physical tests when he faces off against the Joker."},{id:4,Name:"Inception",Genre:"Action, Adventure, Sci-Fi",Year:"2010",photo:"../assets/images/Inception.jpeg",Rating:4.7,Review:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."},{id:5,Name:"Forrest Gump",Genre:"Drama, Romance",Year:"1994",photo:"../assets/images/TFG.jpeg",Rating:4.7,Review:"The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75."},{id:6,Name:"The Lord of the Rings: The Return of the King ",Genre:"Adventure, Fantasy",Year:"2003",photo:"../assets/images/TLOR.jpeg",Rating:4.8,Review:"Gandalf and Aragorn lead the World of Men against Sauron army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."},{id:7,Name:"Pulp Fiction",Genre:"Crime, Drama",Year:"1994",photo:"../assets/images/PF.jpeg",Rating:4.7,Review:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."},{id:8,Name:"Spirited Away",Genre:"Animation, Adventure, Family",Year:"2001",photo:"../assets/images/SA.jpeg",Rating:4.7,Review:"In this animated feature by Hayao Miyazaki, ten-year-old Chihiro and her parents stumble upon a seemingly abandoned amusement park."},{id:9,Name:"The Matrix",Genre:"Action, Sci-Fi",Year:"1999",photo:"../assets/images/TM.jpeg",Rating:4.7,Review:"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."},{id:10,Name:"Parasite",Genre:"Comedy, Drama, Thriller",Year:"2019",photo:"../assets/images/TP.jpeg",Rating:4.8,Review:"This South Korean black comedy thriller by Bong Joon-ho explores class divide and social inequality through the intertwining lives of two families\u2014the wealthy Parks and the destitute Kims. The film is a masterful commentary on the dynamics of capitalism, filled with unexpected twists and sharp social critique, making it a groundbreaking achievement in cinema."},{id:11,Name:"Gladiator",Genre:" Action, Adventure, Drama",Year:"2000",photo:"../assets/images/TG.jpeg",Rating:4.7,Review:'Directed by Ridley Scott, this epic historical drama stars Russell Crowe as Maximus Decimus Meridius, a betrayed Roman general who seeks vengeance against the corrupt emperor who murdered his family and sent him into slavery. "Gladiator" is celebrated for its intense performances, grandiose scale, compelling story of revenge and honor, and its revival of the historical epic genre in Hollywood.'}]}getAllMovieDetails(){return this.MovieDetailsList}getMovieinformationById(a){return this.MovieDetailsList.find(n=>n.id===a)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var k=(()=>{let e=class e{constructor(){this.route=f(_),this.movieInfo=f(x);let a=Number(this.route.snapshot.params.id);this.routerid=this.movieInfo.getMovieinformationById(a)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["app-details"]],standalone:!0,features:[d],decls:11,vars:3,consts:[[1,"listing-photo",3,"src"],[1,"listing-features"],[1,"section-heading"]],template:function(n,i){n&1&&(o(0,"article"),l(1,"img",0),o(2,"section",1)(3,"h2",2),s(4,"Movie Rating and Brief Review"),r(),o(5,"ul")(6,"li"),s(7),r(),l(8,"br"),o(9,"li"),s(10),r()()()()),n&2&&(m(),c("src",i.routerid==null?null:i.routerid.photo,u),m(6),h("Rating for the following Movie : ",i.routerid==null?null:i.routerid.Rating,"/5 "),m(3),h("Public Review : ",i.routerid==null?null:i.routerid.Review," "))},dependencies:[g],styles:["article[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100vh}.listing-photo[_ngcontent-%COMP%]{max-width:100%;height:auto;border-radius:20px;box-shadow:0 4px 8px #0000001a}.listing-heading[_ngcontent-%COMP%]{font-size:36pt;font-weight:600;margin-bottom:20px;color:var(--primary-color)}.listing-features[_ngcontent-%COMP%] > .section-heading[_ngcontent-%COMP%]{color:var(--secondary-color);font-size:22pt;margin-bottom:20px}.listing-features[_ngcontent-%COMP%]{margin-bottom:30px}.listing-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16pt;margin-bottom:10px}li[_ngcontent-%COMP%]{list-style-type:circle;margin-left:20px}.listing-apply[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]{font-size:20pt;margin-bottom:20px}label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{display:block;margin-bottom:20px}label[_ngcontent-%COMP%]{color:var(--secondary-color);font-weight:600;text-transform:uppercase;font-size:14pt}input[_ngcontent-%COMP%]{font-size:18pt;padding:12px;width:100%;border:none;border-bottom:2px solid var(--secondary-color);background-color:#f9f9f9}@media (max-width: 1024px){.listing-photo[_ngcontent-%COMP%]{width:100%;margin-left:0}.listing-heading[_ngcontent-%COMP%], .listing-features[_ngcontent-%COMP%] > .section-heading[_ngcontent-%COMP%], .listing-apply[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]{font-size:28pt}.listing-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14pt}}"]});let t=e;return t})();var Y=t=>["/details",t],F=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["app-movieinformation"]],inputs:{MovieInfo:"MovieInfo"},standalone:!0,features:[d],decls:9,vars:7,consts:[[1,"listing"],["alt","Exterior photo of movie",1,"listing-photo",3,"src"],[1,"listing-heading"],[1,"listing-location"],[1,"link-container"],[1,"router-link",3,"routerLink"]],template:function(n,i){n&1&&(o(0,"section",0),l(1,"img",1),o(2,"h2",2),s(3),r(),o(4,"p",3),s(5),r(),o(6,"div",4)(7,"a",5),s(8,"Click Here To Read The Movie Review"),r()()()),n&2&&(m(),c("src",i.MovieInfo.photo,u),m(2),h(" ",i.MovieInfo.Name,""),m(2),w("",i.MovieInfo.Genre,' "',i.MovieInfo.Year,'"'),m(2),c("routerLink",b(5,Y,i.MovieInfo.id)))},dependencies:[v,D],styles:[".listing[_ngcontent-%COMP%]{background:var(--accent-color);border-radius:30px;padding-bottom:30px;box-shadow:0 4px 6px #0000001a;overflow:hidden;transition:transform .3s ease,box-shadow .3s ease;transform:scale(1)}.listing[_ngcontent-%COMP%]:hover{transform:scale(1.07);box-shadow:0 8px 12px #0003}.listing-heading[_ngcontent-%COMP%]{color:var(--primary-color);font-size:24px;font-weight:700;text-align:center}.listing-photo[_ngcontent-%COMP%]{height:auto;max-height:250px;width:100%;object-fit:cover;border-radius:30px 30px 0 0}.listing-location[_ngcontent-%COMP%]{color:var(--primary-color);padding:20px;font-size:24px;font-weight:700;text-align:center}.link-container[_ngcontent-%COMP%]{text-align:center}.router-link[_ngcontent-%COMP%]{font-size:15px;font-weight:700;text-align:center;color:#05386b;text-decoration:none;transition:color .3s ease-in-out,text-decoration .3s ease-in-out}.router-link[_ngcontent-%COMP%]:hover{font-size:15px;font-weight:700;text-align:center;color:#007bff;text-decoration:underline;cursor:pointer}"]});let t=e;return t})();function E(t,e){if(t&1&&l(0,"app-movieinformation",5),t&2){let L=e.$implicit;c("MovieInfo",L)}}var A=(()=>{let e=class e{constructor(){this.MovieInfoList=[],this.MovieInfoin=f(x),this.MovieInfoList=this.MovieInfoin.getAllMovieDetails()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["app-home"]],standalone:!0,features:[d],decls:8,vars:1,consts:[["action","",1,"search-bar"],["type","search","name","search","pattern",".*S.*","required",""],["type","submit",1,"search-btn"],[1,"results"],[3,"MovieInfo",4,"ngFor","ngForOf"],[3,"MovieInfo"]],template:function(n,i){n&1&&(o(0,"section")(1,"form",0),l(2,"input",1),o(3,"button",2)(4,"span"),s(5,"Search"),r()()()(),o(6,"section",3),C(7,E,1,1,"app-movieinformation",4),r()),n&2&&(m(7),c("ngForOf",i.MovieInfoList))},dependencies:[g,O,F],styles:[".results[_ngcontent-%COMP%]{display:grid;gap:20px;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));margin-top:30px;justify-content:center}@media (min-width: 500px) and (max-width: 768px){.results[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}input[type=text][_ngcontent-%COMP%]{width:auto;flex-grow:1}}@media (max-width: 499px){.results[_ngcontent-%COMP%]{grid-template-columns:1fr}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}input[type=text][_ngcontent-%COMP%]{width:100%;margin-right:0}}"]});let t=e;return t})();var G=(()=>{let e=class e{constructor(){this.title="Best Movie Showcase"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:8,vars:0,consts:[[1,"brand-name"],["src"," ../assets/images/logo.svg","alt","logo","aria-hidden","true",1,"brand-logo"],[1,"content"]],template:function(n,i){n&1&&(o(0,"main")(1,"header",0),l(2,"img",1)(3,"br"),o(4,"p"),s(5,"Best Movies To Watch"),r()(),o(6,"section",2),l(7,"router-outlet"),r()())},dependencies:[g,I,v],styles:[".brand-logo[_ngcontent-%COMP%]{width:auto;height:85px;transition:transform .3s ease-in-out;align-items:center}.brand-logo[_ngcontent-%COMP%]:hover{transform:scale(1.05)}[_nghost-%COMP%]{--content-padding: 10px;--shadow-color: rgba(5, 56, 107, 1)}header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100px;padding:0 var(--content-padding);box-shadow:0 5px 25px var(--shadow-color)}"]});let t=e;return t})();var j=[{path:"",component:A,title:"Home Page"},{path:"details/:id",component:k,title:"Details Page"}];var z={providers:[T(j)]};var B={providers:[S()]},N=P(z,B);var H=()=>R(G,N),De=H;export{De as a};
