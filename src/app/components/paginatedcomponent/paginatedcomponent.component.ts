import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginatedcomponent',
  imports: [],
  templateUrl: './paginatedcomponent.component.html',
  styleUrl: './paginatedcomponent.component.css'
})
export class PaginatedcomponentComponent<T> {
  currentPage = 1;
  itemsPerPage = 30;
  items: T[] = [];
  displayedItems: T[] = [];
  constructor(protected router: Router) {  }

  get totalPages(): number {
    return this.itemsPerPage === 0
      ? 1
      : Math.ceil(this.items.length / this.itemsPerPage);
  }

  updateDisplayedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedItems = this.items.slice(startIndex, endIndex);
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.updateDisplayedItems();
  }
  
  onItemsPerPageChange(newItemsPerPage: number) {
    this.itemsPerPage = newItemsPerPage;
    this.currentPage = 1;
    this.updateDisplayedItems();
  }
  navigateToMainPage(): void {
    this.router.navigate(['/']);
  }
}
