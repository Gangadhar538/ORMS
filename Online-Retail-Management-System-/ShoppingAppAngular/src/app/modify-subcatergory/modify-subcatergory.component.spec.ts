import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySubcatergoryComponent } from './modify-subcatergory.component';

describe('ModifySubcatergoryComponent', () => {
  let component: ModifySubcatergoryComponent;
  let fixture: ComponentFixture<ModifySubcatergoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifySubcatergoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifySubcatergoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
