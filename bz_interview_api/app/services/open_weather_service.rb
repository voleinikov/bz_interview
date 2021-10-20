class OpenWeatherService
  class << self
    def get_weather zipcode
      begin
        OpenWeather.get_weather_by_zip zipcode
      rescue => e
        puts e.message
      end
    end
  end
end