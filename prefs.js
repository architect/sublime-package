let { writeFileSync } = require('fs')
let { join } = require('path')
let plist = require('plist')

let textMatePrefs = {
  scope: 'source.arc',
  settings: {
    shellVariables: [
      {
        name: 'TM_COMMENT_START',
        value: '#',
      }
    ]
  }
}

let prefsFile = join(__dirname, 'arc.tmPreferences')
let prefs = plist.build(textMatePrefs) + '\n'
writeFileSync(prefsFile, prefs)
console.log('Built Arc syntax definition: Sublime Text prefs (TextMate / PLIST)')
