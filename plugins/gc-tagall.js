const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `> 𝐖𝐞 𝐚𝐫𝐞 𝐩𝐫𝐨𝐝𝐮𝐜𝐭𝐬 𝐨𝐟 𝐨𝐮𝐫 𝐩𝐚𝐬𝐭, 𝐛𝐮𝐭 𝐰𝐞 𝐝𝐨𝐧'𝐭 𝐡𝐚𝐯𝐞 𝐭𝐨 𝐛𝐞 𝐩𝐫𝐢𝐬𝐨𝐧𝐞𝐫𝐬 𝐨𝐟 𝐢𝐭*`;
  let teks = `𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝙂𝙀𝙉𝙀𝙍𝘼𝙇:  ${pesan}\n\n *${oi}\n\n┌────── ∘°𝐄𝐦𝐦𝐚 𝐱 𝐒𝐨𝐥𝐚𝐧𝐨°∘ ─────┐\n`;
  for (const mem of participants) {
    teks += `*|🫂* @${mem.id.split('@')[0]}\n`;
  }
  teks += `└────── °∘𝐄𝐦𝐦𝐚 𝐱 𝐒𝐨𝐥𝐚𝐧𝐨∘° ─────┘`;
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};
handler.help = ['todos *<txt>*'];
handler.tags = ['gc'];
handler.command = /^(tagall|t|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;