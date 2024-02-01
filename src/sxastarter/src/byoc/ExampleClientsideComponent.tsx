'use client';
import * as FEAAS from '@sitecore-feaas/clientside/react';
import { ReactNode, useEffect, useState } from 'react';

export default function ExampleClientsideComponent(props: {
  name?: string;
  firstName?: string;
  lastName?: string;
  telephone?: string;
  bold?: boolean;
  preview: string;
  previewUrl: string;
  children?: ReactNode;
}) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>Clientside</h2>
      <dl style={props.bold ? { fontWeight: 'bold' } : {}}>
        <dt>Description</dt>
        <dd>Interactive UI</dd>
        <dt>Rendered on</dt>
        <dd>Clientside</dd>
        <dt>Data</dt>
        <dd>
          {props.name} {props.firstName} {props.lastName} / {props.telephone} / {props.preview} /{' '}
          {props.previewUrl}
        </dd>
        <dt>Clientside hook</dt>
        <dd>
          <var>{counter}</var>s elapsed
        </dd>
        {props.children && (props.children as ReactNode[]).length != 0 && (
          <>
            <dt>Children</dt>
            <dd>{props.children}</dd>
          </>
        )}
      </dl>
    </>
  );
}

FEAAS.registerComponent(ExampleClientsideComponent, {
  name: 'clientside-only',
  title: 'Clientside-only component',
  description: 'Description of my example component',
  thumbnail: 'https://feaasstatic.blob.core.windows.net/assets/thumbnails/byoc.svg',
  group: 'Examples',
  required: ['firstName'],
  properties: {
    name: {
      type: 'string',
      title: 'First name',
    },
    lastName: {
      type: 'string',
      title: 'Last name',
    },
    preview: {
      type: 'string',
      title: 'Preview',
    },
    previewUrl: {
      type: 'string',
      title: 'Preview Url',
    },
    telephone: {
      type: 'number',
      title: 'Telephone',
      minLength: 10,
    },
    bold: {
      type: 'boolean',
      title: 'Show text in bold weight',
    },
  },
  ui: {
    name: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:placeholder': 'Write your first name',
    },
    bold: {
      'ui:widget': 'radio',
    },
  },
});
