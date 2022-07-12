import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private apiUrl: string = 'https://sheet.best/api/sheets/dffebd78-174b-44dc-a5d3-b2f6e7b850d1';

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiUrl);
  }
}
