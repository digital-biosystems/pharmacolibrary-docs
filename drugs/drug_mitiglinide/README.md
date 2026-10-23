<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;mitiglinide&quot;}]"></div>

# mitiglinide

- **generic name:** mitiglinide
- **ATC codes:** `A10BX08`
- **DrugBank:** [DB01252](https://go.drugbank.com/drugs/DB01252) · **PubChem:** [CID 121891](https://pubchem.ncbi.nlm.nih.gov/compound/121891)
- **molar mass:** 315.413 g/mol (C19H25NO3) — DrugBank
- **groups:** investigational

## About

Mitiglinide is an anti-diabetic medication intended to lower blood sugar in people with diabetes. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q266321](https://www.wikidata.org/wiki/Q266321) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mitiglinide | parent | 315.413 | C19H25NO3 | DrugBank | [121891](https://pubchem.ncbi.nlm.nih.gov/compound/121891) | Liu_2017 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 7.8 | L/h | 7.8 L/h | healthy Chinese volunteers | &gt;=18 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Liu_2017_reference](drugs/drug_mitiglinide/Mitiglinide_Liu2017_reference.md) |
| V | V/F | 23.96 | L | 23.96 L | healthy Chinese volunteers | &gt;=18 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Liu_2017_reference](drugs/drug_mitiglinide/Mitiglinide_Liu2017_reference.md) |
| ka | kabs | 9.57 | 1/h | 9.57 /h | healthy Chinese volunteers | &gt;=18 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Liu_2017_reference](drugs/drug_mitiglinide/Mitiglinide_Liu2017_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C1_half_life_beta failed (ratio 1.2598)</sub> | [Liu_2017_reference](drugs/drug_mitiglinide/Mitiglinide_Liu2017_reference.md) | — | 1-compartment (no model) | 4 | Liu S et al., Pharmacokinetic and pharmacodynamic mod…, BMC pharmacology & toxicolo… (2017) | [10.1186/s40360-017-0161-6](https://doi.org/10.1186/s40360-017-0161-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Liu_2017_glucose](drugs/drug_mitiglinide/pd_Liu_2017_glucose.md) | glucose plasma concentration ← mitiglinide · direct sigmoid Emax (Hill) effect | — | Liu S et al., Pharmacokinetic and pharmacodynamic mod…, BMC pharmacology & toxicolo… (2017) | [10.1186/s40360-017-0161-6](https://doi.org/10.1186/s40360-017-0161-6) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mitiglinide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `UGT1A3` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT2B7` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC8 (inhibitor), KCNJ10 (blocker), PPARG (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 02:36 | 2:23 | 1/0/0 | 1/0/0 | 0/0/0 | 28,282/6,638 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 02:34 UTC</sub>
