<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;pyrantel&quot;}]"></div>

# pyrantel

- **generic name:** pyrantel
- **ATC codes:** `P02CC01`
- **DrugBank:** [DB11156](https://go.drugbank.com/drugs/DB11156) · **PubChem:** [CID 708857](https://pubchem.ncbi.nlm.nih.gov/compound/708857)
- **molar mass:** 206.31 g/mol (C11H14N2S) — DrugBank
- **groups:** approved, vet_approved

## About

Pyrantel is an antinematodal antihelmintic medication used to treat various parasitic worm infections, including ascariasis, enterobiasis, trichuriasis, and hookworm disease. It is administered orally in forms such as tablets, chewable bars, and suspensions. Although it is taken by mouth, the drug is poorly absorbed through the gastrointestinal tract. Pyrantel is widely used as a generic option and is listed on the World Health Organization's essential medicines list.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q426897](https://www.wikidata.org/wiki/Q426897), [Wikipedia](https://en.wikipedia.org/wiki/Pyrantel?oldid=1366674848) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Abongwa_2016_pyrantel_current_response](drugs/drug_pyrantel/pd_Abongwa_2016_pyrantel_current_response.md) | Peak inward current response of Ode-UNC-29:Ode-UNC-63:Ode-UNC-38 nAChR to pyrantel, normalized to 100 μM acetylcholine response ← pyrantel · direct sigmoid Emax (Hill) effect | — | Abongwa M et al., Curiouser and Curiouser: The Macrocycli…, PloS one (2016) | [10.1371/journal.pone.0146854](https://doi.org/10.1371/journal.pone.0146854) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Easland_2023_hatching](drugs/drug_pyrantel/pd_Easland_2023_hatching.md) | egg hatching (normalised hatching counts) ← pyrantel pamoate · direct sigmoid Emax (Hill) effect | — | Easland E et al., Development of a hookworm egg hatching…, Parasites & vectors (2023) | [10.1186/s13071-023-05771-8](https://doi.org/10.1186/s13071-023-05771-8) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Marjanović_2021_contraction](drugs/drug_pyrantel/pd_Marjanovi_2021_contraction.md) | isometric contraction of A. suum somatic muscle flap ← pyrantel · direct sigmoid Emax (Hill) effect | — | Marjanović DS et al., Interaction of agonists of a different…, Journal of nematology 53 (2021) | [10.21307/jofnem-2021-022](https://doi.org/10.21307/jofnem-2021-022) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schärer_2023_Trichuris_muris_egg_hatching](drugs/drug_pyrantel/pd_Sch_rer_2023_Trichuris_muris_egg_hatching.md) | Trichuris muris egg hatching ← pyrantel pamoate · direct sigmoid Emax (Hill) effect | — | Schärer A et al., Trichuris muris egg-hatching assay for…, International journal for p… (2023) | [10.1016/j.ijpddr.2023.10.001](https://doi.org/10.1016/j.ijpddr.2023.10.001) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kumar_1987_response_of_Necator_americanus_adults_and_free_living_stages](drugs/drug_pyrantel/pd_Kumar_1987_response_of_Necator_americanus_adults_and_free_li.md) | response of Necator americanus (adults and free-living stages) ← pyrantel pamoate · categorical (graded) response model | — | Kumar S, The response of adult and free-living s…, Revista de biologia tropical (1987) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:54 | 0:03 | 0/0/0 | 5/0/0 | 0/0/0 | 3,691/165 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abongwa_2016 | irrelevant | 0 | 0 | In-vitro electrophysiology study of abamectin/derquantel antagonism on nematode nAChRs; pyrantel is only an agonist probe, no PK disposition parameters reported. |
| popPK | Bartos_2006 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of nicotinic receptor binding and channel gating, reporting no population pharmacokinetic parameters for pyrantel. |
| PGx | Bartos_2006 | not_relevant | 0 | 0 | The paper investigates the molecular determinants of drug selectivity on receptor subtypes, not the impact of human genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Easland_2023 | irrelevant | 0 | 0 | In vitro egg-hatching assay reporting EC50 values for pyrantel pamoate against hookworm eggs; no pharmacokinetic disposition parameters for pyrantel. |
| popPK | Ihler_1996 | irrelevant | 0 | 0 | This is an in vitro resistance detection study in nematodes reporting EC50/LC50 values for resistance testing, not a pharmacokinetic study of pyrantel disposition parameters (CL, V, t1/2). |
| PGx | Ihler_1996 | not_relevant | 0 | 0 | The study reports anthelmintic resistance in parasites, not the impact of human gene variants on pyrantel pharmacokinetics or pharmacodynamics. |
| popPK | Incani_2022 | irrelevant | 0 | 0 | Epidemiological study of Ascaris reinfection after pyrantel treatment; no PK parameters (CL, V, ka, half-life, model) for pyrantel are reported anywhere. |
| popPK | Kumar_1987 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring EC50 values for anthelmintic efficacy in hookworms, not a pharmacokinetic study reporting disposition parameters for pyrantel. |
| PGx | Kumar_1987 | not_relevant | 0 | 0 | The paper studies in vitro efficacy (EC50) of anthelmintics on hookworms, not pharmacogenomic effects on PK/PD parameters in humans. |
| popPK | Marjanović_2020 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on receptor interactions in nematodes and rats, not a pharmacokinetic study reporting disposition parameters for pyrantel. |
| PGx | Marjanović_2020 | not_relevant | 0 | 0 | The paper investigates the interaction between carvacrol and pyrantel in nematodes and rats, not the effect of a human gene variant on pyrantel pharmacokinetics or pharmacodynamics. |
| popPK | Marjanović_2021 | irrelevant | 0 | 0 | In vitro pharmacodynamic (contraction EC50) study in Ascaris muscle flaps, not a PK study of pyrantel disposition. |
| popPK | Molento_2018 | irrelevant | 0 | 0 | The paper reports in vitro effective concentrations (EC50) for anthelmintic efficacy, not pharmacokinetic disposition parameters. |
| PGx | Molento_2018 | not_relevant | 0 | 0 | The study evaluates in vitro drug efficacy against parasites and does not investigate the influence of human or animal genotypes on pharmacokinetics or pharmacodynamics. |
| popPK | Schärer_2023 | irrelevant | 0 | 0 | This is an in vitro mechanistic study characterizing anthelminthic drug potency (EC50) against parasite egg hatching, not a pharmacokinetic study reporting disposition parameters like clearance or volume for pyrantel. |
| PGx | Schärer_2023 | not_relevant | 0 | 0 | The study describes an in vitro egg-hatching assay to characterize drug potency against Trichuris muris but does not investigate human gene variants or their impact on pharmacokinetic/pharmacodynamic parameters. |
| popPK | Zhao_2017 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assay measuring anthelmintic efficacy (EC50), not a pharmacokinetic study reporting disposition parameters for pyrantel. |
| PGx | Zhao_2017 | not_relevant | 0 | 0 | The paper describes an in vitro assay for drug resistance in Ascaris suum and does not investigate human pharmacogenomics or host genetic variants affecting pyrantel PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrantel%5D&body=Drug%3A%20pyrantel%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyrantel/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
