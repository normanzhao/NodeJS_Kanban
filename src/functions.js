import $ from 'jquery'
export function insertAPI(resource, data) {
    console.log(JSON.stringify(data));
    alert()
    $.ajax({
        url: "http://localhost:3001/api/" + resource,
        data: data,
        type: 'POST',
    });
}