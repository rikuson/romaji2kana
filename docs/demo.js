const input = document.getElementById('input');
input.addEventListener('keydown', (e) => {
  const output = document.getElementById('output');
  output.innerHTML = romaji2kana(e.target.value);
});
