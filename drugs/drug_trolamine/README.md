<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03A&quot;,&quot;href&quot;:&quot;atc/D03A.md&quot;},{&quot;label&quot;:&quot;trolamine&quot;}]"></div>

# trolamine

- **generic name:** trolamine
- **ATC codes:** `D03AX12`
- **DrugBank:** [DB13747](https://go.drugbank.com/drugs/DB13747) · **PubChem:** [CID 7618](https://pubchem.ncbi.nlm.nih.gov/compound/7618)
- **molar mass:** 149.1882 g/mol (C6H15NO3) — DrugBank
- **groups:** approved

## About

Trolamine is a dermatological preparation used to help wounds and ulcers heal. It is an approved medicine, used topically on the skin.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424314](https://www.wikidata.org/wiki/Q424314) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:58 | 1:25 | 0/0/0 | 0/0/0 | 0/0/0 | 22,707/2,821 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

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
| `Ochs_1984.pdf` | Ochs DL et al., Ca2+-stimulated, Mg2+-dependent ATPase…, The Journal of biological c… (1984) | pd | 4 | not captured | [6142882](https://www.ncbi.nlm.nih.gov/pubmed/6142882) | metadata signals extractable PD data (EC50) |
| `Główka_2007.pdf` | Główka F et al., Enantioselective CE method for pharmaco…, Electrophoresis (2007) | pgx | 8 | [10.1002/elps.200600736](https://doi.org/10.1002/elps.200600736) | [17657761](https://www.ncbi.nlm.nih.gov/pubmed/17657761) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-10-07T13:57:41.275250+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chien_1980 | irrelevant | 0 | 0 | This is an oxygen-equilibrium study of carp hemoglobin, not a pharmacokinetic study of trolamine. |
| popPK | Findlay_1987 | irrelevant | 0 | 0 | This is an in-vitro enzyme study with no trolamine pharmacokinetic parameters. |
| popPK | Guse_1994 | irrelevant | 0 | 0 | This is an in-vitro cellular mechanism study and reports no quantitative pharmacokinetic disposition parameters for trolamine. |
| PGx | Główka_2007 | not_relevant | 0 | 0 | The paper studies ibuprofen and its metabolites in relation to CYP2C polymorphism; it reports no pharmacogenomic effect on trolamine. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | Triethanolamine is used as a reaction reagent, and the paper reports no pharmacogenomic effect on a trolamine PK or PD parameter. |
| popPK | Libralato_2010 | irrelevant | 0 | 0 | This is an ecotoxicity study reporting toxicity endpoints, not trolamine pharmacokinetic parameters. |
| PGx | Lu_2007 | not_relevant | 0 | 0 | The paper describes an analytical method for fluoxetine and norfluoxetine, not a pharmacogenomic effect on trolamine PK or PD. |
| popPK | Macri_2009 | irrelevant | 0 | 0 | This is an in-vitro antimicrobial study of dendritic amphiphiles, not a trolamine pharmacokinetic study. |
| popPK | Müller-Decker_1994 | irrelevant | 0 | 0 | This in vitro irritation study reports no pharmacokinetic disposition parameters for triethanolamine. |
| popPK | Ochs_1984 | irrelevant | 0 | 0 | This is an in-vitro neutrophil ATPase study, not a pharmacokinetic study of trolamine. |
| PGx | Qusa_2024 | not_relevant | 0 | 0 | The study reports in vitro CYP and transporter inhibition by trolamine, not an effect of a gene variant, genotype, or phenotype on its PK or PD. |
| PGx | Spalding_1999 | not_relevant | 0 | 0 | The paper evaluates tumor formation after triethanolamine exposure, not a genotype effect on its pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
