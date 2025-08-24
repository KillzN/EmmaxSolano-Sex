let handler = async (m, { conn, text, usedPrefix, command }) => {
    let user = global.db.data.users[m.sender]

    // Verificar si ya está registrado
    if (user.registered === true) {
        return conn.reply(m.chat, `*✅ Ya estás registrado.*\n\n*Si quieres eliminar tu registro usa:* ${usedPrefix}unreg`, m)
    }

    // Verificar que se proporcione el texto necesario
    if (!text) {
        return conn.reply(m.chat, `*📝 Uso correcto:*\n${usedPrefix + command} nombre.edad\n\n*Ejemplo:* ${usedPrefix + command} EmmaxSolano.18`, m)
    }

    // Separar nombre y edad
    let [nombre, edad] = text.split('.')

    // Validaciones
    if (!nombre || !edad) {
        return conn.reply(m.chat, `*❌ Formato incorrecto.*\n\n*Uso correcto:*\n${usedPrefix + command} nombre.edad\n\n*Ejemplo:* ${usedPrefix + command} EmmaxSolano.18`, m)
    }

    // Validar que la edad sea un número
    if (isNaN(edad)) {
        return conn.reply(m.chat, `*❌ La edad debe ser un número.*\n\n*Ejemplo:* ${usedPrefix + command} Juan.18`, m)
    }

    // Validar rango de edad
    edad = parseInt(edad)
    if (edad < 10 || edad > 100) {
        return conn.reply(m.chat, `*❌ La edad debe estar entre 10 y 100 años.*`, m)
    }

    // Validar longitud del nombre
    if (nombre.length < 2 || nombre.length > 30) {
        return conn.reply(m.chat, `*❌ El nombre debe tener entre 2 y 30 caracteres.*`, m)
    }

    // Registrar usuario
    user.registered = true
    user.name = nombre.trim()
    user.age = edad
    user.regTime = + new Date

    // Mensaje de confirmación
    let txt = `*✅ REGISTRO COMPLETADO*\n\n`
    txt += `*👤 Nombre:* ${nombre}\n`
    txt += `*🎂 Edad:* ${edad} años\n`
    txt += `*📅 Fecha:* ${new Date().toLocaleDateString()}\n\n`
    txt += `*🎉 ¡Bienvenido al bot!*`

    await conn.reply(m.chat, txt, m)
}

handler.help = ['reg', 'register']
handler.tags = ['rg']
handler.command = /^(reg|register)$/i
handler.register = false

export default handler
