import $ from 'jquery'
export function accessAPI(method, resource, data) {
    $.ajax({
        url: "http://localhost:3001/api/" + resource,
        data: data,
        type: method,
    });
}