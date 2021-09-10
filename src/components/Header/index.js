import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  AppBar,
  Box,
  Container,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(1),
  },

  btn: {
    backgroundColor: "yellow",
    "&:hover": {
      backgroundColor: "forestgreen",
    },
  },

  title: {
    flexGrow: 1,
  },
});

class Header extends Component {
  state = {
    count: 0,
    changeColor: false,
  };

  render() {
    const { classes } = this.props;
    return (
      // Панель навигации
      <AppBar position="fixed">
        {/* базовый элемент всех макетов, центрирует элементы по горизонтали */}
        <Container fixed>
          {/* в toolbar кладутся иконки, логотипы, кнопки для адаптивного меню */}
          <Toolbar>
            <MenuIcon />
            <Typography className={classes.title} variant="h6">
              My first app
            </Typography>
            {/* компонент box является оберткой, этакий аналог div */}
            {/* мы прописали ему марджин (весь спесинг тут работает так 1 = 8px */}
            <Box mr={3}>
              <Button
                color="inherit"
                // первый вариант изменения кнопки
                variant={this.state.changeColor ? "contained" : "outlined"}
                // второй вариант изменения кнопки
                // classes={{
                //   root: this.state.changeColor ? classes.btn : undefined,
                // }}
                className={classes.menuButton}
                onClick={this.handleClick}
              >
                Log In
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={this.incrementCounter}
              >
                click {this.state.count}
              </Button>
              <Button
                classes={{
                  root: classes.btn,
                }}
              >
                test
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleClick = () => {
    this.setState((current) => {
      return { changeColor: !current.changeColor };
    });
  };
}

export default withStyles(styles)(Header);
