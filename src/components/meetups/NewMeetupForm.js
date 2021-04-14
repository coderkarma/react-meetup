import React from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = () => {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' />
                </div>

                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' />
                </div>

                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' required id='address' />
                </div>

                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Description</label>
                    <textarea name='' id='' cols='30' rows='10'></textarea>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
