
export async function getAllActivitiesData() {
  const res = await fetch('http://localhost:3010/api/v1/activities/list');
  //console.log(res);
  return res.json();
}
