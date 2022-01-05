function myFunction() {
  // Create a new form, then add a checkbox question, a multiple choice question,
  // a page break, then a date question and a grid of questions.
  var form = FormApp.openById('1fJSaBVvHVZMk_Gs8GllPb7wj67vBvom5Df4pKuFSCJo');
  let courses = ["ENGLISH100", "ARB100", "MATH101", "CHEM101", "STAT101", "TECH101", "ENTREPRENEUR(ريد)101", "FAJAB101", "NAHAJ101", "ENGLISH110",
                "SALAM107", "PHYS104", "MATH106", "CSC111", "MATH151", "SALAM108", "CSC113", "CSC220", "MATH244",
                "CSC212", "CSC215", "MATH281", "CSC304", "CSC380", "CSC227", "CSC311", "CSC339", "CSC343", "CSC361",
                "CSC329", "CSC340", "CSC453", "CSC496", "PHYS210", "PHYS103", "CHEM103", "CSC443", "CSC462", "CSC476", "CSC478", "CSC484", "CSC489"]
  let criteria = ["Application", "Relevance", "Insight", "Understanding", "Ease"]
  let ratings = Array.from({length:5},(v,k)=>k+1)
  // var item = form.addCheckboxItem();
  // item.setTitle('What condiments would you like on your hot dog?');
  // item.setChoices([
  //         item.createChoice('Ketchup'),
  //         item.createChoice('Mustard'),
  //         item.createChoice('Relish')
  //     ]);
  // form.addMultipleChoiceItem()
  //     .setTitle('Do you prefer cats or dogs?')
  //     .setChoiceValues(['Cats','Dogs'])
  //     .showOtherOption(true);
  // form.addPageBreakItem()
  //     .setTitle('Getting to know you');
  // form.addDateItem()
  //     .setTitle('When were you born?');
  for(course of courses){
    form.addGridItem()
        .setTitle(course)
        .setRows(criteria)
        .setColumns(ratings);
    form.addParagraphTextItem().setTitle('Other details you want to add');
  }
  Logger.log('Published URL: ' + form.getPublishedUrl());
  Logger.log('Editor URL: ' + form.getEditUrl());
}
