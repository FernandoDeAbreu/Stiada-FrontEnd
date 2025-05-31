import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { campoModel } from '../models/campoModels';

@Injectable({
  providedIn: 'root'
})
export class CampoService {

  private readonly apiUrl = `${environment.apiBaseUrl}/campo`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<campoModel[]> {
    return this.http.get<campoModel[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }
  getById(id: number): Observable<campoModel> {
    return this.http
    .get<campoModel>(`${this.apiUrl}/${id}`)
    .pipe(catchError(this.handleError));
  }

  create(campo: campoModel): Observable<campoModel> {
    return this.http.post<campoModel>(this.apiUrl, campo).pipe(
      catchError(this.handleError)
    );
   }

   update(campo: campoModel): Observable<campoModel> {
    return this.http.put<campoModel>(this.apiUrl, campo).pipe(
      catchError(this.handleError)
    );
   }

  private handleError( error: HttpErrorResponse){
    const message = error.error?.message || 'Erro desconhecido ao processar requisição';
    return throwError(() => new Error(message));
  }
}

