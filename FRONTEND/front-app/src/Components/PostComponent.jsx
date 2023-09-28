import { MdPersonAddAlt1 } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { BsFillShareFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";

export const PostComponent = () => {
  return (
    <div className="post-div">
      <div className="post-inner-div">
        <div className="post-row">
          <img
            src="https://lh3.googleusercontent.com/pw/ADCreHff626bjC-1YCnG6r7ER5eNSJ0RBd12Y-ftfNBtOi8RM-v1pnAbBL0IRVQZyHZS0uEYiMVbYkCWwY9CB71hgxM1iEzaeujkJ_xZR2BTbU3Y94pcQbx-8i4QxVikwKhesCe2IXaWEbkCI3OATOIJyq5bXDVeZELmxdUz-OhRL4bwjmnU06-h6UE-02Q6LphgJ9EAzIEE-CLOHUvlnPqb8VdXcRb48_TBeB7wTtGurwII0Xc0gpIbW1r-27sPYuVwdBQO6ERBU_tfpvKG0B9hAd2QY14zJXC-U0d-G3vJ7TShum2KJEurx8nttCQKJtKXknUzT0lOFnDH0WPlDD9aWL8r63NsJJOJO1CBKX6DpU86bIKU0w5-XVCbGynXDAnDRA1g5UdpdPqoH3ryTrvvmijIZm4u-nc60z4FL3EG5CZMOTV8mo8Pqb_AyTKsk0RMFmGEugnuiT5wiouFNAk1mo-d2FN2bRwKWxy5bAguDvrfvpYhuXSQTozo6DGI4khPcJvM9zTG-jpZc-1X1Da6AK87szPRLH7L1W28jhGqiGZu5FZVr3GUXertdQDKDAImP9thusoXJnVuWnWZLZSlha0_mtpAFxXl3sCIOfOANSnSgI9bPN8Q9QI6IcKU_yeR9ueA8eM8-c7p_WzRquxEQ5KOeqSqSQgQGKdmDBVr--JhStP98idOW99-tla10RiWgVar3l_qgLlNaiWC94ZChxdPvlwha5dqyMCOchIXMla_XzWZxz4VzGONvWlStU7Dsq2OIJ9hhR6YEefhsW0ktj0eR6XWDGN78CWLHsJsLPPYiLmUZ2hz8KN8sdDRqVwqtd7VTheQ6-FohhnLTRqtuzMQfa48LwPa8n6-XKSWx7P-5KdWmpB52RdikXIiHPyDEX8Wgbn-7bZ1t_Iez4uqyw=w727-h969-s-no?authuser=0"
            alt=""
            width={50}
            height={50}
          />
          <div>
            <h4>Oscar Anillo</h4>
            <p>Miami</p>
          </div>
          <div>
            <MdPersonAddAlt1 />
          </div>
        </div>
        <p className="post-text">Having a great time in Miami!</p>
        <img
          src="https://www.miamibeachfl.gov/wp-content/uploads/2023/01/miamibeachsouthpointe.jpg"
          alt=""
        />
        <div className="post-social-div">
          <FcLike className="social-icon" />
          <p>1</p>
          <FaComment className="social-icon comment" />
          <p>Comments</p>
          <BsFillShareFill className="social-icon share" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};
