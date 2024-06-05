import axios from 'axios';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';

import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import usePosts from '@/hooks/usePosts';
import usePost from '@/hooks/usePost';

import Avatar from './Avatar';
import Button from './Button';
import Image from 'next/image';

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const MAX_BODY_LENGTH = 33;

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();
  const { mutate: mutatePost } = usePost(postId as string);

  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    if (body.length > MAX_BODY_LENGTH) {
      toast.error('Post content exceeds limit. Please shorten it to 33 characters.');
      return;
    }

    try {
      setIsLoading(true);

      const url = isComment ? `/api/comments?postId=${postId}` : '/api/posts';

      await axios.post(url, { body });

      toast.success('Post created');
      setBody('');
      mutatePosts();
      mutatePost();
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts, isComment, postId, mutatePost, MAX_BODY_LENGTH]);

  return (
    <div className="px-5 py-2">
      {currentUser ? (
        <div className="flex flex-row gap-4">
          <div>
            <Avatar userId={currentUser?.id} />
          </div>
          <div className="w-full">
            <textarea
              disabled={isLoading}
              onChange={(event) => setBody(event.target.value.slice(0, MAX_BODY_LENGTH))} // Truncate on change
              value={body}
              className="
                disabled:opacity-80
                peer
                resize-none 
                mt-3 
                w-full 
                bg-black 
                ring-0 
                outline-none 
                text-[20px] 
                placeholder-neutral-500 
                text-white
              "
              placeholder={placeholder}>
            </textarea>
            <hr 
              className="
                opacity-0 
                peer-focus:opacity-100 
                h-[1px] 
                w-full 
                border-neutral-800 
                transition"
            />
            <div className="mt-4 flex flex-row justify-end">
              <Button  disabled={isLoading || !body} onClick={onSubmit} label="
              Post" />
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8">
           <div className="mx-auto max-w-2xl">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full border border-sky-500 px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Welcome to Better Bridges <a href="https://github.com/ninadvyas/better-bridges" className="font-semibold text-emerald-500"><span className="absolute inset-0 " aria-hidden="true"></span>Github ⭐️<span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">A Platform for Connection and Conversation</h1>
        <p className="mt-6 text-lg leading-8 text-gray-500">A system where you can amplify your voice, where ideas meet community, where people can connect. Join the Conversation.  </p>
      </div>
    </div>
          <div className="flex flex-row items-center justify-center gap-4 mt-5">
            <Button label="Login" onClick={loginModal.onOpen} />
            <Button label="Register" onClick={registerModal.onOpen} secondary />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;