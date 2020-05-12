import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component'; // 'ngx-bootstrap';

@NgModule({
  declarations: [PagingHeaderComponent, PagerComponent],
  imports: [
    CommonModule,
    // PagingHeaderComponent,
    PaginationModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent
  ]
})
export class SharedModule { }
