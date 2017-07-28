/**** Tokens ****/
export declare const ANALYZE_FOR_ENTRY_COMPONENTS: InjectionToken<any>;
export declare const APP_BOOTSTRAP_LISTENER: InjectionToken<((compRef: ComponentRef<any>) => void)[]>;
export declare const APP_ID: InjectionToken<string>;
export declare const APP_INITIALIZER: InjectionToken<(() => void)[]>;
export declare class NgProbeToken {
  name: string;
  token: any;
  constructor(name: string, token: any);
}
export declare const PACKAGE_ROOT_URL: InjectionToken<string>;
export declare const PLATFORM_ID: InjectionToken<Object>;
export declare const PLATFORM_INITIALIZER: InjectionToken<(() => void)[]>;

/**** Platform ****/
export declare function assertPlatform(requiredToken: any): PlatformRef;
export declare function createPlatform(injector: Injector): PlatformRef;
export declare function createPlatformFactory(parentPlatformFactory: ((extraProviders?: Provider[]) => PlatformRef) | null, name: string, providers?: Provider[]): (extraProviders?: Provider[]) => PlatformRef;
export declare function destroyPlatform(): void;
export declare function enableProdMode(): void;
export declare function getPlatform(): PlatformRef | null;
export declare function isDevMode(): boolean;

export declare class ErrorHandler {
  constructor(
    deprecatedParameter?: boolean);
  handleError(error: any): void;
}

export declare class NgZone {
  readonly hasPendingMacrotasks: boolean;
  readonly hasPendingMicrotasks: boolean;
  readonly isStable: boolean;
  readonly onError: EventEmitter<any>;
  readonly onMicrotaskEmpty: EventEmitter<any>;
  readonly onStable: EventEmitter<any>;
  readonly onUnstable: EventEmitter<any>;
  constructor({enableLongStackTrace}: {
    enableLongStackTrace?: boolean;
  });
  run<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[]): T;
  runGuarded<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[]): T;
  runOutsideAngular<T>(fn: (...args: any[]) => T): T;
  runTask<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[], name?: string): T;
  static assertInAngularZone(): void;
  static assertNotInAngularZone(): void;
  static isInAngularZone(): boolean;
}
export declare const platformCore: (extraProviders?: Provider[] | undefined) => PlatformRef;

export declare abstract class PlatformRef {
  readonly abstract destroyed: boolean;
  readonly abstract injector: Injector;
  abstract bootstrapModule<M>(moduleType: Type<M>, compilerOptions?: CompilerOptions | CompilerOptions[]): Promise<NgModuleRef<M>>;
  abstract bootstrapModuleFactory<M>(moduleFactory: NgModuleFactory<M>): Promise<NgModuleRef<M>>;
  abstract destroy(): void;
  abstract onDestroy(callback: () => void): void;
}


/**** Module ****/
export declare const CUSTOM_ELEMENTS_SCHEMA: SchemaMetadata;
export declare const NO_ERRORS_SCHEMA: SchemaMetadata;
export declare function getModuleFactory(id: string): NgModuleFactory<any>;

export interface ModuleWithProviders {
  ngModule: Type<any>;
  providers?: Provider[];
}

export interface SchemaMetadata {
  name: string;
}

export declare class SystemJsNgModuleLoader implements NgModuleFactoryLoader {
  constructor(_compiler: Compiler, config?: SystemJsNgModuleLoaderConfig);
  load(path: string): Promise<NgModuleFactory<any>>;
}

export declare abstract class SystemJsNgModuleLoaderConfig {
  factoryPathPrefix: string;
  factoryPathSuffix: string;
}

/**** Application ****/
export declare class ApplicationInitStatus {
  readonly done: boolean;
  readonly donePromise: Promise<any>;
  constructor(appInits: (() => any)[]);
}

export declare class ApplicationModule {
  constructor(appRef: ApplicationRef);
}

export declare abstract class ApplicationRef {
  readonly abstract componentTypes: Type<any>[];
  readonly abstract components: ComponentRef<any>[];
  readonly abstract isStable: Observable<boolean>;
  readonly abstract viewCount: number;
  abstract attachView(view: ViewRef): void;
  abstract bootstrap<C>(componentFactory: ComponentFactory<C> | Type<C>, rootSelectorOrNode?: string | any): ComponentRef<C>;
  abstract detachView(view: ViewRef): void;
  abstract tick(): void;
}

/**** Lifecycle hooks ****/
export interface AfterContentChecked {
  ngAfterContentChecked(): void;
}

export interface AfterContentInit {
  ngAfterContentInit(): void;
}

export interface AfterViewChecked {
  ngAfterViewChecked(): void;
}

export interface AfterViewInit {
  ngAfterViewInit(): void;
}

export interface DoCheck {
  ngDoCheck(): void;
}

export interface OnChanges {
  ngOnChanges(changes: SimpleChanges): void;
}

export interface OnDestroy {
  ngOnDestroy(): void;
}

export interface OnInit {
  ngOnInit(): void;
}

/**** Debug ****/
export declare function asNativeElements(debugEls: DebugElement[]): any;

export declare class DebugElement extends DebugNode {
  attributes: {
    [key: string]: string | null;
  };
  childNodes: DebugNode[];
  readonly children: DebugElement[];
  classes: {
    [key: string]: boolean;
  };
  name: string;
  nativeElement: any;
  properties: {
    [key: string]: any;
  };
  styles: {
    [key: string]: string | null;
  };
  constructor(nativeNode: any, parent: any, _debugContext: DebugContext);
  addChild(child: DebugNode): void;
  insertBefore(refChild: DebugNode, newChild: DebugNode): void;
  insertChildrenAfter(child: DebugNode, newChildren: DebugNode[]): void;
  query(predicate: Predicate<DebugElement>): DebugElement;
  queryAll(predicate: Predicate<DebugElement>): DebugElement[];
  queryAllNodes(predicate: Predicate<DebugNode>): DebugNode[];
  removeChild(child: DebugNode): void;
  triggerEventHandler(eventName: string, eventObj: any): void;
}

export declare class DebugNode {
  readonly componentInstance: any;
  readonly context: any;
  readonly injector: Injector;
  listeners: EventListener[];
  nativeNode: any;
  parent: DebugElement | null;
  readonly providerTokens: any[];
  readonly references: {
    [key: string]: any;
  };
  constructor(nativeNode: any, parent: DebugNode | null, _debugContext: DebugContext);
}

export declare function getDebugNode(nativeNode: any): DebugNode | null;

export interface Predicate<T> {
  (value: T): boolean;
}

/**** Metadata & Decorator ****/
export declare const Attribute: AttributeDecorator;

export declare function Class(clsDef: ClassDefinition): Type<any>;

export declare type ClassDefinition = {
  extends?: Type<any>;
  constructor: Function | any[];
} & {
  [x: string]: Type<any> | Function | any[];
};

export declare const Component: ComponentDecorator;


export interface ComponentDecorator {
  (obj: Component): TypeDecorator;
  new (obj: Component): Component;
}

export declare const ContentChild: ContentChildDecorator;

export interface ContentChildDecorator {
  (selector: Type<any> | Function | string, opts?: {
    read?: any;
  }): any;
  new (selector: Type<any> | Function | string, opts?: {
    read?: any;
  }): ContentChild;
}

export declare const ContentChildren: ContentChildrenDecorator;

export interface ContentChildrenDecorator {
  (selector: Type<any> | Function | string, opts?: {
    descendants?: boolean;
    read?: any;
  }): any;
  new (selector: Type<any> | Function | string, opts?: {
    descendants?: boolean;
    read?: any;
  }): Query;
}

export declare const Directive: DirectiveDecorator;

export interface DirectiveDecorator {
  (obj: Directive): TypeDecorator;
  new (obj: Directive): Directive;
}

export declare const Host: HostDecorator;

export declare const HostBinding: HostBindingDecorator;

export interface HostDecorator {
  (): any;
  new (): Host;
}

export declare const HostListener: HostListenerDecorator;

export declare const Inject: InjectDecorator;

export declare const Injectable: InjectableDecorator;

export interface InjectableDecorator {
  (): any;
  new (): Injectable;
}

export interface InjectDecorator {
  (token: any): any;
  new (token: any): Inject;
}

export declare const Input: InputDecorator;

export declare const NgModule: NgModuleDecorator;

export declare const Optional: OptionalDecorator;

export interface OptionalDecorator {
  (): any;
  new (): Optional;
}

export declare const Output: OutputDecorator;

export declare const Pipe: PipeDecorator;

export declare const Self: SelfDecorator;

export interface SelfDecorator {
  (): any;
  new (): Self;
}

export declare const SkipSelf: SkipSelfDecorator;

export interface SkipSelfDecorator {
  (): any;
  new (): SkipSelf;
}

export interface TypeDecorator {
  annotations: any[];
  (target: Object, propertyKey?: string | symbol, parameterIndex?: number): void;
  <T extends Type<any>>(type: T): T;
  Class(obj: ClassDefinition): Type<any>;
}

export declare const ViewChild: ViewChildDecorator;

export interface ViewChildDecorator {
  (selector: Type<any> | Function | string, opts?: {
    read?: any;
  }): any;
  new (selector: Type<any> | Function | string, opts?: {
    read?: any;
  }): ViewChild;
}

export declare const ViewChildren: ViewChildrenDecorator;

export interface ViewChildrenDecorator {
  (selector: Type<any> | Function | string, opts?: {
    read?: any;
  }): any;
  new (selector: Type<any> | Function | string, opts?: {
    read?: any;
  }): ViewChildren;
}

/**** Change Detection ****/
export declare enum ChangeDetectionStrategy {
  OnPush = 0,
  Default = 1,
}

export declare abstract class ChangeDetectorRef {
  abstract checkNoChanges(): void;
  abstract detach(): void;
  abstract detectChanges(): void;
  abstract markForCheck(): void;
  abstract reattach(): void;
}

export interface IterableChangeRecord<V> {
  readonly currentIndex: number | null;
  readonly item: V;
  readonly previousIndex: number | null;
  readonly trackById: any;
}

export interface IterableChanges<V> {
  forEachAddedItem(fn: (record: IterableChangeRecord<V>) => void): void;
  forEachIdentityChange(fn: (record: IterableChangeRecord<V>) => void): void;
  forEachItem(fn: (record: IterableChangeRecord<V>) => void): void;
  forEachMovedItem(fn: (record: IterableChangeRecord<V>) => void): void;
  forEachOperation(fn: (record: IterableChangeRecord<V>, previousIndex: number, currentIndex: number) => void): void;
  forEachPreviousItem(fn: (record: IterableChangeRecord<V>) => void): void;
  forEachRemovedItem(fn: (record: IterableChangeRecord<V>) => void): void;
}

export interface IterableDiffer<V> {
  diff(object: NgIterable<V>): IterableChanges<V> | null;
}

export interface IterableDifferFactory {
  create<V>(trackByFn?: TrackByFunction<V>): IterableDiffer<V>;
  supports(objects: any): boolean;
}

export declare class IterableDiffers {
  constructor(factories: IterableDifferFactory[]);
  find(iterable: any): IterableDifferFactory;
  static create(factories: IterableDifferFactory[], parent?: IterableDiffers): IterableDiffers;
  static extend(factories: IterableDifferFactory[]): Provider;
}

export interface KeyValueChangeRecord<K, V> {
  readonly currentValue: V | null;
  readonly key: K;
  readonly previousValue: V | null;
}

export interface KeyValueChanges<K, V> {
  forEachAddedItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
  forEachChangedItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
  forEachItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
  forEachPreviousItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
  forEachRemovedItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
}

export interface KeyValueDiffer<K, V> {
  diff(object: Map<K, V>): KeyValueChanges<K, V>;
  diff(object: {
    [key: string]: V;
  }): KeyValueChanges<string, V>;
}

export interface KeyValueDifferFactory {
  create<K, V>(): KeyValueDiffer<K, V>;
  supports(objects: any): boolean;
}

export declare class KeyValueDiffers {
  constructor(factories: KeyValueDifferFactory[]);
  find(kv: any): KeyValueDifferFactory;
  static create<S>(factories: KeyValueDifferFactory[], parent?: KeyValueDiffers): KeyValueDiffers;
  static extend<S>(factories: KeyValueDifferFactory[]): Provider;
}

export declare type NgIterable<T> = Array<T> | Iterable<T>;

export interface PipeTransform {
  transform(value: any, ...args: any[]): any;
}

export declare class SimpleChange {
  currentValue: any;
  firstChange: boolean;
  previousValue: any;
  constructor(previousValue: any, currentValue: any, firstChange: boolean);
  isFirstChange(): boolean;
}

export interface SimpleChanges {
  [propName: string]: SimpleChange;
}

export interface TrackByFunction<T> {
  (index: number, item: T): any;
}

export declare class WrappedValue {
  wrapped: any;
  constructor(wrapped: any);
  static wrap(value: any): WrappedValue;
}

/**** DI ****/
export interface ClassProvider {
  multi?: boolean;
  provide: any;
  useClass: Type<any>;
}

export interface ExistingProvider {
  multi?: boolean;
  provide: any;
  useExisting: any;
}

export interface FactoryProvider {
  deps?: any[];
  multi?: boolean;
  provide: any;
  useFactory: Function;
}

export declare function forwardRef(forwardRefFn: ForwardRefFn): Type<any>;

export interface ForwardRefFn {
  (): any;
}

export declare class InjectionToken<T> extends OpaqueToken {
  constructor(desc: string);
  toString(): string;
}

export declare abstract class Injector {
  abstract get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T): T;
  static NULL: Injector;
  static THROW_IF_NOT_FOUND: Object;
}

export declare type Provider = TypeProvider | ValueProvider | ClassProvider | ExistingProvider | FactoryProvider | any[];

export declare abstract class ReflectiveInjector implements Injector {
  readonly abstract parent: Injector | null;
  abstract createChildFromResolved(providers: ResolvedReflectiveProvider[]): ReflectiveInjector;
  abstract get(token: any, notFoundValue?: any): any;
  abstract instantiateResolved(provider: ResolvedReflectiveProvider): any;
  abstract resolveAndCreateChild(providers: Provider[]): ReflectiveInjector;
  abstract resolveAndInstantiate(provider: Provider): any;
  static fromResolvedProviders(providers: ResolvedReflectiveProvider[], parent?: Injector): ReflectiveInjector;
  static resolve(providers: Provider[]): ResolvedReflectiveProvider[];
  static resolveAndCreate(providers: Provider[], parent?: Injector): ReflectiveInjector;
}

export declare class ReflectiveKey {
  readonly displayName: string;
  id: number;
  token: Object;
  constructor(token: Object, id: number);
  static readonly numberOfKeys: number;
  static get(token: Object): ReflectiveKey;
}

export declare class ResolvedReflectiveFactory {
  dependencies: ReflectiveDependency[];
  factory: Function;
  constructor(
    factory: Function,
    dependencies: ReflectiveDependency[]);
}

export interface ResolvedReflectiveProvider {
  key: ReflectiveKey;
  multiProvider: boolean;
  resolvedFactories: ResolvedReflectiveFactory[];
}

export declare function resolveForwardRef(type: any): any;

export interface TypeProvider extends Type<any> {
}

export interface ValueProvider {
  multi?: boolean;
  provide: any;
  useValue: any;
}

/**** Linker ****/
export declare class Compiler {
  clearCache(): void;
  clearCacheFor(type: Type<any>): void;
  compileModuleAndAllComponentsAsync<T>(moduleType: Type<T>): Promise<ModuleWithComponentFactories<T>>;
  compileModuleAndAllComponentsSync<T>(moduleType: Type<T>): ModuleWithComponentFactories<T>;
  compileModuleAsync<T>(moduleType: Type<T>): Promise<NgModuleFactory<T>>;
  compileModuleSync<T>(moduleType: Type<T>): NgModuleFactory<T>;
}

export declare const COMPILER_OPTIONS: InjectionToken<CompilerOptions[]>;

export declare abstract class CompilerFactory {
  abstract createCompiler(options?: CompilerOptions[]): Compiler;
}

export declare type CompilerOptions = {
  useJit?: boolean;
  defaultEncapsulation?: ViewEncapsulation;
  providers?: any[];
  missingTranslation?: MissingTranslationStrategy;
  enableLegacyTemplate?: boolean;
};

export declare abstract class ComponentFactory<C> {
  readonly abstract componentType: Type<any>;
  readonly abstract inputs: {
    propName: string;
    templateName: string;
  }[];
  readonly abstract ngContentSelectors: string[];
  readonly abstract outputs: {
    propName: string;
    templateName: string;
  }[];
  readonly abstract selector: string;
  abstract create(injector: Injector, projectableNodes?: any[][], rootSelectorOrNode?: string | any, ngModule?: NgModuleRef<any>): ComponentRef<C>;
}

export declare abstract class ComponentFactoryResolver {
  abstract resolveComponentFactory<T>(component: Type<T>): ComponentFactory<T>;
  static NULL: ComponentFactoryResolver;
}

export declare abstract class ComponentRef<C> {
  readonly abstract changeDetectorRef: ChangeDetectorRef;
  readonly abstract componentType: Type<any>;
  readonly abstract hostView: ViewRef;
  readonly abstract injector: Injector;
  readonly abstract instance: C;
  readonly abstract location: ElementRef;
  abstract destroy(): void;
  abstract onDestroy(callback: Function): void;
}

export declare class ElementRef {
  nativeElement: any;
  constructor(nativeElement: any);
}

export declare abstract class EmbeddedViewRef<C> extends ViewRef {
  readonly abstract context: C;
  readonly abstract rootNodes: any[];
}

export declare class ModuleWithComponentFactories<T> {
  componentFactories: ComponentFactory<any>[];
  ngModuleFactory: NgModuleFactory<T>;
  constructor(ngModuleFactory: NgModuleFactory<T>, componentFactories: ComponentFactory<any>[]);
}

export declare abstract class NgModuleFactory<T> {
  readonly abstract moduleType: Type<T>;
  abstract create(parentInjector: Injector | null): NgModuleRef<T>;
}


export declare abstract class NgModuleFactoryLoader {
  abstract load(path: string): Promise<NgModuleFactory<any>>;
}


export declare abstract class NgModuleRef<T> {
  readonly abstract componentFactoryResolver: ComponentFactoryResolver;
  readonly abstract injector: Injector;
  readonly abstract instance: T;
  abstract destroy(): void;
  abstract onDestroy(callback: () => void): void;
}

export declare abstract class TemplateRef<C> {
  readonly abstract elementRef: ElementRef;
  abstract createEmbeddedView(context: C): EmbeddedViewRef<C>;
}

export declare abstract class ViewContainerRef {
  readonly abstract element: ElementRef;
  readonly abstract injector: Injector;
  readonly abstract length: number;
  readonly abstract parentInjector: Injector;
  abstract clear(): void;
  abstract createComponent<C>(componentFactory: ComponentFactory<C>, index?: number, injector?: Injector, projectableNodes?: any[][], ngModule?: NgModuleRef<any>): ComponentRef<C>;
  abstract createEmbeddedView<C>(templateRef: TemplateRef<C>, context?: C, index?: number): EmbeddedViewRef<C>;
  abstract detach(index?: number): ViewRef | null;
  abstract get(index: number): ViewRef | null;
  abstract indexOf(viewRef: ViewRef): number;
  abstract insert(viewRef: ViewRef, index?: number): ViewRef;
  abstract move(viewRef: ViewRef, currentIndex: number): ViewRef;
  abstract remove(index?: number): void;
}

export declare abstract class ViewRef extends ChangeDetectorRef {
  readonly abstract destroyed: boolean;
  abstract destroy(): void;
  abstract onDestroy(callback: Function): any;
}

/**** Testability ****/
export interface GetTestability {
  addToWindow(registry: TestabilityRegistry): void;
  findTestabilityInTree(registry: TestabilityRegistry, elem: any, findInAncestors: boolean): Testability | null;
}

export declare function setTestabilityGetter(getter: GetTestability): void;

export declare class Testability implements PublicTestability {
  constructor(_ngZone: NgZone);
  decreasePendingRequestCount(): number;
  findProviders(using: any, provider: string, exactMatch: boolean): any[];
  getPendingRequestCount(): number;
  increasePendingRequestCount(): number;
  isStable(): boolean;
  whenStable(callback: Function): void;
}

export declare class TestabilityRegistry {
  constructor();
  findTestabilityInTree(elem: Node, findInAncestors?: boolean): Testability | null;
  getAllRootElements(): any[];
  getAllTestabilities(): Testability[];
  getTestability(elem: any): Testability | null;
  registerApplication(token: any, testability: Testability): void;
}

/**** i18n ****/
export declare const LOCALE_ID: InjectionToken<string>;

export declare enum MissingTranslationStrategy {
  Error = 0,
  Warning = 1,
  Ignore = 2,
}

export declare const TRANSLATIONS: InjectionToken<string>;

export declare const TRANSLATIONS_FORMAT: InjectionToken<string>;

/**** Query ****/
export declare abstract class Query {
}


export declare class QueryList<T> {
  readonly changes: Observable<any>;
  readonly dirty: boolean;
  readonly first: T;
  readonly last: T;
  readonly length: number;
  filter(fn: (item: T, index: number, array: T[]) => boolean): T[];
  find(fn: (item: T, index: number, array: T[]) => boolean): T | undefined;
  forEach(fn: (item: T, index: number, array: T[]) => void): void;
  map<U>(fn: (item: T, index: number, array: T[]) => U): U[];
  notifyOnChanges(): void;
  reduce<U>(fn: (prevValue: U, curValue: T, curIndex: number, array: T[]) => U, init: U): U;
  reset(res: Array<T | any[]>): void;
  setDirty(): void;
  some(fn: (value: T, index: number, array: T[]) => boolean): boolean;
  toArray(): T[];
  toString(): string;
}

/**** Render ****/
export declare abstract class Renderer2 {
  readonly abstract data: {
    [key: string]: any;
  };
  destroyNode: ((node: any) => void) | null;
  abstract addClass(el: any, name: string): void;
  abstract appendChild(parent: any, newChild: any): void;
  abstract createComment(value: string): any;
  abstract createElement(name: string, namespace?: string | null): any;
  abstract createText(value: string): any;
  abstract destroy(): void;
  abstract insertBefore(parent: any, newChild: any, refChild: any): void;
  abstract listen(target: 'window' | 'document' | 'body' | any, eventName: string, callback: (event: any) => boolean | void): () => void;
  abstract nextSibling(node: any): any;
  abstract parentNode(node: any): any;
  abstract removeAttribute(el: any, name: string, namespace?: string | null): void;
  abstract removeChild(parent: any, oldChild: any): void;
  abstract removeClass(el: any, name: string): void;
  abstract removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void;
  abstract selectRootElement(selectorOrNode: string | any): any;
  abstract setAttribute(el: any, name: string, value: string, namespace?: string | null): void;
  abstract setProperty(el: any, name: string, value: any): void;
  abstract setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void;
  abstract setValue(node: any, value: string): void;
}

export declare abstract class RendererFactory2 {
  abstract begin?(): void;
  abstract createRenderer(hostElement: any, type: RendererType2 | null): Renderer2;
  abstract end?(): void;
  abstract whenRenderingDone?(): Promise<any>;
}

export declare enum RendererStyleFlags2 {
  Important = 1,
  DashCase = 2,
}

export interface RendererType2 {
  data: {
    [kind: string]: any;
  };
  encapsulation: ViewEncapsulation;
  id: string;
  styles: (string | any[])[];
}

/**** Security ****/
export declare abstract class Sanitizer {
  abstract sanitize(context: SecurityContext, value: {} | string | null): string | null;
}

export declare enum SecurityContext {
  NONE = 0,
  HTML = 1,
  STYLE = 2,
  SCRIPT = 3,
  URL = 4,
  RESOURCE_URL = 5,
}

/**** Misc ****/
export declare class EventEmitter<T> extends Subject<T> {
  __isAsync: boolean;
  constructor(isAsync?: boolean);
  emit(value?: T): void;
  subscribe(generatorOrNext?: any, error?: any, complete?: any): any;
}

export declare const Type: FunctionConstructor;

export declare class Version {
  full: string;
  readonly major: string;
  readonly minor: string;
  readonly patch: string;
  constructor(full: string);
}

export declare const VERSION: Version;

export declare enum ViewEncapsulation {
  Emulated = 0,
  Native = 1,
  None = 2,
}

/**** Profile ****/
export declare const wtfCreateScope: (signature: string, flags?: any) => WtfScopeFn;

export declare const wtfEndTimeRange: (range: any) => void;

export declare const wtfLeave: <T>(scope: any, returnValue?: T) => T;

export interface WtfScopeFn {
  (arg0?: any, arg1?: any): any;
}

export declare const wtfStartTimeRange: (rangeType: string, action: string) => any;
