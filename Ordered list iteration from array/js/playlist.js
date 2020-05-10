var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function printList(list) {
  let listHtml = "<ol>";
  for (let i = 0; i < list.length; i += 1) {
    listHtml += `<li>${list[i]}</li>`;
  }
  listHtml += "</ol>";
  print(listHtml);

}
printList(playList);
