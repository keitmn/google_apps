function setSingleValue() {
  const ss = SpreadsheetApp.openById('1jOgb7gT3Lm1V62_3pu2DQTQgk3O78ShJehLfOZ4K9iA')
  const report = ss.getSheetByName('Report')
  const range = report.getRange(`A1`)

  range.setValue(`Hello, Sheets!`)
}

function setMultyValue() {
  const ss = SpreadsheetApp.openById('1jOgb7gT3Lm1V62_3pu2DQTQgk3O78ShJehLfOZ4K9iA')
  const report = ss.getSheetByName('Report')
  const range = report.getRange(1, 1, 3, 2)

  range.setValues([
    ['500', '356'],
    ['1500', '555'],
    ['712', '218'],
  ])

  report.appendRow(['667', '212'])
}

function setFormulas() {
  const ss = SpreadsheetApp.openById('1jOgb7gT3Lm1V62_3pu2DQTQgk3O78ShJehLfOZ4K9iA')
  const report = ss.getSheetByName('Report')

  report.getRange(5, 1, 1, 2).setFormulas([
    [`=SUM(A1;A3)`, `=SUM(B1;B3)`],
    ])
}

function getLastRC() {
  const ss = SpreadsheetApp.openById('1jOgb7gT3Lm1V62_3pu2DQTQgk3O78ShJehLfOZ4K9iA')
  const report = ss.getSheetByName('Report')
  let lastRow
  let lastColumn

  lastRow = report.getLastRow() +1 
  lastColumn = report.getLastColumn()

  Logger.log(lastRow)
  Logger.log(lastColumn)
}


function makeReport() {
  const ss = SpreadsheetApp.openById('1jOgb7gT3Lm1V62_3pu2DQTQgk3O78ShJehLfOZ4K9iA')
  const report = ss.getSheetByName('Report')
  const range = report.getRange(`A1`)
  let lastRow
  let lastColumn

  range.setFormula(`=TRANSPOSE(UNIQUE(data!B:B))`)
  lastColumn = report.getLastColumn() + 1

  for(let i = 1; i < lastColumn; i++) {
    const value = report.getRange(1, i).getValue()
    report.getRange(2, i).setFormula(`=QUERY(data!B:C, "select C where B='${value}'",0)`)
  }

  lastRow = report.getLastRow()
  report.getRange(lastRow + 1, 1, 1, lastColumn - 1).setFormulaR1C1(`=SUM(R[-${lastRow-1}]C;R[-1]C)`)
}
