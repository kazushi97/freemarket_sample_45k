Rails.application.routes.draw do
  root 'test#index'
  get 'test/create' => 'test#create'
end
