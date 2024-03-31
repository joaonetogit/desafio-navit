import moment from 'moment';
import 'moment/dist/locale/pt-br';

moment.locale('pt-br');

const dateNow = moment();

function formatTimeLastPlay(data: Date) {
  const dateDiffence = dateNow.diff(moment(data), 'days');
  const textDay = dateDiffence === 1 ? 'dia' : 'dias';
  return `há ${dateDiffence} ${textDay}`;
}

function formatTimeJoined(data: Date) {
  const dateMonth = moment(data).format('MMMM');
  const capitalizedMonth =
    dateMonth.charAt(0).toUpperCase() + dateMonth.slice(1);

  return `em ${capitalizedMonth} de ${moment(data).format('YYYY')}`;
}

export function formatTime(data: Date, format: string) {
  let message = '';

  switch (format) {
    case 'joined':
      message = formatTimeJoined(data);
      break;
    case 'lastPlay':
      message = formatTimeLastPlay(data);
      break;
    default:
      message = 'Formato não suportado';
  }

  return message;
}
