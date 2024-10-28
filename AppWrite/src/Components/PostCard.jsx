import React from "react";
import appwriteService from "../AppWrite/Confing";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featureimage }) => {
  return (
    <Link to={`/Post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.GetFilePreview(featureimage)}
            className="rounded-xl"
            alt={title}
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
