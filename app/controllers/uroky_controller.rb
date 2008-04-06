class UrokyController < ApplicationController
  
  layout 'ryby'
  
  #@includeProcenta = false
  @includeUroky = true
  def init
    @naviLista = "Půjčka na 1 rok"
   @includeUroky = true
   @mainIndex = 2
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

    @next = {:controller=>'uroky', :action=>'priklady2'}

  end
  
  def priklady1
    
    redirect_to :action=>'priklady2'
    #@title="List 2"
    #init
    
    #@prev = {:controller=>'uroky', :action=>'opakujeme'}

    #@next = {:controller=>'uroky', :action=>'priklady2'}
    
  end

  def priklady2
    @title="List 2"
    init
   @includeProcenta = true
    
    @prev = {:controller=>'uroky', :action=>'opakujeme'}

    @next = {:controller=>'uroky', :action=>'priklady3'}
    
  end
  
  def priklady3
     @title="List 3"
    init
   @includeProcenta = true
    
    @prev = {:controller=>'uroky', :action=>'priklady2'}

    @next = {:controller=>'uroky2', :action=>'opakujeme'}
    
  end

  
end
