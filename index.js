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
  var currentLevel=document.getElementById('grand-node').querySelectorAll('div');
  var answerLength=currentLevel.length-1;
  return currentLevel[answerLength];
}

function increaseRankBy(num){
  var rankedListsA= document.querySelectorAll('ul.ranked-list li');

  for (var i =0;i<rankedListsA.length;i++){
    parseInt(rankedListsA[i].innerHTML)+num;
  }
}
