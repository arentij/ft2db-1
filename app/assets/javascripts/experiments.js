$(document).on('page:change', function(event) {
  $('#experiments_table').dataTable({
    columnDefs: [
      { bSortable: false, aTargets: [1] }
    ],
    "bDestroy": true
  });
});
