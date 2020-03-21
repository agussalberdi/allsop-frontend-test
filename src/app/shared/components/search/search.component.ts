import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
    filterForm: FormGroup;
    filterSubscription: Subscription;
    @Output() filteredProducts: EventEmitter<Product[]> = new EventEmitter();

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.initForm();
        this.onFilterChanges();
    }

    initForm() {
        this.filterForm = this.fb.group({
            name: [''],
            category: ['']
        });
    }

    onFilterChanges() {
        this.filterSubscription = this.filterForm.valueChanges.pipe(
            debounceTime(350),
            distinctUntilChanged()
        )
        .subscribe((value) => {
            this.filteredProducts.emit(value);
        });
    }

    ngOnDestroy() {
        this.filterSubscription.unsubscribe();
    }
}
