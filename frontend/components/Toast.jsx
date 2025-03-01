'use client';
import { Alert } from '@heroui/react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideToast } from '../lib/redux/slices/toastSlice';

export default function Toast() {
  const dispatch = useDispatch();
  const { visible, title, description, type } = useSelector((state) => state.toast);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, dispatch]);

  if (!visible) return null;

  return (
      <Alert
        variant="flat"
        color={type}
        onClose={() => dispatch(hideToast())}
        title={title}
        description={description}
        className="fixed top-4 right-4 z-50 max-w-md"
      />
  );
}