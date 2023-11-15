//定義//
var startTime;
var holdTime=0;
var passedTime=0;
var timer;

var startButton;
var stopButton;
var resetButton;

var displayedtime;


displayedtime=document.getElementById("time")

startButton=document.getElementById("start")
stopButton=document.getElementById("stop")
resetButton=document.getElementById("reset")

//挙動start//

function start(){
  startTime=Date.now();
  
  measureTime();
  //計算された経過時間をstopが押されるまで表示させるため//
  
  
  startButton.disabled=true;
  stopButton.disabled=false;
  resetButton.disabled=false;
//stopとresetボタンの無効化を解除//
}

//挙動stop//
function stop(){
  clearInterval(timer)
  //timerの停止//
  holdTime+=Date.now()-startTime;
  //初めにスタートした時刻から、ストップが押された時刻（現在時刻）の差//

  startButton.disabled=false;
  stopButton.disabled=true;
  resetButton.disabled=false;
  
}

//挙動reset//
function reset(){
  clearInterval(timer);
  
  displayedtime.textContent="00:00:00.000";
  //displayedtimeをテキストとして表示//
  
  passedTime=0;
  holdTime=0;
  
  startButton.disabled=false;
  stopButton.disabled=true;
  resetButton.disabled=true;
}


//時間の計測式//
function measureTime(){
  timer=setTimeout(function(){
   passedTime=Date.now()-startTime+holdTime;
   displayedtime.textContent=new Date(passedTime).toISOString().slice(11,23);
   measureTime();
  },10);
}
  //setTimeout(処理内容,実行タイミング);//
  //new dateで経過時間を取得//
  //toISOStingでISO8601表記の日時にする、それの左から11〜23の要素が必要//
  //setTimeoutの単位はミリ秒//
  











