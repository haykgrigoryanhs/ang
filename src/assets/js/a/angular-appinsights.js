
/*global angular: true, appInsights: true */
(function () {
    "use strict";

    angular.module('angular-appinsights', [])

        .provider('insights', function () {

            var _appId,
                _appName;

            this.start = function (appId, appName) {
                try {
                    _appId = appId;
                    _appName = appName || '(Application Root)';

                    if (appInsights && appId && appInsights.start) {
                        appInsights.start(appId);
                    } 

                    if (appInsights && appId && !appInsights.start) {
                        appInsights=appInsights({ instrumentationKey: appId, disableTelemetry: false });
                    }
                } catch (err) {
                    console.log(err.message);
                }
            };
            
            this.getInstrumentationKey = function () {
                var ca = document.cookie.split(';');
                for(var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') {
                        c = c.substring(1);
                    }
                    
                    if (c.indexOf("ai_key=") == 0) {
                        return c.substring("ai_key=".length,c.length);
                    }
                }
                return "";                
            }

            function Insights () {

                var _logEvent = function (event, properties, property) {
                    try {
                        if (appInsights && _appId && appInsights.logEvent) {
                            appInsights.logEvent(event, properties, property);
                        } 

                        if (appInsights && _appId && appInsights.trackEvent){
                            appInsights.trackEvent(event, properties, property);
                        }
                    } catch (err) {
                        console.log(err.message);
                    }
                },

                _logPageView = function (page) {
                    try {
                        if (appInsights && _appId && appInsights.logPageView) {
                            appInsights.logPageView(page);
                        }

                        if (appInsights && _appId && appInsights.trackPageView) {
                            appInsights.trackPageView(page);
                        }
                    } catch (err) {
                        console.log(err.message);
                    }
                },

                _logAuthenticatedUserContext = function (userId, accountId ) {
                    try {
                        appInsights.clearAuthenticatedUserContext();                        
                        if (appInsights && _appId && appInsights.setAuthenticatedUserContext) {
                            appInsights.setAuthenticatedUserContext(userId, accountId);
                        }
                    } catch (err) {
                        console.log(err.message);
                    }
                },
                      
                _clearAuthenticatedUserContent = function() {
                    try {
                        if (appInsights && _appId && appInsights.clearAuthenticatedUserContext) {
                            appInsights.clearAuthenticatedUserContext();                         
                        }
                    } catch (err) {
                        console.log(err.message);
                    }
                },        
                        
                _logMetric = function (name, metric) {
                    try {
                        if (appInsights && _appId && appInsights.trackMetric) {
                            appInsights.trackMetric(name, metric);
                            appInsights.flush();
                        }
                    } catch (err) {
                        console.log(err.message);
                    }
                },
                
                _setDebugMode = function(mode) {
                    try {
                        if (appInsights && _appId && appInsights.config.hasOwnProperty('enableDebug')) {
                            appInsights.config.enableDebug = mode;
                        }                    
                    } catch (err) {
                        console.log(err.message);
                    }
                };
                        
                return {
                    'logEvent': _logEvent,
                    'logPageView': _logPageView,
                    'logAuthenticatedUserContext': _logAuthenticatedUserContext,
                    'clearAuthenticatedUserContent': _clearAuthenticatedUserContent,
                    'logMetric' : _logMetric,
                    'setDebugMode' :_setDebugMode,
                    'appName': _appName
                };
            }

            this.$get = function() {
                return new Insights();
            };
        })

        .run(['$rootScope', '$location', 'insights', function($rootScope, $location, insights) {
            $rootScope.$on('$locationChangeSuccess', function() {
                var pagePath;
                try {
                    pagePath = $location.path().substr(1);
                    pagePath =  insights.appName + '/' + pagePath;
                }
                finally {
                    insights.logPageView(pagePath);
                }
            });
        }]);
}());
