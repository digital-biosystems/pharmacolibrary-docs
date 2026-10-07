<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03B&quot;,&quot;href&quot;:&quot;atc/R03B.md&quot;},{&quot;label&quot;:&quot;oxitropium bromide&quot;}]"></div>

# oxitropium bromide

- **generic name:** oxitropium bromide
- **ATC codes:** `R03BB02`
- **DrugBank:** [DB12086](https://go.drugbank.com/drugs/DB12086) · **PubChem:** [CID 6917866](https://pubchem.ncbi.nlm.nih.gov/compound/6917866)
- **molar mass:** 332.419 g/mol (C19H26NO4) — DrugBank
- **groups:** investigational

## About

Oxitropium bromide is an inhaled anticholinergic (parasympatholytic) drug intended for obstructive airway diseases such as chronic obstructive pulmonary disease. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27270351](https://www.wikidata.org/wiki/Q27270351) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:28 | 3:42 | 0/0/0 | 0/0/0 | 0/0/0 | 61,202/1,752 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxitropium_bromide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM5 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 40 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bianco_1983 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchial response to challenges, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Bryant_1990 | irrelevant | 0 | 0 | The study is a clinical pharmacodynamic dose-response trial assessing bronchodilation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Cazzola_1998 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchodilation (FEV1) and does not report any pharmacokinetic parameters for oxitropium bromide. |
| popPK | Cazzola_1999 | irrelevant | 0 | 0 | The study is a pharmacodynamic dose-response assessment of bronchodilation (FEV1) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for oxitropium bromide. |
| popPK | Cazzola_1999_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchodilation (FEV1) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for oxitropium bromide. |
| popPK | Flohr_1979 | irrelevant | 0 | 0 | The study is a clinical efficacy trial reporting airway resistance changes, not a pharmacokinetic study with disposition parameters. |
| popPK | Frith_1986 | irrelevant | 0 | 0 | The study is a clinical efficacy and dose-response trial measuring bronchodilation (FEV1), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Frith_1986_2 | irrelevant | 0 | 0 | The study reports pharmacodynamic outcomes (FEV1 changes) rather than pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Fujimura_1993 | irrelevant | 0 | 0 | The study reports bronchodilator effects (PEF25) and dose-response data, but does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Ikeda_1995 | irrelevant | 0 | 0 | The study is a comparative dose-response (pharmacodynamic) study measuring FEV1 and FVC, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Ind_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of bronchoconstriction and does not report any pharmacokinetic parameters for oxitropium bromide. |
| popPK | Peel_1984 | irrelevant | 0 | 0 | The study reports pharmacodynamic dose-response data (lung function) rather than quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Pounsford_1983 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| popPK | Sampson_1997 | irrelevant | 0 | 0 | The study investigates the bronchoprotective effect of oxitropium bromide on prostaglandin D2-induced bronchoconstriction, not its pharmacokinetic parameters. |
| popPK | Seppälä_1994 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamic efficacy of oxitropium bromide on histamine-induced bronchoconstriction and does not report any pharmacokinetic parameters. |
| popPK | Skorodin_1986 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchodilator effects (FEV1, FVC) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Sposato_2008 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchoprotection (FEV1, PD15) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for oxitropium. |
| popPK | Stappaerts_1994 | irrelevant | 0 | 0 | The study is a dose-response pharmacodynamic trial measuring lung function (FEV1, Raw) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for oxitropium bromide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
