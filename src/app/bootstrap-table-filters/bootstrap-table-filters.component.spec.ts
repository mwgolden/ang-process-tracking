import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTableFiltersComponent } from './bootstrap-table-filters.component';

describe('BootstrapTableFiltersComponent', () => {
  let component: BootstrapTableFiltersComponent;
  let fixture: ComponentFixture<BootstrapTableFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapTableFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTableFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
