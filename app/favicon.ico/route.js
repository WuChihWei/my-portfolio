import { readFile } from 'fs/promises';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const favicon = await readFile('./public/favicon.ico');
    return new NextResponse(favicon, {
      headers: {
        'Content-Type': 'image/x-icon',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  } catch (e) {
    return new NextResponse('Favicon not found', { status: 404 });
  }
}