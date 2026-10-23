<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;fidanacogene elaparvovec&quot;}]"></div>

# fidanacogene elaparvovec

- **generic name:** fidanacogene elaparvovec
- **ATC codes:** `B02BD17`
- **DrugBank:** [DB16783](https://go.drugbank.com/drugs/DB16783) · **PubChem:** none
- **groups:** approved, investigational

## About

Fidanacogene elaparvovec is a gene therapy used to treat hemophilia B. It is an approved medicine, although the product that had been authorised in the European Union was later withdrawn there.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Wojciechowski_2025_reference](drugs/drug_fidanacogene_elaparvovec/FidanacogeneElaparvovec_Wojciechowski2025_reference.md) | — | parent + metabolite (no model) | 0 | Wojciechowski J et al., Population Modeling of Factor IX Activi…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01535-y](https://doi.org/10.1007/s40262-025-01535-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Wojciechowski_2025_FIX](drugs/drug_fidanacogene_elaparvovec/pd_Wojciechowski_2025_FIX.md) | FIX activity ← fidanacogene elaparvovec · direct linear effect | — | Wojciechowski J et al., Population Modeling of Factor IX Activi…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01535-y](https://doi.org/10.1007/s40262-025-01535-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fidanacogene_elaparvovec).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Coagulation factor IX (F9) (gene replacement).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 19:24 | 2:18 | 0/1/0 | 1/0/0 | 0/0/0 | 57,637/4,282 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 1 |

## Coverage

- **PubMed hits:** 6 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cao_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of KJ103 (an IgG-degrading enzyme), not fidanacogene_elaparvovec. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfidanacogene_elaparvovec%5D&body=Drug%3A%20fidanacogene_elaparvovec%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fidanacogene_elaparvovec/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-05 19:23 UTC</sub>
