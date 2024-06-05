import React from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';
import { formatDistanceToNowStrict } from 'date-fns';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import useLike from '@/hooks/useLike';
//mainfile
import Avatar from '../Avatar';
interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}

const PostItem: React.FC<PostItemProps> = ({ data = {}, userId }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { hasLiked, toggleLike } = useLike({ postId: data.id, userId });

  const goToPost = () => {
    router.push(`/posts/${data.id}`);
  };

  const onLike = async (ev: any) => {
    ev.stopPropagation();

    if (!currentUser) {
      return loginModal.onOpen();
    }

    toggleLike();
  };

  const createdAt = formatDistanceToNowStrict(new Date(data.createdAt));

  return (
    <div className=" post-card max-w-32 inline-block mt-4 cursor-pointer border border-gray-800 hover:border-gray-300 shadow-md rounded-xl p-5 ml-1 mb-1 transition ease-in-out hover:-translate-y-1 hover:scale-80" onClick={goToPost}>
      <div className="flex flex-row  items-start gap-3">
        <Avatar userId={data.user.id} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-emerald-500 font-semibold">{data.user.name}</p>
            {/* <span className="text-gray-500">@{data.user.username}</span> */}
            <span className="text-gray-500">{createdAt}</span>
          </div>
          <div className="text-white mt-1">{data.body}</div>
          <div className="flex flex-row items-center mt-3 gap-10">
            <div className="flex flex-row items-center text-gray-500 gap-2">
              <AiOutlineMessage size={20} />
              <p>{data.comments?.length || 0}</p>
            </div>
            <div
              onClick={onLike}
              className="flex flex-row items-center text-gray-500 gap-2 cursor-pointer"
            >
              {hasLiked ? (
                <AiFillHeart size={20} color="red" />
              ) : (
                <AiOutlineHeart size={20} />
              )}
              <p>{data.likedIds.length}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default PostItem;
