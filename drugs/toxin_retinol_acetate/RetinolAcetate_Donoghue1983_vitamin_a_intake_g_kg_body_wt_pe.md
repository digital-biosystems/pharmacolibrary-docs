<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Retinol acetate&quot;,&quot;href&quot;:&quot;drugs/toxin_retinol_acetate/&quot;},{&quot;label&quot;:&quot;Donoghue_1983 \u00b7 vitamin_a_intake_g_kg_body_wt_per_d_9000_mean&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Retinol acetate — `RetinolAcetate_Donoghue1983_vitamin_a_intake_g_kg_body_wt_pe`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Retinol acetate" model-id="RetinolAcetate_Donoghue1983_vitamin_a_intake_g_kg_body_wt_pe" status="rejected" stale="false" population="female crossbred lambs (2-7 weeks old at start)" measured-compound="Retinol (measured as [15-3H]retinol and endogenous)" parameterization="mechanistic" topology="1C"></div>

## Citation
Donoghue S, Kronfeld DS, Sklan D. Retinol homeostasis in lambs given low and high intakes of vitamin A. The British journal of nutrition 50(2):235–248 (1983).
  ·  DOI: [10.1079/bjn19830093](https://doi.org/10.1079/bjn19830093)

## Population and dosing

**Population:** female crossbred lambs (2-7 weeks old at start) · condition chronic dietary exposure / Vitamin A status manipulation · n = 16.

**Dosed compound ≠ measured compound:** dosed Retinyl acetate (vitamin A acetate), measured Retinol (measured as [15-3H]retinol and endogenous).

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

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
- compound tags: 2 row(s) → Retinol, 2 row(s) → Retinyl esters (name 4)
- dropped unlinked row (NIL): 'Retinol' — extend the ontology if this is a real PK parameter (source ['Donoghue_1983_table_5:row1:col5', 'Donoghue_1983_table_5:row4:col5'])
- dropped unlinked row (NIL): 'Retinyl esters' — extend the ontology if this is a real PK parameter (source ['Donoghue_1983_table_5:row2:col5', 'Donoghue_1983_table_5:row5:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Retinol (measured as [15-3H]retinol and endogenous)
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — other model — not a compartmental parent–metabolite model
- population split: 'vitamin a intake (µg/kg body-wt per d) 9000 mean' subgroup of Donoghue_1983 (paper reports 4 populations: vitamin a intake (µg/kg body-wt per d) 0 mean, vitamin a intake (µg/kg body-wt per d) 100 (control) mean, vitamin a intake (µg/kg body-wt per d) 18000 mean, vitamin a intake (µg/kg body-wt per d) 9000 mean)
- row roles (LLM): model_class=other; 2/2 row label(s) assigned, 0 linked by role; re-tagged parent→Retinol (measured as [15-3H]retinol and endogenous) ×8, parent→Retinyl esters ×8

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- table Donoghue_1983_table_5: ambiguous_uncertainty_binding
- toxin: the located table(s) gave no kinetic value — 40 record(s) read from the paper's prose

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bretinol_acetate%5D%20RetinolAcetate_Donoghue1983_vitamin_a_intake_g_kg_body_wt_pe&body=Drug%3A%20retinol_acetate%0ARecord%3A%20RetinolAcetate_Donoghue1983_vitamin_a_intake_g_kg_body_wt_pe%0APaper%3A%20Donoghue_1983%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_retinol_acetate/RetinolAcetate_Donoghue1983_vitamin_a_intake_g_kg_body_wt_pe%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 01:21 UTC</sub>
