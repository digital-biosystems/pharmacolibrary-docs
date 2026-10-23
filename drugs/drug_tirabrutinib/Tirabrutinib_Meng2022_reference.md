<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tirabrutinib&quot;,&quot;href&quot;:&quot;drugs/drug_tirabrutinib/&quot;},{&quot;label&quot;:&quot;Meng_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tirabrutinib — `Tirabrutinib_Meng2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="tirabrutinib" model-id="Tirabrutinib_Meng2022_reference" status="rejected" stale="false" population="healthy volunteers and subjects with rheumatoid arthritis" measured-compound="tirabrutinib" parameterization="mechanistic" topology="1C"></div>

## Citation
Meng A, Humeniuk R, Jürgensmeier JM, Hsueh CH, Matzkies F, Grant E et al. Semi-Mechanistic PK/PD Modeling and Simulation of Irreversible BTK Inhibition to Support Dose Selection of Tirabrutinib in Subjects with RA. Clinical pharmacology and therapeutics 111(2):416–424 (2022).
  ·  DOI: [10.1002/cpt.2439](https://doi.org/10.1002/cpt.2439)

## Population and dosing

**Population:** healthy volunteers and subjects with rheumatoid arthritis · condition healthy and rheumatoid arthritis · age group adult · n = 55.

**Dosing:** 20, 320 mg, oral.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| θ1 | equation variable | 58.4 |  | 4 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of θ2: this record has none, the second reading 357. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | RSE% | link | source |
|---|---|---|---|---|---|---|
| θ1 | `Q900` · equation variable | 58.4 |  | 4 | llm (0.6) | cpt2439-tbl-0003:row3:col2, cpt2439-tbl-0003:row3:col3, cpt2439-tbl-0003:row3:col4, cpt2439-tbl-0003:row3:col5, cpt2439-tbl-0003:row17:col2, cpt2439-tbl-0003:row17:col3, cpt2439-tbl-0003:row17:col4, cpt2439-tbl-0003:row17:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameter description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q900 ('θ2', value '357') — already have one for this compound
- dropped duplicate Q900 ('θ3', value None) — already have one for this compound
- dropped duplicate Q900 ('θ4', value '65.7') — already have one for this compound
- dropped unlinked row (NIL): 'θ5' — extend the ontology if this is a real PK parameter (source ['cpt2439-tbl-0003:row7:col2', 'cpt2439-tbl-0003:row7:col3', 'cpt2439-tbl-0003:row7:col4', 'cpt2439-tbl-0003:row7:col5', 'cpt2439-tbl-0003:row21:col2', 'cpt2439-tbl-0003:row21:col3', 'cpt2439-tbl-0003:row21:col4', 'cpt2439-tbl-0003:row21:col5'])
- dropped duplicate Q900 ('θ6', value '0.465') — already have one for this compound
- dropped duplicate Q900 ('√θ7', value '59.7') — already have one for this compound
- dropped duplicate Q900 ('θ8', value '0.284') — already have one for this compound
- dropped unlinked row (NIL): 'θ9' — extend the ontology if this is a real PK parameter (source ['cpt2439-tbl-0003:row11:col2', 'cpt2439-tbl-0003:row11:col3', 'cpt2439-tbl-0003:row11:col4', 'cpt2439-tbl-0003:row11:col5'])
- dropped duplicate Q900 ('√θ6', value '86.5') — already have one for this compound
- dropped unlinked row (NIL): 'θ7' — extend the ontology if this is a real PK parameter (source ['cpt2439-tbl-0003:row23:col2', 'cpt2439-tbl-0003:row23:col3', 'cpt2439-tbl-0003:row23:col4', 'cpt2439-tbl-0003:row23:col5'])
- dropped duplicate Q900 ('√θ8', value '53.3') — already have one for this compound
- dropped duplicate Q900 ('√θ9', value '73.9') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tirabrutinib
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell cpt2439-tbl-0003:row7:col1 = 'Absorption rate constant, ka (h−1)'
- unparsed cell cpt2439-tbl-0003:row21:col1 = 'Feedback rate constant on protein synthesis from BTK inhibition, ksyn (h−1)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.857 (6/7 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[θ2]` |  | 357 | only_one_extracted |

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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btirabrutinib%5D%20Tirabrutinib_Meng2022_reference&body=Drug%3A%20tirabrutinib%0ARecord%3A%20Tirabrutinib_Meng2022_reference%0APaper%3A%20Meng_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tirabrutinib/Tirabrutinib_Meng2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:21 UTC</sub>
