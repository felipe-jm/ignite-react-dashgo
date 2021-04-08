import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  FormErrorMessage,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

type InputProps = {
  name: string;
  label?: string;
  error?: FieldError;
} & ChakraInputProps;

const InputBase: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, error, ...rest }: InputProps, ref) => (
  <FormControl isInvalid={!!error}>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

    <ChakraInput
      ref={ref}
      id={name}
      name={name}
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{
        bgColor: "gray.900",
      }}
      size="lg"
      {...rest}
    />

    {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
  </FormControl>
);

export const Input = forwardRef(InputBase);
