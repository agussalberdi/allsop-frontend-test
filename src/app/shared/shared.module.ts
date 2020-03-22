import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { VoucherComponent } from './components/voucher/voucher.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SearchComponent,
        VoucherComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SearchComponent,
        VoucherComponent
    ],
    providers: [],
})
export class SharedModule {}
