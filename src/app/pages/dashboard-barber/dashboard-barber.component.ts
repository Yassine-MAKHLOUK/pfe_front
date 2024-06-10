import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ModalConfig, ModalComponent, ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';

@Component({
  selector: 'app-dashboard-barber',
  standalone: true,
  imports: [
    CommonModule,
    WidgetsModule,
    ModalsModule,
  ],
  templateUrl: './dashboard-barber.component.html',
  styleUrl: './dashboard-barber.component.scss'
})
export class DashboardBarberComponent {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  constructor() {}

  async openModal() {
    return await this.modalComponent.open();
  }
}
