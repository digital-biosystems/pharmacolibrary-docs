<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;disulfiram&quot;,&quot;href&quot;:&quot;drugs/drug_disulfiram/&quot;},{&quot;label&quot;:&quot;Lee_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# disulfiram — `Disulfiram_Lee2019_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The disulfiram record was held back because its model structure is nonlinear — the metabolism links from disulfiram to DDTC and from DDTC to DDTC-Me use Vmax/Km (nonlinear) rather than linear clearance parameters.**

The record describes disulfiram (Antabuse) in HIV+ ART-suppressed adults with a four-step metabolite cascade (DDTC, DDTC-Me, DETC-MeSO, carbamathione), where the first two metabolism steps are specified as Vmax/Km (nonlinear) links. Only parent parameters were extracted: CL 0.53 L/hr, V 1.3 L, and absorption rate constant kabs 0.08 hr−1; no values exist for the metabolite compartments (each has n_cmt 0) or the link parameters. This nonlinear topology falls outside the model structures that can be built, so the record was marked needs_review rather than published. Extracted — disulfiram: CL 0.53 L/hr, V 1.3 L, kabs 0.08 hr−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has disulfiram → ddtc (m1) (metabolism); ddtc (m1) → ddtc-me (m2) (metabolism); ddtc-me (m2) → detc-meso (m3) (metabolism) …, the second reading disulfiram → n,n-diethyldithiocarbamate (ddtc) (metabolism); n,n-diethyldithiocarbamate (ddtc) → diethyldithiocarbamate-methyl ester (ddtc-me) (metabolism); diethyldithiocarbamate-methyl ester (ddtc-me) → s-methyl-n,n-diethylthiolcarbamate sulfoxide (detc-meso) (metabolism) …. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Lee SA et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacology and t… (2019)
  ·  DOI: [10.1002/cpt.1220](https://doi.org/10.1002/cpt.1220)

<div class="pk-model-meta" hidden drug="disulfiram" model-id="Disulfiram_Lee2019_reference" status="needs_review" stale="false" population="HIV+ ART-suppressed adults" measured-compound="disulfiram" parameterization="mechanistic" topology="manual_model_class"></div>

**Model structure:** nonlinear / manual; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| clearance | `Q22` · CL | 0.53 | L/hr | 1.4722222222222225e-07 | L/h | not captured | exact (1.0) | Lee_2019:other_prose | — | not captured |
| volume of distribution | `Q61` · V | 1.3 | L | 0.0013000000000000002 | L | not captured | exact (1.0) | Lee_2019:other_prose | — | not captured |
| absorption constant | `Q49` · kabs | 0.08 | hr−1 | 2.2222222222222223e-05 | 1/h | not captured | exact (1.0) | Lee_2019:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'CL/F (L/hr)b'
- dropped value-less row: 'CLintrinsic (L/hr)b'
- dropped value-less row: 'V (L)c'
- dropped value-less row: 'Km (ng/mL)d'
- dropped value-less row: 'Ka (hr−1)e'
- dropped value-less row: 'Qf'
- dropped value-less row: 'Vperiph (L)g'
- dropped value-less row: 'Additive RE (ng/mL)' (captured trailing unit 'ng/mL' for child rows)
- dropped value-less row: 'Proportional RE (%)' (captured trailing unit '%' for child rows)
- dropped value-less row: 'BV (%) in CL/F'
- dropped value-less row: 'Table 3.. Final PK model estimates for median AUC0–72 exposure to metabolites by dosing cohort.'
- dropped value-less row: 'Abbreviations: DSF = parent drug, disulfiram; M1 = metabolite 1; M2 = metabolite 2; M3 = metabolite 3; M4 = metabolite 4; DSF = disulfiram; DDTC = N,N-diethyldithiocarbamate; DDTC = diethyldithiocarbamate-methyl ester; DDTC-MeSO = S-methyl-N,N-diethylthiolcarbamate sulfoxide.'
- salvaged Q22 ('clearance'=0.53) from results prose — parameter table was unreadable
- salvaged Q61 ('volume of distribution'=1.3) from results prose — parameter table was unreadable
- salvaged Q49 ('absorption constant'=0.08) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (clearance); Q61 (volume of distribution)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=disulfiram
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 13 linked by role; re-tagged disulfiram→parent ×4, parent→DDTC (M1) ×1
- molar mass: no plausible PubChem entry for 'carbamathione (M4)' ('carbamathione') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'DETC-MeSO (M3)' (LLM) — left in mass units
- molar mass: none found for 'DETC-MeSO (M3)' — its concentrations stay mass-only
- molar mass: none found for 'carbamathione (M4)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 2 transcribed (26 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.857 (6/7 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['disulfiram', 'ddtc (m1)', 'metabolism'], ['ddtc (m1)', 'ddtc-me (m2)', 'metabolism'], ['ddtc-me (m2)', 'detc-meso (m3)', 'metabolism'], ['detc-meso (m3)', 'carbamathione (m4)', 'metabolism']] | [['disulfiram', 'n,n-diethyldithiocarbamate (ddtc)', 'metabolism'], ['n,n-diethyldithiocarbamate (ddtc)', 'diethyldithiocarbamate-methyl ester (ddtc-me)', 'metabolism'], ['diethyldithiocarbamate-methyl ester (ddtc-me)', 's-methyl-n,n-diethylthiolcarbamate sulfoxide (detc-meso)', 'metabolism'], ['s-methyl-n,n-diethylthiolcarbamate sulfoxide (detc-meso)', 'carbamathione', 'metabolism']] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.53 | not captured | not captured | ['Lee_2019:other_prose'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.53 L/h | not captured | not captured | ['Lee_2019:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.3 L | not captured | not captured | ['Lee_2019:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_disulfiram/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lee_2019` / `Lee_2019::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:19 UTC</sub>
