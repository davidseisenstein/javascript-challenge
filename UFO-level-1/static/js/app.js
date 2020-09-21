// Grab the data from the other js file

tableData = data

// reference our table object in the html file

tBody = d3.select("tbody")

// Loop through each object in the tableData array using arrow notation with ufoSighting as our generic iterator
tableData.forEach(ufoSighting => {
    // Create a new row for the table as a tr element
    var row = tBody.append("tr")
    // Loop through the object itself using forEach and key, value notation
    Object.entries(ufoSighting).forEach(([key, value]) => {
        // Create the cell in the table as a td element
        var cell = row.append("td")
        // grab the value from the object and insert it as the text of the cell
        cell.text(value);
    });

});