<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;methapyrilene&quot;}]"></div>

# methapyrilene

- **generic name:** methapyrilene
- **ATC codes:** `R06AC05`
- **DrugBank:** [DB04819](https://go.drugbank.com/drugs/DB04819) · **PubChem:** [CID 8667](https://pubchem.ncbi.nlm.nih.gov/compound/8667)
- **molar mass:** 261.39 g/mol (C14H19N3S) — DrugBank
- **groups:** approved, withdrawn

## About

Methapyrilene is an antihistamine of the substituted ethylenediamine type that was used to treat allergies and related respiratory conditions. It has been withdrawn from use after safety concerns, including liver toxicity, were recognised.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q59854145](https://www.wikidata.org/wiki/Q59854145) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:31 | 1:11 | 0/0/0 | 0/0/0 | 0/0/0 | 13,951/627 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Daum_1984.pdf` | Daum PR et al., Histamine stimulation of inositol 1-pho…, Journal of neurochemistry (1984) | pd | 4 | [10.1111/j.1471-4159.1984.tb06674.x](https://doi.org/10.1111/j.1471-4159.1984.tb06674.x) | [6327916](https://www.ncbi.nlm.nih.gov/pubmed/6327916) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T21:30:56.461793+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bercu_2010 | irrelevant | 0 | 0 | The study is a toxicogenomic/risk assessment analysis using microarrays to identify points of departure for carcinogenicity, not a pharmacokinetic study reporting disposition parameters for methapyrilene. |
| popPK | Daum_1984 | irrelevant | 0 | 0 | The paper is a study on H1 receptor binding affinity in guinea pig brain tissue, not a pharmacokinetic study of methapyrilene disposition. |
| popPK | Hatch_1986 | irrelevant | 0 | 0 | The paper is an in-vitro genotoxicity/carcinogenicity assay using methapyrilene as a test chemical, containing no pharmacokinetic data. |
| popPK | Horn_1996 | irrelevant | 0 | 0 | The paper describes a carcinogenicity/bioassay study in rats measuring GST-P+ foci, not a pharmacokinetic study with disposition parameters. |
| PGx | Park_2006 | not_relevant | 0 | 0 | The paper discusses methapyrilene as a model hepatotoxin to illustrate general mechanisms of drug bioactivation and toxicity, but does not report any pharmacogenomic analysis or gene variants affecting its PK/PD. |
| PGx | Probert_2014 | not_relevant | 0 | 0 | The paper investigates CYP activity in a cell line model but does not report a genetic variant effect on a pharmacokinetic or pharmacodynamic parameter of methapyrilene. |
| popPK | Richardson_1992 | irrelevant | 0 | 0 | The paper investigates DNA synthesis and carcinogenic mechanisms, not pharmacokinetic parameters like clearance or volume. |
| popPK | Richardson_1994 | irrelevant | 0 | 0 | The study is a proteomic/molecular toxicology analysis of hepatic protein modification and expression, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Teutsch_1975 | irrelevant | 0 | 0 | The study evaluates hypnotic efficacy (pharmacodynamics) using subjective response methods and does not report any quantitative pharmacokinetic parameters such as clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
