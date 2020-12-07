$(function () {
    let index = 0;

    //履歴削除
    $('#clearBtn').on('click', function () {
        $('#history').text('');
    });

    //フォームリクエスト
    $('#form').on('submit', function () {
        //HTML フォームを止める
        event.preventDefault();

        //Ajax データ送信
        let data = $('#form').serialize();
        const url = 'http://localhost:3000?id=123';

        console.log(data);
        $.ajax({
            url: url,
            type: 'post',
            data: data,
            dataType: 'text'
        }).done(function (res) {
            //結果
            console.debug(res);
            $('#result').text(res);

            //履歴
            const result = JSON.parse(res);
            const date = new Date(result.datetime);
            const date_string = date.toLocaleString('ja-JP');
            const message = `${date_string} ${result.message}`;

            index++;
            let id_name = 'btn-' + index;
            const li = $('<li>');
            li.attr('id', id_name).addClass('list-group-item').append(message);

            //delete link
            const button = $('<button>');
            button.attr('href', '#').addClass('btn btn-sm btn-outline-primary message-btn').text('削除');
            button.on('click', function () {
                $('#' + id_name).remove();
            });

            //btn area
            const btn_area = $('<p>');
            btn_area.addClass('text-right').append(button);

            li.append(btn_area);
            $('#history').append(li);
        }).fail(function (xhr, status, error) {
            //エラー
            alert(status);
        });
    });
});
