<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;enasidenib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enasidenib_Li2019_reference&quot;,&quot;label&quot;:&quot;Li_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enasidenib/Enasidenib_Li2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# enasidenib

- **generic name:** enasidenib
- **ATC codes:** `L01XM01`
- **DrugBank:** [DB13874](https://go.drugbank.com/drugs/DB13874) · **PubChem:** [CID 89683805](https://pubchem.ncbi.nlm.nih.gov/compound/89683805)
- **molar mass:** 473.383 g/mol (C19H17F6N7O) — DrugBank
- **groups:** approved, investigational

## About

Enasidenib is an anticancer medicine, an IDH inhibitor, used to treat acute myeloid leukemia. It is an approved drug, though it has no European Union authorisation recorded, and remains investigational for some uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27077182](https://www.wikidata.org/wiki/Q27077182) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| enasidenib | parent | 473.383 | C19H17F6N7O | DrugBank | [89683805](https://pubchem.ncbi.nlm.nih.gov/compound/89683805) | Li_2019 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T1_cmax</sub> | [Li_2019_reference](drugs/drug_enasidenib/Enasidenib_Li2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Li Y et al., Modeling and simulation of the endogeno…, Clinical pharmacology : adv… (2019) | [10.2147/CPAA.S192687](https://doi.org/10.2147/CPAA.S192687) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2019_4_hydroxycholesterol_cholesterol_ratio](drugs/drug_enasidenib/pd_Li_2019_4_hydroxycholesterol_cholesterol_ratio.md) | 4β-hydroxycholesterol/cholesterol ratio ← enasidenib · indirect response — drug stimulates the production of 4β-hydroxycholesterol/cholesterol ratio | model (no simulator) | Li Y et al., Modeling and simulation of the endogeno…, Clinical pharmacology : adv… (2019) | [10.2147/CPAA.S192687](https://doi.org/10.2147/CPAA.S192687) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:42 | 0:13 | 0/1/0 | 0/0/1 | 0/0/0 | 35,879/1,343 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the probe drug caffeine in the presence of enasidenib, not on the disposition parameters of enasidenib itself. |
| popPK | Fan_2022 | relevant | 5 | 4 | The study reports observed non-compartmental PK parameters (AUC, Cmax, accumulation ratios) for enasidenib in humans, but lacks specific compartmental values like clearance or volume of distribution. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 20:42 UTC</sub>
