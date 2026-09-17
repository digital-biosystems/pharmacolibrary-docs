<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;buformin&quot;}]"></div>

# buformin

- **generic name:** buformin
- **ATC codes:** `A10BA03`
- **DrugBank:** [DB04830](https://go.drugbank.com/drugs/DB04830)
- **groups:** approved, withdrawn

## About

**Description.** Buformin is an anti-diabetic drug of the biguanide class, chemically related to metformin and phenformin. It was withdrawn from the market in most countries due to a high risk of causing lactic acidosis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 16:26 | 4:51 | 0/0/0 | 1/0/0 | 0/0/0 | 47,858/1,942 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2020](drugs/drug_buformin/pd_Ding_2020_ATP.md) | Ding Y et al., Buformin suppresses osteosarcoma via ta…, Open life sciences (2020) | [10.1515/biol-2020-0041](https://doi.org/10.1515/biol-2020-0041) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2020](drugs/drug_buformin/pd_Ding_2020_CCK_8.md) | Ding Y et al., Buformin suppresses osteosarcoma via ta…, Open life sciences (2020) | [10.1515/biol-2020-0041](https://doi.org/10.1515/biol-2020-0041) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2020](drugs/drug_buformin/pd_Ding_2020_G1_phase.md) | Ding Y et al., Buformin suppresses osteosarcoma via ta…, Open life sciences (2020) | [10.1515/biol-2020-0041](https://doi.org/10.1515/biol-2020-0041) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2020](drugs/drug_buformin/pd_Ding_2020_LDH.md) | Ding Y et al., Buformin suppresses osteosarcoma via ta…, Open life sciences (2020) | [10.1515/biol-2020-0041](https://doi.org/10.1515/biol-2020-0041) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2020](drugs/drug_buformin/pd_Ding_2020_ROS.md) | Ding Y et al., Buformin suppresses osteosarcoma via ta…, Open life sciences (2020) | [10.1515/biol-2020-0041](https://doi.org/10.1515/biol-2020-0041) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2020](drugs/drug_buformin/pd_Ding_2020_colony_count.md) | Ding Y et al., Buformin suppresses osteosarcoma via ta…, Open life sciences (2020) | [10.1515/biol-2020-0041](https://doi.org/10.1515/biol-2020-0041) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2020](drugs/drug_buformin/pd_Ding_2020_invaded_cells.md) | Ding Y et al., Buformin suppresses osteosarcoma via ta…, Open life sciences (2020) | [10.1515/biol-2020-0041](https://doi.org/10.1515/biol-2020-0041) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2020](drugs/drug_buformin/pd_Ding_2020_lactate.md) | Ding Y et al., Buformin suppresses osteosarcoma via ta…, Open life sciences (2020) | [10.1515/biol-2020-0041](https://doi.org/10.1515/biol-2020-0041) |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Takanohashi_2007.pdf` | Takanohashi T et al., Prediction of the metabolic interaction…, Drug metabolism and pharmac… (2007) | pgx | 7 | [10.2133/dmpk.22.409](https://doi.org/10.2133/dmpk.22.409) | [18159128](https://www.ncbi.nlm.nih.gov/pubmed/18159128) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-09-15T16:26:04.467809+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ding_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on osteosarcoma cell lines and does not report any pharmacokinetic parameters for buformin. |
| popPK | Jeong_2021 | irrelevant | 0 | 0 | The study focuses on metformin pharmacokinetics, not buformin. |
| PD | Jeong_2021 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) and allometric scaling of metformin across nine species, with no analysis of pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Kilgore_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-proliferative effects in cancer cells and does not report pharmacokinetic parameters. |
| popPK | Lu_2020 | irrelevant | 0 | 0 | The paper describes a buformin-mimicking polymer for gene delivery and does not report any pharmacokinetic parameters for buformin. |
| PD | Lu_2020 | not_relevant | 3 | 2 | The paper reports a qualitative comparison of IC50 values for a polymer conjugate (CBA-Bu) versus a control, but does not provide a formal exposure-response model, numeric PD parameters for buformin itself, or a derivable concentration-effect curve. |
| popPK | Mori_1997 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of buformin on alanine metabolism in isolated hepatocytes, not its pharmacokinetic disposition parameters. |
| PD | Mori_1997 | not_relevant | 2 | 1 | The paper reports a qualitative inhibitory effect of a single concentration (0.1 mM) of buformin on lipid synthesis in isolated hepatocytes, but does not provide a dose-response curve or numeric PD parameters (e.g., IC50, Emax). |
| popPK | Sam_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for metformin, while buformin is used only as an internal standard for the analytical method. |
| PD | Sam_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of metformin and the effect of SLC22A1 polymorphisms on PK and clinical outcomes (weight, HbA1c), but it does not report a pharmacodynamic model or numeric exposure-response parameters (e.g., Emax, EC50) for buformin or metformin. |
| popPK | Scheen_1995 | irrelevant | 0 | 0 | The paper is a review of drug interactions and does not report original quantitative pharmacokinetic parameters for buformin. |
| PD | Scheen_1995 | not_relevant | 0 | 0 | The text is a general review of drug interactions in diabetes and mentions buformin only as a withdrawn biguanide, providing no pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving nateglinide and does not report pharmacogenomic effects on buformin. |
| popPK | Tikholov_1980 | irrelevant | 0 | 0 | The paper is a clinical review of metformin treatment that mentions buformin only as a comparator regarding adverse effects, without reporting any quantitative pharmacokinetic parameters. |
| PD | Tikholov_1980 | not_relevant | 1 | 0 | The text is a qualitative review of biquanides (metformin, buformin, tenformin) and clinical outcomes, containing no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Wang_2003 | irrelevant | 0 | 0 | The study focuses on the mechanism of lactic acidosis and transporter involvement, reporting EC50 values for toxicity rather than pharmacokinetic disposition parameters (CL, V, ka) for buformin. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper describes an immunochromatographic sensor for therapeutic drug monitoring and does not report any pharmacokinetic parameters for buformin. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper describes an immunochromatographic sensor for drug monitoring and reports analytical IC50 values for antibody binding, not pharmacodynamic exposure-response or dose-response relationships for the drug's biological effect. |
| popPK | Yasuda_2002 | irrelevant | 0 | 0 | The study focuses on the mechanism of GLP-1 secretion enhancement by biguanides and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for buformin. |
| popPK | Zimmerman_1983 | irrelevant | 2 | 0 | The paper is a methodological study on fitting algorithms using buformin as a test case, and no specific numeric PK parameter values are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_buformin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
