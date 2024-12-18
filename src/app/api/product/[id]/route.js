import { mock1 } from '../../db/mock1';

export async function GET(req, { params }) {
  const id = (await params).id;
  const item = mock1.find((item) => item.id === id);

  if (!item) return [];
  return new Response(JSON.stringify(item), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
