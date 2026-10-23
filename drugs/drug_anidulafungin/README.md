<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;anidulafungin&quot;}]"></div>

# anidulafungin

- **generic name:** anidulafungin
- **ATC codes:** `J02AX06`
- **DrugBank:** [DB00362](https://go.drugbank.com/drugs/DB00362) · **PubChem:** [CID 166548](https://pubchem.ncbi.nlm.nih.gov/compound/166548)
- **groups:** approved

## About

Anidulafungin is an antifungal medicine used to treat candidiasis, including esophageal candidiasis. It is approved and authorised in the European Union, where it is used for systemic fungal infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4764531](https://www.wikidata.org/wiki/Q4764531) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.00).">in vitro</span> | [Siopi_2021_AMEC](drugs/drug_anidulafungin/pd_Siopi_2021_AMEC.md) | % aberrant mycelium formation ← anidulafungin · direct sigmoid Emax (Hill) effect | — | Siopi M et al., Comparative Pharmacodynamics of Echinoc…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.01618-20](https://doi.org/10.1128/AAC.01618-20) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=anidulafungin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:21 | 21:56 | 0/0/0 | 0/1/0 | 0/0/0 | 36,800/1,207 | einfracz / qwen3.8-27b | 22 | 2/18 | 22/0 | 0 |

## Coverage

- **PubMed hits:** 192 matched, 108 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arastehfar_2019 | not_relevant | 0 | 0 | The paper reports the identification and antifungal susceptibility (MICs) of Candida nivariensis isolates, but does not investigate the effect of human gene variants on pharmacokinetic or pharmacodynamic parameters of anidulafungin. |
| PGx | Badali_2011 | not_relevant | 0 | 0 | The paper reports in vitro antifungal susceptibility (MICs) of a fungus to anidulafungin and other agents, with no investigation of human gene variants or pharmacogenomic effects on pharmacokinetic/pharmacodynamic parameters. |
| popPK | Cornely_2021 | irrelevant | 0 | 0 | no_text gate: only 181 chars of text extracted (&lt; 400) |
| PGx | Liu_2014 | not_relevant | 0 | 0 | The study reports no significant association between CYP2C19 genotype and efficacy or safety endpoints, and does not describe pharmacogenomic effects on PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Banidulafungin%5D&body=Drug%3A%20anidulafungin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_anidulafungin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
