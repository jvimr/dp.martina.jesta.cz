class Uroky2Controller < ApplicationController
  
  layout 'ryby'
  
  #@includeProcenta = false
  @includeUroky = true
  def init
    @naviLista = "Půjčka na vice let"
   @includeUroky = true
   @mainIndex = 3
  end
  
  def index
    redirect_to :action=>'opakujeme'
  end
  
  def opakujeme
    
    @title="List 1"
    init
    @includeOkounAni = true
    @includeProcenta = true
    @subIndex = 1
    
    @prev = {:controller=>'uroky', :action=>'priklady3'}

    @next = {:controller=>'uroky2', :action=>'priklady1'}

  end
  
  def priklady1
    @title="List 2"
    @includeProcenta = true
    init
    @subIndex = 2
    
    @prev = {:controller=>'uroky2', :action=>'opakujeme'}

    @next = {:controller=>'uroky2', :action=>'priklady2'}
    
  end

  def priklady2
    @title="List 3"
    init
   @includeProcenta = true
    @subIndex = 3
    @prev = {:controller=>'uroky2', :action=>'priklady1'}

    @next = {:controller=>'splatky', :action=>'opakujeme'}
    
  end

  
end
