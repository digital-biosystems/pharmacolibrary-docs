<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;garenoxacin&quot;,&quot;href&quot;:&quot;drugs/drug_garenoxacin/&quot;},{&quot;label&quot;:&quot;Van_2004 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# garenoxacin — `Garenoxacin_Van2004_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The absorption rate constant for garenoxacin was rejected because its unit, liters per hour, could not be converted to a standard unit.

<div class="pk-model-meta" hidden drug="garenoxacin" model-id="Garenoxacin_Van2004_reference" status="rejected" stale="false" population="patients with community-acquired respiratory tract infections" measured-compound="garenoxacin" parameterization="apparent" topology="1C"></div>

## Citation
Van Wart S, Phillips L, Ludwig EA, Russo R, Gajjar DA, Bello A et al. Population pharmacokinetics and pharmacodynamics of garenoxacin in patients with community-acquired respiratory tract infections. Antimicrobial agents and chemotherapy 48(12):4766–4777 (2004).
  ·  DOI: [10.1128/AAC.48.12.4766-4777.2004](https://doi.org/10.1128/AAC.48.12.4766-4777.2004)

## Population and dosing

**Population:** patients with community-acquired respiratory tract infections · condition community-acquired respiratory tract infections · age group adult.

**Dosing:** 400 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k a (l/h) CL/F a coefficient (ml/min) | CL/F | 25.5 | ml/min |
| V/F b coefficient (liters) | V/F | 18.8 | liters |
| wtkg_v_power | wtkg_v_power | 0.635 |  |
| k a (l/hr) | kabs | 3.15 | l/hr |
| theta_q22_crcl_power | theta_q22_crcl_power | 0.436 |  |
| theta_q61_category | theta_q61_category | 17.7 |  |
| theta_q22_category | theta_q22_category | 10.9 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The absorption rate constant for garenoxacin was rejected because its unit, liters per hour, could not be converted to a standard unit.**

The model specifies an oral one-compartment structure for garenoxacin. The parameter representing the absorption rate constant has a value of 3.15, but its unit is recorded as 'l/hr'. Because this unit is not recognized by the system, the parameter lacked a valid standard value, leading to a dimension mismatch in the structural parameters. Extracted — garenoxacin: CL/F 25.5 ml/min, V/F 18.8 liters, kabs 3.15 l/hr.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k a (l/h) CL/F a coefficient (ml/min) | `Q27` · CL/F | 25.5 | ml/min | 4.25e-07 | m3/s | ml/min | llm_confirmed (0.6) | tab_3:row5:col3, tab_3:row5:col4 |
| V/F b coefficient (liters) | `Q76` · V/F | 18.8 | liters | 0.0188 | m3 | l | llm_confirmed (0.6) | tab_3:row6:col1, tab_3:row6:col2, tab_3:row6:col3, tab_3:row6:col4 |
| wtkg_v_power | `Q900` · wtkg_v_power | 0.635 |  |  |  |  |  | tab_3:row7:col1, tab_3:row7:col2 |
| k a (l/hr) | `Q49` · kabs | 3.15 | l/hr |  |  | l/h | space_fold (0.95) | Van_2004_table_2:row2:col1, Van_2004_table_2:row2:col2 |
| theta_q22_crcl_power | `Q900` · theta_q22_crcl_power | 0.436 |  |  |  |  |  | tab_3:row9:col1, tab_3:row9:col2 |
| theta_q61_category | `Q900` · theta_q61_category | 17.7 |  |  |  |  |  | tab_3:row10:col1, tab_3:row10:col2 |
| theta_q22_category | `Q900` · theta_q22_category | 10.9 |  |  |  |  |  | tab_3:row11:col1, tab_3:row11:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'WTKG-V power' → Q900:wtkg_v_power = 0.635 (power on Q27)
- dropped PD-category row 'IBW-CL slope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_3:row8:col1', 'tab_3:row8:col2'])
- dropped PD-category row 'Age-CL slope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_3:row12:col1', 'tab_3:row12:col2'])
- unit_dimension_mismatch: 'k a (l/hr)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q27 ('CL/F (ml/min)', value '33.9') — already have one for this compound
- dropped duplicate Q76 ('V/F (liters)', value '29.9') — already have one for this compound
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q22 — ambiguous identity (two shifts cannot share one category)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=garenoxacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_3:row5:col1 = '2.41 83.4'
- unparsed cell tab_3:row5:col2 = '27.3 1.9'
- companion parameter table 2 transcribed (12 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_3:row5:col3', 'tab_3:row5:col4'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | l/hr | ['Van_2004_table_2:row2:col1', 'Van_2004_table_2:row2:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab_3:row6:col1', 'tab_3:row6:col2', 'tab_3:row6:col3', 'tab_3:row6:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.53 L/h | ['tab_3:row5:col3', 'tab_3:row5:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 18.8 L | ['tab_3:row6:col1', 'tab_3:row6:col2', 'tab_3:row6:col3', 'tab_3:row6:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgarenoxacin%5D%20Garenoxacin_Van2004_reference&body=Drug%3A%20garenoxacin%0ARecord%3A%20Garenoxacin_Van2004_reference%0APaper%3A%20Van_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_garenoxacin/Garenoxacin_Van2004_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 11:44 UTC</sub>
