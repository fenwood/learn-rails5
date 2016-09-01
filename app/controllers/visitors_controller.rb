class VisitorsController < ApplicationController
	# Do not use layout
	# layout false
	
  def new
    Rails.logger.debug 'DEBUG: entering new method'
    @owner = Owner.new

    # Flash message
    flash.now[:notice] = 'Welcome Johnny!'
    flash.now[:alert] = 'My BDAY is soon!'
    render 'visitors/new'
    Rails.logger.debug 'DEBUG: owner name is ' + @owner.name

  end
	
end
