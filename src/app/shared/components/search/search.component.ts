import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @Input() data: Product[];
    @Output() filteredData: EventEmitter<Product[]> = new EventEmitter();
    search: string = null;

    constructor() {}

    ngOnInit() {}

    onChange(event: string) {
        if (event.length > 2) {
            const filtered = this.data.filter(item =>
                item.name.toLowerCase().includes(event.toLowerCase()) ||
                item.category.toLowerCase().includes(event.toLowerCase())
            );
            this.filteredData.emit(filtered);
        } else {
            this.filteredData.emit(this.data);
        }
    }
}
