import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const componentPath = searchParams.get('path');

  if (!componentPath) {
    return NextResponse.json({ error: 'Component path is required' }, { status: 400 });
  }

  try {
    const fullPath = path.join(process.cwd(), 'src', 'components', componentPath);
    const source = fs.readFileSync(fullPath, 'utf-8');
    return NextResponse.json({ source });
  } catch (error) {
    console.error(`Error reading component source: ${error}`);
    return NextResponse.json({ error: 'Failed to read component source' }, { status: 500 });
  }
} 