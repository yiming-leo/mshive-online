import server from "@/api/basicRequest";

//请求时间线相关的分页数据
export function getTimelinePageList(userUUId, timelineUUId, searchSize) {
    return server.get(
        `/furniture/${userUUId}/search_one`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //get query param
            //params写在和headers同级的config内
            params: {
                timeline_id: timelineUUId,
                search_size: searchSize
            }
        }
    )
}
