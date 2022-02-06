function myFunction() {
  const ss = SpreadsheetApp.openById('1jOgb7gT3Lm1V62_3pu2DQTQgk3O78ShJehLfOZ4K9iA')
  Logger.log(ss)
  Logger.log(ss.getId())
  Logger.log(ss.getName())
}

function openByUrl() {
  const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1jOgb7gT3Lm1V62_3pu2DQTQgk3O78ShJehLfOZ4K9iA/')
  Logger.log(ss)
  Logger.log(ss.getId())
  Logger.log(ss.getName())
}

function openByName() {
    const ss = SpreadsheetApp.open(DriveApp.getFilesByName('My test ss 1').next())
    Logger.log(ss)
    Logger.log(ss.getId())
    Logger.log(ss.getName())
}
