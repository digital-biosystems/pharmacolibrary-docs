<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09A&quot;,&quot;href&quot;:&quot;atc/V09A.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) exametazime&quot;,&quot;href&quot;:&quot;drugs/drug_technetium_99mtc_exametazime/&quot;},{&quot;label&quot;:&quot;Lassen_1988 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# technetium (99mTc) exametazime — `Technetium99mtcExametazime_Lassen1988_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.083). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because technetium 99mTc exametazime’s Kp tissue-to-plasma partition coefficient is reported as 0.67 ml/g, a structural parameter dimension mismatch.**

Kp is identified as a tissue-to-plasma partition coefficient, but its recorded unit is ml/g. The record was built from the abstract alone, so reported summary statistics stood in for a fitted model. Extracted — hydrophilic HM-PAO: kfm 0.8 min-1; technetium_99mtc_exametazime (lipophilic HM-PAO): kel 0.69 min-1, CL 0.45 ml/g/min, Kp 0.67 ml/g.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has technetium_99mtc_exametazime (HM-PAO), the second reading technetium_99mtc_exametazime; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

> **Dose compound ≠ measured compound:** dosed `technetium_99mtc_exametazime (HM-PAO)`, measured `technetium_99mtc_exametazime (lipophilic HM-PAO)`.

## Citation
Lassen NA et al., The retention of [99mTc]-d,l-HM-PAO in…, Journal of cerebral blood f… (1988)
  ·  DOI: [10.1038/jcbfm.1988.28](https://doi.org/10.1038/jcbfm.1988.28)

<div class="pk-model-meta" hidden drug="technetium (99mTc) exametazime" model-id="Technetium99mtcExametazime_Lassen1988_reference" status="rejected" stale="false" population="human subjects receiving intracarotid HM-PAO" measured-compound="technetium_99mtc_exametazime (lipophilic HM-PAO)" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| average retained fraction of all tracer supplied to the brain, R | `Q900` · equation variable | 0.38 | not captured | not captured | not captured | not captured | llm (0.6) | Lassen_1988:abstract | — | not captured |
| conversion rate constant (lipophilic to hydrophilic tracer) in the brain k3 | `Q305` · kfm | 0.80 | min-1 | 0.013333333333333334 | [1] / [min] | not captured | exact (1.0) | Lassen_1988:abstract | — | not captured |
| efflux rate constant (brain to blood) k2 | `Q47` · kel | 0.69 | min-1 | 0.0115 | [1] / [min] | not captured | exact (1.0) | Lassen_1988:abstract | — | not captured |
| influx (blood clearance) constant K1 | `Q22` · CL | 0.45 | ml/g/min | 0.000525 | [ml] / [[min] · [g]] | not captured | exact (1.0) | Lassen_1988:abstract | — | not captured |
| brain/blood partition ratio lambda | `Q410` · Kp | 0.67 | ml/g | not captured | [ml] / [g] | not captured | llm_corrected (0.6) | Lassen_1988:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('conversion/clearance ratio alpha', value '1.18') — already have one for this compound
- unit_dimension_mismatch: 'influx (blood clearance) constant K1' → Q22 (unit '[length] ** 3 / [mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'brain/blood partition ratio lambda' → Q410 (unit '[length] ** 3 / [mass]' vs ontology 'dimensionless') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=technetium_99mtc_exametazime (lipophilic HM-PAO)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 6/6 row label(s) assigned, 3 linked by role; re-tagged technetium_99mtc_exametazime (lipophilic HM-PAO)→hydrophilic HM-PAO ×1
- molar mass: no plausible PubChem entry for 'technetium_99mtc_exametazime (lipophilic HM-PAO)' ('technetium-99m exametazime') — left in mass units
- molar mass: no plausible PubChem entry for 'hydrophilic HM-PAO' ('no full name in the paper') — left in mass units
- molar mass: none found for 'technetium_99mtc_exametazime (lipophilic HM-PAO)' — its concentrations stay mass-only
- molar mass: none found for 'hydrophilic HM-PAO' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Lassen_1988_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.083 (1/12 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['technetium_99mtc_exametazime (lipophilic hm-pao)', 'hydrophilic hm-pao', 'metabolism']] | [] | mismatch |
| `qwen3.8-27b` | `parameters[alpha]` | not captured | 1.18 | only_one_extracted |
| `qwen3.8-27b` | `parameters[average retained fraction of all tracer supplied to the brain, r]` | 0.38 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[brain/blood partition ratio lambda]` | 0.67 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[conversion rate constant (lipophilic to hydrophilic tracer) in the brain k3]` | 0.80 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[efflux rate constant (brain to blood) k2]` | 0.69 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[influx (blood clearance) constant k1]` | 0.45 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[k1]` | not captured | 0.45 | only_one_extracted |
| `qwen3.8-27b` | `parameters[k3]` | not captured | 0.8 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | technetium_99mtc_exametazime (HM-PAO) | technetium_99mtc_exametazime | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | technetium_99mtc_exametazime (lipophilic HM-PAO) | technetium_99mtc_exametazime | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | [length] ** 3 / [mass] / [time] | ml/g/min | not captured | not captured | ['Lassen_1988:abstract'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Lassen_1988:abstract'] |
| C5_dimension_Q410 | fail | [length] ** 3 / [mass] | ml/g | not captured | not captured | ['Lassen_1988:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Lassen_1988:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.45 | not captured | not captured | ['Lassen_1988:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.89e+03 L/h | not captured | not captured | ['Lassen_1988:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_technetium_99mtc_exametazime/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lassen_1988` / `Lassen_1988::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:53 UTC</sub>
