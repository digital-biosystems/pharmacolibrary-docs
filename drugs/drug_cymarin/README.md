<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01A&quot;,&quot;href&quot;:&quot;atc/C01A.md&quot;},{&quot;label&quot;:&quot;cymarin&quot;}]"></div>

# cymarin

- **generic name:** cymarin
- **ATC codes:** `C01AC03`
- **DrugBank:** [DB13240](https://go.drugbank.com/drugs/DB13240)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 12:36 | 4:32 | 0/0/0 | 1/0/0 | 0/0/0 | 148,060/2,130 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Carucci_2023](drugs/drug_cymarin/pd_Carucci_2023_asexual_parasite_killing.md) | Carucci M et al., Safe drugs with high potential to block…, Nature communications (2023) | [10.1038/s41467-023-37359-2](https://doi.org/10.1038/s41467-023-37359-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Carucci_2023](drugs/drug_cymarin/pd_Carucci_2023_gametocyte_killing.md) | Carucci M et al., Safe drugs with high potential to block…, Nature communications (2023) | [10.1038/s41467-023-37359-2](https://doi.org/10.1038/s41467-023-37359-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Carucci_2023](drugs/drug_cymarin/pd_Carucci_2023_gametocyte_stiffening.md) | Carucci M et al., Safe drugs with high potential to block…, Nature communications (2023) | [10.1038/s41467-023-37359-2](https://doi.org/10.1038/s41467-023-37359-2) |

## Coverage

- **PubMed hits:** 12 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Strobach_1986.pdf` | Strobach H et al., Absorption, metabolism and elimination…, Naunyn-Schmiedeberg's archi… (1986) | popPK | 8 | [10.1007/BF00569392](https://doi.org/10.1007/BF00569392) | [3821940](https://pubmed.ncbi.nlm.nih.gov/3821940) | The study reports quantitative PK parameters for cymarin, including bioavailability (47%) and elimination half-life (13 h i.v., 23 h p.o.), but lacks explicit clearance or volume of distribution values. |
| `Gozalpour_2014.pdf` | Gozalpour E et al., Convallatoxin: a new P-glycoprotein sub…, European journal of pharmac… (2014) | pgx | 7 | [10.1016/j.ejphar.2014.09.031](https://doi.org/10.1016/j.ejphar.2014.09.031) | [25264938](https://www.ncbi.nlm.nih.gov/pubmed/25264938) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-09-19T12:33:46.214071+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carucci_2023 | irrelevant | 0 | 0 | The paper is a malaria transmission-blocking screening study where cymarin is only listed as a compound in a library (Table S1) with in-vitro IC50 values, and no pharmacokinetic parameters for cymarin are reported. |
| PGx | Gozalpour_2013 | not_relevant | 0 | 0 | The paper investigates the binding affinity of cymarin to P-glycoprotein mutants in vitro, which is a mechanistic study of transporter interaction, not a report of a pharmacogenomic effect on a pharmacokinetic or pharmacodynamic parameter in a clinical or physiological context. |
| popPK | Gozalpour_2014 | irrelevant | 0 | 0 | The study focuses on convallatoxin as a P-gp substrate, not cymarin, and does not report pharmacokinetic parameters for cymarin. |
| PGx | Gozalpour_2014 | not_relevant | 0 | 0 | The paper studies convallatoxin, not cymarin, and focuses on transporter interactions rather than pharmacogenomic effects on cymarin PK/PD. |
| popPK | Hori_1988 | irrelevant | 0 | 0 | The paper is a mechanistic study on ion efflux in guinea-pig smooth muscle where cymarin is used as a pharmacological inhibitor, not a pharmacokinetic study. |
| PD | Hori_1988 | not_relevant | 1 | 1 | The paper reports a single qualitative inhibition of palytoxin-induced K+ efflux by cymarin at a fixed concentration (3 x 10^-8 M) without providing a dose-response curve or numeric PD parameters (e.g., IC50, Emax) for cymarin. |
| popPK | Ozaki_1985 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of palytoxin and cardiac glycosides on ATPase, not a pharmacokinetic study of cymarin. |
| popPK | Shang_2020 | irrelevant | 0 | 0 | The study investigates the acaricidal mechanism and active compounds of a plant extract, with cymarin serving only as a mechanistic target ligand, and contains no pharmacokinetic data. |
| PGx | Tzeng_2026 | not_relevant | 0 | 0 | The paper investigates cymarin as a therapeutic agent targeting ANT2 in breast cancer, but does not report any pharmacogenomic effects (gene variants altering PK/PD) of cymarin. |
| popPK | van_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PPARα transactivation and gene expression, containing no pharmacokinetic parameters for cymarin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_cymarin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
