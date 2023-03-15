import hydra
from jaxtyping import install_import_hook
from omegaconf import DictConfig

with install_import_hook("foo", "beartype.beartype"):
    pass


@hydra.main(version_base=None, config_path="configs", config_name="main")
def main(cfg: DictConfig):
    pass


if __name__ == "__main__":
    main()
