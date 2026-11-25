<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;fomepizole&quot;}]"></div>

# fomepizole

- **generic name:** fomepizole
- **ATC codes:** `V03AB34`
- **DrugBank:** [DB01213](https://go.drugbank.com/drugs/DB01213) · **PubChem:** [CID 3406](https://pubchem.ncbi.nlm.nih.gov/compound/3406)
- **molar mass:** 82.1038 g/mol (C4H6N2) — DrugBank
- **groups:** approved, vet_approved

## About

Fomepizole is an antidote and enzyme inhibitor prescribed for methanol and ethylene glycol poisoning. It is administered intravenously as an injection. The agent is approved in the United States and is included on the WHO essential medicines list.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416410](https://www.wikidata.org/wiki/Q416410), [Wikipedia](https://en.wikipedia.org/wiki/Fomepizole?oldid=1376428227) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fomepizole | parent | 82.1038 | C4H6N2 | DrugBank | [3406](https://pubchem.ncbi.nlm.nih.gov/compound/3406) | Wallemacq_2004 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Wallemacq_2004_reference](drugs/drug_fomepizole/Fomepizole_Wallemacq2004_reference.md) | — | 1-compartment (no model) | 1 | Wallemacq PE et al., Plasma and tissue determination of 4-me…, Therapeutic drug monitoring (2004) | [10.1097/00007691-200406000-00006](https://doi.org/10.1097/00007691-200406000-00006) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:08 | 0:30 | 1/0/0 | 0/0/0 | 0/0/0 | 9,406/2,537 | einfracz / qwen3.8-27b | 2 | 0/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wallemacq_2004.pdf` | Wallemacq PE et al., Plasma and tissue determination of 4-me…, Therapeutic drug monitoring (2004) | popPK | 9 | [10.1097/00007691-200406000-00006](https://doi.org/10.1097/00007691-200406000-00006) | [15167624](https://pubmed.ncbi.nlm.nih.gov/15167624) | Reports PK parameters including half-life and plasma concentrations for fomepizole in humans, but lacks explicit Clearance (CL) or Volume (V) values. |

<sub>queue written 2026-11-24 00:08 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calello_2006 | irrelevant | 0 | 0 | This is a narrative review of pediatric antidotes without any original quantitative pharmacokinetic parameter values for fomepizole. |
| PGx | Calello_2006 | not_relevant | 0 | 0 | The paper is a general review of pediatric antidotes and does not report pharmacogenomic effects on the PK/PD of fomepizole. |
| popPK | Hovda_2005 | irrelevant | 2 | 0 | The study reports the pharmacokinetic parameters (half-life) of methanol and formate, the poison and its metabolite, not fomepizole itself. |
| PGx | Hovda_2005 | not_relevant | 0 | 0 | The paper reports general pharmacokinetics of methanol and formate during fomepizole treatment but does not investigate or report any pharmacogenomic effects (gene variants) on these parameters. |
| popPK | Lepik_2011 | irrelevant | 0 | 0 | This is a clinical review of medication errors associated with fomepizole use, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Lepik_2011 | not_relevant | 0 | 0 | The paper reports on medication errors and safety outcomes for fomepizole, but does not investigate pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Sivilotti_2000 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the substrate ethylene glycol during fomepizole therapy, not for fomepizole itself. |
| PGx | Sivilotti_2000 | not_relevant | 0 | 0 | The study analyzes the toxicokinetics of ethylene glycol during fomepizole therapy but does not report any pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of fomepizole. |
| PGx | Wallemacq_2004 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (plasma concentrations, half-life) in a small case series without assessing any genetic variants or genotypes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfomepizole%5D&body=Drug%3A%20fomepizole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fomepizole/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 00:08 UTC</sub>
