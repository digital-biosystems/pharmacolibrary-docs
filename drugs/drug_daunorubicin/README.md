<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;daunorubicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Quartino_2007_SI&quot;,&quot;label&quot;:&quot;Quartino_2007 \u00b7 SI&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/pd_Quartino_2007_SI.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# daunorubicin

- **generic name:** daunorubicin
- **ATC codes:** `L01DB02`, `L01XY01`
- **DrugBank:** [DB00694](https://go.drugbank.com/drugs/DB00694) · **PubChem:** [CID 30323](https://pubchem.ncbi.nlm.nih.gov/compound/30323)
- **molar mass:** 527.5199 g/mol (C27H29NO10) — DrugBank
- **groups:** approved, investigational

## About

Daunorubicin is an anthracycline antibiotic chemotherapy agent used to treat acute myeloid leukemia and lymphoid leukemia. It is given by intravenous injection.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q411659](https://www.wikidata.org/wiki/Q411659), [Wikipedia](https://en.wikipedia.org/wiki/Daunorubicin?oldid=1374009741) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| daunorubicin | parent | 527.52 | C27H29NO10 | DrugBank | [30323](https://pubchem.ncbi.nlm.nih.gov/compound/30323) | Drevin_2022, Fumagalli_2000, Hempel_2003, Hempel_2010, Thompson_2014_2, Varghese_2016, Wang_2019 |
| daunorubicin and daunorubicinol (daunorubicinol) | metabolite | 529.542 | C27H31NO10 | PubChem | [443832](https://pubchem.ncbi.nlm.nih.gov/compound/443832) | Drevin_2022, Thompson_2014_2 |

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="96" viewBox="0 0 560 96" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="74" stroke="#ddd"/><text x="190.0" y="88" font-size="10" text-anchor="middle">0.1</text><line x1="306.7" y1="18" x2="306.7" y2="74" stroke="#ddd"/><text x="306.7" y="88" font-size="10" text-anchor="middle">1</text><line x1="423.3" y1="18" x2="423.3" y2="74" stroke="#ddd"/><text x="423.3" y="88" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="74" stroke="#ddd"/><text x="540.0" y="88" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Hempel_2003 · CL</text><circle cx="230.4" cy="30.0" r="4" fill="#ef6c00"><title>Hempel_2003 · CL: 0.222 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Fumagalli_2000 · CL</text><circle cx="273.4" cy="46.0" r="4" fill="#ef6c00"><title>Fumagalli_2000 · CL: 0.519 L/h</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Varghese_2016 · CL</text><circle cx="466.1" cy="62.0" r="4" fill="#ef6c00"><title>Varghese_2016 · CL: 23.24 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>caveat: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per…</sub><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub> | [Drevin_2022_reference](drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference.md) | held back | 1-compartment, IV | 9 (+1 cov.) | Drevin G et al., Daunorubicin and Its Active Metabolite…, Pharmaceutics (2022) | [10.3390/pharmaceutics14040792](https://doi.org/10.3390/pharmaceutics14040792) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Fumagalli_2000_reference](drugs/drug_daunorubicin/Daunorubicin_Fumagalli2000_reference.md) | — | 1-compartment (no model) | 1 | Fumagalli L et al., The pharmacokinetics of liposomal encap…, Cancer chemotherapy and pha… (2000) | [10.1007/s002800051025](https://doi.org/10.1007/s002800051025) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q1 — no SI value to build from</sub> | [Hempel_2003_reference](drugs/drug_daunorubicin/Daunorubicin_Hempel2003_reference.md) | — | 1-compartment (no model) | 3 | Hempel G et al., Population pharmacokinetics of liposoma…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01886.x](https://doi.org/10.1046/j.1365-2125.2003.01886.x) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub> | [Hempel_2010_reference](drugs/drug_daunorubicin/Daunorubicin_Hempel2010_reference.md) | held back | 1-compartment, oral | 2 | Hempel G et al., Pharmacokinetics of daunorubicin and da…, Pediatric blood & cancer (2010) | [10.1002/pbc.22266](https://doi.org/10.1002/pbc.22266) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Varghese_2016_mean_increase_in_paw_volume_in_ml_sem](drugs/drug_daunorubicin/Daunorubicin_Varghese2016_mean_increase_in_paw_volume_in_ml.md) | — | 1-compartment (no model) | 1 | Varghese SE et al., Lecithin and PLGA-based self-assembled…, Drug delivery and translati… (2016) | [10.1007/s13346-016-0314-y](https://doi.org/10.1007/s13346-016-0314-y) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ dnr_solution](drugs/drug_daunorubicin/Daunorubicin_Varghese2016_dnr_solution.md) | — | 1-compartment (no model) | 6 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Krogh-Madsen_2012_reference](drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_reference.md) | — | 1-compartment (no model) | 0 | Krogh-Madsen M et al., Population pharmacokinetics of cytarabi…, Cancer chemotherapy and pha… (2012) | [10.1007/s00280-011-1800-z](https://doi.org/10.1007/s00280-011-1800-z) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Thompson_2014_2_reference](drugs/drug_daunorubicin/Daunorubicin_Thompson2014v2_reference.md) | — | parent + metabolite (no model) | 0 | Thompson P et al., Pharmacokinetics and pharmacogenomics o…, Cancer chemotherapy and pha… (2014) | [10.1007/s00280-014-2535-4](https://doi.org/10.1007/s00280-014-2535-4) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Wang_2019_reference](drugs/drug_daunorubicin/Daunorubicin_Wang2019_reference.md) | — | 1-compartment (no model) | 0 | Wang Q et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bozza_2021_cellular_index](drugs/drug_daunorubicin/pd_Bozza_2021_cellular_index.md) | cellular index ← daunorubicin · direct sigmoid Emax (Hill) effect | — | Bozza WP et al., Anthracycline-Induced Cardiotoxicity: M…, The AAPS journal (2021) | [10.1208/s12248-021-00576-y](https://doi.org/10.1208/s12248-021-00576-y) |
| <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gumbo_2020_2_cfu_mL](drugs/drug_daunorubicin/pd_Gumbo_2020_2_cfu_mL.md) | bacterial burden ← daunorubicin · direct sigmoid Emax (Hill) effect | model (no simulator) | Gumbo T et al., Repurposing drugs for treatment of Myco…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkz523](https://doi.org/10.1093/jac/dkz523) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Nikanjam_2018_2_CR](drugs/drug_daunorubicin/pd_Nikanjam_2018_2_CR.md) | complete remission ← daunorubicin · categorical (graded) response model | — | Nikanjam M et al., Persistent cytarabine and daunorubicin…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-017-3484-5](https://doi.org/10.1007/s00280-017-3484-5) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Quartino_2007_SI](drugs/drug_daunorubicin/pd_Quartino_2007_SI.md) | survival index ← Daunorubicin · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Quartino A et al., Modeling of in vitro drug activity and…, Journal of clinical pharmac… (2007) | [10.1177/0091270007302563](https://doi.org/10.1177/0091270007302563) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2019_CR](drugs/drug_daunorubicin/pd_Wang_2019_CR.md) | complete remission ← daunorubicin · categorical (graded) response model | — | Wang Q et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2019_EFS](drugs/drug_daunorubicin/pd_Wang_2019_EFS.md) | Event free survival ← daunorubicin · time-to-event model | — | Wang Q et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2019_OS](drugs/drug_daunorubicin/pd_Wang_2019_OS.md) | overall survival ← daunorubicin · time-to-event model | — | Wang Q et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:03 | 0:04 | 5/4/0 | 7/0/0 | 0/0/0 | 4,066/173 | einfracz / qwen3.8-27b | 16 | 26/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 47 matched, 20 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 9  ·  extracted 0  ·  needs review 5  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bozza_2021 | irrelevant | 1 | 0 | This is an in-vitro cardiotoxicity study reporting EC50 values and uptake, not daunorubicin pharmacokinetic disposition parameters. |
| popPK | Callies_2004 | relevant | 10 | 2 | The paper describes a population PK model for daunorubicin but only reports relative changes (e.g., 10% reduction in clearance) rather than absolute numeric parameter values (CL, V, Q). |
| PGx | Callies_2004 | not_relevant | 0 | 0 | The paper examines the effect of a drug (zosuquidar) on PK, not the effect of a gene variant/genotype. |
| PGx | Fumagalli_2000 | not_relevant | 0 | 0 | The study investigates the effect of drug-drug interactions (HAART/PIs) on daunorubicin PK, not the effect of genetic variants or genotypes (pharmacogenomics). |
| popPK | Gumbo_2020_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic/microbiological study on Mycobacterium abscessus, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for daunorubicin in humans or animals. |
| PGx | Gumbo_2020_2 | not_relevant | 0 | 0 | The paper focuses on the in vitro antimicrobial efficacy of drugs against Mycobacterium abscessus and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Hempel_2003 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics of liposomal daunorubicin based on clinical covariates (weight, dose) but does not investigate any genetic variants or genotypes. |
| PGx | Hempel_2010 | not_relevant | 0 | 0 | The paper investigates the relationship between pharmacokinetic parameters and age/body size, but does not report on the influence of any gene variant or genotype. |
| popPK | Imai_2025 | irrelevant | 1 | 0 | The study analyzes the liposomal formulation CPX-351 which contains daunorubicin and cytarabine, and no numeric PK parameter values for daunorubicin alone are present in the provided evidence. |
| PGx | Imai_2025 | not_relevant | 0 | 0 | The paper reports population PK/PD analyses comparing Japanese and non-Japanese populations but does not investigate the impact of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Krogh-Madsen_2012 | not_relevant | 0 | 0 | The study investigates non-genetic clinical covariates (white blood cell count, creatinine clearance) on pharmacokinetics, with no mention of genetic variants or pharmacogenomics. |
| popPK | Nikanjam_2018_2 | relevant | 10 | 4 | The paper describes a population PK model for daunorubicin in humans, and while qualitative results are in the abstract, specific numeric parameter estimates are likely in the full text or supplementary tables not fully detailed in the abstract snippet. |
| PGx | Nikanjam_2018_2 | not_relevant | 0 | 0 | The paper describes population PK for a liposomal formulation of daunorubicin but does not analyze the impact of any genetic variants or genotypes on PK/PD parameters. |
| popPK | Olson_2000 | irrelevant | 0 | 0 | The study investigates in-vitro pharmacodynamic effects (calcium release mechanisms) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Olson_2000 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of cardiotoxicity (SR calcium release) of daunorubicin and does not report any pharmacogenomic effect based on gene variants on PK or PD parameters. |
| popPK | Pereira-Vieira_2025 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study focusing on chemo-sensitization mechanisms, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Pereira-Vieira_2025 | not_relevant | 0 | 0 | The paper investigates the chemosensitizing effect of 3-bromopyruvate on daunorubicin in cell lines, but it does not report any pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| popPK | Quartino_2007 | irrelevant | 0 | 0 | The study describes in vitro pharmacodynamic modeling (drug sensitivity/cytotoxicity) rather than in vivo pharmacokinetic disposition parameters. |
| PGx | Quartino_2007 | not_relevant | 0 | 0 | The study models in vitro pharmacodynamics based on tumor cell samples but does not investigate genetic variants or genotypes of the patients. |
| popPK | Sorf_2018 | irrelevant | 0 | 0 | The study focuses on the drug ribociclib and its interactions with transporters, using daunorubicin only as a probe drug in an in-vitro mechanism study without reporting PK parameters. |
| PGx | Sorf_2018 | not_relevant | 0 | 0 | The paper focuses on ribociclib's interactions with transporters and CYPs, not on how genetic variants affect the PK/PD of daunorubicin. |
| popPK | Varatharajan_2016 | relevant | 9 | 3 | The study reports population PK parameters (AUC, CL) for Daunorubicin in humans, but specific numeric mean/median values are not explicitly listed in the abstract text provided. |
| PGx | Varghese_2016 | not_relevant | 0 | 0 | The paper investigates a novel nanocarrier formulation for daunorubicin and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaunorubicin%5D&body=Drug%3A%20daunorubicin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_daunorubicin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 12:58 UTC</sub>
