import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()

export class ImageService {

  private query: string;
  private APIKEY: string = environment['PIXABAYAPIKEY'];
  private APIURL: string = environment['PIXABAYAPIURL'];
private uRL: string = this.APIURL + this.APIKEY + '&q=';
private perPage: string = '&per_page=10';

  constructor(private http: HttpClient) {

  }

  getImage(query) {
return this.http.get(this.uRL + query + this.perPage).pipe(map(res => res));
  }

}
