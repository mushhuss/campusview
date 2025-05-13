import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  errorText: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '4px'
  },
  noteText: {
    color: '#333',
    fontSize: '0.9rem',
    margin: '15px',
    textAlign: 'center'
  }
}));

const EditCampusView = (props) => {
  const { handleChange, handleSubmit, name, address, description, imageURL } = props;
  const classes = useStyles();

  return (
    <div>
      <h1>Edit Campus</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{
              fontWeight: 'bold',
              fontFamily: 'Courier, sans-serif',
              fontSize: '20px',
              color: '#11153e'
            }}>
              Update Campus Info
            </Typography>
          </div>

          <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Name: </label>
            <input type="text" name="name" value={name} onChange={handleChange} />
            <br /><br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Address: </label>
            <input type="text" name="address" value={address} onChange={handleChange} />
            <br /><br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description: </label>
            <textarea
              name="description"
              value={description}
              onChange={handleChange}
              rows="3"
              style={{ width: '90%' }}
            />
            <br /><br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image URL: </label>
            <input type="text" name="imageURL" value={imageURL} onChange={handleChange} />
            <br /><br />

            <Typography className={classes.noteText}>
              *Note: Leaving any field empty will retain its current value.
            </Typography>

            <Button variant="contained" color="primary" type="submit">
              Save Changes
            </Button>
            <br /><br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCampusView;
