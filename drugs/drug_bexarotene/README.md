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

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jurutka_2021_RXR](drugs/drug_bexarotene/pd_Jurutka_2021_RXR.md) | positive ← bexarotene · indirect response — drug inhibits the loss of positive | — | Jurutka PW et al., Modeling, Synthesis, and Biological Eva…, International journal of mo… (2021) | [10.3390/ijms222212371](https://doi.org/10.3390/ijms222212371) |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:30 | 4:08 | 0/0/0 | 1/0/0 | 0/0/0 | 110,478/6,166 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 29 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbexarotene%5D&body=Drug%3A%20bexarotene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bexarotene/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
