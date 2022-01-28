// Angular
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';

// RxJS
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { of } from 'rxjs/internal/observable/of';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

// Service
import { DataService } from 'src/app/core/services/data.service';

// Models
import { Post } from 'src/app/core/models/post.model';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy {
    public postData$: Observable<Post[]> = null;
    private _unsubscribe: Subject<any> = new Subject();

    constructor(
        private dataService: DataService,
    ) {
    }

    ngOnInit() {
        this.dataService
            .getPosts(100)
            .pipe(takeUntil(this._unsubscribe))
            .subscribe(result => {
                if (result && result.length > 0) {
                    this.postData$ = of(result);
                } else {
                    this.postData$ = of([]);
                }
            });
    }

    ngOnDestroy(){
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }
}