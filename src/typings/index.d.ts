//To support angular window variable
declare var StockComponent: any

//To support angular window variable
declare var angular: ng.IAngularStatic

//dms.package DefinitelyTyped
declare namespace gcs {

    interface IPlatformService {
        Origin: string;
        Security: any;
        Watchlist: any;
        UserContext: any;
        UserPreference: any;
        PreferenceContext: any;
        DataContext: any;
        Navigate: Function;
        ShowAlert: Function;
        FactSetIdpId: any;
        PostMessageDomains: any;
        PostMessageActions:any;
    }

    interface IDmsHttpService {
		/**
        * http post method
        * @param url
        * @param request
        * @param cacheResponse
        * @param uniqueId
        */
        post(url: string, request: object, cacheResponse: boolean, uniqueId: string): ng.IPromise<any>;
        
         /**
         * http post method
         * @param url
         * @param request
         */
        post(url: string, request: object): ng.IPromise<any>;

		/**
        * http get method
        * @param url
        * @param request
        * @param cacheResponse
        * @param uniqueId
        */
        get(url: string, request: object, cacheResponse: boolean, uniqueId: string): ng.IPromise<any>;
        
        /**
         * http get method
         * @param url
         * @param request
         */
        get(url: string, request: object): ng.IPromise<any>;
    }

    interface IDmsHelperService {
        /**
		 * getWidgetsFileDependencyCollection method
		 * @param widgetObjectCollection
		 * @param fileHost
		 */
        getWidgetsFileDependencyCollection(widgetObjectCollection: any, fileHost: any): any;

		/**
		 * registerComponent method
		 * @param widgetConfig
		 * @param module
		 */
        registerComponent(widgetConfig: any, module: any): void;
    }

    interface IDmsStateProvider {
        /**
		 * getDashboardModel method
		 * @param obj
		 */
        getDashboardModel(obj: any): any;

        /**
		 * state method
		 * @param obj
		 */
        state(obj: any): void;

        /**
        *ExtendedSettings key-value pair
        */
        ExtendedSettings: any;

        /**
        *ClientSettings key-value pair
        */
        ClientSettings: any;

        /**
        *Widgets from dms config
        */
        Groups: any;
    }

    interface IDmsCacheService {
        /**
        * put method
        * @param cacheKey
        * @param data
        */
        put(cacheKey: any, data: any): void;

        /**
		 * get method
		 * @param cacheKey
		 */
        get(cacheKey: any): any;

        /**
		 * remove method
		 * @param cacheKey
		 */
        remove(cacheKey: any): void;
    }

    interface IDmsPostMessageService {
        /**
        * post method
        * @param request
        */
        post(request: any): void;

		/**
		 * subscribe method
		 * @param action
		 * @param cfn
		 */
        subscribe(action: any, cfn: any): void;
    }

    /**
    * dmsEventHandler
    */
    interface IDmsEventHandlerService {
        /**
        * Subscribe to an event
        * @param EventName
        * @param CallbackFunction
        * @param $scope
        */
        subscribe(eventName: string, fn: Function, $scope?: any)

        /**
        * Publish an event
        * @param EventName
        * @param Arguments
        */
        publish(eventName: string, args: any)

        /**
        * UnSubscribe an event
        * @param EventName
        * @param CallbackFunction
        */
        unsubscribe(eventName: string, fn: Function)

        /**
        * UnSubscribeAll handlers attached to an event
        * @param EventName
        */
        unsubscribeAll(eventName: string)
    }

    interface IDmsEvents {
        CONTEXT_CHANGED: any,
        DMS_INITIALIZED: any,
        DMS_COMPLETED: any,
        WIDGET: any,
        LANGUAGECHANGED: string
    }

    interface IDmsExtensionsService {
        /**
         * getWidgetInfo method
		 * @param userStateId
        */
        getWidgetInfo(userStateId: number): object;

        /**
         * getWidgetInfo method
		 * @param widgetName
         * @param groupId
        */
        getWidgetInfoByNameAndGroupId(widgetName: string, groupId: number): object;

        /**
        * getWidgetInfo method
        * @param uniqueId
       */
        getWidgetInfoByUniqueId(uniqueId: string): object;

        /**
         * flag to determine use of mockapi
        */
        useMockApi(): string;

        /**
         * return the mockapi from dashboard extendedsettings
        */
        getMockApi(): string

        /**
         * return api failure message
         */
        getApiFailureMessage(): string

        /**
         * return no data message
         */
        getNoDataMessage(): string
    }
}

//To support importing json in typescript
declare module "*.json" {
    const value: any;
    export default value;
}

//To support importing html in typescript
declare module "*.html" {
    const content: string;
    export default content;
}

//To support importing css in typescript
declare module "*.css" {
    const content: any;
    export default content;
}

//To support importing png images in typescript
declare module "*.png" {
    const content: any;
    export default content;
}