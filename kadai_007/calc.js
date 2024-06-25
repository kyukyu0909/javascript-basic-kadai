//1以上10以下のランダムな数を生成
let num = Math.floor(Math.random() * 10) +1;

if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です') ;
}

//変数(num)が3の倍数であれば、「3の倍数です」という文字列を出力する
else if (num % 3 === 0) {
  console.log('3の倍数です') ;
}

//変数(num)が5の倍数であれば、「5の倍数です」という文字列を出力する
else if (num % 5 === 0) {
  console.log('5の倍数です') ;
}

//それ以外であれば、変数(num)を出力する
else {
  console.log(num) ;
}