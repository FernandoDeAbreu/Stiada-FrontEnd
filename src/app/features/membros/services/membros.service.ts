import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';
import { MembrosModel } from '../models/membrosModel';

@Injectable({
  providedIn: 'root'
})
export class MembrosService {

  private readonly apiUrl = `${environment.apiBaseUrl}/membro`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<MembrosModel[]> {
    return this.http.get<MembrosModel[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError( error: HttpErrorResponse){
    const message = error.error?.message || 'Erro desconhecido ao processar requisição';
    return throwError(() => new Error(message));
  }
}
