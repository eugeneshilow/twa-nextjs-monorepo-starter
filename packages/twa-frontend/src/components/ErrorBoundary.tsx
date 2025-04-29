import {
  Component,
  type ComponentType,
  type GetDerivedStateFromError,
  type PropsWithChildren,
} from 'react';

export interface ErrorBoundaryProps extends PropsWithChildren {
  fallback: ComponentType<{ error: Error }>;
}

interface ErrorBoundaryState {
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {};

  static getDerivedStateFromError: GetDerivedStateFromError<
    ErrorBoundaryProps,
    ErrorBoundaryState
  > = (error: Error) => {
    return { error } as ErrorBoundaryState;
  };

  componentDidCatch(error: Error) {
    const errorState: ErrorBoundaryState = { error };
    this.setState(errorState);
  }

  render() {
    const {
      state: { error },
      props: { fallback: Fallback, children },
    } = this;

    return error ? <Fallback error={error} /> : children;
  }
}
