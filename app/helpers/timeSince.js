import moment from "moment";

function timeSince(date) {
  return moment(date).fromNow();
}

export default timeSince;
