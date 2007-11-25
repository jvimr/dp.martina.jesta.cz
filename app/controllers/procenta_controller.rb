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
  
  def priklady1
    @title = "Procenta - příklady"
  end
  
  def priklady2
    @title = "Procenta - příklady"
  end
  
end
