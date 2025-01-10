import moment from 'moment';

function getDate() {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
}

export default getDate;
