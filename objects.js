var playlist = { Busiswa: 'Midnight Starring' }

function updatePlaylist(obj, name, title) {
  Object.assign(obj, name, title)
  return obj
}

function removeFromPlaylist(obj, name) {
  delete obj.name
  return obj
}