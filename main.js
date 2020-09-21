// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'

{
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');


open.addEventListener('click',()=>
{
modal.classList.remove('hidden');
mask.classList.remove('hidden');

});
close.addEventListener('click',()=>
{
modal.classList.add('hidden');
mask.classList.add('hidden');

});
mask.addEventListener('click',()=>
{
//closeをクリックした時と同じ処理を呼び出す
close.click();
});

}