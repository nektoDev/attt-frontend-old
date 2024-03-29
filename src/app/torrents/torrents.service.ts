import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

export class TorrentInfo {

  id: string;
  hash: string;
  name: string;
  url: string;
  magnet: string;
  downloadDir: string;

  watchers: string[];

  addDate: Date;
  finishDate: Date;

  tracked: boolean;
  lastCheckDate: Date;
  lastUpdateDate: Date;

  constructor(object: any) {
    if (!object) {
      this.watchers = [];
      return;
    }
    this.id = object.id;
    this.hash = object.hash;
    this.url = object.url;
    this.name = object.name;
    this.magnet = object.magnet;
    this.downloadDir = object.downloadDir;

    this.addDate = this.parseDate(object.addDate);
    this.finishDate = this.parseDate(object.finishDate);

    this.tracked = object.tracked;
    this.lastCheckDate = this.parseDate(object.lastCheckDate);
    this.lastUpdateDate = this.parseDate(object.lastUpdateDate);

    this.watchers = object.watchers;
  }

  private parseDate(date: number) {
    return date ? new Date(date) : null;
  }

}

const TORRENTS_URL = 'http://192.168.1.11:8081/attt/'

@Injectable()
export class TorrentsService {


  constructor(private http: Http) {
  }

  listTorrents() {
    return this.http.get(TORRENTS_URL + "torrent").map(response => {
        let result: TorrentInfo[] = [];
        <any[]> response.json().forEach(t => result.push(new TorrentInfo(t)));
        return result;
      }
    ).catch(this.handleError);
  }

  getTorrent(id: string) {
    return this.http.get(TORRENTS_URL + "torrent/" + id)
      .map(response => new TorrentInfo(response.json()))
      .catch(this.handleError);
  }

  saveTorrent(t: TorrentInfo) {
    return this.http.post(TORRENTS_URL + "torrent", [t]);
  }

  refreshTorrent(id: string) {
    return this.http.get(TORRENTS_URL + "/checker/" + id).map(response => response.text());
  }

  deleteTorrent(id: string) {
    return this.http.delete(TORRENTS_URL + "?id=" + id);
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
