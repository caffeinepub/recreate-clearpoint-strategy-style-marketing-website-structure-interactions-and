import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactForm } from '../backend';

export function useSaveContact() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (form: ContactForm) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      await actor.saveContact(form);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
}
