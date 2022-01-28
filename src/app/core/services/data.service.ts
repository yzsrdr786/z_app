// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Rxjs
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Models
import { Post } from 'src/app/core/models/post.model';

// Environment
import { environment } from 'src/environments/environment';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public getPosts(limit = null): Observable<Post[]> {
        let baseURL = `${environment.apiUrl}${environment.endpoints.posts}`;

        if (limit) {
            baseURL = `${baseURL}?_limit=${limit}`;
        }

        return this.http
            .get<Post[]>(baseURL)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error) {
        let errorMessage = '';

        if (error.status === 0) {
            errorMessage = `An error occurred: ${error.error}`;
        } else if (error.status === 400) {
            errorMessage = `Error: ${error.error.Message}`;
        } else {
            errorMessage = `Backend returned code ${error.status}, body was: ${error.statusText}`;
        }

        return throwError(error);
    }
}
