import React, { useState } from 'react';
import { Button, Grid, Paper, Typography, } from '@material-ui/material';
import { makeStyles } from '@material-ui/core/styles';

const RPS = () => {

    const [userChoice, setUserChoice] = useState(null);
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const handleUserChoice = (choice) => {
        setUserChoice(choice)
    };

    const determineWinner = () => {
        if (userChoice === computerChoice) return 'Tie';
        if (userChoice === 'rock' && computerChoice === 'scissors') return 'You win!';
        if (userChoice === 'paper' && computerChoice === 'rock') return 'You win!';
        if (userChoice === 'scissors' && computerChoice === 'paper') return 'You win!';
        return 'You lose!';

    };

    const useStyles = makeStyles((theme => ({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
    })));

    return (
        <div>
            <h1>Rock Paper Scissors</h1>
            <Grid container spacing={2}>
                <Grid item>
                    <Paper>
                        <Button
                            variant="contained"
                            onClick={() => handleUserChoice('rock')}>
                            Rock
                        </Button>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper>
                        <Button
                            variant="contained"
                            onClick={() => handleUserChoice('paper')}>
                            Paper
                        </Button>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper>
                        <Button
                            variant="contained"
                            onClick={() => handleUserChoice('scissors')}>
                            Scissors
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
            <Typography variant="h6">
                Your Choice: {userChoice}
            </Typography>
            <Typography variant="h6">
                Computer's Choice: {computerChoice}
            </Typography>
            <Typography variant="h2">
                {determineWinner()}
            </Typography>
        </div>
    );
}
export default RPS;