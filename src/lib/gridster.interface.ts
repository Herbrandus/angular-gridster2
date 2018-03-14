import {GridsterConfigS} from './gridsterConfigS.interface';
import {ChangeDetectorRef, NgZone, Renderer2} from '@angular/core';
import {GridsterEmptyCell} from './gridsterEmptyCell.service';
import {GridsterCompact} from './gridsterCompact.service';
import {GridsterConfig} from './gridsterConfig.interface';
import {GridsterItemS} from './gridsterItemS.interface';
import {GridsterItemComponentInterface} from './gridsterItemComponent.interface';

export abstract class GridsterComponentInterface {
  $options: GridsterConfigS;
  grid: Array<GridsterItemComponentInterface>;
  checkCollision: (item: GridsterItemS) => GridsterItemComponentInterface | boolean;
  positionXToPixels: (x: number) => number;
  pixelsToPositionX: (x: number, roundingMethod: (x: number) => number) => number;
  positionYToPixels: (y: number) => number;
  pixelsToPositionY: (y: number, roundingMethod: (x: number) => number) => number;
  findItemWithItem: (item: GridsterItemS) => GridsterItemComponentInterface | boolean;
  findItemsWithItem: (item: GridsterItemS) => Array<GridsterItemComponentInterface>;
  checkGridCollision: (item: GridsterItemS) => boolean;
  el: any;
  renderer: Renderer2;
  cdRef: ChangeDetectorRef;
  options: GridsterConfig;
  calculateLayoutDebounce: () => void;
  updateGrid: () => void;
  movingItem: GridsterItemS | null;
  previewStyle: (drag?: boolean) => void;
  mobile: boolean;
  curWidth: number;
  curHeight: number;
  columns: number;
  rows: number;
  curColWidth: number;
  curRowHeight: number;
  windowResize: (() => void) | null;
  setGridDimensions: (() => void);
  dragInProgress: boolean;
  emptyCell: GridsterEmptyCell;
  compact: GridsterCompact;
  zone: NgZone;
  gridRows: Array<number>;
  gridColumns: Array<number>;
}
