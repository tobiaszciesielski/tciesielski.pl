import React from 'react';

import styles from './post.module.scss';

interface PostContentProps {
  content: string;
}

export default function PostContent(props: PostContentProps) {
  return (
    <>
      <article
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></article>

      <style global jsx>
        {`
          code[class*='language-'],
          pre[class*='language-'] {
            color: #d6deeb;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            line-height: 1.5;

            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;

            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
          }

          pre[class*='language-']::-moz-selection,
          pre[class*='language-'] ::-moz-selection,
          code[class*='language-']::-moz-selection,
          code[class*='language-'] ::-moz-selection {
            text-shadow: none;
            background: rgba(29, 59, 83, 0.99);
          }

          pre[class*='language-']::selection,
          pre[class*='language-'] ::selection,
          code[class*='language-']::selection,
          code[class*='language-'] ::selection {
            text-shadow: none;
            background: rgba(29, 59, 83, 0.99);
          }

          @media print {
            code[class*='language-'],
            pre[class*='language-'] {
              text-shadow: none;
            }
          }

          /* Code blocks */
          pre[class*='language-'] {
            padding: 1em;

            overflow: auto;
          }

          :not(pre) > code[class*='language-'],
          pre[class*='language-'] {
            color: white;
            border-radius: 0.5em;
            background: #011627;
          }

          :not(pre) > code {
            color: #fe4545;
            background: #011627;
            padding: 3px 6px;
            border-radius: 0.3em;
            white-space: normal;
          }

          .token.comment,
          .token.prolog,
          .token.cdata {
            color: rgb(99, 119, 119);
            font-style: italic;
          }

          .token.punctuation {
            color: rgb(199, 146, 234);
          }

          .namespace {
            color: rgb(178, 204, 214);
          }

          .token.deleted {
            color: rgba(239, 83, 80, 0.56);
            font-style: italic;
          }

          .token.symbol,
          .token.property {
            color: rgb(128, 203, 196);
          }

          .token.tag,
          .token.operator,
          .token.keyword {
            color: rgb(127, 219, 202);
          }

          .token.boolean {
            color: rgb(255, 88, 116);
          }

          .token.number {
            color: rgb(247, 140, 108);
          }

          .token.constant,
          .token.function,
          .token.builtin,
          .token.char {
            color: rgb(130, 170, 255);
          }

          .token.selector,
          .token.doctype {
            color: rgb(199, 146, 234);
            font-style: italic;
          }

          .token.attr-name,
          .token.inserted {
            color: rgb(173, 219, 103);
            font-style: italic;
          }

          .token.string,
          .token.url,
          .token.entity,
          .language-css .token.string,
          .style .token.string {
            color: rgb(173, 219, 103);
          }

          .token.class-name,
          .token.atrule,
          .token.attr-value {
            color: rgb(255, 203, 139);
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: rgb(214, 222, 235);
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }
        `}
      </style>
    </>
  );
}