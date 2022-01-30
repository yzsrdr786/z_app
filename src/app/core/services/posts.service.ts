// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Rxjs
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Models
import { Post } from 'src/app/core/models/post.model';

// Environment
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class PostsService {
    private posts$ = new BehaviorSubject<Post[]>([]);

    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public init(limit = null): void {
        let baseURL = `${environment.apiUrl}${environment.endpoints.posts}`;

        if (limit) {
            baseURL = `${baseURL}?_limit=${limit}`;
        }

        this.http
            .get<Post[]>(baseURL)
            .subscribe((posts) => {
                this.posts$.next(posts);
            });
    }

    public getPosts(limit = null): Observable<Post[]> {
        return this.posts$;
    }
}
