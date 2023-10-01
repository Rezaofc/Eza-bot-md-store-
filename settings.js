const chalk = require("chalk")
const fs = require("fs")


//
global.domain = 'https://ress4you.thomvelz.my.id'
global.apikey = 'ptla_mPnGPknLClnC5TPcGIKG0O9e60wJInG0FXruoRsv4Bd'
global.capikey = 'ptlc_B9Jod73kSTQZGbqwc2yheWw7VGoLgL37gQYFJrASTrr'
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//batas
global.APIKeys = {
    'https://api.shinoa.xyz/docs': '451C1A14'
}

//owmner v card
global.owner = ['6289606790112'] //ur owner number
global.ownernomer = "6289606790112" //ur owner number2
global.ownername = "RezaOffc" //ur owner name
global.ytname = "@MrReza18" //ur yt chanel name
global.socialm = "jgn spam owner njg" //ur github or insta name
global.location = "Jawa Timur, Indonesia " //ur location

//new
global.botname = "RezaOffc"
global.ownernumber = '6289606790112'
global.ownername = '6289606790112'
global.ownerNumber = ["6289606790112@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@MrReza18"
global.websitex = "https://rezaofc.github.io"
global.wagc = "https://chat.whatsapp.com/EtTajZeBjZL68vaoSSZ5ar"
global.themeemoji = '🚩'
global.wm = "Reza Offc"
global.botscript = 'kamu nanyeak escehnya?' //script link
global.packname = "Reza Offc"
global.author = "Reza Offc"
global.creator = "6289606790112@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

global.namastore = "RezaOfc"
global.nodana = "6289606790112"
global.nogopay = "6289518919704"

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})