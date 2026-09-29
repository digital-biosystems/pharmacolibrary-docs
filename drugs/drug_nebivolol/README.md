<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;nebivolol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nebivolol_Marques2022_reference&quot;,&quot;label&quot;:&quot;Marques_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# nebivolol

- **generic name:** nebivolol
- **ATC codes:** `C07AB12`, `C07BB12`, `C07FB12`, `C09BX07`, `C09DX05`, `C10BX22`
- **DrugBank:** [DB04861](https://go.drugbank.com/drugs/DB04861) · **PubChem:** [CID 71301](https://pubchem.ncbi.nlm.nih.gov/compound/71301)
- **molar mass:** 405.435 g/mol (C22H25F2NO4) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Nebivolol is a racemic mixture of 2 enantiomers where one is a beta adrenergic antagonist and the other acts as a cardiac stimulant without beta adrenergic activity.[A182579] Treatment with nebivolol leads to a greater decrease in systolic and diastolic blood pressure than [atenolol], [propranolol], or [pindolol].[A182579] Nebivolol and other beta blockers are generally not first line therapies as many patients are first treated with thiazide diuretics.[A182594]

Nebivolol was granted FDA approval on 17 December 2007.[L7985]

**Indication.** Nebivolol is indicated to treat hypertension.[A2762,A182579,L7985,L7988]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 04:44 | 6:11 | 0/0/1 | 0/0/0 | 0/0/0 | 91,408/12,165 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: model_quarantined: Cl, Vd, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Marques_2022_reference](drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md) | 2-compartment, IV | 6 | Marques L et al., New Data for Nebivolol after In Silico…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091911](https://doi.org/10.3390/pharmaceutics14091911) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nebivolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…metabolizers, 38% is eliminated in the urine and 44% in the feces.[L7985] In poor CYP2D6 m…”</sub> | prose |
| excretion | kidney | <sub>“…In extensive CYP2D6 metabolizers, 38% is eliminated in the urine and 44% in the feces.[L79…”</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Briciu_2014.pdf` | Briciu C et al., A pharmacokinetic drug interaction stud…, Journal of clinical pharmac… (2014) | popPK | 8 | [10.1111/jcpt.12180](https://doi.org/10.1111/jcpt.12180) | [24845234](https://pubmed.ncbi.nlm.nih.gov/24845234) | The study reports non-compartmental PK parameters (Cmax, Tmax, AUC) for nebivolol, but lacks compartmental parameters like clearance (CL) or volume (V) required for population PK modeling. |

<sub>queue written 2026-09-29T04:39:48.735111+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bocci_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study for SARS-CoV-2 and does not report pharmacokinetic disposition parameters (CL, V, etc.) for nebivolol. |
| popPK | Bundkirchen_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiac calcium sensitivity and does not report any pharmacokinetic parameters for nebivolol. |
| PD | Bundkirchen_2001 | not_relevant | 0 | 0 | The study reports a negative result (no effect) on cardiac calcium sensitivity and does not provide a pharmacodynamic exposure-response or dose-response model for nebivolol. |
| popPK | Garbán_2004 | irrelevant | 0 | 0 | The study investigates the mechanism of action (estrogen receptor binding and vascular responsiveness) in isolated tissues and cells, not pharmacokinetic disposition parameters. |
| popPK | Gschwend_2009 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vascular function in rats and does not report pharmacokinetic parameters for nebivolol. |
| PD | Gschwend_2009 | not_relevant | 2 | 1 | The study reports pharmacodynamic effects (endothelial relaxation) at fixed doses but does not provide concentration-effect data, PK parameters, or a fitted PD model with numeric parameters like EC50 or slope. |
| popPK | Kannan_2012 | irrelevant | 0 | 0 | The study is a zebrafish cardiovascular screening assay where nebivolol is used only as a positive control for heart rate and blood flow, not for pharmacokinetic parameter estimation. |
| PD | Kannan_2012 | not_relevant | 1 | 0 | Nebivolol is used only as a single-dose positive control for comparison; no dose-response curve or numeric PD parameters (EC50, Emax) are reported for nebivolol. |
| popPK | Okamoto_2014 | irrelevant | 0 | 0 | This is a pharmacodynamic blood-pressure study, not a PK study, and no nebivolol disposition parameters are reported. |
| popPK | Rawat_2023 | relevant | 4 | 5 | The study reports ocular PK parameters (Cmax, AUC, Tmax) for nebivolol in rabbits, but lacks systemic disposition parameters like clearance (CL) or volume of distribution (V). |
| popPK | Rosenkranz_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilatory properties in rat aorta, not a pharmacokinetic study reporting disposition parameters for nebivolol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 13:59 UTC</sub>
