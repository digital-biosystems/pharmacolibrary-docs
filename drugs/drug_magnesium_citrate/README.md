<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;magnesium citrate&quot;}]"></div>

# magnesium citrate

- **generic name:** magnesium citrate
- **ATC codes:** `A06AD19`, `A12CC04`, `B05CB03`
- **DrugBank:** [DB11110](https://go.drugbank.com/drugs/DB11110) · **PubChem:** [CID 6099959](https://pubchem.ncbi.nlm.nih.gov/compound/6099959)
- **molar mass:** 451.113 g/mol (C12H10Mg3O14) — DrugBank
- **groups:** approved, investigational

## About

Magnesium citrate is used as an osmotic laxative for constipation, as a magnesium mineral supplement, and as an irrigating salt solution. It is an approved medicine and is generally widely available, though it has not been centrally authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q45044](https://www.wikidata.org/wiki/Q45044) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:46 | 5:12 | 0/0/0 | 0/0/0 | 0/0/0 | 52,731/597 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=magnesium_citrate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bertrand_1997.pdf` | Bertrand L et al., Mutagenesis of charged residues in a co…, The Biochemical journal (1997) | pd | 4 | [10.1042/bj3210609](https://doi.org/10.1042/bj3210609) | [9032444](https://www.ncbi.nlm.nih.gov/pubmed/9032444) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-15T00:45:56.331238+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bertrand_1997 | irrelevant | 0 | 0 | The paper is a biochemical study on enzyme mutagenesis where magnesium citrate is used only as an inhibitor to measure IC50 values, not as a subject drug for pharmacokinetic analysis. |
| PD | Bertrand_1997 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, Vmax, IC50) for a mutated protein, not pharmacodynamic exposure-response or dose-response data for a drug in a biological system. |
| popPK | Corkery_2022 | irrelevant | 0 | 0 | The paper is a case report and literature review regarding the psychoactive substance 4-Fluoroethylphenidate, not a pharmacokinetic study of magnesium_citrate. |
| PD | Corkery_2022 | not_relevant | 0 | 0 | The paper is a case report and literature review regarding the first death involving 4-fluoroethylphenidate (4F-EPH) and contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for magnesium citrate or any other drug. |
| popPK | Engeli_2025 | irrelevant | 0 | 0 | The paper is a toxicology and health risk review of cannabidiol (CBD) and does not contain any pharmacokinetic data for magnesium_citrate. |
| PD | Engeli_2025 | not_relevant | 0 | 0 | The paper is a review of cannabidiol (CBD) in foods and does not contain any pharmacodynamic or exposure-response data for magnesium citrate. |
| popPK | Gabriel_1984 | irrelevant | 0 | 0 | The paper is an in vitro enzymology study on bovine heart isocitrate dehydrogenase activation by citrate, not a pharmacokinetic study of magnesium citrate. |
| PD | Gabriel_1984 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics (S0.5 values) for NAD-dependent isocitrate dehydrogenase, not a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| popPK | Gabriel_1985 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study of isocitrate dehydrogenase where magnesium citrate is merely a test compound, not a pharmacokinetic study. |
| PD | Gabriel_1985 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics (IC50/S0.5) for ATP and Calcium, and mentions magnesium citrate only as a non-reversing agent, providing no pharmacodynamic exposure-response or dose-response data for magnesium citrate. |
| popPK | Nagórka_2026 | irrelevant | 0 | 0 | The paper describes the biophysical and functional characterization of Escherichia coli Dr fimbriae and has no relevance to magnesium citrate pharmacokinetics. |
| popPK | Ranade_2001 | irrelevant | 2 | 0 | The paper is explicitly identified as a review that examines bioavailability and pharmacokinetics, but the provided evidence contains no original quantitative disposition parameters or numeric values for magnesium citrate. |
| PD | Ranade_2001 | not_relevant | 2 | 1 | The text is a review abstract that qualitatively discusses the correlation between magnesium salt structure and pharmacodynamic effects but does not report specific numeric PD parameters or exposure-response data for magnesium citrate. |
| popPK | Wilimzig_1996 | irrelevant | 3 | 0 | The study reports a terminal half-life (~8 h) and AUC changes for trimagnesium dicitrate, but lacks the explicit volume of distribution or clearance values required to fully characterize the PK parameters as per the strict definition, and the drug formulation is trimagnesium dicitrate rather than magnesium citrate. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and does not contain any data, analysis, or parameters regarding magnesium citrate pharmacodynamics. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a title/header for conference proceedings and contains no data, analysis, or parameters regarding magnesium citrate pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
