Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:5000' , 'http://localhost:3000' # Update with your frontend origin
    resource '*', headers: :any, methods: [:get] # Update with the desired HTTP methods
  end
end
