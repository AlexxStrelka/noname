var tagDiv;
var tagH3;
var tagOl;
var tagLi;
var tagForm;
var tagInput;
var tagButton;
var textVariant;

var testTask = {
  title: 'Тест по программированию',
  docBody: document.body,
  
  createContainer: function () {
			alert("Start");
			tagDiv = document.createElement('div');
			tagDiv.classList.add('container');
			this.docBody.appendChild(tagDiv);
			console.log(tagDiv);
  },
  createHeader: function (testTitle) {
    	tagH3 = document.createElement('h3');
      tagH3.innerHTML = testTitle;
      tagH3.style.textAlign = "center";
      var container = document.querySelector('.container');
      container.appendChild(tagH3); 
      console.log(tagH3);
  },

  createOl: function () {
			tagOl = document.createElement('ol');
			tagOl.id = "list";
			var container = document.querySelector('.container');
      container.appendChild(tagOl);
			console.log(tagOl);
  },
	createLi: function (Question) {
						tagLi = document.createElement('li');
						tagLi.classList.add('liClass');
						var itemList = document.getElementById('list'); //сделать передачу инпута в другую функцию
						itemList.appendChild(tagLi);
						tagLi.innerHTML = Question;
						tagLi.style.color = "red";
						console.log(tagLi);
	  },

	createForm: function (){
		var tagForm = document.createElement('form');
  	tagForm.classList.add('formClass');
  	var tagLi = document.querySelector('.liClass');
  	tagLi.appendChild(tagForm);
  	tagForm.setAttribute('action', '#');
  	console.log(tagForm);
	},

  createInput: function (Variants){
  			var tagInput = document.createElement('input');
  			tagInput.classList.add('inputClass');
  			var tagForm = document.querySelector('.formClass');
  			tagForm.appendChild(tagInput);
  			tagInput.setAttribute('type', 'checkbox');
  			tagInput.setAttribute('value', 'variant');
  			tagInput.style.display = "block";
  			// tagInput.innerHTML = Variants;
  			console.log(tagInput);
  			
  },

// createLabel: function (Variants){
//         var tagLabel = document.createElement('span');
//   			var findInput = document.querySelector('.inputClass');
// 				findInput.appendChild(tagLabel);
// 				tagLabel.innerHTML = Variants;
// 				console.log(tagLabel);
// }
	  

	  
}

testTask.createContainer();
testTask.createHeader("Тест по программированию");
testTask.createOl();
testTask.createLi("Вопрос №1");
testTask.createForm();
testTask.createInput("Вариант ответа №1");
testTask.createInput("Вариант ответа №2");
testTask.createInput("Вариант ответа №3");
// testTask.createLabel("Вариант ответа №1");
// testTask.createLabel("Вариант ответа №2");
// testTask.createLabel("Вариант ответа №3");


