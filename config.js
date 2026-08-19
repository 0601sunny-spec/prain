// Discord Application ID는 공개 식별자입니다. 실제 연동 시 아래 문자열만 교체하세요.
// 개발 서버에서는 프록시를 쓰고, index.html을 직접 열면 로컬 백엔드로 바로 요청합니다.
window.PRAIN_CONFIG = {
  discordClientId: '',
  apiBaseUrl: window.location.protocol === 'file:' ? 'http://127.0.0.1:8000' : '/.proxy/backend',
  demoModeOnApiError: true,
};
