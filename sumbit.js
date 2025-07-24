
const form = document.getElementById('form')


form.addEventListener("submit", event => {
  event.preventDefault(); // 阻止傳統送出
  const formData = new FormData(form);// 自動抓 form 裡所有 name 的值
  // for(const [key, value] of formData.entries()){
  //    console.log(key,": " + value); //取的所有name 和其對應 value
  //  }
  
  /*
    上述已經達打包表單的作用了, 需要的資料接下來就是透過api送到後端了
  */ 
  const formdataObj = Object.fromEntries(formData);

  // console.log(formData.get("Number")); // 擷取單個input中的name屬性的值
  
  fetch("http://localhost:3000", {
    method : "POST",
    headers : {
      "Content-Type": "application/json"// 向伺服器表明是 json 格式
    },
    body : JSON.stringify( formdataObj ),
  })// 把表單資料送到後端
  .then(res => res.json())
  .then(data => {
    console.log("成功送出！伺服器回傳：", data);
  })
  .catch(error => {
    console.error("送出失敗：", error);
  });
});


