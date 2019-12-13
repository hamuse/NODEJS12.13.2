/* function Initalizer(){ //생성자 함수
			
	this.vendingMachine = function(){
		VendingMachine.prototype.setChange = function(change){_change = change}
		VendingMachine.prototype.getChange = function(){return _change}
		VendingMachine.prototype.setItemNo = function(itemNo){_itemNo = itemNo}
		VendingMachine.prototype.getItemNo = function(){return _itemNo}
		VendingMachine.prototype.setItemNolist = function(itemNolist){_itemNolist = itemNolist}
		VendingMachine.prototype.getItemNolist = function(){return _itemNolist}
		VendingMachine.prototype.setItemList = function(itemList){_itemList = itemList}
		VendingMachine.prototype.getItemList = function(){return _itemList}
	}
	
}
function VendingMachineService(){
	this.insertCoin = function(coin){
		const init = new  Initalizer()
		init.vendingMachine()
		const vm = new VendingMachine()
		vm.setChange(coin)
		alert(`${vm.getChange()}원을 받음`)
		
	}
	this.selectItem = function(itemNo, quantity){}
	this.returnChange = function(){}
	this.handleOrder = function(quantity, price, itemName){}

} */
const service = {//객체리터럴 
	vendingMachine(){//원래는 this.vendingMachine()인데  this를 defualt 처리 했다.
		VendingMachine.prototype.setChange = function(change){_change = change}
		VendingMachine.prototype.getChange = function(){return _change}
		VendingMachine.prototype.setItemNo = function(itemNo){_itemNo = itemNo}
		VendingMachine.prototype.getItemNo = function(){return _itemNo}
		VendingMachine.prototype.setItemNolist = function(itemNolist){_itemNolist = itemNolist}
		VendingMachine.prototype.getItemNolist = function(){return _itemNolist}
		VendingMachine.prototype.setItemList = function(itemList){_itemList = itemList}
		VendingMachine.prototype.getItemList = function(){return _itemList}
	
	},
	insertCoin(coin){
		service.vendingMachine()
		const vm = new VendingMachine()
		vm.setChange(coin)
		vm.getChange() 
		alert(`${vm.getChange()}원을 받음 `)
	},
	selectItem(itemNo){
		service.vendingMachine()
		const count = new VendingMachine()
		
		count.getChange()
		let money = itemNo*800 
		count.setItemNo(money)
/* 		alert(`${vm.getChange()}개${itemNo.getItemNo()}`)
 */		/* service.insertCoin(coin)
 */     
		count.getItemNo()
		alert(`총 :${count.getItemNo()}원${count.getChange()} /`)
		service.returnChange()
	},
	returnChange(){
		service.vendingMachine()
		const vm = new VendingMachine()
		let coin = vm.getChange()
		let money =vm.getItemNo()
		let change = coin - money 
		vm.setItemNolist(change)
		vm.getItemNolist()
		alert(`잔돈: ${vm.getItemNolist()}원 `)
	},
	handleOrder(quantity,price,itemName){}
}	

