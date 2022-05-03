

<!-- 生成标签 直接输入标签名 按tab键即可 比如 div 然后tab 键
如果想要生成多个相同标签 加上 * 就可以了 比如 div*3 就可以快速生成3个div
如果有父子级关系的标签，可以用 > 比如 ul > li就可以了
如果有兄弟关系的标签，用 + 就可以了 比如 div+p
如果生成带有类名或者id名字的， 直接写 .demo 或者 #two tab 键就可以了 -->

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>first html</title>
	<h1>------------this is first html-----------</h1>
	<!-- 	<style type="text/css"></style>
	<link rel="stylesheet" type="text/css" href="style.css"/>

	<script type="text/javascript" ></script>
	<script src="my.js"></script> -->
</head>
<body>
	<!-- <h1 style="font-size:200px">&#9760;</h1> -->
	<div style="margin:50px;font-size:40px;color:orange;">inline style</div>
	
	<input type="button" value="唐伯虎" onclick="alert('秋香姐')" />
	<a href="javascript: alert('请点击');">点我一下</a>
</body>

<script type="text/javascript">

	// console.log("\u2620")
		
	var spam = [0, 1, 2, 3, 4, 5];
	var cheese = spam;
	cheese[1] = "hello";
	alert('spam:'+spam+'||||cheese:'+cheese);
		
	// var age = prompt('how old are you?',50);
	// alert(`you are ${age} years old`);

	// let isBoss = confirm("Are you the boss?");
	// alert( isBoss );

	// let user = {  name: "John",  age: 30};
	// user.sayHi = function() {	alert('Hello!'+user.name);	};
	// user.sayHi();

	// function sayHi() {	alert("Hello!");	};
	// user.sayHi = sayHi;
	// user.sayHi();

	// let user = {	sayHi: function() {	alert("Hello");	}	};
	// user.sayHi();

	// let user = {	sayHi() {	alert("Hello");	}	};
	// user.sayHi();

	var fruits = '<p style="color:red;font-size:30px;">生当作人杰，死亦为鬼雄</p>';

	document.write(fruits + "<br>");



















</script>
	
</html>


