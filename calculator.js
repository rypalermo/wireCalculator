var error;
var result;

var maxFeet = 680;
var minFeet = 0;

function findWire() {

    var volts = document.getElementById("volts").value;
    var amps = document.getElementById("amps").value;
    var feet = document.getElementById("wireLength").value;

    // console.log("//////")
    console.log("amps: " + amps)
    console.log("feet: " + feet)


    for (property in reference[volts][amps]) {
        console.log("property: " + property)
        if (feet <= +property) {
            result = reference[volts][amps][property]
            console.log("result: " + result)
            error = false;
            break;
        } else {
            error = true;
        }
    }

    console.log("//////")

    if (error == false) {
        if(document.getElementById("pipeSizeWrapper")) {
            document.getElementById("pipeSizeWrapper").remove();
            }
        document.getElementById("answer").textContent = result;

        var table = document.createElement("table")
        var tableRow = document.createElement("tr")
        var tableHeader = document.createElement("th")
        tableHeader.setAttribute("colspan", "2")
        var tableHeaderText = document.createTextNode("Max Conduit Fill");

        tableHeader.appendChild(tableHeaderText)
        tableRow.appendChild(tableHeader)
        table.appendChild(tableRow)

        for (pipeSize in pipeSizes[result]) {
            var tableRow2 = document.createElement("tr")
            var tableCell1 = document.createElement("td")
            var tableCell2 = document.createElement("td")
            var pipeSizeText = document.createTextNode(pipeSize)
            var numWiresText = document.createTextNode(pipeSizes[result][pipeSize])

            tableCell1.appendChild(pipeSizeText)
            tableCell2.appendChild(numWiresText)

            tableRow2.appendChild(tableCell1)
            tableRow2.appendChild(tableCell2)

            table.appendChild(tableRow2)
        }
        var output = document.getElementById("output")
        var pipeSizeWrapper = document.createElement("div")
        pipeSizeWrapper.setAttribute("id", "pipeSizeWrapper")
        pipeSizeWrapper.appendChild(table)
       output.appendChild(pipeSizeWrapper)

    } else {
        document.getElementById("answer").textContent = "you need to change something";
        if(document.getElementById("pipeSizeWrapper")) {
            document.getElementById("pipeSizeWrapper").remove();
            }
    }
}

