import { readFile } from 'fs/promises';
import path from 'path';

export async function readMarkdownFile(filename: string): Promise<string> {
  const srcPath = path.join(process.cwd(), 'src');

  try {
    return await readFile(`${srcPath}/docs/${filename}.md`, 'utf8');
  } catch (e) {
    console.log('Failed to read file', e);
  }
}
