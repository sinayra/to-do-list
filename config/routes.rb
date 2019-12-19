Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'task/index'
      post 'task/create'
      get 'task/show/:id', to: 'task#show'
      get 'task/destroy/:id', to: 'task#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
