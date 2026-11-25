<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;halofantrine&quot;}]"></div>

# halofantrine

- **generic name:** halofantrine
- **ATC codes:** `P01BX01`
- **DrugBank:** [DB01218](https://go.drugbank.com/drugs/DB01218) · **PubChem:** [CID 37393](https://pubchem.ncbi.nlm.nih.gov/compound/37393)
- **molar mass:** 500.424 g/mol (C26H30Cl2F3NO) — DrugBank
- **groups:** approved, withdrawn

## About

Halofantrine is an antimalarial medication indicated for the treatment of malaria caused by Plasmodium vivax and Plasmodium falciparum. It is administered orally in the form of tablets or suspensions. The drug is no longer in use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q947595](https://www.wikidata.org/wiki/Q947595), [Wikipedia](https://en.wikipedia.org/wiki/Halofantrine?oldid=1303148802) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| halofantrine | parent | 500.424 | C26H30Cl2F3NO | DrugBank | [37393](https://pubchem.ncbi.nlm.nih.gov/compound/37393) | Klein_2012 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Klein_2012_reference](drugs/drug_halofantrine/Halofantrine_Klein2012_reference.md) | — | 2-compartment (no model) | 4 | Klein K et al., Population pharmacokinetics of halofant…, The Journal of pharmacy and… (2012) | [10.1111/j.2042-7158.2012.01554.x](https://doi.org/10.1111/j.2042-7158.2012.01554.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Krishna_1993_reference](drugs/drug_halofantrine/Halofantrine_Krishna1993_reference.md) | — | 1-compartment (no model) | 0 | Krishna S et al., Pharmacokinetics, efficacy and toxicity…, British journal of clinical… (1993) | [10.1111/j.1365-2125.1993.tb00419.x](https://doi.org/10.1111/j.1365-2125.1993.tb00419.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Kinoshita_2010_QaTc](drugs/drug_halofantrine/pd_Kinoshita_2010_QaTc.md) | change in heart rate-corrected QaTc interval ← halofantrine · direct Emax (saturable) effect | — | Kinoshita A et al., Effects of anti-malarial drugs on the e…, Malaria journal (2010) | [10.1186/1475-2875-9-318](https://doi.org/10.1186/1475-2875-9-318) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:11 | 0:04 | 0/2/0 | 1/0/0 | 0/0/0 | 4,096/171 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kinoshita_2010 | irrelevant | 0 | 0 | In-vitro isolated guinea pig heart pharmacodynamics (QT prolongation EC50) study, not a PK study reporting halofantrine disposition parameters. |
| PGx | Klein_2012 | not_relevant | 0 | 0 | The paper investigates non-genetic covariates (weight, sex, malaria status) on halofantrine PK and contains no genetic data or pharmacogenomic analysis. |
| PGx | Krishna_1993 | not_relevant | 0 | 0 | The study evaluates the pharmacokinetics of halofantrine in malaria patients but does not assess any genetic variants or genotypes. |
| popPK | Philipps_1998 | irrelevant | 0 | 0 | This is an in-vitro parasite susceptibility study reporting EC50 values for Plasmodium falciparum, not a pharmacokinetic study of the drug. |
| PGx | Philipps_1998 | not_relevant | 0 | 0 | The paper describes in vitro drug susceptibility of Plasmodium falciparum, not the effect of human genetic variants on pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhalofantrine%5D&body=Drug%3A%20halofantrine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_halofantrine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 22:11 UTC</sub>
