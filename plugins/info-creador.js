import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    await m.react('☕');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARD
    let list = [{
        displayName: "SvyraBot",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: SvyraBot
\nitem1.TEL;waid=59894064810:59894064810\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET:https://www.instagram.com/antvniaaax7\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/ineffable.mvrco\nitem3.X-ABLabel:Internet\nitem4.ADR:;; Chile 🇨🇱;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    }];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'Hello, I am the official creator of SvyraBot.',
                body: dev,
                thumbnailUrl: 'https://files.catbox.moe/gw83t3.jpg',
                sourceUrl: 'https://wa.me/59894064810?text=Hola+quiero+adquirir+bot',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    let txt = `👋 *Hola \`${username}\` este es*\n*el contacto de mi desarrollador*`;

    await conn.sendMessage(m.chat, { text: txt });
};

handler.help = ['owner', 'creador'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|dueño)$/i;

export default handler;