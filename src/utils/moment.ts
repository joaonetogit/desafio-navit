import moment from 'moment';
import 'moment/dist/locale/pt-br';

export function formatTimeMoment(data: Date, formato: string) {
  let mensagemFormatada = '';
  moment.locale('pt-br');

  switch (formato) {
    case 'joined':
      mensagemFormatada = `em ${moment(data, 'DD-MM-YYYY').format('MMMM')} de ${moment(data, 'DD-MM-YYYY').format('YYYY')}`;
      break;
    case 'lastPlay':
      mensagemFormatada = `há ${moment(data, 'DD-MM-YYYY').format('MMMM')}`;
      break;
    default:
      mensagemFormatada = 'Formato não suportado';
  }

  return mensagemFormatada;
}
