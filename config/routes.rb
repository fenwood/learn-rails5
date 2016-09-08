Rails.application.routes.draw do
  #post 'contact', to: 'contacts#process_form'
  resources :contacts, only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'visitors#new'
end
