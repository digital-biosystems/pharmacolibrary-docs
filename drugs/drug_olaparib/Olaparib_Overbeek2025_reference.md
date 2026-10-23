<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;olaparib&quot;,&quot;href&quot;:&quot;drugs/drug_olaparib/&quot;},{&quot;label&quot;:&quot;Overbeek_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Olaparib_Velev2021_reference&quot;,&quot;label&quot;:&quot;Velev_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olaparib/Olaparib_Velev2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# olaparib — `Olaparib_Overbeek2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance; cLint has no unit.

<div class="pk-model-meta" hidden drug="olaparib" model-id="Olaparib_Overbeek2025_reference" status="needs_review" stale="false" population="healthy volunteers and patients" measured-compound="olaparib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Overbeek JK, van Erp NP, Burger DM, den Broeder AA, Koolen SLW, Huitema ADR et al. Population Pharmacokinetics of Cobicistat and its Effect on the Pharmacokinetics of the Anticancer Drug Olaparib. Clinical pharmacokinetics 64(3):425–435 (2025).
  ·  DOI: [10.1007/s40262-025-01480-w](https://doi.org/10.1007/s40262-025-01480-w)

## Population and dosing

**Population:** healthy volunteers and patients · condition healthy, rheumatoid arthritis, cancer, or HIV infection · age group adult · n = ? 66 (cobicistat) or 12 (olaparib).

**Dosing:** 100, 150, 300 mg, oral, multiple, every 12 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc (L) | V1 | 8.7 | L |
| CLint (L.h−1.Lliver−1) | CLint | 6.7 | L.h−1.Lliver−1 |
| Ka capsule pop | kabs | 0.71 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance; cLint has no unit.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CLint), so that value has no SI equivalent. Extracted — cobicistat: V1 8.7 L, CLint 6.7 L.h−1.Lliver−1; olaparib: kabs 0.71 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has olaparib, the second reading cobicistat, olaparib; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc (L) | `Q63` · V1 | 8.7 | L | 0.0087 | m3 | l | exact (1) | Tab2:row2:col1, Tab2:row2:col2, Overbeek_2025_table_3:row1:col1, Overbeek_2025_table_3:row1:col2 |
| CLint (L.h−1.Lliver−1) | `Q3` · CLint | 6.7 | L.h−1.Lliver−1 |  |  | 1/(h·l·iver) | exact (1) | Tab2:row3:col1, Tab2:row3:col2 |
| Ka capsule pop | `Q49` · kabs | 0.71 | h−1 | 0.0001972 | 1/s | 1/h | review_gapfill (0.7) | Sterlé_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Population parameters' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col2', 'Tab2:row1:col3', 'Overbeek_2025_table_3:row0:col2', 'Overbeek_2025_table_3:row0:col3'])
- unit_dimension_unknown: 'L.h−1.Lliver−1' (CLint)
- dropped duplicate Q3 ('CLint-olaparib', value '16.3') — already have one for this compound
- routed 'Between-subject variability' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q63 ('Vc', value '16.6') — already have one for this compound
- dropped duplicate Q3 ('CLint', value '12.3') — already have one for this compound
- dropped unlinked row (NIL): 'Additive (mg/L)' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col1', 'Tab2:row9:col2', 'Tab2:row9:col3', 'Overbeek_2025_table_3:row10:col1', 'Overbeek_2025_table_3:row10:col2', 'Overbeek_2025_table_3:row10:col3'])
- dropped duplicate Q3 ('Clint (L.h−1.Lliver−1)', value '14.4') — already have one for this compound
- dropped unlinked row (NIL): 'F1cobicistat' — extend the ontology if this is a real PK parameter (source ['Overbeek_2025_table_3:row3:col1', 'Overbeek_2025_table_3:row3:col2'])
- dropped duplicate Q3 ('CLint-cobicistat', value '6.5') — already have one for this compound
- dropped duplicate Q3 ('CLint-without cobicistat', value '17.4') — already have one for this compound
- dropped duplicate Q3 ('CLint-with cobicistat', value '13.9') — already have one for this compound
- dropped value-less row: 'RSE'
- dropped value-less row: 'ktr'
- dropped value-less row: 'Vc'
- dropped value-less row: 'CLint'
- dropped value-less row: 'Lliver'
- dropped value-less row: 'CLint-olaparib'
- implicit units: 'CLint (L.h−1.Lliver−1)' — the LLM proposed 'L/h/Lliver', whose dimension does not fit Q3; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=olaparib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Sterlé_2024's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row1:col1 = 'ktr (h−1)'
- unparsed cell Overbeek_2025_table_3:row0:col1 = 'ktr (h−1)'
- companion parameter table 3 transcribed (28 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['cobicistat', 'olaparib', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[f1cobicistat]` |  | 6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka capsule pop]` | 0.71 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc].parameter_id` | Q63 | Q61 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | olaparib | cobicistat, olaparib | mismatch |

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
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Sterlé_2024:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Overbeek_2025_table_3:row1:col1', 'Overbeek_2025_table_3:row1:col2'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] | L.h−1.Lliver−1 | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.7 L | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Overbeek_2025_table_3:row1:col1', 'Overbeek_2025_table_3:row1:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bolaparib%5D%20Olaparib_Overbeek2025_reference&body=Drug%3A%20olaparib%0ARecord%3A%20Olaparib_Overbeek2025_reference%0APaper%3A%20Overbeek_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_olaparib/Olaparib_Overbeek2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:16 UTC</sub>
