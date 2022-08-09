const { get } = require('http');
const SpotifyWebApi = require('spotify-web-api-node');
const Graph = require("graphlib").Graph;
 
const token = 'BQCvrP2FP0r8eENEqC7PX7mWwwIZzNyqiCSPWyAJps5rgmrkXert2ESJuwc3gvwZiov4VSxYmswFrgeE8MldR-IIWFd-LwdmTmU1JJwEwZkNyDIJDuAYrzqZz2VDUiNZFEEjYl6FTPv_7F05AoJ6PtNRpf0UNI0OR_OJQdtoZ6bBOOE-Q4NXzQAS_Q_l_psgxmi2aC-Rh0L-R2u55nOZMMeJJEtq4i-lmOIFeBKF1LphxS4tjKv2KVwMRiFESmP7-4zVN4MRk5MoUF1V3-v3yICZ-eDjy_HNkB5ZIkbU-Aijnz91vy5kYDdreGoVpO91CMeO'
const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

const features = []
const list = []

function getFeatures() {
  spotifyApi.getArtistAlbums('5f7VJjfbwm532GiveGC0ZK', { limit: 50, offset: 0})
    .then(function(data) {
      for (let album of data.body.items) {
        spotifyApi.getAlbumTracks(album.id, { limit: 50, offset: 0})
    .then(function(data) {
      for (let song of data.body.items) {
        for (let artists of song.artists) {
          if (!features.includes(artists.name.toString())) {
            features.push(artists.name.toString())
          }
        }
      }
      features.forEach(feature => {
        if (!list.includes(feature.toString())) {
          list.push(feature.toString())
        }
      })
      return list
    }, function(err) {
      console.error(err);
    });
  }
  }, function(err) {
    console.error(err);
  });
}

function graph() {
  let g = new Graph();
  let features = getFeatures()
  g.setEdge("a", "b", "label")
  console.log(features)
}
