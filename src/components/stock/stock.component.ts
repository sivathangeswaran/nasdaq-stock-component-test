//Component controller
class StockController implements ng.IComponentController {
    static $inject = ['$log'];
    public title: string;
    constructor(private $log: ng.ILogService) {
        this.title =  "Widget 1 in TypeScript";
        $log.log("in Stock constructor");
    }
    $onInit(): void {
        console.log("Init of Stock Called");
    }
}

let widgetTemplate=
'<div class="container-fluid">'+
    '<div class="hero-unit">'+
        '<h1>Hello, this is Stock Component</h1>'+
        '<h5>{{$ctrl.title}}</h5>'+
        '<p>test<p>'+
            '<a class="btn btn-primary" target="_blank" href="https://confluence.org.nasdaqomx.com/display/GCSFW/DMS+Web+Platform">Learn more about DMS</a>'+
        '</p>'+
    '</div>'+
'</div>';

// Widget component
let StockComponent = { controller: StockController, template: widgetTemplate}

export default StockComponent
