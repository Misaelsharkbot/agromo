let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de AGROMOS SP - Bot*

*➤ Grupo oficial del Bot:*
*1.-* https://chat.whatsapp.com/E9qJfvlLjENKAxnhII9rao

*2.-* https://chat.whatsapp.com/JSW9rrLeL5D5aVr7j023Pz

*➤ Grupo oficial del desarollador del Bot:*
*1.-https://chat.whatsapp.com/CBoAGmEFcCy44xIoWBSgzJ


*2.-https://chat.whatsapp.com/FZsoX7iGBZLBQgFX9MUXIy

*3.-https://chat.whatsapp.com/K0UCo7igED92q9c1w2DiEH
`.trim() 
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 AGROMOS SP - BOT 🔥*', 'status@broadcast')}
handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
