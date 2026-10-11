<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;mupirocin&quot;}]"></div>

# mupirocin

- **generic name:** mupirocin
- **ATC codes:** `D06AX09`, `R01AX06`
- **DrugBank:** [DB00410](https://go.drugbank.com/drugs/DB00410) · **PubChem:** [CID 446596](https://pubchem.ncbi.nlm.nih.gov/compound/446596)
- **molar mass:** 500.6222 g/mol (C26H44O9) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Mupirocin is a topical antibiotic used to treat skin infections such as impetigo and other staphylococcal infections, and is also applied in nasal preparations. It is an approved medicine in widespread human use, is also approved for veterinary use, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413578](https://www.wikidata.org/wiki/Q413578) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:48 | 13:57 | 0/0/0 | 1/1/0 | 0/0/0 | 166,515/10,070 | openai / gpt-6-luna | 12 | 0/5 | 11/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Reva_2019_cytotoxicity_against_melanoma_cell_line](drugs/drug_mupirocin/pd_Reva_2019_cytotoxicity_against_melanoma_cell_line.md) | cytotoxicity against melanoma cell line ← mupirocin · inhibition effect | — | Reva ON et al., Comparison of structures and cytotoxici…, Future medicinal chemistry (2019) | [10.4155/fmc-2018-0333](https://doi.org/10.4155/fmc-2018-0333) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wiegand_2012_bacterial_growth](drugs/drug_mupirocin/pd_Wiegand_2012_bacterial_growth.md) | bacterial growth ← mupirocin · inhibition effect | — | Wiegand C et al., Analysis of the adaptation capacity of…, Skin pharmacology and physi… (2012) | [10.1159/000341222](https://doi.org/10.1159/000341222) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mupirocin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 61 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anderson_2015 | not_relevant | 0 | 0 | The study compares antimicrobial treatments against mupirocin-sensitive and -resistant bacteria but does not report a genetic or phenotypic effect on a mupirocin PK/PD parameter. |
| popPK | Bourgeois-Nicolaos_2014 | irrelevant | 0 | 0 | This human study reports linezolid pharmacokinetics, not mupirocin parameters. |
| popPK | Chase_2012 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| popPK | European_2018 | irrelevant | 0 | 0 | This antimicrobial-resistance surveillance report contains no mupirocin pharmacokinetic parameters. |
| popPK | European_2019 | irrelevant | 0 | 0 | This antimicrobial-resistance surveillance report contains no quantitative mupirocin pharmacokinetic parameters. |
| popPK | European_2020 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report, not a mupirocin pharmacokinetic study, and it gives no disposition parameter values. |
| popPK | European_2021 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report, not a mupirocin pharmacokinetic study, and it reports no PK parameter values. |
| popPK | European_2022 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report, not a mupirocin pharmacokinetic study, and it reports no disposition parameters. |
| popPK | European_2023 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report and contains no mupirocin pharmacokinetic parameters. |
| PGx | Furi_2016 | not_relevant | 0 | 0 | Mupirocin resistance genes are mentioned only as examples of mobile resistance mechanisms; no pharmacogenomic effect on a mupirocin PK or PD parameter is reported. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | This is a human leptospirosis clinical study and reports no mupirocin pharmacokinetic parameters. |
| PGx | Katayama_2017 | not_relevant | 0 | 0 | The paper studies mupirocin-induced changes in vancomycin resistance, not genetic effects on mupirocin pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kpanou_2021 | irrelevant | 0 | 0 | This computational drug–drug interaction study reports no quantitative mupirocin disposition parameters. |
| popPK | Lanoiselée_2020 | irrelevant | 0 | 0 | This study reports cefuroxime pharmacokinetics, not mupirocin, and provides no mupirocin parameter values. |
| PGx | Talon_1995 | not_relevant | 0 | 0 | The paper reports mupirocin efficacy and colonization outcomes, but no genetic variation or genotype-related PK/PD effects. |
| PGx | Terlecky_2026 | not_relevant | 2 | 1 | The study detects mupA and describes resistance mechanisms, but does not report a genotype-associated change in mupirocin MIC or another PK/PD parameter. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | This review reports no quantitative mupirocin pharmacokinetic parameters or disposition model. |
| popPK | Wiegand_2012 | irrelevant | 0 | 0 | This in-vitro bacterial adaptation study reports no mupirocin pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
