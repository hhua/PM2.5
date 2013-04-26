## PM2.5 Visualization @mainland, China

China didn't open PM2.5 data to public until recently. The studio BestApp.us in Guangzhou, China collected and veirfied data from official sources, and opened API to public.

## Tips for Using API
* Data from API is in Unicode format, you may use JDK command to convert Unicode to UTF-8 

> native2ascii -encoding UTF-8 -reverse src.txt dest.txt

* Use PrettyJSON in sublime2 to reformat JSON layout

##Data Sources
* [Data Center of China's Department of Enviroment](http://datacenter.mep.gov.cn/)
* [Beijing Air Dectection Center](http://www.bjmemc.com.cn/)

##Inspiring List
* [BEIJING SMS EVE- SMS Data Visualization](https://vimeo.com/50247194)
* [Beijing air vis](http://scottcheng.github.io/bj-air-vis/)
* [AQI CN](http://aqicn.org/city/beijing/)
* [3D Air Quality Visualization](https://engineering.purdue.edu/purpl/level2/papers/Lu2009.pdf)
* [AQI Map US](http://www.wunderground.com/maps/us/2xAirQuality.html)
* [EPA Air Data](http://www.epa.gov/airdata/ad_basic.html)

## Contributors

* API from [PM25.in](http://pm25.in/api_doc)
* Thanks for open API by [BestApp.us App Studio](http://bestapp.us/)

## Response Examples

    {
      "aqi": 176,
      "area": "西安",
      "co": 1.639,
      "co_24h": null,
      "no2": 48,
      "no2_24h": null,
      "o3": 50,
      "o3_24h": null,
      "o3_8h": 66,
      "o3_8h_24h": null,
      "pm10": 235,
      "pm10_24h": null,
      "pm2_5": 128,
      "pm2_5_24h": null,
      "position_name": "阎良区",
      "primary_pollutant": null,
      "quality": "中度污染",
      "so2": 14,
      "so2_24h": null,
      "station_code": null,
      "time_point": "2013-04-03T21:00:00Z"
    }

## Thanks
* [Satellite Eyes](http://satelliteeyes.tomtaylor.co.uk/)
* [TileMill](http://mapbox.com/tilemill/)
