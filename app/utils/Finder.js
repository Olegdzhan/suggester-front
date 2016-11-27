export default class Finder {
	constructor(arr) {
		this.arr = arr;
	}

	findObjById(id) {
		let index;
		for (let i = 0; i < this.arr.length; i++) {
			if (this.arr[i].id === id) {
				index = i;
				break;
			}
		}
		return index;
	}
}