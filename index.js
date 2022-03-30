function newImage(src,x,y){
    let element = document.createElement('img')
    element.src = src;
    element.style.position = 'fixed';
    element.style.left = x +'px';
    element.style.bottom = y + 'px';
    document.body.append(element)
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