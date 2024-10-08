import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const reasonsDirectory = join(process.cwd(), '_reasons');
const resourcesDirectory = join(process.cwd(), '_resources');

export function getReasonSlugs() {
  return fs.readdirSync(reasonsDirectory);
}

export function getResourceSlugs() {
  return fs.readdirSync(resourcesDirectory);
}

export function getBySlug(slug, fields = []) {
  const reasons = getReasonSlugs();
  const pages = getResourceSlugs();

  let file;
  let fullPath;

  file = reasons.find((reason) => reason.includes(slug));

  if (!file) {
    file = pages.find((page) => page.includes(slug));
    fullPath = join(resourcesDirectory, file);
  } else {
    fullPath = join(reasonsDirectory, file);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getReasons(fields = []) {
  const reasons = getReasonSlugs();

  const allReasons = reasons.map((reason) => getBySlug(reason, fields));

  // Sort reasons by number in ascending order
  allReasons.sort((reason1, reason2) =>
    reason1.number > reason2.number ? 1 : -1
  );

  return allReasons;
}

export function getResources(fields) {
  const pages = getResourceSlugs();

  const allPages = pages.map((page) => getBySlug(page, fields));

  return allPages;
}
