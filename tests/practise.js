
let str ="ahskjlh";
let str1="";
for(let i=str.length-1;i>=0;i--){
    let a =0;
str1 += str[i];
for(let j=0;j<str.length;j++){
if(str[i]==str[j]){
    a++;
}
}
if(a>=2){
    console.log(str[i]+":"+ a)
}
}


