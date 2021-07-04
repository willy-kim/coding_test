
//* 징검다리 문제 *//

//let 내구도=[1,2,1,4];
let 내구도=[5,3,4,1,3,8,3];
let 독=[
  {
    "이름":"루비독",
    "나이":"95년생",
    "점프력":"3",
    "몸무게":"4",
  },
  {
    "이름":"피치독",
    "나이":"95년생",
    "점프력":"3",
    "몸무게":"3",
  },
  {
    "이름":"씨-독",
    "나이":"72년생",
    "점프력":"2",
    "몸무게":"1",
  },
  {
    "이름":"코볼독",
    "나이":"59년생",
    "점프력":"1",
    "몸무게":"1",
  },
]

function 징검다리를건너라(내구도, 독) {
  answer =[];
  for (var 개별독 of 독){
    let 독의위치 = 0;
    let 실패=false;
    while (독의위치 < 내구도.length){
      독의위치 += parseInt(개별독['점프력'], 10);
      내구도[독의위치-1] -= parseInt(개별독['몸무게'], 10);
      if (내구도[독의위치-1] < 0){
        실패=true;
        break;
      }
    }
    if(!실패){
      answer.push(개별독['이름']);
    }    
  }
  return answer;
}
console.log(징검다리를건너라(내구도, 독))