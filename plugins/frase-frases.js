/*---------------------------------------------------------------------------------------
  ๐ โข By https://github.com/ALBERTO9883
  ๐ โข โAlberto Y Ashlyโ
-----------------------------------------------------------------------------------------*/

import translate from 'translate-google-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => { 

if (command == 'consejo') {
    
let res = await fetch("https://supra-api.herokuapp.com/api/conselho?apikey=supraz")
try {
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
m.reply(`*โโโโโโโโโโโโโโโโโโ*\n*โ โง  ${frase1}*\n*โโโโโโโโโโโโโโโโโโ*`)
} catch {
m.reply(`*[โ] OCURRIO UN ERROR, posiblemente la pรกgina (API) DE AYUDA ESTE CAรDA TEMPORALMENTE, INTรNTELO MรS TARDE*`)}}
    

if (command == 'fraseromantica') {
try {
let res = await fetch("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
m.reply(`*โญโโโโโโโโโโโโโโโโโฎ*\n*โฅ  ${frase1}*\n*โฐโโโโโโโโโโโโโโโโโฏ*`)
} catch {
m.reply(`*[โ] OCURRIO UN ERROR, posiblemente la pรกgina (API) DE AYUDA ESTE CAรDA TEMPORALMENTE, INTรNTELO MรS TARDE*`)}}

if (command == 'historiaromantica') {
try {
let res = await fetch("https://api-xcoders.xyz/api/random/cerpen/cinta?apikey=xcoders")
let json = await res.json()
let { story, title, author_name } = json.result
const tld = 'cn'
let storytime = await translate(`${story}`, { tld, to: 'es' })
let titletime = await translate(`${title}`, { tld, to: 'es' })
conn.reply(m.chat, `แญฅ๐ซแญข Tรญtulo: ${titletime}
แญฅ๐แญข Autor: ${author_name}
โโโโโโโโโโโโโโโโ
${storytime}`, m)
} catch {    
m.reply(`*[โ] OCURRIO UN ERROR, posiblemente la pรกgina (API) DE AYUDA ESTE CAรDA TEMPORALMENTE, INTรNTELO MรS TARDE*`)}}
      
}
handler.tags = ['frases']
handler.command = handler.help = ['consejo', 'fraseromantica', 'historiaromantica']
export default handler
