class ProcentaController < ApplicationController
  
  layout 'default'
  
  @includeProcenta = true
  #@includeUroky = false
 # @title = "Opakujeme procenta"
  
  def index
    #opakujeme
    redirect_to :action=>'opakujeme'
 end
 
  def opakujeme
    
    @title = "Opakujeme procenta"
    @includeProcenta = true
    render :action =>'opakujeme_coko'
  end
  
  def opakujeme_coko
    
    @title = "Opakujeme procenta"
    @includeProcenta = true
   
  end
  
  
  def priklady1
    @title = "Procenta - příklady"
    @includeProcenta = true
  end
  
  def priklady2
    @title = "Procenta - příklady"
    @includeProcenta = true
  end
  
end
