<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;necitumumab&quot;,&quot;href&quot;:&quot;drugs/drug_necitumumab/&quot;},{&quot;label&quot;:&quot;Long_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# necitumumab — `Necitumumab_Long2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the peripheral compartment is unreachable from the dose, and the clearance parameter is mislabeled as inter-compartmental clearance.

<div class="pk-model-meta" hidden drug="necitumumab" model-id="Necitumumab_Long2017_reference" status="rejected" stale="false" population="cancer patients" measured-compound="necitumumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Long A, Chigutsa E, Wallin J. Population Pharmacokinetics of Necitumumab in Cancer Patients. Clinical pharmacokinetics 56(5):505–514 (2017).
  ·  DOI: [10.1007/s40262-016-0452-x](https://doi.org/10.1007/s40262-016-0452-x)

## Population and dosing

**Population:** cancer patients · condition cancer · age group adult · n = #807.

**Dosing:** 600, 800 mg, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Central volume of distribution, V 1 (L)b | V1 | 3.6 | L |
| Inter-compartmental CL, Q (L/h) | CL | 0.0198 | L/h |
| Peripheral volume of distribution, V 2 (L)b | V2 | 3.31 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the peripheral compartment is unreachable from the dose, and the clearance parameter is mislabeled as inter-compartmental clearance.**

The model structure defines a two-compartment system, but the parameter labeled 'Inter-compartmental CL' has a meaning defined as total clearance, creating a structural inconsistency. The second reader identified a discrepancy where the record lists 0.0198 L/h for this parameter, while the reader found 0.0113 L/h for the corresponding clearance field. Additionally, the second reader noted that the central volume of distribution was recorded as null in one instance, conflicting with the extracted value of 3.6 L. Extracted — necitumumab: V1 3.6 L, CL 0.0198 L/h, V2 3.31 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of central volume of distribution, v 1 (l)b: this record has 3.6, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Central volume of distribution, V 1 (L)b | `Q63` · V1 | 3.6 | L | 0.0036 | m3 | L | boundary_compartment (0.9) | Long_2017:results_prose |
| Inter-compartmental CL, Q (L/h) | `Q22` · CL | 0.0198 | L/h | 5.5e-09 | m3/s | L/h | boundary (0.8) | Long_2017:results_prose |
| Peripheral volume of distribution, V 2 (L)b | `Q64` · V2 | 3.31 | L | 0.00331 | m3 | L | boundary_compartment (0.9) | Long_2017:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['Tab4:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Vss' from footnote/prose loose number None (source ['Tab4:footnote']); the table cell was unparseable — needs review
- covariate bodyweight for CL from footnote/prose kept as documentation only (['Tab4:footnote'])
- covariate bodyweight for Q from footnote/prose kept as documentation only (['Tab4:footnote'])
- covariate bodyweight for V1 from footnote/prose kept as documentation only (['Tab4:footnote'])
- covariate bodyweight for V2 from footnote/prose kept as documentation only (['Tab4:footnote'])
- salvaged Q63 ('Central volume of distribution, V 1 (L)b'=3.6) from results prose — parameter table was unreadable
- salvaged Q22 ('Inter-compartmental CL, Q (L/h)'=0.0198) from results prose — parameter table was unreadable
- salvaged Q64 ('Peripheral volume of distribution, V 2 (L)b'=3.31) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=necitumumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'necitumumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central volume of distribution, v 1 (l)b]` | 3.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cltot]` |  | 0.0141 | only_one_extracted |
| `gpt-oss-120b` | `parameters[inter-compartmental cl, q]` | 0.0198 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution, v 2 (l)b]` | 3.31 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0198 | ['Long_2017:results_prose'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0198 L/h | ['Long_2017:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.6 L | ['Long_2017:results_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.31 L | ['Long_2017:results_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnecitumumab%5D%20Necitumumab_Long2017_reference&body=Drug%3A%20necitumumab%0ARecord%3A%20Necitumumab_Long2017_reference%0APaper%3A%20Long_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_necitumumab/Necitumumab_Long2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:23 UTC</sub>
