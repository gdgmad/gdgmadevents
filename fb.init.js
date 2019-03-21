const fbcli = require('firebase-tools');
const fs = require('fs');

// by default, uses the current project and logged in user
fbcli.setup.web().then(config => {
  const fileName = './src/firebase/config.json'
  fs.writeFileSync(fileName, `${JSON.stringify(config)}`, 'utf8')
})