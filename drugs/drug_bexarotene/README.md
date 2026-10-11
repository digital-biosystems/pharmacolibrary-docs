<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;bexarotene&quot;}]"></div>

# bexarotene

- **generic name:** bexarotene
- **ATC codes:** `L01XF03`
- **DrugBank:** [DB00307](https://go.drugbank.com/drugs/DB00307) · **PubChem:** [CID 82146](https://pubchem.ncbi.nlm.nih.gov/compound/82146)
- **molar mass:** 348.4779 g/mol (C24H28O2) — DrugBank
- **groups:** approved, investigational

## About

Bexarotene is a retinoid anticancer drug used to treat cutaneous T-cell lymphoma, including mycosis fungoides. It is approved and authorised in the European Union for this cancer, and is also being studied for other investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418192](https://www.wikidata.org/wiki/Q418192) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:30 | 4:08 | 0/0/0 | 1/0/0 | 0/0/0 | 110,478/6,166 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jurutka_2021_RXR](drugs/drug_bexarotene/pd_Jurutka_2021_RXR.md) | positive ← bexarotene · indirect response — drug inhibits the loss of positive | — | Jurutka PW et al., Modeling, Synthesis, and Biological Eva…, International journal of mo… (2021) | [10.3390/ijms222212371](https://doi.org/10.3390/ijms222212371) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bexarotene) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: RXRA (target), RXRB (target), RXRG (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Apaza_2021 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of bexarotene isolated from plant resin, reporting IC50/EC50 values for cellular activities rather than pharmacokinetic disposition parameters. |
| popPK | Booth_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell signaling and cytotoxicity, containing no pharmacokinetic parameters for bexarotene. |
| popPK | Franssen_2003 | irrelevant | 0 | 0 | The study is a mechanistic/efficacy analysis of epidermal markers in psoriasis patients and does not report any pharmacokinetic parameters for bexarotene. |
| popPK | Furmick_2012 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro biological evaluation (RXR agonism) of bexarotene analogues, not pharmacokinetic disposition parameters. |
| popPK | Hackney_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of gene expression and protein interactions, containing no pharmacokinetic parameters for bexarotene. |
| popPK | Hanish_2018 | irrelevant | 0 | 0 | The paper is an in-vitro gene expression and structure-activity relationship study, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Heitel_2017 | irrelevant | 0 | 0 | The study is an in silico and in vitro mechanistic screening for receptor agonism, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ishikawa_2022 | irrelevant | 0 | 0 | The study is an in-vitro gene expression and promoter trapping analysis using bexarotene as a stimulus, not a pharmacokinetic study. |
| popPK | Jurutka_2013 | irrelevant | 0 | 0 | The paper focuses on the modeling, synthesis, and biological evaluation (RXR agonism, EC50) of bexarotene analogues, not on pharmacokinetic disposition parameters. |
| popPK | Jurutka_2019 | irrelevant | 0 | 0 | The paper describes in vitro biological assays for receptor activity and potency, not pharmacokinetic disposition parameters. |
| popPK | Jurutka_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in vitro biological evaluation (RXR agonism, EC50/IC50) of bexarotene analogs, containing no pharmacokinetic data. |
| popPK | Jurutka_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in vitro receptor binding/activity of bexarotene analogs, not a pharmacokinetic study. |
| popPK | Jurutka_2025 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro evaluation of novel RXR agonists using bexarotene only as a comparator, with no pharmacokinetic parameters reported. |
| popPK | Lubet_2005 | irrelevant | 0 | 0 | The study reports efficacy and biological effects (proliferation, apoptosis, IGF1 levels) of bexarotene in a cancer model, but does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Pereira_2006 | irrelevant | 0 | 0 | The study is a chemoprevention/efficacy trial in mice reporting tumor multiplicity and size, not pharmacokinetic parameters. |
| popPK | Smit_2004 | irrelevant | 0 | 0 | The study reports immunohistochemical efficacy parameters (proliferation, inflammation) in psoriasis patients, not pharmacokinetic disposition parameters. |
| popPK | Smit_2004_2 | irrelevant | 0 | 0 | The paper is a Phase II clinical trial focused on safety and efficacy in psoriasis, with no report of pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Yanik_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adipocyte differentiation and does not report any pharmacokinetic parameters for bexarotene. |
| popPK | Yuan_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study that reports EC50 values and cites a Cmax value from another source, but does not report original pharmacokinetic disposition parameters (CL, V, ka, etc.) for bexarotene. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
