import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

// TODO: figure out type
declare let google: any;

interface IData {
  address: string;
  name: string;
  street_address: string;
  city: string;
  state: string;
  zip_code: string;
}

const validationSchema = Yup.object().shape({
  address: Yup.string().trim().required('Required'),
  name: Yup.string().trim().required('Required'),
  street_address: Yup.string().trim().required('Required'),
  city: Yup.string().trim().required('Required'),
  state: Yup.string().trim().required('Required'),
  zip_code: Yup.string().trim().required('Required'),
});

function Location() {
  const ref = React.useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    defaultValues: {
      address: '',
      name: '',
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  useEffect(() => {
    const autocomplete = new google.maps.places.Autocomplete(ref.current, {});
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      reset({
        address: place.name,
        name: place.name,
        street_address: `${place.address_components[0].long_name} ${place.address_components[1].long_name}`,
        city: place.address_components[4].long_name,
        state: place.address_components[6].short_name,
        zip_code: place.address_components[8].short_name,
      });
    });
  }, [reset]);

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col space-y-8">
        <div>
          <input
            placeholder="Address"
            id="autocomplete"
            className="input-field"
            ref={ref}
            type="text"
          />
          {errors.address && <p>{errors.address.message}</p>}
        </div>

        <div>
          <input placeholder="Name" {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
          <input
            value="street_address"
            placeholder="Street Address"
            {...register('street_address')}
          />
          {errors.street_address && <p>{errors.street_address.message}</p>}
        </div>

        <div>
          <input value="city" placeholder="City" {...register('city')} />
          {errors.city && <p>{errors.city.message}</p>}
        </div>

        <div>
          <input value="state" placeholder="State" {...register('state')} />
          {errors.state && <p>{errors.state.message}</p>}
        </div>

        <div>
          <input value="zip_code" placeholder="Zipcode" {...register('zip_code')} />
          {errors.zip_code && <p>{errors.zip_code.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Location;
