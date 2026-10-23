<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;chloroxylenol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloroxylenol_Dorantes1992_reference&quot;,&quot;label&quot;:&quot;Dorantes_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# chloroxylenol

- **generic name:** chloroxylenol
- **ATC codes:** `D08AE05`
- **DrugBank:** [DB11121](https://go.drugbank.com/drugs/DB11121) · **PubChem:** [CID 2723](https://pubchem.ncbi.nlm.nih.gov/compound/2723)
- **molar mass:** 156.61 g/mol (C8H9ClO) — DrugBank
- **groups:** approved

## About

Chloroxylenol is an antiseptic and disinfectant used to treat or prevent local skin infections. It is widely used, including in household antiseptic products, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q426460](https://www.wikidata.org/wiki/Q426460) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chloroxylenol | parent | 156.61 | C8H9ClO | DrugBank | [2723](https://pubchem.ncbi.nlm.nih.gov/compound/2723) | Dorantes_1992 |

## Start here

> **Dorantes_1992_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> healthy mongrel dogs. [Run it in the simulator](drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md?tab=Simulation) · [record](drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 14.6 | L/h | 14.6 liters/hr | healthy mongrel dogs | dog | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Dorantes_1992_reference](drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md) |
| t½ | t1/2z | 1.84 | h | 1.84 hr | healthy mongrel dogs | dog | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Dorantes_1992_reference](drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md) |
| F | Fab | 0.21 |  | 21 % | healthy mongrel dogs | dog | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Dorantes_1992_reference](drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>stale — current check: Not simulated</sub> | [Dorantes_1992_reference](drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Dorantes A et al., Pharmacokinetic and metabolic dispositi…, Pharmaceutical research (1992) | [10.1023/a:1015814513373](https://doi.org/10.1023/a:1015814513373) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.50).">human + animal</span> | [Han_2026_SRD5A1](drugs/drug_chloroxylenol/pd_Han_2026_SRD5A1.md) | human SRD5A1 activity (inhibition by chloroxylenol) ← chloroxylenol · inhibition effect | — | Han X et al., Differences between human and rat 5α-Re…, Chemico-biological interact… (2026) | [10.1016/j.cbi.2026.112186](https://doi.org/10.1016/j.cbi.2026.112186) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:11 | 0:25 | 1/0/0 | 1/0/0 | 0/0/0 | 14,781/1,005 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dorantes_1992.pdf` | Dorantes A et al., Pharmacokinetic and metabolic dispositi…, Pharmaceutical research (1992) | popPK | 10 | [10.1023/a:1015814513373](https://doi.org/10.1023/a:1015814513373) | [1608902](https://pubmed.ncbi.nlm.nih.gov/1608902) | Full PK parameters (t½, Vss, CL, bioavailability) for chloroxylenol are reported directly in the abstract. |
| `Hussien_2022.pdf` | Hussien RAA et al., Evaluation of the Fungicidal Effect of…, Plants (Basel, Switzerland) (2022) | pd | 4 | [10.3390/plants11243542](https://doi.org/10.3390/plants11243542) | [36559653](https://www.ncbi.nlm.nih.gov/pubmed/36559653) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T23:11:25.190904+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Galli_2025 | irrelevant | 0 | 0 | In-vitro anthelmintic screening study with no chloroxylenol PK parameters reported. |
| PD | Galli_2025 | not_relevant | 0 | 0 | The paper reports high-throughput screening results for flavonoids and other compounds, but does not mention or analyze chloroxylenol. |
| popPK | Hussien_2022 | irrelevant | 0 | 0 | no_text gate: only 167 chars of text extracted (&lt; 400) |
| PD | Hussien_2022 | not_relevant | 0 | 0 | The paper evaluates the fungicidal effect of disinfectants against a plant pathogen, which is not a pharmacodynamic study of a drug in a biological system (human/animal) with exposure-response or dose-response parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | This is a cancer pharmacology/mechanism study of brusatol with no chloroxylenol PK parameters reported. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper investigates Brusatol, not chloroxylenol, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | This is a metabolomics/gut microbiota study of pulchinenoside B4 in oral ulcer rats; chloroxylenol is not the subject drug and no PK parameters appear. |
| PD | Luo_2024 | not_relevant | 0 | 0 | The paper studies Pulchinenoside B4, not chloroxylenol, and does not report any pharmacodynamic or exposure-response parameters for the target drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 23:11 UTC</sub>
