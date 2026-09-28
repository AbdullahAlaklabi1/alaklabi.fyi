(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '' || path === 'index.html') && href === 'index.html') a.classList.add('active');
    else if (href === path) a.classList.add('active');
  });

  document.querySelectorAll('.card-head').forEach(head => {
    head.addEventListener('click', () => head.parentElement.classList.toggle('open'));
    head.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); head.parentElement.classList.toggle('open'); }
    });
  });

  const input = document.querySelector('#terminal-input');
  const out = document.querySelector('#terminal-output');
  if (!input || !out) return;
  const commands = {
    help: `available commands:\n  about        open about\n  research     open research\n  publications open publications\n  dissertation open dissertation\n  cv           open cv\n  contact      open contact\n  clear        clear output`,
    about: 'index.html',
    research: 'research.html',
    publications: 'publications.html',
    dissertation: 'dissertation.html',
    cv: 'cv.html',
    contact: 'contact.html'
  };
  input.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const raw = input.value.trim();
    const cmd = raw.toLowerCase();
    if (!cmd) return;
    if (cmd === 'clear') out.textContent = '';
    else if (cmd in commands && cmd !== 'help') location.href = commands[cmd];
    else if (cmd === 'help') out.textContent = commands.help;
    else if (cmd === 'whoami') out.textContent = 'Abdullah Alaklabi — multimedia security researcher, lecturer, and Ph.D. candidate in Computer Science.';
    else if (cmd === 'ls') out.textContent = 'about/  research/  publications/  dissertation/  cv/  contact/';
    else out.textContent = `command not found: ${raw}\ntype 'help' for available commands.`;
    input.value = '';
  });
})();
