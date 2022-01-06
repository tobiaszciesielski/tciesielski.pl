export const pageView = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '', {
    page_path: url,
  });
};

export const event = ({ action, params }: { action: string; params: any }) => {
  window.gtag('event', action, params);
};
