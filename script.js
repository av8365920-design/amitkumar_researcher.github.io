const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuBtn){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const filters=document.querySelectorAll('.filter');
const pubs=document.querySelectorAll('.pub');
filters.forEach(btn=>{
  btn.addEventListener('click',()=>{
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    pubs.forEach(p=>{
      p.style.display=(filter==='all'||p.classList.contains(filter))?'grid':'none';
    });
  });
});

const top=document.querySelector('.top');
window.addEventListener('scroll',()=>top.classList.toggle('show',window.scrollY>500));
top.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.getElementById('year').textContent=new Date().getFullYear();
