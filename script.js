const navbar=document.querySelector('.navbar');
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');
const glow=document.querySelector('.cursor-glow');
const card=document.querySelector('.profile-card');

menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

window.addEventListener('scroll',()=>{
  navbar.classList.toggle('scrolled',window.scrollY>30);
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{
  el.style.transitionDelay=`${Math.min(i%5*80,320)}ms`;
  observer.observe(el);
});

window.addEventListener('mousemove',e=>{
  glow.style.left=e.clientX+'px';
  glow.style.top=e.clientY+'px';
  if(card && window.innerWidth>900){
    const r=card.getBoundingClientRect();
    const x=(e.clientX-(r.left+r.width/2))/25;
    const y=(e.clientY-(r.top+r.height/2))/25;
    card.style.transform=`perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) translateY(${Math.sin(Date.now()/800)*3}px)`;
  }
});
window.addEventListener('mouseleave',()=>{if(card)card.style.transform=''});
