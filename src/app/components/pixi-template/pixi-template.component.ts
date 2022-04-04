import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Input,
    NgZone,
    OnDestroy,
    OnInit,
    Renderer2,
    ViewContainerRef
} from "@angular/core";
import { Application, Sprite, settings as PIXI_SETTINGS, SCALE_MODES, Filter } from "pixi.js";
import { IPixiTemplateOptions } from "src/app/components/pixi-template/interfaces";
import { isNullOrUndefined } from "src/app/utils";
import { IGridInternalOptions } from "./interfaces/grid-internal-options.interface";
import isometricShader from './shaders/grid.frag';

@Component({
    templateUrl: './pixi-template.component.html',
    selector: 'pixi-template',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PixiTemplateComponent implements OnInit, OnDestroy, AfterViewInit {

    @Input()
    public options?: IPixiTemplateOptions;

    public devicePixelRatio = window.devicePixelRatio || 1;

    private _app!: Application;

    private _gridShaderUniform: IGridInternalOptions = { height: 0, dist: 32., colorType: 0, drawVertical: true };
    private _gridSprite?: Sprite

    constructor(
        private _ngZone: NgZone,
        private _renderer: Renderer2,
        private _viewContainerRef: ViewContainerRef

    ) {

    }

    public ngOnInit(): void {
        this._ngZone.runOutsideAngular(() => {
            this._app = new Application({
                width: this.options?.width,
                height: this.options?.height,
                resolution: 1,
                backgroundAlpha: isNullOrUndefined(this.options?.alpha)
                    ? 1
                    : this.options!.alpha,
            });
        });

        // Делаем красивые пиксели :)
        PIXI_SETTINGS.RESOLUTION = window.devicePixelRatio;
        PIXI_SETTINGS.SCALE_MODE = SCALE_MODES.NEAREST;
        this._renderer.setStyle(this._app.view, 'image-rendering', 'pixelated');

        this.updateGrid(this.options);
        this._app.stage.interactive = true;

        this.options?.onReady && this.options?.onReady!(this._app);
    }

    public ngAfterViewInit(): void {
        this._renderer.appendChild(this._viewContainerRef.element.nativeElement, this._app.view);

        this.resize();
    }

    public ngOnDestroy(): void {
        this._app.destroy(true);
    }

    @HostListener('window:resize')
    public resize(): void {
        const viewportScale = 1 / this.devicePixelRatio;

        const width = isNullOrUndefined(this.options?.width)
            ? document.body.clientWidth
            : this.options!.width!;

        const height = isNullOrUndefined(this.options?.height)
            ? this.getRemainingHeight()
            : this.options!.height!;

        this._app.renderer.resize(width * this.devicePixelRatio, height * this.devicePixelRatio);
        this._app.view.style.transform = `scale(${viewportScale})`;
        this._app.view.style.transformOrigin = `top left`;

        if (!isNullOrUndefined(this.options?.onResize)) {
            this.options?.onResize!(this._app);
        }

        this.updateGrid(this.options);
    }

    private getRemainingHeight(): number {
        const total = window.innerHeight;
        return total;
    }

    private updateGrid(options: IPixiTemplateOptions | undefined): void {
        if (isNullOrUndefined(this._gridSprite) && options?.grid) {
            this._gridSprite = new Sprite();
            this._gridSprite.name = 'grid';
            this._gridSprite.width = this._app.view.width;
            this._gridSprite.height = this._app.view.height;
            const shader = new Filter(undefined, isometricShader, this._gridShaderUniform);
            this._gridSprite.filters = [shader];

            this._app.stage.addChild(this._gridSprite);
        }

        if (options?.grid && this._gridSprite) {
            const height = isNullOrUndefined(options?.height)
                ? this.getRemainingHeight()
                : this.options!.height!;

            this._gridSprite.width = this._app.view.width;
            this._gridSprite.height = this._app.view.height;

            this._gridShaderUniform.colorType = this.getShaderColor(options.grid.color);
            this._gridShaderUniform.dist = options.grid.distance || 16;
            this._gridShaderUniform.height = height;
            this._gridShaderUniform.drawVertical = isNullOrUndefined(options.grid.drawVerticalLines) 
                ? true 
                : options.grid.drawVerticalLines!;

        }
    }

    private getShaderColor(color: string | undefined): 0 | 1 | 2 {
        switch (color) {
            case 'black':
                return 0;
            case 'white':
                return 1;
            case 'grey':
                return 2;
        }

        return 0;
    }
}
