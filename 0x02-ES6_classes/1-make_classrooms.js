import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  arr[0] = new ClassRoom(19);
  arr[1] = new ClassRoom(20);
  arr[2] = new ClassRoom(37);

  return arr;
}
