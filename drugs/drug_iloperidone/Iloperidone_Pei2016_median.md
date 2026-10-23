<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;iloperidone&quot;,&quot;href&quot;:&quot;drugs/drug_iloperidone/&quot;},{&quot;label&quot;:&quot;Pei_2016 \u00b7 median&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iloperidone — `Iloperidone_Pei2016_median`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="iloperidone" model-id="Iloperidone_Pei2016_median" status="rejected" stale="false" population="Chinese schizophrenia patients" measured-compound="iloperidone" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Pei Q, Huang L, Huang J, Gu JK, Kuang Y, Zuo XC et al. Influences of CYP2D6. Acta pharmacologica Sinica 37(11):1499–1508 (2016).
  ·  DOI: [10.1038/aps.2016.96](https://doi.org/10.1038/aps.2016.96)

## Population and dosing

**Population:** Chinese schizophrenia patients · condition schizophrenia · age group adult · n = 70.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.308). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of k 20: this record has none, the second reading 0.068; it also differs on 8 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'K 20 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'V 2 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'K 23 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'K 24 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iov: 'K 20' routed out of structural estimates ('Inter-occasion variability')
- table section residual_error: 'CV 1 (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'CV 2 (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'CV 3 (%)' routed out of structural estimates ('Residual variability')
- dropped value-less row: 'K 20 (h -1 )' (captured trailing unit 'h -1' for child rows)
- dropped value-less row: 'K 30 (h -1 )' (captured trailing unit 'h -1' for child rows)
- dropped value-less row: 'K 40 (h -1 )' (captured trailing unit 'h -1' for child rows)
- dropped value-less row: 'V 2 (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'K 23 (h -1 )' (captured trailing unit 'h -1' for child rows)
- dropped value-less row: 'K 24 (h -1 )' (captured trailing unit 'h -1' for child rows)
- dropped value-less row: 'CYP2D6*10 C/T on K 24'
- dropped value-less row: 'CYP2D6*10 T/T on K 24'
- dropped value-less row: 'CYP2D6*10 T/T on K 23'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=iloperidone
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- population split: 'median' subgroup of Pei_2016 (paper reports 2 populations: estimate, median)
- row roles: 2 per-group rows of M2 (P-95) covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 27 linked by role; re-tagged parent→M1 (P-88) ×21, parent→M2 (P-95) ×25

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | primary re-run | 0.308 (4/13 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cyp2d6_10_c_t_on_k_24]` |  | 0.699 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_10_t_t_on_k_23]` |  | 1.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cyp2d6_10_t_t_on_k_24]` |  | 0.488 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 20]` |  | 0.068 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 23]` |  | 0.00459 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 24]` |  | 0.00664 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 30]` |  | 0.161 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 40]` |  | 0.108 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2]` |  | 668 | only_one_extracted |

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
| C8_topology | fail |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biloperidone%5D%20Iloperidone_Pei2016_median&body=Drug%3A%20iloperidone%0ARecord%3A%20Iloperidone_Pei2016_median%0APaper%3A%20Pei_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iloperidone/Iloperidone_Pei2016_median%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 15:48 UTC</sub>
