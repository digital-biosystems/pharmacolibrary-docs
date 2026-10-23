<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;clozapine&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/&quot;},{&quot;label&quot;:&quot;Albitar_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clozapine_Geers2022_reference&quot;,&quot;label&quot;:&quot;Geers_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Geers2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clozapine — `Clozapine_Albitar2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="clozapine" model-id="Clozapine_Albitar2024_reference" status="rejected" stale="false" population="healthy non-smoking volunteers" measured-compound="clozapine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Albitar O, Harun SN, Sheikh Ghadzi SM. Semi-physiological Pharmacokinetic Model of Clozapine and Norclozapine in Healthy, Non-smoking Volunteers: The Impact of Race and Genetics. CNS drugs 38(7):571–581 (2024).
  ·  DOI: [10.1007/s40263-024-01092-1](https://doi.org/10.1007/s40263-024-01092-1)

## Population and dosing

**Population:** healthy non-smoking volunteers · condition healthy · age group adult.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Clozapine: 2-comp Norclozapine: 2-comp Absorption: Semi-physiological | Fab | 2 |  |
| Clozapine: 2-comp Norclozapine: 2-comp Fraction metabolized prior and post absorption | fm | 0 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.444). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of tvcl = theta(3)*(theta(13)**rc)*(theta(14)**rf); clozapine cl in final model ;tvcl = theta(3)*(theta(13)**abcb); clozapine cl in univariate analysis *wt; total liver blood flow tvf1 = theta(12); bioavailability: this record has none, the second reading none; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| Clozapine: 2-comp Norclozapine: 2-comp Absorption: Semi-physiological | `Q40` · Fab | 2 |  | llm_confirmed (0.6) | Albitar_2024_table_2:row2:col1, Albitar_2024_table_2:row2:col3, Albitar_2024_table_2:row2:col4 |
| Clozapine: 2-comp Norclozapine: 2-comp Fraction metabolized prior and post absorption | `Q45` · fm | 0 |  | llm_confirmed (0.6) | Albitar_2024_table_2:row5:col1, Albitar_2024_table_2:row5:col3, Albitar_2024_table_2:row5:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| TVCL = THETA(3)*(THETA(13)**RC)*(THETA(14)**RF); CLOZAPINE CL IN FINAL MODEL ;TVCL = THETA(3)*(THETA(13)**ABCB); CLOZAPINE CL IN UNIVARIATE ANALYSIS *WT; TOTAL LIVER BLOOD FLOW TVF1 = THETA(12); BIOAVAILABILITY | Q40 | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- column 'step' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'δ number of parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'reference' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Clozapine: 1-comp Norclozapine: 1-comp Absorption: Semi-physiological' — extend the ontology if this is a real PK parameter (source ['Albitar_2024_table_2:row0:col3'])
- dropped unlinked row (NIL): 'Clozapine: 2-comp Norclozapine: 1-comp Absorption: Semi-physiological' — extend the ontology if this is a real PK parameter (source ['Albitar_2024_table_2:row1:col1', 'Albitar_2024_table_2:row1:col3', 'Albitar_2024_table_2:row1:col4'])
- dropped unlinked row (NIL): 'Clozapine: 3-comp Norclozapine: 2-comp Absorption: Semi-physiological' — extend the ontology if this is a real PK parameter (source ['Albitar_2024_table_2:row3:col1', 'Albitar_2024_table_2:row3:col3', 'Albitar_2024_table_2:row3:col4'])
- dropped unlinked row (NIL): 'Clozapine: 2-comp Norclozapine: 3-comp Absorption: Semi-physiological' — extend the ontology if this is a real PK parameter (source ['Albitar_2024_table_2:row4:col1', 'Albitar_2024_table_2:row4:col3', 'Albitar_2024_table_2:row4:col4'])
- dropped duplicate Q45 ('Clozapine: 2-comp Norclozapine: 2-comp Fraction metabolized prior absorption and full metabolism after absorption', value '-1') — already have one for this compound
- dropped duplicate Q45 ('Clozapine: 2-comp Norclozapine: 2-comp Same fraction metabolized prior and post absorption', value '-1') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clozapine
- template fit: none — only the metabolite is modelled — no parent compartment
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 1 linked by role; re-tagged clozapine→parent ×1
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clozapine: 1-comp norclozapine: 1-comp absorption: semi-physiological]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clozapine: 2-comp norclozapine: 2-comp absorption: semi-physiological]` | 2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clozapine: 2-comp norclozapine: 2-comp fraction metabolized prior and post absorption]` | 0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clozapine: 2-comp norclozapine: 2-comp fraction metabolized prior and post absorption]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvcl = theta(3)*(theta(13)**rc)*(theta(14)**rf); clozapine cl in final model ;tvcl = theta(3)*(theta(13)**abcb); clozapine cl in univariate analysis *wt; total liver blood flow tvf1 = theta(12); bioavailability]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 3 |
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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclozapine%5D%20Clozapine_Albitar2024_reference&body=Drug%3A%20clozapine%0ARecord%3A%20Clozapine_Albitar2024_reference%0APaper%3A%20Albitar_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clozapine/Clozapine_Albitar2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 15:14 UTC</sub>
