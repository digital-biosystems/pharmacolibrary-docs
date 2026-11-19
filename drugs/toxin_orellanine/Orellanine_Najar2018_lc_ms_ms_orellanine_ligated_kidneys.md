<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Orellanine&quot;,&quot;href&quot;:&quot;drugs/toxin_orellanine/&quot;},{&quot;label&quot;:&quot;Najar_2018 \u00b7 lc_ms_ms_orellanine_ligated_kidneys&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Orellanine — `Orellanine_Najar2018_lc_ms_ms_orellanine_ligated_kidneys`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q47 unit nmol/mL/min ([substance] / [length] ** 3 / [time]) vs 1 / [time]; Q310 unit nmol ([substance]) vs [time]; Q88 unit nmol × min/L ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="Orellanine" model-id="Orellanine_Najar2018_lc_ms_ms_orellanine_ligated_kidneys" status="rejected" stale="false" population="Wistar and Sprague-Dawley rats (intact kidneys and bilateral renal artery ligation, with/without peritoneal dialysis)" measured-compound="orellanine" parameterization="mechanistic" topology="1C"></div>

## Citation
Najar D, Haraldsson B, Thorsell A, Sihlbom C, Nyström J, Ebefors K. Pharmacokinetic Properties of the Nephrotoxin Orellanine in Rats. Toxins 10(8) (2018).
  ·  DOI: [10.3390/toxins10080333](https://doi.org/10.3390/toxins10080333)

## Population and dosing

**Population:** Wistar and Sprague-Dawley rats (intact kidneys and bilateral renal artery ligation, with/without peritoneal dialysis) · condition acute_iv_administration_healthy_and_renal_ligated · age group adult · n = 25.

**Dosed compound ≠ measured compound:** dosed orellanine (unlabeled and 3H-labeled), measured orellanine.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Intercept (nmol/L) | equation variable | 3028 | nmol/L |
| Rate of elimination (nmol/mL/min) | kel | 0.000101 | nmol/mL/min |
| Half-life (t½, min) | t1/2z | 756 | min |
| Dose injected (nmol) | D1 | 85.4 | nmol |
| Area under the curve (AUC, nmol × min/L) | AUC | 3494674 | nmol × min/L |
| Volume of Distribution (VD, mL) | V | 35.1 | mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q47 unit nmol/mL/min ([substance] / [length] ** 3 / [time]) vs 1 / [time]; Q310 unit nmol ([substance]) vs [time]; Q88 unit nmol × min/L ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

A reported unit could not be converted (equation variable, kel, D1 and AUC), so that value has no SI equivalent. Extracted — orellanine: kel 0.000101 nmol/mL/min, t1/2z 756 min, D1 85.4 nmol, AUC 3.49e+06 nmol × min/L, V 35.1 mL.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has orellanine (unlabeled and 3H-labeled), the second reading orellanine; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Intercept (nmol/L) | `Q900` · equation variable | 3028 | nmol/L |  |  | nM/l | llm (0.6) | toxins-10-00333-t003:row2:col2 |
| Rate of elimination (nmol/mL/min) | `Q47` · kel | 0.000101 | nmol/mL/min |  |  | nM/(min·ml) | llm (0.6) | toxins-10-00333-t003:row3:col2 |
| Half-life (t½, min) | `Q57` · t1/2z | 756 | min | 4.536e+04 | s | min | half_life_rule (0.95) | toxins-10-00333-t003:row4:col2 |
| Dose injected (nmol) | `Q310` · D1 | 85.4 | nmol |  |  | nM | llm (0.6) | toxins-10-00333-t003:row5:col2 |
| Area under the curve (AUC, nmol × min/L) | `Q88` · AUC | 3494674 | nmol × min/L |  |  | (min·nM)/l | exact (1) | toxins-10-00333-t003:row6:col2 |
| Volume of Distribution (VD, mL) | `Q61` · V | 35.1 | mL | 3.51e-05 | m3 | ml | exact (1) | toxins-10-00333-t003:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Rate of elimination (nmol/mL/min)' → Q47 (unit '[substance] / [length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'Dose injected (nmol)' → Q310 (unit '[substance]' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'Area under the curve (AUC, nmol × min/L)' → Q88 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=orellanine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- population split: 'lc-ms/ms, orellanine / ligated kidneys' subgroup of Najar_2018 (paper reports 6 populations: beta scintillation, 3h-orellanine / intact renal function, beta scintillation, 3h-orellanine / ligated kidney dialysis, beta scintillation, 3h-orellanine / ligated kidneys, lc-ms/ms, orellanine / intact renal function, lc-ms/ms, orellanine / ligated kidney dialysis, lc-ms/ms, orellanine / ligated kidneys)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table toxins-10-00333-t003: ambiguous_numeric_format
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[dose injected]` | 85.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[intercept].parameter_id` | Q900 | Q86 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | orellanine (unlabeled and 3H-labeled) | orellanine | mismatch |

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
| C5_dimension_Q310 | fail | [time] | nmol ([substance]) | ['toxins-10-00333-t003:row5:col2'] |
| C5_dimension_Q47 | fail | 1 / [time] | nmol/mL/min ([substance] / [length] ** 3 / [time]) | ['toxins-10-00333-t003:row3:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['toxins-10-00333-t003:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['toxins-10-00333-t003:row7:col2'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | nmol × min/L ([substance] * [time] / [length] ** 3) | ['toxins-10-00333-t003:row6:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0351 L | ['toxins-10-00333-t003:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Borellanine%5D%20Orellanine_Najar2018_lc_ms_ms_orellanine_ligated_kidneys&body=Drug%3A%20orellanine%0ARecord%3A%20Orellanine_Najar2018_lc_ms_ms_orellanine_ligated_kidneys%0APaper%3A%20Najar_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_orellanine/Orellanine_Najar2018_lc_ms_ms_orellanine_ligated_kidneys%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 16:04 UTC</sub>
