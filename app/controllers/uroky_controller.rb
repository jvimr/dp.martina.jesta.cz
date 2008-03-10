class UrokyController < ApplicationController
  
  layout 'ryby'
  
  #@includeProcenta = false
  @includeUroky = true
  def init
    @naviLista = "Půjčky a úvěry na 1 rok"
   @includeUroky = true
   
  end
  
  def index
    redirect_to :action=>'opakujeme'
  end
  
  def opakujeme
    
    @title="List 1"
    init
    @includeOkounAni = true
    @includeProcenta = true
    
    @prev = {:controller=>'procenta', :action=>'priklady2'}

    @next = {:controller=>'uroky', :action=>'priklady1'}

  end
  
  def priklady1
    @title="List 2"
    init
    
    @prev = {:controller=>'uroky', :action=>'opakujeme'}

    @next = {:controller=>'uroky', :action=>'priklady2'}
    
  end
  
end
