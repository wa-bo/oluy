let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto = `*https://github.com/ReyEndymion/ANI_MX_SCANS-MD*`
let buttonMessage= {
'document': { url: `https://chat.whatsapp.com/CEYmCcV6UgO19tO3n56VOx` },
'mimetype': `application/${document}`,
'fileName': `「Traducciones de Manga」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 0,
'isForwarded': false,
'externalAdReply': {
'mediaUrl': 'https://chat.whatsapp.com/CEYmCcV6UgO19tO3n56VOx',
'mediaType': 2,
'previewType': 'pdf',
'title': 'Группа бота ꧁༺JoKeR༻꧂ ⁩',
'body': '꧁༺JoKeR༻꧂',
'thumbnail': imagen1,
'sourceUrl': 'https://chat.whatsapp.com/CEYmCcV6UgO19tO3n56VOx' }},
'caption': texto,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}меню`, buttonText: {displayText: 'МЕНЮ'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'ДОНАТ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['sc','script']
export default handler
