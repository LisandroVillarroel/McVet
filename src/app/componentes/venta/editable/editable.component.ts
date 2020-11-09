import { Component, ContentChild, HostListener, ElementRef, EventEmitter, Output,
  ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ViewModeDirective } from './../../../directivas/view-mode.directive';
import { EditModeDirective } from './../../../directivas/edit-mode.directive';
import { NgControl } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { switchMap, takeUntil, filter, take, switchMapTo } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'editable',
  template: `<ng-container *ngTemplateOutlet="currentView"></ng-container>` ,
  styleUrls: ['./editable.component.css']
})
export class EditableComponent {
  @ContentChild(ViewModeDirective) viewModeTpl: ViewModeDirective;
  @ContentChild(EditModeDirective) editModeTpl: EditModeDirective;
  @Output() update = new EventEmitter();

  editMode = new Subject();
  editMode$ = this.editMode.asObservable();

  mode: 'view' | 'edit' = 'view';


  constructor(private host: ElementRef) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.viewModeHandler();
    this.editModeHandler();
  }

  toViewMode() {
    this.update.next();
    this.mode = 'view';
  }

  private get element() {
    return this.host.nativeElement;
  }

  private viewModeHandler() {
    fromEvent(this.element, 'click').pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      this.mode = 'edit';
      this.editMode.next(true);
    });
  }

  private editModeHandler() {
    const clickOutside$ = fromEvent(document, 'click').pipe(
      filter(({ target }) => this.element.contains(target) === false),
      take(1)
    );

    this.editMode$.pipe(
      switchMapTo(clickOutside$),
      untilDestroyed(this)
    ).subscribe(event => this.toViewMode());
  }

  get currentView() {
    return this.mode === 'view' ? this.viewModeTpl.tpl : this.editModeTpl.tpl;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
  }
}
