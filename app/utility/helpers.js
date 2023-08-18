import moment from "moment";

export function splitTextToArray(text) {
  if (text) {
    const array = text.split("\r");

    const middleIndex = Math.ceil(array.length / 2);

    const firstHalf = array.splice(0, middleIndex);
    const secondHalf = array.splice(-middleIndex);

    let obj = { firstHalf, secondHalf };

    let objectKeys = Object.keys(obj);

    return objectKeys.map((i) => obj[i]);
  }

  return null;
}

export const timeFromNow = (time) => moment(time).fromNow();
