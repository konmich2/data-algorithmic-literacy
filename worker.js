export default {
 async fetch(request, env) {
  const cors = {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"Content-Type"};
  if(request.method==="OPTIONS") return new Response(null,{headers:cors});
  if(request.method!=="POST") return new Response("Method not allowed",{status:405,headers:cors});
  if(!env.OPENAI_API_KEY) return Response.json({error:"Server is not configured"},{status:500,headers:cors});
  try {
   const body=await request.json();
   const lang=body.language||"en";
   const languageName={en:"English",de:"German",fr:"French"}[lang]||"English";
   const sys=`You are a supportive, critically minded reflection partner for teacher educators exploring data literacy and algorithmic literacy in primary education. Respond in ${languageName}. Do not grade, score or judge the participant. There is rarely one universally correct pedagogical answer. Ask one focused, open question at a time. Help the participant notice assumptions, data quality, proxies and missing evidence, algorithmic design choices, bias, transparency, privacy, inclusion, teacher agency and pedagogical consequences where relevant. Connect reflection to how teacher educators can discuss the issue with student teachers. Be concise (80-130 words). Do not invent technical details about the system in the scenario; distinguish possibilities from known facts.`;
   const context=JSON.stringify({scenario:body.scenario,decision:body.decision,history:body.history,message:body.message});
   const r=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"Authorization":`Bearer ${env.OPENAI_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({model:env.OPENAI_MODEL||"gpt-4.1-mini",instructions:sys,input:context,max_output_tokens:250})});
   const result=await r.json();
   if(!r.ok) return Response.json({error:"AI request failed",details:result.error?.message},{status:502,headers:cors});
   const reply=(result.output||[]).flatMap(x=>x.content||[]).filter(x=>x.type==="output_text").map(x=>x.text).join("\n");
   return Response.json({reply},{headers:cors});
  } catch(e){return Response.json({error:"Invalid request"},{status:400,headers:cors});}
 }
};