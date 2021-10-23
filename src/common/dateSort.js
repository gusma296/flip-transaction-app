export const dateSort = (latest, data) =>
  data.sort((x, y) => {
    let dateX = new Date(x.created_at.split(' ')[0]);
    let dateY = new Date(y.created_at.split(' ')[0]);
    return latest ? dateX - dateY : dateY - dateX;
  });
