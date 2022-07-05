export function getMergeSortAnimations(array) {
      const animations = [];
      if (array.length <= 1) return array;
      const auxiliaryArray = array.slice();
      mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
      return animations;
}

function mergeSortHelper(
      mainArray,
      startIdx,
      endIdx,
      auxiliaryArray,
      animations,
) {
      if (startIdx === endIdx) return;
      const middleIdx = Math.floor((startIdx + endIdx) / 2);
      mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
      mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
      doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
      mainArray,
      startIdx,
      middleIdx,
      endIdx,
      auxiliaryArray,
      animations,
) {
      let k = startIdx;
      let i = startIdx;
      let j = middleIdx + 1;
      while (i <= middleIdx && j <= endIdx) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([i, j]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([i, j]);
            if (auxiliaryArray[i] <= auxiliaryArray[j]) {
                  // We overwrite the value at index k in the original array with the
                  // value at index i in the auxiliary array.
                  animations.push([k, auxiliaryArray[i]]);
                  mainArray[k++] = auxiliaryArray[i++];
            } else {
                  // We overwrite the value at index k in the original array with the
                  // value at index j in the auxiliary array.
                  animations.push([k, auxiliaryArray[j]]);
                  mainArray[k++] = auxiliaryArray[j++];
            }
      }
      while (i <= middleIdx) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([i, i]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([i, i]);
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
      }
      while (j <= endIdx) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([j, j]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([j, j]);
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
      }
}

// ----------------------------------------------------------------------------------------------------------------

export function getQuickSortAnimations(array) {
      const animations = [];
      if (array.length <= 1) return array;
      // const auxiliaryArray = array.slice();
      quickSortHelper(array, 0, array.length - 1, animations);
      return animations;
}

function quickSortHelper(
      mainArray,
      startIdx,
      endIdx,
      animations,
) {
      if (startIdx >= endIdx) return;
      const middleIdx = partitionArray(mainArray, startIdx, endIdx, animations);
      quickSortHelper(mainArray, startIdx, middleIdx - 1, animations);
      quickSortHelper(mainArray, middleIdx + 1, endIdx, animations);
}

function partitionArray(
      mainArray,
      startIdx,
      endIdx,
      animations,
) {
      const pivotValue = mainArray[endIdx];
      let pivotIndex = startIdx;
      for (let i = startIdx; i <= endIdx; i++) {
            animations.push([true, 0, i, endIdx]);
            animations.push([true, 1, i, endIdx]);
            if (mainArray[i] <= pivotValue) {
                  animations.push([false, -1, pivotIndex, mainArray[i]]);
                  animations.push([false, -1, i, mainArray[pivotIndex]]);
                  [mainArray[i], mainArray[pivotIndex]] = [mainArray[pivotIndex], mainArray[i]];
                  pivotIndex++;
            }
      }
      return pivotIndex - 1;
}

// ----------------------------------------------------------------------------------------------------------------

export function getBubbleSortAnimations(array) {
      const animations = [];
      if (array.length <= 1) return array;
      const auxiliaryArray = array.slice();

      let k = array.length - 1;
      for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                  animations.push([true, 0, j, j + 1]);
                  animations.push([true, 1, j, j + 1]);

                  if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
                        [auxiliaryArray[j], auxiliaryArray[j + 1]] = [auxiliaryArray[j + 1], auxiliaryArray[j]];
                  }
            }
            animations.push([false, -1, k - i, auxiliaryArray[k - i]]);
            array[k - i] = auxiliaryArray[k - i];
      }

      return animations;
}

// ----------------------------------------------------------------------------------------------------------------

export function getInsertionSortAnimations(array) {
      const animations = [];
      if (array.length <= 1) return array;

      for (let flag = 1; flag < array.length; flag++) {
            let marker = flag;
            while (array[marker] < array[marker - 1] && marker > 0) {
                  animations.push([true, 0, marker, marker - 1]);
                  animations.push([true, 1, marker, marker - 1]);

                  animations.push([false, -1, marker, array[marker - 1]]);
                  animations.push([false, -1, marker - 1, array[marker]]);

                  [array[marker], array[marker - 1]] = [array[marker - 1], array[marker]];
                  marker--;
            }
      }

      return animations;
}

// ----------------------------------------------------------------------------------------------------------------

export function getSelectionSortAnimations(array) {
      const animations = [];
      if (array.length <= 1) return array;

      let n = array.length;

      for (let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            let min = i;
            for (let j = i + 1; j < n; j++) {
                  animations.push([true, 0, j, min]);
                  animations.push([true, 1, j, min]);
                  if (array[j] < array[min]) {
                        min = j;
                  }
            }
            if (min != i) {

                  animations.push([false, -1, i, array[min]]);
                  animations.push([false, -1, min, array[i]]);
                  [array[min], array[i]] = [array[i], array[min]];
            }
      }

      return animations;
}