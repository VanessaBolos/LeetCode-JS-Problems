// LEETCODE PROBLEM 743. NETWORK DELAY TIME

//You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.
//We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

// Example 1:
// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2
// Example 2:

// Input: times = [[1,2,1]], n = 2, k = 1
// Output: 1
// Example 3:

// Input: times = [[1,2,1]], n = 2, k = 2
// Output: -1

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
let networkDelayTime = function(times, n, k) {
    // Step 1: Create an adjacency list for the graph
    const graph = new Map();
    for (let i = 1; i <= n; i++) {
        graph.set(i, []);
    }
    
    for (let [u, v, w] of times) {
        graph.get(u).push([v, w]);  // u is the source, v is the target, w is the weight (time)
    }

    // Step 2: Initialize the distance array and set the distance for the start node k to 0
    const dist = Array(n + 1).fill(Infinity);
    dist[k] = 0;
    
    // Step 3: Use a priority queue (min-heap) to store the nodes to visit
    const minHeap = [[0, k]]; // [current time, node]

    // Step 4: Process nodes using the priority queue
    while (minHeap.length > 0) {
        // Get the node with the smallest known distance (time)
        const [currentTime, node] = minHeap.shift();
        
        // If the current node's time is greater than the known shortest distance, continue
        if (currentTime > dist[node]) continue;

        // Step 5: Explore neighbors and relax the edges
        for (let [neighbor, time] of graph.get(node)) {
            let newTime = currentTime + time;
            // If we find a shorter path to the neighbor, update it
            if (newTime < dist[neighbor]) {
                dist[neighbor] = newTime;
                minHeap.push([newTime, neighbor]);
            }
        }
        
        // Sort minHeap based on the time to keep the priority queue sorted
        minHeap.sort((a, b) => a[0] - b[0]);
    }

    // Step 6: Find the maximum time in the distance array (ignoring the 0th index)
    let maxTime = Math.max(...dist.slice(1));

    // Step 7: If there is any node that is still unreachable, return -1, else return the maxTime
    return maxTime === Infinity ? -1 : maxTime;
};

// Example usage:
let times = [[2,1,1],[2,3,1],[3,4,1]];
let n = 4;
let k = 2;
console.log(networkDelayTime(times, n, k)); // Output: 2
