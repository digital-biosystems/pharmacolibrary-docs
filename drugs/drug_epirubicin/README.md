<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;epirubicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Epirubicin_Robert1994_reference&quot;,&quot;label&quot;:&quot;Robert_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_epirubicin/Epirubicin_Robert1994_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# epirubicin

- **generic name:** epirubicin
- **ATC codes:** `L01DB03`
- **DrugBank:** [DB00445](https://go.drugbank.com/drugs/DB00445) · **PubChem:** [CID 41867](https://pubchem.ncbi.nlm.nih.gov/compound/41867)
- **molar mass:** 543.5193 g/mol (C27H29NO11) — DrugBank
- **groups:** approved, investigational

## About

Epirubicin is an anthracycline antibiotic used to treat breast cancer, gastric adenocarcinoma, and invasive ductal carcinoma. It is administered via intravenous injection or intravesical instillation. It is widely used in chemotherapy regimens and is marketed under various brand names in the US and elsewhere.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q425122](https://www.wikidata.org/wiki/Q425122), [Wikipedia](https://en.wikipedia.org/wiki/Epirubicin?oldid=1384675075) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| epirubicin | parent | 543.519 | C27H29NO11 | DrugBank | [41867](https://pubchem.ncbi.nlm.nih.gov/compound/41867) | Danesi_2002, Robert_1994, Tjuljandin_1990, Wade_1992 |
| epirubicinol | metabolite | 545.541 | C27H31NO11 | PubChem | [127118](https://pubchem.ncbi.nlm.nih.gov/compound/127118) | Danesi_2002 |

## Start here

> **Robert_1994_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> adults with cancer. [Run it in the simulator](drugs/drug_epirubicin/Epirubicin_Robert1994_reference.md?tab=Simulation) · [record](drugs/drug_epirubicin/Epirubicin_Robert1994_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Robert_1994 · CL</text><circle cx="505.3" cy="30.0" r="4" fill="#78909c"><title>Robert_1994 · CL: 79.58 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wade_1992 · CL</text><circle cx="532.2" cy="46.0" r="4" fill="#ef6c00"><title>Wade_1992 · CL: 95 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Robert_1994_reference](drugs/drug_epirubicin/Epirubicin_Robert1994_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Robert J, Clinical pharmacokinetics of epirubicin, Clinical pharmacokinetics (1994) | [10.2165/00003088-199426060-00002](https://doi.org/10.2165/00003088-199426060-00002) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Tjuljandin_1990_reference](drugs/drug_epirubicin/Epirubicin_Tjuljandin1990_reference.md) | — | 1-compartment (no model) | 4 | Tjuljandin SA et al., Pharmacokinetics and toxicity of two sc…, Cancer research (1990) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Wade_1992_reference](drugs/drug_epirubicin/Epirubicin_Wade1992_reference.md) | — | 1-compartment (no model) | 1 | Wade JR et al., Variability in the pharmacokinetics of…, Cancer chemotherapy and pha… (1992) | [10.1007/BF00686009](https://doi.org/10.1007/BF00686009) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Danesi_2002_reference](drugs/drug_epirubicin/Epirubicin_Danesi2002_reference.md) | — | parent + metabolite (no model) | 4 | Danesi R et al., Pharmacokinetics and pharmacodynamics o…, British journal of clinical… (2002) | [10.1046/j.1365-2125.2002.01579.x](https://doi.org/10.1046/j.1365-2125.2002.01579.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Janssen_2021_reference](drugs/drug_epirubicin/Epirubicin_Janssen2021_reference.md) | — | 1-compartment (no model) | 0 | Janssen JM et al., Population Pharmacokinetics of Docetaxe…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00961-4](https://doi.org/10.1007/s40262-020-00961-4) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Janssen_2023_reference](drugs/drug_epirubicin/Epirubicin_Janssen2023_reference.md) | — | 1-compartment (no model) | 0 | Janssen JM et al., Semi-physiological Enriched Population…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01263-1](https://doi.org/10.1007/s40262-023-01263-1) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ralph_2003_reference](drugs/drug_epirubicin/Epirubicin_Ralph2003_reference.md) | — | 1-compartment (no model) | 0 | Ralph LD et al., A population model of epirubicin pharma…, Cancer chemotherapy and pha… (2003) | [10.1007/s00280-003-0608-x](https://doi.org/10.1007/s00280-003-0608-x) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Sandström_1999_reference](drugs/drug_epirubicin/Epirubicin_Sandstrm1999_reference.md) | — | 1-compartment (no model) | 0 | Sandström M et al., The pharmacokinetics of epirubicin and…, Cancer chemotherapy and pha… (1999) | [10.1007/s002800051120](https://doi.org/10.1007/s002800051120) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bozza_2021_CI](drugs/drug_epirubicin/pd_Bozza_2021_CI.md) | cellular index ← epirubicin · direct sigmoid Emax (Hill) effect | — | Bozza WP et al., Anthracycline-Induced Cardiotoxicity: M…, The AAPS journal (2021) | [10.1208/s12248-021-00576-y](https://doi.org/10.1208/s12248-021-00576-y) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tavener_2021_cell_viability](drugs/drug_epirubicin/pd_Tavener_2021_cell_viability.md) | cell viability ← epirubicin · inhibition effect | — | Tavener AM et al., Anthracycline-induced cytotoxicity in t…, Molecular biology reports (2021) | [10.1007/s11033-020-06109-8](https://doi.org/10.1007/s11033-020-06109-8) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:55 | 0:07 | 3/5/0 | 2/0/0 | 0/0/0 | 4,355/166 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 47 matched, 20 returned
- **screened:** 9  ·  **relevant:** 8
- **records:** 8  ·  extracted 1  ·  needs review 2  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bozza_2021 | irrelevant | 0 | 0 | This in-vitro cardiotoxicity study reports epirubicin EC50, not quantitative pharmacokinetic disposition parameters. |
| popPK | Danesi_1999 | relevant | 8 | 4 | The paper reports quantitative PK interaction data (AUC values) for the epirubicin metabolite (epirubicinol) in humans, but does not provide primary disposition parameters (CL, Vd) for the parent drug itself. |
| PGx | Danesi_1999 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic interactions between paclitaxel and epirubicin (drug-drug interaction) but does not report any effect of gene variants or genotypes. |
| PGx | Danesi_2002 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions and vehicle effects, but contains no data on gene variants, genotypes, or pharmacogenomic influences. |
| popPK | Doshi_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response relationship of rilotumumab, while epirubicin is only a comparator/concomitant chemotherapy agent. |
| PGx | Doshi_2015 | not_relevant | 0 | 0 | The paper focuses on rilotumumab and mentions epirubicin only as part of the background regimen; it does not report pharmacogenomic effects on the PK or PD of epirubicin. |
| popPK | Fogli_2002 | relevant | 8 | 3 | The study reports pharmacokinetic interactions for epirubicin, but the extracted evidence only provides AUC and qualitative clearance reduction percentages rather than absolute numeric values for clearance (CL), volume (V), or half-life (t1/2). |
| PGx | Fogli_2002 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (paclitaxel/gemcitabine vs. epirubicin) and does not report any effects of gene variants/genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hénin_2016 | irrelevant | 2 | 0 | The paper is a clinical trial report focusing on dosing regimen optimization and toxicity using PK/PD models, but it does not report specific quantitative pharmacokinetic parameter values (CL, V, etc.) for epirubicin. |
| PGx | Hénin_2016 | not_relevant | 0 | 0 | The study reports population PK/PD modeling and dose optimization for docetaxel and epirubicin but does not investigate the impact of gene variants or genotypes on these parameters. |
| popPK | Meille_2016 | irrelevant | 0 | 0 | The paper describes a mathematical modeling framework for dose optimization using docetaxel and epirubicin, but it does not report specific quantitative pharmacokinetic parameters (CL, V, ka, etc.) for epirubicin. |
| PGx | Meille_2016 | not_relevant | 0 | 0 | The paper describes mathematical modeling for dosing optimization in a docetaxel/epirubicin combination but does not report any pharmacogenomic effects or gene variant analysis. |
| popPK | Prado_2011 | relevant | 8 | 2 | The study describes a population PK analysis of epirubicin in humans and discusses clearance, but specific numeric parameter values (CL, V) are not explicitly listed in the provided abstract text. |
| PGx | Prado_2011 | not_relevant | 0 | 0 | The study examines body composition and liver function as determinants of PK, not genetic variants or genotypes. |
| PGx | Ralph_2003 | not_relevant | 0 | 0 | The study evaluates the effect of aspartate aminotransferase (AST), a clinical/biochemical marker, not a gene variant or genotype. |
| popPK | Ralph_2006 | relevant | 9 | 2 | The paper is a population PK study for epirubicin, but the evidence only provides qualitative validation metrics (percent changes, imprecision) rather than the specific numeric values for clearance or volume parameters. |
| PGx | Ralph_2006 | not_relevant | 0 | 0 | The paper evaluates the statistical validity of a population PK model for epirubicin using AST as a covariate, but does not investigate gene variants or pharmacogenomic factors. |
| PGx | Robert_1994 | not_relevant | 0 | 0 | This is a review of general pharmacokinetics and does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Sandström_1999 | not_relevant | 0 | 0 | The study investigates drug-drug interactions in rats, not pharmacogenomic effects of gene variants on epirubicin PK/PD. |
| popPK | Tavener_2021 | irrelevant | 0 | 0 | This in-vitro cytotoxicity study reports epirubicin EC50, not quantitative pharmacokinetic disposition parameters. |
| popPK | Testart-Paillet_2007 | irrelevant | 0 | 0 | This is a review of pharmacodynamic models for hematological toxicity, not a study reporting quantitative pharmacokinetic parameters for epirubicin. |
| PGx | Testart-Paillet_2007 | not_relevant | 0 | 0 | The paper is a review of mathematical models for hematological toxicity and does not report specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Tjuljandin_1990 | not_relevant | 0 | 0 | The paper evaluates the pharmacokinetics of high-dose epirubicin in a cohort but does not report any pharmacogenomic data or genetic variants affecting PK/PD parameters. |
| PGx | Wade_1992 | not_relevant | 0 | 0 | The study analyzes demographic covariates (age, sex) rather than genetic variants or phenotypes. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The study focuses on rilotumumab pharmacokinetics and only qualitatively states that epirubicin PK was unaffected without reporting specific quantitative parameters (CL, V, etc.) in the evidence. |
| PGx | Zhang_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (DDI) with rilotumumab, not a pharmacogenomic effect. |
| popPK | Zhu_2015 | irrelevant | 0 | 0 | The pharmacokinetic model and disposition values are for rilotumumab, not epirubicin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepirubicin%5D&body=Drug%3A%20epirubicin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_epirubicin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 22:54 UTC</sub>
