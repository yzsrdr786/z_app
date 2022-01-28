// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { OverviewRoutingModule } from './overview-routing.module';

// Components
import { OverviewComponent } from './overview.component';
import { PostComponent } from 'src/app/core/components/post/post.component';

@NgModule({
    imports: [
        CommonModule,
        OverviewRoutingModule
    ],
    declarations: [
        OverviewComponent,
        PostComponent
    ]
})
export class OverviewModule { }
