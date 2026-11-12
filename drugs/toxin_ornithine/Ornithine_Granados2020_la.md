<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Ornithine&quot;,&quot;href&quot;:&quot;drugs/toxin_ornithine/&quot;},{&quot;label&quot;:&quot;Granados_2020 \u00b7 la&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ornithine_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ornithine/Ornithine_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ornithine — `Ornithine_Granados2020_la`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q34 unit μM ([length]) vs [mass] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Ornithine" model-id="Ornithine_Granados2020_la" status="rejected" stale="false" population="high-active and low-active male mice" measured-compound="Ornithine" parameterization="mechanistic" topology="1C"></div>

## Citation
Granados JZ, Ten Have GAM, Letsinger AC, Thaden JJ, Engelen MPKJ, Lightfoot JT et al. Activated whole-body arginine pathway in high-active mice. PloS one 15(6):e0235095 (2020).
  ·  DOI: [10.1371/journal.pone.0235095](https://doi.org/10.1371/journal.pone.0235095)

## Population and dosing

**Population:** high-active and low-active male mice · condition healthy · age group adult · n = 43.

**Dosed compound ≠ measured compound:** dosed stable isotope tracers of amino acids (L-Ornithine [13C5] among others), measured Ornithine.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Glutamate | Css | 36.8 | μM |
| CIT increased clearance rate (HA vs LA) | CL | 42.3 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q34 unit μM ([length]) vs [mass] / [length] ** 3.**

A reported unit could not be converted (Css), so that value has no SI equivalent. Extracted — ornithine: Css 36.8 μM, CL 42.3.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has stable isotope tracers of amino acids (L-Ornithine [13C5] among others), the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| Glutamate | `Q34` · Css | 36.8 | μM | µM | llm (0.6) | Granados_2020_table_2:row1:col1, Granados_2020_table_2:row8:col1 |
| CIT increased clearance rate (HA vs LA) | `Q22` · CL | 42.3 |  | L/h | boundary (0.8) | Granados_2020:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Glutamate' → Q34 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Glutamine' — extend the ontology if this is a real PK parameter (source ['Granados_2020_table_2:row2:col1', 'Granados_2020_table_2:row9:col1'])
- dropped unlinked row (NIL): 'Citrulline' — extend the ontology if this is a real PK parameter (source ['Granados_2020_table_2:row3:col1', 'Granados_2020_table_2:row10:col1'])
- dropped unlinked row (NIL): 'Arginine' — extend the ontology if this is a real PK parameter (source ['Granados_2020_table_2:row4:col1', 'Granados_2020_table_2:row11:col1'])
- dropped unlinked row (NIL): 'Ornithine' — extend the ontology if this is a real PK parameter (source ['Granados_2020_table_2:row5:col1', 'Granados_2020_table_2:row12:col1'])
- dropped unlinked row (NIL): 'Phenylalanine' — extend the ontology if this is a real PK parameter (source ['Granados_2020_table_2:row6:col1', 'Granados_2020_table_2:row13:col1'])
- dropped value-less row: 'Summary table. Data are percent differences and effect size (Cohen’s d) in high-active (HA) mice compared to low-active mice for amino acid plasma concentration, whole-body production (WBP), and clearance rate. Direction of the arrow depicts a significantly lower or higher value for each amino acid. Cohen’s d effect size thresholds are: small = 0.2, medium = 0.5, and large = 0.8.'
- table mostly unlinked (5/6 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q22 ('CIT increased clearance rate (HA vs LA)'=42.3) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ornithine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 3 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'la: (n = 23)' subgroup of Granados_2020 (paper reports 2 populations: ha: (n = 20), la: (n = 23))
- row roles (LLM): model_class=noncompartmental; 0/8 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Arginine' — its concentrations stay mass-only
- molar mass: none found for 'Nitric oxide' — its concentrations stay mass-only
- skipped review gap-fill of V from Wang_2022: its label names a different analyte ('pagn') — 'volume of distribution for PAGN'
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table pone.0235095.t003: units_need_context
- transposed table pone.0235095.t003: logical view retains original source coordinates
- companion parameter table 2 transcribed (31 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.111 (1/9 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['arginine', 'ornithine', 'arginase'], ['arginine', 'citrulline', 'nitric oxide synthase'], ['citrulline', 'arginine', 'argininosuccinate synthase'], ['glutamine', 'glutamate', 'glutaminase'], ['glutamate', 'glutamine', 'glutamine synthetase']] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[cit increased clearance rate]` | 42.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[citrulline]` |  | 57.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[glutamate]` | 36.8 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[increased clearance rate for cit]` |  | 42.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[phenylalanine]` |  | 86.7 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | stable isotope tracers of amino acids (L-Ornithine [13C5] among others) | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q34 | fail | [mass] / [length] ** 3 | μM ([length]) | ['Granados_2020_table_2:row1:col1', 'Granados_2020_table_2:row8:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Granados_2020:results_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 42.3 | ['Granados_2020:results_prose'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bornithine%5D%20Ornithine_Granados2020_la&body=Drug%3A%20ornithine%0ARecord%3A%20Ornithine_Granados2020_la%0APaper%3A%20Granados_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ornithine/Ornithine_Granados2020_la%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 21:21 UTC</sub>
