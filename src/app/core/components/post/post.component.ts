// Angular
import { Component, OnInit, OnDestroy, Input, ElementRef, ViewChild } from '@angular/core';

// Models
import { Post } from 'src/app/core/models/post.model';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
    @Input() post: Post;
    @ViewChild('postitem', { read: ElementRef, static: false }) postItem: ElementRef;

    public displayPostId: boolean = true;

    constructor() { }

    public toggleId(): void {
        this.displayPostId = !this.displayPostId;

        !this.displayPostId ? this.postItem.nativeElement.classList.add('user-id') : this.postItem.nativeElement.classList.remove('user-id')
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}