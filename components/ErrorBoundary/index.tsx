import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode
}

class ErrorBoundary extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if ((this.state as any).hasError) {
      return (
        <div>
          <h2>不好意思，页面发生错误！</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            重试一次试试？
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
