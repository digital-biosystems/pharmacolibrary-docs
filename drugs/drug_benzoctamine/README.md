<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;benzoctamine&quot;}]"></div>

# benzoctamine

- **generic name:** benzoctamine
- **ATC codes:** `N05BD01`
- **DrugBank:** [DB09021](https://go.drugbank.com/drugs/DB09021) · **PubChem:** [CID 28425](https://pubchem.ncbi.nlm.nih.gov/compound/28425)
- **molar mass:** 249.357 g/mol (C18H19N) — DrugBank
- **groups:** experimental

## About

Benzoctamine is classified as an anxiolytic, a drug used to treat anxiety. It appears to be little used today, being listed only as an experimental compound, and it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4890786](https://www.wikidata.org/wiki/Q4890786) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:23 | 4:04 | 0/0/0 | 0/0/0 | 0/0/0 | 239,234/1,283 | ollama / glm-5.3-flash | 9 | 4/5 | 9/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 67 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Müller_1978.pdf` | Müller WE et al., Benzodiazepine receptor binding: the in…, Naunyn-Schmiedeberg's archi… (1978) | pd | 4 | [10.1007/BF00497002](https://doi.org/10.1007/BF00497002) | [723967](https://www.ncbi.nlm.nih.gov/pubmed/723967) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T18:22:52.745768+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Campanile_2026 | irrelevant | 0 | 0 | This is a PBPK modeling study of mRNA-LNP-encoded antibodies in mice; benzoctamine is not mentioned anywhere and no benzoctamine PK parameters appear. |
| popPK | Dumont_2026 | irrelevant | 0 | 0 | This is a pharmacology education study on student exam performance, with no benzoctamine PK data or parameters present. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | This is a population-PK study of ciprofol (HSK3486), not benzoctamine; benzoctamine is not mentioned anywhere. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry/cancer biology paper on ethanoanthracene compounds in CLL cell lines; benzoctamine is not mentioned and no PK parameters for it appear. |
| popPK | Rodallec_2026 | irrelevant | 0 | 0 | This is a population PK/PD study of paclitaxel-polyacrylamide prodrug in mice, not benzoctamine; parameter values are in supplementary tables not provided. |
| popPK | Sethi_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry/computational study of galectin-1 inhibitors; no benzoctamine PK parameters appear anywhere. |
| popPK | Silmore_2021 | irrelevant | 0 | 0 | This is a review of cannabidiol pharmacokinetics; benzoctamine is not the subject drug and no benzoctamine parameters appear. |
| popPK | Tomasek_2025 | irrelevant | 0 | 0 | This is a UTI/OM-89 epithelial immunity study with no benzoctamine PK parameters; "clearance" refers to bacterial clearance, not drug disposition. |
| popPK | Tomasek_2026 | irrelevant | 0 | 0 | This is a UTI/OM-89 immunomodulation study with no benzoctamine PK parameters; "clearance" refers to bacterial clearance, not drug disposition. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper reports PK of procizumab (PCZ), a DPP3-inhibiting antibody; benzoctamine is never mentioned and no benzoctamine parameters appear. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
