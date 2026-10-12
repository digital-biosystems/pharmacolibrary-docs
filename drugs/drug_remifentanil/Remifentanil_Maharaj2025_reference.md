<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;remifentanil&quot;,&quot;href&quot;:&quot;drugs/drug_remifentanil/&quot;},{&quot;label&quot;:&quot;Maharaj_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remifentanil — `Remifentanil_Maharaj2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — remifentanil: E 0.535, CL 1 L/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has remifentanil, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Maharaj AR et al., Opioid use in treated and untreated obs…, British journal of anaesthe… (2025)
  ·  DOI: [10.1016/j.bja.2024.10.042](https://doi.org/10.1016/j.bja.2024.10.042)

<div class="pk-model-meta" hidden drug="remifentanil" model-id="Remifentanil_Maharaj2025_reference" status="needs_review" stale="false" population="adults with and without obstructive sleep apnoea" measured-compound="remifentanil" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| q g | `Q900` · equation variable | 2.38 | not captured | not captured | not captured | not captured | llm (0.6) | tab_2:row5:col3, tab_2:row5:col7, tab_2:row5:col9 | — | not captured |
| e | `Q38` · E | 0.535 | not captured | not captured | not captured | not captured | exact (1.0) | tab_2:row6:col8, tab_2:row6:col10 | — | 2 (None% RSE) |
| N CL (L min ¡1 ) | `Q22` · CL | 1.0 | L/min | 1.6666666666666667e-05 | L/h | not captured | llm_confirmed (0.6) | Maharaj_2025_table_2:row0:col6, Maharaj_2025_table_2:row0:col8 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'u LOGIT(EMAX)' routed out of structural estimates ('Random effects -interindividual variability')
- table section iiv: 'u EC50' routed out of structural estimates ('Random effects -interindividual variability')
- table section iiv: 'e' routed out of structural estimates ('Random effects -interindividual variability')
- table section residual_error: 'ԑ 2 proportional' routed out of structural estimates ('Random effects -residual variability')
- table section residual_error: 'e' routed out of structural estimates ('Random effects -residual variability')
- column 'end-expired co 2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'analgesia/thermal limit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'q LOGITðEMAXÞ' → Q344 (logit_intercept, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row3:col2', 'tab_2:row3:col4', 'tab_2:row3:col6'])
- dropped PD-category row 'q EC50 [ng mL À1 ]' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row4:col1', 'tab_2:row4:col8'])
- unit_dimension_unknown: 'L min ¡1' (CL)
- dropped value-less row: 'Vss (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'CL KG (L min ¡1 kg ¡1 )' (captured trailing unit 'L min ¡1 kg ¡1' for child rows)
- dropped value-less row: 'Vss KG (L kg ¡1 )' (captured trailing unit 'L kg ¡1' for child rows)
- dropped value-less row: 'T 1/2,a (min) T 1/2,b (min)' (captured trailing unit 'min' for child rows)
- implicit units: 'N CL (L min ¡1 )' → L/min (from the paper text: "The parameter table explicitly lists the unit for q CL as 'L min À1' in the column header 'Estimate (RSE%) [CV]* Structu")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=remifentanil
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_2:row4:col6 = 'e10.3 (20)'
- unparsed cell tab_2:row9:col3 = '0.281 (21) [57]'
- unparsed cell tab_2:row9:col6 = '0.251 (35) [53]'
- unparsed cell tab_2:row10:col8 = '0.226 (29) [50]'
- unparsed cell tab_2:row12:col7 = 'ԑ 2 proportional'
- unparsed cell tab_2:row13:col4 = 'ԑ 2 additive'
- transposed table Maharaj_2025_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Maharaj_2025_table_2:row0:col2 = '20 2.45 (2.11e3.00) 28.5 (22.8e35.9) 0.0346 (0.0306e0.0424) 0.419 (0.349e0.535) 4.1 (3.8e5.4) 17.3 (16.9e17.8)'
- unparsed cell Maharaj_2025_table_2:row0:col3 = '24.3 (19.7e33.7) 0.0268 (0.0231e0.0311) 0.281 (0.249e0.389) 3.8 (3.0e4.8) 17.3 (16.6e17.6)'
- unparsed cell Maharaj_2025_table_2:row0:col4 = '21 2.59 (2.35e2.90) 26.6 (23.2e30.9) 0.0262 (0.0236e0.0317) 0.29 (0.227e0.348)'
- unparsed cell Maharaj_2025_table_2:row0:col7 = '0.2 0.4 0.6 0.8'
- unparsed cell Maharaj_2025_table_2:row0:col10 = 'concentration (ngml -1 )'
- unparsed cell Maharaj_2025_table_2:row1:col1 = '74 2.50 (1.98e2.99) 26.1 (22e34.6)'
- unparsed cell Maharaj_2025_table_2:row1:col4 = '3.9 (3.4e4.6) 16.9 (16.6e17.5)'
- unparsed cell Maharaj_2025_table_2:row2:col1 = '0.0292 (0.0241e0.0342) 0.33 (0.253e0.411)'
- unparsed cell Maharaj_2025_table_2:row3:col1 = '3.9 (3.3e4.9) 17.1 (16.6e17.6)'
- companion parameter table 2 transcribed (7 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[n cl]` | 1.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q g].parameter_id` | Q900 | Q30 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | remifentanil | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | remifentanil | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Maharaj_2025_table_2:row0:col6', 'Maharaj_2025_table_2:row0:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.0 | not captured | not captured | ['Maharaj_2025_table_2:row0:col6', 'Maharaj_2025_table_2:row0:col8'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 60 L/h | not captured | not captured | ['Maharaj_2025_table_2:row0:col6', 'Maharaj_2025_table_2:row0:col8'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_remifentanil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Maharaj_2025` / `Maharaj_2025::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:29 UTC</sub>
