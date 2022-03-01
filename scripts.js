var names = ['Will', 'Walker', 'Tyler', 'Oxy', 'Cole']
var locations = ['Study', 'Ballroom', 'Hallway', 'Dormetory', 'Dining room', 'Living room', 'Billard room', 'Conservatory', 'Cellar', 'Library']
var weapons = ['Salt and Pepper Shakers', 'A can of Dr.Pepper', 'Old Spice Deoderant', 'A bar of soap', 'the Knife', 'the Gun', 'the CandelStick', 'a Laptop', 'a desktop monitor', 'a Book', 'Kindness', 'a machete named kindness', 'an oscillating saw', 'a reciprocating saw', 'a drill', 'a 2x4', 'a baseball bat', 'a football', 'a helmet', 'a potted plant']
var div = document.createElement('div')
document.body.appendChild(div)
var h3 = document.createElement('h3')

h3.className = 'list'
window.addEventListener('DOMContentLoaded', function () {
    for(var i = 1; i<=100; i++){
        div.appendChild(h3)
        var text = document.createTextNode('Accusation ' +i ) 
        h3.appendChild(text)   
        
    }
 
 h3.addEventListener("click", function(){
var friend = names[i%5]
var location = locations[i%10]
var weapon = weapons[i%20]

function accuAlert(){
    alert('Accusation ' + i + ': I accuse ' + friend + ' with ' +weapon+ ' in the ' +location +'!')
}
return accuAlert()
})
})

