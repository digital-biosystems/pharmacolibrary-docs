<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;disopyramide&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/&quot;},{&quot;label&quot;:&quot;Thibonnier_1984 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Disopyramide_Bryson1978_reference&quot;,&quot;label&quot;:&quot;Bryson_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/Disopyramide_Bryson1978_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Disopyramide_Aso2001_reference&quot;,&quot;label&quot;:&quot;Aso_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/Disopyramide_Aso2001_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Horie_2001_IRI&quot;,&quot;label&quot;:&quot;Horie_2001 \u00b7 IRI&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/pd_Horie_2001_IRI.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# disopyramide — `Disopyramide_Thibonnier1984_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.643), gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C7 apparent-parameter coherence violated (double correction).**

Extracted — disopyramide: V/F 266 l, kel 0.0033 min⁻¹, tlag 22 min, CLu 0.86 l/min, t1/2z 218 min, Fab 0.04.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has disopyramide, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Thibonnier M et al., Pharmacokinetic-pharmacodynamic analysi…, Journal of pharmacokinetics… (1984)
  ·  DOI: [10.1007/BF01059552](https://doi.org/10.1007/BF01059552)

<div class="pk-model-meta" hidden drug="disopyramide" model-id="Disopyramide_Thibonnier1984_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="disopyramide" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V/F (l) | `Q76` · V/F | 266 | l | 0.266 | [l] | not captured | exact (1.0) | Thibonnier_1984_table_1:row0:col1, Thibonnier_1984_table_1:row0:col2, Thibonnier_1984_table_1:row0:col3, Thibonnier_1984_table_1:row0:col4 | — | not captured |
| k (min⁻¹) | `Q47` · kel | 0.0033 | min⁻¹ | 5.5e-05 | [1] / [min] | not captured | exact (1.0) | Thibonnier_1984_table_1:row1:col1, Thibonnier_1984_table_1:row1:col2, Thibonnier_1984_table_1:row1:col3, Thibonnier_1984_table_1:row1:col4 | — | not captured |
| t₁ₐg (min) | `Q83` · tlag | 22 | min | 1320.0 | [min] | not captured | llm (0.6) | Thibonnier_1984_table_1:row3:col1, Thibonnier_1984_table_1:row3:col2, Thibonnier_1984_table_1:row3:col3, Thibonnier_1984_table_1:row3:col4 | — | not captured |
| CLu/F (l/min) | `Q24` · CLu | 0.86 | l/min | 1.4333333333333332e-05 | [l] / [min] | not captured | llm (0.6) | Thibonnier_1984_table_1:row4:col1, Thibonnier_1984_table_1:row4:col2, Thibonnier_1984_table_1:row4:col3, Thibonnier_1984_table_1:row4:col4 | — | not captured |
| Half-life (min) | `Q57` · t1/2z | 218 | min | 13080.0 | [min] | not captured | llm (0.6) | Thibonnier_1984_table_1:row5:col1, Thibonnier_1984_table_1:row5:col2, Thibonnier_1984_table_1:row5:col3, Thibonnier_1984_table_1:row5:col4 | — | not captured |
| f | `Q40` · Fab | 0.04 | not captured | not captured | not captured | not captured | exact (1.0) | Thibonnier_1984_table_1:row7:col1, Thibonnier_1984_table_1:row7:col2, Thibonnier_1984_table_1:row7:col3, Thibonnier_1984_table_1:row7:col4 | — | not captured |
| VAR | `Q900` · equation variable | 0.4 | not captured | not captured | not captured | not captured | llm (0.6) | Thibonnier_1984_table_1:row8:col1, Thibonnier_1984_table_1:row8:col2, Thibonnier_1984_table_1:row8:col3, Thibonnier_1984_table_1:row8:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'a' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'b' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'c' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'd' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'TKO (min)' — extend the ontology if this is a real PK parameter (source ['Thibonnier_1984_table_1:row2:col1', 'Thibonnier_1984_table_1:row2:col2', 'Thibonnier_1984_table_1:row2:col3', 'Thibonnier_1984_table_1:row2:col4'])
- dropped unlinked row (NIL): 'PWR' — extend the ontology if this is a real PK parameter (source ['Thibonnier_1984_table_1:row6:col1', 'Thibonnier_1984_table_1:row6:col2', 'Thibonnier_1984_table_1:row6:col3', 'Thibonnier_1984_table_1:row6:col4'])
- dropped unlinked row (NIL): 'Log-likelihood estimates' — extend the ontology if this is a real PK parameter (source ['Thibonnier_1984_table_1:row9:col1', 'Thibonnier_1984_table_1:row9:col2', 'Thibonnier_1984_table_1:row9:col3', 'Thibonnier_1984_table_1:row9:col4'])
- dropped unlinked row (NIL): 'Cunningham et aL, 10.41/hr (20)' — extend the ontology if this is a real PK parameter (source ['fig_4:caption'])
- dropped unlinked row (NIL): 'Bryson et al., 6.2 1/hr (3)' — extend the ontology if this is a real PK parameter (source ['fig_4:caption'])
- covariate category for CL/F from footnote/prose kept as documentation only (['fig_4:caption'])
- dropped duplicate Q24 ('unbound clearance of 39.5 l/hr', value 39.5) — already have one for this compound
- documentation only: 'Lima et al. (4), 30 1/hr' → Q49 (kabs) comes from ['fig_4:caption'], not from a located parameter table — not emitted as a model parameter
- dropped unlinked row (NIL): 'Cunningham et al. (20), 21 1/hr0' — extend the ontology if this is a real PK parameter (source ['fig_4:caption'])
- documentation only: 'Giacomini et aL (6), 25 l/hr' → Q30 (Q) comes from ['fig_4:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'Bryson et al. (23), 23 1/hr' → Q49 (kabs) comes from ['fig_4:caption'], not from a located parameter table — not emitted as a model parameter
- dropped duplicate Q47 ('Hinderling and Garrett (27), 14.7 1/hr', value 14.7) — already have one for this compound
- documentation only: 'Meffin et al. (8), 38 1/hr' → Q49 (kabs) comes from ['fig_4:caption'], not from a located parameter table — not emitted as a model parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=disopyramide
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.643 (9/14 fields) | 5 |
| `gpt-oss-120b` | not confirmed | 0.571 (8/14 fields) | 6 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailability]` | not captured | 83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t_lag]` | 22 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tko]` | not captured | 62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[var]` | 0.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | disopyramide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | disopyramide | unknown | mismatch |
| `gpt-oss:120b` | `parameters[clu/f]` | 0.86 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[pwr]` | not captured | 1.79 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1ag]` | 22 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tko]` | not captured | 62 | only_one_extracted |
| `gpt-oss:120b` | `parameters[var]` | 0.4 | not captured | only_one_extracted |

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
| C1_half_life_beta | pass | 218.0 | 214.392 | 0.9834 | 0.25 | reported t½β |
| C5_dimension_Q24 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Thibonnier_1984_table_1:row4:col1', 'Thibonnier_1984_table_1:row4:col2', 'Thibonnier_1984_table_1:row4:col3', 'Thibonnier_1984_table_1:row4:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Thibonnier_1984_table_1:row1:col1', 'Thibonnier_1984_table_1:row1:col2', 'Thibonnier_1984_table_1:row1:col3', 'Thibonnier_1984_table_1:row1:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Thibonnier_1984_table_1:row5:col1', 'Thibonnier_1984_table_1:row5:col2', 'Thibonnier_1984_table_1:row5:col3', 'Thibonnier_1984_table_1:row5:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Thibonnier_1984_table_1:row0:col1', 'Thibonnier_1984_table_1:row0:col2', 'Thibonnier_1984_table_1:row0:col3', 'Thibonnier_1984_table_1:row0:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Thibonnier_1984_table_1:row3:col1', 'Thibonnier_1984_table_1:row3:col2', 'Thibonnier_1984_table_1:row3:col3', 'Thibonnier_1984_table_1:row3:col4'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.04 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q24 | pass | clearance within physiological range | 51.6 L/h | not captured | not captured | ['Thibonnier_1984_table_1:row4:col1', 'Thibonnier_1984_table_1:row4:col2', 'Thibonnier_1984_table_1:row4:col3', 'Thibonnier_1984_table_1:row4:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 266 L | not captured | not captured | ['Thibonnier_1984_table_1:row0:col1', 'Thibonnier_1984_table_1:row0:col2', 'Thibonnier_1984_table_1:row0:col3', 'Thibonnier_1984_table_1:row0:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_disopyramide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Thibonnier_1984` / `Thibonnier_1984::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 21:14 UTC</sub>
