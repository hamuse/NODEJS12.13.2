const compo = {
	div(id){
		const div = document.createElement('div')
			div.setAttribute('id',id)
			div.setAttribute('style','border:1px solid black')
			/* div.textContent = text */
			return div
	},
	inputText(id, type){
		const input = document.createElement('input')
			input.setAttribute('type', type)
			input.setAttribute('id',id)
			return input
	},
	inputButton(id,type,val){
		const input = document.createElement('input')
			input.setAttribute('type',type)
			input.setAttribute('value', val)
			input.setAttribute('id',id)
			return input
	},
	br(){
			return document.createElement('br')
	}
}
function Div(){
	this.make = function(id){
			const div = document.createElement('div')
			div.setAttribute('id',id)
			div.setAttribute('style','border:1px solid black')
			/* div.textContent = text */
			return div
		
	}
} 
function InputText(){ /*  Func 함수 선언식 */
	this.make = function( id,type){ /* this 처리해서 인스턴스 변수 */
		/* if(input == undefined || input == null){ */
			/* const arr = [...arguments] */
			const input = document.createElement('input')
			input.setAttribute('type', type)
			input.setAttribute('id',id)
			return input
		/* } */
	}
} 
function InputButton(){ /*  Func 함수 선언식 */
	this.make = function(id, type, val){ /* this 처리해서 인스턴스 변수 */
		/* if(input == undefined || input == null){ */
			const input = document.createElement('input')
			input.setAttribute('type',type)
			input.setAttribute('value', val)
			input.setAttribute('id',id)
			return input
		/* } */
	}
}
function Br(){ /*  Func 함수 선언식 */
	this.make = function(){ /* this 처리해서 인스턴스 변수 */
		/* if(input == undefined || input == null){ */
			
			const br = document.createElement('br')
			return br
		/* } */
	}
}
function Func02(){
	this.play = function(){
		if(input == nudefined || input == null || input == ''){
			alert('텍스트 필드를 입력하세요')
		}else{
			alert((input.value !== '') ? input.value : '먼저 입력하시오')
			input.focus()
		}
		choice.value = 0
	}
}
function Factory(type){
 	switch(type){
		case 'inputText': return new InputText()
		case 'inputButton' : return new InputButton()
		case 'br' : return new Br()
		case 'div' : return new Div()
		}
}

		
