import server from "@/api/basicRequest";


//----------------------------POST请求区----------------------------

//插入一条stuff数据，需要：用户UUID、待插入的JSON数据
export function insertOneStuff(userUUId, data) {
    return server.put(
        `/stuff/${userUUId}/insert_one`,
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

//更新一条Stuff数据，需要：用户UUID、待更新的JSON数据
export function updateOneStuff(userUUId, data) {
    return server.patch(
        `/stuff/${userUUId}/update_one`,
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

//删除一条Stuff数据，需要：用户UUID、待删除的家具UUID
export function deleteOneStuff(userUUId, stuffUUId) {
    return server.delete(
        `/stuff/${userUUId}/delete_one`,
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
                stuff_uuid: stuffUUId
            }
        }
    )
}

//----------------------------GET请求区----------------------------

//根据家具UUID搜索一个stuff信息
export function searchOneStuff(userUUId, stuffUUId) {
    return server.get(
        `/stuff/${userUUId}/search_one`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //get query param
            //params写在和headers同级的config内
            params: {
                stuff_id: stuffUUId
            }
        }
    )
}

//使用快照滚轮分页查询搜索stuff信息
export function searchListStuff(userUUId, stuffUUId, searchSize) {
    return server.get(
        `/stuff/${userUUId}/search_list`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //get query param
            //params写在和headers同级的config内
            params: {
                last_seen_stuff_id: stuffUUId,
                search_size: searchSize
            },
        }
    )
}

//搜索所有stuff信息
export function searchAllStuff(userUUId) {
    return server.get(
        `/stuff/${userUUId}/search_all`,
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

//搜索Stuff标签，返回List[<StuffUUId>: <家具名字>]，注意不是attribute!!! 家具tag用
export function searchStuffTag(userUUId) {
    return server.get(
        `/stuff/${userUUId}/search_tag`,
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
