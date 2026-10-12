<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;quinidine&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/&quot;},{&quot;label&quot;:&quot;Ueda_1980 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinidine_Kuroda2024_reference&quot;,&quot;label&quot;:&quot;Kuroda_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/Quinidine_Kuroda2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quinidine — `Quinidine_Ueda1980_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.095). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. Only the abstract was available, so reported summary statistics stand in for a fitted model. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has quinidine, the second reading unknown; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:31:08.686280+00:00) predates the upstream re-run (2026-10-08 21:32:41.005976+00:00). Current validate status: `rejected`.

## Citation
Ueda CT et al., Comparative pharmacokinetics of quinidi…, Journal of pharmaceutical s… (1980)
  ·  DOI: [10.1002/jps.2600691212](https://doi.org/10.1002/jps.2600691212)

<div class="pk-model-meta" hidden drug="quinidine" model-id="Quinidine_Ueda1980_reference" status="rejected" stale="true" population="rabbits" measured-compound="quinidine" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| α, min⁻¹ | `Q67` · λ1 | 0.445 | min⁻¹ | not captured | [1] / [min] | not captured | exact (1.0) | Ueda_1980_table_1:row0:col1, Ueda_1980_table_1:row0:col2, Ueda_1980_table_1:row0:col3 | — | not captured |
| t₁/₂/α, min | `Q59` · t1/2α | 1.72 | min | 103.2 | [min] | not captured | llm_confirmed (0.6) | Ueda_1980_table_1:row1:col1, Ueda_1980_table_1:row1:col2, Ueda_1980_table_1:row1:col3 | — | not captured |
| β, min⁻¹ | `Q47` · kel | 0.006 | min⁻¹ | 0.0001 | [1] / [min] | not captured | exact (1.0) | Ueda_1980_table_1:row2:col1, Ueda_1980_table_1:row2:col2, Ueda_1980_table_1:row2:col3 | — | not captured |
| t₁/₂/β, min | `Q60` · t1/2β | 132.44 | min | 7946.4 | [min] | not captured | llm_confirmed (0.6) | Ueda_1980_table_1:row3:col1, Ueda_1980_table_1:row3:col2, Ueda_1980_table_1:row3:col3 | — | not captured |
| k₁₂, min⁻¹ | `Q30` · Q | 0.226 | min⁻¹ | not captured | [1] / [min] | not captured | exact (1.0) | Ueda_1980_table_1:row4:col1, Ueda_1980_table_1:row4:col2, Ueda_1980_table_1:row4:col3 | — | not captured |
| Vc, liters/kg | `Q63` · V1 | 0.20 | liters/kg | 0.014 | [l] / [kg] | not captured | exact (1.0) | Ueda_1980_table_1:row7:col1, Ueda_1980_table_1:row7:col2, Ueda_1980_table_1:row7:col3 | — | not captured |
| Cl, ml/min/kg | `Q22` · CL | 16.80 | ml/min/kg | 1.96e-05 | [ml] / [[min] · [kg]] | not captured | exact (1.0) | Ueda_1980_table_1:row8:col1, Ueda_1980_table_1:row8:col2, Ueda_1980_table_1:row8:col3 | — | not captured |
| Vdβ, liters/kg | `Q64` · V2 | 3.26 | liters/kg | 0.2282 | [l] / [kg] | not captured | exact (1.0) | Ueda_1980_table_1:row9:col1, Ueda_1980_table_1:row9:col2, Ueda_1980_table_1:row9:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 't value' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'α, min⁻¹' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'k₁₂, min⁻¹' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k₂₁, min⁻¹' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('k₂₁, min⁻¹', value '0.019') — already have one for this compound
- dropped duplicate Q47 ('k₁₀, min⁻¹', value '0.207') — already have one for this compound
- dropped unlinked row (NIL): 'k₁₂/k₂₁' — extend the ontology if this is a real PK parameter (source ['Ueda_1980_table_1:row10:col1', 'Ueda_1980_table_1:row10:col2', 'Ueda_1980_table_1:row10:col3'])
- dropped duplicate Q22 ('Vc × k₁₀, ml/min/kg', value '17.0') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quinidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 24 linked by role; re-tagged parent→6'-hydroxycinchonine ×36

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- unparsed cell Ueda_1980_table_1:row0:col4 = 'p &lt; 0.10'
- unparsed cell Ueda_1980_table_1:row1:col4 = 'p &lt; 0.05'
- unparsed cell Ueda_1980_table_1:row2:col4 = 'p &lt; 0.01'
- unparsed cell Ueda_1980_table_1:row3:col4 = 'p &lt; 0.005'
- unparsed cell Ueda_1980_table_1:row4:col4 = 'p &lt; 0.05'
- unparsed cell Ueda_1980_table_1:row9:col4 = 'p &lt; 0.02'
- unparsed cell Ueda_1980_table_1:row10:col4 = 'p &lt; 0.01'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.095 (2/21 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl]` | 16.80 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 0.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | 0.226 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | not captured | 2.28 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21]` | not captured | 1.73 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2/α]` | 1.72 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2/α]` | not captured | 2.21 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2/β]` | 132.44 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2/β]` | not captured | 4.09 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | 0.20 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | not captured | 0.14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vdβ]` | 3.26 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vdβ]` | not captured | 3.04 | only_one_extracted |
| `gpt-oss:120b` | `parameters[α]` | 0.445 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[α]` | not captured | 2.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[β]` | 0.006 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[β]` | not captured | 3.17 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | quinidine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | quinidine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ueda_1980_table_1:row8:col1', 'Ueda_1980_table_1:row8:col2', 'Ueda_1980_table_1:row8:col3'] |
| C5_dimension_Q30 | fail | 1 / [time] | min⁻¹ | not captured | not captured | ['Ueda_1980_table_1:row4:col1', 'Ueda_1980_table_1:row4:col2', 'Ueda_1980_table_1:row4:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Ueda_1980_table_1:row2:col1', 'Ueda_1980_table_1:row2:col2', 'Ueda_1980_table_1:row2:col3'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Ueda_1980_table_1:row1:col1', 'Ueda_1980_table_1:row1:col2', 'Ueda_1980_table_1:row1:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Ueda_1980_table_1:row3:col1', 'Ueda_1980_table_1:row3:col2', 'Ueda_1980_table_1:row3:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ueda_1980_table_1:row7:col1', 'Ueda_1980_table_1:row7:col2', 'Ueda_1980_table_1:row7:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ueda_1980_table_1:row9:col1', 'Ueda_1980_table_1:row9:col2', 'Ueda_1980_table_1:row9:col3'] |
| C5_dimension_Q67 | fail | 1 / [time] | min⁻¹ | not captured | not captured | ['Ueda_1980_table_1:row0:col1', 'Ueda_1980_table_1:row0:col2', 'Ueda_1980_table_1:row0:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.8 | not captured | not captured | ['Ueda_1980_table_1:row8:col1', 'Ueda_1980_table_1:row8:col2', 'Ueda_1980_table_1:row8:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 70.6 L/h | not captured | not captured | ['Ueda_1980_table_1:row8:col1', 'Ueda_1980_table_1:row8:col2', 'Ueda_1980_table_1:row8:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 14 L | not captured | not captured | ['Ueda_1980_table_1:row7:col1', 'Ueda_1980_table_1:row7:col2', 'Ueda_1980_table_1:row7:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 228 L | not captured | not captured | ['Ueda_1980_table_1:row9:col1', 'Ueda_1980_table_1:row9:col2', 'Ueda_1980_table_1:row9:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_quinidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ueda_1980` / `Ueda_1980::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 21:32 UTC</sub>
