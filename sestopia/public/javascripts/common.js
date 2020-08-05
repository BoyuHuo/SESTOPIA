var request = function(url, type, data) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: url,
            dataType: "json",
            async: true,
            data: data,
            type: type,
            beforeSend: function() {},
            success: function(req) {
                resolve(req);
            },
            complete: function() {},
            error: function(req) {
                reject(req);
            }
        });

    })
}