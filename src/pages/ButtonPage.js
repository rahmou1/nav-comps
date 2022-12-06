import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          <GoBell />
          Click yes
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          <GoCloudDownload />
          Buy Now
        </Button>
      </div>
      <div>
        <Button danger>
          <GoDatabase className="mr-5" />
          See Deals
        </Button>
      </div>
      <div>
        <Button warning>Hide Ads</Button>
      </div>
      <div>
        <Button secondary>Something</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
