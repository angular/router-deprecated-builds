import { RouteDefinition } from './route_config_impl';
export { AsyncRoute, AuxRoute, Redirect, Route, RouteDefinition } from './route_config_impl';
/**
 * The `RouteConfig` decorator defines routes for a given component.
 *
 * It takes an array of {@link RouteDefinition}s.
 * @Annotation
 */
export declare var RouteConfig: (configs: RouteDefinition[]) => ClassDecorator;
