import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ReceitaModel } from '../../models/receitaModel';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

 private readonly apiUrl = `${environment.apiBaseUrl}/receitas`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<ReceitaModel[]> {
    return this.http.get<ReceitaModel[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }
  getById(id: number): Observable<ReceitaModel> {
    return this.http
    .get<ReceitaModel>(`${this.apiUrl}/${id}`)
    .pipe(catchError(this.handleError));
  }

  create(receita: any): Observable<ReceitaModel> {
    console.log('ReceitaService.create', receita);
    return this.http.post<ReceitaModel>(this.apiUrl, receita).pipe(
      catchError(this.handleError)
    );
   }

   update(receita: ReceitaModel): Observable<ReceitaModel> {
    return this.http.put<ReceitaModel>(this.apiUrl, receita).pipe(
      catchError(this.handleError)
    );
   }

  private handleError( error: HttpErrorResponse){
    const message = error.error?.message || 'Erro desconhecido ao processar requisição';
    return throwError(() => new Error(message));
  }
}
