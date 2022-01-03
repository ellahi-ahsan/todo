export const removeItem = (list, index) => {
  let newList = [...list];
  newList.splice(index, 1);
  return newList
}

