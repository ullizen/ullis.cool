import{S as SvelteComponent,i as init,s as safe_not_equal,k as element,q as text,a as space,l as claim_element,m as children,r as claim_text,h as detach,c as claim_space,n as attr,b as insert_hydration,F as append_hydration,A as noop,H as listen,u as set_data,I as run_all,v as create_component,w as claim_component,x as mount_component,f as transition_in,t as transition_out,y as destroy_component}from"../../chunks/index-1fab3784.js";const Intro_svelte_svelte_type_style_lang="";function create_fragment$3(l){let e,t,c,o,n,a,h,g,d,m,v,f;return{c(){e=element("div"),t=element("div"),c=element("span"),o=text(":)"),n=space(),a=element("h1"),h=text("I'm a developer that loves data visualization & being creative, while also getting things done."),g=space(),d=element("p"),m=text("Scroll down to continue "),v=element("span"),f=text("_"),this.h()},l(r){e=claim_element(r,"DIV",{class:!0});var k=children(e);t=claim_element(k,"DIV",{class:!0});var _=children(t);c=claim_element(_,"SPAN",{class:!0});var y=children(c);o=claim_text(y,":)"),y.forEach(detach),n=claim_space(_),a=claim_element(_,"H1",{class:!0});var E=children(a);h=claim_text(E,"I'm a developer that loves data visualization & being creative, while also getting things done."),E.forEach(detach),g=claim_space(_),d=claim_element(_,"P",{});var u=children(d);m=claim_text(u,"Scroll down to continue "),v=claim_element(u,"SPAN",{class:!0});var i=children(v);f=claim_text(i,"_"),i.forEach(detach),u.forEach(detach),_.forEach(detach),k.forEach(detach),this.h()},h(){attr(c,"class","happy-face svelte-1sgdcfs"),attr(a,"class","svelte-1sgdcfs"),attr(v,"class","underscore svelte-1sgdcfs"),attr(t,"class","container svelte-1sgdcfs"),attr(e,"class","wrapper svelte-1sgdcfs")},m(r,k){insert_hydration(r,e,k),append_hydration(e,t),append_hydration(t,c),append_hydration(c,o),append_hydration(t,n),append_hydration(t,a),append_hydration(a,h),append_hydration(t,g),append_hydration(t,d),append_hydration(d,m),append_hydration(d,v),append_hydration(v,f)},p:noop,i:noop,o:noop,d(r){r&&detach(e)}}}class Intro extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment$3,safe_not_equal,{})}}const Calculator_svelte_svelte_type_style_lang="";function create_fragment$2(l){let e,t,c,o,n,a,h,g,d,m,v,f,r,k,_,y,E,u,i,s,j,p,$,A,F,T,z,K,U,L,G,b,V,J,Q,D,X,Y,q,Z,ee,C,te,ne,x,H,ae,le,P,ce,ie,R,re,se,M,oe,de,_e;return{c(){e=element("div"),t=element("div"),c=text(l[0]),o=space(),n=element("div"),a=element("div"),h=element("button"),g=text("7"),d=space(),m=element("button"),v=text("8"),f=space(),r=element("button"),k=text("9"),_=space(),y=element("button"),E=text("\xF7"),u=space(),i=element("div"),s=element("button"),j=text("4"),p=space(),$=element("button"),A=text("5"),F=space(),T=element("button"),z=text("6"),K=space(),U=element("button"),L=text("\xD7"),G=space(),b=element("div"),V=element("button"),J=text("1"),Q=space(),D=element("button"),X=text("2"),Y=space(),q=element("button"),Z=text("3"),ee=space(),C=element("button"),te=text("-"),ne=space(),x=element("div"),H=element("button"),ae=text("0"),le=space(),P=element("button"),ce=text("\u2022"),ie=space(),R=element("button"),re=text("="),se=space(),M=element("button"),oe=text("+"),this.h()},l(W){e=claim_element(W,"DIV",{class:!0});var S=children(e);t=claim_element(S,"DIV",{class:!0});var pe=children(t);c=claim_text(pe,l[0]),pe.forEach(detach),o=claim_space(S),n=claim_element(S,"DIV",{class:!0});var w=children(n);a=claim_element(w,"DIV",{class:!0});var B=children(a);h=claim_element(B,"BUTTON",{class:!0});var he=children(h);g=claim_text(he,"7"),he.forEach(detach),d=claim_space(B),m=claim_element(B,"BUTTON",{class:!0});var me=children(m);v=claim_text(me,"8"),me.forEach(detach),f=claim_space(B),r=claim_element(B,"BUTTON",{class:!0});var ue=children(r);k=claim_text(ue,"9"),ue.forEach(detach),_=claim_space(B),y=claim_element(B,"BUTTON",{class:!0});var ve=children(y);E=claim_text(ve,"\xF7"),ve.forEach(detach),B.forEach(detach),u=claim_space(w),i=claim_element(w,"DIV",{class:!0});var N=children(i);s=claim_element(N,"BUTTON",{class:!0});var ye=children(s);j=claim_text(ye,"4"),ye.forEach(detach),p=claim_space(N),$=claim_element(N,"BUTTON",{class:!0});var fe=children($);A=claim_text(fe,"5"),fe.forEach(detach),F=claim_space(N),T=claim_element(N,"BUTTON",{class:!0});var ke=children(T);z=claim_text(ke,"6"),ke.forEach(detach),K=claim_space(N),U=claim_element(N,"BUTTON",{class:!0});var be=children(U);L=claim_text(be,"\xD7"),be.forEach(detach),N.forEach(detach),G=claim_space(w),b=claim_element(w,"DIV",{class:!0});var I=children(b);V=claim_element(I,"BUTTON",{class:!0});var xe=children(V);J=claim_text(xe,"1"),xe.forEach(detach),Q=claim_space(I),D=claim_element(I,"BUTTON",{class:!0});var ge=children(D);X=claim_text(ge,"2"),ge.forEach(detach),Y=claim_space(I),q=claim_element(I,"BUTTON",{class:!0});var Ee=children(q);Z=claim_text(Ee,"3"),Ee.forEach(detach),ee=claim_space(I),C=claim_element(I,"BUTTON",{class:!0});var $e=children(C);te=claim_text($e,"-"),$e.forEach(detach),I.forEach(detach),ne=claim_space(w),x=claim_element(w,"DIV",{class:!0});var O=children(x);H=claim_element(O,"BUTTON",{class:!0});var Te=children(H);ae=claim_text(Te,"0"),Te.forEach(detach),le=claim_space(O),P=claim_element(O,"BUTTON",{class:!0});var je=children(P);ce=claim_text(je,"\u2022"),je.forEach(detach),ie=claim_space(O),R=claim_element(O,"BUTTON",{class:!0});var Se=children(R);re=claim_text(Se,"="),Se.forEach(detach),se=claim_space(O),M=claim_element(O,"BUTTON",{class:!0});var we=children(M);oe=claim_text(we,"+"),we.forEach(detach),O.forEach(detach),w.forEach(detach),S.forEach(detach),this.h()},h(){attr(t,"class","display svelte-78nvij"),attr(h,"class","svelte-78nvij"),attr(m,"class","svelte-78nvij"),attr(r,"class","svelte-78nvij"),attr(y,"class","svelte-78nvij"),attr(a,"class","row svelte-78nvij"),attr(s,"class","svelte-78nvij"),attr($,"class","svelte-78nvij"),attr(T,"class","svelte-78nvij"),attr(U,"class","svelte-78nvij"),attr(i,"class","row svelte-78nvij"),attr(V,"class","svelte-78nvij"),attr(D,"class","svelte-78nvij"),attr(q,"class","svelte-78nvij"),attr(C,"class","svelte-78nvij"),attr(b,"class","row svelte-78nvij"),attr(H,"class","svelte-78nvij"),attr(P,"class","svelte-78nvij"),attr(R,"class","svelte-78nvij"),attr(M,"class","plus svelte-78nvij"),attr(x,"class","row svelte-78nvij"),attr(n,"class","buttons svelte-78nvij"),attr(e,"class","calculator svelte-78nvij")},m(W,S){insert_hydration(W,e,S),append_hydration(e,t),append_hydration(t,c),append_hydration(e,o),append_hydration(e,n),append_hydration(n,a),append_hydration(a,h),append_hydration(h,g),append_hydration(a,d),append_hydration(a,m),append_hydration(m,v),append_hydration(a,f),append_hydration(a,r),append_hydration(r,k),append_hydration(a,_),append_hydration(a,y),append_hydration(y,E),append_hydration(n,u),append_hydration(n,i),append_hydration(i,s),append_hydration(s,j),append_hydration(i,p),append_hydration(i,$),append_hydration($,A),append_hydration(i,F),append_hydration(i,T),append_hydration(T,z),append_hydration(i,K),append_hydration(i,U),append_hydration(U,L),append_hydration(n,G),append_hydration(n,b),append_hydration(b,V),append_hydration(V,J),append_hydration(b,Q),append_hydration(b,D),append_hydration(D,X),append_hydration(b,Y),append_hydration(b,q),append_hydration(q,Z),append_hydration(b,ee),append_hydration(b,C),append_hydration(C,te),append_hydration(n,ne),append_hydration(n,x),append_hydration(x,H),append_hydration(H,ae),append_hydration(x,le),append_hydration(x,P),append_hydration(P,ce),append_hydration(x,ie),append_hydration(x,R),append_hydration(R,re),append_hydration(x,se),append_hydration(x,M),append_hydration(M,oe),de||(_e=[listen(h,"click",l[3]),listen(m,"click",l[4]),listen(r,"click",l[5]),listen(y,"click",l[6]),listen(s,"click",l[7]),listen($,"click",l[8]),listen(T,"click",l[9]),listen(U,"click",l[10]),listen(V,"click",l[11]),listen(D,"click",l[12]),listen(q,"click",l[13]),listen(C,"click",l[14]),listen(H,"click",l[15]),listen(P,"click",l[16]),listen(R,"click",l[2]),listen(M,"click",l[17])],de=!0)},p(W,[S]){S&1&&set_data(c,W[0])},i:noop,o:noop,d(W){W&&detach(e),de=!1,run_all(_e)}}}function instance($$self,$$props,$$invalidate){let result="";function input(l){result.length>12||$$invalidate(0,result+=l)}function equals(){const newResult=eval(result).toString().slice(0,13);$$invalidate(0,result=newResult)}const click_handler=()=>input(7),click_handler_1=()=>input(8),click_handler_2=()=>input(9),click_handler_3=()=>input("/"),click_handler_4=()=>input(4),click_handler_5=()=>input(5),click_handler_6=()=>input(6),click_handler_7=()=>input("*"),click_handler_8=()=>input(1),click_handler_9=()=>input(2),click_handler_10=()=>input(3),click_handler_11=()=>input("-"),click_handler_12=()=>input(0),click_handler_13=()=>input("."),click_handler_14=()=>input("+");return[result,input,equals,click_handler,click_handler_1,click_handler_2,click_handler_3,click_handler_4,click_handler_5,click_handler_6,click_handler_7,click_handler_8,click_handler_9,click_handler_10,click_handler_11,click_handler_12,click_handler_13,click_handler_14]}class Calculator extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment$2,safe_not_equal,{})}}const Section_svelte_svelte_type_style_lang="";function create_fragment$1(l){let e,t,c,o,n,a,h,g,d,m,v,f,r,k,_,y,E,u,i;return u=new Calculator({}),{c(){e=element("div"),t=element("div"),c=element("h2"),o=text("Work experience"),n=space(),a=element("h3"),h=text("Valtech"),g=space(),d=element("p"),m=text("3 years"),v=space(),f=element("p"),r=text("Worked on over 14 projects with Riksbanken, Cancerfonden, Mycronic, MSB, Eton Shirts, Lantm\xE4nnen, Svea Ekonomi, T\xE4by kommun, SKR, Svensk Fastighetsf\xF6rmedling"),k=space(),_=element("h3"),y=text("Here's a calculator if you need one:"),E=space(),create_component(u.$$.fragment),this.h()},l(s){e=claim_element(s,"DIV",{class:!0});var j=children(e);t=claim_element(j,"DIV",{class:!0});var p=children(t);c=claim_element(p,"H2",{});var $=children(c);o=claim_text($,"Work experience"),$.forEach(detach),n=claim_space(p),a=claim_element(p,"H3",{});var A=children(a);h=claim_text(A,"Valtech"),A.forEach(detach),g=claim_space(p),d=claim_element(p,"P",{});var F=children(d);m=claim_text(F,"3 years"),F.forEach(detach),v=claim_space(p),f=claim_element(p,"P",{});var T=children(f);r=claim_text(T,"Worked on over 14 projects with Riksbanken, Cancerfonden, Mycronic, MSB, Eton Shirts, Lantm\xE4nnen, Svea Ekonomi, T\xE4by kommun, SKR, Svensk Fastighetsf\xF6rmedling"),T.forEach(detach),k=claim_space(p),_=claim_element(p,"H3",{});var z=children(_);y=claim_text(z,"Here's a calculator if you need one:"),z.forEach(detach),E=claim_space(p),claim_component(u.$$.fragment,p),p.forEach(detach),j.forEach(detach),this.h()},h(){attr(t,"class","container svelte-1qjc5s7"),attr(e,"class","wrapper svelte-1qjc5s7")},m(s,j){insert_hydration(s,e,j),append_hydration(e,t),append_hydration(t,c),append_hydration(c,o),append_hydration(t,n),append_hydration(t,a),append_hydration(a,h),append_hydration(t,g),append_hydration(t,d),append_hydration(d,m),append_hydration(t,v),append_hydration(t,f),append_hydration(f,r),append_hydration(t,k),append_hydration(t,_),append_hydration(_,y),append_hydration(t,E),mount_component(u,t,null),i=!0},p:noop,i(s){i||(transition_in(u.$$.fragment,s),i=!0)},o(s){transition_out(u.$$.fragment,s),i=!1},d(s){s&&detach(e),destroy_component(u)}}}class Section extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment$1,safe_not_equal,{})}}function create_fragment(l){let e,t,c,o;return e=new Intro({}),c=new Section({}),{c(){create_component(e.$$.fragment),t=space(),create_component(c.$$.fragment)},l(n){claim_component(e.$$.fragment,n),t=claim_space(n),claim_component(c.$$.fragment,n)},m(n,a){mount_component(e,n,a),insert_hydration(n,t,a),mount_component(c,n,a),o=!0},p:noop,i(n){o||(transition_in(e.$$.fragment,n),transition_in(c.$$.fragment,n),o=!0)},o(n){transition_out(e.$$.fragment,n),transition_out(c.$$.fragment,n),o=!1},d(n){destroy_component(e,n),n&&detach(t),destroy_component(c,n)}}}class Page extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export{Page as default};