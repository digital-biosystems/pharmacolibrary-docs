<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;regorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_regorafenib/&quot;},{&quot;label&quot;:&quot;Casanova_2023 \u00b7 regorafenib_82_mg_m2_sequential_with_vi&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# regorafenib — `Regorafenib_Casanova2023_regorafenib_82_mg_m2_sequential_wit`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="regorafenib" model-id="Regorafenib_Casanova2023_regorafenib_82_mg_m2_sequential_wit" status="rejected" stale="false" population="pediatric patients with relapsed/refractory solid tumors" measured-compound="regorafenib" parameterization="mechanistic" topology="1C"></div>

## Citation
Casanova M, Bautista F, Campbell-Hewson Q, Makin G, Marshall LV, Verschuur AC et al. Regorafenib plus Vincristine and Irinotecan in Pediatric Patients with Recurrent/Refractory Solid Tumors: An Innovative Therapy for Children with Cancer Study. Clinical cancer research : an official journal of the American Association for Cancer Research 29(21):4341–4351 (2023).
  ·  DOI: [10.1158/1078-0432.CCR-23-0257](https://doi.org/10.1158/1078-0432.CCR-23-0257)

## Population and dosing

**Population:** pediatric patients with relapsed/refractory solid tumors · condition relapsed/refractory solid tumors · age group child.

**Dosing:** 72, 82 mg/m2, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Any | equation variable | 13 |  |
| decreased_appetite | decreased_appetite | 3 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of any: this record has 13, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Any | `Q900` · equation variable | 13 |  | 13 | llm (0.6) | Casanova_2023_table_S3:row2:col4, Casanova_2023_table_S3:row12:col4 |
| decreased_appetite | `Q900` · decreased_appetite | 3 |  |  |  | Casanova_2023_table_S4:row6:col5, Casanova_2023_table_S6:row7:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Any TEAE' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S3:row0:col4'])
- dropped unlinked row (NIL): 'Regorafenib' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S3:row3:col4', 'Casanova_2023_table_S3:row13:col4'])
- dropped unlinked row (NIL): 'Irinotecan' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S3:row4:col4', 'Casanova_2023_table_S3:row14:col4'])
- dropped unlinked row (NIL): 'Vincristine' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S3:row5:col4', 'Casanova_2023_table_S3:row15:col4'])
- dropped unlinked row (NIL): 'Worst grade' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S3:row6:col4'])
- dropped unlinked row (NIL): 'Leading to dose modification' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S3:row10:col4'])
- dropped unlinked row (NIL): 'Any TESAE' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S3:row16:col4'])
- dropped unlinked row (NIL): 'Neutropeniaa' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row1:col5', 'Casanova_2023_table_S6:row3:col5', 'Casanova_2023_table_S6:row25:col5'])
- dropped unlinked row (NIL): 'Anemia' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row2:col5', 'Casanova_2023_table_S6:row4:col5'])
- dropped unlinked row (NIL): 'AST increased' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row3:col5', 'Casanova_2023_table_S6:row11:col5'])
- dropped unlinked row (NIL): 'ALT increased' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row4:col5', 'Casanova_2023_table_S6:row12:col5'])
- dropped unlinked row (NIL): 'Thrombocytopeniab' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row5:col5', 'Casanova_2023_table_S6:row5:col5'])
- covariate level 'Decreased appetite' → Q900:decreased_appetite = 3 (additive_shift on the model)
- dropped unlinked row (NIL): 'Weight decreased' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row7:col5', 'Casanova_2023_table_S6:row14:col5'])
- dropped unlinked row (NIL): 'Fatigue' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row8:col5', 'Casanova_2023_table_S6:row15:col5'])
- dropped unlinked row (NIL): 'Leukopeniac' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row9:col5', 'Casanova_2023_table_S6:row9:col5'])
- dropped unlinked row (NIL): 'Diarrhea' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row10:col5', 'Casanova_2023_table_S6:row2:col5'])
- dropped unlinked row (NIL): 'TSH increased' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row11:col5'])
- dropped unlinked row (NIL): 'GGT increased' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row12:col5'])
- dropped unlinked row (NIL): 'Abdominal pain' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row13:col5', 'Casanova_2023_table_S6:row8:col5'])
- dropped unlinked row (NIL): 'Blood bilirubin increased' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row14:col5'])
- dropped unlinked row (NIL): 'Dry skin' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row15:col5'])
- dropped unlinked row (NIL): 'Nausea' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row16:col5', 'Casanova_2023_table_S6:row10:col5'])
- dropped unlinked row (NIL): 'Proteinuria' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row17:col5'])
- dropped unlinked row (NIL): 'HFSR' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row18:col5'])
- dropped unlinked row (NIL): 'Rash' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row19:col5'])
- dropped unlinked row (NIL): 'Rash maculopapular' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row20:col5'])
- dropped unlinked row (NIL): 'Vomiting' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row21:col5', 'Casanova_2023_table_S6:row6:col5'])
- dropped unlinked row (NIL): 'Alopecia' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row22:col5', 'Casanova_2023_table_S6:row13:col5'])
- dropped unlinked row (NIL): 'Erythema' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row23:col5'])
- dropped unlinked row (NIL): 'Headache' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S4:row24:col5', 'Casanova_2023_table_S6:row19:col5'])
- dropped unlinked row (NIL): 'Lethargy' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S6:row16:col5'])
- dropped unlinked row (NIL): 'Asthenia' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S6:row17:col5'])
- dropped unlinked row (NIL): 'Lymphopeniad' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S6:row18:col5'])
- dropped unlinked row (NIL): 'Hypokalemia' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S6:row20:col5'])
- dropped unlinked row (NIL): 'Oral pain' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S6:row21:col5'])
- dropped unlinked row (NIL): 'Pyrexia' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S6:row22:col5'])
- dropped unlinked row (NIL): 'Skin hyperpigmentation' — extend the ontology if this is a real PK parameter (source ['Casanova_2023_table_S6:row23:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=regorafenib
- population split: 'regorafenib 82 mg/m2 sequential with vi (n=13)' subgroup of Casanova_2023 (paper reports 8 populations: regorafenib 72 mg/m2 concomitant with vi (n=2), regorafenib 72 mg/m2 sequential with vi (n=6), regorafenib 72 mg/m2 with vi (con; n = 2), regorafenib 72 mg/m2 with vi (seq; n = 6), regorafenib 82 mg/m2 sequential with vi (n=13), regorafenib 82 mg/m2 with vi (seq; n = 13), total (n = 21), total (n=21))

**Extraction notes:**
- no LLM table selection; kept 4 deterministically-scored parameter table(s)
- table Casanova_2023_table_S3: missing_label
- table Casanova_2023_table_S4: unknown_column_role
- table Casanova_2023_table_S6: unknown_column_role

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[any]` | 13 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[decreased_appetite]` | 3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[rash maculopapular]` |  | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_ae_category]` |  | 3 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bregorafenib%5D%20Regorafenib_Casanova2023_regorafenib_82_mg_m2_sequential_wit&body=Drug%3A%20regorafenib%0ARecord%3A%20Regorafenib_Casanova2023_regorafenib_82_mg_m2_sequential_wit%0APaper%3A%20Casanova_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_regorafenib/Regorafenib_Casanova2023_regorafenib_82_mg_m2_sequential_wit%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 16:03 UTC</sub>
