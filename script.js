(function(){
  const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(a=>{
    if((a.getAttribute('href')||'').toLowerCase()===file) a.classList.add('active');
  });
  const stamp=document.querySelector('[data-last-login]');
  if(stamp){
    const d=new Date();
    stamp.textContent=d.toLocaleString('en-US',{weekday:'short',month:'short',day:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'});
  }
})();
