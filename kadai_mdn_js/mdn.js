const date = new Date() ;

const opsions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const formattedDate = date.toLocaleDateString('ja-JP', opsions) ;
console.log(formattedDate) ;