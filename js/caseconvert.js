var caseConvert = function(letter){
    var name = "";
    for(var i = 0; i<letter.length; i++){
        if(letter[i] === letter[i].toLowerCase()){
            name += letter[i].toUpperCase();
        }else {
            name += letter[i].toLowerCase();
        }
    }
    console.log(name);
    return name;
}
var text = 'SonaLsharMa';
var swappedText = caseConvert(text);