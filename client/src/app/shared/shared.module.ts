import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {CurrencyMaskModule} from 'ng2-currency-mask';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {ImageCropperModule} from 'ngx-image-cropper';

import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component'; // 'ngx-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';

import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './components/stepper/stepper.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { RouterModule } from '@angular/router';
import { PhotoWidgetComponent } from './components/photo-widget/photo-widget.component';


@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent,
    TextInputComponent,
    StepperComponent,
    BasketSummaryComponent,
    PhotoWidgetComponent
  ],

  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CdkStepperModule,
    RouterModule,
    CurrencyMaskModule,
    NgxGalleryModule,
    NgxDropzoneModule,
    ImageCropperModule,
    TabsModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule,
    OrderTotalsComponent,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule,
    TextInputComponent,
    CdkStepperModule,
    StepperComponent,
    BasketSummaryComponent,
    CurrencyMaskModule,
    NgxGalleryModule,
    TabsModule,
    NgxDropzoneModule,
    ImageCropperModule,
    PhotoWidgetComponent
  ]
})
export class SharedModule { }
