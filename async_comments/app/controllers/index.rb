get '/' do
  # La siguiente linea hace render de la vista 
  # que esta en app/views/index.erb
  @comments = Comment.all
  erb :index
end
