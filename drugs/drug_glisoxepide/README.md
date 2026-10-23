<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glisoxepide&quot;}]"></div>

# glisoxepide

- **generic name:** glisoxepide
- **ATC codes:** `A10BB11`
- **DrugBank:** [DB01289](https://go.drugbank.com/drugs/DB01289) · **PubChem:** [CID 32778](https://pubchem.ncbi.nlm.nih.gov/compound/32778)
- **molar mass:** 449.524 g/mol (C20H27N5O5S) — DrugBank
- **groups:** investigational

## About

Glisoxepide is a sulfonylurea, a class of blood glucose lowering drugs used to treat diabetes. It is considered investigational and does not appear to be an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5569932](https://www.wikidata.org/wiki/Q5569932) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=glisoxepide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: INS (regulator), KCNJ10 (blocker), KCNJ8 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 00:03 | 0:23 | 0/0/0 | 0/0/0 | 0/0/0 | 17,526/123 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chandra_2021.pdf` | Chandra A et al., Identification of potential inhibitors…, Journal of biomolecular str… (2021) | pd | 4 | [10.1080/07391102.2020.1775127](https://doi.org/10.1080/07391102.2020.1775127) | [32462970](https://www.ncbi.nlm.nih.gov/pubmed/32462970) | metadata signals extractable PD data (IC50) |
| `Fückel_1992.pdf` | Fückel D et al., Interaction of sulfonylureas with the t…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90628-h](https://doi.org/10.1016/0014-2999(92)90628-h) | [1618280](https://www.ncbi.nlm.nih.gov/pubmed/1618280) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T00:03:42.500800+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chandra_2021 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| PD | Chandra_2021 | not_relevant | 0 | 0 | The paper focuses on in silico drug repurposing for SARS-CoV-2 EndoU and does not contain any pharmacodynamic or exposure-response data for glisoxepide. |
| popPK | Fückel_1992 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| PD | Fückel_1992 | not_relevant | 0 | 0 | The paper focuses on the interaction of sulfonylureas with bile acid transport in hepatocytes and does not report pharmacodynamic or exposure-response data for glisoxepide. |
| popPK | Haupt_1971 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of insulin secretion and blood glucose levels, not a pharmacokinetic study reporting disposition parameters like clearance or volume for glisoxepide. |
| popPK | Haupt_1971_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of dose-response and insulin secretion, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Irsigler_1979 | irrelevant | 1 | 0 | The study is a clinical efficacy trial comparing sulfonylureas and explicitly states there was insufficient evidence for pharmacokinetic differential diagnosis, reporting no quantitative PK parameters. |
| PD | Irsigler_1979 | not_relevant | 1 | 0 | The study is a qualitative clinical comparison of sulfonylureas in small patient groups without reporting numeric concentration-effect parameters or a formal PK/PD model. |
| popPK | Kolb_1974 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| popPK | Schäfer_1979 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for diabetes treatment and does not report any pharmacokinetic parameters for glisoxepide. |
| PD | Schäfer_1979 | not_relevant | 1 | 0 | The text describes a large clinical trial reporting mean daily doses and qualitative metabolic improvements, but it does not provide any concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Speck_1974 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
