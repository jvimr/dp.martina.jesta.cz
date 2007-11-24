class ProcentaController < ApplicationController
  
  layout 'default'
  
 # @title = "Opakujeme procenta"
  
  def index
    opakujeme
    render :action=>'opakujeme'
 end
 
  def opakujeme
    
    @title = "Opakujeme procenta"
  end
  
end
