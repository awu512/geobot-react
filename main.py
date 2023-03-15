import hydra
from omegaconf import DictConfig


@hydra.main(version_base=None, config_path="configs", config_name="main")
def main(cfg: DictConfig):
    a = 1


if __name__ == "__main__":
    main()
