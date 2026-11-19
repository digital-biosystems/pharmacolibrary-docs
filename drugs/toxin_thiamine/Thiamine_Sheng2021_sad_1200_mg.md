<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Thiamine&quot;,&quot;href&quot;:&quot;drugs/toxin_thiamine/&quot;},{&quot;label&quot;:&quot;Sheng_2021 \u00b7 sad_1200_mg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Thiamine_Smithline2012_thiamine_dose_100_mg&quot;,&quot;label&quot;:&quot;Smithline_2012_thiamine_dose_100_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thiamine/Thiamine_Smithline2012_thiamine_dose_100_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Thiamine — `Thiamine_Sheng2021_sad_1200_mg`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Thiamine" model-id="Thiamine_Sheng2021_sad_1200_mg" status="rejected" stale="false" population="healthy subjects" measured-compound="thiamine" parameterization="mechanistic" topology="1C"></div>

## Citation
Sheng L, Cao W, Lin P, Chen W, Xu H, Zhong C et al. Safety, Tolerability and Pharmacokinetics of Single and Multiple Ascending Doses of Benfotiamine in Healthy Subjects. Drug design, development and therapy 15:1101–1110 (2021).
  ·  DOI: [10.2147/DDDT.S296197](https://doi.org/10.2147/DDDT.S296197)

## Population and dosing

**Population:** healthy subjects · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed benfotiamine, measured thiamine.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'TM'; source reconciliation required
- table representations disagree for 'TMP'; source reconciliation required
- table representations disagree for 'TDP'; source reconciliation required
- dropped unlinked row (NIL): 'TM' — extend the ontology if this is a real PK parameter (source ['t0003:row2:col6'])
- dropped unlinked row (NIL): 'TMP' — extend the ontology if this is a real PK parameter (source ['t0003:row8:col6'])
- dropped unlinked row (NIL): 'TDP' — extend the ontology if this is a real PK parameter (source ['t0003:row14:col6'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=thiamine
- toxin: 3 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'sad / 1200 mg (n=10)' subgroup of Sheng_2021 (paper reports 11 populations: mad / 150 mg (n=12) / day 1, mad / 150 mg (n=12) / day 10, mad / 300 mg (n=12) / day 1, mad / 300 mg (n=12) / day 10, mad / 600 mg (n=12) / day 1, mad / 600 mg (n=12) / day 10, sad / 1200 mg (n=10), sad / 150 mg (n=10), sad / 300 mg (n=10), sad / 600 mg (n=10), sad / 900 mg (n=10))
- row roles (LLM): model_class=noncompartmental; 13/13 row label(s) assigned, 0 linked by role; re-tagged thiamine→thiamine monophosphate ×130, thiamine→thiamine diphosphate ×36
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- table t0003: ambiguous_numeric_format
- table t0003: ragged_grid
- table t0003: representations disagree; selected evidence retained, not merged
- table Sheng_2021_table_4: ragged_grid
- companion parameter table 4 transcribed (110 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bthiamine%5D%20Thiamine_Sheng2021_sad_1200_mg&body=Drug%3A%20thiamine%0ARecord%3A%20Thiamine_Sheng2021_sad_1200_mg%0APaper%3A%20Sheng_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_thiamine/Thiamine_Sheng2021_sad_1200_mg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 08:32 UTC</sub>
