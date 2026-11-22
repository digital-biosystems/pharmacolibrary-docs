# Data & downloads

The data are published on Zenodo, release 26.11.

| Record | Contents | Size | Licence | DOI |
|---|---|---|---|---|
| [Research dataset](https://zenodo.org/records/24119263) | Per-drug records of population pharmacokinetic, pharmacodynamic and pharmacogenomic models extracted from published papers, with the provenance of every value, the automatic reviewer's verdicts and the simulation models. Start here. | 0.58 GB, 2 tar.gz shards (1.4 GB unpacked) | CC BY 4.0 | [10.5281/zenodo.24119263](https://doi.org/10.5281/zenodo.24119263) |
| [Redistributable source corpus](https://zenodo.org/records/24125755) | Full texts of the relevant papers whose licences allow redistribution, commercial reuse included (10,977 papers, 2,865 drug folders). Unpacks beside the research dataset. | 41.4 GB, 11 tar shards | CC BY 4.0 | [10.5281/zenodo.24125755](https://doi.org/10.5281/zenodo.24125755) |
| [Non-commercial source corpus](https://zenodo.org/records/24133749) | Full texts of the relevant papers whose licences allow redistribution for non-commercial purposes only (6,335 papers, 2,511 drug folders). Unpacks beside the research dataset. | 20.6 GB, 6 tar shards | CC BY-NC 4.0 | [10.5281/zenodo.24133749](https://doi.org/10.5281/zenodo.24133749) |

## What the research dataset counts

The numbers the Zenodo record states, counted by the same code as the website's (see [About](#/pipeline) for the definitions and the live numbers). The dataset holds the drugs only; the toxins and the Modelica library are not in it.

| Research dataset 26.11 (snapshot 2026-11-22, drugs only) | Count |
|---|---:|
| Drugs with a counted record | 1,799 |
| popPK records | 3,515 |
| PD records | 6,273 |
| PGx records | 568 |
| Papers behind them (distinct DOI) | 5,909 |
| Parameter values of these records | 26,744 |
| popPK records rejected | 3,136 |
| PD records rejected | 1,294 |
| PGx records rejected | 15 |
| Generated models (Modelica) | 3,184 |
| Drugs with a generated model | 867 |

Cite the research dataset. The two source corpora are its supplements: each file keeps the licence of its paper, listed in `ATTRIBUTIONS.csv` and `MANIFEST.csv`. The non-commercial corpus is for non-commercial use only.

> These are research data extracted by software from published papers. They are not clinically validated and must not be used for dosing decisions.
