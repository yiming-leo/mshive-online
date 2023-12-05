import server from "@/api/basicRequest";


//----------------------------POST请求区----------------------------

//根据room id list 使用 JSON 查询room数据（在furniture中渲染room列表用）
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

// 插入一条房间数据，需要：用户UUID、待插入的JSON数据
export function insertOneRoom(userUUId, data) {
    return server.put(
        `/room/${userUUId}/insert_one`,
        //post JSON
        //data写在config前，data为一个完整的json数据
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

//更新一条家具数据，需要：用户UUID、待更新的JSON数据
export function updateOneRoom(userUUId, data) {
    return server.patch(
        `/room/${userUUId}/update_one`,
        //post JSON
        //data写在config前，data为一个完整的json数据
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

//删除一条房间数据，需要：用户UUID、待删除的房间UUID
export function deleteOneRoom(userUUId, roomUUId) {
    return server.delete(
        `/room/${userUUId}/delete_one`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Content-Type': 'multipart/form-data'
            },
            //post form-data
            //data写在和headers同级的config内，并且需要以data为根，内部可添加多个KV
            data: {
                room_uuid: roomUUId
            }
        }
    )
}

//----------------------------GET请求区----------------------------

//根据家具UUID搜索一个room信息
export function searchOneRoom(userUUId, roomUUId) {
    return server.get(
        `/room/${userUUId}/search_one`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //get query param
            //params写在和headers同级的config内
            params: {
                room_id: roomUUId
            }
        }
    )
}

//使用快照滚轮分页查询搜索room信息
export function searchListRoom(userUUId, roomUUId, searchSize) {
    return server.get(
        `/room/${userUUId}/search_list`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //get query param
            //params写在和headers同级的config内
            params: {
                last_seen_room_id: roomUUId,
                search_size: searchSize
            },
        }
    )
}

//搜索所有furniture信息
export function searchAllRoom(userUUId) {
    return server.get(
        `/room/${userUUId}/search_all`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //get query param
            //params写在和headers同级的config内
            params: {},
        })
}
