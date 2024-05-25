import { AnimationManager, AnimationManagerConfig } from "gamecraft-animation";
import { Animation, AnimationConfig } from "gamecraft-animation";
import { View, ViewConfig } from "gamecraft-view";
export interface ViewControllerConfig {
    view: View<ViewConfig>;
    animationManager: AnimationManager<AnimationManagerConfig>;
}
export declare abstract class ViewController<Tconfig extends ViewControllerConfig> {
    protected _config: Tconfig;
    protected _currentAnimations: Animation<AnimationConfig>[];
    constructor(config: Tconfig);
    protected addAnimation(animation: Animation<AnimationConfig>): void;
    protected removeAnimatio(animation: Animation<AnimationConfig>): void;
}
