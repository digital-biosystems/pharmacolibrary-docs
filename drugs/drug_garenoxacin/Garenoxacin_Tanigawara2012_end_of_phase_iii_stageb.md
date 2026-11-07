<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;garenoxacin&quot;,&quot;href&quot;:&quot;drugs/drug_garenoxacin/&quot;},{&quot;label&quot;:&quot;Tanigawara_2012 \u00b7 end_of_phase_iii_stageb&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# garenoxacin — `Garenoxacin_Tanigawara2012_end_of_phase_iii_stageb`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="garenoxacin" model-id="Garenoxacin_Tanigawara2012_end_of_phase_iii_stageb" status="needs_review" stale="false" population="patients with mild or moderate chronic respiratory diseases" measured-compound="garenoxacin" parameterization="apparent" topology="1C"></div>

## Citation
Tanigawara Y, Nozawa K, Tsuda H. Optimal dose finding of garenoxacin based on population pharmacokinetics/pharmacodynamics and Monte Carlo simulation. European journal of clinical pharmacology 68(1):39–53 (2012).
  ·  DOI: [10.1007/s00228-011-1095-3](https://doi.org/10.1007/s00228-011-1095-3)

## Population and dosing

**Population:** patients with mild or moderate chronic respiratory diseases · condition chronic respiratory diseases · age group adult · n = 133.

**Dosing:** 200, 400 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka (1/h) | kabs | 2.14 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Extracted — garenoxacin: kabs 2.14 1/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has garenoxacin, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka (1/h) | `Q49` · kabs | 2.14 | 1/h | 0.0005944 | 1/s | 1/h | exact (1) | Tab4:row10:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL/F (ml/min) CL/F = θ1 + θ2 × (CLCR − 102) | Q27 | llm_confirmed |
| V/F (l) V/F = θ4 | Q76 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'CLCR − 102' (CL/F)
- dropped unlinked row (NIL): 'θ1' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col3'])
- dropped unlinked row (NIL): 'θ2' — extend the ontology if this is a real PK parameter (source ['Tab4:row4:col3'])
- dropped unlinked row (NIL): 'θ3' — extend the ontology if this is a real PK parameter (source ['Tab4:row5:col3'])
- dropped unlinked row (NIL): 'θ4' — extend the ontology if this is a real PK parameter (source ['Tab4:row7:col3'])
- dropped unlinked row (NIL): 'θ5' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col3'])
- dropped unlinked row (NIL): 'θ6' — extend the ontology if this is a real PK parameter (source ['Tab4:row9:col3'])
- implicit units: 'ka (1/h)' → 1/h (from the paper text: "The paper text explicitly identifies the parameter as the 'first-order absorption rate constant (ka)'. In pharmacokineti")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=garenoxacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q76 (V/F): V/F = θ3 * (WT/55)^θ4
- Q76 (V/F) is equation-defined: value moved to equation-variable 'V/F (l) V/F = θ4'; equation kept verbatim
- status held at "Needs review" — not promoted
- population split: 'end of phase iii stageb' subgroup of Tanigawara_2012 (paper reports 2 populations: end of phase ii stagea, end of phase iii stageb)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab4:row3:col5 = '65.3 (62.2 –76.3)'
- unparsed cell Tab4:row4:col5 = '0.184 (0.109 –0.261)'
- unparsed cell Tab4:row5:col5 = '0.328 (0.090–0.540)'
- unparsed cell Tab4:row7:col5 = '55.4 (49.8–68.4)'
- unparsed cell Tab4:row8:col5 = '0.502 (0.195 –0.873)'
- unparsed cell Tab4:row9:col5 = '8.02 (3.85–10.56)'
- unparsed cell Tab4:row10:col5 = '2.16 (1.69–2.99)'
- unparsed cell Tab4:row13:col2 = '20.6%'
- unparsed cell Tab4:row13:col4 = '20.1%'
- unparsed cell Tab4:row13:col5 = '0.0374 (0.0149–0.0673)'
- unparsed cell Tab4:row14:col2 = '21.0%'
- unparsed cell Tab4:row14:col4 = '15.8%'
- unparsed cell Tab4:row14:col5 = '0.156 (0.0181–0.3915)'
- unparsed cell Tab4:row15:col5 = '0.0096 (0.0036–0.0385)'
- unparsed cell Tab4:row17:col2 = '162%'
- unparsed cell Tab4:row17:col4 = '64.1%'
- unparsed cell Tab4:row17:col5 = '0.470 (0.269–1.073)'
- unparsed cell Tab4:row19:col2 = '25.4%'
- unparsed cell Tab4:row19:col4 = '32.4%'
- unparsed cell Tab4:row19:col5 = '0.113 (0.095–0.162)'
- LLM selected parameter table(s) 4
- captured model equation V/F = θ3 * (WT/55)^θ4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.714 (5/7 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `screen.dose_compound` | garenoxacin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | garenoxacin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab4:row10:col3'] |
| C7_apparent_coherence | pass |  |  |  |
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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgarenoxacin%5D%20Garenoxacin_Tanigawara2012_end_of_phase_iii_stageb&body=Drug%3A%20garenoxacin%0ARecord%3A%20Garenoxacin_Tanigawara2012_end_of_phase_iii_stageb%0APaper%3A%20Tanigawara_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_garenoxacin/Garenoxacin_Tanigawara2012_end_of_phase_iii_stageb%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 11:44 UTC</sub>
