import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FotosPage } from './fotos.page';

describe('FotosPage', () => {
  let component: FotosPage;
  let fixture: ComponentFixture<FotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
