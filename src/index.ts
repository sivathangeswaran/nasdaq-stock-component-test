// Import stylesheets
import './style.css';
import angular from 'angular';
import StockComponent from './components/stock/stock.component'

// Creating widget module and registering widget component
angular.module("stockModule", []).component("stockWidget", StockComponent)

// An Container Module for Components 
var platformModule = angular.module("platformModule", ["stockModule"]);
