class SplatkyController < ApplicationController
  
  layout 'ryby'
  
  #@includeProcenta = false
  @includeUroky = true
  def init
    @naviLista = "Osobní úvěr"
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
    
    @prev = {:controller=>'uroky2', :action=>'priklady2'}

    @next = {:controller=>'splatky', :action=>'priklady1'}

  end
  
  def priklady1
    @title="List 2"
    @includeProcenta = true
    init
    
    @prev = {:controller=>'splatky', :action=>'opakujeme'}

    @next = {:controller=>'splatky', :action=>'priklady2'}
    
  end

  def priklady2
    @title="List 3"
    init
   @includeProcenta = true
    
    @prev = {:controller=>'splatky', :action=>'priklady1'}

    #@next = {:controller=>'uroky', :action=>'priklady2'}
    
  end

  
end
