// Angular
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';

// RxJS
import { Observable } from 'rxjs/internal/Observable';

// Service
import { PostsService } from 'src/app/core/services/posts.service';

// Models
import { Post } from 'src/app/core/models/post.model';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy {
    public postData$: Observable<Post[]>;

    constructor(
        private postsService: PostsService
    ) {
    }

    ngOnInit() {
        this.postData$ = this.postsService.getPosts();

        this.postsService.init(100);
    }

    ngOnDestroy(){
    }
}