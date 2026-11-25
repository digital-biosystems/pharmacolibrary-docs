<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;nalmefene&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nalmefene_Kyhl2016_reference&quot;,&quot;label&quot;:&quot;Kyhl_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalmefene_Rosen2000_reference&quot;,&quot;label&quot;:&quot;Rosen_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalmefene/Nalmefene_Rosen2000_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# nalmefene

- **generic name:** nalmefene
- **ATC codes:** `N07BB05`
- **DrugBank:** [DB06230](https://go.drugbank.com/drugs/DB06230) · **PubChem:** none
- **molar mass:** 339.435 g/mol (C21H25NO3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Nalmefene is an opioid antagonist used to treat opioid overdose and alcohol dependence. It is given by mouth, injection, or nasal administration, and is well absorbed orally. The drug is authorised in the European Union and available as a generic medication.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q4353252](https://www.wikidata.org/wiki/Q4353252), [Wikipedia](https://en.wikipedia.org/wiki/Nalmefene?oldid=1368650312) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nalmefene | parent | 339.435 | C21H25NO3 | DrugBank | — | Kyhl_2016, Rosen_2000 |

## Start here

> **Kyhl_2016_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> healthy subjects. [Run it in the simulator](drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md?tab=Simulation) · [record](drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Rosen_2000 · CL ·/kg</text><circle cx="437.7" cy="30.0" r="4" fill="#78909c"><title>Rosen_2000 · CL ·/kg: 51.03 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Kyhl_2016 · CL</text><circle cx="463.4" cy="46.0" r="4" fill="#78909c"><title>Kyhl_2016 · CL: 60.4 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Kyhl_2016_reference](drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kyhl LE et al., Population pharmacokinetics of nalmefen…, British journal of clinical… (2016) | [10.1111/bcp.12805](https://doi.org/10.1111/bcp.12805) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Rosen_2000_reference](drugs/drug_nalmefene/Nalmefene_Rosen2000_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Rosen DA et al., Nalmefene to prevent epidural narcotic…, Pharmacotherapy (2000) | [10.1592/phco.20.9.745.35207](https://doi.org/10.1592/phco.20.9.745.35207) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Endt_2025_cAMP](drugs/drug_nalmefene/pd_Endt_2025_cAMP.md) | Reversal of opioid-induced inhibition of FSK-stimulated cAMP accumulation (cAMP accumulation as % of FSK-induced level) ← nalmefene · direct sigmoid Emax (Hill) effect | — | Endt F et al., Carfentanil stabilizes µ opioid recepto…, Archives of toxicology (2025) | [10.1007/s00204-025-04048-6](https://doi.org/10.1007/s00204-025-04048-6) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kyhl_2016_MOR_occupancy](drugs/drug_nalmefene/pd_Kyhl_2016_MOR_occupancy.md) | μ-opioid receptor occupancy ← nalmefene · direct Emax (saturable) effect | — | Kyhl LE et al., Population pharmacokinetics of nalmefen…, British journal of clinical… (2016) | [10.1111/bcp.12805](https://doi.org/10.1111/bcp.12805) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Veng-Pedersen_1995_respiratory_depression](drugs/drug_nalmefene/pd_Veng_Pedersen_1995_respiratory_depression.md) | respiratory depression ← nalmefene · inhibition effect | — | Veng-Pedersen P et al., Duration of opioid antagonism by nalmef…, Journal of pharmaceutical s… (1995) | [10.1002/jps.2600840913](https://doi.org/10.1002/jps.2600840913) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Veng-Pedersen_1995_respiratory_depression_2](drugs/drug_nalmefene/pd_Veng_Pedersen_1995_respiratory_depression_2.md) | respiratory depression ← nalmefene · delayed effect through transit (transduction) compartments | — | Veng-Pedersen P et al., Duration of opioid antagonism by nalmef…, Journal of pharmaceutical s… (1995) | [10.1002/jps.2600840913](https://doi.org/10.1002/jps.2600840913) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:24 | 0:21 | 2/0/0 | 4/0/0 | 0/0/0 | 6,064/1,735 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barnett_2020 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study focusing on G-protein coupling and receptor signaling, not a pharmacokinetic study, and nalmefene is used only as a reference ligand. |
| PGx | Barnett_2020 | not_relevant | 0 | 0 | The paper investigates how G protein subunits affect nalmefene's pharmacodynamics at the kappa opioid receptor, but it does not report pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| popPK | Endt_2025 | irrelevant | 0 | 0 | In-vitro pharmacodynamics study of carfentanil in HEK293 cells; nalmefene is only an antagonist comparator with IC50 values, no PK disposition parameters. |
| popPK | Grant_2006 | irrelevant | 0 | 0 | This is a clinical efficacy study for pathological gambling, not a pharmacokinetic study, and no disposition parameters are reported. |
| PGx | Grant_2006 | not_relevant | 0 | 0 | The paper reports clinical efficacy in pathological gambling but contains no pharmacogenomic analysis or genotype-specific PK/PD data. |
| popPK | Hashimoto_2025 | irrelevant | 0 | 0 | The study is a pharmacogenetic analysis of treatment efficacy (drinking outcomes) and contains no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Hashimoto_2025 | not_relevant | 2 | 8 | The study reports a pharmacogenomic effect on clinical outcomes (heavy drinking days, alcohol consumption) rather than pharmacokinetic (PK) or direct pharmacodynamic (PD) parameters of the drug nalmefene itself. |
| PGx | Kyhl_2016 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics and PK/PD modeling for nalmefene but does not report any analysis of gene variants, genotypes, or pharmacogenomic effects on PK or PD parameters. |
| popPK | Maillet_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and receptor binding of noribogaine, a metabolite of ibogaine, and does not report quantitative pharmacokinetic parameters for nalmefene. |
| PGx | Maillet_2015 | not_relevant | 0 | 0 | The paper characterizes the receptor pharmacology of noribogaine and does not report any pharmacogenomic effects on nalmefene PK or PD parameters. |
| PGx | Rosen_2000 | not_relevant | 0 | 0 | The study reports standard pediatric pharmacokinetics for nalmefene but does not assess any gene variants or pharmacogenomic factors. |
| popPK | Veng-Pedersen_1995 | irrelevant | 2 | 0 | The study reports PK/PD analysis but the specific numeric disposition parameters (CL, V, t1/2) are not present in the provided abstract/evidence text. |
| PGx | Veng-Pedersen_1995 | not_relevant | 0 | 0 | The study compares PK/PD profiles in animals but does not investigate genetic variants or pharmacogenomics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnalmefene%5D&body=Drug%3A%20nalmefene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nalmefene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:23 UTC</sub>
