# azathioprine — `Azathioprine_Yang2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `V/F`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a compartment is unreachable, or a metabolite is unlinked.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Check the record's links in _interpretv2.yaml — every compartment needs a path to the dosed one.
3. Parent/metabolite records commonly miss the formation link.

<sub>owner: **curator** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `unknown`, measured `mycophenolic acid`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Yang X; Sherwin CM; Yu T; Yellepeddi VK; Brunner HI; Vinks AA et al. (2015). Expert review of clinical pharmacology 8
  ·  DOI: [10.1586/17512433.2015.1059751](https://doi.org/10.1586/17512433.2015.1059751)

## Model component
<dbs-pgx drug="azathioprine" model-id="Azathioprine_Yang2015_reference" status="rejected" stale="false" population="unknown" measured-compound="mycophenolic acid" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| initial volume of distribution | `Q61` · V | —(suppressed) | l/kg | — | L | not captured | boundary (0.8) | Yang_2015:other_prose | — | not captured |
| oral CL (CL/F) | `Q22` · CL | —(suppressed) | l/h/kg | — | L/h | not captured | boundary (0.8) | Yang_2015:other_prose | — | not captured |
| apparent volume of distribution following oral administration (Vd/F) | `Q76` · V/F | —(suppressed) | 1/kg | — | 1/kg | not captured | boundary (0.8) | Yang_2015:other_prose | — | not captured |
| absorption lag time | `Q83` · tlag | —(suppressed) | h | — | h | not captured | exact (1.0) | Yang_2015:other_prose | — | not captured |
| absorption rate constant (Ka) | `Q49` · kabs | —(suppressed) | h−1 | — | 1/h | not captured | exact (1.0) | Yang_2015:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Filler et al. (2003)' — extend the ontology if this is a real PK parameter (source ['T1:row1:col3', 'T1:row1:col6'])
- dropped unlinked row (NIL): 'Jiao et ai. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row2:col1', 'T1:row2:col3', 'T1:row2:col6', 'T1:row2:col7', 'T1:row2:col8'])
- dropped unlinked row (NIL): 'Neumann et ai. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row3:col1', 'T1:row3:col3', 'T1:row3:col6'])
- dropped unlinked row (NIL): 'Mino et al. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row4:col1', 'T1:row4:col3', 'T1:row4:col6'])
- dropped unlinked row (NIL): 'Zahr et al. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row5:col1', 'T1:row5:col3', 'T1:row5:col6'])
- dropped unlinked row (NIL): 'de Winter et al. (2009)' — extend the ontology if this is a real PK parameter (source ['T1:row6:col1', 'T1:row6:col3', 'T1:row6:col6'])
- dropped unlinked row (NIL): 'Joy et al. (2009)' — extend the ontology if this is a real PK parameter (source ['T1:row7:col1', 'T1:row7:col3', 'T1:row7:col6', 'T1:row7:col8'])
- dropped unlinked row (NIL): 'Lertdumrongluk et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T1:row8:col1', 'T1:row8:col3', 'T1:row8:col6'])
- dropped unlinked row (NIL): 'Djabarouti et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T1:row9:col1', 'T1:row9:col3', 'T1:row9:col6'])
- dropped unlinked row (NIL): 'Joy et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1', 'T1:row10:col3', 'T1:row10:col6', 'T1:row10:col8'])
- dropped unlinked row (NIL): 'Mino et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T1:row11:col1'])
- dropped unlinked row (NIL): 'Fukuda et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T1:row12:col3', 'T1:row12:col6'])
- dropped unlinked row (NIL): 'Sagcal-Gironella et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T1:row13:col3', 'T1:row13:col6'])
- dropped unlinked row (NIL): 'Sherwin et al. (2012)' — extend the ontology if this is a real PK parameter (source ['T1:row14:col3', 'T1:row14:col6'])
- dropped unlinked row (NIL): 'Woillard et al. (2014)' — extend the ontology if this is a real PK parameter (source ['T1:row15:col6'])
- dropped unlinked row (NIL): 'Streicher et al. (2014)' — extend the ontology if this is a real PK parameter (source ['T1:row16:col1', 'T1:row16:col3', 'T1:row16:col6'])
- dropped unlinked row (NIL): 'Kittanamongkolchai et al. (2015)' — extend the ontology if this is a real PK parameter (source ['T1:row17:col1', 'T1:row17:col3', 'T1:row17:col6'])
- table mostly unlinked (17/17 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q61 ('initial volume of distribution'=0.18) from results prose — parameter table was unreadable
- salvaged Q22 ('oral CL (CL/F)'=0.19) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volume of distribution following oral administration (Vd/F)'=0.78) from results prose — parameter table was unreadable
- salvaged Q83 ('absorption lag time'=0.349) from results prose — parameter table was unreadable
- salvaged Q49 ('absorption rate constant (Ka)'=0.869) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=mycophenolic acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T1:row1:col1 = '15 children (12 ± 3 years)'
- unparsed cell T1:row1:col2 = 'Autoimmune including 10 SLE patients'
- unparsed cell T1:row1:col11 = '[51]'
- unparsed cell T1:row2:col11 = '[47]'
- unparsed cell T1:row3:col2 = 'Autoimmune including 12 SLE patients'
- unparsed cell T1:row3:col7 = 'BSV: Tmax (%) 46.8; Cmax (%) 53.8; AUC0–12 h (%) 33.3; AUC0–24 h (%) 35.6; C12 h (%) 74.2; C24 h (%) 85.8'
- unparsed cell T1:row3:col11 = '[52]'
- unparsed cell T1:row4:col2 = '6 Lupus nephritis versus 24 kidney transplantations'
- unparsed cell T1:row4:col11 = '[53]'
- unparsed cell T1:row5:col11 = '[49]'
- unparsed cell T1:row6:col2 = 'Autoimmune with 12 SLE patients'
- unparsed cell T1:row6:col7 = 'BSV: Tlag, short (%) 32; Ka (%) 182 [40]; CL (%) 34 [41]; Vc (%) 53 [48]; TGB1 (%) 200; EHCP (%) 35; RUV (%) 0.414 [6]'
- unparsed cell T1:row6:col8 = 'CrCL on CL 0.42 [26]'
- unparsed cell T1:row6:col11 = '[46]'
- unparsed cell T1:row7:col11 = '[54]'
- unparsed cell T1:row8:col11 = '[55]'
- unparsed cell T1:row9:col7 = 'BSV: mean MPA AUC0–12 h (%) 44; mean MPAG AUC0–12 h (%) 43'
- unparsed cell T1:row9:col11 = '[56]'
- unparsed cell T1:row10:col11 = '[57]'
- unparsed cell T1:row11:col3 = '1.5 (1.0–2.0) g'
- unparsed cell T1:row11:col7 = 'BSV: MPA free fraction (%) 70; MPAG free faction (%) 59.8'
- unparsed cell T1:row11:col8 = 'Metal medication and CrCL on MPA C0; CrCL on MPAG C0; serum albumin on MPA free fraction; serum albumin, metal medication and CrCL on MPAG free faction'
- unparsed cell T1:row11:col11 = '[58]'
- unparsed cell T1:row12:col1 = '19 children'
- unparsed cell T1:row12:col11 = '[59]'
- unparsed cell T1:row13:col1 = '19 children (16.9 ± 4 years)'
- unparsed cell T1:row13:col11 = '[60]'
- unparsed cell T1:row14:col1 = '19 (10–28 years; mean 16.5 years)'
- unparsed cell T1:row14:col7 = 'BSV (%): CL1MPA 48.6; V3MPA 59.2; CL2-MPA 42.9; V4-MPA 60.0; CLMMPAG 55.9 RUV: MPA (%) 41.2; MPAG (%) 45.4'
- unparsed cell T1:row14:col11 = '[48]'
- unparsed cell T1:row15:col1 = '36 children (4.7–16.7)'
- unparsed cell T1:row15:col3 = '728 ± 255 (300–1250) mg; 544 ± 175 (217–998)'
- unparsed cell T1:row15:col11 = '[50]'
- unparsed cell T1:row16:col2 = 'Autoimmune with 23 SLE and 21 vasculitis'
- unparsed cell T1:row16:col11 = '[61]'
- unparsed cell T1:row17:col11 = '[62]'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 3.0 | 2.846 | 0.9487 | 0.25 | reported t½β |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 13.3 L/h | not captured | not captured | ['Yang_2015:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 12.6 L | not captured | not captured | ['Yang_2015:other_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_azathioprine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yang_2015` / `Yang_2015::patients with systemic lupus erythematosus`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
