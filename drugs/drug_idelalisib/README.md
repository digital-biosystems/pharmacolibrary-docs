<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;idelalisib&quot;}]"></div>

# idelalisib

- **generic name:** idelalisib
- **ATC codes:** `L01EM01`, `L01XX47`
- **DrugBank:** [DB09054](https://go.drugbank.com/drugs/DB09054) · **PubChem:** [CID 11625818](https://pubchem.ncbi.nlm.nih.gov/compound/11625818)
- **molar mass:** 415.432 g/mol (C22H18FN7O) — DrugBank
- **groups:** approved, investigational

## About

Idelalisib is an anticancer medicine used to treat certain B-cell blood cancers, including chronic lymphocytic leukemia and several types of lymphoma. It is authorised in the European Union for non-Hodgkin lymphoma and chronic lymphocytic leukemia, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5908266](https://www.wikidata.org/wiki/Q5908266) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.80).">human + animal</span> | [McLeod_2019_CD63](drugs/drug_idelalisib/pd_McLeod_2019_CD63.md) | CD63 activation ← Idelalisib · inhibition effect | — | McLeod RL et al., Characterizing Pharmacokinetic-Pharmaco…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.252551](https://doi.org/10.1124/jpet.118.252551) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=idelalisib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `AOX1` substrate, `CYP2B6` inducer, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inhibitor/substrate, `CYP3A7` inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP3A43 (inhibitor), CYP3A43 (substrate), PIK3CD (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:32 | 0:51 | 0/0/0 | 1/0/0 | 0/0/0 | 51,377/3,892 | openai / gpt-6-luna | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jin_2016.pdf` | Jin F et al., Population pharmacokinetic modeling of…, Cancer chemotherapy and pha… (2016) | popPK | 10 | [10.1007/s00280-015-2891-8](https://doi.org/10.1007/s00280-015-2891-8) | [26645408](https://pubmed.ncbi.nlm.nih.gov/26645408) | A human population-PK model is reported, but numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-07 01:31 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jin_2016 | relevant | 10 | 1 | A human population-PK model is reported, but numeric parameter values are not present in the provided evidence. |
| popPK | McLeod_2019 | irrelevant | 1 | 0 | Idelalisib is mentioned as a clinical reference and for an in-vitro IC50, but no numeric disposition parameters are provided. |
| popPK | Montillo_2019 | irrelevant | 0 | 0 | This human trial reports quality-of-life outcomes, not quantitative pharmacokinetic disposition parameters. |
| popPK | Ramanathan_2016 | irrelevant | 2 | 1 | This review mentions a population-PK model but provides no numeric disposition parameters. |
| popPK | Zimmerman_2023 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study and reports no idelalisib disposition parameters. |
| popPK | Zimmerman_2023_2 | irrelevant | 0 | 0 | This is an in vitro/ex vivo mechanistic study and reports no quantitative idelalisib disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bidelalisib%5D&body=Drug%3A%20idelalisib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_idelalisib/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
