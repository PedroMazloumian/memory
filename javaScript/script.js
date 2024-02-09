let btn = document.querySelector('.controls-buttons span');
btn.onclick = function(){
    // ask user for the player name
    let yourName = prompt('What Is Your Name');
    if(yourName == null || yourName == ''){
        // set e default unknown to the player name
        document.querySelector('.name').innerHTML = 'Hello :' + ' ' +'Unknown';
    }else{
        //set name of the player
        document.querySelector('.name').innerHTML = 'Hello :' + ' ' + yourName;
    }
    // remove before screen controls buttons
    document.querySelector('.controls-buttons').remove();
};

// variables

let duration = 1000;
let blocksContainer = document.querySelector('.memory-game-blocks');
let blocks = Array.from(blocksContainer.children);

// let orderRange = [...Array(blocks.length).keys()];
let orderRange =Array.from(Array(blocks.length).keys());
shuffle(orderRange);

// add roder css proppert to evry game blocks

 blocks.forEach((block , index) => {

     block.style.order = orderRange[index];

     // add click event
     block.addEventListener('click' , function(){
          flipBlock(block);
     });

 });


/*  Flip Block Function add class is-flipped*/
function flipBlock(selectBlock){
    selectBlock.classList.add('is-flipped');

    // collect all flipped blocks
    let allFlippedBlocks = blocks.filter(flipBlock => flipBlock.classList.contains('is-flipped'));

    // if there is two selected blocks
    if (allFlippedBlocks.length === 2) {

        // stop clicking function 
        stopClicking();

        // check matched blocks function
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }

}


        // stop clicking function 
function stopClicking() {
    // add class no clicking on main container
    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {
        // remove class no clicking after duration
        blocksContainer.classList.remove('no-clicking');

    }, duration);
}

        // check matched blocks function
function checkMatchedBlocks(firstBlock, secondBlock){

    let triesElement = document.querySelector('.tries span');

    if(firstBlock.dataset.technology === secondBlock.dataset.technology) {
        
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

    }else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        
        setTimeout(() => {
  
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
       
        },1000)
    }

}



// shuffle function 
function shuffle(array){ 
     let current = array.length,
     temp,
     random ;
     while (current > 0) {
        // get random number
        random = Math.floor(Math.random() * current);
        // decrease current by 1
        current--;

        // shuffle 

        // [1] save current element in temp
        temp = array[current];
        // [2] place random element on current position
        array[current] = array[random];
        // [3] place temp on random position
        array[random] = temp;

     }

     return array;
}




// let shuffledOrder = [];
// function moveToMemoryBlock (id) {
//     return document.getElementById(`memory-${id}`);
// }
