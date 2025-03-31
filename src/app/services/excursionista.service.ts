import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosExcursionistas, ElementosExcursionistas } from '../models/datos-excursionistas';

@Injectable({
  providedIn: 'root'
})
export class ExcursionistaService {

  private apiUrl = 'https://back-end-opa.vercel.app/excursionistas';

  constructor(private http: HttpClient) { }

  agregarExcursionista(data: DatosExcursionistas): Observable<ElementosExcursionistas[]> {
    return this.http.post<ElementosExcursionistas[]>(this.apiUrl, data);  
  }
}
