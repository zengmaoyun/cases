/*
 * @ content: js各种遍历方法总结
 */

1.数组的遍历
for, forEach, map, filter, every, some


1) for循环
var arr = ["arr1","arr2","arr3"];
for(var i=0, len=arr.length; i<len; i++) {
	console.log(arr[i]);
}

终止循环: break;
var arr = ["arr1","arr2","arr3"];
for(var i=0, len=arr.length; i<len; i++) {
	if(arr[i] == "arr2") { break; }
	console.log(arr[i]);
}

2)forEach
forEach() 方法对数组的每个元素执行一次提供的函数
//MDN详细解析: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//返回值是 undefined
没有办法中止或者跳出 forEach 循环，除了抛出一个异常,但是这是错误的,完全可以用其他循环替代,如果想要中途跳出循环
var arr = ["arr1","arr2","arr3"];
arr.forEach(el => console.log(el));

//el: 数组当前项
//index: 数组当前项索引
//arra: 数组对象本身
//thisArg: 加了这个参数,在遍历的回调函数里面的this就是这个值
//Tip: 尝试在遍历里面操作arr或者array，可以直接改变arr的值

var arr = ["arr1","arr2","arr3","arr4"];
var thisArg = function() {};
thisArg.prototype.showName = function(){console.log("茂茂")};
var obj = new thisArg();
var value = arr.forEach(function(el, index, array) {   //用箭头函数,thisArg 参数会被忽略
	console.log(el, index, array);
	this.showName();
	//在遍历里面对数组的操作会
	//array.push(1);  //不会遍历到新的
	//arr.push(1)
	
	//array.pop();   //只遍历到现有的
	//arr.pop()
	
	//arr.shift();  //删除已经遍历过的内容,下一次遍历的时候中断遍历
	
	//arr[0] = undefined  //修改数组的值,如undefined会继续遍历
	//array[index+1] = undefined;
	return 1;
}, obj);

//value: undefined

3)map遍历
MDN: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
x ** 2 表示x的2次方
 
语法:
let new_array = arr.map(function callback(currentValue, index, array) { 
    // Return element for new_array 
}[, thisArg]);

["1", "2", "3"].map(parseInt);
//但实际的结果是 [1, NaN, NaN]
//因为parseInt有两个参数
