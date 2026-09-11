# arginine glutamate

- **generic name:** arginine glutamate
- **ATC codes:** `A05BA01`
- **DrugBank:** [DB13207](https://go.drugbank.com/drugs/DB13207)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 04:24 | 2:52 | 0/1/0 | 0/0/0 | 0/0/0 | 18,619/999 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Wang_2018](drugs/drug_arginine_glutamate/ArginineGlutamate_Wang2018_reference.md) | Wang J et al., Population pharmacokinetics of arginine…, Xenobiotica; the fate of fo… (2018) | [10.1080/00498254.2017.1370745](https://doi.org/10.1080/00498254.2017.1370745) |

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2018.pdf` | Wang J et al., Population pharmacokinetics of arginine…, Xenobiotica; the fate of fo… (2018) | popPK | 10 | [10.1080/00498254.2017.1370745](https://doi.org/10.1080/00498254.2017.1370745) | [28925806](https://pubmed.ncbi.nlm.nih.gov/28925806) | The paper reports a population PK study for arginine glutamate with explicit numeric values for CL, Q, V1, V2, Vmax, Km, and V provided in the text. |
| `Wang_2002.pdf` | Wang H et al., Luffangulin, a novel ribosome inactivat…, Life sciences (2002) | pd | 4 | [10.1016/s0024-3205(01)01466-7](https://doi.org/10.1016/s0024-3205(01)01466-7) | [11853228](https://www.ncbi.nlm.nih.gov/pubmed/11853228) | metadata signals extractable PD data (IC50) |
| `Wang_2003.pdf` | Wang HX et al., Isolation of cucurmoschin, a novel anti…, Peptides (2003) | pd | 4 | [10.1016/s0196-9781(03)00191-8](https://doi.org/10.1016/s0196-9781(03)00191-8) | [14499274](https://www.ncbi.nlm.nih.gov/pubmed/14499274) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-11T04:23:42.065752+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cruz_2025 | irrelevant | 0 | 0 | The paper is a review on viscosity mitigation for high-concentration protein therapeutics (antibodies) and does not study arginine_glutamate or report any pharmacokinetic parameters for it. |
| PD | Cruz_2025 | not_relevant | 0 | 0 | The paper is a review on formulation development and viscosity mitigation for high-concentration biotherapeutics and does not report any pharmacodynamic or exposure-response data for arginine glutamate. |
| popPK | Kernohan_2005 | irrelevant | 2 | 1 | The study reports only Cmax and Tmax for L-arginine (a component of the combination drug) and explicitly states that AUC and half-life were not calculated due to endogenous interference, failing to provide the quantitative disposition parameters (CL, V, ka) required for population PK modeling. |
| PD | Kernohan_2005 | not_relevant | 2 | 1 | The study reports PK parameters and time-based hemodynamic changes (mean differences vs placebo) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for arginine glutamate. |
| PD | Parkash_2002 | not_relevant | 0 | 0 | The paper reports the isolation and characterization of a plant-derived peptide (luffacylin) and its biological activity (IC50), but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for the drug arginine glutamate. |
| PD | Sato_2000 | not_relevant | 0 | 0 | The paper studies electrophysiological responses to amino acids (including arginine and glutamate) and chloride channel blockers, but does not report a pharmacodynamic exposure-response relationship or numeric PD parameters for arginine glutamate. |
| PD | Wang_2002 | not_relevant | 0 | 0 | The paper describes the isolation and characterization of a novel peptide (Luffangulin) and does not report any pharmacodynamic or exposure-response analysis for arginine glutamate. |
| PD | Wang_2003 | not_relevant | 0 | 0 | The paper focuses on the isolation and characterization of a novel antifungal peptide (cucurmoschin) from pumpkin seeds, not on the pharmacodynamics of arginine glutamate. |
| PD | Wang_2018 | not_relevant | 0 | 0 | The paper reports only population pharmacokinetic (PK) parameters (CL, V, Vmax, Km) and covariates, with no pharmacodynamic (PD) or exposure-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_arginine_glutamate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
