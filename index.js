function superbowlWin(arrayOfObjects) {
    if (arrayOfObjects.find(object => object.result === "W") === undefined) {
      return undefined;
    } else {
      return arrayOfObjects.find(object => object.result === "W").year;
    }
  }