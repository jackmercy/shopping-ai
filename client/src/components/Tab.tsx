import React from 'react';

interface TabProps {
  tab: {
    name: string;
    icon: string;
  };
  handleClick: () => void;
  isFilterTab?: boolean;
  isActiveTab?: string;
}

const Tab = (props: TabProps) => {
  return (
    <div>Tab</div>
  )
}

export default Tab