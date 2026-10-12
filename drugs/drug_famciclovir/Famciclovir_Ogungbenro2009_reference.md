<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;famciclovir&quot;,&quot;href&quot;:&quot;drugs/drug_famciclovir/&quot;},{&quot;label&quot;:&quot;Ogungbenro_2009 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# famciclovir — `Famciclovir_Ogungbenro2009_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.688). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Penciclovir’s apparent metabolite clearance, CLm/F 31.2 l h−1 70 kg−1, appears alongside absolute bioavailability 0.598, resulting in a double correction.**

The record identifies CLm/F as apparent metabolite clearance, divided by the fraction of parent converted, and reports Fab as absolute bioavailability of 0.598. The review found these parameters represented a double correction. Extracted — penciclovir: kabs 1.86 h -1, CLm/F 31.2 l h -1 70 kg -1, V1 28.6 l.70 kg -1, V2 54.5 l.70 kg -1, Q 60.2 l h -1 70 kg -1, Fab 0.598, tlag 0.206 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has famciclovir or penciclovir, the second reading famciclovir; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

> **Dose compound ≠ measured compound:** dosed `famciclovir or penciclovir`, measured `penciclovir`.

## Citation
Ogungbenro K et al., Population pharmacokinetics and optimal…, British journal of clinical… (2009)
  ·  DOI: [10.1111/j.1365-2125.2009.03479.x](https://doi.org/10.1111/j.1365-2125.2009.03479.x)

<div class="pk-model-meta" hidden drug="famciclovir" model-id="Famciclovir_Ogungbenro2009_reference" status="rejected" stale="false" population="adults and children" measured-compound="penciclovir" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 1 covariate effect.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h -1 ) | `Q49` · kabs | 1.86 | h -1 | 0.0005166666666666667 | [1] / [h] | not captured | exact (1.0) | tab_2:row2:col1, tab_2:row2:col2, tab_2:row2:col3, tab_2:row2:col4 | — | 0.640 (None% RSE) |
| CL (l h -1 70 kg -1 ) | `Q351` · CLm/F | 31.2 | l h -1 70 kg -1 | 0.0006066666666666666 | [l] / [[h] · [kg]] | not captured | exact (1.0) | tab_2:row3:col1, tab_2:row3:col2, tab_2:row3:col3, tab_2:row3:col4 | — | 0.23 (None% RSE) |
| V1 (l.70 kg -1 ) | `Q63` · V1 | 28.6 | l.70 kg -1 | 2.0020000000000002 | [l] / [kg] | not captured | exact (1.0) | tab_2:row4:col1, tab_2:row4:col2, tab_2:row4:col3, tab_2:row4:col4 | — | 0.003 (None% RSE) |
| V2 (l.70 kg -1 ) | `Q64` · V2 | 54.5 | l.70 kg -1 | 3.815 | [l] / [kg] | not captured | exact (1.0) | tab_2:row5:col1, tab_2:row5:col2, tab_2:row5:col3, tab_2:row5:col4 | — | 0.255 (None% RSE) |
| Q (l h -1 70 kg -1 ) | `Q30` · Q | 60.2 | l h -1 70 kg -1 | 0.0011705555555555555 | [l] / [[h] · [kg]] | not captured | exact (1.0) | tab_2:row6:col1, tab_2:row6:col2, tab_2:row6:col3, tab_2:row6:col4 | — | 0.342 (None% RSE) |
| F | `Q40` · Fab | 0.598 | not captured | not captured | not captured | not captured | exact (1.0) | tab_2:row7:col1, tab_2:row7:col2, tab_2:row7:col3, tab_2:row7:col4 | — | not captured |
| Tlag (h) | `Q83` · tlag | 0.206 | h | 741.5999999999999 | [h] | not captured | exact (1.0) | tab_2:row8:col1, tab_2:row8:col2, tab_2:row8:col3, tab_2:row8:col4 | — | not captured |
| 5 | `Q900` · equation variable | -2221 | not captured | not captured | not captured | not captured | llm (0.6) | Ogungbenro_2009_table_2:row2:col2, Ogungbenro_2009_table_2:row2:col3, Ogungbenro_2009_table_2:row2:col4 | — | not captured |
| theta_equation_variable_weight_power | `Q900` · theta_equation_variable_weight_power | 0.28 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_2:row11:col1, tab_2:row11:col2, tab_2:row11:col3, tab_2:row11:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'obj' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dobj' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ntheta' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'KAGE &lt; 40' — extend the ontology if this is a real PK parameter (source ['tab_2:row9:col1', 'tab_2:row9:col2'])
- dropped unlinked row (NIL): 'KAGE Ն 40' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col1', 'tab_2:row10:col2'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['Ogungbenro_2009_table_2:row0:col2', 'Ogungbenro_2009_table_2:row0:col3', 'Ogungbenro_2009_table_2:row0:col4'])
- dropped duplicate Q900 ('4', value '-2207') — already have one for this compound
- dropped duplicate Q900 ('3', value '-2200') — already have one for this compound
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Ogungbenro_2009_table_2:row7:col2', 'Ogungbenro_2009_table_2:row7:col3', 'Ogungbenro_2009_table_2:row7:col4'])
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['Ogungbenro_2009_table_2:row8:col2', 'Ogungbenro_2009_table_2:row8:col3', 'Ogungbenro_2009_table_2:row8:col4'])
- metabolite penciclovir: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=penciclovir
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- row roles (LLM): model_class=compartmental; 23/23 row label(s) assigned, 24 linked by role
- review gap-fill skipped: this record measures 'penciclovir', not famciclovir — the review values are the parent's

**Extraction notes:**
- unparsed cell Ogungbenro_2009_table_2:row0:col1 = '2 comp; Tlag; weight on V1, V2, CL & Q;'
- unparsed cell Ogungbenro_2009_table_2:row2:col1 = '2 comp; Tlag; weight on V1, V2, CL & Q;'
- unparsed cell Ogungbenro_2009_table_2:row4:col1 = '2 comp; Tlag; weight on V1, V2, CL & Q;'
- unparsed cell Ogungbenro_2009_table_2:row6:col1 = '2 comp; Tlag; weight on V1, V2, CL & Q'
- unparsed cell Ogungbenro_2009_table_2:row7:col1 = '2 comp; Tlag'
- unparsed cell Ogungbenro_2009_table_2:row8:col1 = '2 comp'
- companion parameter table 2 transcribed (18 record(s))

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.688 (11/16 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[5]` | -2221 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[exponent_of_fclcr]` | not captured | 0.270 | only_one_extracted |
| `qwen3.8-27b` | `parameters[kage &lt; 40]` | not captured | 159 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_equation_variable_weight_power]` | 0.28 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | famciclovir or penciclovir | famciclovir | mismatch |

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
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row6:col1', 'tab_2:row6:col2', 'tab_2:row6:col3', 'tab_2:row6:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row3:col1', 'tab_2:row3:col2', 'tab_2:row3:col3', 'tab_2:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_2:row2:col1', 'tab_2:row2:col2', 'tab_2:row2:col3', 'tab_2:row2:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col3', 'tab_2:row4:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row5:col1', 'tab_2:row5:col2', 'tab_2:row5:col3', 'tab_2:row5:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_2:row8:col1', 'tab_2:row8:col2', 'tab_2:row8:col3', 'tab_2:row8:col4'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.598 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 2e+03 L | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col3', 'tab_2:row4:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.82e+03 L | not captured | not captured | ['tab_2:row5:col1', 'tab_2:row5:col2', 'tab_2:row5:col3', 'tab_2:row5:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_famciclovir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ogungbenro_2009` / `Ogungbenro_2009::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:53 UTC</sub>
