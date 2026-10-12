<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;alglucosidase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_alglucosidase_alfa/&quot;},{&quot;label&quot;:&quot;Barzel_2026 \u00b7 troy_et_al_2020_26_serum_csf&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlglucosidaseAlfa_Tiraboschi2023_reference&quot;,&quot;label&quot;:&quot;Tiraboschi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alglucosidase_alfa/AlglucosidaseAlfa_Tiraboschi2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alglucosidase alfa — `AlglucosidaseAlfa_Barzel2026_troy_et_al_2020_26_serum_csf`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.15). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has alglucosidase_alfa, the second reading alglucosidase alfa; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:35:53.838011+00:00) predates the upstream re-run (2026-10-05 10:36:33.622019+00:00). Current validate status: `needs_review`.

## Citation
Barzel I et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-026-01636-2](https://doi.org/10.1007/s40262-026-01636-2)

## Model component
<dbs-pgx drug="alglucosidase alfa" model-id="AlglucosidaseAlfa_Barzel2026_troy_et_al_2020_26_serum_csf" status="needs_review" stale="true" population="patients with lysosomal storage diseases" measured-compound="alglucosidase_alfa" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL | Q22 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Fixed effect parameters' — extend the ontology if this is a real PK parameter (source ['Barzel_2026_table_3:row0:col7'])
- dropped unlinked row (NIL): 'Inter-individual variability (CV%)' — extend the ontology if this is a real PK parameter (source ['Barzel_2026_table_3:row23:col7'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alglucosidase_alfa
- bound model equation to Q22 (CL): CL = 1.97 * (TBW/20)^0.587Q = 0.931 * (TBW/20)^0.587Vc =1.52 * (TBW/20)^0.483Vp = 3.11 * (TBW/20)^0.483
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL'; equation kept verbatim
- population split: 'troy et al., 2020 [26]serum/csf*' subgroup of Barzel_2026 (paper reports 5 populations: gras-colomer et al., 2021 [25]plasma/leukocyteθ, qi et al., 2018 [23]plasma, tiraboschi et al., 2023 [22]plasma, troy et al., 2020 [26]serum/csf*, tuffal et al., 2023 [21]plasma)
- molar mass: none found for 'alglucosidase_alfa' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Tab2:row2:col4 = '2-compartment'
- unparsed cell Tab2:row2:col8 = 'TBW on CL and Q (0.587, [0.444; 0.730]), Vc and Vp (0.483, [0315; 0.651])'
- unparsed cell Tab2:row5:col3 = 'NONMEM v7.4.1'
- unparsed cell Tab2:row5:col4 = '3-compartment'
- unparsed cell Tab2:row6:col3 = 'NONMEM v7.4.1'
- unparsed cell Tab2:row6:col4 = '3-compartment'
- unparsed cell Tab2:row6:col7 = 'Forward inclusion (alpha risk: 5%) and backward elimination (alpha risk: 0.1%)'
- unparsed cell Tab2:row6:col8 = 'Time-varying TBW on CL (0.896, [0.754; 1.04]), V1 (0.661, [0.578; 0.7444]) and Vm (0.463, [0.352;0.574])'
- unparsed cell Tab2:row7:col3 = 'NONMEM v7.3'
- unparsed cell Tab2:row7:col4 = 'CNS: 2-compartmentSerum: 1-compartment'
- unparsed cell Barzel_2026_table_3:row0:col4 = '3.85 × 10−2'
- unparsed cell Barzel_2026_table_3:row1:col3 = '1.10 × 10−2'
- unparsed cell Barzel_2026_table_3:row41:col3 = 'Plasma: 29Leukocyte: 11'
- unparsed cell Barzel_2026_table_3:row41:col6 = 'CSF: 98.1Serum: 67.5'
- companion parameter table 3 transcribed (62 record(s))
- LLM selected parameter table(s) 3
- captured model equation CL = 1.97 * (TBW/20)^0.587Q = 0.931 * (TBW/20)^0.587Vc =1.52 * (TBW/20)^0.483Vp = 3.11 * (TBW/20)^0.483

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (2/6 fields) | 4 |
| `gpt-oss:120b` | not confirmed | 0.15 (3/20 fields) | 17 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | alglucosidase_alfa | alglucosidase alfa | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | alglucosidase_alfa | alglucosidase alfa | mismatch |
| `gpt-oss:120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss:120b` | `parameters[cendo]` | not captured | 0.93 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | not captured | 0.94 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21]` | not captured | 0.11 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k]` | not captured | 0.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[km]` | not captured | 0.451 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ktrans]` | not captured | 0.581 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q/q2]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q/q2]` | not captured | 0.931 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q3]` | not captured | 1.87 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | not captured | 86.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3]` | not captured | 1.31 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | not captured | 4.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc/v1]` | not captured | 1.52 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vm]` | not captured | 9.82 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp/v2]` | not captured | 3.11 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_alglucosidase_alfa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Barzel_2026` / `Barzel_2026::troy_et_al_2020_26_serum_csf`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 10:36 UTC</sub>
