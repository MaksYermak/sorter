class Sorter {
  constructor() {
    this.sorter = [];
    this.compareFunction = (a, b) => a-b;
  }

  add(element) {
    this.sorter.push(element);
  }

  at(index) {
    return this.sorter[index];
  }

  get length() {
    return this.sorter.length;
  }

  toArray() {
    return this.sorter;
  }

  sort(indices) {
    var indicesSorter = indices.sort((a,b)=>a-b);

    if (indicesSorter.length == 2 && (indicesSorter[1]-indicesSorter[0]) != 1){
      
      var temporaryArrOne = this.sorter.slice(indicesSorter[0], indicesSorter[0] + 1);
      var temporaryArrTwo = this.sorter.slice(indicesSorter[1], indicesSorter[1] + 1);
      var temporaryArr = temporaryArrOne.concat(temporaryArrTwo);
      temporaryArr.sort(this.compareFunction);
      this.sorter.splice(indicesSorter[0], 1, temporaryArr[0]);
      this.sorter.splice(indicesSorter[1], 1, temporaryArr[1]);
    }else{
      
      var temporaryArr = this.sorter.splice(indicesSorter[0],indicesSorter.length);
      temporaryArr.sort(this.compareFunction);
      this.sorter.splice(indicesSorter[0],0,...temporaryArr);
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;