<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;opipramol&quot;}]"></div>

# opipramol

- **generic name:** opipramol
- **ATC codes:** `N06AA05`
- **DrugBank:** [DB12930](https://go.drugbank.com/drugs/DB12930)
- **groups:** investigational

## About

**Description.** Opipramol has been used in trials studying the treatment of Dementia, Depression, Schizophrenia, Anxiety Disorders, and Psychosomatic Disorders.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 02:55 | 13:14 | 0/0/0 | 0/0/0 | 0/0/0 | 20,870/1,641 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 32 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moebius_1998.pdf` | Moebius FF et al., Pharmacological analysis of sterol delt…, Molecular pharmacology (1998) | pd | 4 | [10.1124/mol.54.3.591](https://doi.org/10.1124/mol.54.3.591) | [9730919](https://www.ncbi.nlm.nih.gov/pubmed/9730919) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-24T02:53:37.354855+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calvo_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carisoprodol and meprobamate, not opipramol. |
| popPK | Calvo_2022_2 | irrelevant | 0 | 0 | The study focuses on carisoprodol, not opipramol, and does not report PK parameters for the target drug. |
| popPK | Carbonaro_2020 | irrelevant | 0 | 0 | The study focuses on carisoprodol and meprobamate, not opipramol. |
| popPK | Ceschi_2013 | irrelevant | 0 | 0 | The study focuses on meprobamate, not opipramol. |
| popPK | Dalén_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of carisoprodol and meprobamate, not opipramol. |
| popPK | De_1981 | irrelevant | 0 | 0 | The study focuses on hemoperfusion clearance for barbiturates and other sedatives, with no mention of opipramol. |
| popPK | Ferri_2025 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of carisoprodol, not the pharmacokinetics of opipramol. |
| popPK | Ferri_2026 | irrelevant | 0 | 0 | The study focuses on the metabolism of carisoprodol, not opipramol. |
| PD | Gahr_2017 | not_relevant | 1 | 0 | The text is a qualitative review of opipramol's mechanism and clinical use, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| PGx | Gahr_2017 | not_relevant | 2 | 0 | The text mentions CYP2D6 metabolism but does not report specific pharmacogenomic effects (genotype-phenotype associations) on PK or PD parameters. |
| PD | Gerlach_2002 | not_relevant | 2 | 0 | The paper reports qualitative dose-response observations (100 mg vs 50 mg) but provides no numeric PD parameters, concentration-effect curves, or quantitative effect magnitudes. |
| popPK | Gilbert_1982 | irrelevant | 0 | 0 | The study focuses on pentaerythritol tetranitrate, meprobamate, and diphenhydramine, with no mention of opipramol. |
| popPK | Gilbert_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of meprobamate and other drugs, not opipramol. |
| popPK | Hassan_1986 | irrelevant | 0 | 0 | The study focuses on meprobamate overdose and does not report pharmacokinetic parameters for opipramol. |
| PD | Howell_2009 | not_relevant | 0 | 0 | The paper describes in vitro binding of opipramol to liposomes for overdose treatment, not a pharmacodynamic exposure-response or dose-response relationship in a biological system. |
| popPK | Hoy_1978 | irrelevant | 0 | 0 | The study focuses on meprobamate, not opipramol, and does not report pharmacokinetic parameters for the target drug. |
| PD | Hueppe_2011 | not_relevant | 2 | 1 | The study reports a qualitative dose-response (100mg vs 150mg) but provides no concentration data, PK parameters, or numeric PD parameters (e.g., Emax, EC50) to derive a quantitative exposure-response relationship. |
| PD | Kanarkowski_1979 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data, curves, or parameters to derive a pharmacodynamic relationship. |
| popPK | Koffler_1978 | irrelevant | 0 | 0 | The study focuses on hemoperfusion for drug overdose and does not involve opipramol or report its pharmacokinetic parameters. |
| popPK | Lewandowski_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carisoprodol and meprobamate, not opipramol. |
| popPK | Miller_1989 | irrelevant | 0 | 0 | The paper is a review on the effects of cigarette smoking on various drugs and does not mention opipramol or provide any pharmacokinetic parameters for it. |
| PD | Moebius_1994 | not_relevant | 1 | 2 | The paper reports an IC50 for opipramol binding to a purified protein, which is a pharmacological binding affinity parameter, not a pharmacodynamic exposure-response or dose-response relationship for a drug effect in a biological system. |
| PD | Moebius_1998 | not_relevant | 3 | 2 | The paper reports an in vitro IC50 for opipramol against a specific enzyme (EBP), which is a pharmacological potency parameter, but it does not report a pharmacodynamic exposure-response or dose-response relationship for the drug's clinical effect in a biological system. |
| popPK | Nilsson_1998 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| popPK | Simon_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of carisoprodol and meprobamate, not opipramol. |
| popPK | Tribut_2010 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of felbamate, not opipramol. |
| popPK | Verpooten_1982 | irrelevant | 0 | 0 | The study focuses on phenobarbital, methylphenobarbital, amobarbital, meprobamate, thallium, secobarbital, and methaqualone, and does not mention opipramol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
