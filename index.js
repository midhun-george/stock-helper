var stocks = new Stocks('5VPEN9QA63CNPQFI'); // Replace with your own

// Let's get the stock data of Tesla Inc for the last 10 minutes
async function request () {
  var result = await stocks.timeSeries({
    symbol: 'amzn',
    //symbol:'NSE:RELIANCE',
    interval: '1min',
    amount: 1
   });

   document.body.innerHTML = JSON.stringify(result);
}

request();