import server from "@/api/basicRequest";


//----------------------------POST请求区----------------------------

//根据room id list 使用 JSON 查询room数据
export function searchRoomListByRoomUUIds(userUUId, data) {
    return server.post(
        `/room/${userUUId}/search_room_list_by_room_uuids`,
        data,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
        }
    )
}
