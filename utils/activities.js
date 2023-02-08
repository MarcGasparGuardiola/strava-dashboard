import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


export async function getAllActivitiesData() {
  const res = await fetch('http://localhost:3010/api/v1/activities/list');
  //console.log(res);
  return res.json();
}
