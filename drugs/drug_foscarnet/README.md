<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;foscarnet&quot;}]"></div>

# foscarnet

- **generic name:** foscarnet
- **ATC codes:** `J05AD01`
- **DrugBank:** [DB00529](https://go.drugbank.com/drugs/DB00529) · **PubChem:** [CID 3415](https://pubchem.ncbi.nlm.nih.gov/compound/3415)
- **molar mass:** 126.0053 g/mol (CH3O5P) — DrugBank
- **groups:** approved, investigational

## About

Foscarnet is an antiviral drug used to treat cytomegalovirus disease and herpes simplex infections, including genital herpes. It is an approved antiviral for systemic use, generally reserved for serious viral infections, often in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420387](https://www.wikidata.org/wiki/Q420387) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Piret_2016_CPE](drugs/drug_foscarnet/pd_Piret_2016_CPE.md) | Cytopathic effects induced by HSV-1 ← foscarnet · inhibition effect | — | Piret J et al., Novel Method Based on Real-Time Cell An…, Journal of clinical microbi… (2016) | [10.1128/JCM.03274-15](https://doi.org/10.1128/JCM.03274-15) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Piret_2016_CPE_2](drugs/drug_foscarnet/pd_Piret_2016_CPE_2.md) | Cytopathic effects induced by HCMV ← foscarnet · inhibition effect | — | Piret J et al., Novel Method Based on Real-Time Cell An…, Journal of clinical microbi… (2016) | [10.1128/JCM.03274-15](https://doi.org/10.1128/JCM.03274-15) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ballout_2007_EBV_DNA](drugs/drug_foscarnet/pd_Ballout_2007_EBV_DNA.md) | EBV DNA replication inhibition ← foscarnet · inhibition effect | — | Ballout M et al., Real-time quantitative PCR for assessme…, Journal of virological meth… (2007) | [10.1016/j.jviromet.2007.02.005](https://doi.org/10.1016/j.jviromet.2007.02.005) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ballout_2007_EBV_DNA_2](drugs/drug_foscarnet/pd_Ballout_2007_EBV_DNA_2.md) | EBV DNA replication inhibition ← foscarnet · inhibition effect | — | Ballout M et al., Real-time quantitative PCR for assessme…, Journal of virological meth… (2007) | [10.1016/j.jviromet.2007.02.005](https://doi.org/10.1016/j.jviromet.2007.02.005) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=foscarnet).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC16A1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:38 | 4:29 | 0/0/0 | 1/1/0 | 0/0/0 | 187,807/15,200 | openai / gpt-6-luna | 27 | 5/22 | 27/0 | 0 |

## Coverage

- **PubMed hits:** 181 matched, 99 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ritschel_1985.pdf` | Ritschel WA et al., Pharmacokinetics of PFA (trisodium phos…, Methods and findings in exp… (1985) | popPK | 10 | not captured | [3157841](https://pubmed.ncbi.nlm.nih.gov/3157841) | Quantitative foscarnet disposition parameters are reported for both species. |
| `López-Cortés_2000.pdf` | López-Cortés LF et al., Intravitreal, retinal, and central nerv…, Antimicrobial agents and ch… (2000) | popPK | 8 | [10.1128/AAC.44.3.756-759.2000](https://doi.org/10.1128/AAC.44.3.756-759.2000) | [10681351](https://pubmed.ncbi.nlm.nih.gov/10681351) | A two-compartment analysis is reported, but numeric disposition-model parameters are not provided. |

<sub>queue written 2026-10-07T17:37:48.026336+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albadry_2024 | irrelevant | 0 | 0 | This liver CYP zonation study reports no foscarnet pharmacokinetic parameters. |
| popPK | Ansaar_2023 | irrelevant | 0 | 0 | The paper studies epirubicin, not foscarnet, and reports no foscarnet parameters. |
| popPK | Ballout_2007 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study reporting foscarnet EC50 values, not pharmacokinetic disposition parameters. |
| popPK | Barsam_2017 | irrelevant | 0 | 0 | The paper models rivaroxaban, not foscarnet, and provides no foscarnet parameter values. |
| popPK | Bemer_2013 | irrelevant | 0 | 0 | The study reports biomarkers for fludarabine, cyclophosphamide, and mycophenolate, not foscarnet. |
| PGx | Benyahia_2025 | not_relevant | 0 | 0 | UL97 resistance is mentioned as context for treatment selection, but the paper does not report a genotype-related change in a foscarnet PK or PD parameter. |
| PGx | Bethge_1999 | not_relevant | 0 | 0 | The paper describes HHV-6 infection and response to foscarnet, but reports no host pharmacogenomic effect on a foscarnet PK or PD parameter. |
| popPK | Bhalla_2023 | irrelevant | 0 | 0 | The study reports bemcentinib and docetaxel pharmacokinetics, not foscarnet parameters. |
| PGx | Borthwick_2005 | not_relevant | 0 | 0 | Foscarnet is mentioned only as background; no gene variant or genotype effect on its PK or PD is reported. |
| popPK | Braidotti_2026 | irrelevant | 0 | 0 | The PK model and numeric parameters are for CMV-specific immunoglobulin; foscarnet is only mentioned as treatment. |
| popPK | Brand_2001 | irrelevant | 0 | 0 | Foscarnet is only a comparator in an in-vitro antiviral activity study, with no disposition parameters reported. |
| popPK | Call_2009 | irrelevant | 0 | 0 | The paper reports antithymocyte globulin pharmacokinetics, not foscarnet. |
| popPK | Chemaly_2019 | irrelevant | 0 | 0 | This systematic review reports in-vitro antiviral EC50 values, not foscarnet disposition parameters. |
| PGx | Cherrier_2018 | not_relevant | 0 | 0 | The report does not describe a genotype-dependent foscarnet PK/PD parameter; it only notes that foscarnet therapy was effective. |
| popPK | Chou_2012 | irrelevant | 0 | 0 | This is an in-vitro cyclopropavir susceptibility study and reports no foscarnet disposition parameters. |
| popPK | Chou_2015 | irrelevant | 0 | 0 | Foscarnet is only a comparator in in-vitro viral resistance experiments, with no foscarnet pharmacokinetic parameters reported. |
| popPK | Chou_2021 | irrelevant | 0 | 0 | This is an in vitro viral susceptibility study, not a foscarnet pharmacokinetic study. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The study models rivaroxaban, not foscarnet, and reports no foscarnet parameter values. |
| popPK | De_2014 | irrelevant | 0 | 0 | Foscarnet is only an in-vitro comparator, and no foscarnet disposition parameters are reported. |
| popPK | Deng_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetics of anti-CMV antibodies, not foscarnet. |
| popPK | Drouot_2013 | irrelevant | 0 | 0 | This is an in vitro antiviral-susceptibility study, not a PK study, and reports no foscarnet disposition parameters. |
| popPK | Drouot_2016 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study; foscarnet EC50 values are not pharmacokinetic parameters. |
| popPK | Faral-Tello_2012 | irrelevant | 0 | 0 | This in-vitro antiviral activity study reports no foscarnet disposition parameters. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | This is an AKI evidence-integration study, not a foscarnet pharmacokinetic study, and reports no disposition parameter values. |
| PGx | Ferreira_2026 | not_relevant | 0 | 0 | The paper does not analyze genetic variation or foscarnet PK/PD; foscarnet is only mentioned as a possible contributor to electrolyte disturbances. |
| popPK | Fryer_2004 | irrelevant | 0 | 0 | This in-vitro antiviral susceptibility study reports an EC50, not foscarnet disposition parameters. |
| popPK | Gandhi_2024 | irrelevant | 0 | 0 | The study reports HMB-001/FVIIa findings, not foscarnet pharmacokinetics. |
| popPK | Gege_2026 | irrelevant | 0 | 0 | Foscarnet is assessed only in an in-vitro antiviral combination assay, with no quantitative disposition parameters reported. |
| popPK | Gentry_2013 | irrelevant | 0 | 0 | Foscarnet is only mentioned as a treatment; the study reports antiviral resistance results, not foscarnet disposition parameters. |
| popPK | Gentry_2015 | irrelevant | 0 | 0 | Foscarnet is only mentioned as a treatment; the study reports in-vitro antiviral resistance, not foscarnet pharmacokinetics. |
| popPK | Kaneko_2000 | irrelevant | 0 | 0 | Foscarnet is tested only for in-vitro antiviral activity, with no pharmacokinetic disposition parameters. |
| popPK | Kini_1997 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study and reports no quantitative pharmacokinetic parameters. |
| popPK | Koloskoff_2025 | irrelevant | 0 | 0 | The study models (val)ganciclovir, and patients who received foscarnet were excluded. |
| popPK | Kuramoto_2010 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study and reports no foscarnet disposition parameters. |
| popPK | Leroux_2021 | irrelevant | 0 | 0 | This review covers other anti-infectives and reports no foscarnet pharmacokinetic parameters. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | This is a planned rivaroxaban study and reports no foscarnet parameters. |
| popPK | Liu_2022_2 | irrelevant | 0 | 0 | This is a population PK-PD study of rivaroxaban, not foscarnet. |
| popPK | Lynch_2025 | irrelevant | 0 | 0 | This systematic review reports no foscarnet pharmacokinetic parameters or numeric values. |
| popPK | López-Cortés_2000 | relevant | 8 | 2 | A two-compartment analysis is reported, but numeric disposition-model parameters are not provided. |
| popPK | Neyts_1997 | irrelevant | 0 | 0 | This is an in-vitro antiviral susceptibility study, not a foscarnet pharmacokinetic study. |
| popPK | Padullés_2016 | irrelevant | 0 | 0 | The study models ganciclovir pharmacokinetics, not foscarnet. |
| popPK | Piret_2015 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral susceptibility, not foscarnet disposition parameters. |
| popPK | Piret_2016 | irrelevant | 0 | 0 | This is an in-vitro antiviral susceptibility study reporting EC50s, not foscarnet disposition parameters. |
| popPK | Prohn_2021 | irrelevant | 0 | 0 | The study models letermovir, and reports no foscarnet disposition parameters. |
| popPK | Pruimboom-Brees_2023 | irrelevant | 0 | 0 | This review reports no quantitative foscarnet disposition parameters. |
| popPK | Rosowsky_1997 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study and reports no foscarnet pharmacokinetic parameters. |
| popPK | Sati_2025 | irrelevant | 0 | 0 | This is a review of silver nanoparticles and contains no foscarnet pharmacokinetic parameters. |
| popPK | Scala_2018 | irrelevant | 0 | 0 | The quantitative population-PK parameters are for gadoterate meglumine, not foscarnet. |
| popPK | Shiraki_2020 | irrelevant | 0 | 0 | Foscarnet is tested only for in-vitro antiviral activity, with no pharmacokinetic parameters. |
| popPK | Smee_1995 | irrelevant | 0 | 0 | This is an in-vitro antiviral susceptibility study and reports no foscarnet pharmacokinetic parameters. |
| popPK | Song_2024 | irrelevant | 0 | 0 | The PopPK parameters are for maribavir; foscarnet is only mentioned as a comparator therapy. |
| popPK | Sudarsono_2026 | irrelevant | 0 | 0 | The quantitative PK values are for ganciclovir, while foscarnet is only mentioned as an alternative therapy. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | Foscarnet is only mentioned as an alternative; the PopPK model is for maribavir, with its parameter table in supplementary material not provided. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | The population-PK values are for maribavir; foscarnet is mentioned only as background or comparator therapy. |
| PGx | Tomasik_2012 | not_relevant | 0 | 0 | The reported viral genotype is not a host pharmacogenomic factor, and no foscarnet PK/PD parameter is reported. |
| PGx | Wagner_2026 | not_relevant | 0 | 0 | The report describes CMV resistance mutations and clinical response to foscarnet, but does not report a genotype effect on a foscarnet pharmacokinetic or pharmacodynamic parameter. |
| popPK | Williams-Aziz_2005 | irrelevant | 0 | 0 | This is an in vitro antiviral activity study, with no foscarnet disposition parameters reported. |
| popPK | Wong_2022 | irrelevant | 0 | 0 | The study models ganciclovir pharmacokinetics; foscarnet is only mentioned in resistance testing, with no PK values reported. |
| popPK | Xu_2001 | irrelevant | 0 | 0 | Foscarnet is only mentioned as a drug to which the virus was resistant; no foscarnet PK parameters are reported. |
| popPK | Yajima_2017 | irrelevant | 0 | 0 | Foscarnet is only an antiviral comparator, and no pharmacokinetic parameter values are reported. |
| popPK | Yuen_1995 | irrelevant | 0 | 0 | This study models ganciclovir, not foscarnet, and reports no foscarnet parameters. |
| popPK | Zarrouk_2020 | irrelevant | 0 | 0 | This is an in-vitro susceptibility study reporting EC50 values, not foscarnet disposition parameters. |
| popPK | Zarrouk_2021 | irrelevant | 0 | 0 | This is an in-vitro viral drug-susceptibility study and reports no foscarnet disposition parameters. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | Foscarnet is only mentioned as a resistance comparator; no foscarnet pharmacokinetic parameters are reported. |
| PGx | von_2023 | not_relevant | 1 | 0 | The paper mentions CMV resistance mutations associated with foscarnet but does not report their effect on a foscarnet PK or PD parameter. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
