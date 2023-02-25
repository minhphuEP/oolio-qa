import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export function readFileCsv(pathToFile) {
   return parse(fs.readFileSync(path.join(__dirname, pathToFile)), {
    columns: true,
    skip_empty_lines: true,
   });
};