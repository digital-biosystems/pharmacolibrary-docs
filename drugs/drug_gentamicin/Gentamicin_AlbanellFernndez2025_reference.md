<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;gentamicin&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/&quot;},{&quot;label&quot;:&quot;Albanell-Fern\u00e1ndez_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gentamicin_Crcek2019_reference&quot;,&quot;label&quot;:&quot;Crcek_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Crcek2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gentamicin_AlbanellFernndez2025_reference&quot;,&quot;label&quot;:&quot;Albanell-Fern\u00e1ndez_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_AlbanellFernndez2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Gentamicin_Hodiamont2022v2_reference&quot;,&quot;label&quot;:&quot;Hodiamont_2022_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Hodiamont2022v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gentamicin — `Gentamicin_AlbanellFernndez2025_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped
**Second reading:** `gpt-oss:120b` read this paper differently on `screen.dose_compound` (vancomycin vs unknown) and 1 more field(s) — a structural parameter, so the record is disputed.
**How to address:** Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
<sub>owner: **scholar**</sub>

## Citation
Albanell-Fernández M; Rodríguez-Reyes M; Bastida C; Soy D et al. (2025). Clinical pharmacokinetics 64
  ·  DOI: [10.1007/s40262-024-01459-z](https://doi.org/10.1007/s40262-024-01459-z)

## Model component
<dbs-pgx drug="gentamicin" model-id="Gentamicin_AlbanellFernndez2025_reference" status="model_quarantined" stale="false" population="neonates and infants" measured-compound="vancomycin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Mean V d in L/kg | `Q61` · V | 0.66 | not captured | not captured | not captured | not captured | llm (0.5) | tab_4:row0:col7, tab_4:row0:col10, tab_4:row0:col12, tab_4:row0:col17, tab_4:row0:col19, tab_4:row0:col24, tab_4:row0:col26, tab_4:row0:col27, tab_4:row0:col29 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Mean CL in L/h/kg | Q22 | not captured | boundary |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q61 ('V d equation', value None) — already have one for this compound
- dropped duplicate Q22 ('CL equation', value None) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vancomycin

**Extraction notes:**
- unparsed cell tab_4:row0:col3 = '1.18 (for mean weight 2 kg, PCA'
- unparsed cell tab_4:row0:col4 = '40 wks, Cr)'
- unparsed cell tab_4:row0:col9 = 'M1:'
- unparsed cell tab_4:row0:col11 = 'M2:'
- unparsed cell tab_4:row0:col20 = '0.562 (PMA ≤32 wks)'
- unparsed cell tab_4:row0:col21 = '0.498 (PMA &gt;32 wks)'
- unparsed cell tab_4:row1:col9 = 'M1:'
- unparsed cell tab_4:row1:col11 = 'M2:'
- unparsed cell tab_4:row4:col3 = 'M1 and 2: WT'
- unparsed cell tab_4:row4:col9 = 'M1 and 2: WT'
- unparsed cell tab_4:row5:col3 = 'M1: 0.129'
- unparsed cell tab_4:row5:col4 = 'M2: 0.069 (for mean weight'
- unparsed cell tab_4:row5:col5 = '2 kg, PCA 40 wks, Cr 0.62'
- unparsed cell tab_4:row5:col9 = 'M1: 1-CMT: 0.063'
- unparsed cell tab_4:row5:col10 = 'M2: 2-CMT: 0.059 (if no DA'
- unparsed cell tab_4:row5:col21 = '0.07 presence or 0.086 absence'
- unparsed cell tab_4:row5:col26 = 'and weight 1.52 kg)'
- unparsed cell tab_4:row5:col33 = '0.075 (for median weight 1.38'
- unparsed cell tab_4:row5:col35 = '37 wks)'
- unparsed cell tab_4:row6:col27 = '0.000127 × PNA + 0.0123 ×'
- unparsed cell tab_4:row6:col28 = 'GA28) + 0.006'
- unparsed cell tab_4:row6:col30 = 'GA &lt;28 wks'
- unparsed cell tab_4:row6:col33 = 'PCA &lt;34 wks'
- unparsed cell tab_4:row6:col35 = 'for PCA ≥34 wks'
- unparsed cell tab_4:row7:col3 = 'Schaible et al., 1986 [33] M1: PCA'
- unparsed cell tab_4:row7:col4 = 'M2: WT, Cr'
- unparsed cell tab_4:row7:col7 = 'Asbury et al., 1993 [34] PCA'
- unparsed cell tab_4:row7:col9 = 'Seay et al., 1994 [21] M1 and 2: WT, DA, GA'
- unparsed cell tab_4:row7:col17 = 'Rodvold et al., 1995 [35] CLCr'
- unparsed cell tab_4:row7:col19 = 'Burstein et al., 1997 [22] WT'
- unparsed cell tab_4:row7:col21 = 'Silva et al., 1998 [36] IND, VENT'
- unparsed cell tab_4:row7:col25 = 'Grimsley et al., 1999 [37] WT, Cr'
- unparsed cell tab_4:row7:col27 = 'De Hoog et al., 2000 [38] WT'
- unparsed cell tab_4:row7:col28 = 'Capparelli et al., 2001 [23] WT, Cr, PNA, GA'
- unparsed cell tab_4:row7:col33 = 'Kimura et al., 2004 [39] WT, Cr'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.667 (4/6 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `screen.dose_compound` | vancomycin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | vancomycin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 1 scholar param(s) emitted or defaulted | 1 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_gentamicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Albanell-Fernández_2025` / `Albanell-Fernández_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_gentamicin/models/modelica/_needs_review/Gentamicin_AlbanellFernndez2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_gentamicin/models/modelica/_needs_review/Gentamicin_AlbanellFernndez2025_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-15 12:09 UTC</sub>
