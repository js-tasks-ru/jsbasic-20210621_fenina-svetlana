function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('1xbet') || lowerStr.includes('xxx');
}

alert( checkSpam('1XbeTnow') );
alert( checkSpam('free xxxxx') );
alert( checkSpam('innocent rabbit') );