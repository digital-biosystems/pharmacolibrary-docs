<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;idarucizumab&quot;}]"></div>

# idarucizumab

- **generic name:** idarucizumab
- **ATC codes:** `V03AB37`
- **DrugBank:** [DB09264](https://go.drugbank.com/drugs/DB09264) · **PubChem:** none
- **groups:** approved

## About

Idarucizumab is an antidote used to treat haemorrhage in patients taking dabigatran. It is approved and authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17630273](https://www.wikidata.org/wiki/Q17630273) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span> | [Eaton_2025_2_R_time](drugs/drug_idarucizumab/pd_Eaton_2025_2_R_time.md) | thromboelastometric reaction time (R-time) ← idarucizumab · direct linear effect | — | Eaton MP et al., Dabigatran pharmacokinetic-pharmacodyna…, Perfusion (2025) | [10.1177/02676591231226291](https://doi.org/10.1177/02676591231226291) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=idarucizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 20:06 | 0:25 | 0/0/0 | 1/0/0 | 0/0/0 | 30,670/1,855 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Athavale_2020 | relevant | 4 | 3 | A PK analysis of idarucizumab (single-compartment, half-life, Vd mentioned) is included, but the focus is dabigatran rebound modeling and no full numeric idarucizumab parameter set (CL, V, t½ values) is presented in the evidence. |
| popPK | Di_2015 | irrelevant | 1 | 0 | This is a narrative review on gastrointestinal bleeding management that only mentions idarucizumab qualitatively as an antidote, with no PK parameters for idarucizumab. |
| popPK | Eaton_2025 | irrelevant | 2 | 2 | Idarucizumab is the reversal agent; no idarucizumab concentrations were assayed and its PK was assumed from human literature values (CL 0.0394 L/min, V 6.47 L), while the quantitative PK model (CL, Q, V1, V2) is for dabigatran in sheep. |
| popPK | Eaton_2025_2 | irrelevant | 3 | 5 | The PK model and parameters (CL, Q, V1, V2) are for dabigatran; idarucizumab is only a co-administered reversal agent with a single effect-model rate constant (KIDA 0.0218) reported, not a full disposition model for idarucizumab. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bidarucizumab%5D&body=Drug%3A%20idarucizumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_idarucizumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
