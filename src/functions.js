import $ from 'jquery'
export function insertAPI(resource, data) {
    $.ajax({
        url: "http://localhost:3001/api/" + resource,
        data: data,
        type: 'POST',
    });
}