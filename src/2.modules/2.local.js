var log  = {
    info: function(info){
        console.log("Info: " + info)
    },
    warning: function(warning){
        console.log("Warning: " + warning)
    },
    error: function(error){
        console.log("Error: " + error)
    },
}

module.exports = log
// module.exports ="hello World"
// module.exports = true

module.exports.display = function(){
    console.log("Here is the display function, which got added at later point")
}

module.exports.message ="This is extended"