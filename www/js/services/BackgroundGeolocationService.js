var app = angular.module('codhab.services.BackgroundGeolocationService', []);

app.service("BackgroundGeolocationService", function ($http,$q) {
  var callbackFn = function(location) {
        $http({
            //request options to send data to server
        });
      backgroundGeoLocation.finish();
    },

    failureFn = function(error) {
      console.log('BackgroundGeoLocation error ' + JSON.stringify(error));
    },

    //Enable background geolocation
    start = function () {
        //save settings (background tracking is enabled) in local storage
      window.localStorage.setItem('bgGPS', 1);

      backgroundGeoLocation.configure(callbackFn, failureFn, {
        stationaryRadius: 50,
        distanceFilter: 50,
        desiredAccuracy: 10,
        debug: true,
        notificationTitle: 'Background tracking',
        notificationText: 'enabled',
        notificationIconColor: '#FEDD1E',
        notificationIconLarge: 'mappointer_large',
        notificationIconSmall: 'mappointer_small',
        locationProvider: 0,//backgroundGeolocation.provider.ANDROID_DISTANCE_FILTER_PROVIDER,
        interval: 10,
        fastestInterval: 5,
        activitiesInterval: 10,
        stopOnTerminate: false,
        startOnBoot: false,
        startForeground: true,
        stopOnStillActivity: true,
        activityType: 'AutomotiveNavigation',
        url: 'http://192.168.81.15:3000/locations',
        syncUrl: 'http://192.168.81.15:3000/sync',
        syncThreshold: 100,
        httpHeaders: {
          'X-FOO': 'bar'
        },
        pauseLocationUpdates: false,
        saveBatteryOnBackground: false,
        maxLocations: 100
      });

      backgroundGeoLocation.start();

    };

    return {
      start: start,
        // Initialize service and enable background geolocation by default
      init: function () {
        var bgGPS = window.localStorage.getItem('bgGPS');
        if (bgGPS == 1 || bgGPS == null) {
          start();
        }
      },
        // Stop data tracking
      stop: function () {
        window.localStorage.setItem('bgGPS', 0);
        backgroundGeoLocation.stop();
      }
    }
    
})
