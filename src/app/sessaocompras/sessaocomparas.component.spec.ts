import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaocomparasComponent } from './sessaocomparas.component';

describe('SessaocomparasComponent', () => {
  let component: SessaocomparasComponent;
  let fixture: ComponentFixture<SessaocomparasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessaocomparasComponent]
    });
    fixture = TestBed.createComponent(SessaocomparasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
