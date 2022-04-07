import { Application } from "pixi.js";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { IGameOptions } from "./interfaces";

export class GameModel {
    /** Опции */
    public get options(): IGameOptions {
        return this._options$.getValue();
    }

    /** Поток опций */
    public get options$(): Observable<IGameOptions> {
        return this._options$.asObservable();
    }

    public get width(): number {
        return this._app.view.width;
    }

    public get height(): number {
        return this._app.view.height;
    }
    
    private _app!: Application;
    /** Опции */
    private _options$: BehaviorSubject<IGameOptions> = new BehaviorSubject<IGameOptions>(this.getDefaultOptions());
    /** Событие уничтожения */
    private _destroy$: Subject<void> = new Subject<void>();


    constructor(options: IGameOptions) {
        this.updateOptions(options);
        this.createApp();
    }

    public setResizeStream(sizes: { }) {

    }

    /** Уничтожает игру */
    public destroyGame(): void {
        this._app.destroy();
        this._destroy$.next();
    }

    /**
     * Обновляет переданные опции
     * @param options опции, которые нужно обновить
     */
    public updateOptions(options: Partial<IGameOptions>): void {
        const newOptions = Object.assign(this.options, options);
        this.setOptions(newOptions);
    }

    /**
     * Перетирает опции на переданные
     * @param options новые опции
     */
    public setOptions(options: IGameOptions): void {
        this._options$.next(Object.assign(this.getDefaultOptions(), options));
    }

    /**
     * Возвращает опции по умолчанию
     * @returns опции по умолчанию
     */
    private getDefaultOptions(): IGameOptions {
        return {
            alpha: 0,
            color: 0xFFFFFF,
            width: 'full',
            height: 'full'
        }
    }

    private createApp(): Application {
        const app = new Application({
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: this.options.color,
            width: 100,
            height: 100
        });

        return app;
    }


}