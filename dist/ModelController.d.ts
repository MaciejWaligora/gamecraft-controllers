import { Model, ModelConfig } from "gamecraft-model";
export interface ModelControllerConfig {
    model: Model<ModelConfig>;
}
export declare abstract class ModelController<Tconfig extends ModelControllerConfig> {
    protected _config: Tconfig;
    constructor(config: Tconfig);
}
