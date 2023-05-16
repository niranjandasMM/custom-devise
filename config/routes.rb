Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'user/registrations'
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root 'home#index'
end
