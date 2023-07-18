console.log("main.js!!");

 function onClick(){
        //1つ目の入力ボックスの値を取得する
        var value1 = document.getElementById("num1").value;
        //2つ目の入力ボックスの値を取得する
        var value2 = document.getElementById("num2").value;
        //3つ目の入力ボックスの値を取得する
        var value3 = document.getElementById("num3").value;


        //足算する
        var result =  parseInt(value1) * parseInt(value2) / parseInt(value3) ;
        
        //値を設定する
        document.querySelector('.result').innerHTML = result ;
        

    }

    // 体重（kg）と身長（m）を設定
var weight = 70;
var height = 1.75;

// BMIを計算する関数
function calculateBMI(weight, height) {
  var bmi = weight / (height * height);
  return bmi;
}