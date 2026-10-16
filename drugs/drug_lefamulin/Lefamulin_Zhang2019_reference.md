<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;lefamulin&quot;,&quot;href&quot;:&quot;drugs/drug_lefamulin/&quot;},{&quot;label&quot;:&quot;Zhang_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lefamulin — `Lefamulin_Zhang2019_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].value`: this record has 159, the second reading 5.61; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Zhang L et al., Prediction of lefamulin epithelial lini…, The Journal of antimicrobia… (2019)
  ·  DOI: [10.1093/jac/dkz088](https://doi.org/10.1093/jac/dkz088)

<div class="pk-model-meta" hidden drug="lefamulin" model-id="Lefamulin_Zhang2019_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="lefamulin" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 159 | L/h | 4.4166666666666665e-05 | [l] / [h] | not captured | exact (1.0) | dkz088-T2:row3:col1, dkz088-T2:row3:col2 | — | 16.1 (None% RSE) |
| Vc (L) | `Q63` · V1 | 53.1 | L | 0.0531 | [l] | not captured | exact (1.0) | dkz088-T2:row4:col1, dkz088-T2:row4:col2 | — | 13.4 (None% RSE) |
| Vp1 (L) | `Q64` · V2 | 656 | L | 0.656 | [l] | not captured | exact (1.0) | dkz088-T2:row6:col1, dkz088-T2:row6:col2 | — | 24.7 (None% RSE) |
| CLD2 (L/h) | `Q30` · Q | 199 | L/h | 5.5277777777777783e-05 | [l] / [h] | not captured | special_case (0.95) | dkz088-T2:row7:col1, dkz088-T2:row7:col2 | — | 23.5 (None% RSE) |
| Vp2 (L) | `Q77` · V3 | 259 | L | 0.259 | [l] | not captured | exact (1.0) | dkz088-T2:row8:col1, dkz088-T2:row8:col2 | — | not captured |
| Ka (1/h) | `Q49` · kabs | 1.20 | not captured | not captured | not captured | not captured | exact (1.0) | dkz088-T2:row9:col1, dkz088-T2:row9:col2 | — | 108.2 (None% RSE) |
| proportion of Ka when fed | `Q95` · t1/2ka | 0.04 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | dkz088-T2:row13:col1, dkz088-T2:row13:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (L/h)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Vc (L)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'CLD1 (L/h)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Vp1 (L)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'CLD2 (L/h)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Ka (1/h)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Ka2 (1/h)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Ftot' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'FS' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Kin (1/h)' routed out of structural estimates ('Magnitude of IIV')
- table section iiv: 'Kout (1/h)' routed out of structural estimates ('Magnitude of IIV')
- dropped unlinked row (NIL): 'CLD1 (L/h)' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row5:col1', 'dkz088-T2:row5:col2'])
- dropped duplicate Q49 ('Ka2 (1/h)', value '2.12') — already have one for this compound
- dropped unlinked row (NIL): 'Ftot' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row11:col1', 'dkz088-T2:row11:col2'])
- dropped unlinked row (NIL): 'FS' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row12:col1', 'dkz088-T2:row12:col2'])
- dropped unlinked row (NIL): 'proportion of Ka2 when fed' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row14:col1', 'dkz088-T2:row14:col2'])
- dropped unlinked row (NIL): 'proportion of Ftot when fed' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row15:col1', 'dkz088-T2:row15:col2'])
- dropped PD-category row 'Kin (1/h)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkz088-T2:row17:col1', 'dkz088-T2:row17:col2'])
- dropped PD-category row 'Kout (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkz088-T2:row18:col1', 'dkz088-T2:row18:col2'])
- dropped unlinked row (NIL): 'Fumin' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row20:col1'])
- dropped unlinked row (NIL): 'Fumax' — extend the ontology if this is a real PK parameter (source ['dkz088-T2:row21:col1'])
- dropped PD-category row 'Cup50 (mg/L)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkz088-T2:row22:col1'])
- routed 'plasma proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'ELF proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q63 (Vc (L)); Q64 (Vp1 (L)); Q30 (CLD2 (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lefamulin
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].value` | 159 | 5.61 | mismatch |
| `gpt-oss-120b` | `parameters[cld2].value` | 199 | 16.1 | mismatch |
| `gpt-oss-120b` | `parameters[fs]` | not captured | 8.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ftot]` | not captured | 7.99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fumin]` | not captured | 0.0997 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].value` | 1.20 | 11.6 | mismatch |
| `gpt-oss-120b` | `parameters[proportion of ka when fed]` | 0.04 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc].value` | 53.1 | 9.66 | mismatch |
| `gpt-oss-120b` | `parameters[vp1].value` | 656 | 27.4 | mismatch |
| `gpt-oss-120b` | `parameters[vp2].value` | 259 | 8.17 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['dkz088-T2:row3:col1', 'dkz088-T2:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['dkz088-T2:row7:col1', 'dkz088-T2:row7:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkz088-T2:row4:col1', 'dkz088-T2:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkz088-T2:row6:col1', 'dkz088-T2:row6:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkz088-T2:row8:col1', 'dkz088-T2:row8:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['dkz088-T2:row9:col1', 'dkz088-T2:row9:col2'] |
| C5_unit_missing_Q95 | fail | [time] | not captured | not captured | not captured | ['dkz088-T2:row13:col1', 'dkz088-T2:row13:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 159.0 | not captured | not captured | ['dkz088-T2:row3:col1', 'dkz088-T2:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 159 L/h | not captured | not captured | ['dkz088-T2:row3:col1', 'dkz088-T2:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 53.1 L | not captured | not captured | ['dkz088-T2:row4:col1', 'dkz088-T2:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 656 L | not captured | not captured | ['dkz088-T2:row6:col1', 'dkz088-T2:row6:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_lefamulin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhang_2019` / `Zhang_2019::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-13 12:03 UTC</sub>
