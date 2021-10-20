class OpenWeather
  OW_VERSION = 2.5
  OW_API_KEY = '284027b5cfc736b902b27754a7064f44'
  OW_DATA_URI = "http://api.openweathermap.org/data/#{OW_VERSION}/weather"
  DEFAULT_PARAMS = {
    :appid => OW_API_KEY
  }

  class << self
    def get_weather_by_zip zipcode
      req = zip_weather_req zipcode
      resp = Net::HTTP.get_response(req)

      if resp.is_a?(Net::HTTPSuccess)
        return JSON.parse(resp.body)
      else
        raise OWZipGetError
      end
    end

    def zip_weather_req zipcode
      uri = URI(OW_DATA_URI)
      params = DEFAULT_PARAMS.merge({
        :zip => "#{zipcode},us"
      })
      uri.query = URI.encode_www_form(params)

      uri
    end
  end

  class OWZipGetError < CustomError
    def custom_msg
      "Something went wrong with the OW API using the Zip Param!"
    end
  end
end