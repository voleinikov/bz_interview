module Api
  module V1
    class BasicController < ApplicationController
      def ping
        render json: { msg: ["I'm working!"] }, status: :ok
      end

      def get_zip_weather
        weather_data = OpenWeatherService.get_weather weather_params[:zipcode]

        render json: weather_data, status: :ok
      end


      private

      def weather_params
        params.permit(:zipcode)
      end
    end
  end
end