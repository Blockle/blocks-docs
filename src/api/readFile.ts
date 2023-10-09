import { readFile } from 'fs/promises';
import path from 'path';

export async function readMarkdownFile(filename: string): Promise<string> {
  const srcPath = path.join(process.cwd(), 'src');

  return await readFile(`${srcPath}/docs/${filename}.md`, 'utf8');
}
