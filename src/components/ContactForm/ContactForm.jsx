import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { Form, Label, Input } from './ContactForm.styled';
import { Button } from '../Button';

export const ContactForm = ({ onFormSubmit, isLoading }) => {
  const nameId = nanoid();
  const phoneID = nanoid();

  //   const [isActive, setIsActive] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    //     watch,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: { name: '', number: '' } });

  const onSubmit = data => {
    onFormSubmit(data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', number: '' });
    }
  }, [formState, isSubmitSuccessful, reset]);

  return (
    <Box
      display="block"
      p={2}
      mb={4}
      bg="bgComponent"
      width="95%"
      borderRadius="normal"
      boxShadow="basic"
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          id={nameId}
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          {...register('name', {
            required: true,
            pattern:
              /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
          })}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name?.type === 'required' && (
          <p role="alert">Name is required</p>
        )}
        <Label htmlFor={phoneID}>Number</Label>
        <Input
          id={phoneID}
          type="tel"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          {...register('number', {
            required: 'Phone number is required',
            pattern:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i,
          })}
          aria-invalid={errors.number ? 'true' : 'false'}
        />
        {errors.number && <p role="alert">{errors.number?.message}</p>}
        <Button type="submit" disabled={isLoading}>
          Add contact
        </Button>
      </Form>
    </Box>
  );
};

// disabled={!data}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
