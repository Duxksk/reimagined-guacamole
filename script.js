const fontSelect = document.getElementById('fontSelect');
const previewText = document.getElementById('previewText');
const preview = document.getElementById('preview');
const downloadBtn = document.getElementById('downloadBtn');

const fonts = {
  v2: 'RF대충쓴준우체v2(1).ttf',
  v3: 'RF대충쓴준우체v3.ttf'
};

function updatePreview() {
  const fontKey = fontSelect.value;
  preview.style.fontFamily = fontKey;
  preview.textContent = previewText.value || "여기에 미리보기 텍스트가 표시됩니다.";
  downloadBtn.href = `fonts/${fonts[fontKey]}`;
}

fontSelect.addEventListener('change', updatePreview);
previewText.addEventListener('input', updatePreview);
updatePreview();
