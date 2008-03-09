class ProcentaController < ApplicationController
  
 # layout 'default'
  layout 'ryby'
  
  @includeProcenta = true
  #@includeUroky = false
 # @title = "Opakujeme procenta"
  
  @naviLista = "procenta" 
  
  def init
    @naviLista = "Opakujeme procenta"
    @includeProcenta = true
  end
  
  def index
    #opakujeme
    redirect_to :action=>'opakujeme'
 end
 
  def opakujeme
    
    @title = "List 1"
    init
    
    #@prev = { :controller=>'a', :action=>'b'}
    @next = { :controller=>'procenta', :action=>'opakujeme_coko'}
    #render :action =>'opakujeme_coko'
  end
  
  def opakujeme_coko
    
    @title = "List 2"
    
    init
   
    @prev = {:controller=>'procenta', :action=>'opakujeme'}
    @next = {:controller=>'procenta', :action=>'priklady2'}
   
  end
  
  
  def priklady1
    @title = "Procenta - příklady"
    @includeProcenta = true
    init
    
    @prev = {:controller=>'procenta', :action=>'opakujeme_coko'}

    @next = {:controller=>'procenta', :action=>'priklady2'}
  end
  
  def priklady2
    @title = "List 3"
    init
    
    
     @prev = {:controller=>'procenta', :action=>'opakujeme_coko'}

    @next = {:controller=>'uroky', :action=>'opakujeme'}
  end
  
end
