<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;amifampridine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amifampridine_Thakkar2017_reference&quot;,&quot;label&quot;:&quot;Thakkar_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Thakkar_2017_3TUG&quot;,&quot;label&quot;:&quot;Thakkar_2017 \u00b7 3TUG&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_amifampridine/pd_Thakkar_2017_3TUG.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# amifampridine

- **generic name:** amifampridine
- **ATC codes:** `N07XX05`
- **DrugBank:** [DB11640](https://go.drugbank.com/drugs/DB11640) · **PubChem:** none
- **molar mass:** 109.132 g/mol (C5H7N3) — DrugBank
- **groups:** approved

## About

Amifampridine is a potassium channel blocker used primarily to treat Lambert-Eaton myasthenic syndrome and myasthenia gravis. It is taken orally in tablet form and is well absorbed by the gut. The drug is authorized in the European Union and is available for use in the United States, where it has orphan and breakthrough therapy designations.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q411707](https://www.wikidata.org/wiki/Q411707), [Wikipedia](https://en.wikipedia.org/wiki/Amifampridine?oldid=1337381039) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 3,4-diaminopyridine | parent | 109.132 | C5H7N3 | DrugBank | — | Thakkar_2017 |
| 3-N-acetyl-3,4-diaminopyridine | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Thakkar_2017_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> adults with Lambert-Eaton myasthenia. [Run it in the simulator](drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference.md?tab=Simulation) · [record](drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Thakkar_2017_reference](drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 7 (+1 cov.) | Thakkar N et al., Population Pharmacokinetics/Pharmacodyn…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--blue">Simulated</span> | [Thakkar_2017_3TUG](drugs/drug_amifampridine/pd_Thakkar_2017_3TUG.md) | Triple Timed Up & Go (3TUG) ← 3,4-DAP · direct Emax (saturable) effect | ▶ model + simulator | Thakkar N et al., Population Pharmacokinetics/Pharmacodyn…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 17:38 | 0:04 | 1/0/0 | 1/0/0 | 0/0/0 | 4,340/140 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 51 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdul-Mutakabbir_2020 | irrelevant | 0 | 0 | This is an in vitro PK/PD study of dalbavancin, vancomycin, daptomycin, and cefazolin against S. aureus; amifampridine is not mentioned at all. |
| popPK | Barber_2015 | irrelevant | 0 | 0 | The study evaluates the antibacterial efficacy of ceftaroline, daptomycin, and rifampin, not the pharmacokinetics of amifampridine. |
| PGx | Barber_2015 | not_relevant | 0 | 0 | The paper evaluates the antimicrobial activity of ceftaroline, daptomycin, and rifampin against MRSA, and does not involve amifampridine or pharmacogenomics. |
| popPK | Bellissant_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetic-pharmacodynamic modeling of pinacidil and its metabolite pinacidil-N-oxide, not amifampridine. |
| PGx | Bellissant_1994 | not_relevant | 0 | 0 | The study investigates pharmacokinetic-pharmacodynamic modeling of pinacidil in healthy volunteers and contains no information regarding amifampridine or pharmacogenomic effects. |
| popPK | Bulkeley_2021 | irrelevant | 0 | 0 | This is a bull sperm mitochondrial function study; amifampridine is not involved and no PK parameters are reported. |
| popPK | Dehdab_2024 | irrelevant | 0 | 0 | This is an imaging study on AI denoising in TIPSS CBCT; no amifampridine PK parameters are reported anywhere. |
| popPK | Ferguson_2019 | irrelevant | 0 | 0 | This is an epidemiological study of organophosphate pesticide metabolites (DAPs) and fetal growth; amifampridine is not mentioned and no PK parameters for it exist. |
| popPK | Hall_2016 | irrelevant | 0 | 0 | The study focuses on the in vitro PK/PD of daptomycin and fosfomycin against VRE and does not involve amifampridine. |
| PGx | Hall_2016 | not_relevant | 0 | 0 | The paper does not study amifampridine or report pharmacogenomic effects on a PK or PD parameter; it focuses on the in vitro PK/PD interaction of fosfomycin and daptomycin against vancomycin-resistant Enterococci. |
| popPK | Kebriaei_2023 | irrelevant | 0 | 0 | This is an in vitro PK/PD study of dalbavancin and daptomycin against S. aureus; amifampridine is not mentioned at all. |
| popPK | Kunz_2024 | irrelevant | 0 | 0 | The study investigates phage-antibiotic synergy against MRSA and does not involve the drug amifampridine or its pharmacokinetics. |
| PGx | Kunz_2024 | not_relevant | 0 | 0 | The paper studies phage-antibiotic synergy in MRSA, not the pharmacogenomics of amifampridine. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | The paper investigates the toxicological effects of phthalate esters on the alga Karenia brevis and contains no data on amifampridine pharmacokinetics. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper discusses phthalate esters and algal biology, unrelated to amifampridine pharmacogenomics. |
| popPK | Mancheño-Losa_2025 | irrelevant | 0 | 0 | This is an in vitro PK/PD study of ceftobiprole and daptomycin against MRSA biofilm; amifampridine is not mentioned and no amifampridine PK parameters exist. |
| popPK | Sanders_2017 | irrelevant | 0 | 0 | The study is about radiation exposure during hip injections and contains no pharmacokinetic data for amifampridine. |
| PGx | Sanders_2017 | not_relevant | 0 | 0 | The paper discusses radiologist training and radiation exposure in hip injections; it is unrelated to pharmacogenomics or amifampridine. |
| popPK | Smith_2015 | irrelevant | 0 | 0 | The study focuses on in vitro PK/PD models of daptomycin and beta-lactams against bacteria, with no mention of amifampridine or its pharmacokinetics. |
| PGx | Smith_2015 | not_relevant | 0 | 0 | The paper studies antibiotic combinations (daptomycin and beta-lactams) against bacteria and does not involve amifampridine or pharmacogenomics. |
| PGx | Thakkar_2017 | not_relevant | 3 | 0 | The paper identifies 3,4-diaminopyridine (amifampridine) and notes that genotype was tested as a covariate in the population PK model, but the effect was not retained in the final model; thus, no significant pharmacogenomic effect is reported. |
| popPK | Warman_1994 | irrelevant | 0 | 0 | The paper is a computational electrophysiology model of hippocampal neurons and does not report pharmacokinetic parameters for amifampridine. |
| PGx | Warman_1994 | not_relevant | 0 | 0 | The paper describes a computational model of hippocampal CA1 cell electrophysiology and does not mention amifampridine, genetic variants, or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Yamada_2020 | irrelevant | 0 | 0 | The study concerns the pharmacokinetics of daptomycin, not amifampridine. |
| PGx | Yamada_2020 | not_relevant | 0 | 0 | The paper investigates pharmacokinetics and dosing of daptomycin, not amifampridine, and does not involve pharmacogenomic analysis. |
| popPK | du_2019 | irrelevant | 0 | 0 | The paper discusses prostatic artery embolization technical outcomes and has no relation to amifampridine pharmacokinetics. |
| PGx | du_2019 | not_relevant | 0 | 0 | The paper focuses on technical factors in prostatic artery embolization and does not mention amifampridine or any pharmacogenomic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamifampridine%5D&body=Drug%3A%20amifampridine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amifampridine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 10:15 UTC</sub>
