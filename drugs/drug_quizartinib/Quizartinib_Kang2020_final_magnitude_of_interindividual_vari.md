<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/&quot;},{&quot;label&quot;:&quot;Kang_2020 \u00b7 final_magnitude_of_interindividual_variability_final_estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quizartinib — `Quizartinib_Kang2020_final_magnitude_of_interindividual_vari`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="quizartinib" model-id="Quizartinib_Kang2020_final_magnitude_of_interindividual_vari" status="rejected" stale="false" population="healthy volunteers and patients with relapsed/refractory acute myeloid leukemia" measured-compound="quizartinib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Kang D, Ludwig E, Jaworowicz D, Huang H, Fiedler-Kelly J, Cortes J et al. Population Pharmacokinetic Analysis of Quizartinib in Healthy Volunteers and Patients With Relapsed/Refractory Acute Myeloid Leukemia. Journal of clinical pharmacology 60(12):1629–1641 (2020).
  ·  DOI: [10.1002/jcph.1680](https://doi.org/10.1002/jcph.1680)

## Population and dosing

**Population:** healthy volunteers and patients with relapsed/refractory acute myeloid leukemia · condition relapsed/refractory acute myeloid leukemia · age group adult.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (apparent clearance for parent), L/h' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'Vc (apparent volume of distribution for central compartment), L' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'Q1 (intercompartmental clearance 1), L/h' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'Vp1 (apparent volume of distribution for peripheral compartment 1), L' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'Ka (first‐order absorption constant for healthy participants), 1/h' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'D1 (duration of zero‐order input to depot compartment), h' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'F1 (relative F1 for patients)' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'ALAG1 (absorption lag time), h' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iov: 'Minimum value of the objective function = 72 031.19' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iiv: 'Vcm (apparent central volume of distribution for metabolite), L' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'IIV in CLm in healthy volunteers' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'IIV in CLm in patients' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'Minimum value of the objective function = −10 302.217' routed out of structural estimates ('Magnitude of Interindividual Variability / Final Estimate')
- table section iiv: 'Minimum value of the objective function = −10 302.217' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quizartinib
- template fit: none — only the metabolite is modelled — no parent compartment
- model-stage split: 'magnitude of interindividual variability / final estimate' is the final model of Kang_2020 (paper reports 2 stages: final parameter estimate / population mean, magnitude of interindividual variability / final estimate); same population, different model-building step
- row roles: 2 per-group rows of quizartinib absorption_rate_constant but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of quizartinib bioavailability but 0 reference group(s) — kept as printed
- row roles: 4 per-group rows of quizartinib residual_error but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of AC886 variability but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of AC886 residual_error but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 41/41 row label(s) assigned, 21 linked by role; re-tagged quizartinib→parent ×34, quizartinib→AC886 ×14

**Extraction notes:**
- table jcph1680-tbl-0003: unbound_uncertainty
- table jcph1680-tbl-0003: missing_label
- table jcph1680-tbl-0003: ragged_grid
- table jcph1680-tbl-0003: unparsed_numeric_cell
- table Kang_2020_table_4: unbound_uncertainty
- table Kang_2020_table_4: ragged_grid
- table Kang_2020_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (28 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (4/4 fields) | none |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquizartinib%5D%20Quizartinib_Kang2020_final_magnitude_of_interindividual_vari&body=Drug%3A%20quizartinib%0ARecord%3A%20Quizartinib_Kang2020_final_magnitude_of_interindividual_vari%0APaper%3A%20Kang_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quizartinib/Quizartinib_Kang2020_final_magnitude_of_interindividual_vari%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:05 UTC</sub>
