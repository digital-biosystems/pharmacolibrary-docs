<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;idecabtagene vicleucel&quot;,&quot;href&quot;:&quot;drugs/drug_idecabtagene_vicleucel/&quot;},{&quot;label&quot;:&quot;Wu_2025 \u00b7 stochastic_approximation&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# idecabtagene vicleucel — `IdecabtageneVicleucel_Wu2025_stochastic_approximation`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume; vmax and kmp have no unit.

<div class="pk-model-meta" hidden drug="idecabtagene vicleucel" model-id="IdecabtageneVicleucel_Wu2025_stochastic_approximation" status="needs_review" stale="false" population="patients with triple-class-exposed relapsed/refractory multiple myeloma" measured-compound="idecabtagene_vicleucel" parameterization="mechanistic" topology="1C"></div>

## Citation
Wu F, Zhou J, Zheng X, Masilamani M, Cheng Y, Caia A et al. Population Cellular Kinetics of Idecabtagene Vicleucel in Patients with Triple-Class-Exposed Relapsed/Refractory Multiple Myeloma. Clinical pharmacokinetics 64(7):1119–1132 (2025).
  ·  DOI: [10.1007/s40262-025-01531-2](https://doi.org/10.1007/s40262-025-01531-2)

## Population and dosing

**Population:** patients with triple-class-exposed relapsed/refractory multiple myeloma · age group adult · n = .population: patients with triple-class-exposed relapsed/refractory multiple myeloma, "age_class": "adult", "n_subjects": 225, "condition": "multiple myeloma", "species": "human", "compounds": ["idecabtagene_vicleucel | parent | yes | yes | yes"], "links": []}.

**Dosing:** 150, 450 × 106 CAR+ T cells, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Tlagpop (day) | tlag | 0.0374 | day | 0.0139 (None% RSE) |
| Tmaxpop (day) | tmax | 0.178 | day | 0.0149 (None% RSE) |
| Vmaxpop (× 103 copies/μg/day) | Vmax | 3.16 |  | 0.0279 (None% RSE) |
| Kmpop (× 103 copies/μg) | kmp | 2.79 |  |  |
| rpop (1/day) | kel | 12.7 | 1/day |  |
| δMpop (1/day) | Css_ratio | 6.89 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.133). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; vmax and kmp have no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. Extracted — idecabtagene vicleucel: tlag 0.0374 day, tmax 0.178 day, Vmax 3.16, kmp 2.79, kel 12.7 1/day, Css_ratio 6.89.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has idecabtagene_vicleucel, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Tlagpop (day) | `Q83` · tlag | 0.0374 | day | 3231 | s | d | llm (0.6) | Tab1:row4:col2, Tab1:row4:col3 | 0.0139 (None% RSE) |
| Tmaxpop (day) | `Q56` · tmax | 0.178 | day | 1.538e+04 | s | d | llm (0.6) | Tab1:row5:col2, Tab1:row5:col3 | 0.0149 (None% RSE) |
| Vmaxpop (× 103 copies/μg/day) | `Q66` · Vmax | 3.16 |  |  |  |  | llm (0.6) | Tab1:row6:col2, Tab1:row6:col3 | 0.0279 (None% RSE) |
| Kmpop (× 103 copies/μg) | `Q372` · kmp | 2.79 |  |  |  |  | llm (0.6) | Tab1:row7:col2, Tab1:row7:col3 |  |
| rpop (1/day) | `Q47` · kel | 12.7 | 1/day | 0.000147 | 1/s | 1/h | llm (0.6) | Tab1:row8:col3 |  |
| δMpop (1/day) | `Q35` · Css_ratio | 6.89 |  |  |  |  | llm (0.6) | Tab1:row10:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'E0pop' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row3:col2', 'Tab1:row3:col3'])
- dropped unlinked row (NIL): 'δEpop (1/day)' — extend the ontology if this is a real PK parameter (source ['Tab1:row9:col2', 'Tab1:row9:col3'])
- dropped unlinked row (NIL): 'fADApop (unitless)' — extend the ontology if this is a real PK parameter (source ['Tab1:row11:col2', 'Tab1:row11:col3'])
- dropped PD-category row 'βE0,FORMU' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row12:col2', 'Tab1:row12:col3'])
- dropped unlinked row (NIL): 'βE0,logtCRCLBL' — extend the ontology if this is a real PK parameter (source ['Tab1:row13:col2', 'Tab1:row13:col3'])
- dropped duplicate Q56 ('βTmax,logtPRSB', value '0.0165') — already have one for this compound
- dropped duplicate Q66 ('βVmax,FORMU', value '0.0628') — already have one for this compound
- dropped duplicate Q66 ('βVmax,logtDOSEA', value '0.193') — already have one for this compound
- dropped unlinked row (NIL): 'βδE,BADA' — extend the ontology if this is a real PK parameter (source ['Tab1:row17:col2', 'Tab1:row17:col3'])
- dropped unlinked row (NIL): 'βδM,logtPRSB' — extend the ontology if this is a real PK parameter (source ['Tab1:row18:col2', 'Tab1:row18:col3'])
- routed 'ωδE' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ωδM' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q56 ('corrr,Tmax', value '0.0682') — already have one for this compound
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['Tab1:row32:col2', 'Tab1:row32:col3'])
- implicit units: 'Vmaxpop (× 103 copies/μg/day)' — the LLM proposed 'copies/μg/day', whose dimension does not fit Q66; left unset
- implicit units: 'Kmpop (× 103 copies/μg)' — the LLM proposed 'copies/μg', whose dimension does not fit Q372; left unset
- implicit units: 'rpop (1/day)' → 1/day (from the paper text: "Table 1 explicitly lists the unit for rpop as '(1/day)'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=idecabtagene_vicleucel
- population split: 'stochastic approximation' subgroup of Wu_2025 (paper reports 2 populations: stochastic approximation, value)
- molar mass: none found for 'idecabtagene_vicleucel' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab1:row8:col1 = '2.81 × 10−4'
- unparsed cell Tab1:row8:col2 = '3.57 × 10−5'
- unparsed cell Tab1:row10:col1 = '5.55 × 10−3'
- unparsed cell Tab1:row10:col2 = '3.83 × 10−4'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.133 (2/15 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[kmpop]` | 2.79 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kmpop]` |  | 2.79 | only_one_extracted |
| `gpt-oss-120b` | `parameters[rpop]` | 12.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlagpop]` | 0.0374 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlagpop]` |  | 0.0374 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmaxpop]` | 0.178 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmaxpop]` |  | 0.178 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmaxpop]` | 3.16 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmaxpop]` |  | 3.16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[δepop]` |  | 0.00471 | only_one_extracted |
| `gpt-oss-120b` | `parameters[δmpop]` | 6.89 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | idecabtagene_vicleucel | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | idecabtagene_vicleucel | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab1:row8:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab1:row5:col2', 'Tab1:row5:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab1:row4:col2', 'Tab1:row4:col3'] |
| C5_unit_missing_Q372 | fail | 1 / [time] |  | ['Tab1:row7:col2', 'Tab1:row7:col3'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 |  | ['Tab1:row6:col2', 'Tab1:row6:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bidecabtagene_vicleucel%5D%20IdecabtageneVicleucel_Wu2025_stochastic_approximation&body=Drug%3A%20idecabtagene_vicleucel%0ARecord%3A%20IdecabtageneVicleucel_Wu2025_stochastic_approximation%0APaper%3A%20Wu_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_idecabtagene_vicleucel/IdecabtageneVicleucel_Wu2025_stochastic_approximation%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 20:45 UTC</sub>
