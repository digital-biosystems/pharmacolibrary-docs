<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;Vilanterol&quot;}]"></div>

# Vilanterol

- **generic name:** Vilanterol
- **ATC codes:** `R03AK10`, `R03AL03`
- **DrugBank:** [DB09082](https://go.drugbank.com/drugs/DB09082) · **PubChem:** [CID 10184665](https://pubchem.ncbi.nlm.nih.gov/compound/10184665)
- **molar mass:** 486.43 g/mol (C24H33Cl2NO5) — DrugBank
- **groups:** approved, investigational

## About

Vilanterol is a long-acting inhaled beta-2 agonist used to treat obstructive airway diseases such as COPD and asthma, given in combination inhalers with corticosteroids or anticholinergics. It is an approved medicine, available in fixed-dose combination inhalers for respiratory conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15053666](https://www.wikidata.org/wiki/Q15053666) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vilanterol | parent | 486.43 | C24H33Cl2NO5 | DrugBank | [10184665](https://pubchem.ncbi.nlm.nih.gov/compound/10184665) | Goyal_2014, Mehta_2018, Mehta_2020, Siederer_2016 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 5.43 | L/h | 5.43 L/h | adults with symptomatic COPD | 74 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Mehta_2018_reference](drugs/drug_vilanterol/Vilanterol_Mehta2018_reference.md) |
| CL | CL/F | 513 | L/h | 513 L/h | patients with COPD | 817 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Mehta_2020_reference](drugs/drug_vilanterol/Vilanterol_Mehta2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="306.7" y1="18" x2="306.7" y2="58" stroke="#ddd"/><text x="306.7" y="72" font-size="10" text-anchor="middle">10</text><line x1="423.3" y1="18" x2="423.3" y2="58" stroke="#ddd"/><text x="423.3" y="72" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Mehta_2018 · CL/F</text><circle cx="275.7" cy="30.0" r="4" fill="#ef6c00"><title>Mehta_2018 · CL/F: 5.43 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Mehta_2020 · CL/F</text><circle cx="506.2" cy="46.0" r="4" fill="#ef6c00"><title>Mehta_2020 · CL/F: 513 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Mehta_2018_reference](drugs/drug_vilanterol/Vilanterol_Mehta2018_reference.md) | — | 1-compartment (no model) | 1 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Mehta_2020_reference](drugs/drug_vilanterol/Vilanterol_Mehta2020_reference.md) | — | 1-compartment (no model) | 2 | Mehta R et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00794-w](https://doi.org/10.1007/s40262-019-00794-w) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Goyal_2014_reference](drugs/drug_vilanterol/Vilanterol_Goyal2014_reference.md) | — | 1-compartment (no model) | 2 | Goyal N et al., Population pharmacokinetics of inhaled…, Clinical pharmacokinetics (2014) | [10.1007/s40262-014-0143-4](https://doi.org/10.1007/s40262-014-0143-4) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Siederer_2016_reference](drugs/drug_vilanterol/Vilanterol_Siederer2016_reference.md) | — | 1-compartment (no model) | 4 | Siederer S et al., Population Pharmacokinetics of Inhaled…, European journal of drug me… (2016) | [10.1007/s13318-015-0303-4](https://doi.org/10.1007/s13318-015-0303-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Calzetta_2017_relaxation](drugs/drug_vilanterol/pd_Calzetta_2017_relaxation.md) | relaxation of cholinergic contractile tone (10 Hz electrical field stimulation) ← vilanterol · direct sigmoid Emax (Hill) effect | — | Calzetta L et al., Pharmacological characterization of the…, European journal of pharmac… (2017) | [10.1016/j.ejphar.2017.07.026](https://doi.org/10.1016/j.ejphar.2017.07.026) |
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Llanos-Paez_2023_FEV1](drugs/drug_vilanterol/pd_Llanos_Paez_2023_FEV1.md) | morning trough FEV1 ← vilanterol · direct sigmoid Emax (Hill) effect | — | Llanos-Paez C et al., Joint longitudinal model-based meta-ana…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09853-z](https://doi.org/10.1007/s10928-023-09853-z) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Kempsford_2014_HR](drugs/drug_vilanterol/pd_Kempsford_2014_HR.md) | maximal heart rate ← vilanterol · direct linear effect | — | Kempsford R et al., A repeat-dose thorough QT study of inha…, British journal of clinical… (2014) | [10.1111/bcp.12243](https://doi.org/10.1111/bcp.12243) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Kempsford_2014_QTcF](drugs/drug_vilanterol/pd_Kempsford_2014_QTcF.md) | maximal QTcF ← vilanterol · direct linear effect | — | Kempsford R et al., A repeat-dose thorough QT study of inha…, British journal of clinical… (2014) | [10.1111/bcp.12243](https://doi.org/10.1111/bcp.12243) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Gong_2022_trough_FEV1](drugs/drug_vilanterol/pd_Gong_2022_trough_FEV1.md) | change from baseline in trough FEV1 ← vilanterol/umeclidinium · direct Emax (saturable) effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vilanterol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:41 | 16:00 | 2/2/0 | 3/1/0 | 0/0/0 | 666,461/41,671 | ollama / glm-5.3-flash | 19 | 0/18 | 19/0 | 1 |

## Coverage

- **PubMed hits:** 85 matched, 48 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Goyal_2014.pdf` | Goyal N et al., Population pharmacokinetics of inhaled…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-014-0143-4](https://doi.org/10.1007/s40262-014-0143-4) | [24756395](https://pubmed.ncbi.nlm.nih.gov/24756395) | Population PK (two-compartment, first-order absorption) with numeric CL/F and V2/F for vilanterol given in the abstract; full parameter set may be in tables/supplement. |
| `Yang_2021.pdf` | Yang S et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2021) | popPK | 10 | [10.1007/s40262-021-00988-1](https://doi.org/10.1007/s40262-021-00988-1) | [33598874](https://pubmed.ncbi.nlm.nih.gov/33598874) | Population PK model for vilanterol (three-compartment, zero-order input) is described, but numeric parameter values (CL, V, Q) are not in the abstract and likely reside in tables/supplementary material not provided. |
| `Allen_2016.pdf` | Allen A et al., Population pharmacokinetics of inhaled…, International journal of cl… (2016) | popPK | 8 | [10.5414/CP202438](https://doi.org/10.5414/CP202438) | [26902504](https://pubmed.ncbi.nlm.nih.gov/26902504) | Population PK model for vilanterol (three-compartment) is described, but numeric parameter values (CL, V, Q) are not in the evidence, likely in tables/supplementary not provided. |
| `Calzetta_2017.pdf` | Calzetta L et al., Pharmacological characterization of the…, European journal of pharmac… (2017) | pd | 4 | [10.1016/j.ejphar.2017.07.026](https://doi.org/10.1016/j.ejphar.2017.07.026) | [28716723](https://www.ncbi.nlm.nih.gov/pubmed/28716723) | metadata signals extractable PD data (Emax) |
| `Kempsford_2013.pdf` | Kempsford R et al., The effect of ketoconazole on the pharm…, British journal of clinical… (2013) | pgx | 7 | [10.1111/bcp.12019](https://doi.org/10.1111/bcp.12019) | [23116485](https://www.ncbi.nlm.nih.gov/pubmed/23116485) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07 15:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2013 | irrelevant | 0 | 0 | This is a population PK/PD study of fluticasone furoate (cortisol suppression), with vilanterol only mentioned as a co-developed combination partner; no vilanterol PK parameters are reported. |
| popPK | Allen_2016 | relevant | 8 | 3 | Population PK model for vilanterol (three-compartment) is described, but numeric parameter values (CL, V, Q) are not in the evidence, likely in tables/supplementary not provided. |
| popPK | Babu_2017 | irrelevant | 1 | 0 | A narrative review of umeclidinium with no quantitative PK parameter values for vilanterol reported in the evidence. |
| popPK | Bjermer_2021 | irrelevant | 0 | 0 | This is a clinical efficacy trial of UMEC/VI in COPD with no pharmacokinetic parameters (no CL, V, ka, half-life, or PK model) for vilanterol reported anywhere in the evidence. |
| popPK | Bjermer_2021_2 | irrelevant | 0 | 0 | This is a clinical efficacy trial of umeclidinium/vilanterol in COPD with no PK parameters (CL, V, ka, half-life, or population-PK model) reported for vilanterol. |
| popPK | Calzetta_2017 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of bronchorelaxant effects in human isolated airways; no PK disposition parameters reported. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | Clinical equivalence trial of a generic UMEC/VI DPI reporting only FEV1/safety outcomes; no PK parameters (CL, V, ka, half-life) for vilanterol are reported, and the PK/BE study is only mentioned as prior work. |
| PGx | Condreay_2016 | not_relevant | 7 | 5 | Paper reports no genetic association with treatment response (PD) to vilanterol; only null findings and baseline FEV1/FVC associations, no fitted effect on PK/PD parameters. |
| popPK | Crim_2019 | irrelevant | 0 | 0 | This is a dose–response efficacy study of batefenterol; vilanterol is only an active comparator (UMEC/VI) with no PK parameters reported. |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (Emax/efficacy-loss) meta-analysis of FEV1 for LABA/LAMA combinations, not a PK study; no vilanterol disposition parameters (CL, V, ka, half-life) are reported. |
| PGx | Hosking_2021 | not_relevant | 4 | 3 | Reports genetic associations with exacerbation rate (clinical endpoint), not a PK/PD parameter of vilanterol, and no effect sizes on PK/PD are given. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | Clinical effectiveness study of UMEC/VI in COPD with no PK parameters (CL, V, ka, half-life, or PK model) for vilanterol reported anywhere in the evidence. |
| PGx | Kempsford_2013 | not_relevant | 0 | 0 | Drug-drug interaction study (ketoconazole), no gene variant/genotype effect on vilanterol PK/PD. |
| popPK | Kempsford_2014 | irrelevant | 3 | 4 | This is a thorough QT study reporting only non-compartmental exposure metrics (AUC, Cmax, Tmax) for vilanterol; no CL, V, ka, half-life, or population-PK parameter values are given (population PK-PD modelling is mentioned but values are not shown). |
| popPK | Kerwin_2020 | irrelevant | 0 | 0 | This is a symptom-outcome post hoc analysis of a COPD trial; no PK parameters (CL, V, ka, half-life, or population-PK model) for vilanterol are reported anywhere. |
| popPK | Llanos-Paez_2023 | irrelevant | 1 | 1 | This is a model-based meta-analysis of FEV1 and exacerbation rate in COPD; vilanterol appears only as a treatment arm with efficacy (ED50/Effref-type) parameters, not PK disposition parameters, and no vilanterol CL/V/ka values are present. |
| popPK | Maltais_2020 | irrelevant | 0 | 0 | This is a clinical efficacy trial of bronchodilators in COPD with no pharmacokinetic parameters (CL, V, ka, half-life, or PK model) reported for vilanterol. |
| PGx | Mehta_2013 | not_relevant | 0 | 0 | The study examines a drug–drug interaction (verapamil) on vilanterol PK, not a gene variant/genotype/phenotype effect. |
| popPK | Mehta_2016 | irrelevant | 2 | 1 | This is a concentration-QTc exposure-response analysis, not a PK disposition study; no CL/V/ka or population-PK parameters for vilanterol are reported. |
| popPK | Rebello_2022 | irrelevant | 3 | 1 | A systematic review of inhaled-drug modelling; vilanterol is not the subject drug and no numeric PK parameter values are present in the evidence. |
| PGx | Vignaux_2025 | not_relevant | 2 | 5 | Reports vilanterol as a CYP2B6 inhibitor (IC50), not a gene variant/genotype effect on vilanterol PK/PD parameters. |
| popPK | Vogelmeier_2020 | irrelevant | 0 | 0 | Clinical efficacy trial of UMEC/VI in COPD with no PK parameters for vilanterol; numbers present are FEV1/CAT outcomes, not disposition parameters. |
| popPK | Vogelmeier_2021 | irrelevant | 0 | 0 | This is a post hoc efficacy analysis of bronchodilator reversibility in COPD; no PK parameters (CL, V, ka, half-life, or population-PK model) for vilanterol are reported, and no numeric PK values appear. |
| popPK | Vogelmeier_2021_2 | irrelevant | 0 | 0 | Clinical outcomes study of COPD patient-reported outcomes with vilanterol only as a co-administered treatment; no PK parameters reported. |
| popPK | Yang_2021 | relevant | 10 | 3 | Population PK model for vilanterol (three-compartment, zero-order input) is described, but numeric parameter values (CL, V, Q) are not in the abstract and likely reside in tables/supplementary material not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvilanterol%5D&body=Drug%3A%20vilanterol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vilanterol/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 15:32 UTC</sub>
