let data=[],tr={},lang='en';const $=id=>document.getElementById(id);
async function init(){
 [data,tr]=await Promise.all([fetch('scenarios.json').then(r=>r.json()),fetch('translations.json').then(r=>r.json())]);
 const draft=localStorage.getItem('dal-scenarios-draft');if(draft){try{data=JSON.parse(draft)}catch(e){}}
 $('language').onchange=e=>{lang=e.target.value;render()};
 $('add').onclick=add;
 $('save').onclick=save;
 $('download').onclick=download;
 $('editorIntro').textContent=tr[lang].editorIntro;
 render();
}
function field(label,value,oninput,area=false){
 const wrap=document.createElement('label');wrap.style.display='block';wrap.style.margin='12px 0';
 const title=document.createElement('strong');title.textContent=label;title.style.display='block';
 const el=document.createElement(area?'textarea':'input');el.value=value||'';el.style.width='100%';el.style.marginTop='5px';if(area)el.rows=3;
 el.oninput=()=>oninput(el.value);wrap.append(title,el);return wrap;
}
function render(){
 const root=$('editor');root.innerHTML='';
 data.forEach((s,i)=>{
  const card=document.createElement('section');card.className='panel';
  const h=document.createElement('h2');h.textContent=`${i+1}. ${s.id}`;card.append(h);
  card.append(field(tr[lang].id,s.id,v=>s.id=v));
  ['en','de','fr'].forEach(l=>{
   const langHead=document.createElement('h3');langHead.textContent={en:'English',de:'Deutsch',fr:'Français'}[l];card.append(langHead);
   card.append(field(tr[lang].title,s.title[l],v=>s.title[l]=v));
   card.append(field(tr[lang].context,s.context[l],v=>s.context[l]=v,true));
   card.append(field(tr[lang].question,s.question[l],v=>s.question[l]=v));
   s.options.forEach((o,j)=>{
    const sub=document.createElement('h4');sub.textContent=`${tr[lang].options} ${j+1}`;card.append(sub);
    card.append(field(tr[lang].label,o.label[l],v=>o.label[l]=v));
    card.append(field(tr[lang].feedbackText,o.feedback[l],v=>o.feedback[l]=v,true));
   });
   card.append(field(tr[lang].reflectionText,s.reflection[l],v=>s.reflection[l]=v,true));
  });
  const actions=document.createElement('div');actions.className='home-actions';
  const preview=document.createElement('button');preview.className='secondary';preview.textContent='Preview scenario';preview.onclick=()=>{save(false);const url='index.html#scenario='+encodeScenario(s);window.open(url,'_blank','noopener');};
  const del=document.createElement('button');del.className='secondary';del.textContent=tr[lang].delete;del.onclick=()=>{if(confirm('Delete this scenario?')){data.splice(i,1);render()}};
  actions.append(preview,del);card.append(actions);root.append(card);
 });
}
function encodeScenario(s){return btoa(unescape(encodeURIComponent(JSON.stringify(s)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function save(show=true){
 localStorage.setItem('dal-scenarios-draft',JSON.stringify(data));
 localStorage.setItem('dal-scenarios-published-local',JSON.stringify(data));
 if(show)$('status').textContent='Saved in this browser. The main scenario page will display these changes on this device.';
}
function add(){
 const id='new-scenario-'+(data.length+1),blank={en:'',de:'',fr:''};
 data.push({id,title:{...blank},context:{...blank},question:{...blank},options:[{id:'option-1',label:{...blank},feedback:{...blank}}],reflection:{...blank}});
 render();
}
function download(){
 const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),a=document.createElement('a');
 a.href=URL.createObjectURL(blob);a.download='scenarios.json';a.click();URL.revokeObjectURL(a.href);
}
init();
