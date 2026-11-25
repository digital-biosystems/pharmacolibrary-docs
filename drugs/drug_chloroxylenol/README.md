<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;chloroxylenol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloroxylenol_Dorantes1992_reference&quot;,&quot;label&quot;:&quot;Dorantes_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# chloroxylenol

- **generic name:** chloroxylenol
- **ATC codes:** `D08AE05`
- **DrugBank:** [DB11121](https://go.drugbank.com/drugs/DB11121) · **PubChem:** [CID 2723](https://pubchem.ncbi.nlm.nih.gov/compound/2723)
- **molar mass:** 156.61 g/mol (C8H9ClO) — DrugBank
- **groups:** approved

## About

Chloroxylenol is a phenol derivative used as an antiseptic and local anti-infective. It is given topically in various forms such as liquids, soaps, and lotions. The drug is listed as a WHO essential medicine.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q426460](https://www.wikidata.org/wiki/Q426460), [Wikipedia](https://en.wikipedia.org/wiki/Chloroxylenol?oldid=1385044768) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chloroxylenol (p-chloro-m-xylenol) | parent | 156.61 | C8H9ClO | DrugBank | [2723](https://pubchem.ncbi.nlm.nih.gov/compound/2723) | Dorantes_1992 |

## Start here

> **Dorantes_1992_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy mongrel dogs. [Run it in the simulator](drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md?tab=Simulation) · [record](drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>blocking: cross_check_disputed</sub> | [Dorantes_1992_reference](drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Dorantes A et al., Pharmacokinetic and metabolic dispositi…, Pharmaceutical research (1992) | [10.1023/a:1015814513373](https://doi.org/10.1023/a:1015814513373) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.50).">human + animal</span> | [Han_2026_SRD5A1_activity](drugs/drug_chloroxylenol/pd_Han_2026_SRD5A1_activity.md) | 5α-Reductase 1 activity ← chloroxylenol · inhibition effect | — | Han X et al., Differences between human and rat 5α-Re…, Chemico-biological interact… (2026) | [10.1016/j.cbi.2026.112186](https://doi.org/10.1016/j.cbi.2026.112186) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:45 | 0:20 | 1/0/0 | 1/0/0 | 0/0/0 | 10,106/1,723 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hussien_2022.pdf` | Hussien RAA et al., Evaluation of the Fungicidal Effect of…, Plants (Basel, Switzerland) (2022) | pd | 4 | [10.3390/plants11243542](https://doi.org/10.3390/plants11243542) | [36559653](https://www.ncbi.nlm.nih.gov/pubmed/36559653) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-23 19:44 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Dorantes_1992 | not_relevant | 0 | 0 | The paper reports PK parameters for chloroxylenol in dogs but does not investigate or report any effect of gene variants, genotypes, or genetic phenotypes on these parameters. |
| popPK | Galli_2025 | irrelevant | 0 | 0 | In-vitro anthelmintic screening study with no chloroxylenol PK parameters reported. |
| PD | Galli_2025 | not_relevant | 0 | 0 | The paper reports high-throughput screening results for flavonoids and other compounds, but does not mention or analyze chloroxylenol. |
| popPK | Han_2026 | irrelevant | 0 | 0 | The study evaluates enzymatic inhibition kinetics (IC50, KD) of SRD5A1 by chloroxylenol, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the drug itself. |
| PGx | Han_2026 | not_relevant | 0 | 0 | The paper investigates the enzyme inhibition of SRD5A1 by chloroxylenol in vitro, but does not report any gene variant or genotype affecting the pharmacokinetics or pharmacodynamics of chloroxylenol. |
| popPK | Hussien_2022 | irrelevant | 0 | 0 | no_text gate: only 167 chars of text extracted (&lt; 400) |
| PD | Hussien_2022 | not_relevant | 0 | 0 | The paper evaluates the fungicidal effect of disinfectants against a plant pathogen, which is not a pharmacodynamic study of a drug in a biological system (human/animal) with exposure-response or dose-response parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | This is a cancer pharmacology/mechanism study of brusatol with no chloroxylenol PK parameters reported. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper investigates Brusatol, not chloroxylenol, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | This is a metabolomics/gut microbiota study of pulchinenoside B4 in oral ulcer rats; chloroxylenol is not the subject drug and no PK parameters appear. |
| PD | Luo_2024 | not_relevant | 0 | 0 | The paper studies Pulchinenoside B4, not chloroxylenol, and does not report any pharmacodynamic or exposure-response parameters for the target drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchloroxylenol%5D&body=Drug%3A%20chloroxylenol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chloroxylenol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 19:41 UTC</sub>
