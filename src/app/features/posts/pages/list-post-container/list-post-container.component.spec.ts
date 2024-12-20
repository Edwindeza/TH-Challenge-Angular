import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostContainerComponent } from './list-post-container.component';

describe('ListPostContainerComponent', () => {
  let component: ListPostContainerComponent;
  let fixture: ComponentFixture<ListPostContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPostContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
