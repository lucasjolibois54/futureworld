import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BulletPointsOnTwoSectionsDefaultTwoComponent } from './bullet-points-on-two-sections-default-two.component';

describe('BulletPointsOnTwoSectionsDefaultTwoComponent', () => {
  let component: BulletPointsOnTwoSectionsDefaultTwoComponent;
  let fixture: ComponentFixture<BulletPointsOnTwoSectionsDefaultTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletPointsOnTwoSectionsDefaultTwoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BulletPointsOnTwoSectionsDefaultTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
