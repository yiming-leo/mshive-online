import server from "@/api/basicRequest";

export function downloadReport(userUUId, downloadType, data) {
    //downloadType只能是：room, furniture, stuff
    return server.post(
        `/${downloadType}/${userUUId}/download_report_form`,
        data,
        {
            responseType: 'blob', // 重点，responseType设置为 blob
        })
}
