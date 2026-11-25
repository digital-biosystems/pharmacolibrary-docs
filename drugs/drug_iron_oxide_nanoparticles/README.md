<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;iron oxide, nanoparticles&quot;}]"></div>

# iron oxide, nanoparticles

- **generic name:** iron oxide, nanoparticles
- **ATC codes:** `V08CB03`
- **DrugBank:** [DB11576](https://go.drugbank.com/drugs/DB11576) · **PubChem:** none
- **molar mass:** 159.687 g/mol (Fe2O3) — DrugBank
- **groups:** approved, investigational

## About

Iron oxide nanoparticles are superparamagnetic contrast media used for magnetic resonance imaging. Administration routes include topical and rectal application, with forms such as lotions, ointments, and creams. The drug is approved but also designated as investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q419170](https://www.wikidata.org/wiki/Q419170), [Wikipedia](https://en.wikipedia.org/wiki/Iron(III)_oxide?oldid=1385652731) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Na_2003_reference](drugs/drug_iron_oxide_nanoparticles/IronOxideNanoparticles_Na2003_reference.md) | — | 1-compartment (no model) | 0 | Na JB et al., Pharmacokinetic modeling of phagocytic…, Yonsei medical journal (2003) | [10.3349/ymj.2003.44.3.429](https://doi.org/10.3349/ymj.2003.44.3.429) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Bjørnerud_2002_1_T1](drugs/drug_iron_oxide_nanoparticles/pd_Bj_rnerud_2002_1_T1.md) | longitudinal relaxation rate ← iron oxide nanoparticle · direct linear effect | — | Bjørnerud A et al., Assessment of T1 and T2* effects in viv…, Magnetic resonance in medic… (2002) | [10.1002/mrm.10066](https://doi.org/10.1002/mrm.10066) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Bjørnerud_2002_1_T2](drugs/drug_iron_oxide_nanoparticles/pd_Bj_rnerud_2002_1_T2.md) | transverse relaxation rate ← iron oxide nanoparticle · direct linear effect | — | Bjørnerud A et al., Assessment of T1 and T2* effects in viv…, Magnetic resonance in medic… (2002) | [10.1002/mrm.10066](https://doi.org/10.1002/mrm.10066) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:39 | 0:05 | 0/1/0 | 2/0/0 | 0/0/0 | 4,177/177 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bjørnerud_2002 | irrelevant | 1 | 0 | The paper investigates the relaxometric properties (T1/T2 effects) of iron oxide nanoparticles as an MRI contrast agent rather than reporting pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Bjørnerud_2002 | not_relevant | 0 | 0 | The paper investigates the relationship between iron oxide nanoparticle concentration and MRI relaxation times (T1/T2*) in a pig model, but does not involve any gene variants, genotypes, or phenotypes (pharmacogenomics). |
| popPK | Bondarenko_2020 | irrelevant | 0 | 0 | This is an ecotoxicity study and reports no quantitative pharmacokinetic disposition parameters. |
| popPK | Gebara_2019 | irrelevant | 0 | 0 | The paper reports ecotoxicological endpoints (immobility, respiration, reproduction) in *Ceriodaphnia silvestrii*, not pharmacokinetic disposition parameters (CL, V, half-life) for iron oxide nanoparticles. |
| PGx | Gebara_2019 | not_relevant | 0 | 10 | The study focuses on the ecotoxicological effects of nanoparticles on a species (Ceriodaphnia silvestrii) and contains no information on human pharmacogenomics or PK/PD parameters. |
| popPK | Geilich_2017 | irrelevant | 0 | 0 | The study focuses on the in-vitro efficacy of iron oxide nanoparticles for biofilm eradication and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| PGx | Geilich_2017 | not_relevant | 0 | 0 | The paper reports on the synthesis and efficacy of iron oxide nanocarriers for antibiotic delivery, but does not investigate any genetic variants or pharmacogenomic effects on their pharmacokinetics or pharmacodynamics. |
| popPK | González-Andrés_2017 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment measuring immobilization and mortality in *Daphnia magna*, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.). |
| PGx | González-Andrés_2017 | not_relevant | 0 | 0 | The paper reports ecotoxicity of iron oxide nanoparticles in Daphnia magna, not a pharmacogenomic effect on human PK or PD parameters. |
| popPK | Ielacqua_2015 | irrelevant | 0 | 0 | SPIO nanoparticles are used as an imaging contrast agent, but no quantitative pharmacokinetic disposition parameters are reported. |
| popPK | Khurana_2012 | irrelevant | 0 | 0 | The study is an MRI imaging study using ferumoxytol as a diagnostic tracer to monitor macrophage migration, not a pharmacokinetic study reporting disposition parameters for the drug. |
| PGx | Khurana_2012 | not_relevant | 0 | 0 | The paper focuses on MR imaging of macrophage migration using ferumoxytol in a rat model and does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Kumar_2022 | irrelevant | 0 | 0 | The study is a materials science and environmental application paper focused on the antibacterial efficacy of nanoparticles in water, not a pharmacokinetic study in a biological host. |
| PGx | Kumar_2022 | not_relevant | 0 | 0 | The paper is an environmental science study on nanoparticle antibacterial activity in water and contains no pharmacogenomic or pharmacokinetic information. |
| popPK | Mashjoor_2019 | irrelevant | 0 | 0 | The paper is an ecotoxicological study on marine organisms and antibacterial activity, not a pharmacokinetic study, and reports no PK parameters. |
| PGx | Mashjoor_2019 | not_relevant | 0 | 0 | The paper studies the ecotoxicity and antibacterial activity of iron oxide nanoparticles synthesized via different routes, with no mention of pharmacogenomics, human genetics, or PK/PD parameters in a pharmacological context. |
| popPK | McWilliams_2017 | irrelevant | 0 | 0 | This is an in-vitro microwave-heating study and reports no pharmacokinetic disposition parameters. |
| popPK | Thomas_2018 | irrelevant | 0 | 0 | The study focuses on the preparation and mechanical characterization of Janus microspheres for targeted stem cell delivery, not the pharmacokinetics of iron oxide nanoparticles. |
| PGx | Thomas_2018 | not_relevant | 0 | 0 | The paper describes the physical fabrication and targeted delivery of nanoparticles for stem cells, not the pharmacogenomics of iron oxide nanoparticles. |
| popPK | Wang_2017 | irrelevant | 2 | 1 | The study is an ecotoxicology assessment in *Artemia salina* (brine shrimp) reporting acute toxicity (LC50/EC50) and uptake kinetics, not population pharmacokinetic parameters (CL, V, etc.) for a therapeutic or biological PK model. |
| PGx | Wang_2017 | not_relevant | 0 | 0 | The paper reports toxicity and uptake kinetics in Artemia salina without any pharmacogenomic analysis of genetic variants affecting PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biron_oxide_nanoparticles%5D&body=Drug%3A%20iron_oxide_nanoparticles%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iron_oxide_nanoparticles/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 19:01 UTC</sub>
