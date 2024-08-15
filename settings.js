const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==QUBlGc2dmTxsWdQFnYaFjQrJTe1sken1UYtpGOzdkV4c2cxVmNVNVSZdlVjMEaJdmVw4kSpwd=52794595749',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hҽყ  Tԋҽɾҽ  I'ɱ 𝚂𝙷𝙰𝙽 𝙼𝙾𝙳𝚣  ||°* ✅ 🪄


Welcome to I   𝚂𝚑𝚊𝚗 𝙼𝚘𝚍𝚣 𝙱𝚘𝚝  </ 🤖 🪼
So , I think this bots are useful 
to you . 😊
Nice to meet you 🤝
*Thankyou* ♥️ 🪄 

🎀 Owner - 𝚂𝚑𝚊𝚗_𝙼𝚘𝚍𝚣 |° ©

📒 𝙳𝚘 𝚢𝚘𝚞 𝚠𝚊𝚗𝚝 𝚝𝚘 𝚐𝚎𝚝 𝚊𝚕𝚕 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 ?
𝚃𝚢𝚙𝚎 & 𝚂𝚎𝚗𝚍 -  *.menu*  or  *.list*

*ConnectUs* ✅
https://wa.me/+94759549725?text=*Hҽყ_𝚂𝚑𝚊𝚗_𝙼𝚘𝚍𝚣_||°*_♥️_🪄*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://i.ibb.co/jZdSsWz/IMG-20231224-WA0375.jpg',
  MONGODB_URL: 'mongodb+srv://tempmail1829:7W1Ji1KDtd5W5pdE@cluster0.w9oryfw.mongodb.net/', 
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: '𝐐𝐔𝐄𝐄𝐍 𝐄𝐋𝐈𝐒𝐀',
  OWNER_NAME: 'MR  Shan',
  OWNER_NUMBER: '94759549725',
  SUDO: '94759549725',
  WORK_TYPE: 'private',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴍᴅ',
  STICKER_AUTHOR: 'Qᴜᴇᴇɴ ᴇʟɪꜱᴀ',
  STICKER_PACK: 'ᴍʀ ɴɪᴍᴀ ᴏꜰᴄ',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 500,
  OWNER_R_EMOJI: '👽',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: false,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
