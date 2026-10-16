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
| 2026-10-15 18:12 | 1:15 | 0/0/0 | 0/0/0 | 0/0/0 | 101,602/1,345 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bexarotene).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: RXRA (target), RXRB (target), RXRG (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Apaza_2021 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of bexarotene's bioactivity (anti-inflammatory/proliferative), not a pharmacokinetic study, and no PK parameters are reported. |
| popPK | Booth_2024 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on drug interactions in cell lines and does not report quantitative pharmacokinetic parameters for bexarotene. |
| popPK | Franssen_2003 | irrelevant | 0 | 0 | The study focuses on flow cytometric analysis of epidermal markers in psoriasis patients, not pharmacokinetic parameters. |
| popPK | Furmick_2012 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro biological evaluation of novel bexarotene analogues, not on the pharmacokinetics of bexarotene itself. |
| popPK | Hackney_2024 | irrelevant | 0 | 0 | The paper focuses on gene expression and protein-protein interactions in vitro and does not report pharmacokinetic parameters for bexarotene. |
| popPK | Hanish_2018 | irrelevant | 0 | 0 | The study focuses on gene expression analytics and in vitro cancer cell models for novel rexinoids, reporting no pharmacokinetic parameters (CL, V, t1/2) for bexarotene. |
| popPK | Heitel_2017 | irrelevant | 2 | 0 | This is a pharmacological mechanism study (LXR agonism) referencing clinical plasma concentrations to support a hypothesis, not a pharmacokinetic study reporting disposition parameters like CL or V for bexarotene. |
| popPK | Ishikawa_2022 | irrelevant | 0 | 0 | The paper is a cell biology study using bexarotene as a stimulus to identify gene responders, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Jurutka_2013 | irrelevant | 0 | 0 | The paper focuses on the modeling, synthesis, and biological evaluation (RXR agonism, apoptosis) of bexarotene analogues, containing no pharmacokinetic or disposition parameter data. |
| popPK | Jurutka_2019 | irrelevant | 0 | 0 | The paper describes in vitro methods for assessing biological activity and potency (EC50) of rexinoids, not pharmacokinetic parameters like clearance or volume. |
| popPK | Jurutka_2021 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro receptor agonist evaluation (EC50/IC50) of bexarotene analogs, containing no pharmacokinetic or disposition data. |
| popPK | Jurutka_2022 | irrelevant | 0 | 0 | The study is a synthetic chemistry and in vitro pharmacology paper focusing on RXR agonism and receptor binding, containing no pharmacokinetic disposition data for bexarotene. |
| popPK | Jurutka_2025 | irrelevant | 0 | 0 | The paper reports pharmacodynamic receptor binding and transcriptional assay data, not quantitative pharmacokinetic disposition parameters. |
| popPK | Lubet_2005 | irrelevant | 0 | 0 | This is a study on the chemopreventive and chemotherapeutic efficacy of bexarotene in rats, reporting tumor multiplicity and biological effects, but it does not contain any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Pereira_2006 | irrelevant | 0 | 0 | The study is a chemoprevention/efficacy study in mice reporting tumor multiplicity and size, not pharmacokinetic parameters (CL, V, ka, etc.) for bexarotene. |
| popPK | Smit_2004 | irrelevant | 0 | 0 | The study investigates immunohistochemical efficacy parameters in psoriasis patients and does not report pharmacokinetic disposition parameters. |
| popPK | Smit_2004_2 | irrelevant | 0 | 0 | The paper is a clinical efficacy/safety study for psoriasis and does not report pharmacokinetic disposition parameters for bexarotene. |
| popPK | Yanik_2011 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro analysis of adipocyte differentiation where bexarotene is used as a co-agent/comparator, not a pharmacokinetic study. |
| popPK | Yuan_2020 | irrelevant | 0 | 0 | This is an in-vitro antiviral screening study reporting EC50 values, not a pharmacokinetic study with quantitative disposition parameters (CL, V, etc.) for bexarotene. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
