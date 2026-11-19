<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Etoposide&quot;,&quot;href&quot;:&quot;drugs/toxin_etoposide/&quot;},{&quot;label&quot;:&quot;Urien_2011 \u00b7 covariate_effect&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Etoposide_Baheti2013_reference&quot;,&quot;label&quot;:&quot;Baheti_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_etoposide/Etoposide_Baheti2013_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Etoposide — `Etoposide_Urien2011_covariate_effect`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="Etoposide" model-id="Etoposide_Urien2011_covariate_effect" status="needs_review" stale="false" population="pediatric patients with various malignancies" measured-compound="Etoposide" parameterization="mechanistic" topology="1C"></div>

## Citation
Urien S, Doz F, Giraud C, Rey E, Gentet JC, Chastagner P et al. Developmental pharmacokinetics of etoposide in 67 children: lack of dexamethasone effect. Cancer chemotherapy and pharmacology 67(3):597-603 (2011).
  ·  DOI: [10.1007/s00280-010-1357-2](https://doi.org/10.1007/s00280-010-1357-2)

## Population and dosing

**Population:** pediatric patients with various malignancies · condition chemotherapy · age group mixed · n = 67.

**Dosing:** 150 mg/m², iv, multiple, every 24 h.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL70 ( L/h/70kg) | Q354 | exact |
| Vc70 (L/70kg) | Q63 | llm |
| Q70 (L/h/70 kg) | Q30 | llm |
| Vp70 (L/70 kg) | Q64 | llm |

## Departures & gaps

**Interpretation flags:**
- column 'covariate effect' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Etoposide
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q63 (V1): Vc = CL 70 (BWi/70)^1
- bound model equation to Q30 (Q): Q = CL 70 (BWi/70)^3/4
- bound model equation to Q64 (V2): Vp = CL 70 (BWi/70)^1
- Q63 (V1) is equation-defined: value moved to equation-variable 'Vc70 (L/70kg)'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Q70 (L/h/70 kg)'; equation kept verbatim
- Q64 (V2) is equation-defined: value moved to equation-variable 'Vp70 (L/70 kg)'; equation kept verbatim
- population split: 'covariate effect' subgroup of Urien_2011 (paper reports 2 populations: covariate effect, estimate (%rse))
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- captured model equation Vc = CL 70 (BWi/70)^1
- captured model equation Q = CL 70 (BWi/70)^3/4
- captured model equation Vp = CL 70 (BWi/70)^1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Urien_2011_table_p18_1:row2:col1'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Urien_2011_table_p18_1:row0:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Urien_2011_table_p18_1:row1:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Urien_2011_table_p18_1:row3:col1'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Betoposide%5D%20Etoposide_Urien2011_covariate_effect&body=Drug%3A%20etoposide%0ARecord%3A%20Etoposide_Urien2011_covariate_effect%0APaper%3A%20Urien_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_etoposide/Etoposide_Urien2011_covariate_effect%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 16:53 UTC</sub>
