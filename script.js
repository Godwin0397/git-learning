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

function getFirstData(inputData, n){
    if (n){
        if (n<0){
            return []
        }
        else if (n>0){
            return inputData.slice(0, n)
        }
    }
    else{
        return inputData[0]
    }
}
console.log(getFirstData([4,5,8,9]))

let getFirstDataAnonymousFunction = function(inputData, n){
    if (n){
        if (n<0){
            return []
        }
        else if (n>0){
            return inputData.slice(0, n)
        }
    }
    else{
        return inputData[0]
    }
}
console.log(getFirstDataAnonymousFunction([5,8,9,6,1,4],5))


