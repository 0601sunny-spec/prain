const screens = {auth:document.querySelector('#authScreen'),connect:document.querySelector('#connectScreen'),app:document.querySelector('#appScreen')};
const showScreen = name => { Object.values(screens).forEach(s=>s.classList.remove('active')); screens[name].classList.add('active'); };
window.showPrainScreen = showScreen;
document.querySelector('#signupForm').addEventListener('submit',e=>{e.preventDefault();showScreen('connect')});
document.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>showScreen('connect')));
const installButton = document.querySelector('#installDiscordBot');
const installMessage = document.querySelector('#installMessage');
let installStarted = false;
installButton.addEventListener('click', () => {
  if (installStarted) {
    showScreen('connect');
    return;
  }

  const clientId = window.PRAIN_CONFIG?.discordClientId;
  if (!clientId || clientId === 'YOUR_DISCORD_APPLICATION_ID') {
    installMessage.textContent = '미리보기 모드로 다음 화면을 엽니다.';
    showScreen('connect');
    return;
  }

  const params = new URLSearchParams({
    client_id: clientId,
    scope: 'bot applications.commands',
    permissions: '84992',
    integration_type: '0',
  });
  window.open(`https://discord.com/oauth2/authorize?${params}`, '_blank', 'noopener,noreferrer');
  installStarted = true;
  installButton.textContent = '봇 설치를 마쳤어요 — 계속하기';
  installMessage.textContent = 'Discord 창에서 서버를 선택하고 승인한 뒤 이 버튼을 다시 눌러 주세요.';
});
document.querySelector('#enterDashboard').addEventListener('click',()=>showScreen('app'));
document.querySelectorAll('.link-btn,.channel-btn').forEach(b=>b.addEventListener('click',()=>{b.textContent=b.textContent==='연결하기'?'연결됨':'변경 완료';b.closest('.tool').classList.add('connected')}));
const names={dashboard:'아이디어 보드',ai:'AI 채팅',meeting:'회의 기록',community:'커뮤니티'};
function showView(name){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===name+'View'));document.querySelectorAll('.side-link').forEach(b=>b.classList.toggle('active',b.dataset.view===name));document.querySelector('#viewTitle').textContent=names[name]}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
document.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.jump)));
document.querySelector('#chatForm').addEventListener('submit',e=>{e.preventDefault();const input=document.querySelector('#chatInput');if(!input.value.trim())return;const bubble=document.createElement('div');bubble.className='bubble user';bubble.textContent=input.value;document.querySelector('.chat').append(bubble);input.value=''});
