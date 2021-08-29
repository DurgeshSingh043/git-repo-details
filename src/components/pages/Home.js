import { useState } from 'react';
import { useHistory } from 'react-router';
import { getRepoDetails } from '../../APIs/GitRepos';
import { Button } from '../atoms/Button/Button';
import { TextInput } from '../atoms/TextInput/TextInput';

import './home.scss';

const Home = () => {
  const history = useHistory();
  const [state, setState] = useState({
    userName: '',
    repo: '',
  });

  const onTextChangeHandler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const onSubmitClickHandler = () => {
    const { userName, repo } = state;
    getRepoDetails(userName, repo).then((res) => {
      const repos = res && res.tree.map((item) => item.path);
      history.push('repo-details', repos);
      //console.log('res => ', res);
    });
  };
  const obj = {};
  if (true) obj.text;
  return (
    <div className="home">
      <TextInput
        {...{
          name: 'userName',
          value: state.userName,
          onChange: onTextChangeHandler,
          placeHolder: 'Please enter user name',
          ...obj,
        }}
      />
      <TextInput
        {...{
          name: 'repo',
          value: state.repo,
          onChange: onTextChangeHandler,
          placeHolder: 'Please enter repo name',
        }}
      />
      <Button
        {...{
          onClick: onSubmitClickHandler,
          text: 'Submit',
        }}
      />
    </div>
  );
};

export default Home;
