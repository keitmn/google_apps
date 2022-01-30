function getSheetValues() {
  const ss = SpreadsheetApp.openById('1jOgb7gT3Lm1V62_3pu2DQTQgk3O78ShJehLfOZ4K9iA')
  const tmpl = ss.getSheetByName('tmpl')
  const range = tmpl.getRange(2, 1, 14, 8)
  Logger.log(tmpl.getRange(`H2`).getFormula())
  Logger.log(range.getFormulas())
  Logger.log(range.getFormulaR1C1())
  Logger.log(range.getFormulasR1C1())
  Logger.log(range.getValue())
  Logger.log(range.getValues())
  Logger.log(tmpl.getSheetValues(2, 1, 14, 8))
  Logger.log(tmpl.getDataRange().getValues())
}
