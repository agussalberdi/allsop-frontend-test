import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../../../cart/services/cart.service';

@Component({
    selector: 'app-voucher',
    templateUrl: './voucher.component.html',
    styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {
    voucherForm: FormGroup;
    @Output() voucherEmitted: EventEmitter<boolean> = new EventEmitter();
    voucherCode = '20OFFPROMO';

    total: number;

    discountError = false;
    totalAmountError = false;

    constructor(private fb: FormBuilder, private cartService: CartService) {}

    ngOnInit() {
        this.initForm();
        this.getTotal();
    }

    initForm() {
        this.voucherForm = this.fb.group({
            code: ['']
        });
    }

    getTotal() {
        this.total = this.cartService.getTotal();
    }

    onSubmit() {
        if (this.voucherForm.valid && this.code === this.voucherCode && this.total >= 100) {
            this.voucherEmitted.emit(true);
            this.voucherForm.reset();
            this.discountError = false;
            this.totalAmountError = false;
            return;
        }

        if (this.total < 100) {
            this.totalAmountError = true;
        }
        if (this.code !== this.voucherCode) {
            this.discountError = true;
        }
    }

    get code() {
        return this.voucherForm.get('code').value;
    }
}
