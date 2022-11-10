import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BulletPointsOnTwoSectionsDefaultThreeComponent } from './bullet-points-on-two-sections-default-three.component';

describe('BulletPointsOnTwoSectionsDefaultThreeComponent', () => {
  let component: BulletPointsOnTwoSectionsDefaultThreeComponent;
  let fixture: ComponentFixture<BulletPointsOnTwoSectionsDefaultThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletPointsOnTwoSectionsDefaultThreeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BulletPointsOnTwoSectionsDefaultThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
