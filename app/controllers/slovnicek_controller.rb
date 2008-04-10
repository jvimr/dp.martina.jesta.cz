class SlovnicekController < ApplicationController
  
 # layout 'default'
  layout 'ryby'
  
  #@includeProcenta = true
  #@includeUroky = false
 # @title = "Opakujeme procenta"
  
  @naviLista = "slovnicek" 
  
  def init
    @naviLista = "Slovníček pojmů"
   # @includeProcenta = true
  end
  
  def index
    #opakujeme
    redirect_to :action=>'view'
 end
 
  def view
    
    @title = ""
    init
    
    #@prev = { :controller=>'a', :action=>'b'}
   # @next = { :controller=>'procenta', :action=>'opakujeme_coko'}
    #render :action =>'opakujeme_coko'
  end
  
  
  def test
    @title = ""
    @naviLista = "Test"
    @mainIndex = "test"
  end
 
  
end
