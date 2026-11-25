<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;moclobemide&quot;}]"></div>

# moclobemide

- **generic name:** moclobemide
- **ATC codes:** `N06AG02`
- **DrugBank:** [DB01171](https://go.drugbank.com/drugs/DB01171) · **PubChem:** [CID 4235](https://pubchem.ncbi.nlm.nih.gov/compound/4235)
- **molar mass:** 268.739 g/mol (C13H17ClN2O2) — DrugBank
- **groups:** approved, investigational

## About

Moclobemide is a reversible monoamine oxidase A inhibitor used primarily to treat depression and social anxiety. It is administered orally in tablet or solution form and is well absorbed. The drug is approved in several Western countries, including Canada, the United Kingdom, and Australia, though it is not approved in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q421934](https://www.wikidata.org/wiki/Q421934), [Wikipedia](https://en.wikipedia.org/wiki/Moclobemide?oldid=1384733773) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| moclobemide | parent | 268.739 | C13H17ClN2O2 | DrugBank | [4235](https://pubchem.ncbi.nlm.nih.gov/compound/4235) | Główka_2019, Raaflaub_1984 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Raaflaub_1984_reference](drugs/drug_moclobemide/Moclobemide_Raaflaub1984_reference.md) | — | 1-compartment (no model) | 4 | Raaflaub J et al., Single-dose pharmacokinetics of the MAO…, Arzneimittel-Forschung (1984) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Główka_2019_aurorix](drugs/drug_moclobemide/Moclobemide_Gwka2019_aurorix.md) | — | 1-compartment (no model) | 8 | Główka FK et al., Bioavailability of moclobemide from two…, Die Pharmazie (2019) | [10.1691/ph.2019.8819](https://doi.org/10.1691/ph.2019.8819) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ moclobemide](drugs/drug_moclobemide/Moclobemide_Gwka2019_moclobemide.md) | — | 1-compartment (no model) | 8 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Baumann_1996_2_CYP2D6](drugs/drug_moclobemide/pd_Baumann_1996_2_CYP2D6.md) | CYP2D6 inhibition ← moclobemide · inhibition effect | — | Baumann P, Pharmacokinetic-pharmacodynamic relatio…, Clinical pharmacokinetics (1996) | [10.2165/00003088-199631060-00004](https://doi.org/10.2165/00003088-199631060-00004) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:18 | 0:53 | 1/2/0 | 1/0/0 | 0/0/0 | 18,243/5,481 | einfracz / qwen3.8-27b | 18 | 3/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Raaflaub_1984.pdf` | Raaflaub J et al., Single-dose pharmacokinetics of the MAO…, Arzneimittel-Forschung (1984) | popPK | 10 |  | [6538424](https://pubmed.ncbi.nlm.nih.gov/6538424) | The study reports quantitative PK parameters (half-life, Vss, bioavailability) for moclobemide in humans, with numeric values present in the text. |

<sub>queue written 2026-11-24 01:17 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baumann_1996_2 | irrelevant | 0 | 0 | The paper is a review of SSRI pharmacokinetics and mentions moclobemide only as a comparator in drug interactions, without reporting any quantitative PK parameters for moclobemide. |
| PD | Baumann_1996_2 | not_relevant | 0 | 0 | The text is a review of SSRIs and mentions moclobemide only in the context of drug interactions and safety, without reporting any pharmacodynamic or exposure-response data. |
| PGx | Baumann_1996_2 | not_relevant | 0 | 0 | The paper discusses SSRIs and moclobemide interactions but does not report any pharmacogenomic effects on the PK/PD parameters of moclobemide. |
| popPK | Birkett_1995 | irrelevant | 0 | 0 | The paper analyzes market uptake (pharmacoepidemiology) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PD | Birkett_1995 | not_relevant | 0 | 0 | The paper applies a sigmoid Emax model to market uptake (utilization over time) data, not pharmacodynamic exposure-response or dose-response relationships. |
| PGx | Birkett_1995 | not_relevant | 0 | 0 | The paper models market uptake trends and does not report pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Boland_2003 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of neuroprotection where moclobemide is only used as a comparator drug, with no PK parameters reported. |
| PD | Boland_2003 | not_relevant | 0 | 0 | The paper reports that moclobemide was ineffective in the cell survival assay, providing no numeric PD parameters or concentration-effect relationship for the drug. |
| PGx | Boland_2003 | not_relevant | 0 | 0 | The study evaluates the neuroprotective effects of pirlindole and dehydropirlindole, not the pharmacogenomics of moclobemide. |
| popPK | Cooper_2023 | irrelevant | 0 | 0 | The study is a retrospective cohort on serotonin toxicity where moclobemide is only a co-ingested comparator/agent, not the subject of PK modeling. |
| PGx | Cooper_2023 | not_relevant | 0 | 0 | The paper investigates clinical outcomes (serotonin toxicity) and co-ingestant interactions, not pharmacogenomic effects on PK/PD parameters of moclobemide. |
| popPK | Dingemanse_1996 | irrelevant | 0 | 0 | no extractable full text and no abstract |
| PGx | Dingemanse_1996 | not_relevant | 0 | 0 | no full text and no abstract |
| popPK | Dingemanse_1996_2 | relevant | 8 | 1 | The study assesses the pharmacokinetic parameters of moclobemide in humans, but the provided evidence contains only the abstract text which qualitatively describes changes in PK parameters without listing specific numeric values (CL, V, t1/2, etc.). |
| PD | Dingemanse_1996_2 | not_relevant | 3 | 2 | The study reports qualitative PD interactions and changes in biomarkers (DHPG, serotonin) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect model. |
| PGx | Dingemanse_1996_2 | not_relevant | 0 | 0 | The paper describes pharmacokinetic and pharmacodynamic drug-drug interactions between moclobemide and selegiline in a general population, with no focus on genetic variants or pharmacogenomics. |
| popPK | Fox_2010 | irrelevant | 0 | 0 | Moclobemide is used only as a co-administered MAOI to study the pharmacokinetics of sumatriptan, not as the subject drug. |
| PGx | Fox_2010 | not_relevant | 0 | 0 | The study investigates the pharmacokinetic effect of a drug-drug interaction (moclobemide on sumatriptan), not the effect of a genetic variant on moclobemide pharmacokinetics or pharmacodynamics. |
| popPK | Ginovart_2006 | irrelevant | 0 | 0 | The study is a PET receptor binding analysis using moclobemide as a blocking agent for MAO-A, not a pharmacokinetic study of moclobemide itself. |
| PGx | Ginovart_2006 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics and PET quantification of the radioligand [11C]-harmine and the pharmacodynamic blockade of MAO-A by moclobemide, but it does not investigate any gene variants, genotypes, or pharmacogenomic effects on these parameters. |
| PGx | Główka_2019 | not_relevant | 0 | 0 | The study compares bioavailability between two formulations in healthy volunteers and does not investigate gene variants or genotypes. |
| PGx | Raaflaub_1984 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of moclobemide in healthy subjects but does not report any pharmacogenomic associations or effects of genetic variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmoclobemide%5D&body=Drug%3A%20moclobemide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_moclobemide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:17 UTC</sub>
