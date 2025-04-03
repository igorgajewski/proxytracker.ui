import { Component } from '@angular/core';
import { Client } from '../../models/client';
import { ApiService } from '../../services/api/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PaginatorComponent } from '../paginator/paginator.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clients',
  imports: [CommonModule, PaginatorComponent, NgbTooltipModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent {
  clients: Client[] = [];

  displayedClients: Client[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 30;

  sourceArchivedTooltipMessage: string = "Tells if video source file is archived and can be unarchived."
  deletionOffsetsTooltipMessage: string ="Files will be deleted from server after deletion offset passes, and you will have to unarchive them if needed."

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getClients().subscribe((clients: Client[]) => {
      this.clients = clients.map((item: any) => {
        return new Client(
          item.id,
          item.name,
          item.ifSourceToArchive,
          item.mp4DeletionOffset,
          item.mpgDeletionOffset,
          item.mpgxDeletionOffset,
          item.mp4xDeletionOffset,
          item.sourceDeletionOffset,
          item.wavDeletionOffset,
          item.docDeletionOffset,
          item.ifAtlasProductionClient,
          item.contact
        );
      })
      .sort((a, b) => a.name.localeCompare(b.name));
      this.updateDisplayedClients();
    });
  }

  navigateToMainPage(): void {
    this.router.navigate(['/']);
  }
  get totalPages(): number {
    return this.itemsPerPage === 0
      ? 1
      : Math.ceil(this.clients.length / this.itemsPerPage);
  }

  updateDisplayedClients() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedClients = this.clients.slice(startIndex, endIndex);
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.updateDisplayedClients();
  }
  
  onItemsPerPageChange(newItemsPerPage: number) {
    this.itemsPerPage = newItemsPerPage;
    this.currentPage = 1;
    this.updateDisplayedClients();
  }
}
