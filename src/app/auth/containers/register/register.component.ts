import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    hide = true;

    constructor(private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.form = this.fb.group({
            email: ['', Validators.email],
            password: ['', Validators.required]
        });
    }

    handleRegister() {
        const email = this.form.get('email').value;
        const password = this.form.get('password').value;

        this.authService.register(email, password);
    }
}
