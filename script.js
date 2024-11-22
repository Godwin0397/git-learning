var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var res = JSON.parse(request.response)
    console.log(res)
    for (let x of res){
        console.log('Common Name:', x.name.common, 'Capital:', x.capital && x.capital[0] ? x.capital[0] : 'Capital not available', 'Area:', x.area)
    }
}