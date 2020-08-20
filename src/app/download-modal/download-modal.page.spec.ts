import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DownloadModalPage } from './download-modal.page';

describe('DownloadModalPage', () => {
  let component: DownloadModalPage;
  let fixture: ComponentFixture<DownloadModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
