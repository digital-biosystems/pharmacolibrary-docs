<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;garadacimab&quot;}]"></div>

# garadacimab

- **generic name:** garadacimab
- **ATC codes:** `B06AC07`
- **DrugBank:** [DB15629](https://go.drugbank.com/drugs/DB15629) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Garadacimab is a monoclonal antibody used to treat hereditary angioedema. It is authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper (the values present come f…</sub> | [Garcia_2025_reference](drugs/drug_garadacimab/Garadacimab_Garcia2025_reference.md) | — | 2-compartment (no model) | 1 | Garcia R et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70009](https://doi.org/10.1002/psp4.70009) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Pawaskar_2022_reference](drugs/drug_garadacimab/Garadacimab_Pawaskar2022_reference.md) | — | 1-compartment (no model) | 0 | Pawaskar D et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical and translational… (2022) | [10.1111/cts.13192](https://doi.org/10.1111/cts.13192) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Garcia_2025_FXIIa_mediated_kallikrein_activity_POB](drugs/drug_garadacimab/pd_Garcia_2025_FXIIa_mediated_kallikrein_activity_POB.md) | FXIIa-mediated kallikrein activity percent of baseline ← garadacimab · direct sigmoid Emax (Hill) effect | — | Garcia R et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70009](https://doi.org/10.1002/psp4.70009) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Garcia_2025_HAE_attack](drugs/drug_garadacimab/pd_Garcia_2025_HAE_attack.md) | HAE attacks ← garadacimab · direct Emax (saturable) effect | — | Garcia R et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70009](https://doi.org/10.1002/psp4.70009) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Pawaskar_2022_FXIIa](drugs/drug_garadacimab/pd_Pawaskar_2022_FXIIa.md) | FXIIa-mediated kallikrein activity ← garadacimab · target-mediated drug disposition | — | Pawaskar D et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical and translational… (2022) | [10.1111/cts.13192](https://doi.org/10.1111/cts.13192) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=garadacimab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F12 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:51 | 4:45 | 0/2/0 | 2/0/0 | 0/0/0 | 71,707/14,581 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 2 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 01:47 UTC</sub>
