function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst("вася")); 
alert(ucFirst("в")); 
alert(ucFirst(''));
