<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinblastine&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/&quot;},{&quot;label&quot;:&quot;Sethi_1984 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Toso1995_reference&quot;,&quot;label&quot;:&quot;Toso_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Toso1995_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Zhou1990_reference&quot;,&quot;label&quot;:&quot;Zhou_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Zhou1990_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinblastine — `Vinblastine_Sethi1984_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.769), gpt-oss:120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">monkey</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: monkey.** This record comes from an animal study (monkey), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The vinblastine record was rejected because the reported elimination rate constant kel = 0.054 min⁻¹ is dimensionally inconsistent with the terminal half-life t1/2β = 152 min in this two-compartment monkey model.**

For a first-order terminal phase, kel and t1/2β must satisfy t1/2β = ln2/kel; the reported kel of 0.054 min⁻¹ does not match the reported t1/2β of 152 min, so the structural parameter set is internally inconsistent (dimension mismatch on a structural parameter). The record also reached the review without an SI value because one reported unit could not be converted to SI. A second reader disagreed with the recorded dose compound and primary analyte (both vinblastine) and with the model's compartment links (recorded as none), leaving those fields contested. Extracted — vinblastine: t1/2α 1.9 min, t1/2β 152 min, V1 0.21 l/kg, V 1.5 l/kg, AUC∞ 3.11e+04 nM · min, CL 7 ml/min/kg, kel 0.054 min-1, k12 0.281 min-1, … (+1).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has vincristine, vinblastine, vindesine, the second reading vinblastine; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:32:58.075875+00:00) predates the upstream re-run (2026-10-06 14:15:18.038278+00:00). Current validate status: `rejected`.

## Citation
Sethi VS et al., Pharmacokinetics of vincristine, vinbla…, Cancer chemotherapy and pha… (1984)
  ·  DOI: [10.1007/BF00255905](https://doi.org/10.1007/BF00255905)

<div class="pk-model-meta" hidden drug="vinblastine" model-id="Vinblastine_Sethi1984_reference" status="rejected" stale="true" population="adult male rhesus monkeys" measured-compound="vincristine, vinblastine, vindesine" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| αt1/2 (min) | `Q59` · t1/2α | 1.9 | min | 114.0 | [min] | not captured | llm_corrected (0.6) | Sethi_1984_table_1:row0:col3 | — | not captured |
| βt1/2 (min) | `Q60` · t1/2β | 152 | min | 9120.0 | [min] | not captured | llm_corrected (0.6) | Sethi_1984_table_1:row1:col3 | — | not captured |
| Vc (l/kg) | `Q63` · V1 | 0.210 | l/kg | 0.014700000000000001 | [l] / [kg] | not captured | exact (1.0) | Sethi_1984_table_1:row2:col3 | — | not captured |
| VD (l/kg) | `Q61` · V | 1.50 | l/kg | 0.105 | [l] / [kg] | not captured | exact (1.0) | Sethi_1984_table_1:row3:col3 | — | not captured |
| AUC∞ (nM · min) | `Q17` · AUC∞ | 31146 | nM · min | not captured | [min] · [nM] | not captured | exact (1.0) | Sethi_1984_table_1:row4:col3 | — | not captured |
| Plasma Clearance (ml/min/kg) | `Q22` · CL | 7.0 | ml/min/kg | 8.166666666666666e-06 | [ml] / [[min] · [kg]] | not captured | llm_confirmed (0.6) | Sethi_1984_table_1:row6:col3 | — | not captured |
| k10 (min−1) | `Q47` · kel | 0.054 | min−1 | 0.0009 | [1] / [min] | not captured | exact (1.0) | Sethi_1984_table_1:row7:col3 | — | not captured |
| k12 (min−1) | `Q301` · k12 | 0.281 | min−1 | 0.004683333333333334 | [1] / [min] | not captured | exact (1.0) | Sethi_1984_table_1:row8:col3 | — | not captured |
| k21 (min−1) | `Q302` · k21 | 0.031 | min−1 | 0.0005166666666666667 | [1] / [min] | not captured | exact (1.0) | Sethi_1984_table_1:row9:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC∞ (nM · min)' → Q17 (unit '[length] * [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC∞ (nM · min/mg)' → Q17 (unit '[length] * [time] / [mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q17 ('AUC∞ (nM · min/mg)', value '16745') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vincristine, vinblastine, vindesine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for 'vincristine, vinblastine, vindesine' ('no full name in the paper') — left in mass units
- molar mass: none found for 'vincristine, vinblastine, vindesine' — its concentrations stay mass-only
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- transposed table Sethi_1984_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.769 (10/13 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | vinblastine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | vinblastine | unknown | mismatch |
| `qwen3.8-27b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `qwen3.8-27b` | `screen.dose_compound` | vincristine, vinblastine, vindesine | vinblastine | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | vincristine, vinblastine, vindesine | vinblastine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | fail | [length] * [time] | nM · min | not captured | not captured | ['Sethi_1984_table_1:row4:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sethi_1984_table_1:row6:col3'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Sethi_1984_table_1:row8:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Sethi_1984_table_1:row9:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Sethi_1984_table_1:row7:col3'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Sethi_1984_table_1:row0:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Sethi_1984_table_1:row1:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sethi_1984_table_1:row3:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sethi_1984_table_1:row2:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.0 | not captured | not captured | ['Sethi_1984_table_1:row6:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 29.4 L/h | not captured | not captured | ['Sethi_1984_table_1:row6:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 105 L | not captured | not captured | ['Sethi_1984_table_1:row3:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 14.7 L | not captured | not captured | ['Sethi_1984_table_1:row2:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_vinblastine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sethi_1984` / `Sethi_1984::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 14:15 UTC</sub>
