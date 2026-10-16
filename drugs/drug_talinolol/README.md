<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;talinolol&quot;}]"></div>

# talinolol

- **generic name:** talinolol
- **ATC codes:** `C07AB13`
- **DrugBank:** [DB11770](https://go.drugbank.com/drugs/DB11770) · **PubChem:** [CID 68770](https://pubchem.ncbi.nlm.nih.gov/compound/68770)
- **molar mass:** 363.4943 g/mol (C20H33N3O3) — DrugBank
- **groups:** investigational

## About

Talinolol is a selective beta blocker that has been used as an antihypertensive and antiarrhythmic agent for cardiovascular conditions such as high blood pressure. It is not an approved medicine in major markets and is considered investigational, with no European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7679533](https://www.wikidata.org/wiki/Q7679533) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:48 | 1:28 | 0/0/0 | 0/0/0 | 0/0/1 | 39,165/2,660 | einfracz / qwen3.8-27b | 3 | 3/4 | 1/2 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **MDR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Wang_2013](drugs/drug_talinolol/pgx_Wang_2013_MDR1_Q100.md) | Wang SY et al., Effect of quercetin on P-glycoprotein t…, European journal of clinica… (2013) | [10.1038/ejcn.2013.5](https://doi.org/10.1038/ejcn.2013.5) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=talinolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| excretion | kidney | `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: MDR1 (transport).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 80 matched, 76 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_21 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Juan_2007.pdf` | Juan H et al., Unexpected effect of concomitantly admi…, European journal of clinica… (2007) | popPK | 6 | [10.1007/s00228-007-0298-0](https://doi.org/10.1007/s00228-007-0298-0) | [17468862](https://pubmed.ncbi.nlm.nih.gov/17468862) | The study reports quantitative non-compartmental PK parameters (AUC, Cmax, CL/F) for talinolol in humans, though it lacks specific volume of distribution or half-life values. |
| `Bakshi_2025.pdf` | Bakshi A et al., Probing the selectivity of urea, amide,…, Computers in biology and me… (2025) | pd | 5 | [10.1016/j.compbiomed.2025.111279](https://doi.org/10.1016/j.compbiomed.2025.111279) | [41223648](https://www.ncbi.nlm.nih.gov/pubmed/41223648) | metadata signals extractable PD data (IC50) |
| `Catalán-Latorre_2011.pdf` | Catalán-Latorre A et al., In situ study of the effect of naringin…, Basic & clinical pharmacolo… (2011) | pd | 5 | [10.1111/j.1742-7843.2011.00714.x](https://doi.org/10.1111/j.1742-7843.2011.00714.x) | [21535410](https://www.ncbi.nlm.nih.gov/pubmed/21535410) | metadata signals extractable PD data (IC50) |
| `El_2004.pdf` | El Ela AA et al., Identification of P-glycoprotein substr…, The Journal of pharmacy and… (2004) | pd | 5 | [10.1211/0022357043969](https://doi.org/10.1211/0022357043969) | [15285840](https://www.ncbi.nlm.nih.gov/pubmed/15285840) | metadata signals extractable PD data (IC50) |
| `Ofer_2005.pdf` | Ofer M et al., Modulation of drug transport by selecte…, European journal of pharmac… (2005) | pd | 5 | [10.1016/j.ejps.2005.03.001](https://doi.org/10.1016/j.ejps.2005.03.001) | [15911222](https://www.ncbi.nlm.nih.gov/pubmed/15911222) | metadata signals extractable PD data (IC50) |
| `Tubic_2006.pdf` | Tubic M et al., In silico modeling of non-linear drug a…, Pharmaceutical research (2006) | pd | 5 | [10.1007/s11095-006-9020-7](https://doi.org/10.1007/s11095-006-9020-7) | [16832615](https://www.ncbi.nlm.nih.gov/pubmed/16832615) | metadata signals extractable PD data (Emax) |
| `Bodewei_1988.pdf` | Bodewei R et al., [Calcium current effects in the presenc…, Biomedica biochimica acta (1988) | pd | 4 | not captured | [2845962](https://www.ncbi.nlm.nih.gov/pubmed/2845962) | metadata signals extractable PD data (IC50) |
| `Mertens-Talcott_2007.pdf` | Mertens-Talcott SU et al., Polymethoxylated flavones and other phe…, Journal of agricultural and… (2007) | pd | 4 | [10.1021/jf063138v](https://doi.org/10.1021/jf063138v) | [17348674](https://www.ncbi.nlm.nih.gov/pubmed/17348674) | metadata signals extractable PD data (sigmoid) |
| `Richter_2004.pdf` | Richter M et al., Comparative effects on intestinal absor…, Pharmaceutical research (2004) | pd | 4 | [10.1023/b:pham.0000045240.81664.be](https://doi.org/10.1023/b:pham.0000045240.81664.be) | [15553233](https://www.ncbi.nlm.nih.gov/pubmed/15553233) | metadata signals extractable PD data (IC50) |
| `Bernsdorf_2006.pdf` | Bernsdorf A et al., Simvastatin does not influence the inte…, British journal of clinical… (2006) | pgx | 8 | [10.1111/j.1365-2125.2006.02599.x](https://doi.org/10.1111/j.1365-2125.2006.02599.x) | [16542205](https://www.ncbi.nlm.nih.gov/pubmed/16542205) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Haenisch_2008.pdf` | Haenisch S et al., Influence of genetic polymorphisms on i…, Pharmacogenetics and genomi… (2008) | pgx | 8 | [10.1097/FPC.0b013e3282f974b7](https://doi.org/10.1097/FPC.0b013e3282f974b7) | [18334920](https://www.ncbi.nlm.nih.gov/pubmed/18334920) | metadata signals extractable PGX data (ABCC2, PK/PD-context) |
| `He_2012.pdf` | He X et al., Effects of curcumin on the pharmacokine…, Xenobiotica; the fate of fo… (2012) | pgx | 8 | [10.3109/00498254.2012.697590](https://doi.org/10.3109/00498254.2012.697590) | [22725663](https://www.ncbi.nlm.nih.gov/pubmed/22725663) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Oswald_2011.pdf` | Oswald S et al., In vivo probes of drug transport: commo…, Handbook of experimental ph… (2011) | pgx | 8 | [10.1007/978-3-642-14541-4_11](https://doi.org/10.1007/978-3-642-14541-4_11) | [21103977](https://www.ncbi.nlm.nih.gov/pubmed/21103977) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Brueck_2019.pdf` | Brueck S et al., Transcriptional and Post-Transcriptiona…, Molecular pharmaceutics (2019) | pgx | 7 | [10.1021/acs.molpharmaceut.9b00458](https://doi.org/10.1021/acs.molpharmaceut.9b00458) | [31361500](https://www.ncbi.nlm.nih.gov/pubmed/31361500) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Elgart_2013.pdf` | Elgart A et al., Improved oral bioavailability of BCS cl…, Pharmaceutical research (2013) | pgx | 7 | [10.1007/s11095-013-1063-y](https://doi.org/10.1007/s11095-013-1063-y) | [23686373](https://www.ncbi.nlm.nih.gov/pubmed/23686373) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Giessmann_2004.pdf` | Giessmann T et al., Carbamazepine regulates intestinal P-gl…, Clinical pharmacology and t… (2004) | pgx | 7 | [10.1016/j.clpt.2004.04.011](https://doi.org/10.1016/j.clpt.2004.04.011) | [15371980](https://www.ncbi.nlm.nih.gov/pubmed/15371980) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Iwanaga_2012.pdf` | Iwanaga K et al., Effects of furanocoumarins in Kampo ext…, Archives of pharmacal resea… (2012) | pgx | 7 | [10.1007/s12272-012-0613-x](https://doi.org/10.1007/s12272-012-0613-x) | [22870815](https://www.ncbi.nlm.nih.gov/pubmed/22870815) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Qian_2019.pdf` | Qian CQ et al., Simultaneously predict pharmacokinetic…, European journal of pharmac… (2019) | pgx | 7 | [10.1016/j.ejps.2019.04.026](https://doi.org/10.1016/j.ejps.2019.04.026) | [31047967](https://www.ncbi.nlm.nih.gov/pubmed/31047967) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Unger_2013.pdf` | Unger M, Pharmacokinetic drug interactions invol…, Drug metabolism reviews (2013) | pgx | 7 | [10.3109/03602532.2013.815200](https://doi.org/10.3109/03602532.2013.815200) | [23865865](https://www.ncbi.nlm.nih.gov/pubmed/23865865) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Zschiesche_2002.pdf` | Zschiesche M et al., Stereoselective disposition of talinolo…, Journal of pharmaceutical s… (2002) | pgx | 7 | [10.1002/jps.10054](https://doi.org/10.1002/jps.10054) | [11835190](https://www.ncbi.nlm.nih.gov/pubmed/11835190) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `May_2008.pdf` | May K et al., Role of the multidrug transporter prote…, Drug metabolism and disposi… (2008) | pgx | 5 | [10.1124/dmd.107.019448](https://doi.org/10.1124/dmd.107.019448) | [18195111](https://www.ncbi.nlm.nih.gov/pubmed/18195111) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-15T03:47:47.851308+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bakshi_2025 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| PD | Bakshi_2025 | not_relevant | 0 | 0 | The paper is a computational study on EPHX inhibitors and does not contain any pharmacodynamic or exposure-response data for talinolol. |
| popPK | Bodewei_1988 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Bodewei_1988 | not_relevant | 0 | 0 | The paper studies the effects of propranolol on calcium currents in cell lines, not talinolol, and does not report any pharmacodynamic parameters for talinolol. |
| PGx | Brueck_2019 | not_relevant | 2 | 0 | The study investigates pharmacogenetic effects of enzyme induction by rifampin and carbamazepine on drug transporters and PK parameters, rather than the effect of a specific gene variant/genotype on the pharmacokinetics of talinolol. |
| PGx | Brück_2017 | not_relevant | 0 | 0 | The paper investigates transporter induction and expression in Caco-2 cells, not pharmacogenomic effects of genetic variants on talinolol PK/PD. |
| popPK | Catalán-Latorre_2011 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Catalán-Latorre_2011 | not_relevant | 0 | 0 | The study focuses on the effect of naringin, talinolol, and undernutrition on the intestinal absorption (PK) of saquinavir, not on the pharmacodynamic or exposure-response relationship of talinolol itself. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of febuxostat, not talinolol. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of febuxostat, including absorption and food effects, and does not report any pharmacodynamic (PD) or exposure-response data for talinolol or any other drug. |
| popPK | Cheung_2018 | irrelevant | 0 | 0 | The study models a series of seven other beta-blockers in rats, and talinolol is not mentioned or included in the dataset. |
| PD | Cheung_2018 | not_relevant | 0 | 0 | The paper focuses on physiologically based pharmacokinetic (PBPK) modeling of tissue distribution for beta-blockers and does not report any pharmacodynamic (PD) or exposure-response relationships for talinolol. |
| popPK | Chu_2023 | irrelevant | 0 | 0 | The paper describes in-vitro transporter studies (MDCK cells) for digoxin and cladribine, not a pharmacokinetic study of talinolol. |
| PD | Chu_2023 | not_relevant | 0 | 0 | The paper focuses on in vitro transporter inhibition (P-gp/BCRP) using cell models and does not report any pharmacodynamic or exposure-response data for talinolol. |
| popPK | Di_2008 | irrelevant | 0 | 0 | The paper is a review of St. John's Wort interactions and mentions talinolol only as a cardiovascular drug example without providing any original quantitative pharmacokinetic parameters. |
| PD | Di_2008 | not_relevant | 1 | 0 | The text is a review of St. John's Wort interactions and mentions talinolol only as an example of a cardiovascular drug, without providing any specific pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| PGx | Di_2008 | not_relevant | 1 | 0 | The paper is a review of St. John's Wort drug interactions and mentions talinolol only as an example, without reporting any gene variant, genotype, or pharmacogenomic effect on its pharmacokinetics. |
| popPK | El_2004 | irrelevant | 0 | 0 | Talinolol is used only as a radioligand/probe for P-glycoprotein assays, not as the subject drug for PK parameter estimation. |
| PD | El_2004 | not_relevant | 0 | 0 | The paper uses talinolol only as a radioligand for P-glycoprotein binding/transport assays and does not report any pharmacodynamic (exposure-response or dose-response) relationship for talinolol itself. |
| PGx | Elgart_2013 | not_relevant | 0 | 0 | The paper investigates formulation effects (SNEDDS) on pharmacokinetics, not the influence of genetic variants or genotypes. |
| popPK | Fendt_2023 | irrelevant | 0 | 0 | The study uses a cocktail of six drugs in mice to model cirrhosis mechanisms, and talinolol is not mentioned or identified as a subject drug. |
| PD | Fendt_2023 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetics (PBPK modeling) and drug metabolism in liver cirrhosis, reporting no pharmacodynamic or exposure-response relationships for talinolol. |
| PGx | Giessmann_2004 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (carbamazepine inducing transporters to affect talinolol PK) rather than the effect of a genetic variant on talinolol pharmacokinetics. |
| popPK | Hadigol_2026 | irrelevant | 0 | 0 | The paper analyzes the pharmacokinetics of talazoparib and enzalutamide, not talinolol. |
| PD | Hadigol_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis for talazoparib and enzalutamide, but does not contain any pharmacodynamic (PD) or exposure-response modeling or numeric PD parameters. |
| PGx | Han_2009 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (silymarin) rather than a pharmacogenomic effect, as the MDR1 polymorphism was not reported to significantly modify the pharmacokinetic parameters. |
| popPK | Heinroth_1983 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of talinolol on platelet aggregation and thromboxane formation, not its pharmacokinetic disposition parameters. |
| popPK | Ieiri_2004 | irrelevant | 0 | 0 | The paper is a review of MDR1 gene polymorphisms and does not report original quantitative pharmacokinetic parameters for talinolol. |
| PD | Ieiri_2004 | not_relevant | 1 | 0 | The text is a review discussing the role of MDR1 polymorphisms in drug disposition and mentions talinolol only as an example of a drug affected by these polymorphisms, without providing any specific pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| PGx | Ieiri_2004 | not_relevant | 2 | 0 | The text is a general overview of MDR1/ABCB1 and mentions talinolol only as an example of a drug with known polymorphism effects, without reporting specific data, studies, or quantitative PK/PD parameters. |
| popPK | Igarashi_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein substrate permeability in a microfluidic device, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for talinolol in a biological system. |
| PGx | Iwanaga_2012 | not_relevant | 0 | 5 | The study investigates drug-drug interactions with Kampo extracts and does not involve gene variants, genotypes, or pharmacogenomics. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper discusses herbal medicine-drug interactions, not pharmacogenomic variants affecting talinolol. |
| popPK | Kahl_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of alpha 2-acute phase globulin levels in rats, and talinolol is used only as a beta-1 antagonist comparator with no pharmacokinetic parameters reported. |
| PD | Kahl_1989 | not_relevant | 1 | 0 | The paper only qualitatively states that talinolol has no effect on alpha 2-APG levels and does not provide numeric PD parameters or concentration-effect data for talinolol. |
| popPK | Leisen_2003 | irrelevant | 0 | 0 | Talinolol is used only as a radioligand for P-glycoprotein binding assays, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Leisen_2003 | not_relevant | 0 | 0 | The paper studies baclofen ester prodrugs and uses talinolol only as a radioligand for P-glycoprotein binding assays; it does not report a pharmacodynamic or exposure-response relationship for talinolol itself. |
| popPK | Li_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of beta-lactam antibiotics (amoxicillin and cefaclor), not talinolol. |
| PD | Li_2009 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of beta-lactam antibiotics (amoxicillin and cefaclor) in the presence of cranberry juice and does not mention talinolol or report any pharmacodynamic or exposure-response relationships. |
| PGx | Long_2016 | not_relevant | 0 | 0 | The study investigates sex differences in talinolol pharmacokinetics and explicitly excludes the influence of P-gp genetic polymorphisms, rather than reporting an effect of a gene variant. |
| PGx | Ma_2010 | not_relevant | 0 | 0 | The paper is a review discussing the validation criteria for P-gp phenotyping probes and concludes that talinolol is not recommended for this purpose; it does not report specific pharmacogenomic effects on talinolol PK/PD. |
| PGx | Matthaei_2016 | not_relevant | 0 | 0 | The study concludes that talinolol pharmacokinetics are determined mainly by environmental factors, with no significant genetic contribution found. |
| PGx | May_2008 | not_relevant | 2 | 2 | The paper explicitly states that genetic polymorphisms of ABCB1 and ABCC2 lacked significant influence on talinolol permeability. |
| popPK | Mertens-Talcott_2007 | irrelevant | 0 | 0 | no_text gate: only 160 chars of text extracted (&lt; 400) |
| popPK | Mirfazaelian_2006 | irrelevant | 0 | 0 | This is a methodological study describing a software algorithm, using talinolol data from the literature only for validation without reporting new quantitative PK parameters. |
| PGx | Neuhoff_2003 | not_relevant | 0 | 0 | The paper investigates pH-dependent transport mechanisms in Caco-2 cells but does not report pharmacogenomic effects (gene variants/genotypes) on the PK or PD of talinolol. |
| popPK | Nikolenko_1981 | irrelevant | 0 | 0 | The study is a comparative pharmacodynamic assessment of beta-blockers in angina patients and does not report any pharmacokinetic parameters for talinolol. |
| PD | Nikolenko_1981 | not_relevant | 3 | 2 | The study compares two drugs qualitatively and reports relative effect differences (1.7, 2.6) without providing numeric concentration-effect curves, Emax, EC50, or individual dose-response data for talinolol. |
| popPK | Ofer_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of flavonoid interactions with transporters using talinolol as a probe substrate, not a pharmacokinetic study reporting disposition parameters. |
| PD | Ofer_2005 | not_relevant | 0 | 0 | The paper reports in vitro transport inhibition (IC50) of talinolol by flavonoids, which is a drug-drug interaction/transport study, not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| PGx | Oswald_2011 | not_relevant | 2 | 1 | The text discusses the utility of talinolol as a probe drug for P-glycoprotein function but does not report a specific pharmacogenomic effect (gene variant) on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Qian_2019 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic drug-drug interactions induced by rifampicin and does not report pharmacogenomic effects of a specific gene variant on talinolol. |
| popPK | Richter_2004 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Richter_2004 | not_relevant | 0 | 0 | The paper focuses on the effects of HIV protease inhibitors on intestinal absorption and does not report pharmacodynamic or exposure-response data for talinolol. |
| PGx | Saljé_2012 | not_relevant | 0 | 0 | The study investigates the effects of drug induction (e.g., rifampicin) on transporter expression and distribution in rats, which is pharmacodynamic/physiologically-based, not a pharmacogenomic effect driven by human genetic variation. |
| PGx | Schwarz_2005 | not_relevant | 0 | 0 | The paper explicitly states that MDR1 genotypes were not associated with altered talinolol pharmacokinetics. |
| popPK | Shirasaka_2010 | irrelevant | 2 | 0 | The study focuses on mechanistic transporter interactions (IC50 values) and qualitative absorption changes rather than reporting quantitative population pharmacokinetic parameters like clearance or volume of distribution. |
| PD | Shirasaka_2010 | not_relevant | 0 | 0 | The paper reports IC50 values for naringin inhibiting transporters (OATP/Mdr1), which are pharmacological parameters for the inhibitor, not pharmacodynamic parameters (e.g., Emax, EC50) for the drug talinolol itself. |
| popPK | Taskar_2020 | irrelevant | 0 | 0 | This is a review article focusing on PBPK modeling for transporter-mediated drug-drug interactions and does not report original quantitative pharmacokinetic parameters for talinolol. |
| PD | Taskar_2020 | not_relevant | 0 | 0 | The paper is a review of PBPK modeling for transporter-mediated drug-drug interactions and does not report any pharmacodynamic or exposure-response data for talinolol. |
| popPK | Tubic_2006 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PGx | Unger_2013 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic drug interactions with Ginkgo biloba, not pharmacogenomic effects of gene variants on talinolol. |
| popPK | Venkatasubramanian_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of morphine and its metabolites in children, not talinolol. |
| PD | Venkatasubramanian_2014 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of morphine in children and the influence of genotypes, containing no data or analysis regarding talinolol or any pharmacodynamic/exposure-response relationships. |
| popPK | Weiss_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ketamine, not talinolol. |
| PD | Weiss_2023 | not_relevant | 0 | 0 | The paper focuses on the PK absorption and dissolution of ketamine, not the pharmacodynamics or exposure-response of talinolol. |
| popPK | Yan_2013 | irrelevant | 4 | 2 | The study reports non-compartmental pharmacokinetic parameters (AUC, Cmax) rather than the required disposition parameters (clearance, volume, compartmental model) for talinolol. |
| PGx | Zhang_2005 | not_relevant | 5 | 8 | The study investigates the effect of MDR1 variants on talinolol PK but concludes there is no significant effect (P &gt; 0.05). |
| popPK | Zimmerman_2004 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics and drug interactions of sirolimus, not talinolol. |
| PD | Zimmerman_2004 | not_relevant | 0 | 0 | The paper discusses sirolimus, not talinolol, and does not report any PD parameters for the target drug. |
| PGx | Zschiesche_2002 | not_relevant | 0 | 0 | The study compares stereoisomers and the effect of a drug interaction (rifampicin), but does not report pharmacogenomic effects (gene variants) on talinolol PK/PD. |
| popPK | de_2007 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of P-gp inhibition in Caco-2 cells and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for talinolol. |
| PD | de_2007 | not_relevant | 0 | 0 | The paper reports in vitro P-gp inhibition IC50 values for grapefruit juice components, which is a transport mechanism study, not a pharmacodynamic (exposure-response) or dose-response analysis of talinolol's therapeutic effect. |
| PGx | de_2007 | not_relevant | 0 | 0 | The paper studies in vitro P-glycoprotein inhibition by grapefruit juice components in Caco-2 cells, not pharmacogenomic effects of human genetic variants on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
