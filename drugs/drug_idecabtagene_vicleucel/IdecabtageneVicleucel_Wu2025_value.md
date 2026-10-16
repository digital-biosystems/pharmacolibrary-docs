<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;idecabtagene vicleucel&quot;,&quot;href&quot;:&quot;drugs/drug_idecabtagene_vicleucel/&quot;},{&quot;label&quot;:&quot;Wu_2025 \u00b7 value&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# idecabtagene vicleucel — `IdecabtageneVicleucel_Wu2025_value`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has idecabtagene_vicleucel, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Wu F et al., Population Cellular Kinetics of Idecabt…, Clinical pharmacokinetics (2025)
  ·  DOI: [10.1007/s40262-025-01531-2](https://doi.org/10.1007/s40262-025-01531-2)

<div class="pk-model-meta" hidden drug="idecabtagene vicleucel" model-id="IdecabtageneVicleucel_Wu2025_value" status="rejected" stale="false" population="patients with triple-class-exposed relapsed/refractory multiple myeloma" measured-compound="idecabtagene_vicleucel" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlagpop (day) | `Q83` · tlag | 1.94 | day | 167616.0 | [d] | not captured | llm (0.6) | Tab1:row4:col1 | — | 0.0866 (None% RSE) |
| Tmaxpop (day) | `Q56` · tmax | 8.65 | day | 747360.0 | [d] | not captured | llm (0.6) | Tab1:row5:col1 | — | 0.255 (None% RSE) |
| Vmaxpop (× 103 copies/μg/day) | `Q66` · Vmax | 86.5 | not captured | not captured | not captured | not captured | llm (0.6) | Tab1:row6:col1 | — | 0.298 (None% RSE) |
| Kmpop (× 103 copies/μg) | `Q372` · kmp | 67.7 | not captured | not captured | not captured | not captured | llm (0.6) | Tab1:row7:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'E0pop' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row3:col1'])
- dropped unlinked row (NIL): 'δEpop (1/day)' — extend the ontology if this is a real PK parameter (source ['Tab1:row9:col1'])
- dropped unlinked row (NIL): 'fADApop (unitless)' — extend the ontology if this is a real PK parameter (source ['Tab1:row11:col1'])
- dropped PD-category row 'βE0,FORMU' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row12:col1'])
- dropped unlinked row (NIL): 'βE0,logtCRCLBL' — extend the ontology if this is a real PK parameter (source ['Tab1:row13:col1'])
- dropped duplicate Q56 ('βTmax,logtPRSB', value '0.0525') — already have one for this compound
- dropped duplicate Q66 ('βVmax,FORMU', value '-0.144') — already have one for this compound
- dropped duplicate Q66 ('βVmax,logtDOSEA', value '0.758') — already have one for this compound
- dropped unlinked row (NIL): 'βδE,BADA' — extend the ontology if this is a real PK parameter (source ['Tab1:row17:col1'])
- dropped unlinked row (NIL): 'βδM,logtPRSB' — extend the ontology if this is a real PK parameter (source ['Tab1:row18:col1'])
- routed 'ωδE' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ωδM' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q56 ('corrr,Tmax', value '-0.551') — already have one for this compound
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['Tab1:row32:col1'])
- implicit units: 'Vmaxpop (× 103 copies/μg/day)' — the LLM proposed 'copies/μg/day', whose dimension does not fit Q66; left unset
- implicit units: 'Kmpop (× 103 copies/μg)' — the LLM proposed 'copies/μg', whose dimension does not fit Q372; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=idecabtagene_vicleucel
- population split: 'value' subgroup of Wu_2025 (paper reports 2 populations: stochastic approximation, value)
- molar mass: none found for 'idecabtagene_vicleucel' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

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
| `gpt-oss-120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[kmpop]` | 67.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlagpop]` | 1.94 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlagpop]` | not captured | 1.94 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmaxpop]` | 8.65 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmaxpop]` | not captured | 8.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmaxpop]` | 86.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmaxpop]` | not captured | 86.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[δepop]` | not captured | 0.111 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | idecabtagene_vicleucel | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | idecabtagene_vicleucel | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Tab1:row5:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab1:row4:col1'] |
| C5_unit_missing_Q372 | fail | 1 / [time] | not captured | not captured | not captured | ['Tab1:row7:col1'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row6:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_idecabtagene_vicleucel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wu_2025` / `Wu_2025::value`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 20:45 UTC</sub>
