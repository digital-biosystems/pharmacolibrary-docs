<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;aclarubicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aclarubicin_Liu2026_reference&quot;,&quot;label&quot;:&quot;Liu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aclarubicin/Aclarubicin_Liu2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# aclarubicin

- **generic name:** aclarubicin
- **ATC codes:** `L01DB04`
- **DrugBank:** [DB11617](https://go.drugbank.com/drugs/DB11617) · **PubChem:** [CID 451415](https://pubchem.ncbi.nlm.nih.gov/compound/451415)
- **molar mass:** 811.878 g/mol (C42H53NO15) — DrugBank
- **groups:** investigational

## About

Aclarubicin is an anthracycline antibiotic investigated as a cancer treatment, acting as a topoisomerase II inhibitor. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4674302](https://www.wikidata.org/wiki/Q4674302) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aclarubicin | parent | 811.878 | C42H53NO15 | DrugBank | [451415](https://pubchem.ncbi.nlm.nih.gov/compound/451415) | Geodakian_1987 |

## Start here

> **Liu_2026_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_aclarubicin/Aclarubicin_Liu2026_reference.md?tab=Simulation) · [record](drugs/drug_aclarubicin/Aclarubicin_Liu2026_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 2.22 | L/h | 0.037 L min À1 | rats | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Geodakian_1987_reference](drugs/drug_aclarubicin/Aclarubicin_Geodakian1987_reference.md) |
| CL | CL/F | 7.33 | L/h | 7.33 L/h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Liu_2026_reference](drugs/drug_aclarubicin/Aclarubicin_Liu2026_reference.md) |
| V | V/F | 181 | L | 181.0 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Liu_2026_reference](drugs/drug_aclarubicin/Aclarubicin_Liu2026_reference.md) |
| ka | kabs | 0.16 | 1/h | 0.16 /h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Liu_2026_reference](drugs/drug_aclarubicin/Aclarubicin_Liu2026_reference.md) |
| ka | kabs | 6 | 1/h | 6.0 h -1 | rats | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Geodakian_1987_reference](drugs/drug_aclarubicin/Aclarubicin_Geodakian1987_reference.md) |
| F | Fab | 0.35 |  | 35 per cent | rats | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Geodakian_1987_reference](drugs/drug_aclarubicin/Aclarubicin_Geodakian1987_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Geodakian_1987 · CL</text><circle cx="311.2" cy="30.0" r="4" fill="#ef6c00"><title>Geodakian_1987 · CL: 2.22 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Liu_2026 · CL/F</text><circle cx="492.8" cy="46.0" r="4" fill="#2e7d32"><title>Liu_2026 · CL/F: 7.33 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Liu_2026_reference](drugs/drug_aclarubicin/Aclarubicin_Liu2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Liu Z et al., Real-World Pharmacokinetic and Exposure…, Drug design, development an… (2026) | [10.2147/dddt.s563629](https://doi.org/10.2147/dddt.s563629) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Geodakian_1987_reference](drugs/drug_aclarubicin/Aclarubicin_Geodakian1987_reference.md) | — | 1-compartment (no model) | 3 | Geodakian SV et al., [Pharmacokinetic study of aclarubicin.…, Antibiotiki i meditsinskaia… (1987) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Gollapudi_2019_frequency_of_micronucleated_cells](drugs/drug_aclarubicin/pd_Gollapudi_2019_frequency_of_micronucleated_cells.md) | frequency of micronucleated cells ← aclarubicin · stimulation effect | — | Gollapudi P et al., Concentration-response studies of the c…, Mutation research. Genetic… (2019) | [10.1016/j.mrgentox.2019.05.006](https://doi.org/10.1016/j.mrgentox.2019.05.006) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Isoe_1992_ubiquitin_ATP_dependent_proteolytic_activity](drugs/drug_aclarubicin/pd_Isoe_1992_ubiquitin_ATP_dependent_proteolytic_activity.md) | ubiquitin-ATP-dependent proteolytic activity ← aclarubicin · inhibition effect | — | Isoe T et al., Inhibition of different steps of the ub…, Biochimica et biophysica ac… (1992) | [10.1016/0304-4165(92)90070-b](https://doi.org/10.1016/0304-4165(92)90070-b) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Marsh_1983_granulocyte_macrophage_colony_forming_cells](drugs/drug_aclarubicin/pd_Marsh_1983_granulocyte_macrophage_colony_forming_cells.md) | granulocyte-macrophage colony-forming cells ← aclacinomycin A · direct log-linear effect | — | Marsh JC et al., Sensitivity of bone marrow hematopoieti…, Cancer research (1983) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other organism</span> | [Rattaprasert_2022_PfDH_B](drugs/drug_aclarubicin/pd_Rattaprasert_2022_PfDH_B.md) | unwinding activity of PfDH-B ← aclarubicin · inhibition effect | — | Rattaprasert P et al., Inhibitory effects of anthracyclines on…, Malaria journal (2022) | [10.1186/s12936-022-04238-y](https://doi.org/10.1186/s12936-022-04238-y) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other organism</span> | [Suntornthiticharoen_2006_PfDH_A](drugs/drug_aclarubicin/pd_Suntornthiticharoen_2006_PfDH_A.md) | PfDH A activity ← aclarubicin · inhibition effect | — | Suntornthiticharoen P et al., Purification and characterization of a…, Parasitology 133(Pt 4):389–… (2006) | [10.1017/S0031182006000527](https://doi.org/10.1017/S0031182006000527) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Wang_2023_SARS_CoV_2_infection](drugs/drug_aclarubicin/pd_Wang_2023_SARS_CoV_2_infection.md) | SARS-CoV-2 infection ← aclarubicin · inhibition effect | — | Wang Z et al., Anthracyclines inhibit SARS-CoV-2 infec…, Virus research (2023) | [10.1016/j.virusres.2023.199164](https://doi.org/10.1016/j.virusres.2023.199164) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Komiyama_1983_DNA_polymerase_I](drugs/drug_aclarubicin/pd_Komiyama_1983_DNA_polymerase_I.md) | DNA polymerase I ← Aclacinomycin A · inhibition effect | — | Komiyama T et al., Interaction of new anthracycline antibi…, Biochimica et biophysica ac… (1983) | [10.1016/0167-4781(83)90124-0](https://doi.org/10.1016/0167-4781(83)90124-0) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Komiyama_1983_RNA_polymerase](drugs/drug_aclarubicin/pd_Komiyama_1983_RNA_polymerase.md) | RNA polymerase ← Aclacinomycin A · inhibition effect | — | Komiyama T et al., Interaction of new anthracycline antibi…, Biochimica et biophysica ac… (1983) | [10.1016/0167-4781(83)90124-0](https://doi.org/10.1016/0167-4781(83)90124-0) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Komiyama_1983_RT](drugs/drug_aclarubicin/pd_Komiyama_1983_RT.md) | Reverse transcriptase ← Aclacinomycin A · inhibition effect | — | Komiyama T et al., Interaction of new anthracycline antibi…, Biochimica et biophysica ac… (1983) | [10.1016/0167-4781(83)90124-0](https://doi.org/10.1016/0167-4781(83)90124-0) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Komiyama_1983_RT_2](drugs/drug_aclarubicin/pd_Komiyama_1983_RT_2.md) | Reverse transcriptase with poly(rA) x d(pT)10 as template ← aclacinomycin A · inhibition effect | — | Komiyama T et al., Interaction of new anthracycline antibi…, Biochimica et biophysica ac… (1983) | [10.1016/0167-4781(83)90124-0](https://doi.org/10.1016/0167-4781(83)90124-0) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aclarubicin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:18 | 34:10 | 2/0/0 | 6/1/0 | 0/0/0 | 639,497/88,086 | openai / gpt-6-luna | 21 | 6/7 | 20/1 | 0 |

## Coverage

- **PubMed hits:** 83 matched, 79 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Geodakian_1987.pdf` | Geodakian SV et al., [Pharmacokinetic study of aclarubicin.…, Antibiotiki i meditsinskaia… (1987) | popPK | 9 |  | [3480699](https://pubmed.ncbi.nlm.nih.gov/3480699) | The rat study reports a two-compartment model, half-lives of 16–21 hours, and bioavailability values. |
| `Karanes_1983.pdf` | Karanes C et al., Phase I trial of aclacinomycin-A. A cli…, Investigational new drugs (1983) | popPK | 9 | [10.1007/BF00172077](https://doi.org/10.1007/BF00172077) | [6590531](https://pubmed.ncbi.nlm.nih.gov/6590531) | Human plasma pharmacokinetics report a two-compartment disposition model and numeric half-lives. |

<sub>queue written 2026-10-06 15:54 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gaussem_2002 | irrelevant | 0 | 0 | The study reports pharmacokinetics of S 18326, not aclarubicin. |
| popPK | Kamp_2021 | irrelevant | 0 | 0 | This study reports ketamine pharmacodynamics, not aclarubicin pharmacokinetics. |
| popPK | Lammers_2017 | irrelevant | 0 | 0 | This human CYP-probe cocktail study reports pharmacokinetics for other drugs, not aclarubicin. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | Aclarubicin is only a co-administered drug; the reported PK parameters are for venetoclax. |
| popPK | Löffler_2025 | irrelevant | 0 | 0 | This perspective reports no aclarubicin pharmacokinetic parameters or measured disposition data. |
| popPK | Matthews_2024 | irrelevant | 0 | 0 | The study examines other drugs in human-derived cardiomyocytes and reports no aclarubicin pharmacokinetic parameters. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | This is an in-vitro anticancer-compound study and reports no aclarubicin pharmacokinetic parameters. |
| popPK | Megías-Vericat_2019 | irrelevant | 0 | 0 | Aclarubicin is only mentioned in passing, with no aclarubicin-specific pharmacokinetic parameters or numeric values reported. |
| popPK | Mohammed_2008 | irrelevant | 0 | 0 | This study reports warfarin pharmacokinetics, not aclarubicin. |
| popPK | Schwach_2024 | irrelevant | 0 | 0 | This in-vitro cardiotoxicity study reports no quantitative aclarubicin disposition parameters. |
| popPK | Simons_2022 | irrelevant | 0 | 0 | This paper reports pharmacodynamic results for S-ketamine in human volunteers, not pharmacokinetic parameters for aclarubicin. |
| popPK | Simons_2022_2 | irrelevant | 0 | 0 | The study reports quantitative population pharmacokinetics for S-ketamine and its metabolites, not aclarubicin. |
| popPK | Stamos_2025 | irrelevant | 0 | 0 | The paper studies ACBI1 crystallization and atropisomerism, not aclarubicin pharmacokinetics, and reports no aclarubicin disposition values. |
| PGx | Twentyman_1986 | not_relevant | 0 | 0 | No gene variant, genotype, or phenotype is reported; the study examines acquired drug resistance and verapamil effects in cell lines. |
| PGx | Yuan_2019 | not_relevant | 1 | 2 | DNMT3A R882 status is associated with remission after induction therapy that includes aclarubicin, but the paper reports no aclarubicin-specific PK or PD parameter. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baclarubicin%5D&body=Drug%3A%20aclarubicin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aclarubicin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 15:55 UTC</sub>
