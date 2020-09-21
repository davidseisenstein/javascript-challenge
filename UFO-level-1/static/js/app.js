// Grab the data from the other js file

tableData = data

// reference our table object in the html file

tBody = d3.select("tbody")

// write a function to convert our from yyyy-mm-dd to dd-mm-yyyy
function convertDate(inputDate) {
    var newDateSplit = inputDate.split('-')
    var newDate = newDateSplit[2] + '/' + newDateSplit [1] + '/' + newDateSplit[0]
    return newDate
}

// write another function to add the leading zeroes into the months and days 
function convertDateTwo(inputDate) {
    var newDateSplit = inputDate.split('/')
    var newDate = '0' + newDateSplit[0] + '/' + newDateSplit[1] + '/' + newDateSplit[2]
    return newDate
}

// define our function to initiate our standard full table
function init() {
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

}

// Write our filterTable function
function filterTable() {
    // first i need to clear out my existing table.
    tBody.remove()
    // Copying the above init function
    tableData.forEach(ufoSighting => {
        // Add conditional to check that the date matches the selected date
        var alienDateConverted = convertDate(alienDate.value)
        var datetimeConverted = convertDateTwo(ufoSighting.datetime)
        console.log(`Converted = ${alienDateConverted}`)
        console.log(`datetime = ${ufoSighting.datetime}`)
        console.log(`datetime Converted = ${datetimeConverted}`)
        if (alienDateConverted == datetimeConverted) {
            var row = tBody.append("tr")
            // Loop through the object itself using forEach and key, value notation
            Object.entries(ufoSighting).forEach(([key, value]) => {
                // Create the cell in the table as a td element
                var cell = row.append("td")
                // grab the value from the object and insert it as the text of the cell
                cell.text(value);
            console.log('true')
            });
        }
    });
}
// create our event listener
d3.selectAll("#searchButton").on("click", filterTable)

init()