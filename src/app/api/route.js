import { mock1 } from './db/mock1';
import { mock2 } from './db/mock2';
import { mock3 } from './db/mock3';
import { mock4 } from './db/mock4';
import { filterByGender } from './utility';

export async function GET(request) {
  let data = [];

  const url = new URL(request.url);
  const type = url.searchParams.get('type');
  const page = parseInt(url.searchParams.get('page'), 10) || 1;
  const limit = parseInt(url.searchParams.get('limit'), 10) || 15;

  const genders = url.searchParams.getAll('gender').map((gender) => gender.toLowerCase());

  console.log();

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
      return new Response(JSON.stringify({ error: 'Invalid type' }), { status: 400 });
  }

  data = filterByGender(data, genders);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = data.slice(startIndex, endIndex);

  return new Response(
    JSON.stringify({
      data: paginatedData,
      total: data.length,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
