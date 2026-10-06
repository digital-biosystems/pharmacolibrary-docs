<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;estramustine&quot;}]"></div>

# estramustine

- **generic name:** estramustine
- **ATC codes:** `L01XX11`
- **DrugBank:** [DB01196](https://go.drugbank.com/drugs/DB01196) · **PubChem:** [CID 259331](https://pubchem.ncbi.nlm.nih.gov/compound/259331)
- **molar mass:** 440.403 g/mol (C23H31Cl2NO3) — DrugBank
- **groups:** approved, withdrawn

## About

Estramustine is an alkylating and hormonal antineoplastic agent that was used to treat prostate cancer. It has been withdrawn from use, though it was once an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412939](https://www.wikidata.org/wiki/Q412939) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:43 | 0:06 | 0/0/0 | 0/0/0 | 0/0/0 | 10,602/745 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=estramustine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ESR1 (target), ESR2 (other/unknown), MAP1A (target), MAP2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Oudard_2003.pdf` | Oudard S et al., Activity of docetaxel with or without e…, The Journal of urology (2003) | pgx | 5 | [10.1097/01.ju.0000062500.75703.2c](https://doi.org/10.1097/01.ju.0000062500.75703.2c) | [12686819](https://www.ncbi.nlm.nih.gov/pubmed/12686819) | metadata signals extractable PGX data (CYP3A4) |
| `Suzuki_2005.pdf` | Suzuki M et al., The Val158Met polymorphism of the catec…, European urology (2005) | pgx | 5 | [10.1016/j.eururo.2005.07.007](https://doi.org/10.1016/j.eururo.2005.07.007) | [16126332](https://www.ncbi.nlm.nih.gov/pubmed/16126332) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-10-06T20:43:36.805366+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_1999 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on apoptosis and clonogenicity, containing no pharmacokinetic parameters for estramustine. |
| PGx | Mack_2007 | not_relevant | 2 | 0 | The text mentions estramustine resistance associated with ABCA2 expression, but does not report specific genetic variants affecting PK or PD parameters of estramustine. |
| PGx | Narita_2012 | not_relevant | 2 | 5 | The paper reports a genetic predictor for toxicity (leukocytopenia) but does not specify if this affects the PK or PD of estramustine specifically, nor does it provide fitted effect sizes for estramustine parameters. |
| PGx | Oudard_2003 | not_relevant | 0 | 0 | The study analyzes gene expression (e.g., CYP3A4) and its correlation with the pharmacodynamic response to chemotherapy, but it does not report a pharmacokinetic parameter of estramustine being altered by a specific gene variant. |
| PGx | Rehman_2023 | not_relevant | 2 | 1 | The paper is a general review of genetic biomarkers in prostate cancer pharmacotherapy and mentions estramustine only as a class of drugs, without reporting specific pharmacokinetic or pharmacodynamic effect sizes for estramustine linked to specific gene variants. |
| PGx | Suzuki_2005 | not_relevant | 2 | 5 | The paper reports an association between COMT genotype and PSA-progression-free survival (a clinical outcome), not a direct effect on a specific pharmacokinetic or pharmacodynamic parameter (e.g., AUC, Cmax, receptor binding) of estramustine. |
| PGx | Suzuki_2005_2 | not_relevant | 1 | 2 | The study reports an association between genotypes and clinical adverse events (side effects) rather than changes in a specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., enzyme inhibition, receptor binding) parameter of estramustine. |
| popPK | Tester_2006 | irrelevant | 0 | 0 | The study evaluates docetaxel and vinblastine, and explicitly states that estramustine was not administered. |
| popPK | Wang_1998 | irrelevant | 1 | 0 | The study reports in vitro receptor binding affinities (EC50) and mechanistic data, not pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
