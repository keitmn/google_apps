function myFunction() {
  const ss = SpreadsheetApp.openById('1jOgb7gT3Lm1V62_3pu2DQTQgk3O78ShJehLfOZ4K9iA')
  const sheet = ss.getSheets()[0]
  Logger.log(sheet.getName())  
}

function myFunction1() {
  const ss = SpreadsheetApp.openById('1jOgb7gT3Lm1V62_3pu2DQTQgk3O78ShJehLfOZ4K9iA')
  const sheet = ss.getSheetByName('Лист1')
  Logger.log(sheet.getName())  
}


function myFunction2() {
  const ss = SpreadsheetApp.openById('1jOgb7gT3Lm1V62_3pu2DQTQgk3O78ShJehLfOZ4K9iA')
  const sheet = ss.insertSheet('MySheet')
  Logger.log(sheet.getName())  
}
