/* Created by https://github.com/BrunoSobrino */
       /* Diseño by Yameko-Bot V1*/

import yts from "yt-search"
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*[❗INFO❗] NOMBRE DE LA CANCION FALTANTE, POR FAVOR INGRESE EL COMANDO MAS EL NOMBRE/TITULO DE UNA CANCION*\n\n*—◉ EJEMPLO:*\n*${usedPrefix + command} Begin you*`    
try {
let search = await yts(args.join(" "))
let listSerch = []
let listSerch2 = []
let listSerch3 = []
let listSerch4 = []
let teskd = `РЕЗУЛЬТАТЫ ПОИСКА ПО ЗАПРОСУ: ${args.join(" ")}`
const sections = [{
title: `|－－－－－{ *ПЕСНЯ* }－－－－－|`,
rows: listSerch },
{              
title: `|－－－－－{ *КЛИП* }－－－－－|`,
rows: listSerch2 },
{              
title: `|－－{ *ДОКУМЕНТ MP3* }－－|`,
rows: listSerch3 },
{              
title: `|－－{ *ДОКУМЕНТ MP4* }－－|`,
rows: listSerch4 }]
const listMessage = {
text: teskd,
footer: 'ВЫБЕРИТЕ ЖЕЛАЕМЫЙ ИЗ СПИСКА',
title: " 『 ВСЕ НАЙДЕННЫЕ ТРЕКИ ПО ЗАПРОСУ 』",
buttonText: "[♦ РЕЗУЛЬТАТЫ ♦]",
sections}
for (let i of search.all) {
listSerch.push({title: i.title, description: `Автор: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listSerch2.push({title: i.title, description: `Автор: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listSerch3.push({title: i.title, description: `Автор: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listSerch4.push({title: i.title, description: `Автор: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[❗INFO❗] ERROR, POR FAVOR VUELVA A INTENTARLO CON OTRO NOMBRE DE UNA CANCION*')
}}
handler.command = /^playlist|playlist2$/i
export default handler
