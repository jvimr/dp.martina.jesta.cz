class UrokyController < ApplicationController
  
  layout 'ryby'
  
  #@includeProcenta = false
  @includeUroky = true
  
  
  def index
    redirect_to :action=>'opakujeme'
  end
  
  def opakujeme
    
    @title="Půjčky a úvěry na 1 rok"
    @includeUroky = true
  end
  
  def priklady1
    @title="Půjčky a úvěry na 1 rok"
    @includeUroky = true
  end
  
end
