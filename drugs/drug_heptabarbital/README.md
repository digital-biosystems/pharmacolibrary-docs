<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;heptabarbital&quot;}]"></div>

# heptabarbital

- **generic name:** heptabarbital
- **ATC codes:** `N05CA11`
- **DrugBank:** [DB01354](https://go.drugbank.com/drugs/DB01354) · **PubChem:** [CID 10518](https://pubchem.ncbi.nlm.nih.gov/compound/10518)
- **molar mass:** 250.2936 g/mol (C13H18N2O3) — DrugBank
- **groups:** experimental

## About

Heptabarbital is a barbiturate used as a sedative and hypnotic for insomnia.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q410829](https://www.wikidata.org/wiki/Q410829), [Wikipedia](https://en.wikipedia.org/wiki/Heptabarb?oldid=1329514869) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Dingemanse_1988_reference](drugs/drug_heptabarbital/Heptabarbital_Dingemanse1988_reference.md) | — | 1-compartment (no model) | 0 | Dingemanse J et al., Altered pharmacokinetic-pharmacodynamic…, The Journal of pharmacology… (1988) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mandema_1990_TNW](drugs/drug_heptabarbital/pd_Mandema_1990_TNW.md) | total number of waves per second ← heptabarbital · direct sigmoid Emax (Hill) effect | — | Mandema JW et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacokinetics… (1990) | [10.1007/BF01061705](https://doi.org/10.1007/BF01061705) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:16 | 0:33 | 0/1/0 | 1/0/0 | 0/0/0 | 6,723/3,396 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Dingemanse_1988 | not_relevant | 0 | 0 | The paper describes pharmacokinetic and pharmacodynamic modeling methods for heptabarbital but does not report any genetic variants or pharmacogenomic effects. |
| popPK | Mandema_1990 | irrelevant | 3 | 0 | The paper focuses on pharmacodynamic modeling of EEG effects in rats and does not report pharmacokinetic disposition parameters (CL, V, etc.) for heptabarbital. |
| PGx | Mandema_1990 | not_relevant | 0 | 0 | The study describes PK-PD modeling of heptabarbital in rats but does not report any pharmacogenomic effects or the impact of gene variants on parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bheptabarbital%5D&body=Drug%3A%20heptabarbital%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_heptabarbital/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 13:21 UTC</sub>
