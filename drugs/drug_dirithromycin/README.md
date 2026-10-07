<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;dirithromycin&quot;}]"></div>

# dirithromycin

- **generic name:** dirithromycin
- **ATC codes:** `J01FA13`
- **DrugBank:** [DB00954](https://go.drugbank.com/drugs/DB00954) · **PubChem:** [CID 6473883](https://pubchem.ncbi.nlm.nih.gov/compound/6473883)
- **molar mass:** 835.086 g/mol (C42H78N2O14) — DrugBank
- **groups:** investigational

## About

Dirithromycin is a macrolide antibiotic that was intended to treat bacterial infections such as tonsillitis, pharyngitis, acute bronchitis, pneumonia, and staphylococcal infections. It is not an approved medicine today and is regarded as investigational, with no authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1989071](https://www.wikidata.org/wiki/Q1989071) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:51 | 2:36 | 0/0/0 | 0/2/0 | 0/0/0 | 48,471/997 | einfracz / qwen3.8-27b | 3 | 0/0 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Goldberg_1996_CYP3A](drugs/drug_dirithromycin/pd_Goldberg_1996_CYP3A.md) | CYP3A activity ← dirithromycin · inhibition effect | — | Goldberg MJ et al., Effect of dirithromycin on human CYP3A…, Journal of clinical pharmac… (1996) | [10.1002/j.1552-4604.1996.tb04170.x](https://doi.org/10.1002/j.1552-4604.1996.tb04170.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [McConnell_1999_MIC90](drugs/drug_dirithromycin/pd_McConnell_1999_MIC90.md) | in vitro MIC ← dirithromycin · inhibition effect | — | McConnell SA et al., Review and comparison of advanced-gener…, Pharmacotherapy (1999) | [10.1592/phco.19.6.404.31054](https://doi.org/10.1592/phco.19.6.404.31054) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dirithromycin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chamberland_1991.pdf` | Chamberland S et al., Comparative activity of macrolides agai…, Antimicrobial agents and ch… (1991) | pd | 4 | [10.1128/AAC.35.5.903](https://doi.org/10.1128/AAC.35.5.903) | [1854172](https://www.ncbi.nlm.nih.gov/pubmed/1854172) | metadata signals extractable PD data (IC50) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T11:51:37.945364+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | McConnell_1999_2 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of theophylline to assess a drug-drug interaction, not the pharmacokinetic parameters of dirithromycin itself. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and CYP3A4 inhibition of macrolides, specifically noting dirithromycin's lack of interaction, but contains no information on pharmacogenomics or gene variants. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
