#******No existen las vistas********

#CREATE
#get '/new_comment' do
#  erb :'comment/new'
#end


post '/new_comment' do

hash_comment = params[:comment]

  if request.xhr?
    #respond to Ajax request

    comment = Comment.new(hash_comment)
    if comment.save
      @comment = comment
    "#{hash_comment[:body]},#{hash_comment[:author]}"
    end
  else
    #respond to normal request
    comment = Comment.new(hash_comment)
    if comment
      comment.save
      redirect to("/")
    else
      redirect to("/error")
    end
  end#AJAX request
end#post '/new_comment'




#READ
#get '/comment/:id' do
#  comment = Comment.find(params[:id])
#  if comment != nil
#    @comment = comment
#    erb :'comment/comment'
#  else
#    redirect to('/Error')
#  end
#end

#UPDATE
#get '/comment/:id/edit' do
#  @comment = Comment.find(params[:id]) 
#  erb :'comment/_edit'
#end

#put '/comment/:id' do
#  comment = Comment.find(params[:id])
#  if comment != nil
#    comment.update(params[:comment])
#    redirect to("/comment/#{comment.id}")
#  else
#    redirect to ('/Error')
#  end
#end

#DELETE
#delete '/comment/:id' do
#  comment = Comment.find(params[:id])
#  comment.destroy
#  redirect to ("/")
#end