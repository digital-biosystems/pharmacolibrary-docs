<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;polythiazide&quot;}]"></div>

# polythiazide

- **generic name:** polythiazide
- **ATC codes:** `C03AA05`, `C03AB05`
- **DrugBank:** [DB01324](https://go.drugbank.com/drugs/DB01324) · **PubChem:** [CID 4870](https://pubchem.ncbi.nlm.nih.gov/compound/4870)
- **molar mass:** 439.882 g/mol (C11H13ClF3N3O4S3) — DrugBank
- **groups:** approved

## About

Polythiazide is a thiazide diuretic used to treat high blood pressure, congestive heart failure, nephrotic syndrome, and anasarka (fluid retention). It is an approved drug, though it appears to be little used today and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7227099](https://www.wikidata.org/wiki/Q7227099) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 07:17 | 0:37 | 0/0/0 | 0/0/0 | 0/0/0 | 1,630/166 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=polythiazide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | `SLC22A6` substrate, `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SLC12A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Monroy_1999.pdf` | Monroy A et al., [Lack of effect of cicletanine and its…, Archives des maladies du co… (1999) | pd | 4 | not captured | [10486654](https://www.ncbi.nlm.nih.gov/pubmed/10486654) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T07:17:30.626734+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any pharmacokinetic parameters for polythiazide. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for polythiazide. |
| popPK | Eriksson_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of thiazide effects on sodium transport in animal bladders, not a pharmacokinetic study reporting disposition parameters for polythiazide. |
| PD | Eriksson_1987 | not_relevant | 2 | 1 | The paper reports only qualitative observations that polythiazide reduced short-circuit current at high concentrations (&gt;0.1 mM) and that dose-response curves were difficult to obtain, providing no numeric PD parameters or extractable concentration-effect curve. |
| popPK | Gordon_1981 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for hypertension treatment and does not report any pharmacokinetic parameters for polythiazide. |
| PD | Gordon_1981 | not_relevant | 1 | 0 | The paper reports only aggregate clinical efficacy (average BP reduction) and dosage titration outcomes, without providing any concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Maher_1975 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of prazosin where polythiazide is used only as a co-administered agent, with no pharmacokinetic parameters reported. |
| PD | Maher_1975 | not_relevant | 1 | 0 | The text provides only qualitative clinical observations of blood pressure reduction at fixed doses without any concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Monroy_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay using polythiazide only as a reference inhibitor, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Moskalyk_1975 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying polythiazide in tablets, not a pharmacokinetic study. |
| PD | Moskalyk_1975 | not_relevant | 0 | 0 | The paper describes an HPLC analytical method for quantifying polythiazide in tablets and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Oh_1975 | irrelevant | 0 | 0 | no_text gate: only 392 chars of text extracted (&lt; 400) |
| PD | Oh_1975 | not_relevant | 1 | 0 | The text provides only a qualitative observation that increasing prazosin dosage above 15 mg/day did not improve blood pressure control, without reporting any numeric PD parameters, concentration-effect data, or formal dose-response modeling for polythiazide. |
| popPK | Paul_1976 | irrelevant | 0 | 0 | The study focuses on the antihypertensive efficacy of prazosin, with polythiazide mentioned only as a co-administered agent without any pharmacokinetic data. |
| PD | Paul_1976 | not_relevant | 0 | 0 | The text describes a clinical trial of prazosin with only a qualitative mention of polythiazide as an add-on therapy, providing no concentration-effect data, dose-response curves, or numeric PD parameters for polythiazide. |
| popPK | Stribrná_1975 | irrelevant | 0 | 0 | The study investigates renal physiology (urea clearance) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for polythiazide. |
| popPK | Weber_1982 | irrelevant | 0 | 0 | The study focuses on the clinical efficacy of trimazosin, with polythiazide serving only as a co-administered agent without any pharmacokinetic parameter reporting. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
