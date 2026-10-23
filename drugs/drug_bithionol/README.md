<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;bithionol&quot;}]"></div>

# bithionol

- **generic name:** bithionol
- **ATC codes:** `D10AB01`, `P02BX01`
- **DrugBank:** [DB04813](https://go.drugbank.com/drugs/DB04813) · **PubChem:** [CID 2406](https://pubchem.ncbi.nlm.nih.gov/compound/2406)
- **molar mass:** 356.052 g/mol (C12H6Cl4O2S) — DrugBank
- **groups:** approved, withdrawn

## About

Bithionol was used as an antiparasitic drug against fluke (trematode) infections and also as a topical anti-acne and antiseptic agent, including as an additive in soaps. It has been withdrawn from human use, reportedly because of skin reactions such as photoallergic contact dermatitis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4918862](https://www.wikidata.org/wiki/Q4918862) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Aggarwal_2020_NAPE_PLD_activity](drugs/drug_bithionol/pd_Aggarwal_2020_NAPE_PLD_activity.md) | NAPE-PLD activity ← bithionol · direct sigmoid Emax (Hill) effect | — | Aggarwal G et al., Symmetrically substituted dichlorophene…, The Journal of biological c… (2020) | [10.1074/jbc.RA120.013362](https://doi.org/10.1074/jbc.RA120.013362) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bithionol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CAPN2 (inhibitor), ESR1 (inhibitor), ESR2 (inhibitor), MCL1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:33 | 0:17 | 0/0/0 | 0/1/0 | 0/0/0 | 34,727/868 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aggarwal_2020 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing bithionol as a NAPE-PLD inhibitor (IC50 reported), not a pharmacokinetic study with disposition parameters like clearance or volume of distribution. |
| popPK | Park_2014 | irrelevant | 0 | 0 | The study evaluates the antiprotozoal efficacy (EC50) of bithionol in vitro and in vivo against a parasite in sea squirts, but does not report any pharmacokinetic parameters for bithionol. |
| popPK | Reid_2001 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of bithionol's cytotoxicity and oxidative stress effects in human keratinocytes, not a pharmacokinetic study. |
| popPK | Wickramasinghe_2006 | irrelevant | 0 | 0 | The paper investigates the enzyme kinetics and structure of OAR in Plasmodium falciparum and reports in vitro antimalarial activity of bithionol, but contains no pharmacokinetic or disposition parameters for bithionol. |
| popPK | Yoshimura_2005 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50/EC50) and stability in water for freshwater organisms, containing no pharmacokinetic parameters such as clearance, volume, or half-life. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbithionol%5D&body=Drug%3A%20bithionol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bithionol/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
