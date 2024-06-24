import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../reducer/tasksSlice';

const TasksList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    );
};

export default TasksList;
