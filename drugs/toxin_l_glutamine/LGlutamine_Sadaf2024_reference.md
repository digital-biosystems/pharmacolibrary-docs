<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;L-Glutamine&quot;,&quot;href&quot;:&quot;drugs/toxin_l_glutamine/&quot;},{&quot;label&quot;:&quot;Sadaf_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# L-Glutamine — `LGlutamine_Sadaf2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The allometric exponent for l-glutamine was recorded as 52.3 with a volume unit (L/70kg) instead of a dimensionless value.

<div class="pk-model-meta" hidden drug="L-Glutamine" model-id="LGlutamine_Sadaf2024_reference" status="rejected" stale="false" population="Patients with Sickle Cell Disease (pediatric and adult) and adult healthy volunteers" measured-compound="l-Glutamine" parameterization="mechanistic" topology="1C"></div>

## Citation
Sadaf A, Dong M, Pfeiffer A, Latham T, Kalfa T, Vinks AA et al. A Population Pharmacokinetic Analysis of L-Glutamine Exposure in Patients with Sickle Cell Disease: Evaluation of Dose and Food Effects. Clinical pharmacokinetics 63(3):357-365 (2024).
  ·  DOI: [10.1007/s40262-024-01349-4](https://doi.org/10.1007/s40262-024-01349-4)

## Population and dosing

**Population:** Patients with Sickle Cell Disease (pediatric and adult) and adult healthy volunteers · condition Sickle cell disease and healthy volunteers · age group mixed · n = 12.

**Dosing:** 7000, 21000, 42000 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| ϴ3 | allometric_exponent | 52.3 | L/70kg | 19.5 |
| ϴ4 | equation variable | 0.27 | – | 45.0 |
| KA | kabs | 0.91 | 1/h | 6.4 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The allometric exponent for l-glutamine was recorded as 52.3 with a volume unit (L/70kg) instead of a dimensionless value.**

The record lists the allometric exponent for l-glutamine as 52.3, which is a physiologically implausible value for an exponent. This parameter is assigned the unit L/70kg, which describes volume per body weight, not the dimensionless nature of an allometric exponent. Additionally, the specific unit reported for this parameter could not be converted to standard SI units. Extracted — l glutamine: allometric_exponent 52.3 L/70kg, kabs 0.91 1/h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| ϴ3 | `Q319` · allometric_exponent | 52.3 | L/70kg |  |  | l/70kg | 19.5 | llm (0.6) | Tab2:row7:col2 |
| ϴ4 | `Q900` · equation variable | 0.27 | – | 0.27 |  | - | 45.0 | llm (0.6) | Tab2:row8:col2 |
| KA | `Q49` · kabs | 0.91 | 1/h | 0.0002528 | 1/s | 1/h | 6.4 | exact (1) | Tab2:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iov: 'IOVCL' routed out of structural estimates ('Inter-occasion variability (variance)')
- table section residual_error: 'Prop.Err.' routed out of structural estimates ('Residual variability (variance)')
- dropped unlinked row (NIL): 'Ɵ1' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col2'])
- dropped unlinked row (NIL): 'Ɵ2' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col2'])
- unit_dimension_unknown: '–' (equation variable)
- dropped value-less row: 'Clearance (CLi)' (captured trailing unit 'CLi' for child rows)
- dropped value-less row: 'volume of distribution (Vi)' (captured trailing unit 'Vi' for child rows)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=l-Glutamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- model equation 'CLi = Ɵ1 * (WT/70)^0.75 *(Glu_BSL/Glu_BSLstardard)ϴ2' not bound — neither LHS nor base term 'WT' linked to an ontology parameter
- status held at "Needs review" — not promoted
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 2 PubChem candidate(s) is 'l-Glutamine' (LLM) — left in mass units
- molar mass: none found for 'l-Glutamine' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2
- captured model equation CLi = Ɵ1 * (WT/70)^0.75 *(Glu_BSL/Glu_BSLstardard)ϴ2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row9:col2'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bl_glutamine%5D%20LGlutamine_Sadaf2024_reference&body=Drug%3A%20l_glutamine%0ARecord%3A%20LGlutamine_Sadaf2024_reference%0APaper%3A%20Sadaf_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_l_glutamine/LGlutamine_Sadaf2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 12:12 UTC</sub>
