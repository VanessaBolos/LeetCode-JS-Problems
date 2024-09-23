## LEETCODE PROBLEM #912. SORT AN ARRAY
### Given an array of integers nums, sort the array in ascending order and return it.
### Solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
#### Example 1 input: nums = [5,2,3,1] 
#### Example 2 input: nums = [5,1,1,2,0,0]

## Challenges:
It is more simpler to visualize but harder to write in code. Had to go back to past notes and tutorials to get a more clearer picture. However, there were many different approaches in how people write their code and I've kind of got lost in the process. One thing most have in common though is that they use mergeSort to solve the problem.

## How I approached the solution and any optimizations I made.
First I had to figure out what sorting method for an array has a time complexity of O(nlog(n)), which in this case the best solution would be doing a merge sort. Merge Sort is a classic divide-and-conquer algorithm. The array is recursively divided into two halves, and then these halves are merged in sorted order. I then mapped the array in the paper and visualize the sorting and merging so I have more clue on how to code it. I made sure to make some notes step by step to make it easier to understand and remind myself what's happening.


## LEETCODE PROBLEM #743. NETWORK DELAY TIME
### You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.
### We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.
#### Example 1:
#### Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
#### Output: 2

## Challenges:
Again, it was easier to visualize but hard to put it in code. As I was looking for ways to approach this, I happen to learn about "min-heap" to keep track of the next node to visit. This ensures to always process the node with the current shortest known travel time.

## How I approached the solution and any optimizations I made.
The problem is asking whats the minimum time it takes for all the nodes to receive the signal; so best case to approach this is using Dijkstra's Algorithm. This algorithm is ideal for finding the shortest paths from a single source to all other nodes in a graph with non-negative weights, which fits this problem description. Then, represent the graph as an adjacency list using a Map. Each key in the map is a node, and the value is an array of pairs, where each pair represents a neighboring node and the travel time to that node. Then, use an array dist where dist[i] represents the shortest time it takes to reach node i from the starting node k. Then, initialize all values in dist to infinity (Infinity), except for the starting node k, which is initialized to 0. For more information please refer to the .js file as it also have a step-by-step explanation.
