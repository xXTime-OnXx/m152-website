import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnserBauernhofPage } from './unser-bauernhof.page';

describe('UnserBauernhofPage', () => {
  let component: UnserBauernhofPage;
  let fixture: ComponentFixture<UnserBauernhofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnserBauernhofPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnserBauernhofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
