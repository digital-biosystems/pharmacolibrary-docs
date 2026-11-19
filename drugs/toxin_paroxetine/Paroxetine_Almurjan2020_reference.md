<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Paroxetine&quot;,&quot;href&quot;:&quot;drugs/toxin_paroxetine/&quot;},{&quot;label&quot;:&quot;Almurjan_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paroxetine_Bianconi2022_reference&quot;,&quot;label&quot;:&quot;Bianconi_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_paroxetine/Paroxetine_Bianconi2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Bourin2001_reference&quot;,&quot;label&quot;:&quot;Bourin_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_paroxetine/Paroxetine_Bourin2001_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_paroxetine/Paroxetine_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Li2022_final&quot;,&quot;label&quot;:&quot;Li_2022_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_paroxetine/Paroxetine_Li2022_final.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Li2022_final_final_model_iiv_cv&quot;,&quot;label&quot;:&quot;Li_2022_final_final_model_iiv_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_paroxetine/Paroxetine_Li2022_final_final_model_iiv_cv.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Yan2026_reference&quot;,&quot;label&quot;:&quot;Yan_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_paroxetine/Paroxetine_Yan2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Zhang2025_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_paroxetine/Paroxetine_Zhang2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Becker2025_reference&quot;,&quot;label&quot;:&quot;Becker_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_paroxetine/Paroxetine_Becker2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Paroxetine — `Paroxetine_Almurjan2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="Paroxetine" model-id="Paroxetine_Almurjan2020_reference" status="rejected" stale="false" population="healthy volunteers (non-pregnant) and pregnant females, virtual populations" measured-compound="Paroxetine" parameterization="mechanistic" topology="1C"></div>

## Citation
Almurjan A, Macfarlane H, Badhan RKS. Precision dosing-based optimisation of paroxetine during pregnancy for poor and ultrarapid CYP2D6 metabolisers: a virtual clinical trial pharmacokinetics study. The Journal of pharmacy and pharmacology 72(8):1049–1060 (2020).
  ·  DOI: [10.1111/jphp.13281](https://doi.org/10.1111/jphp.13281)

## Population and dosing

**Population:** healthy volunteers (non-pregnant) and pregnant females, virtual populations · condition healthy (non-pregnant validation) and pregnancy (virtual clinical trial) · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Single | equation variable | 96.50 |  |
| UM CL increase in trimester 3 | CL | 450 |  |
| injection volume | V | 5.0 | µL |
| Ka (h−1) | kabs | 1.46 | h−1 |

### Values per phenotype

The paper gives these values for each phenotype group of this model.

| label | em | pm | um |
|---|---|---|---|
| Week | 20 | 20 | 20 |
| Cmax (ng/mL) | 39.875 ng/mL | 46.535 ng/mL | 34.4 ng/mL |
| Cmin (ng/mL) | 19.63 ng/mL | 25.225 ng/mL | 12.465 ng/mL |
| Trough % &lt; 20 ng/mL (% subjects) | 51 | 34 | 73 |
| predicted to within | 2 | 2 | 2 |
| EM | 86.5 | 86.5 | 86.5 |
| PM | 8.2 | 8.2 | 8.2 |
| UM | 5.3 | 5.3 | 5.3 |
| UM AUC decrease in trimester 3 | 70 | 70 | 70 |
| UM CL increase in trimester 3 | 450 | 450 | 450 |
| decrease of up to | 30 | 30 | 30 |
| injection volume | 5.0 µL | 5.0 µL | 5.0 µL |
| Ka (h−1) | 1.46 h−1 | 1.46 h−1 | 1.46 h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

Extracted — paroxetine: CL 450, V 5 µL, kabs 1.46 h−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of cmax: this record has none, the second reading 39.875; it also differs on 3 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Single | `Q900` · equation variable | 96.50 |  | 96.5 |  |  | llm (0.6) | Almurjan_2020_table_1:row0:col3, Almurjan_2020_table_1:row0:col4, Almurjan_2020_table_1:row1:col3, Almurjan_2020_table_1:row1:col4, Almurjan_2020_table_1:row2:col3, Almurjan_2020_table_1:row2:col4, Almurjan_2020_table_1:row3:col3, Almurjan_2020_table_1:row3:col4, Almurjan_2020_table_1:row4:col3, Almurjan_2020_table_1:row4:col4, Almurjan_2020_table_1:row5:col3, Almurjan_2020_table_1:row5:col4, Almurjan_2020_table_1:row6:col3, Almurjan_2020_table_1:row6:col4, Almurjan_2020_table_1:row7:col3, Almurjan_2020_table_1:row7:col4, Almurjan_2020_table_1:row8:col3, Almurjan_2020_table_1:row8:col4 |
| UM CL increase in trimester 3 | `Q22` · CL | 450 |  |  |  | L/h | boundary (0.8) | Almurjan_2020:other_prose |
| injection volume | `Q61` · V | 5.0 | µL | 5e-09 | m3 | L | review_gapfill (0.7) | Erlitz_2025:review |
| Ka (h−1) | `Q49` · kabs | 1.46 | h−1 | 0.0004056 | 1/s | 1/h | review_gapfill (0.7) | Chen_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Multiple' — extend the ontology if this is a real PK parameter (source ['Almurjan_2020_table_1:row9:col3', 'Almurjan_2020_table_1:row9:col4', 'Almurjan_2020_table_1:row10:col3', 'Almurjan_2020_table_1:row10:col4', 'Almurjan_2020_table_1:row11:col3', 'Almurjan_2020_table_1:row11:col4', 'Almurjan_2020_table_1:row12:col3', 'Almurjan_2020_table_1:row12:col4', 'Almurjan_2020_table_1:row13:col3', 'Almurjan_2020_table_1:row13:col4', 'Almurjan_2020_table_1:row14:col3', 'Almurjan_2020_table_1:row14:col4'])
- salvaged Q22 ('UM CL increase in trimester 3'=450) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Paroxetine
- base model from table(s) without population columns (Almurjan_2020:discussion_prose, Almurjan_2020:other_prose, Almurjan_2020:prose, Almurjan_2020_table_1); populations em, pm, um kept as separate records
- gap-filled Q61 (V) from Erlitz_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Chen_2025's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 2
- phenotype-stratified table(s) 2 read with them
- table Almurjan_2020_table_1: units_need_context
- transposed table Almurjan_2020_table_2: logical view retains original source coordinates
- toxin: the located table(s) gave no kinetic value — 4 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cmax]` |  | 39.875 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmin]` |  | 19.63 | only_one_extracted |
| `gpt-oss:120b` | `parameters[single]` | 96.50 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[um cl increase in trimester 3]` | 450 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chen_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Erlitz_2025:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Almurjan_2020:other_prose'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 450 | ['Almurjan_2020:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 5e-06 L | ['Erlitz_2025:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bparoxetine%5D%20Paroxetine_Almurjan2020_reference&body=Drug%3A%20paroxetine%0ARecord%3A%20Paroxetine_Almurjan2020_reference%0APaper%3A%20Almurjan_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_paroxetine/Paroxetine_Almurjan2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 11:45 UTC</sub>
