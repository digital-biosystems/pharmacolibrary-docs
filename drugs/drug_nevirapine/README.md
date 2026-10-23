<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;nevirapine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nevirapine_Mustafa2016_reference&quot;,&quot;label&quot;:&quot;Mustafa_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nevirapine/Nevirapine_Mustafa2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# nevirapine

- **generic name:** nevirapine
- **ATC codes:** `J05AG01`, `J05AR05`, `J05AR07`
- **DrugBank:** [DB00238](https://go.drugbank.com/drugs/DB00238) · **PubChem:** [CID 4463](https://pubchem.ncbi.nlm.nih.gov/compound/4463)
- **molar mass:** 266.2979 g/mol (C15H14N4O) — DrugBank
- **groups:** approved, investigational

## About

It is an approved medicine included on the WHO essential medicines list and remains authorised in the European Union, though one EU product has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q263713](https://www.wikidata.org/wiki/Q263713) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nevirapine | parent | 266.298 | C15H14N4O | DrugBank | [4463](https://pubchem.ncbi.nlm.nih.gov/compound/4463) | Chou_2010, Mustafa_2016, Sabo_2000, Wattanakul_2014 |

## Start here

> **Mustafa_2016_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> HIV-infected Malaysian patients, n = 112. [Run it in the simulator](drugs/drug_nevirapine/Nevirapine_Mustafa2016_reference.md?tab=Simulation) · [record](drugs/drug_nevirapine/Nevirapine_Mustafa2016_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 2.92 | L/h | 2.92 L/h | HIV-infected Malaysian patients | 112 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Mustafa_2016_reference](drugs/drug_nevirapine/Nevirapine_Mustafa2016_reference.md) |
| CL | CL/F | 2.51 | L/h | 2.51 l/h | Thai HIV-infected patients |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wattanakul_2014_reference](drugs/drug_nevirapine/Nevirapine_Wattanakul2014_reference.md) |
| CL | CL/F | 3.3 | L/h | 3.3 L/hour | HIV-1 infected adults with CD4+ &lt; 200 cells/mm3 on nucleoside therapy | 100 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Sabo_2000_reference](drugs/drug_nevirapine/Nevirapine_Sabo2000_reference.md) |
| V | V | 78.23 | L | 78.23 L | HIV-infected Malaysian patients | 112 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Mustafa_2016_reference](drugs/drug_nevirapine/Nevirapine_Mustafa2016_reference.md) |
| ka | kabs | 2.55 | 1/h | 2.55 /h | HIV-infected Malaysian patients | 112 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Mustafa_2016_reference](drugs/drug_nevirapine/Nevirapine_Mustafa2016_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="96" viewBox="0 0 560 96" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="74" stroke="#ddd"/><text x="190.0" y="88" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="74" stroke="#ddd"/><text x="540.0" y="88" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Mustafa_2016 · CL</text><circle cx="352.9" cy="30.0" r="4" fill="#ef6c00"><title>Mustafa_2016 · CL: 2.92 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wattanakul_2014 · CL/F</text><circle cx="329.9" cy="46.0" r="4" fill="#ef6c00"><title>Wattanakul_2014 · CL/F: 2.51 L/h</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Sabo_2000 · CL/F</text><circle cx="371.5" cy="62.0" r="4" fill="#ef6c00"><title>Sabo_2000 · CL/F: 3.3 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): F</sub> | [Mustafa_2016_reference](drugs/drug_nevirapine/Nevirapine_Mustafa2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Mustafa S et al., Population pharmacokinetics of nevirapi…, European journal of clinica… (2016) | [10.1007/s00228-016-2049-6](https://doi.org/10.1007/s00228-016-2049-6) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Sabo_2000_reference](drugs/drug_nevirapine/Nevirapine_Sabo2000_reference.md) | — | 1-compartment (no model) | 1 | Sabo JP et al., Pharmacokinetics of nevirapine and lami…, AAPS pharmSci (2000) | [10.1208/ps020101](https://doi.org/10.1208/ps020101) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Wattanakul_2014_reference](drugs/drug_nevirapine/Nevirapine_Wattanakul2014_reference.md) | — | 1-compartment (no model) | 1 | Wattanakul T et al., Population pharmacokinetics of nevirapi…, Antiviral therapy (2014) | [10.3851/IMP2741](https://doi.org/10.3851/IMP2741) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Chou_2010_reference](drugs/drug_nevirapine/Nevirapine_Chou2010_reference.md) | — | 1-compartment (no model) | 1 | Chou M et al., Population pharmacokinetic-pharmacogene…, Antimicrobial agents and ch… (2010) | [10.1128/AAC.00512-10](https://doi.org/10.1128/AAC.00512-10) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hecht_2015_SF](drugs/drug_nevirapine/pd_Hecht_2015_SF.md) | survival fraction in colony formation assay (BxPC-3) ← nevirapine · direct sigmoid Emax (Hill) effect | — | Hecht M et al., Efavirenz Has the Highest Anti-Prolifer…, PloS one (2015) | [10.1371/journal.pone.0130277](https://doi.org/10.1371/journal.pone.0130277) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hecht_2015_fraction_of_dead_cells_apoptosis_necrosis_Annexin_V_APC_7AAD_in_BxPC_3_pancreatic_cancer_cells](drugs/drug_nevirapine/pd_Hecht_2015_fraction_of_dead_cells_apoptosis_necrosis_Annexin.md) | fraction of dead cells (apoptosis/necrosis, Annexin-V-APC/7AAD) in BxPC-3 pancreatic cancer cells ← nevirapine · direct sigmoid Emax (Hill) effect | — | Hecht M et al., Efavirenz Has the Highest Anti-Prolifer…, PloS one (2015) | [10.1371/journal.pone.0130277](https://doi.org/10.1371/journal.pone.0130277) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hecht_2015_fraction_of_dead_cells_apoptosis_necrosis_Annexin_V_APC_7AAD_in_Panc_1_pancreatic_cancer_cells](drugs/drug_nevirapine/pd_Hecht_2015_fraction_of_dead_cells_apoptosis_necrosis_Annexin.md) | fraction of dead cells (apoptosis/necrosis, Annexin-V-APC/7AAD) in Panc-1 pancreatic cancer cells ← nevirapine · direct sigmoid Emax (Hill) effect | — | Hecht M et al., Efavirenz Has the Highest Anti-Prolifer…, PloS one (2015) | [10.1371/journal.pone.0130277](https://doi.org/10.1371/journal.pone.0130277) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Sripan_2015_MTCT](drugs/drug_nevirapine/pd_Sripan_2015_MTCT.md) | intra-partum HIV mother-to-child transmission ← nevirapine (perinatal single-dose NVP, binary covariate) · categorical (graded) response model | — | Sripan P et al., Modeling of In-Utero and Intra-Partum T…, PloS one (2015) | [10.1371/journal.pone.0126647](https://doi.org/10.1371/journal.pone.0126647) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nevirapine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2A6` substrate, `CYP2B6` inducer/substrate, `CYP2C9` inducer, `CYP2D6` inhibitor/substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLC22A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:37 | 9:24 | 3/1/0 | 2/0/0 | 0/0/0 | 419,311/36,008 | ollama / glm-5.3-flash | 6 | 0/6 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 153 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chou_2010.pdf` | Chou M et al., Population pharmacokinetic-pharmacogene…, Antimicrobial agents and ch… (2010) | popPK | 10 | [10.1128/AAC.00512-10](https://doi.org/10.1128/AAC.00512-10) | [20696882](https://pubmed.ncbi.nlm.nih.gov/20696882) | Population PK (nonmem) study of nevirapine in HIV patients with numeric apparent clearance values by genotype reported in the abstract; full model parameters (V, ka) likely in tables/supplement not shown. |
| `Cressey_2017.pdf` | Cressey TR et al., Assessment of Nevirapine Prophylactic a…, Journal of acquired immune… (2017) | popPK | 10 | [10.1097/QAI.0000000000001447](https://doi.org/10.1097/QAI.0000000000001447) | [28489732](https://pubmed.ncbi.nlm.nih.gov/28489732) | Population PK model of nevirapine in neonates is clearly the subject, but numeric parameter values (CL, V) are not shown in the abstract text. |
| `Mustafa_2016.pdf` | Mustafa S et al., Population pharmacokinetics of nevirapi…, European journal of clinica… (2016) | popPK | 10 | [10.1007/s00228-016-2049-6](https://doi.org/10.1007/s00228-016-2049-6) | [27025609](https://pubmed.ncbi.nlm.nih.gov/27025609) | Population PK model for nevirapine with numeric CL (2.92 L/h), ka (2.55/h), and V (78.23 L) reported directly in the abstract. |
| `Wattanakul_2014.pdf` | Wattanakul T et al., Population pharmacokinetics of nevirapi…, Antiviral therapy (2014) | popPK | 10 | [10.3851/IMP2741](https://doi.org/10.3851/IMP2741) | [24504545](https://pubmed.ncbi.nlm.nih.gov/24504545) | Population PK (NONMEM) of nevirapine in Thai HIV patients with CL/F = 2.51 L/h reported in abstract; other parameters (V, covariate effects) may be in tables not shown. |
| `Sabo_2000.pdf` | Sabo JP et al., Pharmacokinetics of nevirapine and lami…, AAPS pharmSci (2000) | popPK | 8 | [10.1208/ps020101](https://doi.org/10.1208/ps020101) | [11741217](https://pubmed.ncbi.nlm.nih.gov/11741217) | Population PK (nonlinear mixed-effects) of nevirapine in HIV patients with CL/F = 3.3 L/h (95% CI 2.9–3.7) reported directly; other parameters (V, ka) not given. |

<sub>queue written 2026-10-07 17:29 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2015 | irrelevant | 0 | 0 | Nevirapine is only used as a docking/validation reference; no PK parameters are reported. |
| popPK | Cressey_2017 | relevant | 10 | 4 | Population PK model of nevirapine in neonates is clearly the subject, but numeric parameter values (CL, V) are not shown in the abstract text. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | This is a review of lopinavir/ritonavir; nevirapine appears only as an interacting co-administered drug, with no nevirapine PK parameters reported. |
| popPK | Feng_2022 | irrelevant | 0 | 0 | This is a medicinal chemistry/antiviral potency study (EC50/IC50 in MT-4 cells) using nevirapine only as a comparator; no PK parameters (CL, V, half-life) for nevirapine are reported. |
| popPK | Fobofou_2023 | irrelevant | 0 | 0 | Natural product isolation study; nevirapine only appears as a comparator drug with no PK parameters. |
| popPK | Francis_2020 | irrelevant | 2 | 1 | This is a population-PK meta-analysis of lumefantrine; nevirapine is only a co-administered ART tested as a covariate (no significant effect), and no nevirapine PK parameters are reported. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | Nevirapine is only a comparator in anti-HIV activity assays; PK parameters (half-life, clearance, AUC) are for the novel compound R10L4, not nevirapine. |
| popPK | Hecht_2015 | irrelevant | 1 | 2 | In-vitro cytotoxicity (EC50) study of NNRTIs in cancer cell lines with patient blood levels reported, but no PK disposition parameters (CL, V, ka, half-life, or PK model) for nevirapine. |
| popPK | Hoglund_2015 | irrelevant | 2 | 3 | Nevirapine is only a co-administered interaction covariate; the population PK model and parameters (CL/F, Vc, Q, Vp) describe artemether/lumefantrine and metabolites, with only nevirapine's effect on their clearance/bioavailability quantified, not nevirapine's own disposition. |
| popPK | Liyanage_2022 | irrelevant | 0 | 0 | The population PK model and parameters (CL, V) are for maraviroc; nevirapine is only mentioned as concomitant therapy. |
| popPK | Mirochnick_1999 | irrelevant | 0 | 0 | This is a population PK study of zidovudine in infants; nevirapine appears only as a co-administered covariate with no nevirapine PK parameters reported. |
| popPK | Mora-Peris_2014 | irrelevant | 2 | 1 | Nevirapine is only the prior comparator drug; the PK parameters reported (concentrations, ratios) are for rilpivirine, with no nevirapine disposition parameters. |
| popPK | Pham_2022 | irrelevant | 0 | 0 | Nevirapine is only mentioned as a comparator ART group; the PK model and parameters are for rifapentine, not nevirapine. |
| popPK | Ribone_2012 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR study of novel NNRTIs; nevirapine is only a potency comparator with no PK parameters. |
| popPK | Sripan_2015 | irrelevant | 1 | 0 | This is an HIV transmission modeling study; nevirapine appears only as a binary covariate (OR for transmission), with no PK parameters (CL, V, ka) for NVP reported. |
| popPK | Zhu_1996 | irrelevant | 0 | 0 | In-vitro antiviral drug-combination efficacy study (EC50/m values), not a PK study reporting disposition parameters for nevirapine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnevirapine%5D&body=Drug%3A%20nevirapine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nevirapine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 17:29 UTC</sub>
