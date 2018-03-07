
// Select color input
function color() {
  return $('#colorPicker').val();
}
// Select size input
var grid = {
  'height': $('#inputHeight').val(),
  'weight': $('#inputWeight').val(),
  'update': function() {
    this.height = $('#inputHeight').val();
    this.weight = $('#inputWeight').val();
  },
  'row'  : '<tr class="table-row"></tr>',
  'cell' : '<td></td>'
}
// When size is submitted by the user, call makeGrid()



function makeGrid() {
  $('#pixelCanvas').empty();
  grid.update();
  for (let i=0;i < grid.height;i++) {
    $('#pixelCanvas').append(grid.row);
    for (let j=0;j < grid.weight;j++) {
      $('.table-row:last').append(grid.cell);
    }
  }
  $('td').click(function() {
    $(this).css('background-color',color());
  });
};

$('input[type="submit"]').click(makeGrid);
