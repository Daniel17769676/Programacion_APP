import { TestBed } from '@angular/core/testing';
import { DbserviceService } from './servicio-db.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ServicioDBService', () => {
  let service: DbserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SQLite]
    });
    service = TestBed.inject(DbserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});