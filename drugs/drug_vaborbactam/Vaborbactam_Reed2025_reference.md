<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Vaborbactam&quot;,&quot;href&quot;:&quot;drugs/drug_vaborbactam/&quot;},{&quot;label&quot;:&quot;Reed_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vaborbactam_Principe2022_reference&quot;,&quot;label&quot;:&quot;Principe_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Vaborbactam — `Vaborbactam_Reed2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="Vaborbactam" model-id="Vaborbactam_Reed2025_reference" status="needs_review" stale="false" population="acutely ill hospitalized patients with various degrees of renal dysfunction including continuous renal replacement therapy" measured-compound="vaborbactam" parameterization="mechanistic" topology="1C"></div>

## Citation
Reed G, Valadez A, Smith BJ, McCreary EK, Kline EG, Neely MN et al. Population pharmacokinetics of meropenem-vaborbactam in acutely ill hospitalized patients with various degrees of renal dysfunction including continuous renal replacement therapy. Antimicrobial agents and chemotherapy 69(7):e0010825 (2025).
  ·  DOI: [10.1128/aac.00108-25](https://doi.org/10.1128/aac.00108-25)

## Population and dosing

**Population:** acutely ill hospitalized patients with various degrees of renal dysfunction including continuous renal replacement therapy · condition renal dysfunction · age group adult · n = 18.

**Dosing:** 1000, 2000, 4000 mg, iv, multiple, every 8 h.

**Dosed compound ≠ measured compound:** dosed meropenem-vaborbactam, measured vaborbactam.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K12 (h−1) | k12 | 1.45 | h−1 |
| K20 (h−1) | ki0 | 0.59 | h−1 |
| K23 (h−1) | kcomp | 22.2 | h−1 |
| K31 (h−1) | k31 | 4.31 | h−1 |
| Vd (L): | V | 24.3 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Extracted — vaborbactam: k12 1.45 h−1, ki0 0.59 h−1, kcomp 22.2 h−1, k31 4.31 h−1, V 24.3 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has vaborbactam, the second reading meropenem, vaborbactam; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K12 (h−1) | `Q301` · k12 | 1.45 | h−1 | 0.0004028 | 1/s | 1/h | exact (1) | T2:row4:col1, T2:row4:col2, T2:row12:col1, T2:row12:col2 |
| K20 (h−1) | `Q373` · ki0 | 0.59 | h−1 | 0.0001639 | 1/s | 1/h | exact (1) | T2:row5:col1, T2:row5:col2, T2:row13:col1, T2:row13:col2 |
| K23 (h−1) | `Q48` · kcomp | 22.2 | h−1 | 0.006167 | 1/s | 1/h | exact (1) | T2:row6:col1, T2:row6:col2, T2:row14:col1, T2:row14:col2 |
| K31 (h−1) | `Q304` · k31 | 4.31 | h−1 | 0.001197 | 1/s | 1/h | exact (1) | T2:row7:col1, T2:row7:col2, T2:row15:col1, T2:row15:col2 |
| Vd (L): | `Q61` · V | 24.3 | L | 0.0243 | m3 | L | llm_confirmed (0.6) | T2:row8:col1, T2:row8:col2, T2:row16:col1, T2:row16:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CLnon-CRRT (L/h):' — extend the ontology if this is a real PK parameter (source ['T2:row2:col1', 'T2:row2:col2', 'T2:row10:col1', 'T2:row10:col2'])
- unit_dimension_unknown: 'weighted' (V)
- dropped value-less row: 'CLnon-CRRT in L/h'
- dropped value-less row: 'V / 80 kg'
- dropped value-less row: 'K20'
- dropped value-less row: 'intercompartmental transfer rates'
- implicit units: 'Vd (L):' → L (from the paper text: "TABLE 2 caption states: 'weight normalized volume of distribution in L (V / 80 kg)'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vaborbactam
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T2:row2:col3 = '10.4%'
- unparsed cell T2:row3:col3 = '19.2%'
- unparsed cell T2:row4:col3 = '10.9%'
- unparsed cell T2:row5:col3 = '11.8%'
- unparsed cell T2:row6:col3 = '9.9%'
- unparsed cell T2:row7:col3 = '24.6%'
- unparsed cell T2:row8:col3 = '9.1%'
- unparsed cell T2:row10:col3 = '10.2%'
- unparsed cell T2:row11:col3 = '12.0%'
- unparsed cell T2:row12:col3 = '20.0%'
- unparsed cell T2:row13:col3 = '13.5%'
- unparsed cell T2:row14:col3 = '22.0%'
- unparsed cell T2:row15:col3 = '27.7%'
- unparsed cell T2:row16:col3 = '9.1%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clnon-crrt (l/h):]` |  | 6.64 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | vaborbactam | meropenem, vaborbactam | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['T2:row4:col1', 'T2:row4:col2', 'T2:row12:col1', 'T2:row12:col2'] |
| C5_dimension_Q304 | pass | 1 / [time] |  | ['T2:row7:col1', 'T2:row7:col2', 'T2:row15:col1', 'T2:row15:col2'] |
| C5_dimension_Q373 | pass | 1 / [time] |  | ['T2:row5:col1', 'T2:row5:col2', 'T2:row13:col1', 'T2:row13:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['T2:row6:col1', 'T2:row6:col2', 'T2:row14:col1', 'T2:row14:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T2:row8:col1', 'T2:row8:col2', 'T2:row16:col1', 'T2:row16:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 24.3 L | ['T2:row8:col1', 'T2:row8:col2', 'T2:row16:col1', 'T2:row16:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvaborbactam%5D%20Vaborbactam_Reed2025_reference&body=Drug%3A%20vaborbactam%0ARecord%3A%20Vaborbactam_Reed2025_reference%0APaper%3A%20Reed_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vaborbactam/Vaborbactam_Reed2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:49 UTC</sub>
