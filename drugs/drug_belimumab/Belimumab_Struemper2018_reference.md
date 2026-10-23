<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;belimumab&quot;,&quot;href&quot;:&quot;drugs/drug_belimumab/&quot;},{&quot;label&quot;:&quot;Struemper_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belimumab — `Belimumab_Struemper2018_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The third compartment in the three-compartment belimumab model is unreachable from the central compartment due to missing linkages.

<div class="pk-model-meta" hidden drug="belimumab" model-id="Belimumab_Struemper2018_reference" status="rejected" stale="false" population="healthy volunteers and patients with systemic lupus erythematosus" measured-compound="belimumab" parameterization="mechanistic" topology="3C"></div>

## Citation
Struemper H, Thapar M, Roth D. Population Pharmacokinetic and Pharmacodynamic Analysis of Belimumab Administered Subcutaneously in Healthy Volunteers and Patients with Systemic Lupus Erythematosus. Clinical pharmacokinetics 57(6):717–728 (2018).
  ·  DOI: [10.1007/s40262-017-0586-5](https://doi.org/10.1007/s40262-017-0586-5)

## Population and dosing

**Population:** healthy volunteers and patients with systemic lupus erythematosus · condition systemic lupus erythematosus · age group adult · n = 688.

**Dosing:** 200 mg, sc, multiple, every 168 h.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| lag time | tlag | 0.18 | days |
| total systemic CL | CL | 204 | mL/day |
| V c | V1 | 2300 | mL |
| volume of distribution of the peripheral compartment | V2 | 2650 | mL |
| steady-state volume of distribution | V | 4950 | mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.364). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The third compartment in the three-compartment belimumab model is unreachable from the central compartment due to missing linkages.**

The model defines three volume parameters (V1 2300 mL, V2 2650 mL, and steady-state V 4950 mL) but lacks a transit path connecting the third compartment to the dose. This structural discontinuity renders the third compartment an orphan, preventing drug distribution from reaching it. Consequently, the model fails the topology check for unreachable compartments. Extracted — belimumab: tlag 0.18 days, CL 204 mL/day, V1 2.3e+03 mL, V2 2.65e+03 mL, V 4.95e+03 mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of effect of bbmi [kg/m2]: this record has none, the second reading none; it also differs on 6 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| lag time | `Q83` · tlag | 0.18 | days | 1.555e+04 | s | h | exact (1) | Struemper_2018:results_prose |
| total systemic CL | `Q22` · CL | 204 | mL/day | 2.361e-09 | m3/s | L/h | boundary (0.8) | Struemper_2018:results_prose |
| V c | `Q63` · V1 | 2300 | mL | 0.0023 | m3 | L | space_fold (0.95) | Struemper_2018:results_prose |
| volume of distribution of the peripheral compartment | `Q64` · V2 | 2650 | mL | 0.00265 | m3 | L | boundary_compartment (0.9) | Struemper_2018:results_prose |
| steady-state volume of distribution | `Q61` · V | 4950 | mL | 0.00495 | m3 | L | boundary (0.8) | Struemper_2018:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Effect of BBMI [kg/m2] | Q319 | llm |

## Departures & gaps

**Interpretation flags:**
- column 'implementation' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Effect of BWT [kg]' — extend the ontology if this is a real PK parameter (source ['Tab3:row6:col1'])
- dropped unlinked row (NIL): 'Effect of BALB [g/L]' — extend the ontology if this is a real PK parameter (source ['Tab3:row7:col1'])
- dropped unlinked row (NIL): 'Effect of BIGG [g/L]' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col1'])
- dropped unlinked row (NIL): 'Effect of BWT' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col1', 'Tab3:row13:col1', 'Tab3:row15:col1'])
- table mostly unlinked (4/5 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q83 ('lag time'=0.18) from results prose — parameter table was unreadable
- salvaged Q22 ('total systemic CL'=204) from results prose — parameter table was unreadable
- salvaged Q63 ('V c'=2300) from results prose — parameter table was unreadable
- salvaged Q64 ('volume of distribution of the peripheral compartment'=2650) from results prose — parameter table was unreadable
- salvaged Q61 ('steady-state volume of distribution'=4950) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (total systemic CL); Q63 (V c); Q64 (volume of distribution of the peripheral compartment); Q61 (steady-state volume of distribution)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=belimumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'belimumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab3:row7:col2 = '−0.736 (14.1, −0.940 to −0.532)'
- unparsed cell Tab3:row7:col3 = '−0.737 (14.6, −0.953 to −0.533)'
- unparsed cell Tab3:row8:col2 = '0.347 (10.4, 0.276–0.418)'
- unparsed cell Tab3:row8:col3 = '0.352 (11.7, 0.272–0.436)'
- unparsed cell Tab3:row11:col2 = '−0.610 (28.2, −0.947 to −0.273)'
- unparsed cell Tab3:row11:col3 = '−0.608 (36.7, –0.997 to −0.16)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[effect of bbmi [kg/m2]]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of bwt]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.18 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` | 4950 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total systemic cl]` | 204 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c]` | 2300 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution of the peripheral compartment]` | 2650 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 204 | ['Struemper_2018:results_prose'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0085 L/h | ['Struemper_2018:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.95 L | ['Struemper_2018:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.3 L | ['Struemper_2018:results_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.65 L | ['Struemper_2018:results_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbelimumab%5D%20Belimumab_Struemper2018_reference&body=Drug%3A%20belimumab%0ARecord%3A%20Belimumab_Struemper2018_reference%0APaper%3A%20Struemper_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_belimumab/Belimumab_Struemper2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:30 UTC</sub>
