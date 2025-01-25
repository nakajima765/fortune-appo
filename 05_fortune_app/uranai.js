const button = document.getElementById("fortune-button");
const resultDiv = document.getElementById("result");

const fortunes = ["大吉: とても良い一日になりそう！","中吉: なかなか良いことがあるかも！",
  "吉: 普通の一日。",
  "小吉: ちょっとした幸運があるかも。",
  "凶: 今日は慎重に行動しよう。"];

  const colors = ["赤","青","緑","黄色","紫"];
  const items =["財布","本","時計","ペン","バッグ"];

  button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomIndex2 = Math.floor(Math.random() * colors.length);
    const randomIndex3 = Math.floor(Math.random() * items.length);


    const randomFortune = fortunes[randomIndex];
    const randomColors = colors[randomIndex2];
    const randomItems = items[randomIndex3];


    resultDiv.innerHTML= 
    `<p>${randomFortune}</p>
      <p>ラッキーカラー: ${randomColors}</p>
      <p>ラッキーアイテム: ${randomItems}</p>`;
  
  });

  
