import { NextResponse } from 'next/server';
import { mockDogs } from './db/dogsSecondData';
import { mockDogsThird } from './db/dogThirdData';
import { mockProductOne } from './db/productOneData';

export async function GET(request) {
  const url = new URL(request.url);
  const type = url.searchParams.get('type');

  let data;

  switch (type) {
    case 'dogsFirst':
      data = mockDogs;
      break;
    case 'dogsSecond':
      data = mockDogsSecond;
      break;
    case 'secondaryDogs':
      data = mockDogsThird;
      break;
    case 'products':
      data = mockProductOne;
      break;
    default:
      data = {};
      break;
  }

  return NextResponse.status(200).json(data);
}
