function newImage(src,x,y){
    let element = document.createElement('img')
    element.src = src;
    element.style.position = 'fixed';
    element.style.left = x +'px';
    element.style.bottom = y + 'px';
    document.body.append(element)
    return element;
}

//let greenCharacter = document.createElement('img')
/* greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter) */
newImage('assets/green-character.gif',100,100)

//let pineTree = document.createElement('img')
/* pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree) */
newImage('assets/pine-tree.png',450,200)

newImage('assets/tree.png',200,300)
newImage('assets/pillar.png',350,100)
newImage('assets/crate.png',150,200)
newImage('assets/well.png',500,425)

/* let sword = newImage('assets/sword.png',500,405)
sword.addEventListener('dblclick',function(){
    sword.remove();
})

let shield = newImage('assets/shield.png',165,185)
let staff = newImage('assets/staff.png',600,100)

shield.addEventListener('dblclick',function(){
    shield.remove();
})

staff.addEventListener('dblclick',function(){
    staff.remove();
}) */
function newItem(inFunction){
    let element = inFunction;
    element.addEventListener('dblclick',function(){
        element.remove();
    })
}
newItem(newImage('assets/sword.png',500,405))
newItem(newImage('assets/shield.png',165,185))
newItem(newImage('assets/staff.png',600,100))