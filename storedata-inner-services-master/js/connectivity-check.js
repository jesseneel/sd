let isOffline = false;
window.addEventListener('load', checkConnectivity);

function checkConnectivity() {
  updateStatus();
  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);
}

function updateStatus() {
  if (typeof navigator.onLine !== 'undefined'){
    isOffline = !navigator.onLine;
    document.documentElement.classList.toggle('is-offline', isOffline);
    const notification = document.querySelector('#notification');
  if (isOffline) {
    notification.textContent = 'Отсутствует доступ к сети. Сайт доступен в ограниченном режиме.';
    notification.removeAttribute('hidden');
  } else {
    notification.textContent = '';
    notification.setAttribute('hidden', '');
  }
}
  }