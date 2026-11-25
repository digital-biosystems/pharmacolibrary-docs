<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02D&quot;,&quot;href&quot;:&quot;atc/P02D.md&quot;},{&quot;label&quot;:&quot;dichlorophen&quot;}]"></div>

# dichlorophen

- **generic name:** dichlorophen
- **ATC codes:** `P02DX02`
- **DrugBank:** [DB11396](https://go.drugbank.com/drugs/DB11396) · **PubChem:** none
- **molar mass:** 269.12 g/mol (C13H10Cl2O2) — DrugBank
- **groups:** investigational, vet_approved

## About

Dichlorophen is an anticestodal agent, fungicide, and antimicrobial used to treat parasites in dogs and cats. It is given orally as a tablet. The drug is used for veterinary purposes in pets.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q377552](https://www.wikidata.org/wiki/Q377552), [Wikipedia](https://en.wikipedia.org/wiki/Dichlorophen?oldid=1386002176) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Aggarwal_2020_NAPE_PLD_activity](drugs/drug_dichlorophen/pd_Aggarwal_2020_NAPE_PLD_activity.md) | NAPE-PLD activity ← dichlorophen · direct sigmoid Emax (Hill) effect | — | Aggarwal G et al., Symmetrically substituted dichlorophene…, The Journal of biological c… (2020) | [10.1074/jbc.RA120.013362](https://doi.org/10.1074/jbc.RA120.013362) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:38 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 4,480/193 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aggarwal_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study identifying dichlorophenes as NAPE-PLD inhibitors, reporting IC50 values for enzyme inhibition but containing no pharmacokinetic parameters (CL, V, Ka, etc.) for the compound. |
| PGx | Aggarwal_2020 | not_relevant | 0 | 0 | The paper is a chemical biology study identifying dichlorophenes as inhibitors of the NAPE-PLD enzyme and does not report any pharmacogenomic studies or effects of genetic variants on the PK or PD of dichlorophenes. |
| popPK | Matuszek_1998 | irrelevant | 0 | 0 | The paper studies tachykinin NK2 receptors and dichlorophen is only mentioned as part of a chemical name, not as a subject drug for PK analysis. |
| PGx | Matuszek_1998 | not_relevant | 0 | 0 | The paper investigates rat NK2 receptor binding and does not report any pharmacogenomic effect of gene variants on the pharmacokinetics or pharmacodynamics of dichlorophen. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study investigates the enzymatic inhibition of 11β-HSD2 by halogenated phenols in vitro and ex vivo, reporting IC50 and KD values rather than pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper investigates the inhibition of the 11β-HSD2 enzyme by halogenated phenolic disinfectants (including dichlorophene) but does not report any genetic variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdichlorophen%5D&body=Drug%3A%20dichlorophen%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dichlorophen/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
