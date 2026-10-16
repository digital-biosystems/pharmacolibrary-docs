<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab emtansine&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/&quot;},{&quot;label&quot;:&quot;Betts_2020 \u00b7 t_dm1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TrastuzumabEmtansine_Chen2017_reference&quot;,&quot;label&quot;:&quot;Chen_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Gao2026_reference&quot;,&quot;label&quot;:&quot;Gao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Gao2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Gupta2012_reference&quot;,&quot;label&quot;:&quot;Gupta_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Gupta2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Betts2020_mouseb&quot;,&quot;label&quot;:&quot;Betts_2020_mouseb&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab emtansine — `TrastuzumabEmtansine_Betts2020_t_dm1`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (KD), so that value has no SI equivalent. Extracted — trastuzumab emtansine: V1 37 mL/kg, CL 7.2 mL/day/kg, V2 30 mL/kg, Q 12 mL/day/kg, KD 0.1 nM, kel 32.6 day−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trastuzumab_emtansine, the second reading T-DM1; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Betts A et al., Use of translational modeling and simul…, Journal of pharmacokinetics… (2020)
  ·  DOI: [10.1007/s10928-020-09702-3](https://doi.org/10.1007/s10928-020-09702-3)

<div class="pk-model-meta" hidden drug="trastuzumab emtansine" model-id="TrastuzumabEmtansine_Betts2020_t_dm1" status="rejected" stale="false" population="adults with cancer" measured-compound="trastuzumab_emtansine" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc (mL/kg) | `Q63` · V1 | 37 | mL/kg | 0.00259 | [ml] / [kg] | not captured | exact (1.0) | Betts_2020_table_4:row0:col2 | — | not captured |
| CL (mL/day/kg) | `Q22` · CL | 7.2 | mL/day/kg | 5.8333333333333335e-09 | [ml] / [[d] · [kg]] | not captured | exact (1.0) | Betts_2020_table_4:row1:col2 | — | not captured |
| Vp (mL/kg) | `Q64` · V2 | 30 | mL/kg | 0.0021 | [ml] / [kg] | not captured | exact (1.0) | Betts_2020_table_4:row2:col2 | — | not captured |
| Q (mL/day/kg) | `Q30` · Q | 12 | mL/day/kg | 9.722222222222221e-09 | [ml] / [[d] · [kg]] | not captured | exact (1.0) | Betts_2020_table_4:row3:col2 | — | not captured |
| aKD (nM) | `Q331` · KD | 0.1 | nM | not captured | [nM] | not captured | llm (0.6) | Betts_2020_table_4:row4:col2 | — | not captured |
| kelADC-ECD complex (day−1) | `Q47` · kel | 32.6 | day−1 | 0.0003773148148148148 | [1] / [d] | not captured | llm (0.6) | Betts_2020_table_4:row7:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 't-dm1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'aKD (nM)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'bkshed HER2-ECD (nM day−1)' — extend the ontology if this is a real PK parameter (source ['Betts_2020_table_4:row5:col2'])
- dropped PD-category row 'kdeg HER2-ECD (day−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Betts_2020_table_4:row6:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trastuzumab_emtansine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 't-dm1' subgroup of Betts_2020 (paper reports 9 populations: 144580pdx (breast), 24312pdx (breast), 37622pdx (nsclc), bt474clx (breast), ga-3109pdx (gastric), jimt-1clx (breast), mouseb, n87clx (gastric), t-dm1)
- molar mass: none found for 'trastuzumab_emtansine' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab2:row8:col3 = '1 (-)'
- unparsed cell Tab2:row8:col4 = '1 (-)'
- unparsed cell Tab2:row8:col5 = '2.6 (-)'
- unparsed cell Tab2:row10:col3 = '0.271 (-)'
- unparsed cell Tab2:row10:col5 = '0.373 (-)'
- unparsed cell Tab2:row10:col6 = '0.372 (-)'
- unparsed cell Tab2:row10:col7 = '0.359 (-)'
- unparsed cell Tab2:row10:col8 = '0.25 (-)'
- unparsed cell Tab2:row11:col3 = '0.666 (-)'
- unparsed cell Tab2:row11:col5 = '0.0441 (-)'
- unparsed cell Tab2:row11:col6 = '0.789 (-)'
- unparsed cell Tab2:row11:col7 = '1.3 (-)'
- unparsed cell Tab2:row11:col8 = '0.316 (-)'
- companion parameter table 1 transcribed (8 record(s))
- unparsed cell Betts_2020_table_4:row4:col1 = 'HER2 binding affinity'
- unparsed cell Betts_2020_table_4:row5:col1 = 'Rate constant for HER2 shedding'
- unparsed cell Betts_2020_table_4:row6:col1 = 'Rate constant for HER2 degradation'
- unparsed cell Betts_2020_table_4:row7:col1 = 'Elimination rate constant of the HER2-ADC complex'
- companion parameter table 4 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.7 (7/10 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['t-dm1', 'her2 ecd', 'binding'], ['pf-06804103', 'her2 ecd', 'binding']] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | trastuzumab_emtansine | T-DM1 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trastuzumab_emtansine | T-DM1 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Betts_2020_table_4:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Betts_2020_table_4:row3:col2'] |
| C5_dimension_Q331 | fail | [length] | nM | not captured | not captured | ['Betts_2020_table_4:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Betts_2020_table_4:row7:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Betts_2020_table_4:row0:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Betts_2020_table_4:row2:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.2 | not captured | not captured | ['Betts_2020_table_4:row1:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.021 L/h | not captured | not captured | ['Betts_2020_table_4:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.59 L | not captured | not captured | ['Betts_2020_table_4:row0:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.1 L | not captured | not captured | ['Betts_2020_table_4:row2:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_trastuzumab_emtansine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Betts_2020` / `Betts_2020::t_dm1`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:47 UTC</sub>
