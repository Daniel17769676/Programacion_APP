import { TestBed } from '@angular/core/testing';
import { DbserviceService } from './servicio-db.service';

describe('ServicioDBService', () => {
  let service: DbserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});