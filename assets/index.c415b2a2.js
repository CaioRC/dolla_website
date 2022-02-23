var E=Object.defineProperty;var z=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var L=(n,o,r)=>o in n?E(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,x=(n,o)=>{for(var r in o||(o={}))P.call(o,r)&&L(n,r,o[r]);if(z)for(var r of z(o))D.call(o,r)&&L(n,r,o[r]);return n};import{s as t,M as V,a as U,L as k,r as h,j as i,b as e,c as p,d as Y,F as S,I as G,e as J,f as q,g as K,h as Q,i as X,k as Z,l as ee,u as te,B as ne,R as ie,m as B,n as oe,o as re}from"./vendor.3b1dbbe6.js";const ae=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}};ae();const se=t.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1 ;

  :before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0% , rgba(0,0,0,0.6) 100%) , linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`,de=t.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,ce=t.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
  `,le=t.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,pe=t.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`,fe=t.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`,he=t.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,xe=t(V)`
  margin-left: 8px;
  font-size: 20px;
`,me=t(U)`
  margin-left: 8px;
  font-size: 20px;
`;var ue="/dolla_website/assets/video.7a149619.mp4";const j=t(k)`
  border-radius: 50px;
  background: ${({primary:n})=>n?"#01BF71":"#010606"};
  white-space: nowrap;
  padding:  ${({big:n})=>n?"14px 48px":"12px 30px"};
  color:  ${({dark:n})=>n?"#010606":"#fff"};
  font-size:  ${({fontBig:n})=>n?"20px":"16px"};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary:n})=>n?"#fff":"#01BF71"};
  }
  `,ge=()=>{const[n,o]=h.exports.useState(!1),r=()=>{o(!n)};return i(se,{id:"home",children:[e(de,{children:e(ce,{autoPlay:!0,loop:!0,muted:!0,src:ue})}),i(le,{children:[e(pe,{children:"Virtual Banking Made Easy"}),e(fe,{children:"Sign up for a new account today and receive $250 in credit towards your next payment."}),e(he,{children:i(j,{primary:!0,dark:!0,to:"signup",smooth:!0,duration:500,spy:!0,offset:-80,onMouseEnter:r,onMouseLeave:r,children:["Get Started ",n?e(xe,{}):e(me,{})]})})]})]})},be=t.div`
 color: #fff;
 background: ${({lightBg:n})=>n?"#f9f9f9":"#010606"};

 @media screen and (max-width: 768px){
   padding: 100px 0;
 }
`,we=t.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`,ve=t.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart:n})=>n?"'col2 col1'":"'col1 col2'"};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart:n})=>n?"'col1' 'col2'":"'col1 col1' 'col2 col2'"};
  }
`,ye=t.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`,ke=t.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`,Se=t.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`,ze=t.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`,Le=t.h1`
  margin-bottom: 24px;
  font-size: 48;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText:n})=>n?"#f7f8fa":"#010606"};
  
  @media screen and (max-width: 480px){
      font-size: 32px;
  }
`,Be=t.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText:n})=>n?"#010606":"#fff"};
`,Fe=t.div`
  display: flex;
  justify-content: flex-start;
`,Ie=t.div`
  max-width: 555px;
  height: 100%;
`,Te=t.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`,g=n=>{const{id:o,lightBg:r,lightText:c,lightTextDesc:a,topLine:s,headline:l,description:A,buttonLabel:M,imgStart:O,img:$,alt:N,dark:_,primary:R,darkText:W}=n;return console.log(o),e(be,{lightBg:r,id:o,children:e(we,{children:i(ve,{imgStart:O,children:[e(ye,{children:i(Se,{children:[e(ze,{children:s}),e(Le,{lightText:c,children:l}),e(Be,{darkText:W,children:A}),e(Fe,{children:e(j,{to:"home",smooth:!0,duration:500,spy:!0,offset:-80,primary:R,dark:_,children:M})})]})}),e(ke,{children:e(Ie,{children:e(Te,{src:$,alt:N})})})]})})})},Ce=t.nav`
  background: ${({scrollNav:n})=>n?"#000":"transparent"};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10 ;

  @media screen and(max-width: 960){
    transition: 0.8s all ease;
  }
  `,je=t.div`
  display:flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`,He=t(p)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`,Ae=t.div`
  display : none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff
  }
`,Me=t.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right:-22px;
  @media screen and (max-width: 768px){
    display: none;
  }
`,Oe=t.li`
  height: 80px;
`,$e=t(k)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71
  }

`,Ne=t.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`,_e=t(p)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: nonde;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606
  }
`,H=()=>{Y.scrollToTop()},Re=({navBarItems:n,toggle:o})=>{const[r,c]=h.exports.useState(!1),a=()=>{window.scrollY>=80?c(!0):c(!1)};return h.exports.useEffect(()=>{window.addEventListener("scroll",a)}),e(S,{children:e(G.Provider,{value:{color:"#fff"},children:e(Ce,{scrollNav:r,children:i(je,{children:[e(He,{to:"/",onClick:H,children:"dolla"}),e(Ae,{onClick:o,children:e(J,{})}),e(Me,{children:n.map((s,l)=>e(Oe,{children:e($e,{to:s.url,smooth:!0,duration:500,spy:!0,offset:-80,children:s.name})},s.name+l))}),e(Ne,{children:e(_e,{to:"/signin",children:"Sign In"})})]})})})})},We=t.div`
  position: fixed;
  display: grid;
  height: 100%;
  width: 100%;
  z-index: 999;
  background: #0d0d0d;
  align-items: center;
  top: 0;
  left: 0;
  opacity: ${({isOpen:n})=>n?"1":"0"};
  top: ${({isOpen:n})=>n?"0":"-100%"};
  transition: 0.3s ease-in-out;
`,Ee=t(q)`
  color: #fff;
`,Pe=t.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`,De=t.div`
  color: #fff;
`,Ve=t.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`,Ue=t(k)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`,Ye=t.div`
  display: flex;
  justify-content: center;
`,Ge=t(p)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`,Je=({isOpen:n,toggle:o,navBarItems:r})=>i(We,{isOpen:n,onClick:o,children:[e(Pe,{onClick:o,children:e(Ee,{})}),i(De,{children:[e(Ve,{children:r.map((c,a)=>e(Ue,{smooth:!0,duration:500,spy:!0,offset:-80,to:c.url,onClick:o,children:c.name},c.url+a))}),e(Ye,{children:e(Ge,{to:"/signin",children:"Sign In"})})]})]}),F=[{url:"about",name:"About"},{url:"discover",name:"Discover"},{url:"services",name:"Services"},{url:"signup",name:"Sign Up"}];var qe="/dolla_website/assets/transactions.b48d5aa9.svg",Ke="/dolla_website/assets/Account.2238d2ab.svg",Qe="/dolla_website/assets/Login.f0b814c1.svg";const Xe={id:"about",lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Premium Bank",headline:"Unlimited Transactions with zero fees",description:"Get acess to our exclusive app that allows you to send unlimited transactions without getting charged any fees",buttonLabel:"Get started",imgStart:!0,img:qe,alt:"Car",dark:!0,primary:!0,darkText:!1},Ze={id:"discover",lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Unlimited Access",headline:"Login to your account at any time",description:"We have you covered no matter where you are located. All you need is an internet connection and a phone or computer",buttonLabel:"Learn More",imgStart:!0,img:Ke,alt:"Account",dark:!1,primary:!1,darkText:!0},et={id:"signup",lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Join our Team",headline:"Creating an account is extremely easy",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you' ready to go.",buttonLabel:"Start Now",imgStart:!1,img:Qe,alt:"Login",dark:!1,primary:!1,darkText:!0},tt=t.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px){
    height: 1100px;
  }

  
  @media screen and (max-width: 480px){
    height: 1300px;
  }
`,nt=t.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`,b=t.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out ;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }


`,w=t.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`,it=t.h1`
  font-size: 2.5rem ;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
      font-size: 2rem;
  }
`,v=t.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`,y=t.p`
  font-size: 1rem;
  text-align: center;
`;var ot="/dolla_website/assets/Office.bf1099b4.svg",rt="/dolla_website/assets/OffRoad.a51c8530.svg",at="/dolla_website/assets/Benefits.2aae3562.svg";const st=()=>i(tt,{id:"services",children:[e(it,{children:"Our Services"}),i(nt,{children:[i(b,{children:[e(w,{src:rt}),e(v,{children:"Reduce expenses"}),e(y,{children:"We Help reduce your fees and increase your overall revenue,"})]}),i(b,{children:[e(w,{src:ot}),e(v,{children:"Virtual Offices"}),e(y,{children:"You can access out platform online anywhere in the world."})]}),i(b,{children:[e(w,{src:at}),e(v,{children:"Premium Benefits"}),e(y,{children:"Unlock our special membership card that returns 5%"})]})]})]}),dt=t.footer`
 background-color: #101522;

`,ct=t.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`,lt=t.div`
  display: flex;
  justify-content: center;

  @media screen and ( max-width: 820px){
    padding-top: 32px;
  }
`,I=t.div`
  display: flex;

  @media screen and ( max-width: 820px){
    flex-direction: column;
  }
`,m=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and ( max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`,u=t.h1`
  font-size: 14px;
  margin-bottom: 16px;
`,d=t(p)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`,pt=t.section`
  max-width: 1000px;
  width: 100%;
`,ft=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`,ht=t(p)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`,xt=t.small`
  color: #fff;
  margin-bottom: 16px;
`,mt=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`,f=t.a`
  color: #fff;
  font-size: 24px;
`,ut=()=>e(dt,{children:i(ct,{children:[i(lt,{children:[i(I,{children:[i(m,{children:[e(u,{children:"About Us"}),e(d,{to:"/",children:"How it works"}),e(d,{to:"/",children:"Testimonials"}),e(d,{to:"/",children:"Careers"}),e(d,{to:"/",children:"Investors"}),e(d,{to:"/",children:"Terms of Service"})]}),i(m,{children:[e(u,{children:"Contact Us"}),e(d,{to:"/",children:"Contact"}),e(d,{to:"/",children:"Support"}),e(d,{to:"/",children:"Destinations"}),e(d,{to:"/",children:"Sponsorships"})]})]}),i(I,{children:[i(m,{children:[e(u,{children:"Videos"}),e(d,{to:"/",children:"Submit Video"}),e(d,{to:"/",children:"Ambassadors"}),e(d,{to:"/",children:"Agency"}),e(d,{to:"/",children:"Influencer"})]}),i(m,{children:[e(u,{children:"Social Media"}),e(d,{to:"/",children:"Instagram"}),e(d,{to:"/",children:"Facebook"}),e(d,{to:"/",children:"Youtube"}),e(d,{to:"/",children:"Twitter"})]})]})]}),e(pt,{children:i(ft,{children:[e(ht,{to:"/",onClick:H,children:"dolla"}),e(xt,{children:`dolla \xA9 ${new Date().getFullYear()} all rights reserved`}),i(mt,{children:[e(f,{href:"/",target:"_blank","aria-label":"Facebook",children:e(K,{})}),e(f,{href:"/",target:"_blank","aria-label":"Instagram",children:e(Q,{})}),e(f,{href:"/",target:"_blank","aria-label":"Youtube",children:e(X,{})}),e(f,{href:"/",target:"_blank","aria-label":"Twitter",children:e(Z,{})}),e(f,{href:"/",target:"_blank","aria-label":"Linkedin",children:e(ee,{})})]})]})})]})});function gt(){const[n,o]=h.exports.useState(!1),r=()=>{o(!n)};return i(S,{children:[e(Je,{navBarItems:F,isOpen:n,toggle:r}),e(Re,{navBarItems:F,toggle:r}),e(ge,{}),e(g,x({},Xe)),e(g,x({},Ze)),e(st,{}),e(g,x({},et)),e(ut,{})]})}const bt=t.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1,147,86,1) 0%,
    rgba(10 , 201 , 122 , 1) 100%
  );
`,wt=t.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px){
    height: 80%;
  }
`,vt=t(p)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
  }
`,yt=t.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px){
    padding: 10px;
  }
`,kt=t.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0 ,0 , 0.9);

  @media screen and (max-width: 400px){
    padding: 32px 32px;
  }
`,St=t.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`,T=t.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`,C=t.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`,zt=t.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`,Lt=t.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`,Bt=()=>e(bt,{children:i(wt,{children:[e(vt,{to:"/",children:"dolla"}),e(yt,{children:i(kt,{action:"#",children:[e(St,{children:"Sign in to your account"}),e(T,{htmlFor:"for",children:"Email"}),e(C,{type:"email",required:!0}),e(T,{htmlFor:"for",children:"Password"}),e(C,{type:"password",required:!0}),e(zt,{type:"submit",children:"Continue"}),e(Lt,{children:"Forgot password"})]})})]})});function Ft(){return te(),h.exports.useEffect(()=>{window.scrollTo(0,0)}),null}function It(){return i(S,{children:[e(Ft,{}),e(Bt,{})]})}function Tt(){return e(ne,{basename:"/dolla_website",children:i(ie,{children:[e(B,{path:"/",element:e(gt,{})}),e(B,{path:"/signin",element:e(It,{})})]})})}oe.render(e(re.StrictMode,{children:e(Tt,{})}),document.getElementById("root"));
