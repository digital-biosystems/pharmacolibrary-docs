<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;camostat&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/&quot;},{&quot;label&quot;:&quot;Kitagawa_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Camostat_Kosinsky2022_reference&quot;,&quot;label&quot;:&quot;Kosinsky_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/Camostat_Kosinsky2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# camostat — `Camostat_Kitagawa2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Rejected), but the paper was screened again on 2026-10-05 16:45 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The camostat/GBPA record lacks a distribution volume and any clearance or elimination parameter, so it is not a compartmental population PK model but an exposure/outcome paper, and its two-compartment structure leaves a compartment unreachable from the dose.

<div class="pk-model-meta" hidden drug="camostat" model-id="Camostat_Kitagawa2021_reference" status="rejected" stale="true" population="healthy adults" measured-compound="GBPA" parameterization="apparent" topology="2C"></div>

## Citation
Kitagawa J, Arai H, Iida H, Mukai J, Furukawa K, Ohtsu S et al. A phase I study of high dose camostat mesylate in healthy adults provides a rationale to repurpose the TMPRSS2 inhibitor for the treatment of COVID-19. Clinical and translational science 14(5):1967–1976 (2021).
  ·  DOI: [10.1111/cts.13052](https://doi.org/10.1111/cts.13052)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 24.

**Dosing:** 600 mg, oral, multiple, every 4 h.

**Dosed compound ≠ measured compound:** dosed camostat mesylate, measured GBPA.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** apparent.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The camostat/GBPA record lacks a distribution volume and any clearance or elimination parameter, so it is not a compartmental population PK model but an exposure/outcome paper, and its two-compartment structure leaves a compartment unreachable from the dose.**

The GBPA parameters contain no distribution volume and no clearance or elimination rate, meaning the record describes an exposure/outcome analysis rather than a fitted compartmental population PK model. In addition, the two-compartment structure includes an unreachable compartment with no dosing path, so the structure is not a valid pharmacokinetic model. The record was therefore rejected. No parameter values were extracted.

Independently confirmed by `gpt-oss:120b`.

<sub>reviewed by glm-5.3-flash</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

|  |
|
|  |
|  |
|  |
|  |
|  |
|  |
|  |
|  |
|  |
|  |
|  |
|  |
|  |
|  |
|  |

## Departures & gaps

**Interpretation flags:**
- $THETA(13) has no $PK binding — index may be misassigned
- $THETA(15) has no $PK binding — index may be misassigned
- control_stream ADVAN4 TRANS4: topology=2C, parameterization=apparent (clearance)
- theta_crosscheck: table present but its labels did not align to bound THETAs (skipped)
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 0 linked by role
- molar mass: none of 1 PubChem candidate(s) is 'GBPA' (LLM) — left in mass units
- molar mass: none found for 'GBPA' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'GBPA', not camostat — the review values are the parent's

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (4/4 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C7_apparent_coherence | pass |  |
| C8_topology | fail |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcamostat%5D%20Camostat_Kitagawa2021_reference&body=Drug%3A%20camostat%0ARecord%3A%20Camostat_Kitagawa2021_reference%0APaper%3A%20Kitagawa_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_camostat/Camostat_Kitagawa2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 16:45 UTC</sub>
