interface VANTAOptions {
  el: HTMLElement;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  backgroundColor?: number;
}

interface VANTA {
  CLOUDS: (options: VANTAOptions) => { destroy: () => void };
  BIRDS: (options: VANTAOptions) => { destroy: () => void };
}

declare const VANTA: VANTA;