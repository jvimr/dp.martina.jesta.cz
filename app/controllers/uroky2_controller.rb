class Uroky2Controller < ApplicationController
  
  layout 'ryby'
  
  #@includeProcenta = false
  @includeUroky = true
  def init
    @naviLista = "Půjčka na vice let"
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
    
    @prev = {:controller=>'uroky', :action=>'priklady1'}

    @next = {:controller=>'uroky2', :action=>'priklady1'}

  end
  
  def priklady1
    @title="List 2"
    @includeProcenta = true
    init
    
    @prev = {:controller=>'uroky2', :action=>'opakujeme'}

    @next = {:controller=>'splatky', :action=>'opakujeme'}
    
  end

  def priklady2
    @title="List 2"
    init
   @includeProcenta = true
    
    @prev = {:controller=>'uroky2', :action=>'opakujeme'}

    @next = {:controller=>'uroky', :action=>'priklady2'}
    
  end

  
end
