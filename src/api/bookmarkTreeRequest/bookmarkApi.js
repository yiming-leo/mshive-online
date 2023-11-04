import server from "@/api/basicRequest";

/**
 * getBookmarkTree请求得到相应用户的物品树
 * @param data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getBookmarkTree(userUUId) {
    return server.get(`/bk_tree/${userUUId}/search_tree`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
    })
}
