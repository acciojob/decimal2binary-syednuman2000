function decimalToBinary(n) {
// write your code here
	arr = [];
	while(target>1){
		arr.push(target%2);
		target = Math.floor(target/2);
	}
	arr.push(1);
	return arr.reverse().join("");
}

module.exports = threeSum;
