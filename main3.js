// 배 태우기 문제 //

let 대기인원 = 14000605;
/*
9시       25  25
9시 10분  15  40
9시 20분  15  55
9시 30분  15  70
9시 40분  15  85
9시 50분  15  100 

100명씩 12시간: 1200명
*/

function 배를건너는시간(대기인원){
  let 연 = 0, 월= 0, 일= 0, 시= 0, 분= 0;

  let 걸린일수 = 대기인원/1200;  

  // 걸린 연도
  let 일년일수 = 0;
  for (var i=1; i<11;i++){
    일년일수 += 2**i
  }
  연 = parseInt((대기인원/1200/일년일수), 10);

  // 월, 일, 시
  let 나머지일수 = (대기인원/1200)%일년일수
  let 걸린월수 = 0;

  for (var i=10;i>0;i--){
    걸린월수++;
    if(나머지일수 <2**i){
      break;
    }
    나머지일수 = 나머지일수 -2**i
  }
  일 = 나머지일수;
  월 = 걸린월수-1;
  시 = parseInt((대기인원%1200)/100 + 9, 10); // 시간(9시부터 시작)

  // 분, 시간 재계산
  let 출발분= [25,40, 55,70,85,100]
  let 최종계산된분 = 0;
  for (var variable in 출발분){
    if (출발분[variable] > (대기인원%1200)%100){
      최종계산된분 = variable*10;
      break;
    }
  }

  let date = new Date();
  최종계산된분 = 최종계산된분 + date.getMinutes();

  if (최종계산된분 >60){
    최종계산된분 -60;
    시 += 1 // 시간에도 +1 해야합니다.
  }
  분 = 최종계산된분;

  return `
    ${연}연
    ${월}월
    ${일}일
    ${시}시
    ${분}분    
  `;
}
console.log(배를건너는시간(대기인원));