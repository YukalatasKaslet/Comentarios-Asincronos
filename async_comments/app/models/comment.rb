class Comment < ActiveRecord::Base
  # Remember to create a migration!

  #Validaciones
  validates :author, :body, presence: true
end
