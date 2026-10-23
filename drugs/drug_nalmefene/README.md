<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;nalmefene&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nalmefene_Kyhl2016_reference&quot;,&quot;label&quot;:&quot;Kyhl_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalmefene_Rosen2000_reference&quot;,&quot;label&quot;:&quot;Rosen_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalmefene/Nalmefene_Rosen2000_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nalmefene

- **generic name:** nalmefene
- **ATC codes:** `N07BB05`
- **DrugBank:** [DB06230](https://go.drugbank.com/drugs/DB06230) · **PubChem:** not captured
- **molar mass:** 339.435 g/mol (C21H25NO3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Nalmefene is an opioid antagonist used to treat alcohol dependence and has been studied for opiate dependence. It is authorised in the European Union as a medicine for alcohol-related disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4353252](https://www.wikidata.org/wiki/Q4353252) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nalmefene | parent | 339.435 | C21H25NO3 | DrugBank | — | Kyhl_2016, Rosen_2000 |

## Start here

> **Kyhl_2016_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> healthy subjects, n = 243. [Run it in the simulator](drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md?tab=Simulation) · [record](drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 51.03 ‡ | L/h | 0.729 L/kg/hr | children aged 2-12 years undergoing cardiothoracic surgery | 34 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rosen_2000_reference](drugs/drug_nalmefene/Nalmefene_Rosen2000_reference.md) |
| CL | CL | 60.4 | L/h | 60.4 l h(-1) | healthy subjects | 243 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kyhl_2016_reference](drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md) |
| V | V | 266 | L | 266 l | healthy subjects | 243 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kyhl_2016_reference](drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md) |
| F | Fab | 0.41 |  | 41 % | healthy subjects | 243 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kyhl_2016_reference](drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Rosen_2000 · CL ·/kg</text><circle cx="437.7" cy="30.0" r="4" fill="#2e7d32"><title>Rosen_2000 · CL ·/kg: 51.03 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Kyhl_2016 · CL</text><circle cx="463.4" cy="46.0" r="4" fill="#2e7d32"><title>Kyhl_2016 · CL: 60.4 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kyhl_2016_reference](drugs/drug_nalmefene/Nalmefene_Kyhl2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kyhl LE et al., Population pharmacokinetics of nalmefen…, British journal of clinical… (2016) | [10.1111/bcp.12805](https://doi.org/10.1111/bcp.12805) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rosen_2000_reference](drugs/drug_nalmefene/Nalmefene_Rosen2000_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Rosen DA et al., Nalmefene to prevent epidural narcotic…, Pharmacotherapy (2000) | [10.1592/phco.20.9.745.35207](https://doi.org/10.1592/phco.20.9.745.35207) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Barnett_2020_BRET](drugs/drug_nalmefene/pd_Barnett_2020_BRET.md) | BRET signal (G protein activation at kappa opioid receptor) ← nalmefene · direct sigmoid Emax (Hill) effect | — | Barnett ME et al., Unique Pharmacological Properties of th…, Molecular pharmacology (2020) | [10.1124/mol.120.119404](https://doi.org/10.1124/mol.120.119404) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Endt_2025_cAMP](drugs/drug_nalmefene/pd_Endt_2025_cAMP.md) | Reversal of opioid-induced inhibition of FSK-stimulated cAMP accumulation (cAMP accumulation as % of FSK-induced level) ← nalmefene · direct sigmoid Emax (Hill) effect | — | Endt F et al., Carfentanil stabilizes µ opioid recepto…, Archives of toxicology (2025) | [10.1007/s00204-025-04048-6](https://doi.org/10.1007/s00204-025-04048-6) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Veng-Pedersen_1995_tcPCO2](drugs/drug_nalmefene/pd_Veng_Pedersen_1995_tcPCO2.md) | transcutaneous pCO2 (respiratory depression) ← nalmefene · delayed effect through an effect compartment | — | Veng-Pedersen P et al., Duration of opioid antagonism by nalmef…, Journal of pharmaceutical s… (1995) | [10.1002/jps.2600840913](https://doi.org/10.1002/jps.2600840913) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nalmefene).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A3` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRK1 (partial agonist), OPRM1 (target), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:38 | 1:57 | 2/0/0 | 3/0/0 | 0/0/0 | 97,997/6,975 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kyhl_2016.pdf` | Kyhl LE et al., Population pharmacokinetics of nalmefen…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12805](https://doi.org/10.1111/bcp.12805) | [26483076](https://pubmed.ncbi.nlm.nih.gov/26483076) | Population PK model of nalmefene in humans with CL 60.4 l/h and Vc 266 l reported in abstract; full parameter set likely in tables. |
| `Rosen_2000.pdf` | Rosen DA et al., Nalmefene to prevent epidural narcotic…, Pharmacotherapy (2000) | popPK | 10 | [10.1592/phco.20.9.745.35207](https://doi.org/10.1592/phco.20.9.745.35207) | [10907964](https://pubmed.ncbi.nlm.nih.gov/10907964) | Original PK study in children with full numeric two-compartment parameters (t½α, t½β, CL, Vss) reported directly in the abstract. |
| `Veng-Pedersen_1995.pdf` | Veng-Pedersen P et al., Duration of opioid antagonism by nalmef…, Journal of pharmaceutical s… (1995) | popPK | 6 | [10.1002/jps.2600840913](https://doi.org/10.1002/jps.2600840913) | [8537889](https://pubmed.ncbi.nlm.nih.gov/8537889) | PK/PD study of nalmefene in dogs with noncompartmental analysis, but no numeric parameter values are given in the evidence. |

<sub>queue written 2026-10-07T03:37:16.342983+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barnett_2020 | irrelevant | 0 | 0 | In-vitro BRET cell signaling pharmacology study; nalmefene is only a test ligand with no PK disposition parameters. |
| popPK | Endt_2025 | irrelevant | 0 | 0 | In-vitro pharmacodynamics study of carfentanil in HEK293 cells; nalmefene is only an antagonist comparator with IC50 values, no PK disposition parameters. |
| popPK | Grant_2006 | irrelevant | 0 | 0 | Clinical efficacy trial of nalmefene in pathological gambling with no pharmacokinetic parameters reported. |
| popPK | Hashimoto_2025 | irrelevant | 0 | 0 | Pharmacogenetic efficacy study of nalmefene with no PK parameters (CL, V, half-life, or PK model) reported. |
| popPK | Maillet_2015 | irrelevant | 0 | 0 | Nalmefene is only mentioned as a comparator ligand in a pharmacology study of noribogaine; no PK parameters for nalmefene are reported. |
| popPK | Veng-Pedersen_1995 | relevant | 6 | 3 | PK/PD study of nalmefene in dogs with noncompartmental analysis, but no numeric parameter values are given in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 03:37 UTC</sub>
