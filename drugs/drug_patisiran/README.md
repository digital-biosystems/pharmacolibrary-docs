<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;patisiran&quot;}]"></div>

# patisiran

- **generic name:** patisiran
- **ATC codes:** `N07XX12`
- **DrugBank:** [DB14582](https://go.drugbank.com/drugs/DB14582) · **PubChem:** none
- **groups:** approved, investigational

## About

Patisiran is a gene silencing medication used to treat polyneuropathy in patients with hereditary transthyretin-mediated amyloidosis. It is administered as an intravenous injection.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q40441442](https://www.wikidata.org/wiki/Q40441442), [Wikipedia](https://en.wikipedia.org/wiki/Patisiran?oldid=1381157070) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Goel_2020_reference](drugs/drug_patisiran/Patisiran_Goel2020_reference.md) | — | 1-compartment (no model) | 0 | Goel V et al., Population Pharmacokinetic-Pharmacodyna…, Nucleic acid therapeutics (2020) | [10.1089/nat.2019.0841](https://doi.org/10.1089/nat.2019.0841) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Goel_2020_TTR](drugs/drug_patisiran/pd_Goel_2020_TTR.md) | Serum Transthyretin ← ALN-18328 · indirect response — drug inhibits the production of Serum Transthyretin | — | Goel V et al., Population Pharmacokinetic-Pharmacodyna…, Nucleic acid therapeutics (2020) | [10.1089/nat.2019.0841](https://doi.org/10.1089/nat.2019.0841) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:49 | 0:03 | 0/1/0 | 1/0/0 | 0/0/0 | 3,895/162 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Goel_2020 | not_relevant | 0 | 0 | The paper reports a population PK/PD model but explicitly states that covariate analysis showed similar effects across factors without identifying specific pharmacogenomic variants affecting patisiran. |
| popPK | Jeon_2022 | irrelevant | 1 | 0 | The paper is a minireview discussing modeling efforts for siRNA therapeutics and does not report original quantitative PK parameters or numeric values for patisiran in the provided text. |
| PGx | Jeon_2022 | not_relevant | 0 | 0 | The paper is a minireview of PK/PD modeling for siRNA therapeutics and does not report specific pharmacogenomic studies or effect sizes for patisiran. |
| PGx | Zhang_2020 | not_relevant | 1 | 10 | The paper analyzes PK/PD differences across clinical subgroups (including V30M genotype status) but reports "no meaningful differences" and does not derive a specific pharmacogenomic effect size (theta) on the parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpatisiran%5D&body=Drug%3A%20patisiran%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_patisiran/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:48 UTC</sub>
