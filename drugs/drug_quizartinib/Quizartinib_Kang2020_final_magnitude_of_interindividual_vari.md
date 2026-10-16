<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/&quot;},{&quot;label&quot;:&quot;Kang_2020 \u00b7 final_magnitude_of_interindividual_variability_final_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quizartinib_Vaddady2024_final&quot;,&quot;label&quot;:&quot;Vaddady_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/Quizartinib_Vaddady2024_final.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quizartinib_Vaddady2024_final_final_quizartinib_model&quot;,&quot;label&quot;:&quot;Vaddady_2024_final_final_quizartinib_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/Quizartinib_Vaddady2024_final_final_quizartinib_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kang_2021_QTcF&quot;,&quot;label&quot;:&quot;Kang_2021 \u00b7 QTcF&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/pd_Kang_2021_QTcF.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quizartinib — `Quizartinib_Kang2020_final_magnitude_of_interindividual_vari`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.938). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of theta_q61_category: this record has none, the second reading 19.3; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Kang D et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2020)
  ·  DOI: [10.1002/jcph.1680](https://doi.org/10.1002/jcph.1680)

<div class="pk-model-meta" hidden drug="quizartinib" model-id="Quizartinib_Kang2020_final_magnitude_of_interindividual_vari" status="rejected" stale="false" population="healthy volunteers and patients with relapsed/refractory acute myeloid leukemia" measured-compound="quizartinib" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (apparent clearance for parent), L/h' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'Vc (apparent volume of distribution for central compartment), L' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'Q1 (intercompartmental clearance 1), L/h' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'Vp1 (apparent volume of distribution for peripheral compartment 1), L' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'Ka (first‐order absorption constant for healthy participants), 1/h' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'D1 (duration of zero‐order input to depot compartment), h' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'F1 (relative F1 for patients)' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'ALAG1 (absorption lag time), h' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iov: 'Minimum value of the objective function = 72 031.19' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iiv: 'Vcm (apparent central volume of distribution for metabolite), L' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'IIV in CLm in healthy volunteers' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'IIV in CLm in patients' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- table section iiv: 'Minimum value of the objective function = −10 302.217' routed out of structural estimates ('Magnitude of Interindividual Variability / Final Estimate')
- table section iiv: 'Minimum value of the objective function = −10 302.217' routed out of structural estimates ('Magnitude of Interindividual Variability / % RSE')
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number None (source ['jcph1680-tbl-0003:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quizartinib
- template fit: none — only the metabolite is modelled — no parent compartment
- model-stage split: 'magnitude of interindividual variability / final estimate' is the final model of Kang_2020 (paper reports 2 stages: final parameter estimate / population mean, magnitude of interindividual variability / final estimate); same population, different model-building step
- row roles: 5 per-group rows of quizartinib covariate_effect but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of quizartinib bioavailability but 0 reference group(s) — kept as printed
- row roles: 6 per-group rows of quizartinib residual_error but 3 reference group(s) — kept as printed
- row roles: 3 per-group rows of AC886 covariate_effect but 0 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: Ka (first‐order absorption constant for healthy participants), 1/h, IIV in CLm in healthy volunteers, Residual variability for healthy volunteer studiesa
- row roles (LLM): model_class=compartmental; 44/44 row label(s) assigned, 20 linked by role; re-tagged quizartinib→parent ×35, quizartinib→AC886 ×12
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- table jcph1680-tbl-0003: unbound_uncertainty
- table jcph1680-tbl-0003: missing_label
- table jcph1680-tbl-0003: ragged_grid
- table jcph1680-tbl-0003: unparsed_numeric_cell
- table Kang_2020_table_4: unbound_uncertainty
- table Kang_2020_table_4: ragged_grid
- table Kang_2020_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (28 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.938 (30/32 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[theta_q61_category]` | not captured | 19.3 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q63_category]` | 19.3 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_quizartinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kang_2020` / `Kang_2020::final_magnitude_of_interindividual_variability_final_estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:46 UTC</sub>
