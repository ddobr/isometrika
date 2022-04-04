export interface IGridInternalOptions { 
    /** Высота экрана */
    height: number, 
    /** Расстояние между линиями */
    dist: 8 | 16 | 32 | 64 | 128 | 256, 
    /**
     * Цвет
     * 0 - черный
     * 1 - белый 
     * 2 - серый
     */
    colorType: 0 | 1 | 2, 
    /** Рисовать вертикальные линии */
    drawVertical: boolean;
}