import { mock1 } from './db/mock1';
import { mock2 } from './db/mock2';
import { mock3 } from './db/mock3';
import { mock4 } from './db/mock4';

export async function GET(request) {
  const url = new URL(request.url);
  const type = url.searchParams.get('type');
  let data = [];

  switch (type) {
    case 'mock1':
      data = mock1;
      break;
    case 'mock2':
      data = mock2;
      break;
    case 'mock3':
      data = mock3;
      break;
    case 'mock4':
      data = mock4;
      break;
    default:
      data = {};
      break;
  }

  return Response.json(data);
}
