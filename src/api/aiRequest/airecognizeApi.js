import server from "@/api/basicRequest";

//插入一条家具数据，需要：用户UUID、待插入的JSON数据
export function recognizeTaggingLocate(userUUId, data) {
    return server.put(
        `/ai/${userUUId}/tag`,
        //post JSON: let data = {k1: v1, k2: v2}
        //data写在config前，data为一个完整的json数据
        data,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Server-Access-Key': 'EXVPQNBRL8PZJJXARLXM',
                'Server-Secret-Key': 'yVnBIQAMujxLlkDmxJasUbcAbduJXYQF0dfzZeyb'
            },
        }
    )
}
