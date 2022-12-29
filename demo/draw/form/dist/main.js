$(function() {
    initTable();
    $('.reservation').daterangepicker({
        locale: {
            format: 'YYYY-MM-DD'
        }
    });
});

function initTable() {
    $('input[type=checkbox]').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
    });
    $('.check-all').on('ifChecked', function(event) {
        $(this).parents('table').find('input[type=checkbox]').iCheck('check');
    });
    $('.check-all').on('ifUnchecked', function(event) {
        $(this).parents('table').find('input[type=checkbox]').iCheck('uncheck');
    });
    $('.table-data tbody > tr').click(function() {
        var _originUrl = $(this).find('.originUrl').val();
        $.map($(this).find('input[type="hidden"]'), function(element) {
            var _content = $(element).val();
            var _class = $(element).attr('class');
            $('#detail-modal .' + _class).text(_content);
        });
        $('#detail-modal').modal('show');
    });
    $('#detail-modal').on('hidden.bs.modal', function() {
        $('#detail-modal .form-control-static').text('');
    });
}

function submitUser(){
  var pwd = $('#pwd').val();
  var pwd2 = $('#pwd2').val();
  if (pwd !== pwd2) {
    alert('兩次密碼不同，請確認。');
  } else {
    $('#form').submit();
  }
}
