var playlist = { Busiswa: 'Midnight Starring' }

function updatePlaylist(obj, name, title) {
  obj[name] = title
  return obj
}

function removeFromPlaylist(obje, name) {
  delete obje['name']
  return obje
}