async function loadTextfile() {
    const response = await fetch('customerdata.csv');
    const data = await response.text();
    var lines = data.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = currentline[j].trim();
        }
        result.push(obj);

    }
    let orderSiteRecive = result.length
    document.getElementById("order").innerHTML += `Total Orders Site received : <i class="chart line icon"></i>${orderSiteRecive}   `;
    let totalAmount = []
    let names = []
    result.forEach(totalamount => {
        totalAmount.push(Number(totalamount.Amount));
        names.push(totalamount.Name)
    })

    let total = totalamount(totalAmount)
    document.getElementById("total-amount").innerHTML = `Total Amount :  <i class="dollar sign icon"></i>${total}  `;

    let na = groupBy(result, 'Name');
    let orderOnetimeData = [];
    let orderOnetimeAmount = []
    let orderSecondtimeData = [];
    let orderSecondtimeAmount = [];
    let orderThirdtimeData = [];
    let orderThirdtimeAmount = [];
    let orderFourthtimeData = [];
    let orderFourthtimeAmount = [];
    let orderFifthtimeData = [];
    let orderFifthtimeAmount = [];
    let name = Object.values(na).map((singlename) => {
        if (singlename.length === 1) {
            singlename.map((customersname) => {
                orderOnetimeData.push(customersname.Name)
                orderOnetimeAmount.push(customersname.Amount)
                document.getElementById("td-names").innerHTML += `<td>${customersname.Name}</td><br />`;
                document.getElementById("td-amount").innerHTML += `<td>${customersname.Amount}</td><br />`;

            })

        }

        if (singlename.length === 2) {
            singlename.map((customersname) => {
                orderSecondtimeData.push(customersname.Name)
                orderSecondtimeAmount.push(customersname.Amount)
                document.getElementById("td-names-second").innerHTML += `<td>${customersname.Name}</td><br />`;
                document.getElementById("td-amount-second").innerHTML += `<td>${customersname.Amount}</td><br />`;

            })

        }

        if (singlename.length === 3) {
            singlename.map((customersname) => {
                orderThirdtimeData.push(customersname.Name)
                orderThirdtimeAmount.push(customersname.Amount)
                document.getElementById("td-names-third").innerHTML += `<td>${customersname.Name}</td><br />`;
                document.getElementById("td-amount-third").innerHTML += `<td>${customersname.Amount}</td><br />`;

            })

        }

        if (singlename.length === 4) {
            singlename.map((customersname) => {
                orderFourthtimeData.push(customersname.Name)
                orderFourthtimeAmount.push(customersname.Amount)
                document.getElementById("td-names-fourth").innerHTML += `<td>${customersname.Name}</td><br />`;
                document.getElementById("td-amount-fourth").innerHTML += `<td>${customersname.Amount}</td><br />`;

            })

        }
        if (singlename.length === 5) {
            singlename.map((customersname) => {
                orderFifthtimeData.push(customersname.Name)
                orderFifthtimeAmount.push(customersname.Amount)
                document.getElementById("td-names-fifth").innerHTML += `<td>${customersname.Name}</td><br />`;
                document.getElementById("td-amount-fifth").innerHTML += `<td>${customersname.Amount}</td><br />`;

            })

        }

    })
    let myChart = document.getElementById("mychart").getContext('2d')

    let masspop = new Chart(myChart, {
        type: 'bar',

        data: {
            labels: orderOnetimeData,
            datasets: [{
                label: 'Customer Ordered once',
                data: orderOnetimeAmount,
                backgroundColor: '#F5CBA7 ',

            }]
        }
    })

    let mychartSecond = document.getElementById("mychartSecond").getContext('2d')

    let secondChart = new Chart(mychartSecond, {
        type: 'bar',
        data: {
            labels: orderSecondtimeData,
            datasets: [{
                label: 'Customer Ordered Twice',
                data: orderSecondtimeAmount,
                backgroundColor: '#F5CBA7 ',
            }]
        }
    });
    let mychartThird = document.getElementById("mychartThird").getContext('2d')

    let orderThirdtime = new Chart(mychartThird, {
        type: 'bar',
        data: {
            labels: orderThirdtimeData,
            datasets: [{
                label: 'Customer Ordered Third',
                data: orderThirdtimeAmount,
                backgroundColor: '#F5CBA7 ',
            }]
        }
    })

    let mychartFourth = document.getElementById("mychartFourth").getContext('2d')

    let orderFourthtime = new Chart(mychartFourth, {
        type: 'bar',
        data: {
            labels: orderFourthtimeData,
            datasets: [{
                label: 'Customer Ordered Fourth',
                data: orderFourthtimeAmount,
                backgroundColor: '#F5CBA7 ',
            }]
        }
    });

    let mychartFifth = document.getElementById("mychartFifth").getContext('2d')

    let orderFifthhtime = new Chart(mychartFifth, {
        type: 'bar',
        data: {
            labels: orderFifthtimeData,
            datasets: [{
                label: 'Customer Ordered Fifth',
                data: orderFifthtimeAmount,
                backgroundColor: '#F5CBA7 ',
            }]
        }
    })

    return JSON.stringify(result);



}



function totalamount(amount) {
    return amount.reduce(function(a, b) {
        return a + b;
    }, 0);
}


function orderOnetime(names) {
    return names.filter((item, i, ar) => ar.indexOf(item) === i);

}

// Accepts the array and key
function groupBy(array, key) {

    return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
        );
        // let payload = {
        //         result
        //     }
        // console.log(result)
        return result;
    }, {});


};