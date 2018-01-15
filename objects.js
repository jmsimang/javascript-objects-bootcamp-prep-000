var playlist = { Busiswa: 'Midnight Starring' }

function updatePlaylist(obj, name, title) {
  //return Object.assign({}, obj, name, title)
  obj.name = title
  return obj
}

function removeFromPlaylist(obj, name) {
  delete obj['name']
  return obj
}