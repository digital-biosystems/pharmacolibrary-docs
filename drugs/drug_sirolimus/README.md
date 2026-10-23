<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;sirolimus&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sirolimus_de2023_reference&quot;,&quot;label&quot;:&quot;de_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sirolimus/Sirolimus_de2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sirolimus_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sirolimus/Sirolimus_Li2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# sirolimus

- **generic name:** sirolimus
- **ATC codes:** `L01EG04`, `L04AH01`, `S01XA23`
- **DrugBank:** [DB00877](https://go.drugbank.com/drugs/DB00877) · **PubChem:** [CID 5284616](https://pubchem.ncbi.nlm.nih.gov/compound/5284616)
- **molar mass:** 914.187 g/mol (C51H79NO13) — DrugBank
- **groups:** approved, investigational

## About

Sirolimus is an immunosuppressive medicine used to prevent rejection of transplanted organs, and is also used in conditions such as renal cell carcinoma, graft-versus-host disease, lymphangioleiomyomatosis, and tuberous sclerosis-related angiofibroma. It is widely used and authorised in the European Union, with products approved for graft rejection, kidney transplantation, angiofibroma, tuberous sclerosis, and uveitis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q32089](https://www.wikidata.org/wiki/Q32089) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sirolimus | parent | 914.187 | C51H79NO13 | DrugBank | [5284616](https://pubchem.ncbi.nlm.nih.gov/compound/5284616) | Ferron_1997, Lee_2015, Li_2022, de_2023 |

## Start here

> **de_2023_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> healthy adult horses, n = 8. [Run it in the simulator](drugs/drug_sirolimus/Sirolimus_de2023_reference.md?tab=Simulation) · [record](drugs/drug_sirolimus/Sirolimus_de2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.042 | L/h | 0.042 L/hour | neonates who underwent sirolimus-eluting stent implantation in the arterial duct | 9 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Lee_2015_reference](drugs/drug_sirolimus/Sirolimus_Lee2015_reference.md) |
| CL | CL | 1.512 ‡ | L/h | 0.36 mL/kg/min | healthy adult horses | 8 | horse | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [de_2023_reference](drugs/drug_sirolimus/Sirolimus_de2023_reference.md) |
| CL | CL/F | 2.79 | L/h | 2.79 L/h | children with tuberous sclerosis complex | 64 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2022_reference](drugs/drug_sirolimus/Sirolimus_Li2022_reference.md) |
| CL | CL/F | 8.9 | L/h | 8.9 L/hr | kidney transplant patients | 36 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ferron_1997_reference](drugs/drug_sirolimus/Sirolimus_Ferron1997_reference.md) |
| V | V | 25.98 ‡ | L | 371.2 mL/kg | healthy adult horses | 8 | horse | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [de_2023_reference](drugs/drug_sirolimus/Sirolimus_de2023_reference.md) |
| V | V/F | 69.48 | L | 69.48 L | children with tuberous sclerosis complex | 64 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2022_reference](drugs/drug_sirolimus/Sirolimus_Li2022_reference.md) |
| ka | kabs | 2.77 | 1/h | 2.77 hr-1 | kidney transplant patients | 36 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ferron_1997_reference](drugs/drug_sirolimus/Sirolimus_Ferron1997_reference.md) |
| t½ | t1/2z | 63 | h | 63 hours | kidney transplant patients | 36 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ferron_1997_reference](drugs/drug_sirolimus/Sirolimus_Ferron1997_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="112" viewBox="0 0 560 112" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="90" stroke="#ddd"/><text x="190.0" y="104" font-size="10" text-anchor="middle">0.01</text><line x1="306.7" y1="18" x2="306.7" y2="90" stroke="#ddd"/><text x="306.7" y="104" font-size="10" text-anchor="middle">0.1</text><line x1="423.3" y1="18" x2="423.3" y2="90" stroke="#ddd"/><text x="423.3" y="104" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="90" stroke="#ddd"/><text x="540.0" y="104" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Lee_2015 · CL</text><circle cx="262.7" cy="30.0" r="4" fill="#ef6c00"><title>Lee_2015 · CL: 0.042 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">de_2023 · CL ·/kg</text><circle cx="444.3" cy="46.0" r="4" fill="#2e7d32"><title>de_2023 · CL ·/kg: 1.512 L/h</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Li_2022 · CL/F</text><circle cx="475.3" cy="62.0" r="4" fill="#ef6c00"><title>Li_2022 · CL/F: 2.79 L/h</title></circle><text x="184" y="82.0" font-size="11" text-anchor="end">Ferron_1997 · CL/F</text><circle cx="534.1" cy="78.0" r="4" fill="#ef6c00"><title>Ferron_1997 · CL/F: 8.9 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">de_2023 · V ·/kg</text><circle cx="335.1" cy="30.0" r="4" fill="#2e7d32"><title>de_2023 · V ·/kg: 25.98 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Li_2022 · V/F</text><circle cx="484.7" cy="46.0" r="4" fill="#ef6c00"><title>Li_2022 · V/F: 69.48 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [de_2023_reference](drugs/drug_sirolimus/Sirolimus_de2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | de Tonnerre DJ et al., Effect of sirolimus on insulin dynamics…, Journal of veterinary inter… (2023) | [10.1111/jvim.16650](https://doi.org/10.1111/jvim.16650) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Ferron_1997_reference](drugs/drug_sirolimus/Sirolimus_Ferron1997_reference.md) | — | 1-compartment (no model) | 4 | Ferron GM et al., Population pharmacokinetics of sirolimu…, Clinical pharmacology and t… (1997) | [10.1016/S0009-9236(97)90192-2](https://doi.org/10.1016/S0009-9236(97)90192-2) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Lee_2015_reference](drugs/drug_sirolimus/Sirolimus_Lee2015_reference.md) | — | 1-compartment (no model) | 2 | Lee KJ et al., Pharmacokinetics of sirolimus-eluting s…, Circulation. Cardiovascular… (2015) | [10.1161/CIRCINTERVENTIONS.114.002233](https://doi.org/10.1161/CIRCINTERVENTIONS.114.002233) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Li_2022_reference](drugs/drug_sirolimus/Sirolimus_Li2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Li S et al., Population Pharmacokinetic Analysis and…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2033](https://doi.org/10.1002/jcph.2033) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Methaneethorn_2022_reference](drugs/drug_sirolimus/Sirolimus_Methaneethorn2022_reference.md) | — | 1-compartment (no model) | 0 | Methaneethorn J et al., Predictors of sirolimus pharmacokinetic…, Journal of population thera… (2022) | [10.47750/jptcp.2022.940](https://doi.org/10.47750/jptcp.2022.940) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Giménez_2023_CMV](drugs/drug_sirolimus/pd_Gim_nez_2023_CMV.md) | CMV replication inhibition ← sirolimus · inhibition effect | — | Giménez E et al., In vitro assessment of the combined eff…, Revista espanola de quimiot… (2023) | [10.37201/req/016.2023](https://doi.org/10.37201/req/016.2023) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pasquereau_2021_HCoV_229E](drugs/drug_sirolimus/pd_Pasquereau_2021_HCoV_229E.md) | HCoV-229E replication ← rapamycin · direct sigmoid Emax (Hill) effect | — | Pasquereau S et al., Resveratrol Inhibits HCoV-229E and SARS…, Viruses (2021) | [10.3390/v13020354](https://doi.org/10.3390/v13020354) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pasquereau_2021_cell_viability](drugs/drug_sirolimus/pd_Pasquereau_2021_cell_viability.md) | cell viability ← rapamycin · direct sigmoid Emax (Hill) effect | — | Pasquereau S et al., Resveratrol Inhibits HCoV-229E and SARS…, Viruses (2021) | [10.3390/v13020354](https://doi.org/10.3390/v13020354) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zimmerman_2004_acute_rejection](drugs/drug_sirolimus/pd_Zimmerman_2004_acute_rejection.md) | acute rejection ← sirolimus · categorical (graded) response model | — | Zimmerman JJ, Exposure-response relationships and dru…, The AAPS journal (2004) | [10.1208/aapsj060428](https://doi.org/10.1208/aapsj060428) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jiang_2021_mycelial_growth](drugs/drug_sirolimus/pd_Jiang_2021_mycelial_growth.md) | mycelial growth ← rapamycin · inhibition effect | — | Jiang H et al., Antifungal activity of rapamycin on Bot…, Pest management science (2021) | [10.1002/ps.6035](https://doi.org/10.1002/ps.6035) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jiang_2021_spore_germination](drugs/drug_sirolimus/pd_Jiang_2021_spore_germination.md) | spore germination ← rapamycin · inhibition effect | — | Jiang H et al., Antifungal activity of rapamycin on Bot…, Pest management science (2021) | [10.1002/ps.6035](https://doi.org/10.1002/ps.6035) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:06 | 11:11 | 1/1/3 | 2/1/1 | 0/0/0 | 275,301/51,955 | openai / gpt-6-luna | 8 | 7/1 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 167 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 1  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ferron_1997.pdf` | Ferron GM et al., Population pharmacokinetics of sirolimu…, Clinical pharmacology and t… (1997) | popPK | 10 | [10.1016/S0009-9236(97)90192-2](https://doi.org/10.1016/S0009-9236(97)90192-2) | [9129559](https://pubmed.ncbi.nlm.nih.gov/9129559) | The human population-PK study reports numeric sirolimus clearance, half-life, absorption lag-time, and absorption rate in the evidence. |
| `Lee_2015.pdf` | Lee KJ et al., Pharmacokinetics of sirolimus-eluting s…, Circulation. Cardiovascular… (2015) | popPK | 10 | [10.1161/CIRCINTERVENTIONS.114.002233](https://doi.org/10.1161/CIRCINTERVENTIONS.114.002233) | [25940522](https://pubmed.ncbi.nlm.nih.gov/25940522) | Neonatal human sirolimus pharmacokinetics are quantitatively reported, including clearance from noncompartmental and population models. |
| `Li_2022.pdf` | Li S et al., Population Pharmacokinetic Analysis and…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2033](https://doi.org/10.1002/jcph.2033) | [35094415](https://pubmed.ncbi.nlm.nih.gov/35094415) | The study reports numeric population-PK estimates for sirolimus clearance and volume in children. |

<sub>queue written 2026-10-07T06:57:07.196512+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergmann_2012 | irrelevant | 0 | 0 | This review discusses prednisolone and mentions sirolimus only in passing, with no sirolimus disposition values. |
| popPK | Boland_2017 | irrelevant | 0 | 0 | This is a review of pancreatic beta-cell biology and reports no quantitative sirolimus pharmacokinetic parameters. |
| popPK | Cai_2022 | irrelevant | 0 | 0 | The study reports Ginkgolide B exposure in rats, not sirolimus pharmacokinetics. |
| popPK | Candela-Boix_2021 | irrelevant | 2 | 0 | This is a systematic review and provides no numeric sirolimus disposition parameters in the supplied evidence. |
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | This radioprotection study does not report sirolimus disposition parameters or a sirolimus PK model. |
| popPK | Ferron_1998 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| popPK | Giménez_2023 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study; it reports sirolimus EC50 values, not pharmacokinetic disposition parameters. |
| popPK | Golubovic_2016 | irrelevant | 1 | 0 | This is a review of population-PK models in adult kidney transplant patients and provides no numeric sirolimus parameter values. |
| popPK | Jiang_2021 | irrelevant | 0 | 0 | This is an antifungal and plant disease-control study, not a sirolimus pharmacokinetic study. |
| popPK | Kahan_2002 | irrelevant | 1 | 0 | This is a review and provides no numeric sirolimus disposition parameters. |
| popPK | Pasquereau_2021 | irrelevant | 0 | 0 | Sirolimus (rapamycin) is tested only for in-vitro antiviral activity and no disposition parameters are reported. |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | Rapamycin (sirolimus) is tested for radioprotection, but no sirolimus pharmacokinetic parameters or values are reported. |
| popPK | Shihab_2014 | irrelevant | 1 | 1 | This review gives therapeutic trough ranges but no original quantitative disposition parameters for sirolimus. |
| popPK | Xu_2023 | irrelevant | 0 | 0 | This clinical outcomes study reports sirolimus treatment associations but no pharmacokinetic disposition parameters. |
| popPK | Zimmerman_2004 | irrelevant | 1 | 0 | This review reports exposure-response and drug-interaction findings but no quantitative sirolimus disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 06:57 UTC</sub>
