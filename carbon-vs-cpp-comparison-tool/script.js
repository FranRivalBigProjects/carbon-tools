const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('syntax')) out+='- Syntax exploration context\n';
if(txt.includes('cpp')||txt.includes('c++')) out+='- C++ comparison context\n';
if(txt.includes('compile')) out+='- Compile model / toolchain behavior\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Analyze language design, compatibility, and build model\n';

res.innerText=out;
}