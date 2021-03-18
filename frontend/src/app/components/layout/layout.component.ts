import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  collapsed = false;
  showLabel = true;

  constructor(
    private breakPoint: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.breakPoint
      .observe(['(min-width: 1200px)'])
      .subscribe((state: BreakpointState) => {
        this.collapsed = state.matches;
        this.toggleCollapse();
      });
  }

  toggleCollapse() {
    if (this.collapsed) {
      setTimeout(() => this.showLabel = true, 350);
    } else {
      this.showLabel = false;
    }

    this.collapsed = !this.collapsed;
  }

}
