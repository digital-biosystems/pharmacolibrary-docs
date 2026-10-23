<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;etidronic acid&quot;}]"></div>

# etidronic acid

- **generic name:** etidronic acid
- **ATC codes:** `M05BA01`, `M05BB01`
- **DrugBank:** [DB01077](https://go.drugbank.com/drugs/DB01077) · **PubChem:** [CID 3305](https://pubchem.ncbi.nlm.nih.gov/compound/3305)
- **molar mass:** 206.0282 g/mol (C2H8O7P2) — DrugBank
- **groups:** approved, investigational

## About

Etidronic acid is a bisphosphonate used to treat bone conditions such as hypercalcemia and to help conserve bone density. It is an approved medicine, available alone and in combination products for the treatment of bone diseases.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2758338](https://www.wikidata.org/wiki/Q2758338) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Eyres_1992_spontaneous_fractures](drugs/drug_etidronic_acid/pd_Eyres_1992_spontaneous_fractures.md) | spontaneous fractures ← etidronic acid · model not identified | — | Eyres KS et al., Spontaneous fractures in a patient trea…, Drug safety (1992) | [10.2165/00002018-199207020-00008](https://doi.org/10.2165/00002018-199207020-00008) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hosking_1990_hydroxyproline](drugs/drug_etidronic_acid/pd_Hosking_1990_hydroxyproline.md) | bone resorption ← etidronic_acid · inhibition effect | — | Hosking DJ, Advances in the management of Paget's d…, Drugs (1990) | [10.2165/00003495-199040060-00005](https://doi.org/10.2165/00003495-199040060-00005) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Lafuma_1997_Number_of_complications](drugs/drug_etidronic_acid/pd_Lafuma_1997_Number_of_complications.md) | Number of complications ← etidronic acid · inhibition effect | — | Lafuma A et al., An economic evaluation of tiludronic ac…, PharmacoEconomics (1997) | [10.2165/00019053-199712040-00004](https://doi.org/10.2165/00019053-199712040-00004) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Mallette_1989_BMD](drugs/drug_etidronic_acid/pd_Mallette_1989_BMD.md) | bone mineral density of the lumbar spine ← etidronate disodium · stimulation effect | — | Mallette LE et al., Cyclic therapy of osteoporosis with neu…, Journal of bone and mineral… (1989) | [10.1002/jbmr.5650040203](https://doi.org/10.1002/jbmr.5650040203) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=etidronic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ATP6V1A (inhibitor), Hydroxylapatite (target), PTPRS (inhibitor), SLC25A4 (inhibitor), SLC25A5 (inhibitor), SLC25A6 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:39 | 1:56 | 0/0/0 | 4/0/0 | 0/0/0 | 43,756/1,115 | einfracz / qwen3.8-27b | 3 | 0/0 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Denk_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the radioactive tracer 41Calcium in response to risedronate treatment, not on the pharmacokinetic parameters of etidronic acid. |
| popPK | Vélez_2023 | irrelevant | 0 | 0 | The paper investigates risedronate coordination complexes, using etidronic acid only as an auxiliary ligand, and does not report any pharmacokinetic parameters for etidronic acid. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
