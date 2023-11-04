import server from "@/api/basicRequest";

export function insertOneFurniture(userUUId, putData) {
    return server.put(`/furniture/${userUUId}/insert_one`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        params: {
            putData
        }
    })
}

export function updateOneFurniture(userUUId, patchData) {
    return server.patch(`/furniture/${userUUId}/update_one`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        params: {
            patchData
        }
    })
}

export function deleteOneFurniture(userUUId, furnitureUUId) {
    return server.delete(`/furniture/${userUUId}/delete_one`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        params: {
            furnitureUUId
        }
    })
}

export function searchOneFurniture(userUUId, furnitureUUId) {
    return server.get(`/furniture/${userUUId}/search_one?furniture_id=` + furnitureUUId, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
    })
}

export function searchListFurniture(userUUId, furnitureUUId, searchSize) {
    return server.get(`/furniture/${userUUId}/search_list?last_seen_furniture_id=` + furnitureUUId + '&search_size=' + searchSize, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
    })
}

export function searchAllFurniture(userUUId) {
    return server.get(`/furniture/${userUUId}/search_all`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
    })
}
