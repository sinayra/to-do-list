class Api::V1::TaskController < ApplicationController
  def index
    task = Task.all.order(created_at: :desc)
    render json: task, content_type: 'application/json'
  end

  def create
    #task = Task.create!(task_params)
    #if task
    #  render json: task
    #else
    #  render json: task.errors
    #end
  end

  def show
    #if task
   #   render json: task
   # else
   #   render json: task.errors
   # end
  end

  def destroy
  #  task&.destroy # safe navigation operator: avoid nil errors
 #   render json: {message: 'Task deleted!'}
  end

#  private
  
#  def task_params #Strong parameters
#    params.permit(:name, :description, :date)
#  end

  #def task
    # ||= => task = task || Task.find(params[:id])
    # @ instance variable - not public
    #@task ||= Task.find(params[:id])
  #end
end
