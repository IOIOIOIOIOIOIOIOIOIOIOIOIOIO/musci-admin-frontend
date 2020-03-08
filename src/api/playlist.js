import request from '@/utils/request'
const baseURL = `http://localhost:3000`

export function fetchList(params) {
  return request({
    url: `${baseURL}/playlist/list`,
    method: 'get',
    params
  })
}
export function fetchById(params) {
  return request({
    url: `${baseURL}/playlist/getById`,
    method: 'get',
    params
  })
}

export function updatePlaylist(params) {
  return request({
    url: `${baseURL}/playlist/updatePlaylist`,
    method: 'post',
    data: {
      ...params
    }
  })
}
export function deletePlaylistItem(params) {
  return request({
    url: `${baseURL}/playlist/deletePlaylistItem`,
    method: 'get',
    params
  })
}
