class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {		
		if (!this.left) {
			this.left = node;
		} else if (!this.right) {
			this.right = node;
		} else if (this.left && this.right){}
	}

	removeChild(node) {
		if (this.left != node && this.right != node) {
			throw Exeption("Error!");
		}
		if (this.left == node) {
			this.left = null;
		}
		if (this.right == node) {
			this.right = null;
		} 

	}

	remove() {
	
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
