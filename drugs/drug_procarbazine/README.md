<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;procarbazine&quot;}]"></div>

# procarbazine

- **generic name:** procarbazine
- **ATC codes:** `L01XB01`
- **DrugBank:** [DB01168](https://go.drugbank.com/drugs/DB01168) · **PubChem:** [CID 4915](https://pubchem.ncbi.nlm.nih.gov/compound/4915)
- **molar mass:** 221.2988 g/mol (C12H19N3O) — DrugBank
- **groups:** approved, investigational

## About

Procarbazine is an anticancer drug used to treat cancers such as Hodgkin's lymphoma, non-Hodgkin lymphoma, brain cancer, melanoma, and multiple myeloma. It is an approved medicine and is included on the WHO list of essential medicines, so it remains in clinical use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418656](https://www.wikidata.org/wiki/Q418656) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=procarbazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `MAOA` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `MAOA` inhibitor, `XDH` substrate | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor, `XDH` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:34 | 0:56 | 0/0/0 | 0/0/0 | 0/0/0 | 8,844/705 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wilde_2007.pdf` | Wilde S et al., Population pharmacokinetics of the BEAC…, Clinical pharmacokinetics (2007) | popPK | 8 | [10.2165/00003088-200746040-00005](https://doi.org/10.2165/00003088-200746040-00005) | [17375983](https://pubmed.ncbi.nlm.nih.gov/17375983) | The study performs population pharmacokinetic modeling for procarbazine as part of the BEACOPP regimen in humans, but the specific quantitative parameter values are not provided in the extracted evidence text. |
| `Ezzat_2012.pdf` | Ezzat HM et al., Incidence, predictors and significance…, Leukemia & lymphoma (2012) | pgx | 7 | [10.3109/10428194.2012.697560](https://doi.org/10.3109/10428194.2012.697560) | [22642935](https://www.ncbi.nlm.nih.gov/pubmed/22642935) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Villikka_1999.pdf` | Villikka K et al., Cytochrome P450-inducing antiepileptics…, Clinical pharmacology and t… (1999) | pgx | 7 | [10.1053/cp.1999.v66.103403001](https://doi.org/10.1053/cp.1999.v66.103403001) | [10613614](https://www.ncbi.nlm.nih.gov/pubmed/10613614) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06 21:34 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delitheos_1995 | irrelevant | 0 | 0 | The study is an in-vitro investigation of antineoplastic agents on yeast (Saccharomyces cerevisiae) and reports no pharmacokinetic parameters for procarbazine. |
| PGx | Ewesuedo_2000 | not_relevant | 0 | 0 | The paper studies O6-benzylguanine (BG) in rats and investigates a drug-drug interaction (ketoconazole), not the pharmacogenetics of procarbazine. |
| PGx | Ezzat_2012 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions between vinblastine and protease inhibitors, and does not report pharmacogenomic effects on procarbazine. |
| PGx | Nakamura_2009 | not_relevant | 2 | 0 | The text discusses genetic markers (1p/19q LOH) for predicting general chemotherapy sensitivity and survival in gliomas, but does not report specific changes in pharmacokinetic or pharmacodynamic parameters of procarbazine. |
| PGx | Pretsch_1993 | not_relevant | 0 | 0 | Procarbazine was used only as a mutagen to create a mouse model of LDH deficiency; the paper does not study procarbazine's own pharmacokinetics or pharmacodynamics. |
| PGx | Shiba_1982 | not_relevant | 0 | 0 | The paper describes analytical methods for procarbazine and metabolites and presents pharmacokinetic data in rats and a single patient, but it does not report any association between genetic variants/genotypes and these PK or PD parameters. |
| PGx | Villikka_1999 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of vincristine, not procarbazine, and focuses on drug-drug interactions rather than pharmacogenomics. |
| PGx | Wahlang_2015 | not_relevant | 2 | 0 | The text is an introduction to a review chapter discussing the role of CYPs and genetic polymorphisms in drug metabolism but does not report specific data or fitted effect sizes for procarbazine PK/PD parameters. |
| popPK | Wilde_2007 | relevant | 8 | 0 | The study performs population pharmacokinetic modeling for procarbazine as part of the BEACOPP regimen in humans, but the specific quantitative parameter values are not provided in the extracted evidence text. |
| PGx | Wilde_2007 | not_relevant | 0 | 0 | The study reports population pharmacokinetics and covariates like CYP3A4 phenotyping effects, but does not report specific gene variant/genotype data or fitted pharmacogenomic parameters for procarbazine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprocarbazine%5D&body=Drug%3A%20procarbazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_procarbazine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
