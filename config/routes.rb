Rails.application.routes.draw do
  resources :users
  resources :cats
  
  # patch '/user-profile/:id', to: 'users#update'
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
end
