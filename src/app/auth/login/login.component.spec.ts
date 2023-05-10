import { HttpClient, HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login.component";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "src/app/shared/pipes/pipes.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('Pruebas LoginComponent', () => {

    let component: LoginComponent;

    beforeEach(async() =>{
        await TestBed.configureTestingModule({
            declarations: [
                LoginComponent
            ],
            imports: [
                HttpClientModule,
                MatFormFieldModule,
                MatInputModule,
                RouterTestingModule,
                ReactiveFormsModule,
                PipesModule,
                BrowserAnimationsModule
            ]
        }).compileComponents();
        const fixture = TestBed.createComponent(LoginComponent);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Si el campo email esta vacio el FormControl del email debe ser invalido', ()=> {
        component.loginForm.setValue({email: null, password: null})
        expect(component.emailControl.invalid).toBeTrue();
    });
    it('Si el campo password esta vacio el FormControl del email debe ser invalido', ()=> {
        component.loginForm.setValue({email: null, password: null})
        expect(component.passwordControl.invalid).toBeTrue();
    });

    it('Si el loginForm es invalido, debe marcar todos los controles como touched', () => {
        component.loginForm.setValue({email: null, password: null})
        const spyOnMarkAllasTouched = spyOn(component.loginForm, 'markAllAsTouched');
        component.onSubmit();
        // expect(component.emailControl.touched).toBeTrue();
        // expect(component.passwordControl.touched).toBeTrue();
        expect(spyOnMarkAllasTouched).toHaveBeenCalled();

    })
});