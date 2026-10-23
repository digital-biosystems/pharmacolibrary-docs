<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;binimetinib&quot;}]"></div>

# binimetinib

- **generic name:** binimetinib
- **ATC codes:** `L01EE03`, `L01XE`
- **DrugBank:** [DB11967](https://go.drugbank.com/drugs/DB11967) · **PubChem:** [CID 10288191](https://pubchem.ncbi.nlm.nih.gov/compound/10288191)
- **molar mass:** 441.233 g/mol (C17H15BrF2N4O3) — DrugBank
- **groups:** approved, investigational

## About

Binimetinib is a MEK inhibitor anticancer drug used to treat melanoma and low-grade serous carcinoma. It is approved and authorised in the European Union, though one marketing application there was withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19903515](https://www.wikidata.org/wiki/Q19903515) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=binimetinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: MAP2K1 (inhibitor), MAP2K2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:43 | 0:19 | 0/0/0 | 0/0/0 | 0/0/0 | 20,193/1,455 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pétermann_2026.pdf` | Pétermann YJ et al., Population pharmacokinetics of encorafe…, Cancer chemotherapy and pha… (2026) | popPK | 9 | [10.1007/s00280-026-04876-y](https://doi.org/10.1007/s00280-026-04876-y) | [41843134](https://pubmed.ncbi.nlm.nih.gov/41843134) | The population-PK model and numeric exposure metrics and half-life are reported, but no numeric compartmental parameter estimates are provided. |
| `Sayadi_2026.pdf` | Sayadi H et al., From empirical caution to precision res…, European journal of clinica… (2026) | popPK | 8 | [10.1007/s00228-026-04040-8](https://doi.org/10.1007/s00228-026-04040-8) | [41896433](https://pubmed.ncbi.nlm.nih.gov/41896433) | The human overdose case uses a binimetinib population-PK model, but no numeric disposition parameters are provided. |

<sub>queue written 2026-10-06T21:43:40.400164+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kim_2019 | irrelevant | 0 | 0 | This is a review and provides no original numeric binimetinib disposition parameters in the evidence. |
| popPK | Pétermann_2026 | relevant | 9 | 4 | The population-PK model and numeric exposure metrics and half-life are reported, but no numeric compartmental parameter estimates are provided. |
| popPK | Sayadi_2026 | relevant | 8 | 2 | The human overdose case uses a binimetinib population-PK model, but no numeric disposition parameters are provided. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The quantitative PK parameters are for encorafenib; binimetinib is only mentioned as a combination treatment. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
