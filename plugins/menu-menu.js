import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender    
let userm = `@${who.replace(/@.+/, '')}` 
        

let str = `
*????????????! ???${userm}???, ???????????? ???????? ???????? ??????????????*
*???? ????????: ${week}, ${date}*
*???? ?????????? ????????????????????: ${uptime}*
*???? ???????????????????????????????????? ????????????????????????: ${rtotalreg}*


*<???????????????? ???????? ?? ???????? ????????????/>*

?? ?????????? _${usedPrefix}join *<enlace / link / url>*_


*<?????????????????? ?? ???????????????????? ??????????????/>*

?? ???????????? _${usedPrefix}???????????????? *??????????????????????*_
?? ???????????? _${usedPrefix}?????????????????? *??????????????????????*_
?? ???????????? _${usedPrefix}???????????????? *18+*_
?? ???????????? _${usedPrefix}?????????????????? *18+*_
?? ???????????? _${usedPrefix}???????????????? *????????????????????*_
?? ???????????? _${usedPrefix}?????????????????? *????????????????????*_
?? ???????????? _${usedPrefix}???????????????? *????????????????????2*_
?? ???????????? _${usedPrefix}?????????????????? *????????????????????2*_
?? ???????????? _${usedPrefix}???????????????? *??????????????????????*_
?? ???????????? _${usedPrefix}?????????????????? *??????????????????????*_
?? ???????????? _${usedPrefix}????????????????e *??????????????????*_
?? ???????????? _${usedPrefix}?????????????????? *??????????????????*_
?? ???????????? _${usedPrefix}???????????????? *????????????????????*_
?? ???????????? _${usedPrefix}?????????????????? *????????????????????*_
?? ???????????? _${usedPrefix}???????????????? *??????????????*_
?? ???????????? _${usedPrefix}?????????????????? *??????????????*_
?? ???????????? _${usedPrefix}???????????????? *??????????????*_
?? ???????????? _${usedPrefix}?????????????????? *??????????????*_
?? ???????????? _${usedPrefix}???????????????? *antitraba*_
?? ???????????? _${usedPrefix}?????????????????? *antitraba*_
?? ???????????? _${usedPrefix}???????????????? *????????????????*_
?? ???????????? _${usedPrefix}?????????????????? *????????????????*_

*<REPORTES DE FALLOS/>*

?? ?????????? _${usedPrefix}reporte *<texto>*_

*<???????????????? ????????????/>*

?? ?????????? _${usedPrefix}tiktok *<enlace / link / url>*_
?? ?????????? _${usedPrefix}ytmp3 *<enlace / link / url>*_
?? ?????????? _${usedPrefix}ytmp4 *<enlace / link / url>*_
?? ?????????? _${usedPrefix}play.1 *<texto / enlace / link / url>*_
?? ?????????? _${usedPrefix}play.2 *<texto / enlace / link / url>*_
?? ?????????? _${usedPrefix}play *<texto>*_
?? ?????????? _${usedPrefix}spotify *<texto>*_
?? ?????????? _${usedPrefix}ringtone *<texto>*_
?? ?????????? _${usedPrefix}imagen *<texto>*_
?? ?????????? _${usedPrefix}wallpaper *<texto>*_
?? ?????????? _${usedPrefix}wallpaper2 *<texto>*_

*<???????? ?????? ?????????????? ????????????/>* 

?? ?????????? _${usedPrefix}???????????????? *<numero>*_
?? ?????????? _${usedPrefix}???????????? *<@tag>*_
?? ?????????? _${usedPrefix}????????????????
?? ?????????? _${usedPrefix}grupo *<abrir / cerrar>*_
?? ?????????? _${usedPrefix}promote *<@tag>*_
?? ?????????? _${usedPrefix}demote *<@tag>*_
?? ?????????? _???????????? *<texto>*_ (uso sin prefijo)
?? ?????????? _${usedPrefix}demote *<@tag>*_
?? ?????????? _${usedPrefix}infogroup_
?? ?????????? _${usedPrefix}link_
?? ?????????? _${usedPrefix}setname *<texto>*_
?? ?????????? _${usedPrefix}setdesc *<texto>*_
?? ?????????? _${usedPrefix}invocar *<texto>*_
 ?????????? _${usedPrefix}hidetag *<texto>*_
?? ?????????? _${usedPrefix}fantasmas_
?? ?????????? _${usedPrefix}destraba_


*<CONVERTIDORES/>*

?? ?????????? _${usedPrefix}togifaud *<responde a un video>*_
?? ?????????? _${usedPrefix}toimg *<responde a un sticker>*_
?? ?????????? _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
?? ?????????? _${usedPrefix}toptt *<responde a un video / audio>*_
?? ?????????? _${usedPrefix}tovideo *<responde a un sticker>*_
?? ?????????? _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
?? ?????????? _${usedPrefix}tts es *<texto>*_

*<EFECTOS Y LOGOS/>*

?? ????????????? _${usedPrefix}logos *<efecto> <texto>*_
?? ????????????? _${usedPrefix}logocorazon *<texto>*_
?? ????????????? _${usedPrefix}logochristmas *<texto>*_
?? ????????????? _${usedPrefix}simpcard *<@tag>*_
?? ????????????? _${usedPrefix}hornycard *<@tag>*_
?? ????????????? _${usedPrefix}lolice *<@tag>*_
?? ????????????? _${usedPrefix}ytcomment *<texto>*_
?? ????????????? _${usedPrefix}phmaker *<opcion><responder a imagen>*_
?? ????????????? _${usedPrefix}itssostupid_
?? ????????????? _${usedPrefix}pixelar_
?? ????????????? _${usedPrefix}blur_

*<FRASES Y TEXTOS/>*

?? ?????????? _${usedPrefix}consejo_
?? ?????????? _${usedPrefix}fraseromantica_
?? ?????????? _${usedPrefix}historiaromantica_

<?????????????? +18/>*

?? ?????????? _${usedPrefix}pack_
?? ?????????? _${usedPrefix}pack2_
?? ?????????? _${usedPrefix}pack3_
?? ?????????? _${usedPrefix}videoxxx_
?? ?????????? _${usedPrefix}tiktokxxx_
?? ?????????? _${usedPrefix}tetas_
?? ?????????? _${usedPrefix}booty_
?? ?????????? _${usedPrefix}ecchi_
?? ?????????? _${usedPrefix}furro_
?? ?????????? _${usedPrefix}imagenlesbians_
?? ?????????? _${usedPrefix}panties_
?? ?????????? _${usedPrefix}pene_
?? ?????????? _${usedPrefix}porno_
?? ?????????? _${usedPrefix}porno2_
?? ?????????? _${usedPrefix}randomxxx_
?? ?????????? _${usedPrefix}pechos_
?? ?????????? _${usedPrefix}yaoi_
?? ?????????? _${usedPrefix}yaoi2_
?? ?????????? _${usedPrefix}yuri_
?? ?????????? _${usedPrefix}yuri2_
?? ?????????? _${usedPrefix}trapito_
?? ?????????? _${usedPrefix}hentai_
?? ?????????? _${usedPrefix}nsfwloli_
?? ?????????? _${usedPrefix}nsfworgy_
?? ?????????? _${usedPrefix}nsfwfoot_
?? ?????????? _${usedPrefix}nsfwass_
?? ?????????? _${usedPrefix}nsfwbdsm_
?? ?????????? _${usedPrefix}nsfwcum_
?? ?????????? _${usedPrefix}nsfwero_
?? ?????????? _${usedPrefix}nsfwfemdom_
?? ?????????? _${usedPrefix}nsfwglass_

*<????????????????????????/>*
*?????? ?????????????????? ???????????????????? ?????????????????? ????????????????,???????????????? ???????????? 
 ?? ???????????????? ?????????????????? ?????????????????? ??????????????????*

?? ?????????? _${usedPrefix}bass_
?? ?????????? _${usedPrefix}blown_
?? ?????????? _${usedPrefix}deep_
?? ?????????? _${usedPrefix}earrape_
?? ?????????? _${usedPrefix}fast_
?? ?????????? _${usedPrefix}fat_
?? ?????????? _${usedPrefix}nightcore_
?? ?????????? _${usedPrefix}reverse_
?? ?????????? _${usedPrefix}robot_
?? ?????????? _${usedPrefix}slow_
?? ?????????? _${usedPrefix}smooth_
?? ?????????? _${usedPrefix}tupai_

<????????????????????/>*

?? ?????????? _${usedPrefix}stickersearch *<texto>*_
?? ?????????? _${usedPrefix}google *<texto>*_
?? ?????????? _${usedPrefix}ytsearch *<texto>*_
?? ?????????? _${usedPrefix}happymod *<texto>*_

*<?????????????????? ?????????????????? ????????/>* 
*- ?????? ???? ?????? ?????????????? ?? ?????????????????? ?????????????????? ?????????????? ?????????????? (#, /, *, .)* 
_(uso sin prefijo)_

?? ?????????? _Quien es tu sempai botsito 7w7_
?? ?????????? _Te diagnostico con gay_
?? ?????????? _A nadie le importa_
?? ?????????? _Fiesta del admin_
?? ?????????? _Fiesta del administrador_ 
?? ?????????? _Vivan los novios_
?? ?????????? _Feliz cumplea??os_
?? ?????????? _Noche de paz_
?? ?????????? _Buenos dias_
?? ?????????? _Buenos tardes_
?? ?????????? _Buenos noches_
?? ?????????? _Audio hentai_
?? ?????????? _Chica lgante_
?? ?????????? _Feliz navidad_
?? ?????????? _Vete a la vrg_
?? ?????????? _Pasa pack Bot_
?? ?????????? _Atencion grupo_
?? ?????????? _Marica quien_
?? ?????????? _Murio el grupo_
?? ?????????? _Oh me vengo_
?? ?????????? _tio que rico_
?? ?????????? _Viernes_
?? ?????????? _Baneado_
?? ?????????? _Sexo_
?? ?????????? _Hola_
?? ?????????? _Un pato_
?? ?????????? _Nyanpasu_
?? ?????????? _Te amo_
?? ?????????? _Yamete_
?? ?????????? _Ba??ate_
?? ?????????? _Es puto_
?? ?????????? _La biblia_
?? ?????????? _Onichan_
?? ?????????? _Mierda de Bot_
?? ?????????? _Siuuu_
?? ?????????? _Epico_
?? ?????????? _Shitpost_
?? ?????????? _Rawr_
?? ?????????? _UwU_
?? ?????????? _:c_
?? ?????????? _a_


*<???????????????? ????????????????/>*

?? ?????????? _${usedPrefix}???????????? *<???????????????? ?????????????????????? ?????? ??????????>*_
?? ?????????? _${usedPrefix}???????????? *<???????????? ???? ??????????????????????>*_
?? ?????????? _${usedPrefix}?? *<???????????????? ?????????????????????? ?????? ??????????>*_
?? ?????????? _${usedPrefix}?? *<???????????? ???? ??????????????????????>*_
?? ?????????? _${usedPrefix}sfull *<responder a imagen o video>*_
?? ?????????? _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
?? ?????????? _${usedPrefix}scircle *<responder a imagen>*_
?? ?????????? _${usedPrefix}sremovebg *<responder a imagen>*_
?? ?????????? _${usedPrefix}semoji *<tipo> <emoji>*_
?? ?????????? _${usedPrefix}attp3 *<texto>*_
?? ?????????? _${usedPrefix}pat *<@tag>*_
?? ?????????? _${usedPrefix}slap *<@tag>*_
?? ?????????? _${usedPrefix}kiss *<@tag>*_
?? ?????????? _${usedPrefix}dado_
?? ?????????? _${usedPrefix}wm *<packname> <author>*_

*<???????? ?????? ?????????????????? ????????!!!?? ???????????? ???????? ???????????? ????????????????????/>*

?? ?????????? > *<funcion>*
?? ?????????? => *<funcion>*
?? ?????????? $ *<funcion>*
?? ?????????? _${usedPrefix}cajafuerte_
?? ?????????? _${usedPrefix}blocklist_
?? ?????????? _${usedPrefix}enable *restrict*_
?? ?????????? _${usedPrefix}disable *restrict*_
?? ?????????? _${usedPrefix}enable *autoread*_
?? ?????????? _${usedPrefix}disable *autoread*_
?? ?????????? _${usedPrefix}enable *public*_
?? ?????????? _${usedPrefix}disable *public*_
?? ?????????? _${usedPrefix}enable *pconly*_
?? ?????????? _${usedPrefix}disable *pconly*_
?? ?????????? _${usedPrefix}enable *gconly*_
?? ?????????? _${usedPrefix}disable *gconly*_
?? ?????????? _${usedPrefix}enable *anticall*_
?? ?????????? _${usedPrefix}disable *anticall*_
?? ?????????? _${usedPrefix}enable *antiprivado*_
?? ?????????? _${usedPrefix}disable *antiprivado*_
?? ?????????? _${usedPrefix}msg *<texto>*_
?? ?????????? _${usedPrefix}banchat_
?? ?????????? _${usedPrefix}unbanchat_
?? ?????????? _${usedPrefix}banuser *<@tag>*_
?? ?????????? _${usedPrefix}unbanuser *<@tag>*_
?? ?????????? _${usedPrefix}banuser *<@tag>*_
?? ?????????? _${usedPrefix}bc *<texto>*_
?? ?????????? _${usedPrefix}bcchats *<texto>*_
?? ?????????? _${usedPrefix}bcgc *<texto>*_
?? ?????????? _${usedPrefix}cleartpm_
?? ?????????? _${usedPrefix}restart_
?? ?????????? _${usedPrefix}????????????????_
?? ?????????? _${usedPrefix}traba1_ 
?? ?????????? _${usedPrefix}addprem *<@tag>*_
?? ?????????? _${usedPrefix}delprem *<@tag>*_
?? ?????????? _${usedPrefix}listprem_
`.trim()
let mentionedJid = [who]
conn.sendButton(m.chat, str, wm, pp, 
/*conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.facebook.com/ANIMxSCANS', 'FACEBOOK', 'https://github.com/ReyEndymion/ANI_MX_SCANS-MD', 'GITHUB', */[
['???? ???????????????? ????', '/????????????????'],
['???? ???????? ?? ???????? ????', '/infobot']
], '', { contextInfo: { mentionedJid }})
/*await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})*/
} catch (e) {
conn.reply(m.chat, '*[???INFO???] EL MENU TIENE UN ERROR Y NO FUE POSIBLE ENVIARLO, REPORTELO AL PROPIETARIO DEL BOT*', m)
throw e
}}
handler.command = /^(????????|men??|memu|mem??|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
