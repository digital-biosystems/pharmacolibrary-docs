<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fulvestrant&quot;,&quot;href&quot;:&quot;drugs/toxin_fulvestrant/&quot;},{&quot;label&quot;:&quot;Robertson_2004 \u00b7 healthy_volunteers&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fulvestrant_Robertson2004_fulvestrant_10_mg_i_v_alone&quot;,&quot;label&quot;:&quot;Robertson_2004_fulvestrant_10_mg_i_v_alone&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fulvestrant/Fulvestrant_Robertson2004_fulvestrant_10_mg_i_v_alone.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fulvestrant_McShane2018_reference&quot;,&quot;label&quot;:&quot;McShane_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fulvestrant/Fulvestrant_McShane2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fulvestrant_Zhang2025v3_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_3_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fulvestrant/Fulvestrant_Zhang2025v3_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fulvestrant — `Fulvestrant_Robertson2004_healthy_volunteers`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.40).">human + animal</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q19 unit ng ml−1 ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Fulvestrant" model-id="Fulvestrant_Robertson2004_healthy_volunteers" status="rejected" stale="false" population="healthy female postmenopausal volunteers and postmenopausal women with advanced breast cancer" measured-compound="Fulvestrant" parameterization="mechanistic" topology="retention"></div>

## Citation
Robertson JF, Harrison M. Fulvestrant: pharmacokinetics and pharmacology. British journal of cancer 90 Suppl 1(Suppl 1):S7–S10 (2004).
  ·  DOI: [10.1038/sj.bjc.6601630](https://doi.org/10.1038/sj.bjc.6601630)

## Population and dosing

**Population:** healthy female postmenopausal volunteers and postmenopausal women with advanced breast cancer · condition healthy; advanced breast cancer.

**Dosing:** 2, 6, 10, 18, 36, 250 mg.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.40).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| terminal elimination half-life (t1/2) of i.v. fulvestrant formulation in healthy postmenopausal female volunteers | t1/2z | 40 | days |
| systemic clearance | CL | 10.6 | L/h |
| prior to drug exposure | tlag | 72.0 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.40).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q19 unit ng ml−1 ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

Extracted — fulvestrant: t1/2z 40 days, CL 10.6 L/h, tlag 72 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[auc(0-28) (ng ml-1) gmean].parameter_id`: this record has Q19, the second reading Q17; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| terminal elimination half-life (t1/2) of i.v. fulvestrant formulation in healthy postmenopausal female volunteers | `Q57` · t1/2z | 40 | days | 3.456e+06 | s | h | boundary (0.8) | Robertson_2004:prose |
| systemic clearance | `Q22` · CL | 10.6 | L/h | 2.944e-06 | m3/s | L/h | review_gapfill (0.7) | Bardia_2022:review |
| prior to drug exposure | `Q83` · tlag | 72.0 | h | 2.592e+05 | s | h | review_gapfill (0.7) | Quagliariello_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| AUC(0–28) (ng ml−1) gmean (CV, %) | Q19 | llm_corrected |
| Cmax (ng ml−1) gmean (CV, %) | Q32 | llm_confirmed |
| tmax (h) median | Q56 | exact |
| Cmin (ng ml−1) gmean (CV, %) | Q36 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC(0–28) (ng ml−1) gmean (CV, %)' → Q19 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped value-less row: 'gmean'
- dropped value-less row: 'SD'
- dropped value-less row: 'CV'
- dropped value-less row: 'AUC(0–28)' (captured trailing unit '0–28' for child rows)
- dropped value-less row: 'Cmax'
- dropped value-less row: 'tmax'
- dropped value-less row: 'Cmin'
- salvaged Q57 ('terminal elimination half-life (t1/2) of i.v. fulvestrant formulation in healthy postmenopausal female volunteers'=40) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Fulvestrant
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'healthy volunteers' subgroup of Robertson_2004 (paper reports 3 populations: breast cancer patients (study 0020), fulvestrant 10 mg i.v. alone (n=6), healthy volunteers)
- gap-filled Q22 (CL) from Bardia_2022's review values (primary lacked it)
- skipped review gap-fill of V from Takakura_2025: its label names a different analyte ('palbociclib') — 'Vd of palbociclib'
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Quagliariello_2026's review values (primary lacked it)

**Extraction notes:**
- table Robertson_2004_table_2: unbound_uncertainty
- table Robertson_2004_table_2: units_need_context
- table Robertson_2004_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (9 record(s))
- LLM selected parameter table(s) 1, 2
- toxin: the located table(s) gave no kinetic value — 8 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc(0-28) (ng ml-1) gmean].parameter_id` | Q19 | Q17 | mismatch |
| `gpt-oss:120b` | `parameters[t1/2]` |  | 40 | only_one_extracted |
| `gpt-oss:120b` | `parameters[terminal elimination half-life (t1/2) of i.v. fulvestrant formulation in healthy postmenopausal female volunteers]` | 40 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q57 | pass | 40 | 40 | 1 | 0.05 | footnote reference category |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | ng ml−1 ([mass] / [length] ** 3) |  |  | ['tbl1:row1:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Bardia_2022:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['tbl1:row2:col1'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  |  |  | ['tbl1:row4:col1'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['tbl1:row3:col1'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Quagliariello_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.6 |  |  | ['Bardia_2022:review'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.6 L/h |  |  | ['Bardia_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfulvestrant%5D%20Fulvestrant_Robertson2004_healthy_volunteers&body=Drug%3A%20fulvestrant%0ARecord%3A%20Fulvestrant_Robertson2004_healthy_volunteers%0APaper%3A%20Robertson_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fulvestrant/Fulvestrant_Robertson2004_healthy_volunteers%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 14:25 UTC</sub>
