<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;temoporfin&quot;,&quot;href&quot;:&quot;drugs/drug_temoporfin/&quot;},{&quot;label&quot;:&quot;Jones_2003 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# temoporfin — `Temoporfin_Jones2003_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.462). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The hepatic blood flow parameter for temoporfin is defined with the time unit hours instead of a flow rate.**

The record defines hepatic blood flow as 97.3 h, which is dimensionally inconsistent with the required flow unit. This mismatch prevented the software from converting the value to a standard unit. Consequently, the structural parameter could not be validated, resulting in rejection of the model record. Extracted — m-THPC (temoporfin): t1/2α 0.46 h, t1/2z 6.91 h, t1/2γ 82.5 h, MRT 32.5 h, QH 97.3 h; 14C m-THPC (temoporfin): V 32 ml kg−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has m-THPC (temoporfin), the second reading m-THPC; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `m-THPC (temoporfin)`, measured `14C m-THPC (temoporfin)`.

## Citation
Jones HJ et al., Photodynamic therapy effect of m-THPC (…, British journal of cancer (2003)
  ·  DOI: [10.1038/sj.bjc.6601101](https://doi.org/10.1038/sj.bjc.6601101)

<div class="pk-model-meta" hidden drug="temoporfin" model-id="Temoporfin_Jones2003_reference" status="rejected" stale="false" population="BDIX rats with LSBD1 fibrosarcoma" measured-compound="14C m-THPC (temoporfin)" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t1/2 of first compartment | `Q59` · t1/2α | 0.46 | h | 1656.0 | h | not captured | llm_corrected (0.6) | tbl1:row7:col1 | — | not captured |
| t1/2 of second compartment | `Q57` · t1/2z | 6.91 | h | 24876.0 | h | not captured | llm_confirmed (0.6) | tbl1:row8:col1 | — | not captured |
| t1/2 of third compartment | `Q89` · t1/2γ | 82.5 | h | 297000.0 | h | not captured | llm_corrected (0.6) | tbl1:row9:col1 | — | not captured |
| Mean residence time (MRT) | `Q53` · MRT | 32.5 | h | 117000.0 | h | not captured | exact (1.0) | tbl1:row12:col1 | — | not captured |
| Liver | `Q369` · QH | 97.3 | h | not captured | [h] | not captured | llm_corrected (0.6) | Jones_2003_table_3:row2:col1, Jones_2003_table_3:row2:col2 | — | not captured |
| initial volume of distribution of the central compartment, calculated from the initial plasma concentration (Dose/C0), was estimated to be | `Q61` · V | 32.0 | ml kg−1 | 0.00224 | L | not captured | boundary_compartment (0.9) | Jones_2003:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'MRT' (MRT)
- unit_dimension_unknown: 't1/2' (t1/2z)
- dropped duplicate Q57 ('Half-life (t1/2)', value '22.6') — already have one for this compound
- dropped unlinked row (NIL): 'Plasma' — extend the ontology if this is a real PK parameter (source ['Jones_2003_table_3:row0:col1', 'Jones_2003_table_3:row0:col2'])
- dropped unlinked row (NIL): 'Tumour' — extend the ontology if this is a real PK parameter (source ['Jones_2003_table_3:row1:col1', 'Jones_2003_table_3:row1:col2'])
- unit_dimension_mismatch: 'Liver' → Q369 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Kidney' — extend the ontology if this is a real PK parameter (source ['Jones_2003_table_3:row3:col1', 'Jones_2003_table_3:row3:col2'])
- dropped unlinked row (NIL): 'Heart' — extend the ontology if this is a real PK parameter (source ['Jones_2003_table_3:row4:col1', 'Jones_2003_table_3:row4:col2'])
- salvaged Q63 ('initial volume of distribution of the central compartment, calculated from the initial plasma concentration (Dose/C0), was estimated to be'=32.0) from results prose — parameter table was unreadable
- implicit units: 't1/2 of first compartment' → h (from the paper text: 'Abstract states: "The plasma pharmacokinetics of m-THPC can be interpreted by compartmental analysis as having three hal')
- implicit units: 't1/2 of second compartment' → h (from the paper text: 'Abstract states: "The plasma pharmacokinetics of m-THPC can be interpreted by compartmental analysis as having three hal')
- implicit units: 't1/2 of third compartment' → h (from the paper text: 'Abstract states: "The plasma pharmacokinetics of m-THPC can be interpreted by compartmental analysis as having three hal')
- implicit units: 'Mean residence time (MRT)' → h (from the popPK convention: 'Mean residence time (MRT) is a measure of time. In pharmacokinetics, especially when derived from half-lives and rates d')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=14C m-THPC (temoporfin)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'initial volume of distribution of the central compartment, calculated from the initial plasma concentration (Dose/C0), was estimated to be' is the general volume)
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for '14C m-THPC (temoporfin)' ('m-THPC (temoporfin)') — left in mass units
- molar mass: none found for '14C m-THPC (temoporfin)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 3 transcribed (10 record(s))
- LLM selected parameter table(s) 1, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.462 (6/13 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[half-life]` | not captured | 22.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[initial volume of distribution of the central compartment, calculated from the initial plasma concentration (dose/c0), was estimated to be]` | 32.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[initial volume of distribution of the central compartment]` | not captured | 32.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[liver]` | 97.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 of second compartment].parameter_id` | Q57 | Q60 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | m-THPC (temoporfin) | m-THPC | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | 14C m-THPC (temoporfin) | m-THPC | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q369 | fail | [time] | h | not captured | not captured | ['Jones_2003_table_3:row2:col1', 'Jones_2003_table_3:row2:col2'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['tbl1:row12:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tbl1:row8:col1'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['tbl1:row7:col1'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['tbl1:row9:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.24 L | not captured | not captured | ['Jones_2003:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_temoporfin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jones_2003` / `Jones_2003::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:43 UTC</sub>
