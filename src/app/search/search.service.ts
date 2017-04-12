import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {TorrentInfo} from "../torrents/torrents.service";


export class FoundedTorrent {

  id: string;
  name: string;
  url: string;
  category: string;

  seeders: number;
  size: number;

  constructor(object: any) {
    if (!object) {
      return;
    }
    this.id = object.id;
    this.url = object.url;
    this.name = object.name;
    this.category = object.category;

    this.seeders = object.seeders;
    this.size = object.size;
  }
}

const TORRENTS_URL = 'http://192.168.1.11:8081/attt/search'

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  search(q: string) {
    return this.http.get(TORRENTS_URL + "?q=" + q).map(response => {
      let result: FoundedTorrent[] = [];
      <any[]> response.json().rutracker.forEach(t => result.push(new FoundedTorrent(t)));
      return result;
    });
  }

  add(t: FoundedTorrent, type: string) {
    let ti = new TorrentInfo(null);
    ti.name = t.name;
    ti.url = t.url;
    ti.downloadDir = type === 'series' ? '/home/nektodev/Media/Series/' : '/home/nektodev/Media/Movies/';

    return this.http.post("http://192.168.1.11:8081/attt/torrent", [ti])
  }

}
