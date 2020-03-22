import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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

    handleLogin() {
        const email = this.form.get('email').value;
        const password = this.form.get('password').value;

        this.authService.login(email, password);
    }

    get emailFormat() {
        const control = this.form.get('email');
        return control.hasError('email') && control.touched;
    }

    get passwordInvalid() {
        const control = this.form.get('password');
        return control.hasError('required') && control.touched;
    }
}
