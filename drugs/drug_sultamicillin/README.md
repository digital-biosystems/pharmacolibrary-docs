<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;sultamicillin&quot;}]"></div>

# sultamicillin

- **generic name:** sultamicillin
- **ATC codes:** `J01CR04`
- **DrugBank:** [DB12127](https://go.drugbank.com/drugs/DB12127) · **PubChem:** [CID 444022](https://pubchem.ncbi.nlm.nih.gov/compound/444022)
- **molar mass:** 594.65 g/mol (C25H30N4O9S2) — DrugBank
- **groups:** approved, withdrawn

## About

Sultamicillin is an oral antibiotic combining a penicillin with a beta-lactamase inhibitor, used to treat bacterial infections. It was approved at one time but has been withdrawn from the market and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q617686](https://www.wikidata.org/wiki/Q617686) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Schütz_1990_Cure_rate](drugs/drug_sultamicillin/pd_Sch_tz_1990_Cure_rate.md) | Cure rate · categorical (graded) response model | — | Schütz W, [Treatment of uncomplicated urinary tra…, Fortschritte der Medizin (1990) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Pitts_1989_in_vitro_susceptibility](drugs/drug_sultamicillin/pd_Pitts_1989_in_vitro_susceptibility.md) | in vitro susceptibility ← sultamicillin · inhibition effect | — | Pitts NE et al., Worldwide clinical experience with sult…, APMIS. Supplementum (1989) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Poornachandran_2026_n_a](drugs/drug_sultamicillin/pd_Poornachandran_2026_n_a.md) | none ← none · model not identified | — | Poornachandran M et al., Population Pharmacokinetic Models of Am…, Therapeutic drug monitoring (2026) | [10.1097/ftd.0000000000001380](https://doi.org/10.1097/ftd.0000000000001380) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:46 | 2:45 | 0/0/0 | 1/2/0 | 0/0/0 | 81,578/1,311 | einfracz / qwen3.8-27b | 3 | 0/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fukae_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of valemetostat, not sultamicillin. |
| popPK | Hampel_1988 | irrelevant | 0 | 0 | The paper studies sulbactam/ampicillin and clavulanic acid/amoxicillin; "sultamicillin" is a misspelling of sulbactam/ampicillin (or the drug is not the subject as a specific distinct entity with provided PK values for the target drug sultamicillin in the evidence, which appears to be a typo for sulbactam/ampicillin, but even so, no numeric PK values are provided in the evidence block). |
| popPK | Maruyama_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and safety of valemetostat in lymphoma patients and does not mention sultamicillin. |
| popPK | Poornachandran_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ampicillin and sulbactam, not sultamicillin. |
| popPK | Reeder_2023 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for ampicillin and sulbactam, not sultamicillin. |
| popPK | Suzuki_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of ampicillin/sulbactam, not sultamicillin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
