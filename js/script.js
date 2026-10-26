'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy');
const status = document.getElementById('copy-status');
const manualCopy = document.getElementById('manual-copy');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('653724340');
    status.textContent = 'Teléfono copiado: 653 724 340';
    manualCopy.hidden = true;
  } catch {
    manualCopy.hidden = false;
    manualCopy.focus();
    manualCopy.select();
    status.textContent = 'Selecciona y copia el número desde este campo.';
  }
});
