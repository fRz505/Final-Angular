import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Usuario } from 'src/app/core/models';
describe('Pruebas en AuthService', () => {
  let service = AuthService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();

    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('El login debe funcionar', (done) => {
    const loginFake = (LoginFormValue = {
      email: 'test@email.com',
      password: '12345',
    });

    const MOCK_REQUEST_RESULT: Usuario[] = [
      {
        id: 1,
        apellido: 'testapellido',
        email: loginFake.email,
        nombre: 'testnombre',
        password: loginFake.password,
        role: 'admin',
      },
    ];
  });
});
