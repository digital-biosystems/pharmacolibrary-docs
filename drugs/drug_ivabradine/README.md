<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;ivabradine&quot;}]"></div>

# ivabradine

- **generic name:** ivabradine
- **ATC codes:** `C01EB17`, `C07FX05`, `C07FX06`
- **DrugBank:** [DB09083](https://go.drugbank.com/drugs/DB09083) · **PubChem:** [CID 132999](https://pubchem.ncbi.nlm.nih.gov/compound/132999)
- **molar mass:** 468.594 g/mol (C27H36N2O5) — DrugBank
- **groups:** approved, investigational

## About

Ivabradine is a heart medicine used to treat stable angina (chest pain) and heart failure. It is authorised in the European Union and used when symptoms are not fully controlled by beta blockers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425729](https://www.wikidata.org/wiki/Q425729) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ivabradine metabolite | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Lang_2021_1_3_years](drugs/drug_ivabradine/Ivabradine_Lang2021_1_3_years.md) | — | parent + metabolite (no model) | 0 | Lang J et al., Impact of Hepatic CYP3A4 Ontogeny Funct…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2134](https://doi.org/10.1002/cpt.2134) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ 3_18_years_bw_40kg](drugs/drug_ivabradine/Ivabradine_Lang2021_3_18_years_bw_40kg.md) | — | parent + metabolite (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ 3_18_years_bw_40kg_2](drugs/drug_ivabradine/Ivabradine_Lang2021_3_18_years_bw_40kg_2.md) | — | parent + metabolite (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ adult_value_reference](drugs/drug_ivabradine/Ivabradine_Lang2021_adult_value_reference.md) | — | parent + metabolite (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ adults_18_years](drugs/drug_ivabradine/Ivabradine_Lang2021_adults_18_years.md) | — | parent + metabolite (no model) | 0 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Lang_2021_HR](drugs/drug_ivabradine/pd_Lang_2021_HR.md) | heart rate ← ivabradine and metabolite · direct Emax (saturable) effect | — | Lang J et al., Impact of Hepatic CYP3A4 Ontogeny Funct…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2134](https://doi.org/10.1002/cpt.2134) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ivabradine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: HCN2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 11:29 | 9:30 | 0/5/0 | 0/1/0 | 0/0/0 | 199,810/19,097 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 4/2 | 5/1 | 0 |

## Coverage

- **PubMed hits:** 45 matched, 43 returned
- **screened:** 7  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 0  ·  rejected 5  ·  stale 5
- **scholar-agent fallback query used:** not captured

## Full-text requests

_15 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Choi_2016.pdf` | Choi HY et al., Population plasma and urine pharmacokin…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.614](https://doi.org/10.1002/jcph.614) | [26265098](https://pubmed.ncbi.nlm.nih.gov/26265098) | The paper describes a population PK model for ivabradine, but the specific numeric parameter values are not present in the provided evidence. |
| `Duffull_2000.pdf` | Duffull SB et al., A pharmacokinetic simulation model for…, European journal of pharmac… (2000) | popPK | 10 | [10.1016/s0928-0987(00)00086-5](https://doi.org/10.1016/s0928-0987(00)00086-5) | [10838018](https://pubmed.ncbi.nlm.nih.gov/10838018) | The paper describes a population PK model for ivabradine in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| `Riesen_2011.pdf` | Riesen SC et al., Pharmacokinetics of oral ivabradine in…, Journal of veterinary pharm… (2011) | popPK | 10 | [10.1111/j.1365-2885.2010.01253.x](https://doi.org/10.1111/j.1365-2885.2010.01253.x) | [21118419](https://pubmed.ncbi.nlm.nih.gov/21118419) | The study reports compartmental PK models for ivabradine in cats, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Peigné_2016_2.pdf` | Peigné S et al., Model-based approaches for ivabradine d…, Journal of pharmacokinetics… (2016) | popPK | 8 | [10.1007/s10928-015-9451-z](https://doi.org/10.1007/s10928-015-9451-z) | [26563503](https://pubmed.ncbi.nlm.nih.gov/26563503) | The paper describes a population PK and PBPK modeling study for ivabradine in pediatric patients, but the specific numeric parameter values are not present in the provided evidence. |
| `Vlase_2011.pdf` | Vlase L et al., Pharmacokinetic interaction between iva…, Journal of clinical pharmac… (2011) | popPK | 8 | [10.1111/j.1365-2710.2010.01170.x](https://doi.org/10.1111/j.1365-2710.2010.01170.x) | [21366652](https://pubmed.ncbi.nlm.nih.gov/21366652) | The study reports non-compartmental PK parameters (Cmax, Tmax, AUC) for ivabradine in humans, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text. |
| `Vlase_2012.pdf` | Vlase L et al., Pharmacokinetic interaction between iva…, Clinical drug investigation (2012) | popPK | 8 | [10.1007/BF03261904](https://doi.org/10.1007/BF03261904) | [22765768](https://pubmed.ncbi.nlm.nih.gov/22765768) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, Tmax, AUC) for ivabradine in humans, though it lacks compartmental model parameters like clearance or volume of distribution. |
| `Xu_2019.pdf` | Xu X et al., Pharmacokinetic profile of ivabradine h…, Biomedical chromatography :… (2019) | popPK | 8 | [10.1002/bmc.4662](https://doi.org/10.1002/bmc.4662) | [31328807](https://pubmed.ncbi.nlm.nih.gov/31328807) | The study reports quantitative PK parameters (Cmax, AUC, Tmax) for ivabradine in humans, but lacks specific clearance (CL) or volume (V) values in the provided text. |
| `Peigné_2016.pdf` | Peigné S et al., Model-based approaches for ivabradine d…, Journal of pharmacokinetics… (2016) | pd | 5 | [10.1007/s10928-015-9452-y](https://doi.org/10.1007/s10928-015-9452-y) | [26578442](https://www.ncbi.nlm.nih.gov/pubmed/26578442) | metadata signals extractable PD data (PK/PD) |
| `Ragueneau_1998.pdf` | Ragueneau I et al., Pharmacokinetic-pharmacodynamic modelin…, Clinical pharmacology and t… (1998) | pd | 5 | [10.1016/S0009-9236(98)90153-9](https://doi.org/10.1016/S0009-9236(98)90153-9) | [9728900](https://www.ncbi.nlm.nih.gov/pubmed/9728900) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Cao_2018.pdf` | Cao Y et al., Inhibition of hyperpolarization-activat…, British journal of pharmaco… (2018) | pd | 4 | [10.1111/bph.14469](https://doi.org/10.1111/bph.14469) | [30098004](https://www.ncbi.nlm.nih.gov/pubmed/30098004) | metadata signals extractable PD data (EC50) |
| `Yu_2017.pdf` | Yu J et al., What Can Be Learned from Recent New Dru…, Drug metabolism and disposi… (2017) | pgx | 8 | [10.1124/dmd.116.073411](https://doi.org/10.1124/dmd.116.073411) | [27821435](https://www.ncbi.nlm.nih.gov/pubmed/27821435) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Lang_2020.pdf` | Lang J et al., Simultaneous Ivabradine Parent-Metaboli…, The AAPS journal (2020) | pgx | 7 | [10.1208/s12248-020-00502-8](https://doi.org/10.1208/s12248-020-00502-8) | [33033962](https://www.ncbi.nlm.nih.gov/pubmed/33033962) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Portolés_2006.pdf` | Portolés A et al., Lack of pharmacokinetic interaction bet…, Journal of clinical pharmac… (2006) | pgx | 7 | [10.1177/0091270006291624](https://doi.org/10.1177/0091270006291624) | [16988209](https://www.ncbi.nlm.nih.gov/pubmed/16988209) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Sun_2015.pdf` | Sun W et al., The effect of clopidogrel on pharmacoki…, Drug development and indust… (2015) | pgx | 7 | [10.3109/03639045.2014.959970](https://doi.org/10.3109/03639045.2014.959970) | [25250618](https://www.ncbi.nlm.nih.gov/pubmed/25250618) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yu_2018.pdf` | Yu J et al., Risk of Clinically Relevant Pharmacokin…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.117.078691](https://doi.org/10.1124/dmd.117.078691) | [29572333](https://www.ncbi.nlm.nih.gov/pubmed/29572333) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-06T11:20:21.426294+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amariei_2022 | irrelevant | 0 | 0 | The study investigates the ecotoxicological effects and stability of ivabradine in marine bacteria, not its pharmacokinetic disposition parameters. |
| PGx | Bellosta_2018 | not_relevant | 0 | 0 | The paper reviews statin drug interactions and does not discuss ivabradine or its pharmacogenomics. |
| popPK | Cao_2018 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Cao_2018 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of carvedilol on HCN channels and does not report pharmacodynamic or exposure-response data for ivabradine. |
| popPK | Chang_2020 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of oxaliplatin's effects on ion channels, where ivabradine is used only as a comparator agent to block currents, not as the subject of pharmacokinetic analysis. |
| PD | Chang_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacology of oxaliplatin and its interaction with ivabradine on ion currents, but does not report a PD or exposure-response relationship for ivabradine itself. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation of ethanol's effects on HCN channels, using ivabradine only as a pharmacological tool to block currents, and reports no pharmacokinetic parameters. |
| PD | Chen_2012 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Hill coefficient) for ethanol, not ivabradine; ivabradine is only mentioned qualitatively as an irreversible depressant. |
| popPK | Choi_2016 | relevant | 10 | 0 | The paper describes a population PK model for ivabradine, but the specific numeric parameter values are not present in the provided evidence. |
| PGx | Di_2008 | not_relevant | 0 | 0 | The paper is a review of St. John's Wort drug interactions and does not report pharmacogenomic effects (gene variants) on ivabradine PK/PD. |
| popPK | Duffull_2000 | relevant | 10 | 0 | The paper describes a population PK model for ivabradine in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| PGx | Iliza_2016 | not_relevant | 0 | 0 | The paper is a pharmacoeconomic modeling study regarding the cost-effectiveness of a hypothetical test and does not report actual pharmacogenomic effects on ivabradine PK/PD parameters. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper reports herbal-drug interactions and does not mention ivabradine or pharmacogenomic effects. |
| PGx | Lang_2020 | not_relevant | 0 | 0 | The paper describes a PBPK/PD model for ivabradine and its metabolite focusing on CYP3A4 inhibitors, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Lang_2021 | not_relevant | 0 | 0 | The paper investigates the impact of CYP3A4 ontogeny (age-dependent enzyme maturation) on PK/PD, not the effect of specific gene variants or genotypes (pharmacogenomics). |
| PGx | Legault_2020 | not_relevant | 0 | 0 | The paper uses a genetic variant as a proxy for the drug's target (HCN4) to predict clinical outcomes (heart failure, AF), but does not report pharmacokinetic or pharmacodynamic parameters of ivabradine itself. |
| PGx | Núñez_2016 | not_relevant | 2 | 1 | The study is a preliminary exploratory report with a very small sample size (n=11) that identifies variants but does not establish a significant association or report a fitted quantitative effect size for the pharmacodynamic parameter (heart rate reduction). |
| popPK | Peigné_2016 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| popPK | Peigné_2016_2 | relevant | 8 | 0 | The paper describes a population PK and PBPK modeling study for ivabradine in pediatric patients, but the specific numeric parameter values are not present in the provided evidence. |
| PGx | Perna_2015 | not_relevant | 0 | 0 | The paper discusses clinical outcomes and drug-drug interactions (CYP3A4 inhibitors) in the SIGNIFY trial but does not report pharmacogenomic effects of specific gene variants on ivabradine PK or PD parameters. |
| PGx | Perna_2016 | not_relevant | 0 | 0 | The paper discusses the SIGNIFY trial and drug-drug interactions (CYP3A4 inhibitors) but does not report pharmacogenomic effects of specific gene variants on ivabradine PK/PD. |
| PGx | Portolés_2006 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (omeprazole/lansoprazole) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Portolés_2006_2 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (Hypericum perforatum) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Ragueneau_1998 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| popPK | Riesen_2011 | relevant | 10 | 2 | The study reports compartmental PK models for ivabradine in cats, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Rouleau_2011 | not_relevant | 0 | 0 | The paper is a general review of heart failure therapies and mentions ivabradine only in the context of clinical management, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | Sun_2015 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (clopidogrel) in rats, not a pharmacogenomic effect (gene variant/genotype) on ivabradine PK/PD. |
| popPK | Wallman_2021 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (potency, efficacy, turnover rates) for cardiovascular safety assessment, not pharmacokinetic disposition parameters (CL, V, ka) for ivabradine. |
| PGx | Yu_2017 | not_relevant | 0 | 0 | The paper is a systematic review of drug-drug interactions (DDIs) and does not report specific pharmacogenomic effects (gene variants) on ivabradine's PK/PD parameters. |
| PGx | Yu_2018 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DDIs) involving CYP3A and transporters, not pharmacogenomic effects of genetic variants on ivabradine PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 11:20 UTC</sub>
