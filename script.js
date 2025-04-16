function calculateMinCost(ropes) {
  //your code here
	document.getElementById('submit').addEventListener('click', function() {
    // Step 1: Parse the input
    const input = document.getElementById('ropeLengths').value;
    const ropes = input.split(',').map(Number).filter(num => !isNaN(num));

    // Step 2: Use a Min-Heap (priority queue)
    const minHeap = new MinHeap();
    
    // Add all ropes to the heap
    ropes.forEach(length => minHeap.insert(length));

    let totalCost = 0;

    // Step 3: Calculate the minimum cost
    while (minHeap.size() > 1) {
        const first = minHeap.extractMin();
        const second = minHeap.extractMin();
        const cost = first + second;

        // Add the cost to the total
        totalCost += cost;

        // Insert the new rope back into the heap
        minHeap.insert(cost);
    }

    // Step 4: Display the result
    document.getElementById('result').innerText = totalCost;
});

// Min-Heap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    size() {
        return this.heap.length;
    }
}

}  
