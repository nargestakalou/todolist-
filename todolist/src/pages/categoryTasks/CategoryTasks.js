import { Col, Container, Row } from 'react-bootstrap'
import NavbarCategoryCarts from '../../components/navbarCategoryCart/NavbarCategoryCarts'
import ButtonGroupTasks from '../../components/buttonGroupTasks/ButtonGroupTasks'
import SortAllTask from '../../components/sortAllTasks/SortAllTask'
import AddButton from '../../components/addButton/AddButton'
import './CategoryTasks.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import TaskCard from '../../components/taskCard/TaskCard'
import ButtonsAllTasks from '../../components/buttonsAllTasks/ButtonsAllTasks'
import Toast from '../../components/toast/Toast'
import Swal from 'sweetalert2'

function CategoryTasks(){
    const local=useLocation()
    const selectedCart=local.state
    const[isActiveButton,setIsActiveButton]=useState('All Tasks')
    const[allTasks,setAllTasks]=useState(JSON.parse(localStorage.getItem('tasks')))
    const filterdCategory=allTasks.filter(task=>task.selectedCategory.title===selectedCart.title)
    const[categoryTasks,setCateoryTasks]=useState(filterdCategory)
    const[activeBtn,setActiveBtn]=useState('All')
const[sortChange,setSortChange]=useState('default')
const [showToast,setShowToast]=useState(false)
const[contentToast,setContentToast]=useState('')
//buttons Handler
const buttonsHandler=(selected)=>{
    setIsActiveButton('All Tasks')
    const allTaskLoc=[...allTasks]
    const categoryTasksBase=allTaskLoc.filter(task=>task.selectedCategory.title===selectedCart.title)
    let filterCategoryTasks=[...categoryTasksBase]
    setSortChange('default')
if(selected==='All'){
    setActiveBtn('All')
    filterCategoryTasks=[...categoryTasksBase]
}
if(selected==='Active'){
    setActiveBtn('Active')
    filterCategoryTasks=filterCategoryTasks.filter(task=>task.isCompleted===false)
}
if(selected==='Completed'){
    setActiveBtn('Completed')
    filterCategoryTasks=filterCategoryTasks.filter(task=>task.isCompleted===true)
}
setCateoryTasks(filterCategoryTasks)

}



//sort
const sortHandler=(sortTitle)=>{
    let sortTasks=[...categoryTasks]
    if(sortTitle==='Due date'){
        sortTasks=sortTasks.sort((a,b)=>b.startDate.localeCompare(a.startDate))
        setSortChange('Due date')
    }
    if(sortTitle==='Task name'){
        sortTasks=sortTasks.sort((a,b)=>a.titleTask.localeCompare(b.titleTask))
        setSortChange('Task name')
    }
    if(sortTitle==='default'){
        setSortChange('default')
        sortTasks=[...categoryTasks]
    }
    setCateoryTasks(sortTasks)
}
//popup menu
const isCompletedhandler=(taskId)=>{
    const allTaskLoc=[...allTasks]
    const completedTask=allTaskLoc.map(task=>task.id===taskId?{...task,isCompleted:true}:task)
    localStorage.setItem('tasks',JSON.stringify(completedTask))
    setShowToast(true)
    setAllTasks(JSON.parse(localStorage.getItem('tasks')))
    setContentToast('Task completed!')
    setTimeout(()=>setShowToast(false),5000)



}

const isFavoriteHandler=(taskId)=>{
    const allTaskLoc=[...allTasks]
    const favoriteTasks=allTaskLoc.map(task=>task.id===taskId?{...task,isFavorite:true}:task)
    localStorage.setItem('tasks',JSON.stringify(favoriteTasks))
    setShowToast(true)
    setContentToast('Added to favorites.')
    setAllTasks(JSON.parse(localStorage.getItem('tasks')))
    setTimeout(()=>setShowToast(false),5000)

}

const navigate=useNavigate()
const editTaskHandler=(taskId)=>{
    const allTaskLoc=[...allTasks]
    const selectedTask=allTaskLoc.find(task=>task.id===taskId)
    navigate('/editItem',{
        state:selectedTask
    })


}
const deleteTaskHandler=(taskId)=>{
    Swal.fire({
        title:'Are you sure?',
        icon:'warning',
        showCancelButton:true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
        confirmButtonText:'Yes, delete this'

    }).then((result)=>{
        if(result.isConfirmed){
            const allTaskLoc=[...allTasks]
            const newAllTask=allTaskLoc.filter(task=>task.id !== taskId)
            const categoryTasksNew=newAllTask.filter(task=>task.selectedCategory.title===selectedCart.title)
            setCateoryTasks(categoryTasksNew)
            localStorage.setItem('tasks',JSON.stringify(newAllTask))
            setShowToast(true)
            setContentToast('Task deleted successfully!')
            setTimeout(()=>setShowToast(false),5000)
        }
    })
}

// filter
const filterHandler=(title)=>{
    const today=new Date()
    const onlyToday=new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    )
    setSortChange('default')
    const categoryTasksBase=allTasks.filter(task=>task.selectedCategory.title===selectedCart.title)
    let filteredCategoryTasks=[...categoryTasksBase]
    if(activeBtn==='All'){
        filteredCategoryTasks=[...filteredCategoryTasks]
        setIsActiveButton('All Tasks')
    }
    if(activeBtn==='Active'){
        filteredCategoryTasks=filteredCategoryTasks.filter(task=>task.isCompleted===false)
    }
    if(activeBtn==='Completed'){
        filteredCategoryTasks=filteredCategoryTasks.filter(task=>task.isCompleted===true)
    }
    if(title==='All Tasks'){
        filteredCategoryTasks=[...filteredCategoryTasks]
    }
    if(title==='Today'){
        filteredCategoryTasks=filteredCategoryTasks.filter(task=>{
            const taskDate=new Date(task.startDate)
            return(
               new Date(
                 taskDate.getFullYear(),
                taskDate.getMonth(),
                taskDate.getDate()
               )
            ).getTime()===onlyToday.getTime()
    })
                setIsActiveButton('Today')

    }
    if(title==='Upcoming'){
        filteredCategoryTasks=filteredCategoryTasks.filter(task=>{
            const taskDate=new Date(task.startDate)
            return(
                new Date(
                    taskDate.getFullYear(),
                    taskDate.getMonth(),
                    taskDate.getDate()
                ).getTime()>= onlyToday.getTime()
            )
        })
        setIsActiveButton('Upcoming')
    }

        if(title==='Completed'){
            filteredCategoryTasks=filteredCategoryTasks.filter(task=>task.isCompleted===true)
setIsActiveButton('Completed')

        }
        if(title==='Favorite'){
            filteredCategoryTasks=filteredCategoryTasks.filter(task=>task.isFavorite===true)
            setIsActiveButton('Favorite')
        }

    setCateoryTasks(filteredCategoryTasks)

}

    return(
        <>
        <NavbarCategoryCarts title={selectedCart.title} count={categoryTasks.length} />
        <Container  className='mt-5'  style={{maxWidth:'800px'}}>
            <Row>
                {showToast&& <Toast content={contentToast} />}
                <Col>
                <ButtonGroupTasks
                onClick={buttonsHandler}
                active={activeBtn}
                
                />
                
                </Col>
            </Row>
            <SortAllTask
            sortTitle={sortChange}
            sortHandler={sortHandler}
            />
            <Row>
                {categoryTasks.map((task,index)=>(
                    <Col key={task.id}>
                    <TaskCard  {...task} 
                    isLast={index===categoryTasks.length-1}
                    isCompletedhandler={isCompletedhandler}
                    isFavoriteHandler={isFavoriteHandler}
                    editTaskHandler={editTaskHandler}
                    deleteTaskHandler={deleteTaskHandler}



                    
                    />
                    </Col>
                ))}


            </Row>



        </Container>
        <ButtonsAllTasks onClick={filterHandler} isActive={isActiveButton} />

        <AddButton/>
        
        </>
    )
}


export default CategoryTasks