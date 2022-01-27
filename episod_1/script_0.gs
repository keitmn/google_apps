function myFunction() {
  const ss = SpreadsheetApp.create('My test ss 2')
  Logger.log(ss.getName())
  Logger.log(ss.getId())
}

function myFunction1() {
  SpreadsheetApp.create('My test ss 1', 100000, 1000)
}
