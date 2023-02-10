
export async function getAllActivitiesData() {
  const res = await fetch('http://localhost:3010/api/v1/activities/list');
  //console.log(res);
  return res.json();
}

export async function getActivityById(id) {
  const res = await fetch('http://localhost:3010/api/v1/activities/details/'+id);
  //console.log(res);
  return res.json();
}

export async function getAllActivitiesIds() {
  const activities = await getAllActivitiesData();

//console.log(activities)
  return activities.body.map((activity) => {
    return {
      params: {
        id: activity._id,
      },
    };
  });
}