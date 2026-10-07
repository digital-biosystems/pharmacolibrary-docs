<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;barnidipine&quot;}]"></div>

# barnidipine

- **generic name:** barnidipine
- **ATC codes:** `C08CA12`
- **DrugBank:** [DB09227](https://go.drugbank.com/drugs/DB09227) · **PubChem:** [CID 443869](https://pubchem.ncbi.nlm.nih.gov/compound/443869)
- **molar mass:** 491.544 g/mol (C27H29N3O6) — DrugBank
- **groups:** investigational

## About

Barnidipine is a dihydropyridine calcium channel blocker, a drug class mainly affecting blood vessels that is typically used to treat high blood pressure. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q925327](https://www.wikidata.org/wiki/Q925327) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:14 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 21,565/553 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 3/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=barnidipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1C (target), CACNA1G (inhibitor), CACNA1G (target), CACNA1H (inhibitor), CACNA1H (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Katoh_2000.pdf` | Katoh M et al., Inhibitory potencies of 1,4-dihydropyri…, Pharmaceutical research (2000) | pd | 4 | [10.1023/a:1007568811691](https://doi.org/10.1023/a:1007568811691) | [11145223](https://www.ncbi.nlm.nih.gov/pubmed/11145223) | metadata signals extractable PD data (IC50) |
| `Teramura_1997.pdf` | Teramura T et al., Examination of metabolic pathways and i…, Xenobiotica; the fate of fo… (1997) | pd | 4 | [10.1080/004982597240064](https://doi.org/10.1080/004982597240064) | [9381730](https://www.ncbi.nlm.nih.gov/pubmed/9381730) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T02:14:21.389651+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Harmsze_2010 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction between calcium channel blockers (including barnidipine) and clopidogrel, not a pharmacogenomic effect of a gene variant on barnidipine's PK or PD. |
| popPK | Hart_1997 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure and adverse events, with no pharmacokinetic parameters or disposition data for barnidipine. |
| PD | Hart_1997 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response trend and responder rates for 10-30 mg doses, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Ikemura_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2J2 inhibition and does not report pharmacokinetic disposition parameters for barnidipine. |
| popPK | Katoh_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein inhibition and does not report pharmacokinetic disposition parameters for barnidipine. |
| PGx | Katoh_2000 | not_relevant | 0 | 0 | The paper reports in vitro inhibitory potencies of barnidipine on P-gp transport but does not investigate the effect of any gene variant or genotype on these parameters. |
| PGx | Katoh_2000_2 | not_relevant | 0 | 0 | The paper investigates in vitro CYP inhibition by barnidipine to predict drug-drug interactions, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Nakayama_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacological actions of mepirodipine (YM-09730-5) in pig coronary arteries and does not involve barnidipine or report pharmacokinetic parameters. |
| popPK | Shimada_1996 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (effect compartment, EC50, binding affinity) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for barnidipine. |
| PD | Shimada_1996 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain the scientific content of the paper, nor any pharmacodynamic data for barnidipine. |
| popPK | Teramura_1997 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |
| PD | Teramura_1997 | not_relevant | 0 | 0 | The paper focuses on metabolic pathways and CYP450 isozyme identification, containing no pharmacodynamic or exposure-response analysis. |
| popPK | Wegener_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of calcium channel block in rat cardiomyocytes and does not report pharmacokinetic disposition parameters. |
| popPK | Wegener_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pharmacodynamic effects (vascular smooth muscle relaxation and calcium channel currents) and does not report any pharmacokinetic parameters. |
| popPK | Yamada_1992 | irrelevant | 0 | 0 | The study investigates mepirodipine, not barnidipine, and focuses on receptor occupancy rather than pharmacokinetic parameters. |
| popPK | Yao_2000 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding barnidipine pharmacokinetics. |
| PD | Yao_2000 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, pharmacokinetic data, or pharmacodynamic analysis for barnidipine. |
| popPK | van_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of vasodilator potency and time course in isolated rat arteries, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
