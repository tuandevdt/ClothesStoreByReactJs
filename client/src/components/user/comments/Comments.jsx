import React from 'react'
import CommentItem from './CommentItem'

export default function Comments() {
  return (
    <div className="w-full bg-white">
  <h3 className="font-bold text-2xl">Đánh giá sản phẩm</h3>
  <form>
    <div className="flex flex-col">
      <CommentItem 
        username="Tuan Doan"
        text="Đồ đẹp, chất lượng nha mọi người"
      />
      <CommentItem 
        username="Hoàng Tiến"
        text="Quá xịn, sẽ ủng hộ tiếp"
      />

    </div>
    <div className="w-full mt-2">
      <textarea
        className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
        name="body"
        placeholder="Writing your comment..."
        required=""
        defaultValue={""}
      />
    </div>
    <div className="w-full flex justify-end px-3">
      <input
        type="submit"
        className="px-10 py-3 rounded-md text-white text-sm bg-indigo-500"
        defaultValue="Post Comment"
      />
    </div>
  </form>
</div>

  )
}
