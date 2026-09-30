<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;chlorothiazide&quot;}]"></div>

# chlorothiazide

- **generic name:** chlorothiazide
- **ATC codes:** `C03AA04`, `C03AB04`
- **DrugBank:** [DB00880](https://go.drugbank.com/drugs/DB00880) · **PubChem:** [CID 2720](https://pubchem.ncbi.nlm.nih.gov/compound/2720)
- **molar mass:** 295.723 g/mol (C7H6ClN3O4S2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

**Description.** A thiazide diuretic with actions and uses similar to those of hydrochlorothiazide. (From Martindale, The Extra Pharmacopoeia, 30th ed, p812)

**Indication.** Chlorothiazide is indicated as adjunctive therapy in edema associated with congestive heart failure, hepatic cirrhosis, and corticosteroid and estrogen therapy. It is also indicated in the management of hypertension either as the sole therapeutic agent or to enhance the effectiveness of other antihypertensive drugs in the more severe forms of hypertension.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 13:51 | 2:16 | 0/0/0 | 0/0/0 | 0/0/0 | 1,852/218 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 1/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chlorothiazide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>“…hiazide is not metabolized but is eliminated rapidly by the kidney.…”</sub> | prose |
| excretion | brain | <sub>“…the urine. Chlorothiazide crosses the placental but not the blood-brain barrier and is exc…”</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |
| excretion | mammary gland | <sub>“…lacental but not the blood-brain barrier and is excreted in breast milk.…”</sub> | prose |
| excretion | placenta | <sub>“…excreted unchanged in the urine. Chlorothiazide crosses the placental but not the blood-br…”</sub> | prose |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA2 (inhibitor), SLC12A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 41 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Roch-Ramel_1997.pdf` | Roch-Ramel F et al., Effects of uricosuric and antiuricosuri…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9023298](https://www.ncbi.nlm.nih.gov/pubmed/9023298) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-29T13:51:37.996152+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | AUCLAIR_1963 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| PD | AUCLAIR_1963 | not_relevant | 0 | 0 | The paper focuses on toxicity and general pharmacology of a different compound (trichloromethylhydro chlorothiazide), not chlorothiazide, and does not report specific numeric PD parameters for chlorothiazide. |
| popPK | AUCLAIR_1963_2 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PD | AUCLAIR_1963_2 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | BARTORELLI_1961 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| PD | BARTORELLI_1961 | not_relevant | 1 | 0 | The provided text is only a title and does not contain the full text or any numeric PD parameters, curves, or model fits. |
| PGx | Beéry_2012 | not_relevant | 0 | 0 | The paper characterizes the interaction between chlorothiazide and the ABCG2 transporter in vitro but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any quantitative pharmacokinetic parameters for chlorothiazide. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain specific data, models, or numeric parameters for chlorothiazide. |
| popPK | Christesen_2002 | irrelevant | 0 | 0 | The paper is a case report on a glucokinase mutation where chlorothiazide is only mentioned as a therapeutic agent, with no pharmacokinetic parameters reported. |
| PD | Christesen_2002 | not_relevant | 0 | 0 | The paper reports a glucokinase mutation and its effect on glucose-stimulated insulin release, but does not provide any pharmacodynamic or exposure-response data for chlorothiazide. |
| popPK | Corrigan_1980 | irrelevant | 2 | 0 | The study reports bioavailability and excretion data (percent recovery) but does not provide quantitative compartmental pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Corrigan_1980 | not_relevant | 4 | 2 | The paper describes a qualitative dose-response relationship and notes non-linearity at higher doses, but it does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative effect-vs-concentration curve in the provided text. |
| PGx | Eadon_2018 | not_relevant | 2 | 0 | The text is a review introduction discussing challenges in pharmacogenomics and listing studies, but it does not report specific quantitative pharmacokinetic or pharmacodynamic effects of gene variants on chlorothiazide. |
| popPK | Eknoyan_1975 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial respiration, not a pharmacokinetic study, and reports no disposition parameters for chlorothiazide. |
| popPK | Frey_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of gliclazide, not chlorothiazide. |
| PD | Frey_2003 | not_relevant | 0 | 0 | The paper reports a population PK/PD model for gliclazide, not chlorothiazide. |
| popPK | Gesek_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sodium transport in cell lines where chlorothiazide is used as a pharmacological inhibitor, not a pharmacokinetic study of the drug's disposition. |
| PD | Gesek_1995 | not_relevant | 3 | 2 | The paper reports qualitative inhibition percentages and Michaelis constants for substrate transport, but lacks a concentration-effect curve or specific PD parameters (like IC50 or Emax) for chlorothiazide. |
| popPK | Jokinen_2017 | irrelevant | 0 | 0 | The study focuses on the antinociceptive effects of diuretics on opioids and does not report pharmacokinetic parameters for chlorothiazide. |
| PD | Jokinen_2017 | not_relevant | 1 | 0 | The study reports that chlorothiazide did not enhance opioid antinociception and provides no concentration-effect data or numeric PD parameters for chlorothiazide. |
| popPK | Kong_2016 | irrelevant | 0 | 0 | The paper characterizes the pharmacology of PF-05190457 (a ghrelin receptor antagonist) and does not involve chlorothiazide or report any pharmacokinetic parameters. |
| PD | Kong_2016 | not_relevant | 0 | 0 | The paper characterizes the pharmacology of PF-05190457 (a ghrelin receptor antagonist), not chlorothiazide. |
| popPK | Lant_1986 | irrelevant | 0 | 0 | The text is a general review of diuretic pharmacology and mechanisms without reporting specific quantitative pharmacokinetic parameters for chlorothiazide. |
| PD | Lant_1986 | not_relevant | 1 | 0 | The text is a general review of diuretic pharmacology and clinical use, mentioning chlorothiazide only historically without providing any specific numeric PD parameters or exposure-response data. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of taspoglutide in type 2 diabetes and does not involve chlorothiazide or report any pharmacokinetic parameters for it. |
| PD | Li_2015 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters for taspoglutide, not chlorothiazide. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | The paper is a systematic review of glucose-lowering agents in diabetes and CKD, and does not report pharmacokinetic parameters for chlorothiazide. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of glucose-lowering agents in CKD and does not mention chlorothiazide or report any pharmacodynamic parameters. |
| popPK | Lukeman_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding (IC50/Kd) and does not report pharmacokinetic disposition parameters for chlorothiazide. |
| popPK | MOYER_1957 | irrelevant | 1 | 0 | The paper reports pharmacodynamic diuretic responses (sodium excretion) rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Maggi_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fenquizone, with chlorothiazide mentioned only as a comparator for duration of action. |
| popPK | Maharaj_2015 | irrelevant | 1 | 0 | The study uses chlorothiazide only as a probe drug to parameterize small intestinal water volume in a PBPK model, without reporting specific pharmacokinetic parameters (CL, V, etc.) for the drug itself. |
| popPK | McNeil_1987 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clopamide, with chlorothiazide serving only as a comparator for diuretic efficacy without reported PK parameters. |
| popPK | Overgaard_2016 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for liraglutide, not chlorothiazide. |
| PD | Overgaard_2016 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis for liraglutide, not chlorothiazide, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Poust_1976 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lithium, with chlorothiazide acting only as a co-administered agent affecting lithium clearance. |
| popPK | Roch-Ramel_1997 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Roch-Ramel_1997 | not_relevant | 0 | 0 | The paper focuses on urate transport mechanisms in brush-border membrane vesicles and does not report pharmacodynamic or exposure-response data for chlorothiazide. |
| popPK | Scott_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of chlorothiazide's effect on bronchial smooth muscle contraction, not a pharmacokinetic study. |
| popPK | Shaik_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gliclazide, not chlorothiazide. |
| PD | Shaik_2018 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of gliclazide, not chlorothiazide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Sheiner_1981 | irrelevant | 0 | 0 | The paper is a methodological study on population PK estimation techniques using simulation and does not report specific quantitative disposition parameters for chlorothiazide. |
| PD | Sheiner_1981 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PK) parameter estimation methods and does not contain any pharmacodynamic (PD) or exposure-response data for chlorothiazide. |
| popPK | Tayo_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular effects, not a pharmacokinetic study, and reports no disposition parameters for chlorothiazide. |
| PD | Tayo_1984 | not_relevant | 4 | 2 | The paper reports qualitative concentration-dependent effects and mentions EC50 for frusemide, but states chlorothiazide had no direct effect and only qualitatively reduced sensitivity to other agents without providing numeric PD parameters for chlorothiazide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
