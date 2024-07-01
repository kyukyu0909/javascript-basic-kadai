const addBtn = document.getElementById('btn');

const parentElement = document.getElementById('text')

addBtn.addEventListener('click', () => {

  // H2のテキストを変更する
  parentElement.textContent = 'ボタンをクリックしました';

});