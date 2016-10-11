var myModule = angular.module("MyModule", []);


myModule.directive("hello", function($templateCache) {
    return {
        restrict: 'E',//A属性，E元素，C类，M注解
        //template:'<div>加载内容</div>',

        //true保留原来的内容在ng-transclude里
        //transclude:true,template:'<div>加载内容<div ng-transclude></div></div>',

        template: $templateCache.get("hello.html"),//get用上面run内容
        //templateUrl:'./hello.html',//Url 加载指定的页面块
        replace: true,//true不保留hello在页面

    }
});