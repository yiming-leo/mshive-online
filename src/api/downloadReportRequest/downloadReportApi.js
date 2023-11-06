import server from "@/api/basicRequest";

//导出三种报表专用API
export function downloadReport(userUUId, downloadType, data) {
    //downloadType只能是：room, furniture, stuff
    return server.post(
        `/${downloadType}/${userUUId}/download_report_form`,
        //post form-data
        //data写在config前，data为form/data数据
        data,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            responseType: 'blob', // 重点，responseType设置为 blob
        })
}

//下载三种报表模板API
