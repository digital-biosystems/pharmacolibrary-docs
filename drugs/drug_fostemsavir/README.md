<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;fostemsavir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fostemsavir_Parasrampuria2025_reference&quot;,&quot;label&quot;:&quot;Parasrampuria_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# fostemsavir

- **generic name:** fostemsavir
- **ATC codes:** `J05AX29`
- **DrugBank:** [DB11796](https://go.drugbank.com/drugs/DB11796) · **PubChem:** [CID 11319217](https://pubchem.ncbi.nlm.nih.gov/compound/11319217)
- **molar mass:** 583.498 g/mol (C25H26N7O8P) — DrugBank
- **groups:** approved, investigational

## About

Fostemsavir is an antiretroviral entry inhibitor used to treat adults with HIV who cannot be managed by other therapies due to resistance, intolerance, or safety issues. It is administered orally as extended-release tablets. It is authorised in the European Union and the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q17001240](https://www.wikidata.org/wiki/Q17001240), [Wikipedia](https://en.wikipedia.org/wiki/Fostemsavir?oldid=1368841233) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fostemsavir | parent | 583.498 | C25H26N7O8P | DrugBank | [11319217](https://pubchem.ncbi.nlm.nih.gov/compound/11319217) | Parasrampuria_2025 |
| temsavir | metabolite | 473.493 | C24H23N7O4 | PubChem | [11317439](https://pubchem.ncbi.nlm.nih.gov/compound/11317439) | Parasrampuria_2025 |

## Start here

> **Parasrampuria_2025_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> treatment-experienced HIV patients. [Run it in the simulator](drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference.md?tab=Simulation) · [record](drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Parasrampuria_2025_reference](drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Parasrampuria R et al., Population pharmacokinetics and exposur…, Pharmacology research & per… (2025) | [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Parasrampuria_2025_Proportion_0_5_log10_decrease](drugs/drug_fostemsavir/pd_Parasrampuria_2025_Proportion_0_5_log10_decrease.md) | Proportion of subjects achieving &gt;0.5 log10 decrease in plasma HIV-1 RNA on Day 8 ← temsavir · categorical (graded) response model | — | Parasrampuria R et al., Population pharmacokinetics and exposur…, Pharmacology research & per… (2025) | [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Parasrampuria_2025_Proportion_1_log10_decrease](drugs/drug_fostemsavir/pd_Parasrampuria_2025_Proportion_1_log10_decrease.md) | Proportion of subjects achieving &gt;1 log10 decrease in plasma HIV-1 RNA on Day 8 ← temsavir · categorical (graded) response model | — | Parasrampuria R et al., Population pharmacokinetics and exposur…, Pharmacology research & per… (2025) | [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Lagishetty_2020_ddQTcF](drugs/drug_fostemsavir/pd_Lagishetty_2020_ddQTcF.md) | ddQTcF ← temsavir · direct linear effect | model (no simulator) | Lagishetty C et al., Effects of Temsavir, Active Moiety of A…, Clinical and translational… (2020) | [10.1111/cts.12763](https://doi.org/10.1111/cts.12763) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Parasrampuria_2025_HIV_RNA_change](drugs/drug_fostemsavir/pd_Parasrampuria_2025_HIV_RNA_change.md) | Change in plasma HIV-1 RNA from Day 1 to Day 8 ← temsavir · direct Emax (saturable) effect | model (no simulator) | Parasrampuria R et al., Population pharmacokinetics and exposur…, Pharmacology research & per… (2025) | [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:11 | 0:05 | 1/0/0 | 2/2/0 | 0/0/0 | 3,783/177 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Thakkar_2023.pdf` | Thakkar N et al., Model-Based Dose Selection of Fostemsav…, Clinical pharmacology in dr… (2023) | popPK | 10 | [10.1002/cpdd.1291](https://doi.org/10.1002/cpdd.1291) | [37329260](https://pubmed.ncbi.nlm.nih.gov/37329260) | The paper describes a population PK model for fostemsavir used for pediatric dose selection, but the abstract provided contains no numeric parameter values (CL, V, etc.), only dosing recommendations and qualitative bioequivalence results. |

<sub>queue written 2026-11-23 22:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lagishetty_2020 | irrelevant | 2 | 0 | The study is a Thorough QT (TQT) assessment focused on exposure-response modeling of QTcF, and specific PK parameter values (CL, V) are referenced as being in supplementary figures (Figure S1) not included in the evidence. |
| PGx | Lagishetty_2020 | not_relevant | 0 | 0 | The paper describes standard pharmacokinetic and QT safety analyses but does not report the effect of any gene variant or genotype on fostemsavir's PK or PD parameters. |
| PGx | Parasrampuria_2025 | not_relevant | 2 | 10 | The paper describes a standard population PK analysis involving CYP3A inhibitor/inducer covariates, not a pharmacogenomic study identifying specific gene variants (genotypes) that alter PK. |
| popPK | Thakkar_2023 | relevant | 10 | 0 | The paper describes a population PK model for fostemsavir used for pediatric dose selection, but the abstract provided contains no numeric parameter values (CL, V, etc.), only dosing recommendations and qualitative bioequivalence results. |
| PGx | Thakkar_2023 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic modeling for dose selection in pediatrics and relative bioavailability in healthy adults, but does not analyze genetic variants or pharmacogenomic effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfostemsavir%5D&body=Drug%3A%20fostemsavir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fostemsavir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 12:28 UTC</sub>
