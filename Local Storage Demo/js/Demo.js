var Demo = function() {
    var sendRequest = function(o) {
        $.ajax({
            type: "POST",
            url: '/Home/GetResponseAjax',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({ university: o }),
            cache: false,
            beforeSend: function () {},
            success: function (result) {
                if (result) {
                    alert('sent');
                }
            },
            complete: function () {},
            async: true
        });
    }

    var getResponse = function () {
        $.ajax({
            type: "POST",
            url: '/Home/SendUniversityInfoAjax',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({}),
            cache: false,
            beforeSend: function () { },
            success: function (result) {
                if (result != null) {
                    localStorage.setItem('Info', JSON.stringify(result));
                    alert('received and saved to local storage');
                }
            },
            complete: function () { },
            async: true
        });
    }

    var actionHandler = function () {
        $('.get-response').unbind('click').on('click', function () {
            debugger;
            getResponse();
        });

        $('.read-data').unbind('click').on('click', function () {
            debugger;
            var info = JSON.parse(localStorage.getItem('Info'));
            var o = {};
            o.Name = info[0].Name;
            o.Location = info[0].Location;
            o.NumberofTeachers = info[0].NumberofTeachers;
            o.NumberofStudents = info[0].NumberofStudents;
            sendRequest(o);
        });
    }

    var initialize = function () {
        actionHandler();
    }

    return {
        init: function () {
            initialize();
        }
    };
}();