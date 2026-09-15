import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import type { AsyncSliceState } from '../types/parking';

export const useSliceFeedback = (slice: AsyncSliceState, scopeKey: string) => {
  const lastError = useRef<string | null>(null);
  const lastMessage = useRef<string | null>(null);

  useEffect(() => {
    if (slice.error && slice.error !== lastError.current) {
      toast.error(slice.error);
      lastError.current = slice.error;
    }

    if (!slice.error) {
      lastError.current = null;
    }
  }, [slice.error, scopeKey]);

  useEffect(() => {
    if (slice.message && slice.message !== lastMessage.current) {
      toast.success(slice.message);
      lastMessage.current = slice.message;
    }

    if (!slice.message) {
      lastMessage.current = null;
    }
  }, [slice.message, scopeKey]);
};
