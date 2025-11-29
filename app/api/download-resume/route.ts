import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    // Path to your PDF file in the public folder
    // Adjust the path based on where your PDF is located
    const pdfPath = join(process.cwd(), 'public', 'Resume.pdf');
    
    // Read the PDF file
    const pdfBuffer = readFileSync(pdfPath);
    
    // Return the PDF file as a response
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="portfolio.pdf"',
        'Content-Length': pdfBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Error downloading portfolio:', error);
    return NextResponse.json(
      { error: 'Failed to download portfolio' },
      { status: 500 }
    );
  }
}