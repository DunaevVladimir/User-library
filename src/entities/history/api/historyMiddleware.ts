import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/store';

import { 
  addToHistory, 
  deleteFromHistory, 
  clearHistory, 
} from '../model/slice';

export const historyMiddleware = createListenerMiddleware();

historyMiddleware.startListening({
  matcher: isAnyOf(addToHistory, deleteFromHistory,clearHistory),
  effect: (action, listenerApi) => {
    localStorage.setItem('history', JSON.stringify((listenerApi.getState() as RootState).history.list));
  }
})