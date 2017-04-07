import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {DatePipe} from "@angular/common";

const DATE_PIPE = new DatePipe("ru");

export class TorrentInfo {

  id: string;
  hash: string;
  name: string;
  url: string;
  magnet: string;
  downloadDir: string;

  watchers: string[];

  addDate: number;
  finishDate: number;

  tracked: boolean;
  lastCheckDate: number;
  lastUpdateDate: number;

  lastCheckDateHuman: string;
  lastUpdateDateHuman: string;

  constructor(object: any) {
    this.id = object.id;
    this.hash = object.hash;
    this.url = object.url;
    this.name = object.name;
    this.magnet = object.magnet;
    this.downloadDir = object.downloadDir;

    this.addDate = object.addDate;
    this.finishDate = object.finishDate;

    this.tracked = object.tracked;
    this.lastCheckDate = object.lastCheckDate;
    this.lastUpdateDate = object.lastUpdateDate;

    this.lastCheckDateHuman = object.lastCheckDate ? DATE_PIPE.transform(object.lastCheckDate, 'yMMdd HH:mm:ss') : '';
    this.lastUpdateDateHuman = object.lastUpdateDate ? DATE_PIPE.transform(object.lastUpdateDate, 'yMMdd HH:mm:ss') : '';
  }

}

const TORRENTS_URL = 'http://192.168.1.11:8081/attt/torrent'

@Injectable()
export class TorrentsService {


  constructor(private http: Http) {
  }

  listTorrents() {
    return this.http.get(TORRENTS_URL).map(response => {
        let result: TorrentInfo[] = [];
        <any[]> response.json().forEach(t => result.push(new TorrentInfo(t)));
        return result;
      }
    ).catch(this.handleError);
  }

  getTorrent(id: string) {
    return this.http.get(TORRENTS_URL + "/" + id)
      .map(response => new TorrentInfo(response.json()))
      .catch(this.handleError);
  }

  saveTorrent(t: TorrentInfo) {
    return this.http.post(TORRENTS_URL, [t]);
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
