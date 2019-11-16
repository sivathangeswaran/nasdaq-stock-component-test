//import angular from 'angular';
import StockComponent from "./stock.component"

// Creating widget module and registering widget component
angular.module("stockModule", []).component("stockWidget", StockComponent)