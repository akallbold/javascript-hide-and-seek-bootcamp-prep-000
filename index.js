function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var currentLevel=document.getElementsByTagName('div');

  for (var i = 0; i<currentLevel.length;i++){
    if (currentLevel[i].className==='target'){
      return currentLevel[i];
    }
  }
}

function deepestChild(){
  var currentLevel=document.getElementById('grand-node');

  while (currentLevel.children){
    currentLevel+= '.children[0]';
  } return currentLevel.innerHTML;
}

function increaseRankBy(num){
  var rankedListsA= document.getElementsByClassName('ranked-list')

  for (var i =0;i<rankedListsA.length;i++){
    for(var j =0;j<rankedListsA[i].children.length;j++){
      var current= parseInt(rankedListsA[i].children[j].innerHTML);
      // console.log(current);
      current += num;
      // console.log(current);
    }
  }
}
