<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;fitusiran&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/&quot;},{&quot;label&quot;:&quot;Fan_2026 \u00b7 humansa&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fitusiran — `Fitusiran_Fan2026_humansa`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The fitusiran record was rejected because the paper reports no distribution volume and no clearance, and the Km value 97.75 carries a dimension mismatch on a structural parameter.**

The record is not a compartmental population PK model: no distribution volume and no clearance or elimination rate are reported, as it is an exposure/outcome paper. A dimension mismatch was flagged on a structural parameter, and the Km unit could not be converted to SI, so the parameter lacked an SI value. The second reader additionally reported four parameters absent from this record: fesc 0.037, kdegd 0.014, kpliver 0.18, and psliver 144.7. Extracted — fitusiran: kabs 0.23 units, fu 39.3 units, Rtot 14.3 nM, Vmax 4.37 nmol/h, Km 97.8 units, koff 0.023 units, kint 4.69 nM−1·h−1, KD 0.0061 nM.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has fitusiran, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:00.860611+00:00) predates the upstream re-run (2026-10-05 19:26:36.829458+00:00). Current validate status: `rejected`.

## Citation
Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026)
  ·  DOI: [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936)

<div class="pk-model-meta" hidden drug="fitusiran" model-id="Fitusiran_Fan2026_humansa" status="rejected" stale="true" population="multiple species (mouse, rat, monkey, human)" measured-compound="fitusiran" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (1/h) | `Q49` · kabs | 0.23 | 1/h | 6.38888888888889e-05 | 1/h | not captured | exact (1.0) | tbl1:row3:col5 | — | not captured |
| Fu (1/h) | `Q46` · fu | 39.32 | not captured | not captured | not captured | not captured | exact (1.0) | tbl1:row4:col5 | — | not captured |
| RTOT0 (nM) | `Q333` · Rtot | 14.34 | nM | not captured | [nM] | not captured | llm (0.6) | tbl1:row9:col5 | — | not captured |
| Vm (nmol/h) | `Q66` · Vmax | 4.37 | nmol/h | not captured | [nM] / [h] | not captured | special_case (0.95) | tbl1:row10:col5 | — | not captured |
| Km (∗105 nM) | `Q1` · Km | 97.75 | not captured | not captured | not captured | not captured | exact (1.0) | tbl1:row11:col5 | — | not captured |
| koff (1/h) | `Q330` · koff | 0.023 | 1/h | 6.3888888888888885e-06 | 1/h | not captured | exact (1.0) | tbl1:row12:col5 | — | not captured |
| kint (1/h) | `Q334` · kint | 4.69 | 1/h | 0.001302777777777778 | 1/h | not captured | exact (1.0) | tbl1:row15:col5 | — | not captured |
| KDEGE (∗10−6 h−1) | `Q47` · kel | 0.0076 | 1/h | 2.111111111111111e-06 | 1/h | not captured | llm (0.6) | tbl1:row22:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'PSLiver (L/h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row5:col5'])
- dropped unlinked row (NIL): 'KPLiver' — extend the ontology if this is a real PK parameter (source ['tbl1:row6:col5'])
- dropped unlinked row (NIL): 'KPRem' — extend the ontology if this is a real PK parameter (source ['tbl1:row7:col5'])
- dropped unlinked row (NIL): 'KDEGD (1/h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row8:col5'])
- unit_dimension_mismatch: 'RTOT0 (nM)' → Q333 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Vm (nmol/h)' → Q66 (unit '[substance] / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'fesc' — extend the ontology if this is a real PK parameter (source ['tbl1:row14:col5'])
- unit_dimension_unknown: 'nM−1·h−1' (kint)
- dropped PD-category row 'Ksyn (nM/h)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row19:col5'])
- dropped unlinked row (NIL): 'Kass (∗10−6 h−1)' — extend the ontology if this is a real PK parameter (source ['tbl1:row20:col5'])
- dropped unlinked row (NIL): 'Kdis (∗10−3 h−1)' — extend the ontology if this is a real PK parameter (source ['tbl1:row21:col5'])
- dropped PD-category row 'kdeg, m (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row26:col5'])
- dropped PD-category row 'kdeg, p (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row27:col5'])
- dropped unlinked row (NIL): 'Smax' — extend the ontology if this is a real PK parameter (source ['tbl1:row28:col5'])
- dropped PD-category row 'SC50 (nM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row29:col5'])
- dropped unlinked row (NIL): 'γ1' — extend the ontology if this is a real PK parameter (source ['tbl1:row30:col5'])
- dropped unlinked row (NIL): 'γ2' — extend the ontology if this is a real PK parameter (source ['tbl1:row31:col5'])
- implicit units: 'ka (1/h)' → 1/h (from the paper text: "The text states: 'FU and ka represent the apparent clearance in plasma and the first-order absorption rate of GalNAc-SiR")
- implicit units: 'Km (∗105 nM)' — the LLM proposed 'nM', whose dimension does not fit Q1; left unset
- implicit units: 'koff (1/h)' → 1/h (from the paper text: "The text states: 'kon and koff are the association and dissociation rate constants for GalNAc binding to ASGPR'. Dissoci")
- implicit units: 'kint (1/h)' → 1/h (from the paper text: "The text states: 'kint and kcle represent the cellular internalization rate of bound ASGPR and the cleavage rate of GalN")
- implicit units: 'KDEGE (∗10−6 h−1)' → 1/h (from the paper text: "The text states: 'The estimated endosomal siRNA degradation rate constant (KDEGE) was 0.0083 h−1'. This explicitly provi")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fitusiran
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'humansa' subgroup of Fan_2026 (paper reports 4 populations: humansa, micea, monkeysc, ratsb)
- molar mass: none found for 'fitusiran' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table S3 transcribed (42 record(s))
- LLM selected parameter table(s) 1, S3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.444 (8/18 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['fitusiran', 'target mrna', 'interconversion'], ['target mrna', 'target protein', 'interconversion']] | mismatch |
| `gpt-oss:120b` | `parameters[fesc]` | not captured | 0.037 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kdegd]` | not captured | 0.014 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kdege]` | 0.0076 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[kdis]` | not captured | 0.0061 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kpliver]` | not captured | 0.18 | only_one_extracted |
| `gpt-oss:120b` | `parameters[rtot0].parameter_id` | Q333 | Q86 | mismatch |
| `gpt-oss:120b` | `parameters[γ1]` | not captured | 0.074 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | fitusiran | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | fitusiran | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q330 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl1:row12:col5'] |
| C5_dimension_Q333 | fail | [length] | nM | not captured | not captured | ['tbl1:row9:col5'] |
| C5_dimension_Q334 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl1:row15:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl1:row22:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl1:row3:col5'] |
| C5_dimension_Q66 | fail | [substance] / [time] | nmol/h | not captured | not captured | ['tbl1:row10:col5'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tbl1:row11:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_fitusiran/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fan_2026` / `Fan_2026::humansa`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 19:26 UTC</sub>
