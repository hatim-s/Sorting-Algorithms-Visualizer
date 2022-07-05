import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getQuickSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getBubbleSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getInsertionSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getSelectionSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 500;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#d8323c';

// This is the color of array bars that are being compa#d8323c throughout the animations.
const SECONDARY_COLOR = '#eaebea';

export default class SortingVisualizer extends React.Component {
      constructor(props) {
            super(props);

            this.state = {
                  array: [],
            };
      }

      componentDidMount() {
            this.resetArray();
      }

      resetArray() {
            const array = [];
            for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
                  array.push(randomInteger(10, 550));
            }
            this.setState({ array });
      }

      mergeSort() {
            const animations = getMergeSortAnimations(this.state.array);
            for (let i = 0; i < animations.length; i++) {
                  const arrayBars = document.getElementsByClassName('array-bar');
                  const isColorChange = i % 3 !== 2;
                  if (isColorChange) {
                        const [barOneIdx, barTwoIdx] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                        setTimeout(() => {
                              barOneStyle.backgroundColor = color;
                              barTwoStyle.backgroundColor = color;
                        }, i * ANIMATION_SPEED_MS);
                  } else {
                        setTimeout(() => {
                              const [barOneIdx, newHeight] = animations[i];
                              const barOneStyle = arrayBars[barOneIdx].style;
                              barOneStyle.height = `${newHeight}px`;
                        }, i * ANIMATION_SPEED_MS);
                  }
            }
      }

      quickSort() {
            // We leave it as an exercise to the viewer of this code to implement this method.
            const animations = getQuickSortAnimations(this.state.array);
            for (let i = 0; i < animations.length; i++) {
                  const arrayBars = document.getElementsByClassName('array-bar');
                  // const isColorChange = animations[i][0];
                  if (animations[i][0]) {
                        const [barOneIdx, barTwoIdx] = [animations[i][2], animations[i][3]];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = animations[i][1] === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                        setTimeout(() => {
                              barOneStyle.backgroundColor = color;
                              barTwoStyle.backgroundColor = color;
                        }, i * ANIMATION_SPEED_MS);
                  } else {
                        setTimeout(() => {
                              const [barOneIdx, newHeight] = [animations[i][2], animations[i][3]];
                              const barOneStyle = arrayBars[barOneIdx].style;
                              barOneStyle.height = `${newHeight}px`;
                        }, i * ANIMATION_SPEED_MS);
                  }
            }
      }

      insertionSort() {
            // We leave it as an exercise to the viewer of this code to implement this method.
            const animations = getInsertionSortAnimations(this.state.array);
            for (let i = 0; i < animations.length; i++) {
                  const arrayBars = document.getElementsByClassName('array-bar');
                  // const isColorChange = animations[i][0];
                  if (animations[i][0]) {
                        const [barOneIdx, barTwoIdx] = [animations[i][2], animations[i][3]];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = animations[i][1] === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                        setTimeout(() => {
                              barOneStyle.backgroundColor = color;
                              barTwoStyle.backgroundColor = color;
                        }, i * ANIMATION_SPEED_MS);
                  } else {
                        setTimeout(() => {
                              const [barOneIdx, newHeight] = [animations[i][2], animations[i][3]];
                              const barOneStyle = arrayBars[barOneIdx].style;
                              barOneStyle.height = `${newHeight}px`;
                        }, i * ANIMATION_SPEED_MS);
                  }
            }
      }

      bubbleSort() {
            // We leave it as an exercise to the viewer of this code to implement this method.
            const animations = getBubbleSortAnimations(this.state.array);
            for (let i = 0; i < animations.length; i++) {
                  const arrayBars = document.getElementsByClassName('array-bar');
                  // const isColorChange = animations[i][0];
                  if (animations[i][0]) {
                        const [barOneIdx, barTwoIdx] = [animations[i][2], animations[i][3]];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = animations[i][1] === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                        setTimeout(() => {
                              barOneStyle.backgroundColor = color;
                              barTwoStyle.backgroundColor = color;
                        }, i * ANIMATION_SPEED_MS);
                  } else {
                        setTimeout(() => {
                              const [barOneIdx, newHeight] = [animations[i][2], animations[i][3]];
                              const barOneStyle = arrayBars[barOneIdx].style;
                              barOneStyle.height = `${newHeight}px`;
                        }, i * ANIMATION_SPEED_MS);
                  }
            }
      }

      selectionSort() {
            // We leave it as an exercise to the viewer of this code to implement this method.
            const animations = getSelectionSortAnimations(this.state.array);
            for (let i = 0; i < animations.length; i++) {
                  const arrayBars = document.getElementsByClassName('array-bar');
                  // const isColorChange = animations[i][0];
                  if (animations[i][0]) {
                        const [barOneIdx, barTwoIdx] = [animations[i][2], animations[i][3]];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = animations[i][1] === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                        setTimeout(() => {
                              barOneStyle.backgroundColor = color;
                              barTwoStyle.backgroundColor = color;
                        }, i * ANIMATION_SPEED_MS);
                  } else {
                        setTimeout(() => {
                              const [barOneIdx, newHeight] = [animations[i][2], animations[i][3]];
                              const barOneStyle = arrayBars[barOneIdx].style;
                              barOneStyle.height = `${newHeight}px`;
                        }, i * ANIMATION_SPEED_MS);
                  }
            }
      }

      render() {
            const { array } = this.state;

            return (
                  <>
                        <div style={{ margin: 0, padding: 0, backgroundColor: "0c0e0c", height: '80vh', width: '100vw' }} className="array-container">
                              {array.map((value, idx) => (
                                    <div
                                          className="array-bar"
                                          key={idx}
                                          style={{
                                                backgroundColor: PRIMARY_COLOR,
                                                height: `${value}px`,
                                          }}></div>
                              ))}
                        </div>
                        <footer style={{
                              backgroundColor: '#0c0e0c', height: '10vh', width: '100vw'
                        }}>
                              <button className="button" style={{
                                    backgroundColor: '#d8323c', /* #d8323c */
                                    position: 'absolute',
                                    marginLeft: '1vw',
                                    marginRight: '1vw',
                                    left: 50,
                                    padding: 15,
                                    color: 'white',
                                    border: 'none',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: '2.25vh',
                                    borderRadius: 5
                              }} onClick={() => this.resetArray()}>Generate New Array</button>
                              <button className="button" style={{
                                    marginLeft: 15,
                                    marginRight: 15,
                                    padding: 15,
                                    backgroundColor: '#0c0e0c', /* #d8323c */
                                    color: 'white',
                                    border: 'none',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: 16
                              }} onClick={() => this.mergeSort()}>Merge Sort</button>
                              <button className="button" style={{
                                    marginLeft: 15,
                                    marginRight: 15,
                                    padding: 15,
                                    backgroundColor: '#0c0e0c', /* #d8323c */
                                    color: 'white',
                                    border: 'none',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: 16
                              }} onClick={() => this.quickSort()}>Quick Sort</button>
                              <button className="button" style={{
                                    marginLeft: 15,
                                    marginRight: 15,
                                    padding: 15,
                                    backgroundColor: '#0c0e0c', /* #d8323c */
                                    color: 'white',
                                    border: 'none',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: 16
                              }} onClick={() => this.insertionSort()}>Insertion Sort</button>
                              <button className="button" style={{
                                    marginLeft: 15,
                                    marginRight: 15,
                                    padding: 15,
                                    backgroundColor: '#0c0e0c', /* #d8323c */
                                    color: 'white',
                                    border: 'none',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: 16
                              }} onClick={() => this.bubbleSort()}>Bubble Sort</button>
                              <button className="button" style={{
                                    marginLeft: 15,
                                    marginRight: 15,
                                    padding: 15,
                                    backgroundColor: '#0c0e0c', /* #d8323c */
                                    color: 'white',
                                    border: 'none',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: 16
                              }} onClick={() => this.selectionSort()}>Selection Sort</button>
                        </footer>
                  </>
            );
      }
}

function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
}