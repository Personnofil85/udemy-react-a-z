import HugeContent from "./HugeContent.jsx";
import { useState } from "react";

export default function Container() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <h1>Ajouter un évènement global</h1>
      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? "Cacher" : "Montrer"}
      </button>
      {showContent && <HugeContent />}
      <hr />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error minima,
      molestiae nesciunt nihil perspiciatis quidem repudiandae. Accusantium ad
      adipisci animi debitis dolor doloremque doloribus ducimus eligendi enim
      est eveniet ex excepturi explicabo fugiat hic illo libero maiores
      molestias nemo nobis obcaecati odio officiis provident, quibusdam quo
      repellendus sed sequi tempora unde ut velit veniam veritatis voluptates.
      Culpa debitis ea eaque eos, et, eum id illo itaque magnam molestias
      necessitatibus nemo, nostrum placeat quis quos sapiente sint sunt unde. A
      aut blanditiis culpa deserunt eius eos et exercitationem expedita facere,
      id iste, mollitia nam nihil nulla numquam officia pariatur perferendis
      perspiciatis, possimus praesentium qui quibusdam quo recusandae
      reprehenderit repudiandae soluta tempora tempore totam voluptas
      voluptates. Aliquam animi consequatur eaque, eligendi eum expedita,
      facilis fugiat iste laboriosam laborum, maiores obcaecati quibusdam quos
      reprehenderit tenetur. Aliquam culpa cum cupiditate deserunt dicta dolore,
      dolorem doloremque dolores, earum ex excepturi harum hic inventore ipsum
      laborum magni minima natus nisi non odio provident quas repellendus sint
      sit sunt veritatis voluptate? Accusantium alias amet aspernatur assumenda
      consequatur corporis cum distinctio dolor dolore dolores enim eveniet ex
      hic impedit ipsam laudantium libero magni minus molestiae, mollitia
      necessitatibus nemo non nulla officiis optio quos, ratione repudiandae
      temporibus totam ullam, vel vitae voluptatibus voluptatum! Aspernatur
      dignissimos earum enim excepturi fuga harum laboriosam molestiae nisi,
      veniam voluptatum. Aperiam commodi cum, ducimus error et expedita fuga
      fugiat, id illo laudantium molestias natus nostrum quis quos rerum, vero
      voluptas! Animi architecto at autem beatae ducimus eius esse est ipsa
      ipsum, iste labore nam natus ratione repellat saepe totam veritatis
      voluptatem voluptatibus. Debitis doloremque expedita iste molestias quam,
      quos reiciendis tempora. Alias deserunt dolores in nihil, quasi voluptate.
      Adipisci asperiores corporis doloribus eius expedita iure optio pariatur
      placeat porro possimus quia ratione recusandae rem saepe tempora
      temporibus, velit. Alias animi asperiores beatae corporis culpa cum
      debitis ducimus earum eligendi error eveniet fugit id ipsa ipsum
      laboriosam modi mollitia nam necessitatibus neque non optio perspiciatis
      placeat, provident quaerat quas quis quisquam reprehenderit sapiente vero
      voluptatibus? Accusamus atque distinctio doloribus esse iusto repellat.
    </div>
  );
}
