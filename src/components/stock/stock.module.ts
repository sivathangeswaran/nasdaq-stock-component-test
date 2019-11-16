//import angular from 'angular';
import './stock.module'

// Creating widget module and registering widget component
angular.module("stockModule", []).component("stockWidget", StockComponent)