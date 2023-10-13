
import css from './Home.module.css';

export const Home = () => {

    return (
      <div className={css.container}>
        <h1 className={css.title}>Welcome to our application! </h1>
        <h3 className={css.greeting}>We will help you to choose a car for rent and have a great time traveling around Ukraine</h3>
      </div>
    );
  };