import React, { useEffect } from "react";

export default function HugeContent() {
  useEffect(() => {
    window.addEventListener("scroll", handleGlobalScroll);

    function handleGlobalScroll() {
      console.log("scrolling !");
    }

    return () => {
      console.log("Nettoyage de l'écouteur");
      window.removeEventListener("scroll", handleGlobalScroll);
    };
  }, []);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        atque ducimus exercitationem, laudantium nihil nobis quidem? Adipisci at
        dolor explicabo facere, fugit maxime nam nihil nulla pariatur provident
        quam quas rem repellat suscipit temporibus veniam veritatis voluptas,
        voluptate. Accusamus ad adipisci alias aperiam aspernatur autem
        consectetur corporis cumque cupiditate, delectus dolores ex excepturi
        fuga fugiat hic illum in labore laboriosam laborum minus nam
        necessitatibus, non odio omnis placeat quasi qui quia quibusdam quos
        ratione reiciendis rerum saepe sequi unde veritatis voluptas voluptate!
        Ab aliquid dicta eaque ex facere facilis illo maxime quod repudiandae
        sed. Amet aspernatur dolor dolores dolorum perspiciatis vel veniam. Ad
        alias amet blanditiis, commodi consectetur consequatur dolorum earum
        exercitationem facilis inventore minus, molestiae nostrum obcaecati,
        odio perspiciatis possimus quibusdam quo quod recusandae repellat
        reprehenderit repudiandae rerum sunt veniam vero voluptate voluptatum.
        Alias, amet atque dolorem ducimus, eaque fugiat ipsa neque, officia
        officiis quod repellendus sed tempore. Beatae consequuntur dicta dolor
        dolore eligendi enim eum ipsa itaque, laborum numquam repellat soluta
        tenetur! A, alias aperiam atque commodi delectus dolor dolore eius
        eveniet excepturi illum ipsam itaque molestiae natus nesciunt optio
        praesentium quae quam quidem quos recusandae sequi sunt tenetur totam!
        Distinctio dolorum illum ipsa magni qui sapiente temporibus, tenetur
        voluptatum. Blanditiis eum ex facilis laudantium necessitatibus
        veritatis? Adipisci alias cumque deleniti, eaque eos excepturi fugit
        nam, natus, numquam possimus quasi suscipit vel voluptate! Ab amet
        aperiam eligendi eos exercitationem, fugiat iusto labore quaerat sequi
        ut! Amet aspernatur doloremque exercitationem fugiat ipsam laboriosam
        odio praesentium tempora unde veritatis? Ab, animi blanditiis commodi
        corporis eos exercitationem in itaque iure nobis, non quia quod sequi
        soluta tempora, voluptate! Dolorem, eaque enim eos eum illum in natus
        officia perferendis placeat tempore temporibus ullam velit voluptatibus.
        Accusantium at blanditiis consequatur, debitis dignissimos distinctio
        doloremque dolores ducimus facilis, fugiat illo illum labore molestias
        nulla odit porro quae quidem, quis rem tenetur vel veniam voluptatum. Ad
        aliquam aspernatur atque consectetur dicta distinctio dolor dolores
        dolorum ducimus ea eius eos esse est expedita harum hic illo incidunt
        ipsa iusto, labore magnam, maiores nulla obcaecati officia omnis porro
        quaerat quam quibusdam, reiciendis repellendus suscipit tenetur ullam
        ut? Accusantium adipisci alias, deleniti distinctio dolor dolorem
        doloribus ipsam laboriosam magnam natus officia, provident repellendus
        repudiandae sed sit, ut vel vitae? Deleniti eligendi harum illum maiores
        necessitatibus nemo nihil omnis repudiandae sequi velit. Aliquid debitis
        laborum laudantium nemo odio pariatur praesentium reprehenderit rerum
        sed soluta. Accusantium animi blanditiis consequatur iusto laboriosam
        minus necessitatibus, nobis perferendis quae tempore unde vero voluptas!
        Dicta doloribus eveniet libero odit quaerat, quisquam repellat tempora
        voluptatum? Ab alias aliquam architecto at beatae doloribus dolorum eos
        excepturi fugiat harum illum necessitatibus neque perspiciatis provident
        ratione repellat reprehenderit, repudiandae, sed! Ab amet architecto at
        atque aut beatae consectetur consequatur cupiditate dolore dolorem ea
        earum eos eveniet excepturi fugiat fugit in laborum libero maiores
        mollitia nihil, nisi nobis nulla optio perspiciatis provident rerum
        sequi soluta tempore unde? Accusantium adipisci earum fugiat in
        inventore iure maiores nostrum officiis, perspiciatis provident quasi
        ratione reprehenderit sit soluta vitae voluptates voluptatum! Accusamus
        accusantium alias aliquam commodi, dignissimos dolorum et ex expedita
        facilis fuga fugiat illo ipsa iure iusto maiores maxime minima molestiae
        nobis nulla odit pariatur perspiciatis placeat quae quasi quia quis
        quisquam repellat sapiente sequi soluta suscipit ullam unde ut vitae
        voluptatem voluptates voluptatibus. Eius nesciunt quos vel. Aperiam est
        nihil nobis quaerat quas repellendus sunt. Cum delectus dolores dolorum
        ea facilis magnam necessitatibus numquam obcaecati, porro ratione rerum,
        vitae voluptatibus? Ad adipisci blanditiis distinctio eum facere hic
        illum iure libero molestias obcaecati pariatur provident quasi quod
        ratione tempore, voluptatem voluptatum! A architecto dicta dolore,
        dolores ea eos error et eveniet explicabo fuga illum incidunt ipsam,
        itaque magni nihil non obcaecati quae quos repellendus sint temporibus
        totam unde voluptatum? Ad alias dolor fuga itaque nemo nisi pariatur
        quia repudiandae. Accusantium adipisci alias, assumenda autem cum dolore
        dolorem dolores dolorum eius error esse eum expedita facilis itaque iure
        iusto labore maxime minima nihil nulla obcaecati officia pariatur
        placeat possimus praesentium quam, quas quasi quis rem saepe sapiente
        sed similique voluptates. Atque, aut, autem consequuntur deserunt
        doloremque eveniet, ex fugiat laborum magni maiores minima modi odio
        odit officia perferendis porro quas repellendus sit vel velit veritatis
        voluptates voluptatum? Consectetur cupiditate dolores esse temporibus
        vero. Aperiam assumenda doloremque et maxime ratione repellat, sequi.
        Alias, aliquid architecto asperiores aspernatur consectetur, dolorem
        enim eveniet ex hic itaque laborum minima quos sequi tempora vitae. A
        adipisci alias aspernatur blanditiis consequuntur culpa dolore eligendi
        fugiat laborum magnam nam nesciunt odio, reprehenderit totam veniam.
        Accusamus delectus ipsa magnam nisi praesentium quibusdam quod ratione
        sequi. A aliquid architecto aspernatur atque beatae, commodi consectetur
        consequatur deleniti distinctio eius eos fugit hic illo ipsa iure libero
        minus molestias natus necessitatibus nihil nostrum omnis quam qui
        recusandae repellendus soluta sunt unde? Accusantium animi cupiditate
        dignissimos distinctio in laudantium perspiciatis, quae reiciendis saepe
        sequi sit sunt. Accusantium alias aliquid, blanditiis commodi
        consectetur delectus dignissimos distinctio eos error esse itaque iure
        iusto laudantium minima nostrum odio quibusdam quo suscipit vel
        voluptate! Ad beatae cumque dignissimos ducimus ex, natus nihil nobis
        perferendis, quibusdam quis tenetur velit, veritatis voluptatibus. Ipsum
        magni maxime quae voluptatibus. A, amet asperiores autem consequuntur
        ducimus excepturi non rem saepe voluptas! Dolores eligendi facilis in
        maxime, nulla similique. Amet animi inventore neque nisi nulla officia
        placeat provident tempore, unde ut! Atque dolorem doloremque fugiat
        ipsam, iste itaque laudantium minus nisi omnis placeat provident quia
        quibusdam quis recusandae sequi similique soluta. Alias amet aperiam aut
        deleniti, doloremque doloribus, dolorum error eum facere illum in iusto
        molestias nemo neque nobis odit officiis pariatur perferendis porro
        praesentium provident rerum sequi tempora veritatis vero, voluptas
        voluptate. Accusantium aspernatur cupiditate magnam quaerat quam sequi
        tempore totam! Culpa debitis deleniti dolor doloremque eum fugit itaque
        iure magni, nam quis voluptate, voluptatum? A aperiam blanditiis, culpa
        cumque deleniti eligendi et ex excepturi fugiat laboriosam laborum
        maiores, molestias, natus numquam pariatur quae quidem quis quos
        similique soluta temporibus unde veniam veritatis. Accusantium animi
        commodi, cum deserunt doloremque doloribus facere harum nihil numquam
        omnis similique tempore voluptatum! Accusantium beatae corporis
        distinctio fugiat ratione, rerum unde veniam! Amet aperiam aspernatur
        commodi consectetur cumque deleniti, dolore doloremque ducimus earum
        enim et ex facilis in ipsam ipsum labore magnam maiores molestiae
        mollitia nam natus nemo non optio quaerat quas qui, quod rem repudiandae
        rerum sint tenetur ut veritatis voluptatibus. Accusantium aperiam
        assumenda dolore eius et eum excepturi illo, inventore molestiae nam
        nisi nulla sit sunt temporibus unde. Adipisci, debitis delectus
        dignissimos eaque est laudantium nostrum omnis quis repellat sint sit,
        tenetur voluptates? Consequuntur expedita facilis, fugit, impedit itaque
        nisi officiis pariatur provident quas quia quod vel veniam. Accusamus
        alias aut debitis, dolore eaque esse facere fugit necessitatibus nostrum
        nulla officia perferendis perspiciatis provident sunt vero. Mollitia
        quis sint tenetur. Inventore modi perspiciatis praesentium quasi, quis
        ratione repudiandae! Aut, quae reprehenderit? At consequatur error ex
        iusto odit ratione similique! Alias autem consequuntur dolores dolorum
        eum illum, in ipsa ipsum laborum, laudantium magni, nam placeat quae
        quidem sapiente vel veritatis? Corporis hic, illo iusto numquam odit
        perspiciatis quidem soluta temporibus veritatis vero. Accusamus
        asperiores commodi dolore ducimus explicabo, ipsum itaque molestiae nisi
        quidem sequi. A accusamus ad at consequatur cumque debitis deleniti
        dolor dolore ducimus eligendi, enim eos exercitationem hic illo illum
        iusto laboriosam laudantium libero minus modi nemo neque nesciunt
        officiis possimus quam quia quod reprehenderit sed sit velit veniam
        voluptas voluptatem voluptatibus? Doloribus in quae qui ratione
        reiciendis sequi. Consequatur dolorem earum facere hic impedit magnam
        magni non perspiciatis quis vitae, voluptate voluptatibus? At,
        consequuntur corporis culpa dolores eos eveniet fugiat fugit hic magnam,
        minima nostrum odit possimus quam reiciendis repellat sequi tempore ut
        vel velit veritatis. Accusantium commodi debitis exercitationem
        nesciunt, placeat temporibus vel voluptatum. Commodi enim ex molestias
        nemo numquam repellendus saepe! Aliquid ea eligendi exercitationem fugit
        illum obcaecati tempora unde? Deserunt dolorem facilis ipsam nam nulla
        perspiciatis ratione? At atque cum doloremque facere fuga nisi nobis
        quaerat, repudiandae voluptatem. Aliquam, consectetur consequatur
        deserunt dolore esse iure possimus ullam. Animi, aspernatur at aut cum
        cupiditate ducimus earum hic, illum in incidunt maiores molestiae natus
        odit officiis possimus quas ratione reprehenderit soluta voluptatibus,
        voluptatum. Doloremque earum, suscipit. Molestiae nam nemo neque nobis
        odit recusandae rerum sapiente velit? Commodi dignissimos, dolorum ea et
        hic illum magni, nam nesciunt obcaecati rerum sint totam ullam unde vero
        voluptatibus. Ex illum rerum similique sint. A accusantium ad animi
        commodi distinctio dolore doloremque error, exercitationem hic id
        inventore ipsam ipsum magnam nihil odio odit perspiciatis provident quas
        quibusdam reiciendis rem reprehenderit repudiandae sapiente sint
        suscipit veritatis voluptatum. A adipisci aliquid amet autem commodi cum
        delectus dignissimos dolorem ea eaque earum esse est ex expedita, harum
        illo inventore iure iusto labore laborum magnam minima modi mollitia
        natus nulla odio perferendis perspiciatis placeat porro quae qui rerum
        saepe sapiente sed ut vel veritatis. Aliquid debitis dolorum id incidunt
        iure neque non quam quo repellendus similique! Ab alias facere placeat
        quia voluptates. Delectus eveniet facere molestiae, molestias nam optio
        placeat vel. Amet assumenda cum dignissimos doloremque et exercitationem
        fuga itaque iusto labore magnam magni, maxime minus nisi nulla quam
        quasi quisquam quod quos repudiandae sed sequi temporibus veniam. Autem
        eaque perferendis rerum tempora voluptatibus. Aspernatur atque debitis,
        doloremque dolorum hic incidunt itaque iusto laboriosam laudantium minus
        molestias mollitia nemo nisi non odio praesentium qui quisquam tenetur
        totam unde velit veniam vitae. Corporis cupiditate ea id quas vitae?
        Aliquam amet animi beatae consectetur et eum exercitationem expedita
        explicabo in incidunt inventore itaque, laboriosam, mollitia nihil nisi
        nobis non obcaecati perspiciatis porro possimus quos sunt tenetur
        voluptas voluptatem voluptatum! Dolore eaque maiores maxime
        necessitatibus? Architecto at deleniti deserunt, dolores doloribus
        incidunt nemo quae reprehenderit rerum tempore veniam veritatis.
        Adipisci animi deserunt doloremque doloribus ducimus, error eum expedita
        magnam, modi molestias nam nihil omnis, perferendis placeat quae
        recusandae saepe soluta veniam vero voluptas voluptate voluptatem
        voluptates voluptatibus? Ad alias asperiores assumenda distinctio dolore
        doloribus ea eligendi est ex expedita fugit illo natus nesciunt porro
        recusandae repellat suscipit, vero voluptatum? Accusantium alias
        assumenda atque autem debitis delectus dignissimos dolore doloremque
        earum esse fuga fugiat ipsum maxime molestiae, nemo numquam obcaecati
        odit officiis optio pariatur quae quis, rem, tempore veniam voluptates.
      </p>
    </div>
  );
}
