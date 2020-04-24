const url= require('url');
const myUrl=new URL('https://www.youtube.com/watch?v=fBNz5xF-Kx4&feature=youtu.be');
//serialized URL
//console.log(myUrl.href);
//console.log(myUrl.toString());

//host (root domain)
//console.log(myUrl.host);
//hostname(does not get port)
//console.log(myUrl.hostname);
//pathname
//console.log(myUrl.pathname);
//serializedquery
//console.log(myUrl.search);
//params object
//console.log(myUrl.searchParams);
//add param
//myUrl.searchParams.append('abd','132');
//console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));






